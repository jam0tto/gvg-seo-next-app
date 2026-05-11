import { Metadata } from "next"
import { SportPageLayout } from "@/components/sport-page-layout"

export const metadata: Metadata = {
  title: "Train Judo Abroad | Scholarship Athlete Program UK",
  description: "Train judo overseas while earning your Masters or PhD in the UK. Expert recruiting for scholarship athletes seeking martial arts opportunities abroad at British universities.",
  keywords: ["judo abroad", "martial arts overseas", "UK judo scholarship", "scholarship athlete UK", "study abroad judo", "overseas judo recruiting", "moved to london judo"],
  openGraph: {
    title: "Train Judo Abroad | Scholarship Athlete Program",
    description: "Train judo overseas while earning your Masters or PhD in the UK.",
  },
}

const sportData = {
  sport: "Judo",
  slug: "judo",
  heroTitle: "Train Judo Abroad While Earning Your Degree",
  heroSubtitle: "Elevate your judo career overseas as a scholarship athlete. Earn your Masters or PhD while training at elite UK programs and competing internationally.",
  heroImage: "/images/sports/judo.jpg",
  introText: "British judo has produced numerous Olympic and World Championship medalists, and UK universities offer exceptional training environments for scholarship athletes from abroad. Our overseas judo recruiting connects dedicated judoka with programs that balance high-performance training and academic excellence. Many athletes have moved to London and other UK cities to train at world-class facilities while earning advanced degrees overseas.",
  whyPlayAbroad: [
    "Train at universities with British Judo High Performance Centre access",
    "Earn a Masters or PhD while competing at international level overseas",
    "Access Olympic-level coaching and sparring partners abroad",
    "Compete in BUCS, national, and European judo circuits",
    "Build connections with the global judo community overseas",
    "Develop coaching qualifications while training abroad",
  ],
  programBenefits: [
    "Full overseas recruiting support for competitive judoka",
    "University matching based on weight class and academic interests abroad",
    "Scholarship guidance for international martial arts athletes",
    "Visa assistance when you move to London or UK training centres",
    "Competition calendar coordination with academic schedule overseas",
    "Pathway guidance for coaching and sports careers abroad",
  ],
  eligibilityRequirements: [
    "Competitive judo background (dan grade preferred)",
    "Bachelor&apos;s degree for Masters programs overseas",
    "Masters degree for PhD applicants studying abroad",
    "Meet English language requirements if applicable",
    "Valid passport and UK student visa eligibility",
    "Dedication to training while pursuing academic goals abroad",
  ],
  popularDestinations: [
    "London, England",
    "Edinburgh, Scotland",
    "Wolverhampton, England",
    "Bath, England",
    "Coventry, England",
    "Sheffield, England",
    "Manchester, England",
    "Cambridge, England",
  ],
  degreeOptions: [
    "MSc Sports Coaching",
    "MA Martial Arts Studies",
    "MSc Strength & Conditioning",
    "MBA Sports Management",
    "MSc Exercise Physiology",
    "MA Education",
    "PhD Combat Sports Science",
    "MSc Psychology",
    "MSc Nutrition",
  ],
}

export default function JudoPage() {
  return <SportPageLayout {...sportData} />
}
