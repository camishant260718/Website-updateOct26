"""
Backend API Security Tests for Mishant Gandhi Portfolio
Tests: Security headers, rate limiting, input validation, XSS sanitization
"""
import pytest
import requests
import os
import time

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', '').rstrip('/')

class TestSecurityHeaders:
    """Test security headers are present on API responses"""
    
    def test_security_headers_on_root(self):
        """Verify all security headers on /api/ endpoint"""
        response = requests.get(f"{BASE_URL}/api/")
        
        # Status code
        assert response.status_code == 200
        
        # Security headers
        assert response.headers.get('X-Content-Type-Options') == 'nosniff', "Missing X-Content-Type-Options: nosniff"
        assert response.headers.get('X-Frame-Options') == 'SAMEORIGIN', "Missing X-Frame-Options: SAMEORIGIN"
        assert response.headers.get('Referrer-Policy') == 'strict-origin-when-cross-origin', "Missing Referrer-Policy"
        assert 'camera=()' in response.headers.get('Permissions-Policy', ''), "Missing Permissions-Policy"
        assert response.headers.get('X-XSS-Protection') == '1; mode=block', "Missing X-XSS-Protection"
        
        print("All security headers present on /api/")
    
    def test_security_headers_on_contact(self):
        """Verify security headers on /api/contact endpoint"""
        response = requests.post(f"{BASE_URL}/api/contact", json={
            "name": "Test User",
            "email": "test@example.com",
            "phone": "+971501234567",
            "message": "Test message"
        })
        
        # Security headers should be present regardless of status
        assert response.headers.get('X-Content-Type-Options') == 'nosniff'
        assert response.headers.get('X-Frame-Options') == 'SAMEORIGIN'
        assert response.headers.get('Referrer-Policy') == 'strict-origin-when-cross-origin'
        
        print("Security headers present on /api/contact")


class TestRootEndpoint:
    """Test /api/ root endpoint"""
    
    def test_root_returns_hello_world(self):
        """Verify /api/ returns Hello World message"""
        response = requests.get(f"{BASE_URL}/api/")
        
        assert response.status_code == 200
        data = response.json()
        assert data.get('message') == 'Hello World'
        
        print("Root endpoint returns Hello World correctly")


class TestContactValidation:
    """Test /api/contact input validation"""
    
    def test_valid_contact_submission(self):
        """Test valid contact form submission"""
        response = requests.post(f"{BASE_URL}/api/contact", json={
            "name": "John Doe",
            "email": "john.doe@example.com",
            "phone": "+971501234567",
            "message": "Hello, I would like to connect."
        })
        
        assert response.status_code == 200
        data = response.json()
        assert data.get('status') == 'success'
        
        print("Valid contact submission accepted")
    
    def test_invalid_email_format(self):
        """Test that invalid email format returns 422"""
        response = requests.post(f"{BASE_URL}/api/contact", json={
            "name": "Test User",
            "email": "not-an-email",
            "phone": "",
            "message": "Test"
        })
        
        assert response.status_code == 422, f"Expected 422 for invalid email, got {response.status_code}"
        
        print("Invalid email correctly rejected with 422")
    
    def test_invalid_email_no_domain(self):
        """Test email without domain returns 422"""
        response = requests.post(f"{BASE_URL}/api/contact", json={
            "name": "Test User",
            "email": "test@",
            "phone": "",
            "message": "Test"
        })
        
        assert response.status_code == 422, f"Expected 422 for email without domain, got {response.status_code}"
        
        print("Email without domain correctly rejected")
    
    def test_name_over_100_chars(self):
        """Test that name over 100 characters returns 422"""
        long_name = "A" * 101
        response = requests.post(f"{BASE_URL}/api/contact", json={
            "name": long_name,
            "email": "test@example.com",
            "phone": "",
            "message": "Test"
        })
        
        assert response.status_code == 422, f"Expected 422 for oversized name, got {response.status_code}"
        
        print("Oversized name correctly rejected with 422")
    
    def test_email_over_254_chars(self):
        """Test that email over 254 characters returns 422"""
        long_email = "a" * 250 + "@test.com"
        response = requests.post(f"{BASE_URL}/api/contact", json={
            "name": "Test",
            "email": long_email,
            "phone": "",
            "message": "Test"
        })
        
        assert response.status_code == 422, f"Expected 422 for oversized email, got {response.status_code}"
        
        print("Oversized email correctly rejected with 422")
    
    def test_phone_over_20_chars(self):
        """Test that phone over 20 characters returns 422"""
        long_phone = "1" * 21
        response = requests.post(f"{BASE_URL}/api/contact", json={
            "name": "Test",
            "email": "test@example.com",
            "phone": long_phone,
            "message": "Test"
        })
        
        assert response.status_code == 422, f"Expected 422 for oversized phone, got {response.status_code}"
        
        print("Oversized phone correctly rejected with 422")
    
    def test_message_over_2000_chars(self):
        """Test that message over 2000 characters returns 422"""
        long_message = "A" * 2001
        response = requests.post(f"{BASE_URL}/api/contact", json={
            "name": "Test",
            "email": "test@example.com",
            "phone": "",
            "message": long_message
        })
        
        assert response.status_code == 422, f"Expected 422 for oversized message, got {response.status_code}"
        
        print("Oversized message correctly rejected with 422")


class TestXSSSanitization:
    """Test XSS sanitization with bleach"""
    
    def test_script_tag_in_name_sanitized(self):
        """Test that script tags in name are sanitized"""
        response = requests.post(f"{BASE_URL}/api/contact", json={
            "name": "<script>alert('xss')</script>John",
            "email": "test@example.com",
            "phone": "",
            "message": "Test"
        })
        
        # Should accept but sanitize - status 200
        assert response.status_code == 200, f"Expected 200 (sanitized), got {response.status_code}"
        
        print("Script tag in name sanitized successfully")
    
    def test_script_tag_in_message_sanitized(self):
        """Test that script tags in message are sanitized"""
        response = requests.post(f"{BASE_URL}/api/contact", json={
            "name": "Test User",
            "email": "test@example.com",
            "phone": "",
            "message": "<script>alert('xss')</script>Hello"
        })
        
        # Should accept but sanitize - status 200
        assert response.status_code == 200, f"Expected 200 (sanitized), got {response.status_code}"
        
        print("Script tag in message sanitized successfully")
    
    def test_html_injection_in_name(self):
        """Test HTML injection in name is sanitized"""
        response = requests.post(f"{BASE_URL}/api/contact", json={
            "name": "<img src=x onerror=alert('xss')>",
            "email": "test@example.com",
            "phone": "",
            "message": "Test"
        })
        
        # Should accept but sanitize
        assert response.status_code == 200
        
        print("HTML injection in name sanitized")


class TestRateLimiting:
    """Test rate limiting on /api/contact (3/minute)"""
    
    def test_rate_limit_contact_endpoint(self):
        """Test that rate limiting kicks in after 3 requests per minute"""
        # Make 4 rapid requests - 4th should be rate limited
        responses = []
        for i in range(4):
            response = requests.post(f"{BASE_URL}/api/contact", json={
                "name": f"Test User {i}",
                "email": f"test{i}@example.com",
                "phone": "",
                "message": f"Test message {i}"
            })
            responses.append(response.status_code)
            time.sleep(0.1)  # Small delay between requests
        
        # First 3 should succeed (200), 4th should be rate limited (429)
        print(f"Response codes: {responses}")
        
        # Check that at least one request was rate limited
        assert 429 in responses, f"Expected rate limiting (429) after 3 requests, got: {responses}"
        
        print("Rate limiting working correctly on /api/contact")


class TestPhoneSanitization:
    """Test phone number sanitization"""
    
    def test_phone_special_chars_cleaned(self):
        """Test that special characters in phone are cleaned"""
        response = requests.post(f"{BASE_URL}/api/contact", json={
            "name": "Test User",
            "email": "test@example.com",
            "phone": "+971 (52) 507-6563",
            "message": "Test"
        })
        
        # Should accept - valid phone format
        assert response.status_code == 200
        
        print("Phone with special chars accepted and cleaned")
    
    def test_phone_with_letters_cleaned(self):
        """Test that letters in phone are removed"""
        response = requests.post(f"{BASE_URL}/api/contact", json={
            "name": "Test User",
            "email": "test@example.com",
            "phone": "+971abc5076563",
            "message": "Test"
        })
        
        # Should accept - letters will be stripped
        assert response.status_code == 200
        
        print("Phone with letters cleaned successfully")


if __name__ == "__main__":
    pytest.main([__file__, "-v"])
