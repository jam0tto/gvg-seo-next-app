import { Metadata } from "next"
import { SportPageLayout } from "@/components/sport-page-layout"

export const metadata: Metadata = {
  title: "Play Tennis Abroad | Scholarship Athlete Program UK",
  description: "Play tennis overseas while earning your Masters or PhD in the UK. Expert recruiting for scholarship athletes seeking to compete at British universities near Wimbledon.",
  keywords: ["tennis abroad", "play tennis overseas", "UK tennis scholarship", "scholarship athlete UK", "study abroad tennis", "overseas tennis recruiting", "moved to london tennis", "play college tennis abroad"],
  openGraph: {
    title: "Play Tennis Abroad | Scholarship Athlete Program",
    description: "Play tennis overseas while earning your Masters or PhD in the UK.",
  },
}

const sportData = {
  sport: "Tennis",
  slug: "tennis",
  heroTitle: "Play Tennis Abroad While Earning Your Degree",
  heroSubtitle: "Train in the home of Wimbledon as a scholarship athlete. Earn your Masters or PhD while competing on grass, clay, and hard courts across the UK overseas.",
  heroImage: "/images/sports/tennis.jpg",
  introText: "The United Kingdom is the spiritual home of tennis, hosting the prestigious Wimbledon Championships and offering unparalleled opportunities for scholarship athletes to play overseas. UK universities feature world-class tennis facilities, professional coaching, and access to LTA-sanctioned tournaments. Our overseas tennis recruiting connects talented players with programs that will help you develop your game while earning an advanced degree abroad. Many players have moved to London and other UK cities to train on grass courts and experience authentic tennis tradition.",
  whyPlayAbroad: [
    "Train in the home of Wimbledon and historic tennis traditions",
    "Compete on grass, clay, and indoor courts across the UK overseas",
    "Earn a Masters or PhD from prestigious British universities",
    "Access LTA-certified coaches and tournament pathways abroad",
    "Build connections in the European tennis circuit overseas",
    "Gain exposure to professional tennis management and sponsorship",
  ],
  programBenefits: [
    "Comprehensive overseas tennis recruiting and university matching",
    "Scholarship guidance for international student athletes abroad",
    "Direct connections with UK university tennis programs overseas",
    "Visa assistance when you move to London or UK tennis centres",
    "Tournament schedule coordination with academic calendar abroad",
    "Career guidance for professional or coaching pathways overseas",
  ],
  eligibilityRequirements: [
    "Competitive tennis ranking or collegiate playing experience",
    "Bachelor&apos;s degree for Masters programs abroad",
    "Masters degree for PhD applicants overseas",
    "Meet English language requirements if applicable",
    "Valid passport and UK student visa eligibility",
    "Commitment to training and competition while studying abroad",
  ],
  popularDestinations: [
    "London, England",
    "Bath, England",
    "Loughborough, England",
    "Stirling, Scotland",
    "Nottingham, England",
    "Birmingham, England",
    "Edinburgh, Scotland",
    "Exeter, England",
  ],
  degreeOptions: [
    "MSc Sports Management",
    "MBA Business Administration",
    "MA Sports Coaching",
    "MSc Exercise Science",
    "MSc Sports Psychology",
    "MA International Business",
    "PhD Tennis Performance",
    "MSc Strength & Conditioning",
    "MA Media & Communications",
  ],
}

export default function TennisPage() {
  return <SportPageLayout {...sportData} />
}
