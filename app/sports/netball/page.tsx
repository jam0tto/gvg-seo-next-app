import { Metadata } from "next"
import { SportPageLayout } from "@/components/sport-page-layout"

export const metadata: Metadata = {
  title: "Play Netball Abroad | Scholarship Athlete Program UK",
  description: "Play netball overseas while earning your Masters or PhD in the UK. Expert recruiting for scholarship athletes seeking to compete in British Superleague and university netball.",
  keywords: ["netball abroad", "play netball overseas", "UK netball scholarship", "scholarship athlete UK", "study abroad netball", "overseas netball recruiting", "moved to london netball"],
  openGraph: {
    title: "Play Netball Abroad | Scholarship Athlete Program",
    description: "Play netball overseas while earning your Masters or PhD in the UK.",
  },
}

const sportData = {
  sport: "Netball",
  slug: "netball",
  heroTitle: "Play Netball Abroad While Earning Your Degree",
  heroSubtitle: "Join one of the world&apos;s strongest netball nations as a scholarship athlete overseas. Earn your Masters or PhD while competing in UK Superleague and university netball.",
  heroImage: "/images/sports/netball.jpg",
  introText: "England is a powerhouse in international netball, offering exceptional opportunities for scholarship athletes who want to play overseas. UK university netball feeds into the Vitality Netball Superleague, and international players can pursue elite competition while earning advanced degrees. Our overseas netball recruiting connects talented athletes with programmes across Britain. Many players have moved to London and other UK cities to compete at the highest level while studying abroad.",
  whyPlayAbroad: [
    "Play netball in one of the world&apos;s top netball nations overseas",
    "Pathway to Vitality Netball Superleague while studying abroad",
    "Earn a Masters or PhD from prestigious UK universities",
    "Compete in BUCS Premier League and national competitions abroad",
    "Train with international coaches and players overseas",
    "Build connections for professional netball opportunities abroad",
  ],
  programBenefits: [
    "Complete overseas recruiting for netball players",
    "University matching with strong netball programmes abroad",
    "Scholarship guidance for international athletes",
    "Visa assistance when you move to London or UK cities",
    "Competition schedule coordination with academics overseas",
    "Superleague pathway guidance while studying abroad",
  ],
  eligibilityRequirements: [
    "Competitive netball experience at club, state, or national level",
    "Bachelor&apos;s degree for Masters programs abroad",
    "Masters degree for PhD applicants overseas",
    "Meet English language requirements if applicable",
    "Valid passport and UK student visa eligibility",
    "Commitment to high-level netball while studying abroad",
  ],
  popularDestinations: [
    "Loughborough, England",
    "Manchester, England",
    "Bath, England",
    "Birmingham, England",
    "Leeds, England",
    "Surrey, England",
    "London, England",
    "Hertfordshire, England",
  ],
  degreeOptions: [
    "MSc Sports Management",
    "MSc Sports Coaching",
    "MSc Exercise Science",
    "MBA Business Administration",
    "MSc Physiotherapy",
    "MA Education",
    "PhD Netball Performance",
    "MSc Nutrition",
    "MSc Psychology",
  ],
}

export default function NetballPage() {
  return <SportPageLayout {...sportData} />
}
