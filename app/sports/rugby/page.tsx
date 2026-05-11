import { Metadata } from "next"
import { SportPageLayout } from "@/components/sport-page-layout"

export const metadata: Metadata = {
  title: "Play Rugby Abroad | Scholarship Athlete Program UK",
  description: "Play rugby overseas while earning your Masters or PhD in the UK. Expert recruiting for scholarship athletes looking to study abroad and compete in British university rugby.",
  keywords: ["rugby abroad", "play rugby overseas", "UK rugby scholarship", "scholarship athlete UK", "study abroad rugby", "overseas rugby recruiting", "moved to london rugby", "play college rugby abroad"],
  openGraph: {
    title: "Play Rugby Abroad | Scholarship Athlete Program",
    description: "Play rugby overseas while earning your Masters or PhD in the UK.",
  },
}

const sportData = {
  sport: "Rugby",
  slug: "rugby",
  heroTitle: "Play Rugby Abroad While Earning Your Degree",
  heroSubtitle: "Experience rugby in its birthplace as a scholarship athlete. Earn your Masters or PhD while competing in one of the world&apos;s strongest university rugby systems overseas.",
  heroImage: "/images/sports/rugby.jpg",
  introText: "The UK is the home of rugby, and British university rugby offers an unmatched combination of athletic competition and academic excellence for scholarship athletes from abroad. Whether you play union or league, our overseas rugby recruiting connects talented players with programs across England, Scotland, and Wales. Many international athletes have moved to London and other UK cities to experience authentic rugby culture while earning advanced degrees overseas.",
  whyPlayAbroad: [
    "Play rugby in its country of origin with unmatched tradition",
    "Compete in BUCS Super Rugby and national cup competitions overseas",
    "Earn a Masters or PhD from world-renowned UK universities",
    "Train with professional-pathway coaching staff abroad",
    "Gain exposure to Premiership and Pro14 scouts while studying overseas",
    "Experience legendary rugby grounds and rivalries abroad",
  ],
  programBenefits: [
    "Complete overseas recruiting for rugby union and league players",
    "University matching based on position and academic goals abroad",
    "Scholarship and bursary guidance for international athletes",
    "Direct connections with UK university rugby programs overseas",
    "Visa assistance when you move to London or other UK rugby cities",
    "Professional pathway guidance throughout your time abroad",
  ],
  eligibilityRequirements: [
    "Competitive rugby experience at club, college, or representative level",
    "Bachelor&apos;s degree for Masters programs overseas",
    "Masters degree for PhD applicants studying abroad",
    "Meet English language requirements if applicable",
    "Valid passport and UK student visa eligibility",
    "Physical readiness for high-level university rugby abroad",
  ],
  popularDestinations: [
    "Bath, England",
    "Exeter, England",
    "Durham, England",
    "Edinburgh, Scotland",
    "Cardiff, Wales",
    "Loughborough, England",
    "Leeds, England",
    "Northampton, England",
  ],
  degreeOptions: [
    "MSc Sports Management",
    "MA Sports Coaching",
    "MSc Strength & Conditioning",
    "MBA Business Administration",
    "MSc Exercise Science",
    "MA Leadership",
    "PhD Rugby Science",
    "MSc Physiotherapy",
    "MSc Sports Psychology",
  ],
}

export default function RugbyPage() {
  return <SportPageLayout {...sportData} />
}
