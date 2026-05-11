import { Metadata } from "next"
import { SportPageLayout } from "@/components/sport-page-layout"

export const metadata: Metadata = {
  title: "Cheer Abroad | Scholarship Athlete Program UK",
  description: "Compete in cheerleading overseas while earning your Masters or PhD in the UK. Expert recruiting for scholarship athletes seeking to perform at British universities.",
  keywords: ["cheerleading abroad", "cheer overseas", "UK cheer scholarship", "scholarship athlete UK", "study abroad cheerleading", "overseas cheer recruiting", "moved to london cheerleading"],
  openGraph: {
    title: "Cheer Abroad | Scholarship Athlete Program",
    description: "Compete in cheerleading overseas while earning your Masters or PhD in the UK.",
  },
}

const sportData = {
  sport: "Cheer",
  slug: "cheer",
  heroTitle: "Cheer Abroad While Earning Your Degree",
  heroSubtitle: "Take your cheerleading talents overseas as a scholarship athlete. Earn your Masters or PhD while competing with top UK university cheer programmes.",
  heroImage: "/images/sports/cheer.jpg",
  introText: "Competitive cheerleading is booming in the UK, with university programmes and national competitions reaching new heights. As a scholarship athlete abroad, you&apos;ll join dynamic cheer squads while earning an advanced degree. Our overseas cheer recruiting connects talented athletes with programmes that value both athletic excellence and academics. Many cheerleaders have moved to London and other UK cities to compete at the highest level while studying abroad.",
  whyPlayAbroad: [
    "Compete in BUCS cheerleading and national championships overseas",
    "Join one of Europe&apos;s fastest-growing cheer communities abroad",
    "Earn a Masters or PhD from prestigious UK universities",
    "Train with international athletes and coaches overseas",
    "Experience European cheerleading culture and competitions abroad",
    "Build coaching and choreography credentials while studying overseas",
  ],
  programBenefits: [
    "Complete overseas recruiting for competitive cheerleaders",
    "University matching with strong cheer programmes abroad",
    "Academic program guidance for international athletes",
    "Visa assistance when you move to London or UK cities",
    "Competition schedule coordination with studies overseas",
    "Career development in coaching and performance abroad",
  ],
  eligibilityRequirements: [
    "Competitive cheerleading experience at high school or college level",
    "Bachelor&apos;s degree for Masters programs abroad",
    "Masters degree for PhD applicants overseas",
    "Meet English language requirements if applicable",
    "Valid passport and UK student visa eligibility",
    "Strong tumbling, stunting, or performance skills for competing abroad",
  ],
  popularDestinations: [
    "Nottingham, England",
    "Loughborough, England",
    "Birmingham, England",
    "Edinburgh, Scotland",
    "Leeds, England",
    "Manchester, England",
    "Sheffield, England",
    "Bristol, England",
  ],
  degreeOptions: [
    "MSc Sports Management",
    "MA Dance Studies",
    "MSc Exercise Science",
    "MBA Business Administration",
    "MA Performing Arts",
    "MSc Psychology",
    "MA Education",
    "MSc Marketing",
    "MA Event Management",
  ],
}

export default function CheerPage() {
  return <SportPageLayout {...sportData} />
}
