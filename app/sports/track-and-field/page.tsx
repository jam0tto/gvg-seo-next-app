import { Metadata } from "next"
import { SportPageLayout } from "@/components/sport-page-layout"

export const metadata: Metadata = {
  title: "Compete Track and Field Abroad | Scholarship Athlete Program UK",
  description: "Compete in track and field overseas while earning your Masters or PhD in the UK. Expert recruiting for scholarship athletes seeking athletics opportunities abroad.",
  keywords: ["track and field abroad", "athletics overseas", "UK athletics scholarship", "scholarship athlete UK", "study abroad track", "overseas athletics recruiting", "moved to london athletics", "run track abroad"],
  openGraph: {
    title: "Compete Track and Field Abroad | Scholarship Athlete Program",
    description: "Compete in track and field overseas while earning your Masters or PhD in the UK.",
  },
}

const sportData = {
  sport: "Track and Field",
  slug: "track-and-field",
  heroTitle: "Compete in Track and Field Abroad While Earning Your Degree",
  heroSubtitle: "Chase your athletics dreams overseas as a scholarship athlete. Earn your Masters or PhD while training and competing at elite UK facilities.",
  heroImage: "/images/sports/track-and-field.jpg",
  introText: "British athletics has a proud tradition of producing world-class track and field athletes, and UK universities offer exceptional programs for scholarship athletes from abroad. From sprints to throws, jumps to combined events, our overseas athletics recruiting connects talented competitors with programs that excel both on the track and in the classroom. Many athletes have moved to London and other UK cities to train at Olympic-standard facilities while earning advanced degrees overseas.",
  whyPlayAbroad: [
    "Train at world-class athletics facilities across the UK",
    "Earn a Masters or PhD while competing at international level overseas",
    "Access coaching staff who have developed Olympic medalists abroad",
    "Compete in BUCS championships and Diamond League meetings",
    "Build connections with UK Athletics and European federations overseas",
    "Gain exposure to professional management and sponsorship abroad",
  ],
  programBenefits: [
    "Complete overseas recruiting for all track and field events",
    "University matching based on event and academic aspirations abroad",
    "Scholarship and funding guidance for international athletes",
    "Visa assistance when you move to London or UK athletics centres",
    "Training and competition schedule optimization overseas",
    "Career pathway guidance for elite athletics abroad",
  ],
  eligibilityRequirements: [
    "Competitive track and field marks at collegiate or national level",
    "Bachelor&apos;s degree for Masters programs overseas",
    "Masters degree for PhD applicants studying abroad",
    "Meet English language requirements if applicable",
    "Valid passport and UK student visa eligibility",
    "Commitment to year-round training while studying abroad",
  ],
  popularDestinations: [
    "Loughborough, England",
    "Birmingham, England",
    "Bath, England",
    "Manchester, England",
    "Edinburgh, Scotland",
    "Sheffield, England",
    "Leeds, England",
    "Cardiff, Wales",
  ],
  degreeOptions: [
    "MSc Sports Science",
    "MSc Biomechanics",
    "MSc Exercise Physiology",
    "MBA Sports Management",
    "MSc Strength & Conditioning",
    "MA Sports Coaching",
    "PhD Athletics Performance",
    "MSc Nutrition",
    "MSc Psychology",
  ],
}

export default function TrackAndFieldPage() {
  return <SportPageLayout {...sportData} />
}
