"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"

interface ContactFormProps {
  country?: string
}

export function ContactForm({ country }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, formType: "country" }),
      })
      if (!res.ok) throw new Error()
      setSubmitted(true)
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
          We have received your inquiry. Our team will contact you within 24-48 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <FieldGroup>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field>
            <FieldLabel htmlFor="firstName">First Name *</FieldLabel>
            <Input
              id="firstName"
              name="firstName"
              required
              placeholder="Your first name"
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="lastName">Last Name *</FieldLabel>
            <Input
              id="lastName"
              name="lastName"
              required
              placeholder="Your last name"
            />
          </Field>
        </div>

        <Field>
          <FieldLabel htmlFor="email">Email Address *</FieldLabel>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="your.email@example.com"
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="phone">Phone Number</FieldLabel>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Your phone number"
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="studyDestination">Preferred Study Destination</FieldLabel>
          <Input
            id="studyDestination"
            name="studyDestination"
            placeholder="e.g., UK, Canada, USA, Australia"
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="programLevel">Program Level</FieldLabel>
          <Input
            id="programLevel"
            name="programLevel"
            placeholder="e.g., Undergraduate, Master's, PhD"
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="message">Tell us about your goals *</FieldLabel>
          <Textarea
            id="message"
            name="message"
            required
            rows={4}
            placeholder="What are you hoping to study? What are your career goals?"
          />
        </Field>

        {country && <input type="hidden" name="country" value={country} />}
      </FieldGroup>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Submit Inquiry"}
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        By submitting this form, you agree to be contacted by the Guimond Vukovic Group team.
      </p>
    </form>
  )
}
