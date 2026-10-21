from fastapi import FastAPI, APIRouter, HTTPException, Request
from fastapi.middleware.trustedhost import TrustedHostMiddleware
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from starlette.middleware.base import BaseHTTPMiddleware
from starlette.responses import Response
from motor.motor_asyncio import AsyncIOMotorClient
from slowapi import Limiter
from slowapi.util import get_remote_address
from slowapi.errors import RateLimitExceeded
import os
import re
import logging
import bleach
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, field_validator
from typing import List
import uuid
from datetime import datetime, timezone

# Configure logging first
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Rate limiter — uses client IP, compatible with Cloudflare (reads X-Forwarded-For)
limiter = Limiter(key_func=get_remote_address)

# Create the main app
app = FastAPI(docs_url=None, redoc_url=None)
app.state.limiter = limiter


# ── Security Headers Middleware ──
class SecurityHeadersMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next):
        response: Response = await call_next(request)
        response.headers["X-Content-Type-Options"] = "nosniff"
        response.headers["X-Frame-Options"] = "SAMEORIGIN"
        response.headers["Referrer-Policy"] = "strict-origin-when-cross-origin"
        response.headers["Permissions-Policy"] = "camera=(), microphone=(), geolocation=()"
        response.headers["X-XSS-Protection"] = "1; mode=block"
        return response

app.add_middleware(SecurityHeadersMiddleware)

# ── CORS — restrict to known origins ──
allowed_origins = os.environ.get('CORS_ORIGINS', '*').split(',')
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=allowed_origins,
    allow_methods=["GET", "POST"],
    allow_headers=["Content-Type", "Authorization"],
)

# ── Rate limit error handler ──
@app.exception_handler(RateLimitExceeded)
async def rate_limit_handler(request: Request, exc: RateLimitExceeded):
    return Response(
        content='{"detail":"Too many requests. Please try again later."}',
        status_code=429,
        media_type="application/json",
    )


# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

MAX_NAME_LEN = 100
MAX_EMAIL_LEN = 254
MAX_PHONE_LEN = 20
MAX_MESSAGE_LEN = 2000
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$')


# ── Models ──
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str = Field(max_length=MAX_NAME_LEN)

class ContactFormRequest(BaseModel):
    name: str = Field(max_length=MAX_NAME_LEN)
    email: str = Field(max_length=MAX_EMAIL_LEN)
    phone: str = Field(default="", max_length=MAX_PHONE_LEN)
    message: str = Field(default="", max_length=MAX_MESSAGE_LEN)

    @field_validator('name')
    @classmethod
    def sanitize_name(cls, v):
        return bleach.clean(v.strip())

    @field_validator('email')
    @classmethod
    def validate_email(cls, v):
        v = v.strip().lower()
        if not EMAIL_REGEX.match(v):
            raise ValueError('Invalid email address')
        return v

    @field_validator('phone')
    @classmethod
    def sanitize_phone(cls, v):
        cleaned = re.sub(r'[^\d+\-() ]', '', v.strip())
        return cleaned

    @field_validator('message')
    @classmethod
    def sanitize_message(cls, v):
        return bleach.clean(v.strip())


# ── Routes ──
@api_router.get("/")
async def root() -> dict:
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
@limiter.limit("10/minute")
async def create_status_check(request: Request, input: StatusCheckCreate) -> StatusCheck:
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks() -> List[StatusCheck]:
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(100)
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    return status_checks

@api_router.post("/contact")
@limiter.limit("3/minute")
async def send_contact_email(request: Request, req: ContactFormRequest):
    logger.info(f"Contact form submission from {req.name} ({req.email})")
    return {"status": "success", "message": "Your message has been received."}


# Include the router
app.include_router(api_router)

@app.on_event("shutdown")
async def shutdown_db_client() -> None:
    client.close()
