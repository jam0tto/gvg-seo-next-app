"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"

const REFERRAL_OPTIONS = [
  "Internet Search",
  "Advertisement",
  "Friend",
  "Facebook",
  "LinkedIn",
  "Instagram",
  "Europlayers",
  "Volleybox",
  "Other",
]

const SPORTS = [
  "Volleyball",
  "Basketball",
  "Water Polo",
  "Football (American)",
  "Soccer",
  "Lacrosse",
  "Track and Field",
  "Tennis",
  "Field Hockey",
  "Ultimate",
  "Fencing",
  "Swimming",
  "Diving",
  "Baseball",
  "Softball",
  "Rugby",
  "Other",
]

const LEVELS = [
  "NCAA",
  "NAIA",
  "Collegiate Club Sports",
  "Professional",
  "CLUB",
  "International (European non-pro)",
  "Other",
]

function RadioList({
  name,
  options,
  onChange,
}: {
  name: string
  options: string[]
  onChange?: (value: string) => void
}) {
  return (
    <div className="flex flex-col gap-2">
      {options.map((option) => (
        <label key={option} className="flex cursor-pointer items-center gap-2.5">
          <input
            type="radio"
            name={name}
            value={option}
            required
            onChange={() => onChange?.(option)}
            className="h-4 w-4 accent-indigo-600"
          />
          <span className="text-sm text-foreground">{option}</span>
        </label>
      ))}
    </div>
  )
}

export function PlayOverseasForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [referral, setReferral] = useState("")
  const [level, setLevel] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, formType: "play-overseas" }),
      })
      if (!res.ok) throw new Error()
      setSubmitted(true)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ;(window as any).gtag?.("event", "conversion", { send_to: "AW-17496410069/-FAVCJC49d8bENWP-JZB" })
    } catch {
      alert("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="rounded-lg border border-accent/20 bg-accent/5 p-8 text-center">
        <h3 className="text-xl font-semibold text-foreground">Thank You!</h3>
        <p className="mt-2 text-muted-foreground">
          We have received your message. If you don&apos;t hear from us within a few days, please check your spam folder.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <FieldGroup>
        <div className="grid gap-4 sm:grid-cols-3">
          <Field>
            <FieldLabel htmlFor="firstName">First Name *</FieldLabel>
            <Input id="firstName" name="firstName" required placeholder="First name" />
          </Field>
          <Field>
            <FieldLabel htmlFor="lastName">Last Name *</FieldLabel>
            <Input id="lastName" name="lastName" required placeholder="Last name" />
          </Field>
          <Field>
            <FieldLabel htmlFor="phone">Phone Number *</FieldLabel>
            <Input id="phone" name="phone" type="tel" required placeholder="Your phone number" />
          </Field>
        </div>

        <Field>
          <FieldLabel htmlFor="timeZone">Current Time Zone *</FieldLabel>
          <Input id="timeZone" name="timeZone" required placeholder="e.g. EST, PST, GMT-5" />
        </Field>

        <Field>
          <FieldLabel>How did you hear about us? *</FieldLabel>
          <div className="mt-2">
            <RadioList name="referral" options={REFERRAL_OPTIONS} onChange={setReferral} />
          </div>
        </Field>

        {referral === "Other" && (
          <Field>
            <FieldLabel htmlFor="referralOther">If Other, please specify *</FieldLabel>
            <Input id="referralOther" name="referralOther" required placeholder="Please specify" />
          </Field>
        )}

        <div className="grid gap-4 sm:grid-cols-2">
          <Field>
            <FieldLabel htmlFor="university">University of Attendance *</FieldLabel>
            <Input id="university" name="university" required placeholder="Your university" />
          </Field>
          <Field>
            <FieldLabel htmlFor="majorGpa">Major and GPA *</FieldLabel>
            <Input id="majorGpa" name="majorGpa" required placeholder="e.g. Business, 3.5 GPA" />
          </Field>
        </div>

        <Field>
          <FieldLabel>What is your Sport? *</FieldLabel>
          <div className="mt-2 columns-2 gap-x-8 sm:columns-3">
            {SPORTS.map((sport) => (
              <label key={sport} className="flex cursor-pointer items-center gap-2.5 break-inside-avoid pb-2">
                <input
                  type="radio"
                  name="sport"
                  value={sport}
                  required
                  className="h-4 w-4 accent-indigo-600"
                />
                <span className="text-sm text-foreground">{sport}</span>
              </label>
            ))}
          </div>
        </Field>

        <Field>
          <FieldLabel htmlFor="email">Email *</FieldLabel>
          <Input id="email" name="email" type="email" required placeholder="your.email@example.com" />
        </Field>

        <Field>
          <FieldLabel>What level have you played at? *</FieldLabel>
          <div className="mt-2">
            <RadioList name="level" options={LEVELS} onChange={setLevel} />
          </div>
        </Field>

        {level === "Other" && (
          <Field>
            <FieldLabel htmlFor="levelOther">Please specify *</FieldLabel>
            <Input id="levelOther" name="levelOther" required placeholder="Please specify" />
          </Field>
        )}
      </FieldGroup>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Submit"}
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        By submitting this form, you agree to be contacted by the Guimond Vukovic Group team.
      </p>
    </form>
  )
}
