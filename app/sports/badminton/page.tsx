import { Metadata } from "next"
import { SportPageLayout } from "@/components/sport-page-layout"

export const metadata: Metadata = {
  title: "Play Badminton Abroad | Scholarship Athlete Program UK",
  description: "Play badminton overseas while earning your Masters or PhD in the UK. Expert recruiting for scholarship athletes seeking to compete at British universities.",
  keywords: ["badminton abroad", "play badminton overseas", "UK badminton scholarship", "scholarship athlete UK", "study abroad badminton", "overseas badminton recruiting", "moved to london badminton"],
  openGraph: {
    title: "Play Badminton Abroad | Scholarship Athlete Program",
    description: "Play badminton overseas while earning your Masters or PhD in the UK.",
  },
}

const sportData = {
  sport: "Badminton",
  slug: "badminton",
  heroTitle: "Play Badminton Abroad While Earning Your Degree",
  heroSubtitle: "Elevate your badminton career overseas as a scholarship athlete. Earn your Masters or PhD while competing in UK university and national tournaments.",
  heroImage: "/images/sports/badminton.jpg",
  introText: "The UK has a growing badminton scene with excellent university programs and access to Badminton England pathways. As a scholarship athlete abroad, you&apos;ll have opportunities to train with international players, compete in BUCS and national tournaments, and earn an advanced degree. Our overseas badminton recruiting connects talented players with UK universities seeking skilled athletes who want to study abroad while competing at a high level.",
  whyPlayAbroad: [
    "Access Badminton England pathway programs while studying abroad",
    "Compete in BUCS championships and national circuits overseas",
    "Earn a Masters or PhD from prestigious UK universities",
    "Train with diverse international playing styles abroad",
    "Build connections in the European badminton community overseas",
    "Develop coaching qualifications while competing abroad",
  ],
  programBenefits: [
    "Comprehensive overseas recruiting for badminton players",
    "University matching with strong badminton programs abroad",
    "Scholarship guidance for international racket sport athletes",
    "Visa assistance when you move to London or UK cities",
    "Training and tournament coordination overseas",
    "Career pathway support throughout your time abroad",
  ],
  eligibilityRequirements: [
    "Competitive badminton ranking or national-level experience",
    "Bachelor&apos;s degree for Masters programs abroad",
    "Masters degree for PhD applicants overseas",
    "Meet English language requirements if applicable",
    "Valid passport and UK student visa eligibility",
    "Dedication to training while pursuing academic goals abroad",
  ],
  popularDestinations: [
    "Nottingham, England",
    "Birmingham, England",
    "Manchester, England",
    "London, England",
    "Sheffield, England",
    "Milton Keynes, England",
    "Edinburgh, Scotland",
    "Leeds, England",
  ],
  degreeOptions: [
    "MSc Sports Management",
    "MBA Business Administration",
    "MA Sports Coaching",
    "MSc Exercise Science",
    "MSc Psychology",
    "MA International Business",
    "PhD Racket Sports",
    "MSc Data Analytics",
    "MA Education",
  ],
}

export default function BadmintonPage() {
  return <SportPageLayout {...sportData} />
}
