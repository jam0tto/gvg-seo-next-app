import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { PageHero } from "@/components/page-hero"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, MapPin, BadgeDollarSign } from "lucide-react"
import { AfricanInquiryForm } from "./inquiry-form"

export const metadata: Metadata = {
  title: "African Students | Study in the UK | Guimond Vukovic Group",
  description:
    "Free consulting for African student athletes from Nigeria, Kenya, and Zambia. UK university scholarships of 20–40% off tuition — apply now.",
  keywords: [
    "African students UK",
    "study abroad Africa",
    "Nigerian students UK",
    "Kenyan students UK",
    "Zambia UK scholarship",
    "African athlete scholarship",
  ],
  alternates: { canonical: "/african-students" },
  openGraph: {
    title: "African Students | Study in the UK | Guimond Vukovic Group",
    description:
      "Free consulting for African student athletes from Nigeria, Kenya, and Zambia. Scholarship opportunities of 20–40% off tuition at UK universities.",
  },
}

const countryLinks = [
  { name: "Nigeria", href: "/countries/nigeria", thumbnail: "/images/nigeria_thumbnail.jpg" },
  { name: "Kenya", href: "/countries/kenya", thumbnail: "/images/kenya_thumbnail.jpg" },
  { name: "Zambia", href: "/countries/zambia", thumbnail: "/images/zambia_thumbnail.jpg" },
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
    body: "On-the-ground support in Nigeria, Kenya, and Zambia — advisors who understand your journey.",
  },
  {
    icon: BadgeDollarSign,
    title: "100% Free",
    body: "Our services cost nothing to students. We are compensated by universities, never by athletes.",
  },
]

export default function AfricanStudentsPage() {
  return (
    <main>
      <PageHero imageSrc="/images/parliament_hero.png" imageAlt="Houses of Parliament and Westminster, London">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-indigo-300">
            Study in the UK
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-balance md:text-5xl">
            African Student Athletes
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-indigo-100 text-pretty">
            We connect talented student athletes from across Africa with UK university opportunities — complete with
            scholarship support, local recruiters, and end-to-end guidance. Our services are completely free.
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
                Opportunities Across the Continent
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                If you are a prospective student from Africa, please send us an enquiry and we will be in touch
                regarding opportunities to study in the UK. We typically secure scholarships providing 20–40%
                reductions in tuition costs. Our services are completely free.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We have local recruiters in Kenya, Nigeria, and Zambia, and welcome applications from students across
                the entire African continent.
              </p>
            </div>
            {/* Country cards */}
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {countryLinks.map((country) => (
                <Link key={country.name} href={country.href} className="group">
                  <Card className="overflow-hidden border-border/50 transition-shadow hover:shadow-md h-full">
                    <div className="relative h-40 w-full">
                      <Image
                        src={country.thumbnail}
                        alt={`${country.name} landscape`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-foreground text-lg">{country.name}</h3>
                      <p className="mt-1 text-sm text-accent group-hover:underline">
                        Explore opportunities &rarr;
                      </p>
                    </CardContent>
                  </Card>
                </Link>
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
              Your Partner From Application to Arrival
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
              <AfricanInquiryForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
