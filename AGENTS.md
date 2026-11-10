<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# ⚠️ SITEMAP DATES: UPDATE THEM WHENEVER CONTENT CHANGES ⚠️

Every page's `lastModified` date in `app/sitemap.ts` is **set by hand and never updates on its own.** Google only trusts sitemap dates that change when content actually changes, so a stale or blanket-bumped date weakens the whole sitemap.

- **Changed a page's content?** Set that page's date in `app/sitemap.ts` to today's date (YYYY-MM-DD) **in the same change.** Content means anything a visitor or search engine reads: copy, headings, images, FAQs, stats, or the page's title or description metadata.
- **Changed shared content** (for example the copy in `components/sport-page-layout.tsx` or `components/country-page-layout.tsx`)? Update the date of **every page that shows it.**
- **Don't bump dates** for changes that leave what's on the page the same: styling, refactors, dependency upgrades, or redirects.
- **Added a page?** Add it to the `pages` map in `app/sitemap.ts` with today's date. **Removed one?** Remove it from the map.
- **On launch day:** set `LAUNCH_DATE` in `app/sitemap.ts` to the date the domain switches from Weebly.
