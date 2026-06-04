import type { Metadata } from "next"
import { Separator } from "@/components/ui/separator"

export const metadata: Metadata = {
  title: "Privacy Policy | Guimond Vukovic Group",
  description:
    "Privacy policy for the Guimond Vukovic Group. Learn how we collect, use, and protect your personal data.",
  alternates: { canonical: "/privacy-policy" },
}

export default function PrivacyPolicyPage() {
  return (
    <main className="py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">Privacy Policy</h1>
        <p className="mt-3 text-muted-foreground">Last updated: July 30, 2020</p>

        <Separator className="my-8" />

        <section>
          <h2 className="text-2xl font-semibold text-foreground">Introduction</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Guimond Vukovic Group is committed to protecting your personal information. This privacy policy explains
            what data we collect, how we use it, and your rights in relation to that data. By using our services, you
            agree to the collection and use of information in accordance with this policy.
          </p>
        </section>

        <Separator className="my-8" />

        <section>
          <h2 className="text-2xl font-semibold text-foreground">What We Collect</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            We may collect the following personal information: name, email address, phone number, academic transcripts,
            personal identification documents, and sports video highlights. This information is collected for the
            purpose of providing our placement and consulting services.
          </p>
        </section>

        <Separator className="my-8" />

        <section>
          <h2 className="text-2xl font-semibold text-foreground">How We Collect It</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            We collect information directly from you via our contact forms and sign-up processes. We may also collect
            information indirectly from coaches, teachers, and parents who may refer you to our services.
          </p>
        </section>

        <Separator className="my-8" />

        <section>
          <h2 className="text-2xl font-semibold text-foreground">How We Use Your Data</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Your data is used for the following purposes: processing your application and managing your account;
            sending promotional offers and updates (with your consent); and negotiating professional opportunities on
            your behalf with partner universities and sports clubs.
          </p>
        </section>

        <Separator className="my-8" />

        <section>
          <h2 className="text-2xl font-semibold text-foreground">Who We Share It With</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            We share your personal data with partner universities and professional teams as required to facilitate your
            placement, and only with your consent. We do not sell your data to third parties under any circumstances.
          </p>
        </section>

        <Separator className="my-8" />

        <section>
          <h2 className="text-2xl font-semibold text-foreground">Data Storage</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Your data is stored securely using Amazon Web Services (AWS) and Google G Suite infrastructure. We apply
            appropriate technical and organisational measures to protect your information against unauthorised access,
            loss, or disclosure.
          </p>
        </section>

        <Separator className="my-8" />

        <section>
          <h2 className="text-2xl font-semibold text-foreground">Retention</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            We retain your personal data for the duration of our engagement and service relationship with you. After
            our services have concluded, your data is securely deleted in a timely manner.
          </p>
        </section>

        <Separator className="my-8" />

        <section>
          <h2 className="text-2xl font-semibold text-foreground">Your Rights</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            You have the right to access the personal data we hold about you, to correct inaccurate data, to request
            erasure of your data, to restrict or object to processing, and to request portability of your data. All
            rights requests will be responded to within one month of receipt.
          </p>
        </section>

        <Separator className="my-8" />

        <section>
          <h2 className="text-2xl font-semibold text-foreground">Cookies</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            We use functionality cookies that are essential for the site to operate correctly, as well as advertising
            cookies to help us understand how visitors interact with our content. You can manage your cookie preferences
            through your browser settings at any time.
          </p>
        </section>

        <Separator className="my-8" />

        <section>
          <h2 className="text-2xl font-semibold text-foreground">Marketing Opt-Out</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            You can opt out of marketing communications from Guimond Vukovic Group at any time by clicking the
            unsubscribe link in any marketing email, or by contacting us directly at{" "}
            <a
              href="mailto:info@guimondvukovicgroup.com"
              className="text-accent underline underline-offset-4 hover:text-accent/80"
            >
              info@guimondvukovicgroup.com
            </a>
            .
          </p>
        </section>

        <Separator className="my-8" />

        <section>
          <h2 className="text-2xl font-semibold text-foreground">Contact</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            For any privacy-related queries, concerns, or to exercise your rights, please contact us at{" "}
            <a
              href="mailto:info@guimondvukovicgroup.com"
              className="text-accent underline underline-offset-4 hover:text-accent/80"
            >
              info@guimondvukovicgroup.com
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  )
}
