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
- [x] WhatsApp + LinkedIn floating FAB buttons
- [x] LinkedIn URL: linkedin.com/in/mishantgandhi
- [x] "Request My CV" button removed

## Security (Feb 2026)
- [x] Security headers (X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy, X-XSS-Protection)
- [x] Rate limiting on /api/contact (3/min) and /api/status POST (10/min)
- [x] Input validation (email regex, max lengths), XSS sanitization (bleach)
- [x] CORS restricted to specific origins
- [x] API docs disabled, form maxlength attributes

## Responsive (Feb 2026)
- [x] Mobile (375px): Single column layouts, smaller FABs (44px), header icons visible
- [x] Tablet (768px): Experience cards single column, skills 2-col, header icons visible
- [x] Desktop (1920px): Full multi-column layouts unchanged
- [x] No horizontal overflow on any viewport
- [x] Mobile hamburger menu functional

## Performance (Feb 2026)
- [x] WebP image (29KB) with PNG fallback (290KB) via picture element

## MOCKED
- Contact form uses `mailto:` protocol (opens visitor's email client)

## Cloudflare Recommendations (external config)
- Enable Bot Fight Mode, SSL Full (Strict), Auto Minify, Brotli compression

## Backlog
- P3: SEO meta tags & favicon
