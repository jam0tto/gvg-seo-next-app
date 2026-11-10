import type { Metadata } from "next"

export const SITE_NAME = "Guimond Vukovic Group"

export type OgImage = { url: string; alt: string }

// Share images are 1200×630 crops of each page's hero, in public/images/og/.
export const ogImages = {
  home: { url: "/images/og/home.jpg", alt: "Student athletes studying and playing sports in the UK" },
  london: { url: "/images/og/london.jpg", alt: "Tower Bridge and London skyline" },
  parliament: { url: "/images/og/parliament.jpg", alt: "Houses of Parliament and Westminster, London" },
} satisfies Record<string, OgImage>

export function sportOgImage(slug: string, sport: string): OgImage {
  return { url: `/images/og/sports-${slug}.jpg`, alt: `${sport} player abroad` }
}

export function countryOgImage(slug: string, country: string): OgImage {
  return { url: `/images/og/country-${slug}.jpg`, alt: `${country} landscape` }
}

type PageMetadataInput = {
  title: string
  description: string
  /** Path of the page, e.g. "/faq". Used for the canonical URL and og:url. */
  path: string
  image: OgImage
  keywords?: string[]
}

/**
 * Builds a page's full metadata from one set of values, so the title, description,
 * canonical, Open Graph and Twitter tags can't drift apart.
 */
export function pageMetadata({ title, description, path, image, keywords }: PageMetadataInput): Metadata {
  return {
    title,
    description,
    ...(keywords && { keywords }),
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: "en_US",
      url: path,
      title,
      description,
      images: [{ url: image.url, width: 1200, height: 630, alt: image.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: image.url, alt: image.alt }],
    },
  }
}
