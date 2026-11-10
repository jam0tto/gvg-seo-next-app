import Image from "next/image"
import Link from "next/link"
import { Globe, GraduationCap, Handshake } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { Card, CardContent } from "@/components/ui/card"
import { pageMetadata, ogImages } from "@/lib/seo"

const title = "Playing Professionally Overseas | Guimond Vukovic Group"
const description =
  "Play professionally overseas with support from GVG. 50+ professional contracts signed, with free guidance from founders who played abroad."
const heroImage = "/images/london_bridge_hero.png"
const heroAlt = "Tower Bridge and London skyline"

export const metadata = pageMetadata({
  title,
  description,
  path: "/playing-professionally-overseas",
  image: ogImages.london,
})

const stats = [
  { value: "50+", label: "Professional Contracts Signed" },
  { value: "5+", label: "UK-Based Player Contracts" },
  { value: "60+", label: "Athletes in Postgrad Programs" },
  { value: "15+", label: "Countries Represented" },
]

const benefits = [
  {
    icon: GraduationCap,
    title: "Build Your Prospects",
    body: "Studying in the UK gives you the opportunity to develop your game, accumulate more video footage, build an international network, and earn a postgraduate qualification.",
  },
  {
    icon: Handshake,
    title: "Direct Club Access",
    body: "GVG is a registered representative at each of our partner universities and professional clubs, giving our clients direct access to information and international contacts.",
  },
  {
    icon: Globe,
    title: "Free for Athletes",
    body: "Our services are free of charge to athletes. We are compensated by our partner universities and professional clubs, never by the athletes we represent.",
  },
]

const founders = [
  {
    name: "Derek Guimond",
    role: "Co-Founder",
    detail: "Ex-NCAA athlete & Master's graduate who played professionally overseas",
    headshot: "/images/derek_headshot.png",
  },
  {
    name: "Vladimir Vukovic",
    role: "Co-Founder",
    detail: "Played professionally overseas and earned his Master's degree in the UK",
    headshot: "/images/vlad_headshot.jpg",
  },
]

export default function PlayingProfessionallyOverseasPage() {
  return (
    <main>
      <PageHero imageSrc={heroImage} imageAlt={heroAlt}>
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-indigo-300">
            Your Professional Path
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-balance md:text-5xl">
            Playing Professionally Overseas
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-indigo-100 text-pretty">
            We&apos;ve been where you are. Our founders played professionally overseas, and GVG helps athletes continue
            their athletic, academic, and professional careers.
          </p>
        </div>
      </PageHero>

      {/* Stats */}
      <section className="border-b bg-background">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-border md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="px-6 py-8 text-center">
              <p className="text-3xl font-bold text-primary">{stat.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Why GVG</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Professional Career or Postgraduate Study?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              A UK Master&apos;s degree is typically completed in 12 months, so you can earn a postgraduate
              qualification in one academic year and return to professional opportunities sooner.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {benefits.map(({ icon: Icon, title: cardTitle, body }) => (
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

      {/* Founders */}
      <section className="bg-secondary/30 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Our Team</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl">Led by Former Pros</h2>
          </div>
          <div className="mx-auto mt-12 grid max-w-2xl gap-6 sm:grid-cols-2">
            {founders.map((founder) => (
              <Card key={founder.name} className="overflow-hidden border-border/50">
                <div className="relative h-64 w-full bg-muted">
                  <Image
                    src={founder.headshot}
                    alt={founder.name}
                    fill
                    sizes="(min-width: 640px) 336px, 100vw"
                    className="object-cover object-top"
                  />
                </div>
                <CardContent className="p-6">
                  <p className="font-semibold text-foreground">{founder.name}</p>
                  <p className="text-sm font-medium text-accent">{founder.role}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{founder.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold md:text-4xl">Take Your Game Overseas</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg opacity-90">
            Tell us about your sport and your goals, and we&apos;ll find the right opportunity for you.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-white/90"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/finance-and-financial-aid"
              className="inline-flex items-center rounded-lg border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Finance and Financial Aid
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
