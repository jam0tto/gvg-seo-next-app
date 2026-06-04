import { Metadata } from "next"
import { CountryPageLayout } from "@/components/country-page-layout"

export const metadata: Metadata = {
  title: "Study in the UK from Kenya | Guimond Vukovic Group",
  description: "Expert guidance for Kenyan students pursuing education in the UK and Canada. Free university application support, visa guidance, and personalized counseling from GVG.",
  keywords: ["study abroad Kenya", "Kenyan students UK", "study in USA from Kenya", "UCAS application Kenya", "Kenyan student visa", "scholarship for Kenyan students", "international education Kenya"],
  alternates: { canonical: "/countries/kenya" },
  openGraph: {
    title: "Study Abroad from Kenya | Guimond Vukovic Group",
    description: "Expert guidance for Kenyan students pursuing international education in the UK, USA, Canada, and Australia.",
  },
}

const kenyaData = {
  country: "Kenya",
  region: "africa" as const,
  heroTitle: "Study Abroad from Kenya",
  heroSubtitle: "Unlock world-class education opportunities for Kenyan students. Our dedicated team provides personalized guidance to help you achieve your international academic and career goals.",
  heroImage: "/images/hero-kenya.jpg",
  introText: "Kenya has a strong tradition of academic excellence, producing globally competitive graduates who excel in international settings. The Guimond Vukovic Group Kenya connects ambitious Kenyan students with leading universities worldwide, offering personalized support that bridges local academic achievements with global opportunities. Our team provides end-to-end guidance, ensuring every step of your international education journey is handled with expertise and care.",
  marketInsights: [
    "Kenyan students demonstrate strong English proficiency and adaptability, making them excellent candidates for international programs.",
    "Growing demand for STEM, business, and healthcare programs among Kenyan applicants seeking global career opportunities.",
    "Students prioritize universities with strong industry connections and practical work experience opportunities.",
    "Post-study work options and pathways to permanent residency are key decision factors for Kenyan families.",
    "Interest in UK universities remains high due to the quality of education and shorter program durations.",
    "Rising interest in scholarship programs and universities offering flexible payment options.",
  ],
  services: [
    {
      title: "One-on-One Counseling",
      description: "Personalized guidance to choose the right career path, program, and destination based on your unique goals and qualifications.",
    },
    {
      title: "University Applications",
      description: "Expert support with UCAS, Common App, and direct university applications including compelling personal statements.",
    },
    {
      title: "Visa Support",
      description: "Comprehensive visa guidance with step-by-step support on requirements, timelines, and maximizing your success rate.",
    },
    {
      title: "Scholarship Guidance",
      description: "Help identifying and applying for scholarships, bursaries, and funding opportunities suited to your profile.",
    },
    {
      title: "Accommodation Planning",
      description: "Support finding safe, affordable housing options and understanding living expenses in your destination country.",
    },
    {
      title: "Post-Study Planning",
      description: "Information and guidance on post-study work permits, residency options, and career opportunities abroad.",
    },
  ],
  whyChooseUs: [
    "Local presence in Kenya with expert advisors who understand the East African education system",
    "Completely FREE services for Kenyan students through our university partnerships",
    "Direct relationships with top universities in the UK, USA, Canada, and Australia",
    "Comprehensive support from initial inquiry through to graduation",
    "Strong track record of successful placements for Kenyan students",
    "Honest, transparent advice prioritizing your long-term success",
  ],
  destinations: [
    "United Kingdom",
    "United States",
    "Canada",
    "Australia",
    "Ireland",
    "Germany",
  ],
}

export default function KenyaPage() {
  return <CountryPageLayout {...kenyaData} />
}
