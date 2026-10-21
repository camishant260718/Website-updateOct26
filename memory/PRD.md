# Mishant Gandhi Portfolio - PRD

## Original Problem Statement
Build an elegant, minimal, and professional portfolio website for Mishant Gandhi, a senior finance professional (CA, CS) based in Dubai, UAE. Navy Blue (#003554) and Beige (#f5f1ed) color theme, transparent PNG profile photo, tabbed Experience/Education section, contact form via mailto.

## Architecture
- **Frontend**: React 19 + Tailwind CSS (via craco) + Inline styles + Lucide React icons
- **Backend**: FastAPI + MongoDB (stub endpoints, security headers, rate limiting)
- **Standalone HTML**: portfolio-standalone.html (for Cloudflare/Netlify deployment)
- **Hosting**: Cloudflare Pages, Domain via Namecheap

## What's Been Implemented
- [x] Header - Navy blue, LinkedIn + WhatsApp icons, pulsing green dot, gold underline active nav
- [x] Hero Section - Beige background, profile photo (WebP + PNG fallback), "Let's Collaborate" button
- [x] Skills Ribbon - Navy blue marquee with gold italic text
- [x] About Section - Soft beige, 2x2 interactive grid with hover effects
- [x] Skills Section - 4-column grid, 8 skill cards with progress bars
- [x] Experience/Education - Tabbed interface (6 experience + 4 education cards)
- [x] Contact Section - mailto form to mishant.gandhi@gmail.com, LinkedIn/WhatsApp links
- [x] Footer - Dark navy with MG monogram
- [x] WhatsApp floating FAB button
- [x] LinkedIn floating FAB button (above WhatsApp)
- [x] Code quality fixes (hook deps, magic numbers, sub-component extraction, useCallback)
- [x] Standalone HTML for Cloudflare/Netlify deployment
- [x] LinkedIn URL updated to linkedin.com/in/mishantgandhi
- [x] "Request My CV" button removed

## Security Implemented (Feb 2026)
- [x] Security headers middleware (X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy, X-XSS-Protection)
- [x] Rate limiting on /api/contact (3/min) and /api/status POST (10/min)
- [x] Input validation with Pydantic field_validators (email regex, max lengths)
- [x] XSS sanitization via bleach on name/message fields
- [x] CORS restricted to specific origins (mishantgandhi.com, preview URL)
- [x] API docs disabled (docs_url=None, redoc_url=None)
- [x] Form maxlength attributes (frontend + standalone HTML)
- [x] Contact form JS sanitization (standalone HTML)
- [x] Meta description and referrer policy updated

## Performance Optimized (Feb 2026)
- [x] WebP image (29KB) with PNG fallback (290KB) via picture element
- [x] Font preconnect hints already in place
- [x] Google Fonts display=swap for non-blocking load

## Key Emails
- Contact Form -> mailto:mishant.gandhi@gmail.com

## MOCKED
- Contact form uses `mailto:` protocol (opens visitor's email client)

## Cloudflare Recommendations (require external configuration)
- Enable Cloudflare Bot Fight Mode in dashboard
- Enable Under Attack Mode only during active attacks
- Set SSL/TLS to Full (Strict)
- Enable Auto Minify for JS/CSS/HTML in Speed settings
- Enable Brotli compression

## Backlog
- P2: Mobile responsive testing
- P3: SEO meta tags & favicon
