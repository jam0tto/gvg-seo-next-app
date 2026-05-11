import Image from "next/image"
import Link from "next/link"
import { ContactForm } from "@/components/contact-form"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, GraduationCap, FileText, Plane, Building2, Users } from "lucide-react"

interface ServiceItem {
  title: string
  description: string
}

interface CountryPageLayoutProps {
  country: string
  region: "africa" | "asia"
  heroTitle: string
  heroSubtitle: string
  heroImage: string
  introText: string
  marketInsights: string[]
  services: ServiceItem[]
  whyChooseUs: string[]
  destinations: string[]
  flagEmoji?: string
}

const iconMap = {
  0: GraduationCap,
  1: FileText,
  2: Plane,
  3: Building2,
  4: Users,
  5: CheckCircle,
}

export function CountryPageLayout({
  country,
  region,
  heroTitle,
  heroSubtitle,
  heroImage,
  introText,
  marketInsights,
  services,
  whyChooseUs,
  destinations,
}: CountryPageLayoutProps) {
  const parentPage = region === "africa"
    ? { label: "African Students", href: "/african-students" }
    : { label: "Indian, Pakistani & SE Asian Students", href: "/asian-students" }

  return (
    <main>
        {/* Hero Section */}
        <section className="relative min-h-[500px] overflow-hidden md:min-h-[600px]">
          <Image
            src={heroImage}
            alt={`${country} landscape`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40" />
          <div className="relative z-10 flex min-h-[500px] items-center md:min-h-[600px]">
            <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
              <nav className="mb-6 text-sm text-white/90">
                <Link href="/" className="opacity-75 hover:opacity-100">Home</Link>
                <span className="mx-2 opacity-50">/</span>
                <Link href={parentPage.href} className="opacity-75 hover:opacity-100">{parentPage.label}</Link>
                <span className="mx-2 opacity-50">/</span>
                <span>{country}</span>
              </nav>
              <h1 className="max-w-3xl font-serif text-4xl font-bold leading-tight text-balance text-white md:text-5xl lg:text-6xl">
                {heroTitle}
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-white/90 text-pretty md:text-xl">
                {heroSubtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="font-serif text-3xl font-bold text-foreground">
                About GVG in {country}
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                {introText}
              </p>
            </div>
          </div>
        </section>

        {/* Market Insights */}
        <section className="bg-muted/30 py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center font-serif text-3xl font-bold text-foreground">
              Understanding {country} Students
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
              Our deep local expertise helps us serve {country} students effectively
            </p>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {marketInsights.map((insight, index) => (
                <div key={index} className="flex gap-4">
                  <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                  <p className="text-muted-foreground">{insight}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center font-serif text-3xl font-bold text-foreground">
              Our Services for {country} Students
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
              Comprehensive support from initial consultation through to enrollment
            </p>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => {
                const Icon = iconMap[index as keyof typeof iconMap] || CheckCircle
                return (
                  <Card key={index} className="border-border/50 transition-shadow hover:shadow-md">
                    <CardContent className="p-6">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Popular Destinations */}
        <section className="bg-muted/30 py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center font-serif text-3xl font-bold text-foreground">
              Popular Study Destinations
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
              Top destinations chosen by {country} students
            </p>
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              {destinations.map((destination, index) => (
                <div
                  key={index}
                  className="rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground"
                >
                  {destination}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="font-serif text-3xl font-bold text-foreground">
                  Why Choose GVG {country}?
                </h2>
                <p className="mt-4 text-muted-foreground">
                  We provide trusted, transparent guidance to help you achieve your international education goals.
                </p>
                <ul className="mt-8 space-y-4">
                  {whyChooseUs.map((reason, index) => (
                    <li key={index} className="flex gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                      <span className="text-muted-foreground">{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg bg-muted/50 p-8">
                <h3 className="mb-6 text-xl font-semibold text-foreground">
                  Start Your Journey Today
                </h3>
                <ContactForm country={country} />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16 text-primary-foreground">
          <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-bold">
              Ready to Study Abroad?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg opacity-90">
              Our services are FREE. We have direct partnerships with top universities and will connect you with the best options for your future.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-lg bg-background px-8 py-3 font-medium text-primary transition-colors hover:bg-background/90"
            >
              Contact Us Today
            </Link>
          </div>
        </section>
    </main>
  )
}
