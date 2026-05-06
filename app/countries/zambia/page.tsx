import { Metadata } from "next"
import { CountryPageLayout } from "@/components/country-page-layout"

export const metadata: Metadata = {
  title: "Study Abroad from Zambia",
  description: "Expert guidance for Zambian students seeking international education in the UK, Canada, Australia, and beyond. Free university application support, visa guidance, and affordable tuition options from GVG Zambia.",
  keywords: ["study abroad Zambia", "Zambian students UK", "study in Canada from Zambia", "UCAS application Zambia", "Zambian student visa", "scholarship for Zambian students", "international education Zambia", "Southern Africa study abroad"],
  openGraph: {
    title: "Study Abroad from Zambia | Guimond Vukovic Group",
    description: "Expert guidance for Zambian students seeking international education in the UK, Canada, Australia, and beyond.",
  },
}

const zambiaData = {
  country: "Zambia",
  region: "africa" as const,
  heroTitle: "Study Abroad from Zambia",
  heroSubtitle: "Your trusted partner for international education. We provide expert guidance and local support to help Zambian students achieve their dreams of studying at world-class universities.",
  heroImage: "/images/hero-zambia.jpg",
  introText: "The Guimond Vukovic Group serves Zambian students with personalized, expert guidance for international education opportunities. Our team combines deep local expertise with global standards to provide a trusted platform for students navigating the complexities of studying abroad. We understand the unique considerations of the Southern African market and offer comprehensive support including affordable tuition programs, accommodation assistance, and visa guidance.",
  marketInsights: [
    "Top study destinations for Zambian students include Australia, Canada, Germany, Ireland, the UK, and the USA.",
    "Affordable tuition programs and flexible payment plans are critical factors in university selection.",
    "Students seek universities with strong support systems for international students and clear pathways to employment.",
    "Understanding of cost-of-living and accommodation options plays a key role in destination decisions.",
    "Post-study work and residency pathways are increasingly important to Zambian families.",
    "Trust in local advisors familiar with the international student journey is essential for decision-making.",
  ],
  services: [
    {
      title: "Student Counseling",
      description: "One-on-one personalized guidance to choose the right career path, program, and destination aligned with your goals.",
    },
    {
      title: "Visa Guidance",
      description: "Step-by-step support with visa requirements, documentation, timelines, and strategies for maximizing approval success.",
    },
    {
      title: "Affordable Options",
      description: "Guidance on universities and programs that fit your budget, including institutions with flexible payment plans.",
    },
    {
      title: "Accommodation Support",
      description: "Help finding safe, affordable housing and understanding living expenses in your chosen destination.",
    },
    {
      title: "Application Management",
      description: "Complete support with university applications, personal statements, and document preparation.",
    },
    {
      title: "Post-Study Guidance",
      description: "Information on working and living abroad after graduation, including work permit and residency options.",
    },
  ],
  whyChooseUs: [
    "Expert local support from a team familiar with the international student journey",
    "Our services are completely FREE through university partnerships",
    "Focus on affordable tuition programs that fit your budget",
    "Comprehensive visa support with high success rates",
    "Guidance on post-study work and residency opportunities",
    "Trusted advice from initial consultation through graduation",
  ],
  destinations: [
    "Australia",
    "Canada",
    "United Kingdom",
    "Germany",
    "Ireland",
    "United States",
  ],
}

export default function ZambiaPage() {
  return <CountryPageLayout {...zambiaData} />
}
