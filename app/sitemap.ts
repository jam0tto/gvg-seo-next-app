import { MetadataRoute } from "next"

const BASE_URL = "https://www.guimondvukovicgroup.com"

const sports = [
  "basketball", "volleyball", "soccer", "american-football", "rugby",
  "lacrosse", "water-polo", "field-hockey", "ice-hockey", "netball",
  "beach-volleyball", "tennis", "swimming", "diving", "track-and-field",
  "cross-country", "golf", "squash", "badminton", "martial-arts",
  "judo", "taekwondo", "cheer", "ultimate",
]

const countries = ["nigeria", "kenya", "zambia", "india", "nepal", "pakistan"]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/play-overseas-information`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/african-students`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/asian-students`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/recruitment`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/undergraduate-studies`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/news`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: `${BASE_URL}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ]

  const countryRoutes: MetadataRoute.Sitemap = countries.map((country) => ({
    url: `${BASE_URL}/countries/${country}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  const sportRoutes: MetadataRoute.Sitemap = sports.map((sport) => ({
    url: `${BASE_URL}/sports/${sport}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }))

  return [...staticRoutes, ...countryRoutes, ...sportRoutes]
}
