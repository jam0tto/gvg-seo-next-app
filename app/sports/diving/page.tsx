import { Metadata } from "next"
import { SportPageLayout } from "@/components/sport-page-layout"

export const metadata: Metadata = {
  title: "Dive Abroad | Scholarship Athlete Program UK",
  description: "Compete in diving overseas while earning your Masters or PhD in the UK. Expert recruiting for scholarship athletes seeking to train at British universities.",
  keywords: ["diving abroad", "dive overseas", "UK diving scholarship", "scholarship athlete UK", "study abroad diving", "overseas diving recruiting", "moved to london diving"],
  alternates: { canonical: "/sports/diving" },
  openGraph: {
    title: "Dive Abroad | Scholarship Athlete Program",
    description: "Compete in diving overseas while earning your Masters or PhD in the UK.",
  },
}

const sportData = {
  sport: "Diving",
  slug: "diving",
  heroTitle: "Dive Abroad While Earning Your Degree",
  heroSubtitle: "Train at Olympic-standard diving facilities as a scholarship athlete overseas. Earn your Masters or PhD while competing at elite UK diving programmes.",
  heroImage: "/images/sports/diving.jpg",
  introText: "British diving has achieved remarkable Olympic success, and UK universities offer exceptional facilities and coaching for international scholarship athletes who want to compete abroad. With access to Dive England pathways and world-class coaches, studying overseas opens doors to elite competition. Our overseas diving recruiting connects talented athletes with programs that balance high-performance training and academic excellence. Many divers have moved to London and other UK cities to train alongside Olympic medalists abroad.",
  whyPlayAbroad: [
    "Train at Olympic-standard diving facilities across the UK",
    "Access Dive England high-performance pathways while studying abroad",
    "Earn a Masters or PhD from prestigious British universities overseas",
    "Work with world-class coaches who have trained Olympic medalists",
    "Compete in BUCS championships and national competitions abroad",
    "Build connections in the international diving community overseas",
  ],
  programBenefits: [
    "Complete overseas recruiting for platform and springboard divers",
    "University matching based on diving level and academic goals abroad",
    "Scholarship guidance for international aquatics athletes",
    "Visa assistance when you move to London or UK diving centres",
    "Training and competition schedule optimization overseas",
    "Elite pathway guidance throughout your studies abroad",
  ],
  eligibilityRequirements: [
    "Competitive diving background at national or international level",
    "Bachelor&apos;s degree for Masters programs abroad",
    "Masters degree for PhD applicants overseas",
    "Meet English language requirements if applicable",
    "Valid passport and UK student visa eligibility",
    "Commitment to intensive training while studying abroad",
  ],
  popularDestinations: [
    "Leeds, England",
    "Sheffield, England",
    "Edinburgh, Scotland",
    "Plymouth, England",
    "Southampton, England",
    "London, England",
    "Manchester, England",
    "Bristol, England",
  ],
  degreeOptions: [
    "MSc Sports Science",
    "MSc Exercise Physiology",
    "MSc Biomechanics",
    "MBA Sports Management",
    "MSc Psychology",
    "MA Sports Coaching",
    "PhD Diving Performance",
    "MSc Nutrition",
    "MSc Strength & Conditioning",
  ],
}

export default function DivingPage() {
  return <SportPageLayout {...sportData} />
}
