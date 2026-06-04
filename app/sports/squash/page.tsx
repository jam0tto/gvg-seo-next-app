import { Metadata } from "next"
import { SportPageLayout } from "@/components/sport-page-layout"

export const metadata: Metadata = {
  title: "Play Squash Abroad | Scholarship Athlete Program UK",
  description: "Play squash overseas while earning your Masters or PhD in the UK. Expert recruiting for scholarship athletes seeking to compete at British universities.",
  keywords: ["squash abroad", "play squash overseas", "UK squash scholarship", "scholarship athlete UK", "study abroad squash", "overseas squash recruiting", "moved to london squash"],
  alternates: { canonical: "/sports/squash" },
  openGraph: {
    title: "Play Squash Abroad | Scholarship Athlete Program",
    description: "Play squash overseas while earning your Masters or PhD in the UK.",
  },
}

const sportData = {
  sport: "Squash",
  slug: "squash",
  heroTitle: "Play Squash Abroad While Earning Your Degree",
  heroSubtitle: "Train in the birthplace of squash as a scholarship athlete. Earn your Masters or PhD while competing at UK universities with world-class courts.",
  heroImage: "/images/sports/squash.jpg",
  introText: "The UK invented squash and remains one of the world&apos;s strongest nations in the sport, making it the ideal destination for scholarship athletes who want to play overseas. British universities offer exceptional facilities, coaching, and competition pathways. Our overseas squash recruiting connects talented players with programs where they can develop their game while earning an advanced degree abroad. Many players have moved to London and other UK cities to train at historic clubs and modern university facilities.",
  whyPlayAbroad: [
    "Train in the birthplace of squash with rich traditions",
    "Access England Squash pathway programs while studying abroad",
    "Earn a Masters or PhD from prestigious UK universities overseas",
    "Compete in BUCS and PSA satellite tournaments abroad",
    "Train with some of the world&apos;s top coaches overseas",
    "Build professional connections in the global squash community abroad",
  ],
  programBenefits: [
    "Comprehensive overseas recruiting for competitive squash players",
    "University matching with excellent squash facilities abroad",
    "Scholarship guidance for international racket sport athletes",
    "Visa assistance when you move to London or UK cities",
    "Training and tournament coordination overseas",
    "Professional pathway guidance throughout your time abroad",
  ],
  eligibilityRequirements: [
    "Competitive squash ranking or college playing experience",
    "Bachelor&apos;s degree for Masters programs abroad",
    "Masters degree for PhD applicants overseas",
    "Meet English language requirements if applicable",
    "Valid passport and UK student visa eligibility",
    "Dedication to training while pursuing graduate studies abroad",
  ],
  popularDestinations: [
    "Birmingham, England",
    "Manchester, England",
    "Edinburgh, Scotland",
    "Nottingham, England",
    "Bristol, England",
    "Cambridge, England",
    "Durham, England",
    "London, England",
  ],
  degreeOptions: [
    "MSc Sports Management",
    "MBA Business Administration",
    "MA Sports Coaching",
    "MSc Exercise Science",
    "MSc Finance",
    "MA International Business",
    "PhD Racket Sports Science",
    "MSc Psychology",
    "MSc Data Analytics",
  ],
}

export default function SquashPage() {
  return <SportPageLayout {...sportData} />
}
