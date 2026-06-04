import { Metadata } from "next"
import { SportPageLayout } from "@/components/sport-page-layout"

export const metadata: Metadata = {
  title: "Play Cross Country Abroad | Scholarship Athlete Program UK",
  description: "Run cross country overseas and earn your Masters or PhD at a UK university. GVG places scholarship athletes at British programs — free.",
  keywords: ["cross country abroad", "run overseas", "UK running scholarship", "scholarship athlete UK", "study abroad running", "overseas cross country recruiting", "distance running abroad", "moved to london runner"],
  alternates: { canonical: "/sports/cross-country" },
  openGraph: {
    title: "Play Cross Country Abroad | Scholarship Athlete Program",
    description: "Run cross country overseas while earning your Masters or PhD in the UK.",
  },
}

const sportData = {
  sport: "Cross Country",
  slug: "cross-country",
  heroTitle: "Run Cross Country Abroad While Earning Your Degree",
  heroSubtitle: "Train on scenic British trails as a scholarship athlete. Pursue your Masters or PhD while competing in one of the world&apos;s most historic running traditions.",
  heroImage: "/images/sports/cross-country.jpg",
  introText: "The United Kingdom offers some of the world&apos;s most beautiful and challenging cross country courses, with a running tradition dating back centuries. As a scholarship athlete abroad, you&apos;ll have access to world-class coaching, historic race venues, and prestigious academic programs. Our overseas cross country recruiting connects talented distance runners with UK universities seeking international athletes who want to study abroad while competing.",
  whyPlayAbroad: [
    "Train on historic British cross country courses and trails",
    "Earn a Masters or PhD from world-renowned UK universities",
    "Compete in prestigious BUCS championships and international events",
    "Experience the birthplace of modern distance running",
    "Access elite coaching and sports science support abroad",
    "Build a global network in the running community overseas",
  ],
  programBenefits: [
    "Comprehensive overseas recruiting support for distance runners",
    "University matching based on athletic times and academic goals",
    "Scholarship and funding guidance for international scholarship athletes",
    "Visa and relocation assistance when you move to London or UK cities",
    "Training program coordination with university coaches abroad",
    "Year-round support throughout your time studying overseas",
  ],
  eligibilityRequirements: [
    "Competitive cross country or distance running background",
    "Bachelor&apos;s degree for Masters programs (or near completion)",
    "Masters degree for PhD applicants studying abroad",
    "Meet English language requirements if applicable",
    "Valid passport and UK student visa eligibility",
    "Dedication to training while pursuing graduate studies overseas",
  ],
  popularDestinations: [
    "Birmingham, England",
    "Loughborough, England",
    "Bath, England",
    "Edinburgh, Scotland",
    "St Andrews, Scotland",
    "Leeds, England",
    "Manchester, England",
    "Bristol, England",
  ],
  degreeOptions: [
    "MSc Sports Science",
    "MSc Exercise Physiology",
    "MA Sports Coaching",
    "MSc Nutrition",
    "PhD Exercise Science",
    "MSc Psychology",
    "MBA Sports Management",
    "MA Education",
    "MSc Public Health",
  ],
}

export default function CrossCountryPage() {
  return <SportPageLayout {...sportData} />
}
