import { Metadata } from "next"
import { SportPageLayout } from "@/components/sport-page-layout"

export const metadata: Metadata = {
  title: "Train Martial Arts Abroad | Scholarship Athlete Program UK",
  description: "Train martial arts overseas while earning your Masters or PhD in the UK. Expert recruiting for scholarship athletes seeking combat sports opportunities abroad.",
  keywords: ["martial arts abroad", "MMA overseas", "UK martial arts scholarship", "scholarship athlete UK", "study abroad martial arts", "overseas combat sports recruiting", "moved to london martial arts"],
  openGraph: {
    title: "Train Martial Arts Abroad | Scholarship Athlete Program",
    description: "Train martial arts overseas while earning your Masters or PhD in the UK.",
  },
}

const sportData = {
  sport: "Martial Arts",
  slug: "martial-arts",
  heroTitle: "Train Martial Arts Abroad While Earning Your Degree",
  heroSubtitle: "Pursue martial arts excellence overseas as a scholarship athlete. Earn your Masters or PhD while training at elite UK facilities and competing internationally.",
  heroImage: "/images/sports/martial-arts.jpg",
  introText: "The UK offers world-class training environments for martial artists across all disciplines, from MMA to traditional arts. As a scholarship athlete abroad, you&apos;ll have access to top coaches, modern facilities, and international competition while earning an advanced degree. Our overseas martial arts recruiting connects fighters with universities that support high-performance athletes who want to study abroad while advancing their combat sports careers.",
  whyPlayAbroad: [
    "Train at facilities with professional MMA and martial arts programs",
    "Earn a Masters or PhD while competing internationally overseas",
    "Access diverse training partners and coaching styles abroad",
    "Compete in BUCS, IMMAF, and other martial arts circuits overseas",
    "Build connections with European martial arts promotions abroad",
    "Develop coaching and business skills for post-competition career",
  ],
  programBenefits: [
    "Comprehensive overseas recruiting for all martial arts disciplines",
    "University matching with strong combat sports support abroad",
    "Scholarship guidance for international fighters studying overseas",
    "Visa assistance when you move to London or UK training hubs",
    "Fight schedule coordination with academic calendar abroad",
    "Career transition support for life after competition overseas",
  ],
  eligibilityRequirements: [
    "Competitive martial arts background in any discipline",
    "Bachelor&apos;s degree for Masters programs abroad",
    "Masters degree for PhD applicants overseas",
    "Meet English language requirements if applicable",
    "Valid passport and UK student visa eligibility",
    "Commitment to training while pursuing academic excellence abroad",
  ],
  popularDestinations: [
    "London, England",
    "Liverpool, England",
    "Manchester, England",
    "Nottingham, England",
    "Birmingham, England",
    "Glasgow, Scotland",
    "Bristol, England",
    "Leeds, England",
  ],
  degreeOptions: [
    "MSc Sports Coaching",
    "MA Combat Sports Studies",
    "MSc Strength & Conditioning",
    "MBA Sports Management",
    "MSc Exercise Physiology",
    "MA Sports Psychology",
    "PhD Combat Sports Science",
    "MSc Nutrition",
    "MA Business Management",
  ],
}

export default function MartialArtsPage() {
  return <SportPageLayout {...sportData} />
}
