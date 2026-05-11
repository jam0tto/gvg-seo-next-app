import Image from "next/image"
import Link from "next/link"
import { ContactForm } from "@/components/contact-form"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, GraduationCap, Trophy, Plane, Target, Users } from "lucide-react"

interface SportPageLayoutProps {
  sport: string
  slug: string
  heroTitle: string
  heroSubtitle: string
  heroImage: string
  introText: string
  whyPlayAbroad: string[]
  programBenefits: string[]
  eligibilityRequirements: string[]
  popularDestinations: string[]
  degreeOptions: string[]
}

export function SportPageLayout({
  sport,
  slug,
  heroTitle,
  heroSubtitle,
  heroImage,
  introText,
  whyPlayAbroad,
  programBenefits,
  eligibilityRequirements,
  popularDestinations,
  degreeOptions,
}: SportPageLayoutProps) {
  return (
    <main>
        {/* Hero Section */}
        <section className="relative min-h-[500px] overflow-hidden md:min-h-[600px]">
          <Image
            src={heroImage}
            alt={`${sport} player abroad`}
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
                <span>{sport}</span>
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

        {/* Introduction Section */}
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
                Play {sport} Overseas While Earning Your Degree
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
                {introText}
              </p>
            </div>
          </div>
        </section>

        {/* Why Play Abroad Section */}
        <section className="bg-secondary/30 py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-12 text-center font-serif text-3xl font-bold text-foreground md:text-4xl">
              Why Play {sport} Abroad?
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {whyPlayAbroad.map((reason, index) => (
                <Card key={index} className="border-0 bg-card shadow-sm">
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10">
                      <Trophy className="h-5 w-5 text-accent" />
                    </div>
                    <p className="text-foreground">{reason}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Program Benefits Section */}
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
                  Scholarship Athlete Program Benefits
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Our overseas {sport.toLowerCase()} recruiting program connects talented athletes with UK universities offering combined athletic and academic opportunities. As a scholarship athlete abroad, you&apos;ll receive comprehensive support throughout your journey.
                </p>
                <ul className="mt-8 space-y-4">
                  {programBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Card className="border-0 bg-primary p-6 text-primary-foreground shadow-lg">
                  <GraduationCap className="mb-4 h-10 w-10" />
                  <h3 className="text-xl font-semibold">Masters Degrees</h3>
                  <p className="mt-2 text-sm opacity-90">
                    Earn your Masters degree while competing at the highest level overseas
                  </p>
                </Card>
                <Card className="border-0 bg-accent p-6 text-accent-foreground shadow-lg">
                  <Trophy className="mb-4 h-10 w-10" />
                  <h3 className="text-xl font-semibold">PhD Programs</h3>
                  <p className="mt-2 text-sm opacity-90">
                    Pursue doctoral studies while playing {sport.toLowerCase()} abroad in the UK
                  </p>
                </Card>
                <Card className="border-0 bg-muted p-6 shadow-lg sm:col-span-2">
                  <Target className="mb-4 h-10 w-10 text-primary" />
                  <h3 className="text-xl font-semibold text-foreground">Professional Development</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Build your career while competing as a scholarship athlete overseas
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Degree Options */}
        <section className="bg-primary py-16 text-primary-foreground md:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-12 text-center font-serif text-3xl font-bold md:text-4xl">
              Degree Programs for {sport} Athletes Abroad
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {degreeOptions.map((degree, index) => (
                <div key={index} className="flex items-center gap-3 rounded-lg bg-white/10 p-4">
                  <GraduationCap className="h-6 w-6 shrink-0" />
                  <span className="font-medium">{degree}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Eligibility Requirements */}
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-12 text-center font-serif text-3xl font-bold text-foreground md:text-4xl">
              Eligibility for Overseas {sport} Recruiting
            </h2>
            <div className="mx-auto max-w-3xl">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <ul className="space-y-4">
                    {eligibilityRequirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                          {index + 1}
                        </div>
                        <span className="text-foreground">{req}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Popular Destinations */}
        <section className="bg-secondary/30 py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-4 text-center font-serif text-3xl font-bold text-foreground md:text-4xl">
              Top UK Destinations for {sport} Athletes
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
              Play {sport.toLowerCase()} overseas at prestigious UK universities. Our overseas {sport.toLowerCase()} agent services connect you with the best programs.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {popularDestinations.map((destination, index) => (
                <Card key={index} className="border-0 bg-card shadow-sm transition-shadow hover:shadow-md">
                  <CardContent className="flex items-center gap-3 p-4">
                    <Plane className="h-5 w-5 text-accent" />
                    <span className="font-medium text-foreground">{destination}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl bg-gradient-to-br from-primary to-primary/80 p-8 text-center text-primary-foreground md:p-12">
              <Users className="mx-auto mb-6 h-16 w-16 opacity-90" />
              <h2 className="font-serif text-3xl font-bold md:text-4xl">
                Ready to Play {sport} Abroad?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg opacity-90">
                Take the first step towards your overseas {sport.toLowerCase()} scholarship. Our experienced recruiting team has helped hundreds of athletes move to London and other UK cities to pursue their dreams.
              </p>
              <a 
                href="#contact" 
                className="mt-8 inline-block rounded-lg bg-white px-8 py-3 font-semibold text-primary transition-colors hover:bg-white/90"
              >
                Start Your Journey Abroad
              </a>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="bg-muted/50 py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
                  Contact Our Overseas {sport} Recruiting Team
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Ready to play {sport.toLowerCase()} overseas and earn your Masters or PhD? Our scholarship athlete advisors are here to guide you through every step of the recruiting process.
                </p>
                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                      <Trophy className="h-5 w-5 text-accent" />
                    </div>
                    <span className="text-foreground">Expert overseas recruiting guidance</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                      <GraduationCap className="h-5 w-5 text-accent" />
                    </div>
                    <span className="text-foreground">Masters &amp; PhD program matching</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                      <Plane className="h-5 w-5 text-accent" />
                    </div>
                    <span className="text-foreground">UK university placement support</span>
                  </div>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
    </main>
  )
}
