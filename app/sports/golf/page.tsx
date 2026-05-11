import { Metadata } from "next"
import { SportPageLayout } from "@/components/sport-page-layout"

export const metadata: Metadata = {
  title: "Play Golf Abroad | Scholarship Athlete Program UK",
  description: "Play golf overseas while earning your Masters or PhD in the UK. Expert recruiting for scholarship athletes seeking to compete at British universities near legendary courses.",
  keywords: ["golf abroad", "play golf overseas", "UK golf scholarship", "scholarship athlete UK", "study abroad golf", "overseas golf recruiting", "moved to london golf", "play college golf abroad"],
  openGraph: {
    title: "Play Golf Abroad | Scholarship Athlete Program",
    description: "Play golf overseas while earning your Masters or PhD in the UK.",
  },
}

const sportData = {
  sport: "Golf",
  slug: "golf",
  heroTitle: "Play Golf Abroad While Earning Your Degree",
  heroSubtitle: "Tee off in the birthplace of golf as a scholarship athlete. Earn your Masters or PhD while playing on legendary British links and parkland courses overseas.",
  heroImage: "/images/sports/golf.jpg",
  introText: "Scotland invented golf, and the UK remains the spiritual home of the sport with courses like St Andrews, Royal Troon, and countless championship venues. For scholarship athletes who want to play overseas, UK universities offer access to world-famous courses and professional pathway programs. Our overseas golf recruiting connects talented players with programmes that combine elite golf and academic excellence abroad. Many golfers have moved to London, Edinburgh, and other UK cities to train on historic courses while earning advanced degrees.",
  whyPlayAbroad: [
    "Play golf in the birthplace of the sport overseas",
    "Access legendary links and championship courses across the UK",
    "Earn a Masters or PhD from world-renowned British universities",
    "Compete in BUCS golf and England Golf pathway events abroad",
    "Train with PGA-qualified coaches while studying overseas",
    "Build connections for professional and amateur tours abroad",
  ],
  programBenefits: [
    "Comprehensive overseas recruiting for competitive golfers",
    "University matching with access to premier courses abroad",
    "Scholarship guidance for international golf athletes",
    "Visa assistance when you move to London, Edinburgh, or UK golf centres",
    "Tournament schedule coordination with academics overseas",
    "Professional pathway guidance while studying abroad",
  ],
  eligibilityRequirements: [
    "Competitive handicap or collegiate golf experience",
    "Bachelor&apos;s degree for Masters programs abroad",
    "Masters degree for PhD applicants overseas",
    "Meet English language requirements if applicable",
    "Valid passport and UK student visa eligibility",
    "Commitment to competitive golf while studying abroad",
  ],
  popularDestinations: [
    "St Andrews, Scotland",
    "Edinburgh, Scotland",
    "Stirling, Scotland",
    "Birmingham, England",
    "Bath, England",
    "Exeter, England",
    "Bristol, England",
    "Durham, England",
  ],
  degreeOptions: [
    "MSc Sports Management",
    "MBA Business Administration",
    "MSc Golf Management",
    "MA Sports Coaching",
    "MSc Exercise Science",
    "MSc Hospitality Management",
    "PhD Golf Performance",
    "MSc Psychology",
    "MA International Business",
  ],
}

export default function GolfPage() {
  return <SportPageLayout {...sportData} />
}
