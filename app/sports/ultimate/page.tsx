import { Metadata } from "next"
import { SportPageLayout } from "@/components/sport-page-layout"

export const metadata: Metadata = {
  title: "Ultimate Frisbee Abroad | Scholarship Athlete UK",
  description: "Play ultimate frisbee overseas and earn your Masters or PhD at a UK university. GVG places scholarship athletes at British programs — free.",
  keywords: ["ultimate frisbee abroad", "play ultimate overseas", "UK ultimate scholarship", "scholarship athlete UK", "study abroad ultimate", "overseas ultimate recruiting", "moved to london ultimate"],
  alternates: { canonical: "/sports/ultimate" },
  openGraph: {
    title: "Ultimate Frisbee Abroad | Scholarship Athlete UK",
    description: "Play ultimate frisbee overseas while earning your Masters or PhD in the UK.",
  },
}

const sportData = {
  sport: "Ultimate",
  slug: "ultimate",
  heroTitle: "Play Ultimate Frisbee Abroad While Earning Your Degree",
  heroSubtitle: "Take your ultimate game overseas as a scholarship athlete. Earn your Masters or PhD while competing in one of Europe&apos;s strongest ultimate communities.",
  heroImage: "/images/sports/ultimate.jpg",
  introText: "The UK has one of the most vibrant ultimate frisbee communities in Europe, with strong university programs and access to international competition. As a scholarship athlete abroad, you&apos;ll join a passionate community while earning an advanced degree. Our overseas ultimate recruiting connects talented players with universities where they can compete at the highest level and study abroad. Many players have moved to London and other UK cities to experience top-tier ultimate while pursuing academic excellence.",
  whyPlayAbroad: [
    "Join one of Europe&apos;s strongest ultimate communities overseas",
    "Compete in BUCS, national, and European championships abroad",
    "Earn a Masters or PhD from world-class UK universities",
    "Train with international players from across Europe overseas",
    "Experience the spirit of the game in a new cultural context abroad",
    "Build connections in the global ultimate community overseas",
  ],
  programBenefits: [
    "Complete overseas recruiting support for ultimate players",
    "University matching with strong ultimate programs abroad",
    "Academic program guidance for international athletes overseas",
    "Visa assistance when you move to London or UK cities",
    "Tournament schedule coordination with studies abroad",
    "Community integration support throughout your time overseas",
  ],
  eligibilityRequirements: [
    "Competitive ultimate experience at club or college level",
    "Bachelor&apos;s degree for Masters programs abroad",
    "Masters degree for PhD applicants overseas",
    "Meet English language requirements if applicable",
    "Valid passport and UK student visa eligibility",
    "Passion for both ultimate and academic pursuits abroad",
  ],
  popularDestinations: [
    "London, England",
    "Brighton, England",
    "Leeds, England",
    "Bristol, England",
    "Edinburgh, Scotland",
    "Manchester, England",
    "Birmingham, England",
    "Nottingham, England",
  ],
  degreeOptions: [
    "MSc Sports Management",
    "MBA Business Administration",
    "MA Sports Coaching",
    "MSc Environmental Science",
    "MSc Psychology",
    "MA International Development",
    "PhD Sports Studies",
    "MSc Public Health",
    "MA Education",
  ],
}

export default function UltimatePage() {
  return <SportPageLayout {...sportData} />
}
