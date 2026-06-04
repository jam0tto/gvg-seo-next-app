import { Metadata } from "next"
import { SportPageLayout } from "@/components/sport-page-layout"

export const metadata: Metadata = {
  title: "Play Water Polo Abroad | Scholarship Athlete Program UK",
  description: "Play water polo overseas while earning your Masters or PhD in the UK. Expert recruiting for scholarship athletes seeking to compete at British universities.",
  keywords: ["water polo abroad", "play water polo overseas", "UK water polo scholarship", "scholarship athlete UK", "study abroad water polo", "overseas water polo recruiting", "moved to london water polo"],
  alternates: { canonical: "/sports/water-polo" },
  openGraph: {
    title: "Play Water Polo Abroad | Scholarship Athlete Program",
    description: "Play water polo overseas while earning your Masters or PhD in the UK.",
  },
}

const sportData = {
  sport: "Water Polo",
  slug: "water-polo",
  heroTitle: "Play Water Polo Abroad While Earning Your Degree",
  heroSubtitle: "Dive into UK water polo as a scholarship athlete overseas. Earn your Masters or PhD while competing in British leagues and university championships.",
  heroImage: "/images/sports/water-polo.jpg",
  introText: "British water polo is growing with strong university programmes and national league opportunities for international scholarship athletes who want to play overseas. UK universities offer excellent aquatics facilities and access to competitive leagues. Our overseas water polo recruiting connects talented players with programmes that value athletic excellence and academics equally. Many athletes have moved to London and other UK cities to compete in water polo while earning advanced degrees abroad.",
  whyPlayAbroad: [
    "Compete in BUCS water polo and British Water Polo League overseas",
    "Access excellent aquatics facilities at UK universities abroad",
    "Earn a Masters or PhD from world-class British universities",
    "Train with international players and coaches overseas",
    "Gain eligibility for GB national team pathways while studying abroad",
    "Build connections in European water polo community overseas",
  ],
  programBenefits: [
    "Complete overseas recruiting for water polo players",
    "University matching with strong water polo programmes abroad",
    "Scholarship guidance for international aquatics athletes",
    "Visa assistance when you move to London or UK cities",
    "Competition and training schedule coordination overseas",
    "Career pathway support while studying abroad",
  ],
  eligibilityRequirements: [
    "Competitive water polo experience at club, college, or national level",
    "Bachelor&apos;s degree for Masters programs abroad",
    "Masters degree for PhD applicants overseas",
    "Meet English language requirements if applicable",
    "Valid passport and UK student visa eligibility",
    "Commitment to training while pursuing academic goals abroad",
  ],
  popularDestinations: [
    "Manchester, England",
    "Sheffield, England",
    "Bristol, England",
    "Edinburgh, Scotland",
    "Birmingham, England",
    "Leeds, England",
    "London, England",
    "Nottingham, England",
  ],
  degreeOptions: [
    "MSc Sports Science",
    "MSc Exercise Physiology",
    "MSc Sports Coaching",
    "MBA Sports Management",
    "MSc Nutrition",
    "MA Education",
    "PhD Aquatic Sports",
    "MSc Strength & Conditioning",
    "MSc Psychology",
  ],
}

export default function WaterPoloPage() {
  return <SportPageLayout {...sportData} />
}
