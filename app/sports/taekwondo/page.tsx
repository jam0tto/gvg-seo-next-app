import { Metadata } from "next"
import { SportPageLayout } from "@/components/sport-page-layout"

export const metadata: Metadata = {
  title: "Train Taekwondo Abroad | Scholarship Athlete Program UK",
  description: "Train taekwondo overseas while earning your Masters or PhD in the UK. Expert recruiting for scholarship athletes seeking martial arts opportunities abroad.",
  keywords: ["taekwondo abroad", "martial arts overseas", "UK taekwondo scholarship", "scholarship athlete UK", "study abroad taekwondo", "overseas martial arts recruiting", "moved to london taekwondo"],
  openGraph: {
    title: "Train Taekwondo Abroad | Scholarship Athlete Program",
    description: "Train taekwondo overseas while earning your Masters or PhD in the UK.",
  },
}

const sportData = {
  sport: "Taekwondo",
  slug: "taekwondo",
  heroTitle: "Train Taekwondo Abroad While Earning Your Degree",
  heroSubtitle: "Take your taekwondo journey overseas as a scholarship athlete. Earn your Masters or PhD while training and competing at UK universities.",
  heroImage: "/images/sports/taekwondo.jpg",
  introText: "The UK has a strong taekwondo tradition with excellent university programs and access to international competition. As a scholarship athlete abroad, you&apos;ll train with world-class coaches, compete in BUCS and national championships, and earn an advanced degree. Our overseas taekwondo recruiting connects talented martial artists with British universities seeking dedicated athletes who want to study abroad while perfecting their craft.",
  whyPlayAbroad: [
    "Train at UK universities with Olympic-level taekwondo programs",
    "Earn a Masters or PhD while competing internationally overseas",
    "Access world-class coaches and training facilities abroad",
    "Compete in BUCS championships and European tournaments",
    "Build connections in the global taekwondo community overseas",
    "Develop coaching credentials while training abroad",
  ],
  programBenefits: [
    "Comprehensive overseas recruiting for taekwondo athletes",
    "University matching based on competitive level and academic goals abroad",
    "Scholarship guidance for international martial arts athletes",
    "Visa assistance when you move to London or UK cities",
    "Training schedule coordination with academic programs overseas",
    "Career development in sports coaching and management abroad",
  ],
  eligibilityRequirements: [
    "Competitive taekwondo background (black belt preferred)",
    "Bachelor&apos;s degree for Masters programs abroad",
    "Masters degree for PhD applicants studying overseas",
    "Meet English language requirements if applicable",
    "Valid passport and UK student visa eligibility",
    "Commitment to training while pursuing graduate studies abroad",
  ],
  popularDestinations: [
    "Manchester, England",
    "London, England",
    "Edinburgh, Scotland",
    "Birmingham, England",
    "Sheffield, England",
    "Leeds, England",
    "Cardiff, Wales",
    "Nottingham, England",
  ],
  degreeOptions: [
    "MSc Sports Coaching",
    "MA Martial Arts Studies",
    "MSc Exercise Science",
    "MBA Sports Management",
    "MSc Psychology",
    "MA Education",
    "PhD Sports Science",
    "MSc Strength & Conditioning",
    "MA Asian Studies",
  ],
}

export default function TaekwondoPage() {
  return <SportPageLayout {...sportData} />
}
