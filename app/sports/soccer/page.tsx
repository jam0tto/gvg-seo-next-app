import { Metadata } from "next"
import { SportPageLayout } from "@/components/sport-page-layout"

export const metadata: Metadata = {
  title: "Play College Soccer Abroad | Scholarship Athlete UK",
  description: "Play college soccer while earning your Masters or PhD at a UK university. GVG places scholarship athletes at British universities — free.",
  keywords: ["play college soccer abroad", "soccer abroad", "play soccer overseas", "UK football scholarship", "scholarship athlete UK", "study abroad soccer", "overseas soccer recruiting", "moved to london football", "play college soccer and still study abroad"],
  alternates: { canonical: "/sports/soccer" },
  openGraph: {
    title: "Play College Soccer Abroad | Scholarship Athlete UK",
    description: "Play college soccer and still study abroad while earning your Masters or PhD in the UK.",
  },
}

const sportData = {
  sport: "Soccer",
  slug: "soccer",
  heroTitle: "Play College Soccer and Still Study Abroad in the UK",
  heroSubtitle: "Live the dream of playing soccer overseas while earning your Masters or PhD. The UK is the home of football, offering unmatched opportunities for scholarship athletes.",
  heroImage: "/images/sports/soccer.jpg",
  introText: "There&apos;s no better place to play college soccer abroad than the United Kingdom - the birthplace of the beautiful game. As a scholarship athlete, you&apos;ll compete at historic grounds, train with UEFA-qualified coaches, and earn an advanced degree from world-renowned universities. Our overseas soccer recruiting has helped countless players who wanted to play college soccer and still study abroad achieve their dreams. Many have moved to London and cities across Britain to pursue football at the highest level.",
  whyPlayAbroad: [
    "Play college soccer and still study abroad in the home of football",
    "Compete in BUCS leagues and cup competitions overseas",
    "Earn a Masters or PhD from prestigious UK universities while playing",
    "Train with UEFA-licensed coaches at elite facilities abroad",
    "Gain exposure to professional scouts in the world&apos;s top football nation",
    "Experience authentic football culture while studying overseas",
  ],
  programBenefits: [
    "Complete overseas soccer recruiting support for scholarship athletes",
    "University matching based on playing level and academic aspirations abroad",
    "Scholarship and funding guidance for international student athletes",
    "Direct connections with UK university football programs overseas",
    "Visa assistance when you move to London or other UK cities",
    "Pathway guidance to semi-pro and professional opportunities abroad",
  ],
  eligibilityRequirements: [
    "Competitive soccer experience at club, college, or semi-pro level",
    "Bachelor&apos;s degree for Masters programs studying abroad",
    "Masters degree for PhD applicants overseas",
    "Meet English language requirements if applicable",
    "Valid passport and UK student visa eligibility",
    "Passion for both football and academic excellence abroad",
  ],
  popularDestinations: [
    "London, England",
    "Manchester, England",
    "Liverpool, England",
    "Birmingham, England",
    "Leeds, England",
    "Edinburgh, Scotland",
    "Glasgow, Scotland",
    "Cardiff, Wales",
  ],
  degreeOptions: [
    "MSc Sports Management",
    "MA Football Business",
    "MSc Sports Coaching",
    "MBA Business Administration",
    "MA Sports Journalism",
    "MSc Exercise Science",
    "PhD Football Studies",
    "MSc Performance Analysis",
    "MA International Business",
  ],
}

export default function SoccerPage() {
  return <SportPageLayout {...sportData} />
}
