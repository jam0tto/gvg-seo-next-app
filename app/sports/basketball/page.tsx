import { Metadata } from "next"
import { SportPageLayout } from "@/components/sport-page-layout"

export const metadata: Metadata = {
  title: "Play Basketball Abroad | Overseas Basketball Agent & Recruiting UK",
  description: "Play basketball overseas while earning your Masters or PhD in the UK. Expert overseas basketball agent services connecting scholarship athletes with British universities.",
  keywords: ["basketball abroad", "play basketball overseas", "overseas basketball agent", "UK basketball scholarship", "scholarship athlete UK", "study abroad basketball", "overseas basketball recruiting", "play college basketball abroad", "moved to london basketball"],
  openGraph: {
    title: "Play Basketball Abroad | Overseas Basketball Agent",
    description: "Play basketball overseas while earning your Masters or PhD in the UK.",
  },
}

const sportData = {
  sport: "Basketball",
  slug: "basketball",
  heroTitle: "Play Basketball Abroad With Our Overseas Recruiting Services",
  heroSubtitle: "Take your basketball career overseas as a scholarship athlete. Our overseas basketball agent services connect you with UK universities where you can earn your Masters or PhD while competing.",
  heroImage: "/images/sports/basketball.jpg",
  introText: "UK basketball offers exceptional opportunities for international scholarship athletes looking to play overseas while continuing their education. As your overseas basketball agent, we connect talented players with top British university programs. Whether you&apos;ve completed your NCAA eligibility or are seeking new opportunities abroad, many athletes have successfully moved to London and other UK cities to play college basketball and still study abroad at the highest academic level.",
  whyPlayAbroad: [
    "Continue your basketball career after NCAA eligibility overseas",
    "Earn a Masters or PhD while competing in BUCS leagues",
    "Work with our experienced overseas basketball agent team",
    "Access professional-level facilities at UK universities abroad",
    "Gain exposure to European basketball scouts while studying overseas",
    "Build an international network for post-playing opportunities",
  ],
  programBenefits: [
    "Full overseas basketball agent services from recruitment to enrollment",
    "University matching based on your playing style and academic goals abroad",
    "Scholarship and financial aid guidance for studying overseas",
    "Direct connections with UK basketball coaches and programs",
    "Visa assistance when you move to London or other UK cities",
    "Career guidance for life after basketball abroad",
  ],
  eligibilityRequirements: [
    "Competitive basketball experience at high school, college, or professional level",
    "Bachelor&apos;s degree for Masters programs overseas",
    "Masters degree for PhD applicants looking to study abroad",
    "Meet English language requirements if applicable",
    "Valid passport and UK student visa eligibility",
    "Commitment to balancing athletics and academics abroad",
  ],
  popularDestinations: [
    "London, England",
    "Leicester, England",
    "Worcester, England",
    "Newcastle, England",
    "Glasgow, Scotland",
    "Sheffield, England",
    "Nottingham, England",
    "Manchester, England",
  ],
  degreeOptions: [
    "MBA Business Administration",
    "MSc Sports Management",
    "MA Sports Coaching",
    "MSc Exercise Science",
    "MA International Business",
    "MSc Psychology",
    "PhD Sports Performance",
    "MSc Data Analytics",
    "MA Leadership",
  ],
}

export default function BasketballPage() {
  return <SportPageLayout {...sportData} />
}
