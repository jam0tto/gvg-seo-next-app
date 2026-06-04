import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/page-hero"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, MapPin, BadgeDollarSign } from "lucide-react"
import { AsianInquiryForm } from "./inquiry-form"

export const metadata: Metadata = {
  title: "Asian Students | Study in the UK | Guimond Vukovic Group",
  description:
    "Free consulting for student athletes from India, Pakistan, Nepal, and across Asia. Study in the UK with scholarship opportunities of 20–40% off tuition.",
  keywords: [
    "Indian students UK",
    "Pakistan students UK",
    "Nepal students UK",
    "Asian students scholarship UK",
    "study abroad Asia",
  ],
  alternates: { canonical: "/asian-students" },
  openGraph: {
    title: "Asian Students | Study in the UK | Guimond Vukovic Group",
    description:
      "Free consulting for student athletes from India, Pakistan, Nepal, and across Asia. Study in the UK with scholarship opportunities of 20–40% off tuition.",
  },
}

const countryLinks = [
  { name: "India", href: "/countries/india" },
  { name: "Pakistan", href: "/countries/pakistan" },
  { name: "Nepal", href: "/countries/nepal" },
]

const features = [
  {
    icon: GraduationCap,
    title: "Scholarships Available",
    body: "20–40% tuition reductions commonly secured through our network of UK partner universities.",
  },
  {
    icon: MapPin,
    title: "Local Recruiters",
    body: "On-the-ground support across South and Southeast Asia — advisors who understand your journey.",
  },
  {
    icon: BadgeDollarSign,
    title: "100% Free",
    body: "Our services cost nothing to students. We are compensated by universities, never by athletes.",
  },
]

export default function AsianStudentsPage() {
  return (
    <main>
      <PageHero imageSrc="/images/london_bridge_hero.png" imageAlt="London skyline at dusk">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-indigo-300">
            Study in the UK
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-balance md:text-5xl">
            Asian Student Athletes
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-indigo-100 text-pretty">
            We connect talented student athletes from India, Pakistan, Nepal, and across Asia with UK university
            opportunities — complete with scholarship support and end-to-end guidance. Our services are completely
            free.
          </p>
        </div>
      </PageHero>

      {/* Intro */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Text */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">Who We Help</p>
              <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl">
                Opportunities Across Asia
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                If you are a prospective student from India, Pakistan, or Asia, please send us an enquiry and we will
                be in touch regarding opportunities to study in the UK. Scholarships of around 20–40% off tuition are
                commonly available. Our services are totally free.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We welcome applications from students across the entire Asian continent and are continually growing our
                network of partner universities and regional recruiters.
              </p>
            </div>
            {/* Country cards */}
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {countryLinks.map((country) => (
                <Card key={country.name} className="border-border/50 transition-shadow hover:shadow-md">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground text-lg">{country.name}</h3>
                    <Link
                      href={country.href}
                      className="mt-2 block text-sm text-accent hover:underline"
                    >
                      Learn about opportunities for {country.name} students &rarr;
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why GVG */}
      <section className="bg-secondary/30 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Why GVG</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Your Dedicated Asian Student Support Team
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {features.map(({ icon: Icon, title, body }) => (
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

      {/* Inquiry form */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">Get Started</p>
              <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl">
                Send Us an Enquiry
              </h2>
              <p className="mx-auto mt-4 text-muted-foreground">
                Fill in the form below and a member of our team will be in touch to discuss your options.
              </p>
            </div>
            <div className="mt-10">
              <AsianInquiryForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
