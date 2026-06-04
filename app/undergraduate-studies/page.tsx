import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/page-hero"
import { Card, CardContent } from "@/components/ui/card"
import {
  BookOpen,
  Search,
  FileText,
  FolderCheck,
  Bell,
  Plane,
  MapPin,
  Star,
  Users,
  Globe,
  GraduationCap,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Undergraduate Studies in the UK | Guimond Vukovic Group",
  description:
    "Expert UCAS application support for international students applying to UK undergraduate programs. Free consulting, personal statement coaching, and visa assistance from GVG.",
  keywords: [
    "UCAS application support",
    "UK undergraduate international students",
    "study undergraduate UK",
    "UCAS personal statement help",
    "UK university application",
  ],
  openGraph: {
    title: "Undergraduate Studies in the UK | Guimond Vukovic Group",
    description:
      "Expert UCAS application support for international students applying to UK undergraduate programs. Free consulting, personal statement coaching, and visa assistance from GVG.",
  },
}

const services = [
  {
    icon: BookOpen,
    title: "UCAS Application Support",
    body: "Complete assistance completing and submitting your UCAS application with personal statement guidance throughout the process.",
  },
  {
    icon: Search,
    title: "Course & University Selection",
    body: "Personalized matching of your academic profile and goals to the right UK programs and institutions.",
  },
  {
    icon: FileText,
    title: "Personal Statement Coaching",
    body: "Expert coaching to craft a compelling 4,000-character personal statement that stands out to admissions teams.",
  },
  {
    icon: FolderCheck,
    title: "Document Review",
    body: "Thorough review and verification of all required academic documents before submission to UK universities.",
  },
  {
    icon: Bell,
    title: "Application Tracking",
    body: "We monitor your application status and communicate university decisions promptly so you're always informed.",
  },
  {
    icon: Plane,
    title: "Visa & Immigration Assistance",
    body: "Step-by-step support navigating UK student visa requirements and documentation to ensure a smooth process.",
  },
  {
    icon: MapPin,
    title: "Pre-Departure & Orientation Support",
    body: "Guidance on accommodation, travel, and what to expect when you arrive in the UK for the first time.",
  },
]

export default function UndergraduateStudiesPage() {
  return (
    <main>
      <PageHero imageSrc="/images/parliament_hero.png" imageAlt="Houses of Parliament and Westminster, London" tall>
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-indigo-300">
            Undergraduate Studies in the UK
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-balance md:text-5xl lg:text-6xl">
            Your Complete Guide to UK Undergraduate Admissions
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-indigo-100 text-pretty md:text-xl">
            Applying to a UK university as an international student is a complex process. GVG provides expert UCAS
            support, personal statement coaching, and end-to-end guidance — completely free.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://recruit.guimondvukovicgroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-indigo-900 transition-colors hover:bg-indigo-50"
            >
              Sign Up for a Free Consultation
            </a>
            <a
              href="#ucas"
              className="inline-flex items-center rounded-lg border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Learn About UCAS
            </a>
          </div>
        </div>
      </PageHero>

      {/* What is UCAS */}
      <section id="ucas" className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Understanding the System</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl">What is UCAS?</h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                UCAS (Universities and Colleges Admissions Service) is the centralized application platform for UK
                universities. Rather than applying to each university separately, international students submit a single
                UCAS application that is sent to up to five universities simultaneously.
              </p>
              <p>
                The personal statement is a critical component of your UCAS application — a 4,000-character essay
                explaining why you want to study your chosen subject. A strong personal statement can be the difference
                between an offer and a rejection, especially at competitive universities.
              </p>
              <p>
                Navigating deadlines, course requirements, and documentation as an international student adds an
                additional layer of complexity. GVG&apos;s expert team is here to guide you every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-secondary/30 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">What We Offer</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl">
              How We Support Your Application
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Seven services designed to take the stress out of applying to a UK university as an international student.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, body }) => (
              <Card key={title} className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Get Started */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Getting Started</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl">How to Get Started</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Three simple steps from your first conversation with GVG to arriving in the UK.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                step: "1",
                title: "Free Consultation",
                body: "Book a free consultation with our team. We review your academic background, interests, and goals to build a personalised action plan.",
              },
              {
                step: "2",
                title: "Guided Application",
                body: "We support you through every stage — course selection, personal statement coaching, document preparation, and UCAS submission.",
              },
              {
                step: "3",
                title: "Acceptance & Visa Support",
                body: "Once you receive your offer, we guide you through the visa application process and help you prepare for your move to the UK.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a
              href="https://recruit.guimondvukovicgroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Start Your Application
            </a>
          </div>
        </div>
      </section>

      {/* Why GVG */}
      <section className="bg-secondary/30 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Why Choose Us</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl">Why GVG</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: GraduationCap,
                title: "Expert UCAS Knowledge",
                body: "Our team has deep, up-to-date knowledge of the UCAS system and UK university admissions requirements.",
              },
              {
                icon: Star,
                title: "Personalized Service",
                body: "We tailor our support to your individual academic profile, interests, and goals — no one-size-fits-all approach.",
              },
              {
                icon: Users,
                title: "Dedicated Support",
                body: "You will have a dedicated advisor alongside you from your first consultation through to arriving in the UK.",
              },
              {
                icon: Globe,
                title: "Global Experience",
                body: "We have guided students from across the world through the UK admissions process with a strong track record.",
              },
            ].map(({ icon: Icon, title, body }) => (
              <Card key={title} className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold md:text-4xl">Sign Up for a Free Consultation</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg opacity-90">
            Our services are completely free. Start your journey to a UK university today.
          </p>
          <div className="mt-10">
            <a
              href="https://recruit.guimondvukovicgroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-white/90"
            >
              Get Started — It&apos;s Free
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
