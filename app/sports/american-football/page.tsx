import { Metadata } from "next"
import { SportPageLayout } from "@/components/sport-page-layout"

export const metadata: Metadata = {
  title: "Play American Football Abroad | Scholarship Athlete Program UK",
  description: "Play American football overseas while earning your Masters or PhD in the UK. Expert recruiting services for scholarship athletes looking to study abroad and play college football in London and across Britain.",
  keywords: ["american football abroad", "play football overseas", "UK american football scholarship", "scholarship athlete UK", "study abroad football", "overseas football recruiting", "play college football abroad", "moved to london football"],
  openGraph: {
    title: "Play American Football Abroad | Scholarship Athlete Program",
    description: "Play American football overseas while earning your Masters or PhD in the UK.",
  },
}

const sportData = {
  sport: "American Football",
  slug: "american-football",
  heroTitle: "Play American Football Abroad While Earning Your Degree",
  heroSubtitle: "Join the growing American football scene in the UK as a scholarship athlete. Earn your Masters or PhD while competing at the highest level overseas.",
  heroImage: "/images/sports/american-football.jpg",
  introText: "The UK&apos;s American football programs are rapidly expanding, creating unprecedented opportunities for scholarship athletes to play overseas. Whether you&apos;ve exhausted your NCAA eligibility or are looking to combine graduate studies with competitive play, our overseas American football recruiting services connect you with top UK universities. Many athletes who have moved to London and other UK cities continue their football careers while earning advanced degrees.",
  whyPlayAbroad: [
    "Continue playing American football after NCAA eligibility ends",
    "Earn a Masters or PhD from prestigious UK universities while competing",
    "Experience a new culture while pursuing your athletic and academic dreams",
    "Join the fastest-growing American football league in Europe",
    "Build international connections for post-playing career opportunities",
    "Access world-class coaching and training facilities abroad",
  ],
  programBenefits: [
    "Full overseas recruiting support from application to enrollment",
    "Scholarship and funding guidance for international student athletes",
    "University matching based on your athletic and academic profile",
    "Visa assistance and relocation support when you move to London or other UK cities",
    "Connections with UK American football programs and coaches",
    "Ongoing support throughout your time studying abroad",
  ],
  eligibilityRequirements: [
    "Competitive American football experience at high school, college, or semi-pro level",
    "Bachelor&apos;s degree or equivalent for Masters programs (or pursuing completion)",
    "Masters degree for PhD program applicants",
    "Meet English language requirements (IELTS/TOEFL) if applicable",
    "Valid passport and eligibility for UK student visa",
    "Commitment to balancing athletic and academic responsibilities abroad",
  ],
  popularDestinations: [
    "London, England",
    "Manchester, England",
    "Birmingham, England",
    "Edinburgh, Scotland",
    "Glasgow, Scotland",
    "Leeds, England",
    "Bristol, England",
    "Nottingham, England",
  ],
  degreeOptions: [
    "MBA / Business Administration",
    "MSc Sports Management",
    "MA Sports Coaching",
    "MSc Exercise Science",
    "MA International Relations",
    "MSc Psychology",
    "PhD Sports Science",
    "MSc Data Analytics",
    "MA Media & Communications",
  ],
}

export default function AmericanFootballPage() {
  return <SportPageLayout {...sportData} />
}
