import { Metadata } from "next"
import { SportPageLayout } from "@/components/sport-page-layout"

export const metadata: Metadata = {
  title: "Play Lacrosse Abroad | Scholarship Athlete Program UK",
  description: "Play lacrosse overseas while earning your Masters or PhD in the UK. Expert recruiting for scholarship athletes seeking to compete at British universities.",
  keywords: ["lacrosse abroad", "play lacrosse overseas", "UK lacrosse scholarship", "scholarship athlete UK", "study abroad lacrosse", "overseas lacrosse recruiting", "moved to london lacrosse"],
  openGraph: {
    title: "Play Lacrosse Abroad | Scholarship Athlete Program",
    description: "Play lacrosse overseas while earning your Masters or PhD in the UK.",
  },
}

const sportData = {
  sport: "Lacrosse",
  slug: "lacrosse",
  heroTitle: "Play Lacrosse Abroad While Earning Your Degree",
  heroSubtitle: "Continue your lacrosse journey overseas as a scholarship athlete. Earn your Masters or PhD while competing in the UK&apos;s growing lacrosse community.",
  heroImage: "/images/sports/lacrosse.jpg",
  introText: "UK lacrosse is experiencing significant growth, with strong university programs and national team pathways creating opportunities for international scholarship athletes to play overseas. Whether you play men&apos;s or women&apos;s lacrosse, our overseas recruiting connects talented players with British universities. Many athletes have moved to London and other UK cities to continue their lacrosse careers while earning advanced degrees abroad.",
  whyPlayAbroad: [
    "Play in one of Europe&apos;s fastest-growing lacrosse nations overseas",
    "Compete in BUCS lacrosse and national championship tournaments abroad",
    "Earn a Masters or PhD from world-renowned UK universities",
    "Gain eligibility for England or GB national team programmes overseas",
    "Train with international players from across Europe abroad",
    "Build connections in the global lacrosse community overseas",
  ],
  programBenefits: [
    "Complete overseas recruiting for men&apos;s and women&apos;s lacrosse",
    "University matching with strong lacrosse programs abroad",
    "Scholarship guidance for international student athletes",
    "Visa assistance when you move to London or UK cities",
    "Competition schedule coordination with academics overseas",
    "National team eligibility guidance while studying abroad",
  ],
  eligibilityRequirements: [
    "Competitive lacrosse experience at high school, club, or college level",
    "Bachelor&apos;s degree for Masters programs abroad",
    "Masters degree for PhD applicants overseas",
    "Meet English language requirements if applicable",
    "Valid passport and UK student visa eligibility",
    "Commitment to growing UK lacrosse while studying abroad",
  ],
  popularDestinations: [
    "Durham, England",
    "Edinburgh, Scotland",
    "Bristol, England",
    "Nottingham, England",
    "Exeter, England",
    "Cambridge, England",
    "Manchester, England",
    "Leeds, England",
  ],
  degreeOptions: [
    "MSc Sports Management",
    "MBA Business Administration",
    "MA Sports Coaching",
    "MSc Exercise Science",
    "MA International Relations",
    "MSc Psychology",
    "PhD Sports Studies",
    "MSc Marketing",
    "MA Education",
  ],
}

export default function LacrossePage() {
  return <SportPageLayout {...sportData} />
}
