import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { AthleteContactForm } from "@/components/athlete-contact-form"

export const metadata: Metadata = {
  title: "Contact Us | Guimond Vukovic Group",
  description:
    "Get in touch with the Guimond Vukovic Group. Free consulting for NCAA and NAIA athletes looking to earn a Master's degree and play sports in the UK.",
}

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-950 to-indigo-700 px-4 py-24 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-indigo-300">
              Get In Touch
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-balance md:text-5xl">
              Contact Us
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-indigo-100 text-pretty">
              Fill out the form below and we&apos;ll be in touch. Our services are completely free.
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Info panel */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-foreground">What happens next?</h2>
              <ol className="mt-6 space-y-6">
                {[
                  "We review your profile",
                  "We find the right university match",
                  "We guide you through every step",
                ].map((step, index) => (
                  <li key={step} className="flex gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                      {index + 1}
                    </div>
                    <p className="pt-1 text-muted-foreground">{step}</p>
                  </li>
                ))}
              </ol>

              <div className="mt-10 rounded-lg border border-border bg-secondary/30 p-6">
                <p className="text-sm text-muted-foreground">
                  If you don&apos;t receive a reply within a few days, please check your spam folder.
                </p>
              </div>

              <div className="mt-6">
                <p className="text-sm font-medium text-foreground">Email us directly</p>
                <a
                  href="mailto:info@guimondvukovicgroup.com"
                  className="mt-1 text-sm text-accent underline underline-offset-4 hover:text-accent/80"
                >
                  info@guimondvukovicgroup.com
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <Card>
                <CardContent className="p-6 sm:p-8">
                  <AthleteContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
