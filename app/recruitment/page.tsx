import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, FileText, UserCheck } from "lucide-react"

export const metadata: Metadata = {
  title: "Recruit Student Athletes | Guimond Vukovic Group",
  description:
    "Partner with Guimond Vukovic Group to recruit vetted NCAA and NAIA student athletes from the USA and Canada for your UK university. We provide full athlete profiles, videos, and academic records.",
  keywords: [
    "recruit student athletes UK",
    "NCAA athletes UK universities",
    "NAIA athletes UK",
    "university athlete recruitment",
    "student athlete placement UK",
  ],
  openGraph: {
    title: "Recruit Student Athletes | Guimond Vukovic Group",
    description:
      "Partner with Guimond Vukovic Group to recruit vetted NCAA and NAIA student athletes from the USA and Canada for your UK university.",
  },
}

export default function RecruitmentPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-950 to-indigo-700 px-4 py-24 text-white md:py-36 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-indigo-300">
              For University Coaches &amp; Recruiters
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-balance md:text-5xl lg:text-6xl">
              Recruit the Right Student-Athletes for Your University
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-indigo-100 text-pretty md:text-xl">
              GVG connects UK universities with motivated, vetted NCAA and NAIA athletes from the USA and Canada. We
              handle the sourcing, vetting, and initial communication — you choose the right fit for your program.
            </p>
            <div className="mt-10">
              <a
                href="mailto:recruitment@guimondvukovicgroup.com"
                className="inline-flex items-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-indigo-900 transition-colors hover:bg-indigo-50"
              >
                Contact Our Recruitment Team
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Our Process</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl">How It Works</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              A straightforward three-step process that reduces your workload and delivers the right athletes.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "We Source and Vet Athletes",
                body: "GVG represents NCAA and NAIA athletes who submit sporting resumes, academic records, video highlights, and recommendation letters. Every athlete in our network has been reviewed before reaching you.",
              },
              {
                step: "02",
                title: "You Review Full Profiles",
                body: "Coaches receive complete athlete profiles including academic transcripts, athletic video, and GPA. You have everything you need to make an informed decision before making contact.",
              },
              {
                step: "03",
                title: "We Guide the Transition",
                body: "GVG manages advisory, visa, and postgraduate application stages, reducing your administrative burden and ensuring a smooth transition for both the athlete and your program.",
              },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="mb-4 text-5xl font-bold text-primary/10">{item.step}</div>
                <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Athletes We Represent */}
      <section className="bg-secondary/30 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Who We Work With</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl">Athletes We Represent</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              We focus on athletes who demonstrate grit, motivation, and work ethic — not just athletic credentials.
              Every athlete in our network is thoroughly assessed before being presented to a university.
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-4xl">
            <Card className="border-0 shadow-sm">
              <CardContent className="p-8">
                <div className="grid gap-4 sm:grid-cols-2">
                  <ul className="space-y-3">
                    {[
                      "NCAA Division I, II, III athletes",
                      "NAIA athletes",
                      "USA and Canada based",
                      "Postgraduate (Master's seeking) athletes",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <ul className="space-y-3">
                    {[
                      "Sporting resume and video highlights",
                      "Academic transcript and GPA",
                      "Recommendation letters",
                      "Visa-eligible applicants",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Partner With GVG */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Partnership Benefits</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl">Why Partner With GVG</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: FileText,
                title: "Fully Vetted Profiles",
                body: "All athletes submit full documentation before being represented. You only review athletes who meet our academic and athletic standards.",
              },
              {
                icon: UserCheck,
                title: "Reduced Admin Burden",
                body: "We handle initial communications, eligibility checks, and application paperwork — so your team can focus on coaching, not administration.",
              },
              {
                icon: CheckCircle,
                title: "Ongoing Liaison",
                body: "GVG remains involved throughout the athlete's enrollment to support both parties, ensuring a successful and lasting partnership.",
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

      {/* CTA */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold md:text-4xl">Get in Touch</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg opacity-90">
            Contact us at{" "}
            <a
              href="mailto:recruitment@guimondvukovicgroup.com"
              className="underline underline-offset-4 hover:opacity-80"
            >
              recruitment@guimondvukovicgroup.com
            </a>{" "}
            to discuss your university&apos;s athlete recruitment needs.
          </p>
          <div className="mt-10">
            <a
              href="mailto:recruitment@guimondvukovicgroup.com"
              className="inline-flex items-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-white/90"
            >
              Email Our Recruitment Team
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
