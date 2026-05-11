import { Metadata } from "next"
import { SportPageLayout } from "@/components/sport-page-layout"

export const metadata: Metadata = {
  title: "Swim Abroad | Scholarship Athlete Program UK",
  description: "Swim overseas while earning your Masters or PhD in the UK. Expert recruiting for scholarship athletes seeking to compete at British university swimming programs.",
  keywords: ["swimming abroad", "swim overseas", "UK swimming scholarship", "scholarship athlete UK", "study abroad swimming", "overseas swimming recruiting", "moved to london swimming"],
  openGraph: {
    title: "Swim Abroad | Scholarship Athlete Program",
    description: "Swim overseas while earning your Masters or PhD in the UK.",
  },
}

const sportData = {
  sport: "Swimming",
  slug: "swimming",
  heroTitle: "Swim Abroad While Earning Your Degree",
  heroSubtitle: "Train at Olympic-standard facilities as a scholarship athlete overseas. Earn your Masters or PhD while competing for top UK university swimming programs.",
  heroImage: "/images/sports/swimming.jpg",
  introText: "British swimming has produced numerous Olympic champions, and UK universities offer exceptional aquatics programs for scholarship athletes from abroad. With world-class pools, sports science support, and access to Swim England pathways, studying overseas as a swimmer opens remarkable opportunities. Our overseas swimming recruiting connects talented athletes with programs that balance elite training and academic excellence. Many swimmers have moved to London and other UK cities to train at Olympic-standard facilities abroad.",
  whyPlayAbroad: [
    "Train at Olympic-standard aquatics facilities across the UK",
    "Access Swim England high-performance pathways while studying abroad",
    "Earn a Masters or PhD from prestigious British universities overseas",
    "Compete in BUCS championships and international meets abroad",
    "Work with world-class coaches and sports scientists overseas",
    "Build connections for professional swimming opportunities abroad",
  ],
  programBenefits: [
    "Complete overseas recruiting for competitive swimmers",
    "University matching based on events and academic goals abroad",
    "Scholarship guidance for international aquatics athletes",
    "Visa assistance when you move to London or UK swim centres",
    "Training and competition calendar optimization overseas",
    "Elite pathway guidance throughout your studies abroad",
  ],
  eligibilityRequirements: [
    "Competitive swimming times at national or international level",
    "Bachelor&apos;s degree for Masters programs abroad",
    "Masters degree for PhD applicants overseas",
    "Meet English language requirements if applicable",
    "Valid passport and UK student visa eligibility",
    "Commitment to intensive training while studying abroad",
  ],
  popularDestinations: [
    "Loughborough, England",
    "Bath, England",
    "Edinburgh, Scotland",
    "Stirling, Scotland",
    "Birmingham, England",
    "Sheffield, England",
    "Manchester, England",
    "Leeds, England",
  ],
  degreeOptions: [
    "MSc Sports Science",
    "MSc Exercise Physiology",
    "MSc Biomechanics",
    "MBA Sports Management",
    "MSc Nutrition",
    "MA Sports Coaching",
    "PhD Aquatic Performance",
    "MSc Strength & Conditioning",
    "MSc Psychology",
  ],
}

export default function SwimmingPage() {
  return <SportPageLayout {...sportData} />
}
