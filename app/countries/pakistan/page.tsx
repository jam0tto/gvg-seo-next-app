import { Metadata } from "next"
import { CountryPageLayout } from "@/components/country-page-layout"

export const metadata: Metadata = {
  title: "Study Abroad from Pakistan | Guimond Vukovic Group",
  description: "Expert guidance for Pakistani students seeking education in the UK and beyond. Free university application support, visa guidance, and scholarship advice from GVG.",
  keywords: ["study abroad Pakistan", "Pakistani students UK", "study in Australia from Pakistan", "UCAS application Pakistan", "Pakistani student visa", "scholarship for Pakistani students", "international education Pakistan", "study in Canada from Pakistan"],
  alternates: { canonical: "/countries/pakistan" },
  openGraph: {
    title: "Study Abroad from Pakistan | Guimond Vukovic Group",
    description: "Expert guidance for Pakistani students seeking international education in the UK, Australia, Canada, and beyond.",
  },
}

const pakistanData = {
  country: "Pakistan",
  region: "asia" as const,
  heroTitle: "Study Abroad from Pakistan",
  heroSubtitle: "Your pathway to world-class international education. We provide dedicated support for Pakistani students seeking to study at top universities in the UK, Australia, Canada, and beyond.",
  heroImage: "/images/hero-pakistan.jpg",
  introText: "Pakistan is home to ambitious, talented students ready to excel on the global stage. The Guimond Vukovic Group Pakistan provides expert guidance tailored to the unique needs of Pakistani students and families navigating international education opportunities. Our team offers personalized counseling, comprehensive application support, and dedicated visa assistance to ensure your success in reaching your educational goals abroad.",
  marketInsights: [
    "Pakistani students demonstrate strong academic foundations, particularly in engineering, business, and medical fields.",
    "The UK remains a top destination due to quality education, shorter program durations, and established Pakistani communities.",
    "Australia and Canada are increasingly popular due to post-study work opportunities and immigration pathways.",
    "Financial planning and scholarship opportunities are critical factors in university and destination selection.",
    "Students benefit from structured guidance through visa processes, which can be complex for certain destinations.",
    "Family involvement in education decisions is significant, requiring clear communication of benefits and outcomes.",
  ],
  services: [
    {
      title: "Personalized Counseling",
      description: "One-on-one guidance to understand your goals, evaluate options, and create a clear path to your ideal university.",
    },
    {
      title: "Application Management",
      description: "Complete support with university applications, including personal statements, essays, and document preparation.",
    },
    {
      title: "Visa Assistance",
      description: "Expert guidance through visa requirements with careful attention to documentation and interview preparation.",
    },
    {
      title: "Funding Guidance",
      description: "Help identifying scholarships, education loans, and affordable university options that fit your budget.",
    },
    {
      title: "Document Verification",
      description: "Support with credential evaluation, attestation requirements, and document preparation for international applications.",
    },
    {
      title: "Pre-Departure Services",
      description: "Comprehensive preparation including accommodation, travel, banking, and cultural orientation.",
    },
  ],
  whyChooseUs: [
    "Expert team with deep understanding of Pakistani educational backgrounds and documentation requirements",
    "Completely FREE services through our university partnerships",
    "Strong track record of visa approvals for Pakistani students",
    "Comprehensive scholarship guidance to make education affordable",
    "Support for students across Pakistan with accessible communication channels",
    "Ongoing mentorship from application through graduation",
  ],
  destinations: [
    "United Kingdom",
    "Australia",
    "Canada",
    "United States",
    "Germany",
    "Malaysia",
  ],
}

export default function PakistanPage() {
  return <CountryPageLayout {...pakistanData} />
}
