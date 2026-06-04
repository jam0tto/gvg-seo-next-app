import { Metadata } from "next"
import { CountryPageLayout } from "@/components/country-page-layout"

export const metadata: Metadata = {
  title: "Study in the UK from India | Guimond Vukovic Group",
  description: "Expert guidance for Indian students pursuing international education in the UK. Free university application support, visa guidance, and scholarship advice from GVG.",
  keywords: ["study abroad India", "Indian students UK", "study in USA from India", "UCAS application India", "Indian student visa UK", "scholarship for Indian students", "international education India", "MS abroad from India"],
  alternates: { canonical: "/countries/india" },
  openGraph: {
    title: "Study Abroad from India | Guimond Vukovic Group",
    description: "Expert guidance for Indian students seeking international education in the UK, USA, Canada, and Australia.",
  },
}

const indiaData = {
  country: "India",
  region: "asia" as const,
  heroTitle: "Study Abroad from India",
  heroSubtitle: "Unlock global opportunities with expert guidance for Indian students. From prestigious UK universities to top US and Canadian institutions, we help you achieve your international education dreams.",
  heroImage: "/images/hero-india.jpg",
  introText: "India produces some of the world's most talented and driven students, with a strong foundation in academics and a clear vision for global success. The Guimond Vukovic Group India provides comprehensive support for students across the country seeking to pursue undergraduate, postgraduate, and doctoral studies at leading international universities. Our team offers personalized guidance that considers your academic background, career aspirations, and financial planning to ensure you find the perfect fit for your future.",
  marketInsights: [
    "Indian students are highly competitive candidates for top global universities, particularly in STEM, business, and healthcare fields.",
    "Strong emphasis on university rankings, program reputation, and return on investment in education decisions.",
    "Growing interest in UK Master's programs due to shorter duration and post-study work opportunities.",
    "US universities remain highly attractive for students seeking research opportunities and diverse campus experiences.",
    "Canada and Australia offer compelling immigration pathways that influence destination selection.",
    "Students and families conduct thorough research and benefit from expert guidance in navigating complex application processes.",
  ],
  services: [
    {
      title: "Program Matching",
      description: "Expert guidance to identify universities and programs that align with your academic profile, career goals, and budget.",
    },
    {
      title: "Application Excellence",
      description: "Comprehensive support with applications, SOPs, LORs, and personal statements that showcase your unique strengths.",
    },
    {
      title: "Visa Expertise",
      description: "In-depth guidance on student visa processes for UK, USA, Canada, Australia, and other destinations.",
    },
    {
      title: "Scholarship Identification",
      description: "Help discovering and applying for merit-based scholarships, assistantships, and funding opportunities.",
    },
    {
      title: "Test Preparation Advice",
      description: "Guidance on GRE, GMAT, IELTS, TOEFL, and other standardized tests required for international admissions.",
    },
    {
      title: "Career Planning",
      description: "Long-term career guidance considering post-study work opportunities and international career paths.",
    },
  ],
  whyChooseUs: [
    "Deep understanding of Indian academic systems and how they translate to international requirements",
    "FREE services through our partnerships with leading global universities",
    "Expert guidance on competitive programs in engineering, business, and healthcare",
    "Comprehensive support from initial consultation through visa approval",
    "Transparent advice focused on your best interests and long-term success",
    "Network of successful alumni across top international universities",
  ],
  destinations: [
    "United States",
    "United Kingdom",
    "Canada",
    "Australia",
    "Germany",
    "Ireland",
  ],
}

export default function IndiaPage() {
  return <CountryPageLayout {...indiaData} />
}
