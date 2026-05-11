# GVG Next.js Migration — Progress Tracker

This file tracks what has been built and what remains, with enough context to continue without re-crawling the Weebly source site.

---

## Source Site

**Weebly:** https://www.guimondvukovicgroup.com  
**Signup portal (external, keep as external link):** https://recruit.guimondvukovicgroup.com

---

## Brand

- **Primary color:** Indigo 700 — `oklch(0.457 0.240 277.023)` (set in `app/globals.css` as `--primary`)
- **Accent color:** Indigo 600 — `oklch(0.511 0.262 276.97)` (set as `--accent`)
- **Dark mode primary:** Indigo 400 — `oklch(0.639 0.216 274.07)`
- **Logo:** Text only — "GVG" bold in `text-primary`, "Guimond Vukovic Group" in `text-muted-foreground`
- **No logo image file exists** — text-only in header and footer

---

## Architecture

- **Framework:** Next.js 16.2.4, App Router, TypeScript, Tailwind CSS v4, shadcn/ui (radix-nova style)
- **Header/Footer:** Live in root layout (`app/layout.tsx`) — do NOT add them inside page components
- **Shared layout components:**
  - `components/sport-page-layout.tsx` — used by all 25 sports pages
  - `components/country-page-layout.tsx` — used by all 6 country pages
- **Contact form:** `components/contact-form.tsx` — `country` prop is optional
- **Internal routing:** All nav links use Next.js `Link`. The only external link in nav is the "Sign Up Free" button → `https://recruit.guimondvukovicgroup.com`

---

## Pages: Built ✓

| Route | Notes |
|---|---|
| `/` | Home page — hero, stats, mission, why-us, partners, regional hubs, CTA |
| `/countries/nigeria` | CountryPageLayout |
| `/countries/kenya` | CountryPageLayout |
| `/countries/zambia` | CountryPageLayout |
| `/countries/india` | CountryPageLayout |
| `/countries/nepal` | CountryPageLayout |
| `/countries/pakistan` | CountryPageLayout |
| `/sports/basketball` | SportPageLayout |
| `/sports/volleyball` | SportPageLayout |
| `/sports/soccer` | SportPageLayout |
| `/sports/american-football` | SportPageLayout |
| `/sports/rugby` | SportPageLayout |
| `/sports/lacrosse` | SportPageLayout |
| `/sports/water-polo` | SportPageLayout |
| `/sports/field-hockey` | SportPageLayout |
| `/sports/ice-hockey` | SportPageLayout |
| `/sports/netball` | SportPageLayout |
| `/sports/beach-volleyball` | SportPageLayout |
| `/sports/tennis` | SportPageLayout |
| `/sports/swimming` | SportPageLayout |
| `/sports/diving` | SportPageLayout |
| `/sports/track-and-field` | SportPageLayout |
| `/sports/cross-country` | SportPageLayout |
| `/sports/golf` | SportPageLayout |
| `/sports/squash` | SportPageLayout |
| `/sports/badminton` | SportPageLayout |
| `/sports/martial-arts` | SportPageLayout |
| `/sports/judo` | SportPageLayout |
| `/sports/taekwondo` | SportPageLayout |
| `/sports/cheer` | SportPageLayout |
| `/sports/ultimate` | SportPageLayout |

---

## Pages: To Build

Ordered by priority. Content below is sourced from the Weebly site — use it directly rather than re-crawling.

---

### 1. `/contact`

**Weebly URL:** `/contact.html`

Form fields (required unless noted):
- First Name, Last Name
- Email
- Graduation Year
- Sport
- Major and GPA
- Current Time Zone
- Phone Number
- Comment (textarea)

No physical address or phone on the page. Encourage checking spam folder.
CTA text: "SIGN UP NOW FOR FREE"  
Note at bottom: check spam if no reply within a few days.

---

### 2. `/faq`

**Weebly URL:** `/faq.html`

12 Q&A pairs:

1. **Can I apply with a friend?** — "Absolutely, we encourage it."
2. **Can I apply with lower grades?** — Need a 2.5 GPA or above. A Master's can improve employability.
3. **Professional career vs. postgraduate study?** — UK study helps develop your game, get more video, make connections.
4. **Does Guimond Vukovic charge fees?** — "No, our services are absolutely free of charge!" Universities pay them.
5. **How long does a Master's take?** — Normally 12 months.
6. **What playing level is required?** — NCAA D1, D2, D3 and NAIA athletes have all been placed.
7. **Financing options?** — Universities offer academic and athletic scholarships. Full rides are rare; partial scholarships are available.
8. **Can I apply after graduation?** — Yes, for career restart or additional credentials.
9. **Work permissions?** — Masters students can work up to 20 hours/week.
10. **Undergraduate applicants?** — Contact for individual assessment; they do assist undergrads.
11. **Study options?** — Many fields beyond business, psychology, or humanities.
12. **Supported sports?** — Basketball, baseball, soccer, rowing, swimming, and 10+ others.

---

### 3. `/play-overseas-information`

**Weebly URL:** `/play-overseas-information.html`

Sections:
- **Value prop:** NCAA/NAIA athletes can earn a Master's in the UK with no eligibility restrictions; scholarship opportunities available.
- **The Founders** (Derek Guimond + Vladimir Vukovic bios — brief)
- **Basic costs:**
  - Master's tuition: £10,500–£22,500
  - Total 1-year cost: £15,675–£21,275
  - Accommodation: ~£5,500
  - Healthcare surcharge: £225
  - Student visa: ~£300
- **USA comparison:** US Master's typically costs $50,000/yr; UK is ~50% more affordable
- **CTA:** "GET YOUR FREE CONSULTATION TODAY" / "SIGN UP NOW FOR FREE"
- Contact form at bottom: "Tell us about yourself" (same fields as contact page)

---

### 4. `/african-students`

**Weebly URL:** `/african-students.html`

Hub page linking to Nigeria, Kenya, Zambia country pages.

Content:
- "If you are a prospective student from Africa please send us an enquiry below and we will be in touch regarding opportunities to study in the U.K."
- We typically secure scholarships providing 20–40% reductions in tuition costs.
- Local recruiters in Kenya, Nigeria, and Zambia; applications welcome from across Africa.
- Services are free.

Sub-pages: Nigeria, Kenya, Zambia (already built at `/countries/*`)
Simple contact/inquiry form (name, email, comment).

---

### 5. `/asian-students`

**Weebly URL:** `/indian-pakistani-and-se-asian-students.html`

Hub page linking to India, Pakistan, Nepal country pages.

Content:
- "If you are a prospective student from India, Pakistan, or Asia please send us an enquiry below and we will be in touch regarding opportunities to study in the U.K."
- Scholarships around 20–40% off tuition; services are totally free.

Sub-pages: India, Pakistan, Nepal (already built at `/countries/*`)
Simple contact/inquiry form (name, email, comment).

---

### 6. `/recruitment`

**Weebly URL:** `/recruitment.html`

Audience: university coaches and recruiters (B2B page).

Content:
- Headline: "Recruit with GVG" / "Choose the right Student-Athletes for Your University"
- GVG connects vetted student-athletes with universities — emphasizes "grit, motivation, and work ethic"
- Materials athletes submit: sporting and academic resumes, video highlights, recommendation letters
- GVG represents NCAA and NAIA athletes from USA and Canada
- Guides athletes through advisory, visa, and postgraduate stages
- Contact email: [email protected]

---

### 7. `/undergraduate-studies`

**Weebly URL:** `/undergraduate-studies.html`

Content:
- **Core offering:** Support for international students applying to UK undergraduate programs via UCAS
- **7 services:**
  1. UCAS application support with personal statement assistance
  2. Course and university selection guidance
  3. Personal statement coaching
  4. Document review and submission oversight
  5. Application tracking
  6. Visa and immigration assistance
  7. Pre-departure and orientation support
- **Value props:** Expert UCAS knowledge, personalized service, dedicated support, global experience
- **Getting started:** Free consultation → guided application → acceptance and visa support
- **What is UCAS?** — brief explainer section
- **FAQ section** — not specified in source; can reuse relevant FAQ items
- CTA: "Sign up for a FREE CONSULTATION"

---

### 8. `/privacy-policy` *(low priority)*

**Weebly URL:** `/privacy-policy.html`

Last updated: July 30, 2020.

Key points:
- Collects: name, email, phone, academic transcripts, personal ID, sports videos
- Data sourced from: users directly, and indirectly from coaches/teachers/parents
- Used for: processing applications, account management, promotional offers, negotiating professional deals
- Shared with: universities and professional teams (with user consent)
- Stored via: AWS and Google G Suite
- Retention: throughout engagement period, then deleted
- User rights: access, correct, erase, restrict, object, portability (1-month response time)
- Cookies: functionality and advertising cookies used
- Marketing opt-out available via unsubscribe or email

---

## Navigation (header)

Current nav items in `components/header.tsx`:
- Home → `/`
- Play Overseas → `/play-overseas-information`
- African Students → `/african-students`
- Asian Students → `/asian-students`
- FAQ → `/faq`
- Contact → `/contact`
- Sign Up Free button → `https://recruit.guimondvukovicgroup.com` (external, opens new tab)

Nav items NOT currently in header (could add after pages are built):
- Recruitment → `/recruitment`
- Undergraduate Studies → `/undergraduate-studies`

---

## Partner Universities & Organizations

(Used on home page; reuse wherever relevant)

- University of Essex
- University of West England (UWE)
- University of East London (UEL)
- Bournemouth University
- Anglia Ruskin University
- De Montfort University
- Loughborough University
- Nottingham Trent University
- Tomasik Agency
- NCAA
- NAIA
- British Universities & Colleges Sport (BUCS)

---

## Key Decisions Made

- **Blog and News pages skipped** — content is from 2020–2022, very stale, not worth recreating unless actively maintained going forward.
- **Asian students URL** simplified from `/indian-pakistani-and-se-asian-students` to `/asian-students`.
- **Header/Footer in root layout** — removed from `SportPageLayout` and `CountryPageLayout`; they now just return `<main>` elements.
- **Sports pages exist** on the new app but not on the Weebly site — these are new SEO pages, not migrations.
- **Contact form** (`components/contact-form.tsx`) has `country` as optional prop.
