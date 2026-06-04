import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/page-hero"
import { ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Scholarship Athlete Programs | Play Your Sport Abroad | GVG",
  description:
    "Play your sport abroad while earning your Masters or PhD at prestigious UK universities. Our overseas recruiting connects talented athletes with world-class programs.",
}

const sports = [
  { name: "Basketball", slug: "basketball" },
  { name: "Volleyball", slug: "volleyball" },
  { name: "Soccer", slug: "soccer" },
  { name: "American Football", slug: "american-football" },
  { name: "Rugby", slug: "rugby" },
  { name: "Lacrosse", slug: "lacrosse" },
  { name: "Water Polo", slug: "water-polo" },
  { name: "Field Hockey", slug: "field-hockey" },
  { name: "Ice Hockey", slug: "ice-hockey" },
  { name: "Netball", slug: "netball" },
  { name: "Beach Volleyball", slug: "beach-volleyball" },
  { name: "Tennis", slug: "tennis" },
  { name: "Swimming", slug: "swimming" },
  { name: "Diving", slug: "diving" },
  { name: "Track & Field", slug: "track-and-field" },
  { name: "Cross Country", slug: "cross-country" },
  { name: "Golf", slug: "golf" },
  { name: "Squash", slug: "squash" },
  { name: "Badminton", slug: "badminton" },
  { name: "Martial Arts", slug: "martial-arts" },
  { name: "Judo", slug: "judo" },
  { name: "Taekwondo", slug: "taekwondo" },
  { name: "Cheer", slug: "cheer" },
  { name: "Ultimate", slug: "ultimate" },
]

export default function SportsPage() {
  return (
    <main>
      <PageHero imageSrc="/images/london_bridge_hero.png" imageAlt="Tower Bridge and London skyline">
        <div className="max-w-3xl">
          <h1 className="font-serif text-4xl font-bold md:text-5xl">
            Scholarship Athlete Programs
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-indigo-100 md:text-xl">
            Play your sport abroad while earning your Masters or PhD at prestigious UK
            universities. Our overseas recruiting connects talented athletes with world-class
            programs.
          </p>
        </div>
      </PageHero>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 font-serif text-2xl font-bold text-foreground md:text-3xl">
            Select Your Sport
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {sports.map((sport) => (
              <Link
                key={sport.slug}
                href={`/sports/${sport.slug}`}
                className="flex items-center justify-between rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium text-foreground transition-all hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
              >
                {sport.name}
                <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
