import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Plane, Users, CheckCircle, ArrowRight, PoundSterling } from "lucide-react"
import { AthleteContactForm } from "@/components/athlete-contact-form"

export const metadata: Metadata = {
  title: "Play Overseas Information | Guimond Vukovic Group",
  description:
    "Learn how NCAA and NAIA athletes can earn a Master's degree while playing sports in the UK. Cost breakdowns, founder bios, and how to get started.",
  keywords: [
    "play overseas",
    "NCAA UK masters",
    "study abroad athlete",
    "UK masters cost",
    "student athlete UK scholarship",
  ],
}

export default function PlayOverseasInformationPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-950 to-indigo-700 px-4 py-24 text-white md:py-36 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-indigo-300">
              How It Works
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-balance md:text-5xl lg:text-6xl">
              Earn Your Master&apos;s and Play Overseas
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-indigo-100 text-pretty md:text-xl">
              NCAA and NAIA athletes face no eligibility restrictions when pursuing a Master&apos;s degree in the UK.
              That means you can continue competing at a high level while earning your postgraduate qualification —
              with full scholarship support available.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-indigo-900 transition-colors hover:bg-indigo-50"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/faq"
                className="inline-flex items-center rounded-lg border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Read FAQ <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Study in the UK? */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">The Opportunity</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Why Study in the UK?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              NCAA and NAIA athletes can earn a Master&apos;s degree in the UK with no eligibility restrictions,
              while competing at a high level and accessing scholarship opportunities unavailable in the US.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: CheckCircle,
                title: "No Eligibility Restrictions",
                body: "Unlike the US, earning a Master's in the UK does not affect your NCAA or NAIA eligibility status.",
              },
              {
                icon: GraduationCap,
                title: "Scholarship Support",
                body: "UK universities offer academic and athletic scholarships. GVG helps you identify and apply for the best options.",
              },
              {
                icon: Plane,
                title: "12-Month Degree",
                body: "Complete your Master's in just one year, then return home or continue your career overseas.",
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

      {/* Cost Breakdown */}
      <section className="bg-secondary/30 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Finances</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Understanding the Costs
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              A UK Master&apos;s degree is significantly more affordable than a comparable US program,
              especially with scholarship support.
            </p>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {/* UK costs */}
            <Card className="border-0 shadow-sm">
              <CardContent className="p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <PoundSterling className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">UK Cost Breakdown</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    { item: "Master's Tuition", amount: "£10,500 – £22,500" },
                    { item: "Accommodation", amount: "~£5,500" },
                    { item: "Healthcare Surcharge", amount: "£225" },
                    { item: "Student Visa", amount: "~£300" },
                  ].map(({ item, amount }) => (
                    <li key={item} className="flex items-center justify-between border-b border-border pb-4 last:border-0 last:pb-0">
                      <span className="text-muted-foreground">{item}</span>
                      <span className="font-semibold text-foreground">{amount}</span>
                    </li>
                  ))}
                  <li className="flex items-center justify-between pt-2">
                    <span className="font-bold text-foreground">Total per Year</span>
                    <span className="font-bold text-primary">~£15,675 – £21,275</span>
                  </li>
                </ul>
                <p className="mt-6 rounded-lg bg-accent/5 p-4 text-sm text-muted-foreground">
                  Universities offer academic and athletic scholarships. Full scholarships are rare; partial
                  scholarships are common.
                </p>
              </CardContent>
            </Card>

            {/* US comparison */}
            <Card className="border-0 bg-primary shadow-sm text-primary-foreground">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold">How Does the UK Compare to the US?</h3>
                <p className="mt-4 text-4xl font-bold">~50%</p>
                <p className="mt-2 text-lg opacity-90">more affordable than a US Master&apos;s</p>
                <div className="mt-8 space-y-4">
                  <div className="rounded-lg bg-white/10 p-4">
                    <p className="text-sm font-semibold uppercase tracking-widest opacity-75">US Master&apos;s</p>
                    <p className="mt-1 text-2xl font-bold">~$50,000 / year</p>
                  </div>
                  <div className="rounded-lg bg-white/10 p-4">
                    <p className="text-sm font-semibold uppercase tracking-widest opacity-75">UK Master&apos;s</p>
                    <p className="mt-1 text-2xl font-bold">~£15,675 – £21,275 / year</p>
                    <p className="mt-1 text-sm opacity-75">Plus potential scholarship support</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Founders */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Our Team</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl">
              The Founders
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              We&apos;ve been where you are. Both founders are ex-student athletes who played professionally and
              earned their Master&apos;s degrees in the UK.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:max-w-2xl lg:mx-auto">
            {[
              {
                name: "Derek Guimond",
                role: "Co-Founder",
                detail: "Ex-NCAA athlete & Master's graduate who played professionally overseas",
              },
              {
                name: "Vladimir Vukovic",
                role: "Co-Founder",
                detail: "Played professionally overseas and earned his Master's degree in the UK",
              },
            ].map((founder) => (
              <Card key={founder.name} className="border-border/50">
                <CardContent className="p-6">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <p className="font-semibold text-foreground">{founder.name}</p>
                  <p className="text-sm font-medium text-accent">{founder.role}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{founder.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-secondary/30 py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Get Started</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Tell Us About Yourself
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Our services are completely free. Fill out the form below and we&apos;ll find the right opportunity for you.
            </p>
          </div>
          <div className="mt-10">
            <Card>
              <CardContent className="p-6 sm:p-8">
                <AthleteContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
