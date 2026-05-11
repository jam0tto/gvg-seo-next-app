import { Metadata } from "next"
import { SportPageLayout } from "@/components/sport-page-layout"

export const metadata: Metadata = {
  title: "Play Volleyball Abroad | Scholarship Athlete Program UK",
  description: "Play volleyball overseas while earning your Masters or PhD in the UK. Expert recruiting for scholarship athletes looking to study abroad and compete at British universities.",
  keywords: ["volleyball abroad", "play volleyball overseas", "UK volleyball scholarship", "scholarship athlete UK", "study abroad volleyball", "overseas volleyball recruiting", "college volleyball abroad", "moved to london volleyball"],
  openGraph: {
    title: "Play Volleyball Abroad | Scholarship Athlete Program",
    description: "Play volleyball overseas while earning your Masters or PhD in the UK.",
  },
}

const sportData = {
  sport: "Volleyball",
  slug: "volleyball",
  heroTitle: "Play Volleyball Abroad While Earning Your Degree",
  heroSubtitle: "Spike your way to success as a scholarship athlete in the UK. Combine competitive volleyball with a Masters or PhD at prestigious British universities.",
  heroImage: "/images/sports/volleyball.jpg",
  introText: "UK university volleyball is experiencing tremendous growth, creating exciting opportunities for international scholarship athletes to play overseas. Whether you&apos;re a setter, hitter, or libero, our overseas volleyball recruiting services connect talented players with programs across Britain. Join the many athletes who have moved to London and other UK cities to pursue both athletic excellence and advanced degrees abroad.",
  whyPlayAbroad: [
    "Compete in BUCS Super League and national championships",
    "Earn a Masters or PhD while playing volleyball overseas",
    "Access state-of-the-art training facilities at UK universities",
    "Experience European volleyball culture and competition style",
    "Build international connections in the volleyball community abroad",
    "Develop as both an athlete and scholar overseas",
  ],
  programBenefits: [
    "Full overseas volleyball recruiting support and university matching",
    "Scholarship guidance for international student athletes abroad",
    "Direct connections with UK volleyball coaches and programs",
    "Visa assistance and support when you move to London or UK cities",
    "Academic program matching based on your career goals overseas",
    "Ongoing support throughout your time studying abroad",
  ],
  eligibilityRequirements: [
    "Competitive volleyball experience at club or collegiate level",
    "Bachelor&apos;s degree for Masters programs (or near completion)",
    "Masters degree for PhD applicants seeking to study abroad",
    "Meet English language requirements if applicable",
    "Valid passport and UK student visa eligibility",
    "Commitment to competing while pursuing graduate studies overseas",
  ],
  popularDestinations: [
    "London, England",
    "Durham, England",
    "Nottingham, England",
    "Edinburgh, Scotland",
    "Sheffield, England",
    "Newcastle, England",
    "Glasgow, Scotland",
    "Leeds, England",
  ],
  degreeOptions: [
    "MSc Sports Management",
    "MBA Business Administration",
    "MA Sports Coaching",
    "MSc Exercise Science",
    "MA International Business",
    "MSc Psychology",
    "PhD Sports Science",
    "MSc Marketing",
    "MA Communications",
  ],
}

export default function VolleyballPage() {
  return <SportPageLayout {...sportData} />
}
