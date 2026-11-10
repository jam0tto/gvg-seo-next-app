import type { MetadataRoute } from "next"

const BASE_URL = "https://www.guimondvukovicgroup.com"

// ⚠️ THESE DATES ARE SET BY HAND. They do not update automatically.
// When a page's content changes, set its date below to that day (YYYY-MM-DD)
// in the same change. Read "SITEMAP DATES" in AGENTS.md for the rules.

// The day the current content went live. Set this to the cutover date at launch.
const LAUNCH_DATE = "2026-11-09"

// Every indexable page, mapped to the date its content last meaningfully changed.
// Adding a page? Add it here too.
const pages: Record<string, string> = {
  "/": LAUNCH_DATE,
  "/play-overseas-information": LAUNCH_DATE,
  "/finance-and-financial-aid": LAUNCH_DATE,
  "/ncaa-naia-usports": LAUNCH_DATE,
  "/playing-professionally-overseas": LAUNCH_DATE,
  "/african-students": LAUNCH_DATE,
  "/asian-students": LAUNCH_DATE,
  "/sports": LAUNCH_DATE,
  "/recruitment": LAUNCH_DATE,
  "/undergraduate-studies": LAUNCH_DATE,
  "/contact": LAUNCH_DATE,
  "/faq": LAUNCH_DATE,
  "/news": LAUNCH_DATE,
  "/privacy-policy": LAUNCH_DATE,

  "/countries/nigeria": LAUNCH_DATE,
  "/countries/kenya": LAUNCH_DATE,
  "/countries/zambia": LAUNCH_DATE,
  "/countries/india": LAUNCH_DATE,
  "/countries/nepal": LAUNCH_DATE,
  "/countries/pakistan": LAUNCH_DATE,

  "/sports/basketball": LAUNCH_DATE,
  "/sports/volleyball": LAUNCH_DATE,
  "/sports/soccer": LAUNCH_DATE,
  "/sports/american-football": LAUNCH_DATE,
  "/sports/rugby": LAUNCH_DATE,
  "/sports/lacrosse": LAUNCH_DATE,
  "/sports/water-polo": LAUNCH_DATE,
  "/sports/field-hockey": LAUNCH_DATE,
  "/sports/ice-hockey": LAUNCH_DATE,
  "/sports/netball": LAUNCH_DATE,
  "/sports/beach-volleyball": LAUNCH_DATE,
  "/sports/tennis": LAUNCH_DATE,
  "/sports/swimming": LAUNCH_DATE,
  "/sports/diving": LAUNCH_DATE,
  "/sports/track-and-field": LAUNCH_DATE,
  "/sports/cross-country": LAUNCH_DATE,
  "/sports/golf": LAUNCH_DATE,
  "/sports/squash": LAUNCH_DATE,
  "/sports/badminton": LAUNCH_DATE,
  "/sports/martial-arts": LAUNCH_DATE,
  "/sports/judo": LAUNCH_DATE,
  "/sports/taekwondo": LAUNCH_DATE,
  "/sports/cheer": LAUNCH_DATE,
  "/sports/ultimate": LAUNCH_DATE,
}

export default function sitemap(): MetadataRoute.Sitemap {
  return Object.entries(pages).map(([path, lastModified]) => ({
    url: path === "/" ? BASE_URL : `${BASE_URL}${path}`,
    lastModified,
  }))
}
