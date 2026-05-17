"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"

export function AthleteContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission - in production, this would send to a backend
    await new Promise(resolve => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setSubmitted(true)
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
          <FieldLabel htmlFor="email">Email *</FieldLabel>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="your.email@example.com"
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="graduationYear">Graduation Year *</FieldLabel>
          <Input
            id="graduationYear"
            name="graduationYear"
            type="text"
            required
            placeholder="e.g. 2024"
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="sport">Sport *</FieldLabel>
          <Input
            id="sport"
            name="sport"
            required
            placeholder="e.g. Basketball, Soccer"
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="majorGpa">Major and GPA *</FieldLabel>
          <Input
            id="majorGpa"
            name="majorGpa"
            required
            placeholder="e.g. Business, 3.5 GPA"
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="timeZone">Current Time Zone</FieldLabel>
          <Input
            id="timeZone"
            name="timeZone"
            placeholder="e.g. EST, PST, GMT-5"
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
          <FieldLabel htmlFor="comments">Additional Comments</FieldLabel>
          <Textarea
            id="comments"
            name="comments"
            rows={4}
            placeholder="Any additional information you'd like to share..."
          />
        </Field>
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
