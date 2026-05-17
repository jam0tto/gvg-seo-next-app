"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export function AsianInquiryForm() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    message: "",
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-lg border border-border bg-card p-8 text-center">
        <p className="text-lg font-semibold text-foreground">Thank you! We&apos;ll be in touch soon.</p>
        <p className="mt-2 text-muted-foreground">We have received your enquiry and will respond as soon as possible.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="firstName">First Name <span className="text-destructive">*</span></Label>
          <Input
            id="firstName"
            name="firstName"
            required
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Your first name"
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="lastName">Last Name <span className="text-destructive">*</span></Label>
          <Input
            id="lastName"
            name="lastName"
            required
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Your last name"
          />
        </div>
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="email">Email <span className="text-destructive">*</span></Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
        />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="country">Country</Label>
        <Input
          id="country"
          name="country"
          value={formData.country}
          onChange={handleChange}
          placeholder="e.g. Nigeria, Kenya, Zambia"
        />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="message">Tell us about yourself</Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Share your athletic background, academic standing, and what you hope to achieve..."
          className="min-h-32"
        />
      </div>
      <Button type="submit" size="lg" className="w-full sm:w-auto px-8">
        Send Enquiry
      </Button>
    </form>
  )
}
