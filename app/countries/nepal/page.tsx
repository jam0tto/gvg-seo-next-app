import { Metadata } from "next"
import { CountryPageLayout } from "@/components/country-page-layout"

export const metadata: Metadata = {
  title: "Study in the UK from Nepal | Guimond Vukovic Group",
  description: "Expert guidance for Nepali students pursuing education in the UK and beyond. Free university application support, visa guidance, and personalized counseling from GVG.",
  keywords: ["study abroad Nepal", "Nepali students UK", "study in Australia from Nepal", "IELTS preparation Nepal", "Nepali student visa", "scholarship for Nepali students", "international education Nepal", "Kathmandu study abroad"],
  alternates: { canonical: "/countries/nepal" },
  openGraph: {
    title: "Study Abroad from Nepal | Guimond Vukovic Group",
    description: "Expert guidance for Nepali students seeking international education in the UK, Australia, Canada, and beyond.",
  },
}

const nepalData = {
  country: "Nepal",
  region: "asia" as const,
  heroTitle: "Study Abroad from Nepal",
  heroSubtitle: "Transform your future with world-class international education. Our extensive network across Nepal ensures comprehensive support for students throughout the Kathmandu Valley and major provincial hubs.",
  heroImage: "/images/hero-nepal.jpg",
  introText: "The Guimond Vukovic Group maintains a robust presence across Nepal, ensuring comprehensive coverage and access to high-potential candidates throughout the country. Our approach focuses on personalized counseling and thorough documentation support, bridging the gap between local academic backgrounds and international requirements. By combining deep local expertise with global standards, we provide a trusted platform for Nepali students navigating the complexities of international education.",
  marketInsights: [
    "Extensive regional network across the Kathmandu Valley and major provincial hubs ensures accessible support for students nationwide.",
    "High-touch student engagement with personalized counseling addresses individual academic profiles and career aspirations.",
    "Strong demand for programs in business, IT, engineering, and healthcare from Nepali applicants.",
    "Students benefit from streamlined admissions management with rigorous vetting and high quality-control standards.",
    "Documentation support is critical for bridging local academic credentials with international university requirements.",
    "Post-study work opportunities in Australia, UK, and Canada are major factors in destination selection.",
  ],
  services: [
    {
      title: "High-Touch Counseling",
      description: "Personalized, one-on-one guidance tailored to your academic background, career goals, and financial considerations.",
    },
    {
      title: "Documentation Support",
      description: "Thorough assistance preparing and verifying documents to bridge local academic backgrounds with international standards.",
    },
    {
      title: "Admissions Management",
      description: "Rigorous vetting and recruitment process designed to maintain high quality-control and consistent success rates.",
    },
    {
      title: "Visa Preparation",
      description: "Comprehensive visa guidance with detailed support on requirements, interviews, and financial documentation.",
    },
    {
      title: "Test Preparation Guidance",
      description: "Advice on IELTS, PTE, and other English proficiency requirements needed for your target universities.",
    },
    {
      title: "Pre-Departure Support",
      description: "Complete preparation for life abroad including accommodation, travel arrangements, and cultural orientation.",
    },
  ],
  whyChooseUs: [
    "Extensive network across Nepal with presence in Kathmandu Valley and major provincial centers",
    "FREE services for Nepali students through our university partnerships",
    "Deep local expertise combined with global standards and best practices",
    "High success rates through rigorous quality-control and careful applicant vetting",
    "Personalized approach that addresses individual student needs and goals",
    "Ongoing support from application through graduation",
  ],
  destinations: [
    "Australia",
    "United Kingdom",
    "Canada",
    "United States",
    "Germany",
    "Japan",
  ],
}

export default function NepalPage() {
  return <CountryPageLayout {...nepalData} />
}
