import { Metadata } from "next"
import { SportPageLayout } from "@/components/sport-page-layout"

export const metadata: Metadata = {
  title: "Play Field Hockey Abroad | Scholarship Athlete Program UK",
  description: "Play field hockey overseas while earning your Masters or PhD in the UK. Expert recruiting for scholarship athletes seeking to compete at British universities.",
  keywords: ["field hockey abroad", "play hockey overseas", "UK field hockey scholarship", "scholarship athlete UK", "study abroad field hockey", "overseas hockey recruiting", "moved to london hockey"],
  openGraph: {
    title: "Play Field Hockey Abroad | Scholarship Athlete Program",
    description: "Play field hockey overseas while earning your Masters or PhD in the UK.",
  },
}

const sportData = {
  sport: "Field Hockey",
  slug: "field-hockey",
  heroTitle: "Play Field Hockey Abroad While Earning Your Degree",
  heroSubtitle: "Experience elite field hockey overseas as a scholarship athlete. Earn your Masters or PhD while competing in one of the world&apos;s strongest hockey nations.",
  heroImage: "/images/sports/field-hockey.jpg",
  introText: "Great Britain is a powerhouse in field hockey, with Olympic medals and world-class programs at universities across the country. For scholarship athletes looking to play overseas, the UK offers unmatched competition and facilities. Our overseas field hockey recruiting connects talented players with programs where they can compete at the highest level while earning an advanced degree abroad. Many athletes have moved to London and other UK cities to join this proud hockey tradition.",
  whyPlayAbroad: [
    "Play field hockey in an Olympic medal-winning nation overseas",
    "Compete in BUCS Premier League and national competitions abroad",
    "Earn a Masters or PhD from world-class UK universities",
    "Access England Hockey and Great Britain programme pathways overseas",
    "Train on world-class pitches with elite coaching abroad",
    "Build connections for international hockey opportunities overseas",
  ],
  programBenefits: [
    "Complete overseas recruiting for field hockey players",
    "University matching with top hockey programs abroad",
    "Scholarship guidance for international athletes overseas",
    "Visa assistance when you move to London or UK hockey centres",
    "League and training schedule coordination abroad",
    "Elite pathway guidance throughout your studies overseas",
  ],
  eligibilityRequirements: [
    "Competitive field hockey experience at club or national level",
    "Bachelor&apos;s degree for Masters programs abroad",
    "Masters degree for PhD applicants overseas",
    "Meet English language requirements if applicable",
    "Valid passport and UK student visa eligibility",
    "Commitment to high-level training and competition abroad",
  ],
  popularDestinations: [
    "Loughborough, England",
    "Nottingham, England",
    "Birmingham, England",
    "Exeter, England",
    "Durham, England",
    "Edinburgh, Scotland",
    "Bristol, England",
    "Cambridge, England",
  ],
  degreeOptions: [
    "MSc Sports Management",
    "MSc Sports Coaching",
    "MSc Exercise Science",
    "MBA Business Administration",
    "MSc Physiotherapy",
    "MA Education",
    "PhD Sports Performance",
    "MSc Nutrition",
    "MSc Psychology",
  ],
}

export default function FieldHockeyPage() {
  return <SportPageLayout {...sportData} />
}
