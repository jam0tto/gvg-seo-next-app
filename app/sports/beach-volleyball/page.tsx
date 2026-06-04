import { Metadata } from "next"
import { SportPageLayout } from "@/components/sport-page-layout"

export const metadata: Metadata = {
  title: "Beach Volleyball Abroad | Scholarship Athlete UK",
  description: "Play beach volleyball overseas and earn your Masters or PhD at a UK university. GVG places scholarship athletes at British universities — free.",
  keywords: ["beach volleyball abroad", "play beach volleyball overseas", "UK beach volleyball", "scholarship athlete UK", "study abroad beach volleyball", "overseas beach volleyball recruiting", "sand volleyball abroad"],
  alternates: { canonical: "/sports/beach-volleyball" },
  openGraph: {
    title: "Beach Volleyball Abroad | Scholarship Athlete UK",
    description: "Play beach volleyball overseas while earning your Masters or PhD in the UK.",
  },
}

const sportData = {
  sport: "Beach Volleyball",
  slug: "beach-volleyball",
  heroTitle: "Play Beach Volleyball Abroad While Earning Your Degree",
  heroSubtitle: "Take your beach volleyball career overseas as a scholarship athlete. Earn your Masters or PhD while competing on the international beach volleyball circuit.",
  heroImage: "/images/sports/beach-volleyball.jpg",
  introText: "Beach volleyball is growing rapidly across the UK and Europe, offering scholarship athletes unique opportunities to compete overseas while pursuing advanced degrees. Our overseas beach volleyball recruiting connects talented players with universities that have strong indoor facilities and access to international competition. Many athletes have moved to London and coastal UK cities to combine their passion for beach volleyball with world-class education abroad.",
  whyPlayAbroad: [
    "Access year-round indoor beach volleyball facilities in the UK",
    "Compete in European beach volleyball tours while studying abroad",
    "Earn a Masters or PhD from prestigious British universities",
    "Train with international partners and coaches overseas",
    "Build connections in the global beach volleyball community abroad",
    "Develop coaching and sports management skills for post-playing career",
  ],
  programBenefits: [
    "Comprehensive overseas recruiting for beach volleyball players",
    "University matching with strong beach volleyball programs abroad",
    "Scholarship and funding guidance for international athletes",
    "Visa support when you move to London or UK coastal cities",
    "Tournament schedule coordination with academic calendar overseas",
    "Career development support throughout your time abroad",
  ],
  eligibilityRequirements: [
    "Competitive beach or indoor volleyball background",
    "Bachelor&apos;s degree for Masters programs abroad",
    "Masters degree for PhD program applicants overseas",
    "Meet English language requirements if applicable",
    "Valid passport and UK student visa eligibility",
    "Flexibility to train and compete while studying abroad",
  ],
  popularDestinations: [
    "Brighton, England",
    "Bournemouth, England",
    "London, England",
    "Southampton, England",
    "Bristol, England",
    "Cardiff, Wales",
    "Edinburgh, Scotland",
    "Newcastle, England",
  ],
  degreeOptions: [
    "MSc Sports Management",
    "MA Sports Coaching",
    "MSc Exercise Science",
    "MBA Business Administration",
    "MA Event Management",
    "MSc Marketing",
    "PhD Sports Psychology",
    "MSc Tourism Management",
    "MA Media Studies",
  ],
}

export default function BeachVolleyballPage() {
  return <SportPageLayout {...sportData} />
}
