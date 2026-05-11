import { Metadata } from "next"
import { SportPageLayout } from "@/components/sport-page-layout"

export const metadata: Metadata = {
  title: "Play Ice Hockey Abroad | Scholarship Athlete Program UK",
  description: "Play ice hockey overseas while earning your Masters or PhD in the UK. Expert recruiting for scholarship athletes seeking to compete at British universities.",
  keywords: ["ice hockey abroad", "play hockey overseas", "UK ice hockey scholarship", "scholarship athlete UK", "study abroad ice hockey", "overseas hockey recruiting", "moved to london hockey"],
  openGraph: {
    title: "Play Ice Hockey Abroad | Scholarship Athlete Program",
    description: "Play ice hockey overseas while earning your Masters or PhD in the UK.",
  },
}

const sportData = {
  sport: "Ice Hockey",
  slug: "ice-hockey",
  heroTitle: "Play Ice Hockey Abroad While Earning Your Degree",
  heroSubtitle: "Hit the ice overseas as a scholarship athlete. Earn your Masters or PhD while competing in British university ice hockey and EIHL development leagues.",
  heroImage: "/images/sports/ice-hockey.jpg",
  introText: "The UK ice hockey scene is growing rapidly, with professional leagues and strong university programs creating opportunities for international scholarship athletes to play overseas. Whether you&apos;re looking to continue your hockey career after college or explore European hockey while studying, our overseas ice hockey recruiting connects talented players with British opportunities. Many players have moved to London and other UK cities to skate at top-level facilities while earning advanced degrees abroad.",
  whyPlayAbroad: [
    "Play in BUCS ice hockey and development leagues overseas",
    "Access pathway to EIHL and professional European hockey abroad",
    "Earn a Masters or PhD from world-class UK universities",
    "Train at modern ice hockey facilities across the UK overseas",
    "Experience European hockey culture and playing style abroad",
    "Build connections with scouts and professional teams overseas",
  ],
  programBenefits: [
    "Complete overseas recruiting for ice hockey players",
    "University matching with strong hockey programs abroad",
    "Scholarship guidance for international student athletes",
    "Visa assistance when you move to London or UK hockey cities",
    "Competition schedule coordination with academics overseas",
    "Professional pathway guidance while studying abroad",
  ],
  eligibilityRequirements: [
    "Competitive ice hockey experience at junior, college, or semi-pro level",
    "Bachelor&apos;s degree for Masters programs abroad",
    "Masters degree for PhD applicants overseas",
    "Meet English language requirements if applicable",
    "Valid passport and UK student visa eligibility",
    "Physical readiness for competitive hockey abroad",
  ],
  popularDestinations: [
    "Nottingham, England",
    "Sheffield, England",
    "Manchester, England",
    "Cardiff, Wales",
    "Dundee, Scotland",
    "Edinburgh, Scotland",
    "Coventry, England",
    "Guildford, England",
  ],
  degreeOptions: [
    "MSc Sports Management",
    "MBA Business Administration",
    "MSc Sports Coaching",
    "MSc Exercise Science",
    "MA International Business",
    "MSc Psychology",
    "PhD Sports Performance",
    "MSc Finance",
    "MA Leadership",
  ],
}

export default function IceHockeyPage() {
  return <SportPageLayout {...sportData} />
}
