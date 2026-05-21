import { Resend } from "resend"
import { NextRequest } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

const FROM = "GVG <noreply@guimondvukovicgroup.com>"
const DEFAULT_TO = "derek.guimond@guimondvukovicgroup.com"

const COUNTRY_RECIPIENTS: Record<string, string> = {
  nigeria: "Jennifer Olawore <jennifer@guimondvukovicgroup.com>",
  zambia: "Abigail Kaloonje Simpasa <kalonje.abigail@guimondvukovicgroup.com>",
  kenya: "Dennis Nyariki <dennis.nyariki@guimondvukovicgroup.com>",
  pakistan: "Ahmed Virk <ahmedvirk@guimondvukovicgroup.com>",
  india: "Mahesh Morampudi <mahesh@guimondvukovicgroup.com>",
  nepal: "Riward Kc <riwardkc@guimondvukovicgroup.com>",
}

function row(label: string, value: string | undefined) {
  if (!value) return ""
  return `<tr><td style="padding:4px 12px 4px 0;font-weight:600;white-space:nowrap;vertical-align:top">${label}</td><td style="padding:4px 0">${value}</td></tr>`
}

function buildHtml(subject: string, fields: Record<string, string | undefined>) {
  const rows = Object.entries(fields)
    .map(([label, value]) => row(label, value))
    .join("")
  return `<!DOCTYPE html><html><body style="font-family:sans-serif;color:#111;max-width:600px">
<h2 style="margin-bottom:16px">${subject}</h2>
<table style="border-collapse:collapse">${rows}</table>
</body></html>`
}

export async function POST(request: NextRequest) {
  let body: Record<string, string>
  try {
    body = await request.json()
  } catch {
    return Response.json({ error: "Invalid request body" }, { status: 400 })
  }

  const { formType, country, ...fields } = body

  let to: string
  let subject: string
  let emailFields: Record<string, string | undefined>

  if (formType === "country" && country) {
    const key = country.toLowerCase()
    to = COUNTRY_RECIPIENTS[key] ?? DEFAULT_TO
    subject = `New Inquiry — ${country.charAt(0).toUpperCase() + country.slice(1)}`
    emailFields = {
      "First Name": fields.firstName,
      "Last Name": fields.lastName,
      "Email": fields.email,
      "Phone": fields.phone,
      "Study Destination": fields.studyDestination,
      "Program Level": fields.programLevel,
      "Message": fields.message,
    }
  } else if (formType === "athlete") {
    to = DEFAULT_TO
    subject = "New Athlete Inquiry"
    emailFields = {
      "First Name": fields.firstName,
      "Last Name": fields.lastName,
      "Email": fields.email,
      "Graduation Year": fields.graduationYear,
      "Sport": fields.sport,
      "Major / GPA": fields.majorGpa,
      "Time Zone": fields.timeZone,
      "Phone": fields.phone,
      "Comments": fields.comments,
    }
  } else if (formType === "african-hub" || formType === "asian-hub") {
    to = DEFAULT_TO
    const hub = formType === "african-hub" ? "African Students" : "Asian Students"
    subject = `New Hub Inquiry — ${hub}`
    emailFields = {
      "First Name": fields.firstName,
      "Last Name": fields.lastName,
      "Email": fields.email,
      "Country": fields.country,
      "Message": fields.message,
    }
  } else {
    return Response.json({ error: "Unknown form type" }, { status: 400 })
  }

  const { error } = await resend.emails.send({
    from: FROM,
    to,
    replyTo: fields.email,
    subject,
    html: buildHtml(subject, emailFields),
  })

  if (error) {
    console.error("Resend error:", error)
    return Response.json({ error: "Failed to send email" }, { status: 500 })
  }

  return Response.json({ success: true })
}
