import type { Metadata } from "next"
import Link from "next/link"
import { PageHero } from "@/components/page-hero"

export const metadata: Metadata = {
  title: "FAQ | Guimond Vukovic Group",
  description:
    "Frequently asked questions about studying and playing sports abroad with the Guimond Vukovic Group. Learn about costs, eligibility, visas, and more.",
}

const faqs = [
  {
    question: "Can I apply with a friend?",
    answer:
      "Absolutely, we encourage it. The transition to life abroad is much smoother with a friend or teammate by your side, and we are happy to work with groups.",
  },
  {
    question: "Can I apply with lower grades?",
    answer:
      "You will need a GPA of 2.5 or above to be considered by our partner universities. If your GPA is lower, completing a Master's degree can significantly improve your academic standing and employability.",
  },
  {
    question: "Is it better to pursue a professional career or postgraduate study?",
    answer:
      "Studying in the UK gives you the opportunity to develop your game, accumulate more video footage, build an international network, and earn a postgraduate qualification — all of which strengthen your professional prospects.",
  },
  {
    question: "Does Guimond Vukovic charge fees?",
    answer:
      "No, our services are absolutely free of charge to athletes. We are compensated by our partner universities and professional clubs, never by the athletes we represent.",
  },
  {
    question: "How long does a Master's degree take in the UK?",
    answer:
      "A UK Master's degree is typically completed in 12 months. This means you can earn a postgraduate qualification in one academic year and return to professional opportunities sooner.",
  },
  {
    question: "What playing level is required?",
    answer:
      "We have successfully placed NCAA Division I, Division II, Division III, and NAIA athletes. The key factors are athletic ability, academic standing, and motivation — not just the division you played in.",
  },
  {
    question: "What financing options are available?",
    answer:
      "Our partner universities offer both academic and athletic scholarships. Full rides are rare but partial scholarships covering 20–40% of tuition costs are commonly available. We help identify the best funding options for each athlete.",
  },
  {
    question: "Can I apply after I have already graduated?",
    answer:
      "Yes. Whether you are looking to restart your athletic career, gain additional credentials, or pivot professionally, we can assist postgraduate applicants who have already completed their undergraduate degree.",
  },
  {
    question: "What are my work permissions as a student?",
    answer:
      "As a Master's student in the UK, you are generally permitted to work up to 20 hours per week during term time, with no restriction during holidays. This can help offset living costs during your studies.",
  },
  {
    question: "Do you assist undergraduate applicants?",
    answer:
      "Yes, although our primary focus is postgraduate athletes, we do assess undergraduate applications on an individual basis. Please contact us directly to discuss your situation.",
  },
  {
    question: "What can I study?",
    answer:
      "Our partner universities offer programs across a wide range of disciplines — far beyond business, psychology, or humanities. From sport science and law to engineering and data analytics, we can help you find a program that aligns with your career goals.",
  },
  {
    question: "What sports do you support?",
    answer:
      "We work with athletes across many sports, including basketball, soccer, baseball, rowing, swimming, track and field, volleyball, rugby, and many more. If your sport is not listed, please contact us — we are expanding our network continuously.",
  },
]

export default function FAQPage() {
  return (
    <main>
      <PageHero imageSrc="/images/london_bridge_hero.png" imageAlt="London skyline at dusk">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-indigo-300">
            Got Questions?
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-balance md:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-indigo-100 text-pretty">
            Everything you need to know about studying and playing sports in the UK with the Guimond Vukovic Group.
            Can&apos;t find the answer you&apos;re looking for? Reach out to our team directly.
          </p>
        </div>
      </PageHero>

      {/* FAQ list */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <dl>
              {faqs.map((faq) => (
                <div key={faq.question} className="border-b border-border">
                  <details className="group py-5">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-foreground hover:text-primary">
                      {faq.question}
                      <span className="ml-4 shrink-0 text-xl leading-none text-muted-foreground transition-transform group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <p className="mt-4 text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </details>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold md:text-4xl">Still have questions?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg opacity-90">
            Our team is happy to answer any questions not covered here. Get in touch and we&apos;ll respond promptly.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-white/90"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
