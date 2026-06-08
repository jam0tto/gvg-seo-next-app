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
- **Logo:** `public/GVG_logo.png` — gold globe + "GUIMOND VUKOVIC GROUP" white text on transparent background — actual dimensions 481×162px
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
- **API route:** `app/api/contact/route.ts` — handles all form submissions via Resend SDK
- **Internal routing:** All nav links use Next.js `Link`. Only external link in nav is "Sign Up Free" → `https://recruit.guimondvukovicgroup.com`
- **Hero images:** All present — `public/images/sports/*.jpg` (24 files) and `public/images/hero-{country}.jpg` (6 files)

---

## Pages: Built ✓ (all complete)

| Route | File | Notes |
|---|---|---|
| `/sports` | `app/sports/page.tsx` | Index page — hero with program copy, 4-column grid linking all 24 sport pages |
| `/` | `app/page.tsx` | Hero, stats, mission (with founder headshots), why-us, partner logo grid, regional hubs, CTA |
| `/news` | `app/news/page.tsx` | Stats, countries served, annual player review, testimonials, CTA |
| `/contact` | `app/contact/page.tsx` | Full athlete form, info panel with next-steps |
| `/faq` | `app/faq/page.tsx` | 12 Q&A pairs, native details/summary accordion |
| `/play-overseas-information` | `app/play-overseas-information/page.tsx` | Value prop, cost breakdown, founders with headshot photos, athlete form |
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

"Company" column in footer links to `/play-overseas-information`, `/recruitment`, `/undergraduate-studies`, `/faq`, `/news`. Privacy Policy link in copyright bar.

---

### 3. Sitemap ✓ DONE

`app/sitemap.ts` covers all static routes (including `/news`), 6 country pages, and 24 sport pages.

---

### 4. Images ✓ DONE

All images present in `public/images/`:
- 24 sport hero images (`sports/*.jpg`)
- 6 country hero images (`hero-{country}.jpg`)
- 6 country thumbnails (`{country}_thumbnail.jpg`) — used in hub page 3-packs
- Founder headshots: `derek_headshot.png` (322×483), `vlad_headshot.jpg` (325×309)
- Partner university logos (11): Essex, UWE, UEL, Bournemouth, ARU, DMU, Loughborough, Nottingham Trent, Derby, Hartpury, Newcastle
- Partner org logos (6): Tomasik, NCAA, U Sports, NAIA, BUCS, UCAS


---

### 5. GTM / GA / GSC (Analytics & Search Console) ✓ DONE

GA4 (`G-KZTFPX40N3`) and Google Ads (`AW-17496410069`) are live via a single `gtag.js` load in `app/layout.tsx` (the Weebly header had duplicate script loads — consolidated). Google Ads conversion event (`AW-17496410069/-FAVCJC49d8bENWP-JZB`) fires in `components/athlete-contact-form.tsx` on submit success, replacing the Weebly jQuery polling hack.

**GSC:** Verified at the DNS record level (no meta tag needed). There may also be a personal `google-site-verification` meta tag for a secondary GSC account — if one exists in `app/layout.tsx`, do NOT remove it.

---

### 6. SEO Redirects ✓ DONE (partial)

`next.config.ts` has 16 permanent (308) redirects:
- All Weebly `.html` pages → clean slugs (contact, faq, recruitment, undergraduate-studies, privacy-policy, play-overseas-information, african-students)
- `/indian-pakistani-and-se-asian-students` + `.html` variant → `/asian-students`
- `/{country}.html` → `/countries/{country}` for all 6 countries

**Blog/news redirects ✓ DONE:** `/news.html`, `/blog`, and all 3 blog post slugs → `/news`.

---

### 7. Screaming Frog SEO Issues ✓ DONE

Addressed via Screaming Frog crawl reports (`issues_overview_report_next.csv` / `issues_overview_report_weebly.csv`). Large image files were intentionally excluded.

**Security headers** (`next.config.ts`) — 4 headers now applied globally via `headers()`:
- `X-Frame-Options: SAMEORIGIN`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Content-Security-Policy` covering gtag, GA4, Google Ads domains

**Canonicals** — `metadataBase: new URL('https://www.guimondvukovicgroup.com')` added to root layout; `alternates: { canonical: '/path' }` added to all 41 pages.

**Page titles fixed:**
- Home + root layout: shortened to under 60 chars
- FAQ: "FAQ | ..." → "Frequently Asked Questions | ..."
- All 6 country pages: were 22–25 chars (below 30 minimum) → now 30–32 chars with `| Guimond Vukovic Group` suffix; this also resolved the title=H1 issue since titles now differ from the heroTitle H1
- 6 sport pages over 60 chars shortened: basketball, american-football, soccer, beach-volleyball, track-and-field, ultimate

**Meta descriptions** — 26 pages shortened to ≤155 chars (all main pages, all 6 country pages, 18 sport pages)

**Non-descriptive anchor text** (`app/page.tsx`) — "Learn more" links in regional hubs section → "Explore African student programs" / "Explore Asian student programs"

**H2 duplicate** (`app/asian-students/page.tsx`) — "Your Partner From Application to Arrival" (shared with african-students page) → "Your Dedicated Asian Student Support Team"

**Not addressed (intentional):**
- `Images: Missing Size Attributes` — all images use Next.js `<Image>` with `fill` prop; Screaming Frog flags this as missing HTML width/height attributes but Next.js uses CSS-based sizing instead, which is correct
- `Images: Over 100 KB` — excluded per user instruction
- `Content: Readability` — requires editorial rewriting, low ROI
- `Content: Low Content Pages` — needs editorial decision on which pages to expand
- `H2: Multiple` — not an issue per HTML spec; flagged as informational only

---

### 8. Contact Form Testing ✓ DONE

All 3 form types tested end-to-end and confirmed working:
- **General contact form** (`/contact`) — `formType: "contact"` → Derek. Subject: "New Contact Inquiry"
- **Play Overseas athlete form** (`/play-overseas-information`) — `formType: "play-overseas"` → Derek. Radio buttons for referral source, sport, and level played. Fires Google Ads conversion on submit.
- **Country form** (each `/countries/*` page) — `formType: "country"` → routes to country rep based on hidden `country` field.

Note: hub inquiry forms (`/african-students`, `/asian-students`) were not explicitly tested but share the same API route and pattern.

---

### 9. Deferred

- **`/news` images** — Weebly version is image-heavy; pull player/testimonial photos via browser devtools and add post-launch.
- **Blog article full content** — `/news` page exists. The 3 Weebly blog posts have not been built as full article pages. Summaries if needed later:
  - **Working in the U.K. Post-Grad** (`/blog/working-in-the-uk-post-grad` on Weebly) — UK Government initiative allowing international students to remain for two years post-degree.
  - **U.K. Ready to Play!** (`/blog/uk-ready-to-play` on Weebly) — BUCS statement on resumption of university athletics.
  - **National League Competitions** (`/blog/national-league-competitions` on Weebly) — Volleyball England announcement on competition resumption.

---

## Navigation (header)

Hover-dropdown nav (`components/header.tsx`). Mobile uses accordion expand/collapse.

- **Play Overseas** → `/play-overseas-information` (direct link)
- **African Students** → `/african-students` + dropdown: Nigeria, Kenya, Zambia
- **Asian Students** → `/asian-students` + dropdown: India, Pakistan, Nepal
- **Sports** → `/sports` + mega-menu dropdown (4-column grid, all 24 sports)
- **More** → dropdown only: Undergraduate Studies, Recruitment, FAQ, News, Contact

---

## Partner Universities & Organizations

**Universities (11):** University of Essex, University of West England (UWE), University of East London (UEL), Bournemouth University, Anglia Ruskin University, De Montfort University, Loughborough University, Nottingham Trent University, University of Derby, Hartpury University, Newcastle University

**Organizations (6):** Tomasik Agency, NCAA, U Sports, NAIA, British Universities & Colleges Sport (BUCS), UCAS

Logo files: `public/images/` — see `app/page.tsx` `universityPartners` and `orgPartners` arrays for exact filenames.

---

## Key Decisions Made

- **News page built** at `/news` — stats, countries served, annual player review (Tara Ziegelbein, Neysha Gonzalez, Tim Howell & Austin Butler), 5 testimonials, CTA. Blog article content deferred.
- **Partner section** on home page uses actual logo images in a split grid (universities / organizations), not text pills. Loughborough logo has `scale-150` applied due to excess whitespace in the image file.
- **Founder headshots** on home page (circular crop) and `/play-overseas-information` (full card photo, h-64, object-cover object-top).
- **Logo dimensions** corrected to actual 481×162 in both header and footer — was incorrectly set to 80×48 causing blur.
- **Asian students URL** simplified from `/indian-pakistani-and-se-asian-students` to `/asian-students`.
- **Header/Footer in root layout** — not in SportPageLayout or CountryPageLayout.
- **Sports pages** exist on the new app but not the Weebly site — new SEO pages.
- **Header/Footer dark** (`bg-slate-900`) — required for the gold/white logo to be visible.
- **Athlete form** is a separate component from the country-page contact form — different field sets.
- **Hub page inquiry forms** co-located as `inquiry-form.tsx` next to their `page.tsx` to keep server components clean for metadata.
- **Header dropdowns** use CSS `group-hover` (no JS for desktop); `pt-2` transparent bridge prevents the dropdown from closing when moving the mouse from trigger to panel. Sports uses a mega-menu (4 cols, 560px wide) centered under its trigger.
- **No "Home" link** in header — removed per design decision.
- **No "Sign Up Free" button** in header — removed per design decision.
