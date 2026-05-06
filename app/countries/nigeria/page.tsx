import { Metadata } from "next"
import { CountryPageLayout } from "@/components/country-page-layout"

export const metadata: Metadata = {
  title: "Study Abroad from Nigeria",
  description: "Expert guidance for Nigerian students seeking international education opportunities in the UK, Canada, USA, and beyond. Free university application support, visa guidance, and scholarship advice from GVG Nigeria.",
  keywords: ["study abroad Nigeria", "Nigerian students UK", "study in Canada from Nigeria", "UCAS application Nigeria", "Nigerian student visa UK", "scholarship for Nigerian students", "international education Nigeria"],
  openGraph: {
    title: "Study Abroad from Nigeria | Guimond Vukovic Group",
    description: "Expert guidance for Nigerian students seeking international education opportunities in the UK, Canada, USA, and beyond.",
  },
}

const nigeriaData = {
  country: "Nigeria",
  region: "africa" as const,
  heroTitle: "Study Abroad from Nigeria",
  heroSubtitle: "Expert guidance for ambitious Nigerian students seeking world-class international education opportunities. From university selection to visa approval, we support you every step of the way.",
  heroImage: "/images/hero-nigeria.jpg",
  introText: "The Nigerian market is characterised by highly ambitious, globally minded students who are actively pursuing international education opportunities, particularly in the UK and Canada, but who must make decisions through a strong lens of financial practicality. At the Guimond Vukovic Group Nigeria, we provide clear guidance, transparent advice, and structured support from initial consultation through to enrolment. Our team understands the unique challenges faced by Nigerian applicants and provides hands-on assistance to ensure your success.",
  marketInsights: [
    "Affordability, access to scholarships, and flexible payment structures are central to decision-making for Nigerian families.",
    "Many applicants are first-time international students requiring comprehensive, step-by-step guidance throughout the process.",
    "Application timelines are often compressed, requiring proactive communication and efficient process management.",
    "Trust plays a critical role, with students and families relying on credible advisors to interpret options and guide final decisions.",
    "Common challenges include navigating documentation requirements and visa application processes.",
    "The UK and Canada remain the most popular destinations, offering post-study work opportunities and accessible pathways.",
  ],
  services: [
    {
      title: "University Selection",
      description: "Personalized matching to universities that fit your academic profile, budget, and career goals with a focus on institutions offering strong scholarship packages.",
    },
    {
      title: "Application Support",
      description: "Complete assistance with UCAS and direct university applications, including personal statement preparation and document verification.",
    },
    {
      title: "Visa Guidance",
      description: "Step-by-step support navigating UK, Canadian, and other visa requirements with advice on maximizing your chances of approval.",
    },
    {
      title: "Scholarship Assistance",
      description: "Identification of scholarship opportunities and funding options that align with your financial situation and academic achievements.",
    },
    {
      title: "Documentation Support",
      description: "Expert guidance on gathering, preparing, and verifying all required documents to meet international university and visa standards.",
    },
    {
      title: "Pre-Departure Planning",
      description: "Comprehensive support including accommodation guidance, travel planning, and preparation for life abroad.",
    },
  ],
  whyChooseUs: [
    "Direct partnerships with UK and Canadian universities for priority application processing",
    "Our services are completely FREE for Nigerian students",
    "Dedicated Nigeria team with deep understanding of local educational backgrounds",
    "Transparent advice focused on your best interests, not just any placement",
    "Proven track record helping Nigerian students secure admissions and visas",
    "Ongoing support throughout your studies abroad",
  ],
  destinations: [
    "United Kingdom",
    "Canada",
    "United States",
    "Australia",
    "Ireland",
    "Germany",
  ],
}

export default function NigeriaPage() {
  return <CountryPageLayout {...nigeriaData} />
}
