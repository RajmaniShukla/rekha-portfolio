# Jyothi Rekha Sahoo — Portfolio Website
## Architecture & Development Plan

> **Last updated:** 2026-04-15
> **Tagline:** "Turning Connections into Conversions"
> **Repo:** D:\Projects\rekha-portfolio
> **Stack:** Next.js 14 · Tailwind CSS · Framer Motion · Sanity CMS · Vercel

---

## 1. Project Brief

| Field | Detail |
|-------|--------|
| Client | Jyothi Rekha Sahoo |
| Profession | Sales & Business Development + Influencer Marketing |
| Goal | Job hunting + Freelance BD clients + Personal brand + Influencer business |
| Target Audience | HR/Recruiters, Business Owners, Freelance Clients, Brand Collaborators |
| Tagline | "Turning Connections into Conversions" |
| Managed by | Raj (dev) + Rekha (content via CMS) |

---

## 2. Design Direction

### Color Palette
```
Primary:    #C9184A   — Deep Rose / Magenta (power, femininity, confidence)
Secondary:  #FF758F   — Soft Coral (warmth, approachability)
Accent:     #FFD700   — Gold (prestige, achievement)
Dark:       #1A1A2E   — Deep Navy (sophistication, contrast)
Light:      #FFF5F7   — Blush White (clean background)
Text:       #1A1A2E   — Deep Navy on light / #FFF5F7 on dark
```

### Typography
```
Display:  Playfair Display (editorial, artistic, personal brand feel)
Body:     Inter (clean, readable, professional)
Accent:   DM Sans (modern, for labels/badges)
```

### Design Style
- Editorial magazine layout — not a typical resume site
- Bold full-width sections with strong imagery
- Asymmetric grids (creative, not corporate)
- Smooth Framer Motion transitions (scroll reveals, page transitions)
- Dark hero + light content sections alternating
- Gold accent lines, rose hover states
- Mobile-first, immersive on desktop

### Reference Vibe
- Thinks: Vogue meets LinkedIn
- Personal brand sites like: Jasmine Star, Marie Forleo, Gary Vaynerchuk (but feminine/elegant)

---

## 3. Website Architecture

### Sitemap
```
/                     → Home (hero + brand statement + highlights)
/about                → Full story, values, personality
/experience           → Career timeline (interactive)
/skills               → Skills, expertise, tools
/services             → What she offers (BD, sales consulting, influencer collab)
/gallery              → Photos (headshots, events, speaking, lifestyle)
/influencer           → Influencer profile (stats, niches, brand collab info)
/contact              → Contact form + social links
/resume               → Resume viewer + PDF download
/blog                 → (Phase 2 — thought leadership)
/privacy-policy
```

### Navigation
```
Desktop Top Nav:
[Logo / Name]   About   Experience   Services   Influencer   Gallery   Contact   [Download CV]

Mobile (Bottom bar):
Home · About · Services · Gallery · Contact
```

---

## 4. Page-by-Page UX Design

### Homepage `/`
```
┌──────────────────────────────────────────┐
│  HERO (full screen, dark navy bg)        │
│  Large photo (artistic, editorial)       │
│  "Turning Connections into Conversions"  │
│  [View My Work]   [Let's Connect]        │
├──────────────────────────────────────────┤
│  MARQUEE STRIP                           │
│  Sales Strategy · BD · Influencer · ...  │
├──────────────────────────────────────────┤
│  ABOUT SNAPSHOT (2-col)                  │
│  Left: Bold statement paragraph          │
│  Right: Stats — 10+ yrs · 6 languages   │
│          · 5 industries                  │
├──────────────────────────────────────────┤
│  WHAT I DO (3 cards)                     │
│  Sales & BD | Influencer Mktg | Consult  │
├──────────────────────────────────────────┤
│  EXPERIENCE HIGHLIGHT (timeline strip)   │
├──────────────────────────────────────────┤
│  GALLERY PREVIEW (masonry, 6 photos)     │
├──────────────────────────────────────────┤
│  TESTIMONIALS (placeholder carousel)     │
├──────────────────────────────────────────┤
│  CTA SECTION — "Let's Work Together"     │
│  [Contact Me]   [Download Resume]        │
├──────────────────────────────────────────┤
│  FOOTER — social icons, email, tagline   │
└──────────────────────────────────────────┘
```

### About `/about`
```
- Full editorial hero with photo
- Personal story (narrative, not bullet points)
- Values section (3–4 core values with icons)
- Languages spoken (visual flag/badge layout)
- Education timeline
- Personal interests / personality glimpse
- CTA: "Work with me"
```

### Experience `/experience`
```
- Interactive vertical timeline
- Each role: Company · Title · Duration · Key bullets
- Filter by industry (Marketing / Sales / Real Estate / Operations)
- Roles:
  · Digital Marketing Manager — Kranjan Enterprises (2022–2023)
  · Business Development — Gleam Global Services (2020–2021)
  · Team Leader — CenterCADD India (2019–2020)
  · Executive Real Estate — BSNL House Society (2018)
  · Front Desk Security Officer — Dell R&D (2015–2017)
  · Front Office Executive — eBay-Paypal (2013–2015)
```

### Skills `/skills`
```
- Visual skill bars or tag clouds (not boring lists)
- Categories:
  · Sales & Strategy
  · Digital Marketing (CPC, RPM, VCPM)
  · Leadership & Team Management
  · CRM & Tools
  · Client Relations
  · Inventory Management
```

### Services `/services`
```
3 service cards:
1. Sales & Business Development
   — Strategy, lead gen, team leadership, B2B/B2C
2. Influencer Marketing
   — Brand collaborations, content strategy, audience growth
3. Consulting / Freelance BD
   — Project-based sales consulting for startups and SMEs

Each card: Icon + Title + Description + [Let's Talk] CTA
Pricing: On request (contact form pre-fills service selected)
```

### Influencer Profile `/influencer`
```
- Personal brand statement
- Niche tags (Sales / Lifestyle / Business / Motivation)
- Social platform cards (Instagram, LinkedIn, YouTube, Twitter/X, Facebook)
  · Each card: platform icon + handle + [placeholder] follower count
- Content style / what brands can expect
- Past collaborations (placeholder)
- Media kit download button (PDF — placeholder)
- Contact for collab CTA
```

### Gallery `/gallery`
```
- Masonry grid layout (Pinterest-style)
- Categories: All | Headshots | Events | Speaking | Lifestyle
- Lightbox on click (full image view)
- All images managed via Sanity CMS
```

### Contact `/contact`
```
- Split layout: left side brand statement, right side form
- Form fields:
  · Name
  · Email
  · Phone (optional)
  · Purpose: [Job Opportunity / Freelance Project / Brand Collab / Other]
  · Message
  · [Send Message] button
- Below form: Direct email + phone + social icons
- Embedded map (Gurgaon, Haryana area — approximate)
```

### Resume `/resume`
```
- Inline resume viewer (PDF embed or styled HTML version)
- Prominent [Download PDF] button
- Last updated date
```

---

## 5. Technology Stack

### Frontend
| Tool | Choice |
|------|--------|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS |
| Animation | Framer Motion (scroll reveals, page transitions, marquee) |
| Forms | React Hook Form + EmailJS (no backend needed) |
| Icons | Lucide React + React Icons (social platforms) |
| Lightbox | yet-another-react-lightbox |

### CMS — Sanity.io (Simple for Rekha)
```
Sanity Studio (visual editor — no code needed)
Schemas:
  Experience  { title, company, duration, bullets[], industry }
  Skill       { name, category, level }
  Service     { title, description, icon }
  GalleryItem { image, caption, category, date }
  Testimonial { name, role, company, quote, photo }
  SocialLink  { platform, handle, url, followerCount }
  SiteSettings { tagline, email, phone, resumeFile, metaDescription }
```

### Hosting & Services
| Service | Use | Cost |
|---------|-----|------|
| Vercel | Hosting | Free |
| Sanity Cloud | CMS | Free |
| EmailJS | Contact form emails | Free tier |
| Domain (.com/.in) | Personal domain | ~₹800–1500/yr |

---

## 6. Phase-wise Development Plan

### ⬜ Phase 1 — Core Portfolio (3–4 weeks)

#### Week 1 — Setup & Structure
- [ ] Next.js 14 + Tailwind + Framer Motion setup
- [ ] Global styles (colors, fonts, typography scale)
- [ ] Sanity CMS setup + all schemas
- [ ] Layout: Navbar + Footer components
- [ ] Homepage (Hero, About Snapshot, What I Do, CTA)

#### Week 2 — Content Pages
- [ ] About page
- [ ] Experience page (interactive timeline)
- [ ] Skills page
- [ ] Services page

#### Week 3 — Brand & Media Pages
- [ ] Influencer profile page
- [ ] Gallery page (masonry + lightbox + Sanity)
- [ ] Resume page (PDF viewer + download)
- [ ] Contact page + EmailJS integration

#### Week 4 — Polish & Launch
- [ ] Mobile responsiveness audit (all pages)
- [ ] Framer Motion animations (scroll reveals, hero entrance)
- [ ] SEO metadata per page (Open Graph, Twitter card)
- [ ] Loading states + 404 page
- [ ] Lighthouse audit > 90
- [ ] Deploy to Vercel + custom domain

---

### ⬜ Phase 2 — Growth Features (2–3 weeks)
- [ ] Blog / Articles section (thought leadership in sales & BD)
- [ ] Media kit page (downloadable PDF for brand collabs)
- [ ] Instagram feed embed (latest posts)
- [ ] LinkedIn recommendations pull / display
- [ ] Analytics (Google Analytics 4)
- [ ] Social sharing meta per page

### ⬜ Phase 3 — Scale
- [ ] Newsletter signup (Mailchimp or ConvertKit)
- [ ] Speaking/Events page
- [ ] Case studies (detailed BD project breakdowns)
- [ ] PWA (installable on phone)
- [ ] Booking system (Calendly embed for discovery calls)

---

## 7. SEO Strategy

### Personal Brand SEO
```
Target keywords:
  → "Jyothi Rekha Sahoo"
  → "Sales professional Gurgaon"
  → "Business development consultant India"
  → "Influencer marketing consultant"
  → "Sales team leader hire India"

Per-page metadata:
  Home:        "Jyothi Rekha Sahoo | Sales & BD Professional | Gurgaon"
  Experience:  "10+ Years in Sales & Business Development | Jyothi Rekha"
  Services:    "Sales Consulting & BD Services | Jyothi Rekha Sahoo"
  Influencer:  "Influencer Marketing Collaborations | Jyothi Rekha"
```

### Technical SEO
- Person JSON-LD schema on homepage
- Open Graph images (custom per page)
- Auto sitemap.xml via next-sitemap
- Canonical URLs
- robots.txt

---

## 8. Content Placeholders (to fill later)

| Section | Placeholder |
|---------|-------------|
| Achievement stats | "10+ Years Experience", "500+ Clients", etc. |
| Testimonials | 3–4 cards with "— Name, Company" |
| Gallery photos | 12–15 images (headshots, events, lifestyle) |
| Social follower counts | Instagram: X · LinkedIn: X · YouTube: X |
| Media kit PDF | To be created and uploaded |
| Blog posts | 0 at launch, add in Phase 2 |
| Past brand collabs | Add when available |

---

## 9. Key Files (once scaffolded)
```
src/
  app/
    [page]/page.tsx         ← all route pages
  components/
    ui/                     ← reusable (Button, Card, Badge)
    layout/                 ← Navbar, Footer
    sections/               ← HomeHero, Timeline, Gallery, etc.
  lib/
    sanity/client.ts        ← Sanity client
    sanity/queries.ts       ← all fetch helpers
    animations.ts           ← shared Framer Motion variants
  styles/
    globals.css
sanity/
  schemas/                  ← all Sanity schema files
  sanity.config.ts
```

---

## 10. Project Notes
- Repo: `D:\Projects\rekha-portfolio`
- Plan created: 2026-04-15
- Contact: jyothirekha17@gmail.com | +91 92898 53285 | Gurgaon, Haryana
- Resume on file: Jyothi Rekha Sahoo — Sales & Business Development Professional
- Same stack as NRV Enterprises — reuse animation variants, component patterns
