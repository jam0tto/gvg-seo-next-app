import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { PageHero } from "@/components/page-hero"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Trophy, Plane, CheckCircle, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Guimond Vukovic Group | Play Overseas & Earn Your Master's Degree",
  description:
    "Free consulting for NCAA, NAIA, USPORTS, and club athletes to earn a Master's degree while playing sports in the UK. 60+ athletes placed at 15+ partner universities.",
  keywords: [
    "play overseas",
    "NCAA athletes UK",
    "masters degree abroad",
    "student athlete scholarship UK",
    "NAIA overseas",
    "play sports UK",
  ],
  openGraph: {
    title: "Guimond Vukovic Group | Play Overseas & Earn Your Master's Degree",
    description:
      "Free consulting for NCAA, NAIA, and club athletes to earn Master's degrees while playing overseas in the UK.",
  },
}

const universityPartners = [
  { name: "University of Essex", logo: "/images/essexpartner_1.png" },
  { name: "University of West England (UWE)", logo: "/images/uwepartner_2.png" },
  { name: "University of East London (UEL)", logo: "/images/uel_partner.jpg" },
  { name: "Bournemouth University", logo: "/images/bupartner.png" },
  { name: "Anglia Ruskin University", logo: "/images/arupartner.png" },
  { name: "De Montfort University", logo: "/images/dmu.png" },
  { name: "Loughborough University", logo: "/images/loughborough.png", scale: "scale-150" },
  { name: "Nottingham Trent University", logo: "/images/nottingham-trent-university-logo-2.webp" },
  { name: "University of Derby", logo: "/images/uni_derby_logo.png" },
  { name: "Hartpury University", logo: "/images/hartpury_university.png" },
  { name: "Newcastle University", logo: "/images/newcastle_university.png" },
]

const orgPartners = [
  { name: "Tomasik Agency", logo: "/images/tomasikparnter.png" },
  { name: "NCAA", logo: "/images/ncaa-logo-png-seeklogo-221081.png" },
  { name: "U Sports", logo: "/images/Usports.png" },
  { name: "NAIA", logo: "/images/naia-fullname-logo-300dpi-rgb.png" },
  { name: "British Universities & Colleges Sport (BUCS)", logo: "/images/british-universities-colleges-sport-seeklogo.png" },
  { name: "UCAS", logo: "/images/UCAS_logo.png" },
]

export default function HomePage() {
  return (
    <main>
      <PageHero imageSrc="/images/hp_hero.png" imageAlt="Student athletes studying and playing sports in the UK" tall>
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-indigo-300">
            Free Consulting for Student Athletes
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-balance md:text-5xl lg:text-6xl">
            Earn Your Master&apos;s Degree and Play Overseas
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-indigo-100 text-pretty md:text-xl">
            We provide the knowledge and resources you need as an NCAA, NAIA, USPORTS, or Club Athlete to continue
            your athletic, academic, and professional careers in the UK.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-indigo-900 transition-colors hover:bg-indigo-50"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/play-overseas-information"
              className="inline-flex items-center rounded-lg border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              How It Works
            </Link>
          </div>
        </div>
      </PageHero>

      {/* Stats */}
      <section className="border-b bg-background">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-border md:grid-cols-4">
          {[
            { value: "60+", label: "Athletes Placed" },
            { value: "15+", label: "Partner Universities" },
            { value: "Free", label: "Cost to Athletes" },
            { value: "12 Mo", label: "Master's Duration" },
          ].map((stat) => (
            <div key={stat.label} className="px-6 py-8 text-center">
              <p className="text-3xl font-bold text-primary">{stat.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">Our Mission</p>
              <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl">
                We&apos;ve Been Where You Are Today
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                We are ex-NCAA and NAIA student athletes who have played professionally and earned our Master&apos;s
                overseas. Our goal is to enable every postgraduate who has the grit and tenacity to continue their
                career to do so.
              </p>
              <p className="mt-4 text-muted-foreground">
                GVG is a registered representative at each of our partner universities and professional clubs. Our
                services are trusted, prioritized, and we have direct access to invaluable information and international
                contacts for our clients.
              </p>
              <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-semibold text-accent">
                <CheckCircle className="h-4 w-4" />
                Our services are 100% FREE to athletes
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {[
                { name: "Derek Guimond", role: "Co-Founder", detail: "Ex-NCAA athlete & Master's graduate who played professionally overseas", headshot: "/images/derek_headshot.png" },
                { name: "Vladimir Vukovic", role: "Co-Founder", detail: "Played professionally overseas and earned his Master's degree in the UK", headshot: "/images/vlad_headshot.jpg" },
              ].map((founder) => (
                <Card key={founder.name} className="border-border/50">
                  <CardContent className="p-6">
                    <div className="mb-3 relative h-12 w-12 overflow-hidden rounded-full">
                      <Image src={founder.headshot} alt={founder.name} fill className="object-cover object-top" />
                    </div>
                    <p className="font-semibold text-foreground">{founder.name}</p>
                    <p className="text-sm font-medium text-accent">{founder.role}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{founder.detail}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-secondary/30 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Why GVG</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Your Complete Support Network
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              We built our network and resources to serve you. By joining the GVG team you gain full access to
              life-changing opportunities, impressive international contacts, and professional expertise.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Trophy,
                title: "100% Free Services",
                body: "We are compensated by universities, never by athletes. You receive expert guidance at no cost to you.",
              },
              {
                icon: GraduationCap,
                title: "Direct University Access",
                body: "As registered representatives at partner universities, we have priority placement and direct contacts for our athletes.",
              },
              {
                icon: Plane,
                title: "End-to-End Support",
                body: "From application to visa to relocation — we manage the full process so you can focus on your game and studies.",
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

      {/* Partners */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Our Network</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Partner Universities &amp; Organizations
            </h2>
          </div>

          <div className="mt-12">
            <p className="mb-5 text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Universities
            </p>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {universityPartners.map((partner) => (
                <div
                  key={partner.name}
                  className="flex items-center justify-center rounded-xl bg-white p-5 shadow-sm"
                >
                  <div className="relative h-20 w-full overflow-hidden">
                    <Image src={partner.logo} alt={partner.name} fill className={`object-contain${partner.scale ? ` ${partner.scale}` : ""}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <p className="mb-5 text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Organizations
            </p>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {orgPartners.map((partner) => (
                <div
                  key={partner.name}
                  className="flex items-center justify-center rounded-xl bg-white p-5 shadow-sm"
                >
                  <div className="relative h-20 w-full">
                    <Image src={partner.logo} alt={partner.name} fill className="object-contain" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Regional hubs */}
      <section className="bg-secondary/30 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Who We Serve</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Find Your Region
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "African Students",
                description:
                  "We have local recruiters in Nigeria, Kenya, and Zambia, with scholarship opportunities across our UK partner network.",
                href: "/african-students",
                countries: ["Nigeria", "Kenya", "Zambia"],
              },
              {
                title: "Indian, Pakistani & SE Asian Students",
                description:
                  "Dedicated support for students from India, Pakistan, Nepal, and across Southeast Asia pursuing UK university opportunities.",
                href: "/asian-students",
                countries: ["India", "Pakistan", "Nepal"],
              },
            ].map((region) => (
              <Card key={region.title} className="overflow-hidden border-0 shadow-sm transition-shadow hover:shadow-md">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-foreground">{region.title}</h3>
                  <p className="mt-3 text-muted-foreground">{region.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {region.countries.map((c) => (
                      <span
                        key={c}
                        className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={region.href}
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-all hover:gap-2.5"
                  >
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold md:text-4xl">Ready to Play Overseas?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg opacity-90">
            Join over 60 athletes who have earned their Master&apos;s degree and played competitive sports in the UK.
            Our services are completely free.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-white/90"
            >
              Get Your Free Consultation
            </Link>
            <Link
              href="/faq"
              className="inline-flex items-center rounded-lg border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Read the FAQ
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
