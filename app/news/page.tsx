import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export const metadata: Metadata = {
  title: "News & Reviews | Guimond Vukovic Group",
  description:
    "GVG annual player reviews, athlete testimonials, and the latest news on student athlete opportunities in the UK.",
}

const playerReviews = [
  {
    name: "Tara Ziegelbein",
    sport: "Volleyball",
    highlight: "Best blocker in the U.K.",
    detail:
      "With 17 kill blocks averaging 1.31 per set, Tara holds the highest block per set rating in the league.",
  },
  {
    name: "Neysha Gonzalez",
    sport: "Volleyball",
    highlight: "Undefeated season — Premier South champion",
    detail:
      "Neysha Gonzalez (Monroe & Mercy) led her team through an undefeated season as Premier South champions, advancing to the BUCS Championship Final against Premier North champions Durham.",
  },
  {
    name: "Tim Howell & Austin Butler",
    sport: "Basketball — Whitman College",
    highlight: "League title & First Division promotion",
    detail:
      "Teammates Tim Howell and Austin Butler helped the University of Essex men's basketball team win the Division II title and earn promotion to the First Division. Austin Butler was also named to the Division II Men's South Team of the Year.",
  },
]

const testimonials = [
  {
    quote:
      "After playing 4 years in NCAA D1 volleyball the best decision I made was to continue the sport I love at a high level and get my Masters in Business Administration overseas.",
    name: "NCAA D1 Volleyball Player",
  },
  {
    quote:
      "He has answered every question I've asked thoroughly and consistently checked in on me and how I am doing.",
    name: "Kelsey M.",
  },
  {
    quote:
      "I would definitely recommend others to follow this path, you get an extensive academic experience, the opportunity to travel.",
    name: "All-American Athlete",
  },
  {
    quote:
      "Coming over here is something that I will always remember and really puts me on the right path for my future.",
    name: "Garrett Bucklin",
  },
  {
    quote:
      "Your playing career is far from over post graduation, there are so many unique opportunities left for you to uncover.",
    name: "Derek Guimond",
    role: "Co-Founder, GVG",
  },
]


export default function NewsPage() {
  return (
    <main>
      <PageHero imageSrc="/images/london_bridge_hero.png" imageAlt="London skyline at dusk">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-300">GVG Network</p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">News &amp; Reviews</h1>
          <p className="mt-4 max-w-2xl text-lg text-indigo-100">
            Player achievements, athlete testimonials, and the latest updates from the GVG network.
          </p>
        </div>
      </PageHero>

      {/* Stats */}
      <section className="border-b bg-background">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-border md:grid-cols-4">
          {[
            { value: "60+", label: "Athletes in Postgrad Programs" },
            { value: "50+", label: "Professional Contracts Signed" },
            { value: "5+", label: "UK-Based Player Contracts" },
            { value: "15+", label: "Countries Represented" },
          ].map((stat) => (
            <div key={stat.label} className="px-6 py-8 text-center">
              <p className="text-3xl font-bold text-primary">{stat.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Countries */}
      <section className="border-b bg-secondary/30 py-6">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm text-muted-foreground">
            We currently work with students &amp; athletes from the{" "}
            <span className="font-medium text-foreground">
              USA, Canada, Brazil, Greece, Cyprus, Bulgaria, Croatia, France, Ireland, Sweden, Israel, Montenegro, Serbia, Slovakia,
            </span>{" "}
            and the <span className="font-medium text-foreground">U.K.</span>
          </p>
        </div>
      </section>

      {/* Annual Player Review */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Standout Performances</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl">
              GVG Annual Player Review
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {playerReviews.map((player) => (
              <Card key={player.name} className="border-border/50 shadow-sm">
                <CardContent className="p-6">
                  <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                    {player.sport}
                  </span>
                  <p className="mt-4 font-semibold text-foreground">{player.name}</p>
                  <p className="mt-1 text-sm font-medium text-primary">{player.highlight}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{player.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-secondary/30 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">What Athletes Say</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Athlete Testimonials
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <Card key={t.name} className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <Quote className="mb-4 h-6 w-6 text-accent/40" />
                  <p className="text-sm leading-relaxed text-foreground">&ldquo;{t.quote}&rdquo;</p>
                  <div className="mt-4 border-t border-border pt-4">
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    {t.role && <p className="text-xs text-muted-foreground">{t.role}</p>}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold md:text-4xl">What&apos;s your story?</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg opacity-90">Share your athletic background and academic goals with us — our services are completely free.</p>
          <div className="mt-8">
            <a
              href="/contact"
              className="inline-flex items-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-white/90"
            >
              Share Your Story With Us
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
