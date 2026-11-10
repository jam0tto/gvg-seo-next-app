import type { Metadata } from "next"
import Link from "next/link"
import { Briefcase, CheckCircle, GraduationCap, PoundSterling } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { Card, CardContent } from "@/components/ui/card"

const title = "Finance and Financial Aid | Guimond Vukovic Group"
const description =
  "See what a UK Master's costs for student athletes, including tuition, accommodation, scholarships, and work rights. GVG's guidance is free."
const heroImage = "/images/parliament_hero.png"
const heroAlt = "Houses of Parliament and Westminster, London"

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/finance-and-financial-aid" },
  openGraph: {
    type: "website",
    url: "/finance-and-financial-aid",
    siteName: "Guimond Vukovic Group",
    title,
    description,
    images: [{ url: heroImage, width: 1366, height: 768, alt: heroAlt }],
  },
  twitter: { card: "summary_large_image", title, description, images: [heroImage] },
}

const costs = [
  { item: "Master's tuition", amount: "£10,500 – £22,500" },
  { item: "Accommodation", amount: "~£5,500" },
  { item: "Student visa", amount: "Set by the UK government" },
  { item: "Healthcare surcharge", amount: "Set by the UK government" },
]

const funding = [
  {
    icon: GraduationCap,
    title: "Scholarships",
    body: "Our partner universities offer both academic and athletic scholarships. Full rides are rare, but partial scholarships covering 20–40% of tuition are commonly available.",
  },
  {
    icon: Briefcase,
    title: "Working While You Study",
    body: "As a Master's student in the UK, you are generally permitted to work up to 20 hours per week during term time, with no restriction during holidays.",
  },
  {
    icon: CheckCircle,
    title: "Free Guidance From GVG",
    body: "Our services are free of charge to athletes. We are compensated by our partner universities and professional clubs, never by the athletes we represent.",
  },
]

export default function FinanceAndFinancialAidPage() {
  return (
    <main>
      <PageHero imageSrc={heroImage} imageAlt={heroAlt}>
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-indigo-300">
            Paying for Your Degree
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-balance md:text-5xl">
            Finance and Financial Aid
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-indigo-100 text-pretty">
            A UK Master&apos;s degree is typically completed in 12 months and is significantly more affordable than a
            comparable US program, especially with scholarship support.
          </p>
        </div>
      </PageHero>

      {/* Costs */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Finances</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl">
              What Your Year in the UK Costs
            </h2>
          </div>
          <Card className="mt-12 border-0 shadow-sm">
            <CardContent className="p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <PoundSterling className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Main Costs to Plan For</h3>
              </div>
              <ul className="space-y-4">
                {costs.map(({ item, amount }) => (
                  <li
                    key={item}
                    className="flex items-center justify-between gap-4 border-b border-border pb-4 last:border-0 last:pb-0"
                  >
                    <span className="text-muted-foreground">{item}</span>
                    <span className="text-right font-semibold text-foreground">{amount}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Funding */}
      <section className="bg-secondary/30 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Financial Aid</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Ways to Fund Your Master&apos;s
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              We help identify the best funding options for each athlete.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {funding.map(({ icon: Icon, title: cardTitle, body }) => (
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

      {/* CTA */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold md:text-4xl">Find the Right Funding Option</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg opacity-90">
            Talk to our team about your degree, your sport, and how to pay for your year in the UK.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-white/90"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/ncaa-naia-usports"
              className="inline-flex items-center rounded-lg border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              NCAA, NAIA &amp; USPORTS Athletes
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
