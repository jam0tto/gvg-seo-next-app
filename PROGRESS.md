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
- **Logo:** `public/GVG_logo.png` — gold globe + "GUIMOND VUKOVIC GROUP" white text on transparent background
- **Header/Footer background:** `bg-slate-900` (dark navy) — required because logo is gold/white on transparent

---

## Architecture

- **Framework:** Next.js 16.2.4, App Router, TypeScript, Tailwind CSS v4, shadcn/ui (radix-nova style)
- **Header/Footer:** Live in root layout (`app/layout.tsx`) — do NOT add them inside page components
- **Shared layout components:**
  - `components/sport-page-layout.tsx` — used by all 24 sports pages
  - `components/country-page-layout.tsx` — used by all 6 country pages
- **Contact form:** `components/contact-form.tsx` — used by country pages, `country` prop optional
- **Athlete contact form:** `components/athlete-contact-form.tsx` — full sport-focused form (Graduation Year, Sport, Major+GPA, Timezone, Phone, Comment) used by `/contact` and `/play-overseas-information`
- **Hub inquiry forms:** `app/african-students/inquiry-form.tsx` and `app/asian-students/inquiry-form.tsx` — simple "use client" forms (Name, Email, Country, Message) co-located with their pages
- **Internal routing:** All nav links use Next.js `Link`. Only external link in nav is "Sign Up Free" → `https://recruit.guimondvukovicgroup.com`
- **Hero images:** All present — `/public/images/sports/*.jpg` (24 files) and `/public/images/hero-{country}.jpg` (6 files)

---

## Pages: Built ✓ (all complete)

| Route | File | Notes |
|---|---|---|
| `/` | `app/page.tsx` | Hero, stats, mission, why-us, partners, regional hubs, CTA |
| `/contact` | `app/contact/page.tsx` | Full athlete form, info panel with next-steps |
| `/faq` | `app/faq/page.tsx` | 12 Q&A pairs, native details/summary accordion |
| `/play-overseas-information` | `app/play-overseas-information/page.tsx` | Value prop, cost breakdown, founders, athlete form |
| `/african-students` | `app/african-students/page.tsx` | Hub → Nigeria/Kenya/Zambia, inquiry form |
| `/asian-students` | `app/asian-students/page.tsx` | Hub → India/Pakistan/Nepal, inquiry form |
| `/recruitment` | `app/recruitment/page.tsx` | B2B page for university coaches, mailto CTA |
| `/undergraduate-studies` | `app/undergraduate-studies/page.tsx` | UCAS support page, 7 services, signup CTA |
| `/privacy-policy` | `app/privacy-policy/page.tsx` | Prose layout, last updated July 30 2020 |
| `/countries/nigeria` | `app/countries/nigeria/page.tsx` | CountryPageLayout |
| `/countries/kenya` | `app/countries/kenya/page.tsx` | CountryPageLayout |
| `/countries/zambia` | `app/countries/zambia/page.tsx` | CountryPageLayout |
| `/countries/india` | `app/countries/india/page.tsx` | CountryPageLayout |
| `/countries/nepal` | `app/countries/nepal/page.tsx` | CountryPageLayout |
| `/countries/pakistan` | `app/countries/pakistan/page.tsx` | CountryPageLayout |
| `/sports/basketball` | `app/sports/basketball/page.tsx` | SportPageLayout |
| `/sports/volleyball` | `app/sports/volleyball/page.tsx` | SportPageLayout |
| `/sports/soccer` | `app/sports/soccer/page.tsx` | SportPageLayout |
| `/sports/american-football` | `app/sports/american-football/page.tsx` | SportPageLayout |
| `/sports/rugby` | `app/sports/rugby/page.tsx` | SportPageLayout |
| `/sports/lacrosse` | `app/sports/lacrosse/page.tsx` | SportPageLayout |
| `/sports/water-polo` | `app/sports/water-polo/page.tsx` | SportPageLayout |
| `/sports/field-hockey` | `app/sports/field-hockey/page.tsx` | SportPageLayout |
| `/sports/ice-hockey` | `app/sports/ice-hockey/page.tsx` | SportPageLayout |
| `/sports/netball` | `app/sports/netball/page.tsx` | SportPageLayout |
| `/sports/beach-volleyball` | `app/sports/beach-volleyball/page.tsx` | SportPageLayout |
| `/sports/tennis` | `app/sports/tennis/page.tsx` | SportPageLayout |
| `/sports/swimming` | `app/sports/swimming/page.tsx` | SportPageLayout |
| `/sports/diving` | `app/sports/diving/page.tsx` | SportPageLayout |
| `/sports/track-and-field` | `app/sports/track-and-field/page.tsx` | SportPageLayout |
| `/sports/cross-country` | `app/sports/cross-country/page.tsx` | SportPageLayout |
| `/sports/golf` | `app/sports/golf/page.tsx` | SportPageLayout |
| `/sports/squash` | `app/sports/squash/page.tsx` | SportPageLayout |
| `/sports/badminton` | `app/sports/badminton/page.tsx` | SportPageLayout |
| `/sports/martial-arts` | `app/sports/martial-arts/page.tsx` | SportPageLayout |
| `/sports/judo` | `app/sports/judo/page.tsx` | SportPageLayout |
| `/sports/taekwondo` | `app/sports/taekwondo/page.tsx` | SportPageLayout |
| `/sports/cheer` | `app/sports/cheer/page.tsx` | SportPageLayout |
| `/sports/ultimate` | `app/sports/ultimate/page.tsx` | SportPageLayout |

---

## Remaining Work (priority order)

### 1. Form backend ✓ DONE

All forms POST to `app/api/contact/route.ts` via the Resend SDK. API key is in `.env.local`.

**Recipient routing (server-side map — client never dictates destination):**
- Nigeria → Jennifer Olawore `jennifer@guimondvukovicgroup.com`
- Zambia → Abigail Kaloonje Simpasa `kalonje.abigail@guimondvukovicgroup.com`
- Kenya → Dennis Nyariki `dennis.nyariki@guimondvukovicgroup.com`
- Pakistan → Ahmed Virk `ahmedvirk@guimondvukovicgroup.com`
- India → Mahesh Morampudi `mahesh@guimondvukovicgroup.com`
- Nepal → Riward Kc `riwardkc@guimondvukovicgroup.com`
- All other forms (athlete, african-hub, asian-hub) → `derek.guimond@guimondvukovicgroup.com`

**From:** `noreply@guimondvukovicgroup.com` (domain already verified in Resend on the account that owns this key)

---

### 2. Footer links ✓ DONE

Added "Company" column to footer with links to `/play-overseas-information`, `/recruitment`, `/undergraduate-studies`, `/faq`. Privacy Policy link added to copyright bar.

---

### 3. Sitemap ✓ DONE

`app/sitemap.ts` created. Covers all 9 static routes, 6 country pages, and 24 sport pages with appropriate priorities.

---

### 4. GTM / GA / GSC (Analytics & Search Console)

Check what Google Tag Manager, Google Analytics, and Google Search Console configuration exists on the Weebly site and reproduce in the Next.js app:
- Inspect Weebly site source HTML for GTM container IDs, GA measurement IDs, or GSC verification meta tags
- Add tracking scripts to `app/layout.tsx` using the Next.js `Script` component
- Add GSC domain verification meta tag to root layout metadata if needed

---

### 5. Intentionally skipped

- **Blog/News pages** — content is from 2020–2022, not worth recreating unless actively maintained.

---

## Navigation (header)

Current nav (8 items + CTA button):
- Home → `/`
- Play Overseas → `/play-overseas-information`
- African Students → `/african-students`
- Asian Students → `/asian-students`
- Undergraduate → `/undergraduate-studies`
- Recruitment → `/recruitment`
- FAQ → `/faq`
- Contact → `/contact`
- Sign Up Free (Button) → `https://recruit.guimondvukovicgroup.com` (external, new tab)

---

## Partner Universities & Organizations

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

- **Blog and News pages skipped** — content is from 2020–2022, very stale.
- **Asian students URL** simplified from `/indian-pakistani-and-se-asian-students` to `/asian-students`.
- **Header/Footer in root layout** — not in SportPageLayout or CountryPageLayout.
- **Sports pages** exist on the new app but not the Weebly site — new SEO pages.
- **Header/Footer dark** (`bg-slate-900`) — required for the gold/white logo to be visible.
- **Athlete form** is a separate component from the country-page contact form — different field sets.
- **Hub page inquiry forms** co-located as `inquiry-form.tsx` next to their `page.tsx` to keep server components clean for metadata.
