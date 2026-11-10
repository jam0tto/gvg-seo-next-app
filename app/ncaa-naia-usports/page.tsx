import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle, GraduationCap, Trophy, Users } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { Card, CardContent } from "@/components/ui/card"

const title = "NCAA, NAIA, USPORTS | Guimond Vukovic Group"
const description =
  "How NCAA, NAIA, and USPORTS athletes can earn a UK Master's degree and keep competing. Placement support from ex-student athletes, free of charge."
const heroImage = "/images/hp_hero.png"
const heroAlt = "Student athletes studying and playing sports in the UK"

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/ncaa-naia-usports" },
  openGraph: {
    type: "website",
    url: "/ncaa-naia-usports",
    siteName: "Guimond Vukovic Group",
    title,
    description,
    images: [{ url: heroImage, width: 1366, height: 768, alt: heroAlt }],
  },
  twitter: { card: "summary_large_image", title, description, images: [heroImage] },
}

const organizations = [
  { name: "NCAA", logo: "/images/ncaa-logo-png-seeklogo-221081.png" },
  { name: "NAIA", logo: "/images/naia-fullname-logo-300dpi-rgb.png" },
  { name: "U Sports", logo: "/images/Usports.png" },
]

const reasons = [
  {
    icon: CheckCircle,
    title: "No Eligibility Restrictions",
    body: "NCAA and NAIA athletes face no eligibility restrictions when pursuing a Master's degree in the UK, so you can keep competing at a high level.",
  },
  {
    icon: Trophy,
    title: "Every Division Considered",
    body: "We have successfully placed NCAA Division I, Division II, Division III, and NAIA athletes. Athletic ability, academic standing, and motivation matter more than your division.",
  },
  {
    icon: GraduationCap,
    title: "A 12-Month Degree",
    body: "A UK Master's degree is typically completed in 12 months, so you can earn a postgraduate qualification in one academic year.",
  },
  {
    icon: Users,
    title: "Advisors Who Have Done It",
    body: "We are ex-NCAA and NAIA student athletes who have played professionally and earned our Master's degrees overseas.",
  },
]

const applying = [
  "A GPA of 2.5 or above to be considered by our partner universities",
  "Applicants who have already completed their undergraduate degree are welcome",
  "Athletes can apply with a friend or teammate",
  "Our services are free of charge to athletes",
]

export default function NcaaNaiaUsportsPage() {
  return (
    <main>
      <PageHero imageSrc={heroImage} imageAlt={heroAlt}>
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-indigo-300">
            For Collegiate Athletes
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-balance md:text-5xl">
            NCAA, NAIA, and USPORTS Athletes
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-indigo-100 text-pretty">
            We provide the knowledge and resources you need as an NCAA, NAIA, USPORTS, or club athlete to continue your
            athletic, academic, and professional careers in the UK.
          </p>
        </div>
      </PageHero>

      {/* Organizations */}
      <section className="border-b bg-background py-10">
        <div className="mx-auto flex max-w-3xl items-center justify-around gap-8 px-4 sm:px-6 lg:px-8">
          {organizations.map(({ name, logo }) => (
            <div key={name} className="relative h-16 w-28 md:h-20 md:w-36">
              <Image src={logo} alt={`${name} logo`} fill sizes="144px" className="object-contain" />
            </div>
          ))}
        </div>
      </section>

      {/* Why */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">The Opportunity</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Keep Competing While You Earn Your Master&apos;s
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {reasons.map(({ icon: Icon, title: cardTitle, body }) => (
              <Card key={cardTitle} className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{cardTitle}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Applying */}
      <section className="bg-secondary/30 py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Getting Started</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl">What to Know Before You Apply</h2>
          </div>
          <ul className="mt-10 space-y-4">
            {applying.map((item) => (
              <li key={item} className="flex items-start gap-3 text-lg text-muted-foreground">
                <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold md:text-4xl">Continue Your Career in the UK</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg opacity-90">
            See how GVG can match you with the right university and program.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-white/90"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/playing-professionally-overseas"
              className="inline-flex items-center rounded-lg border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Playing Professionally Overseas
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
