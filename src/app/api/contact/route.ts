import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const REQUIRED_FIELDS = ['firstName', 'lastName', 'email', 'service', 'message'] as const

export async function POST(req: NextRequest) {
  const body = await req.json()

  for (const field of REQUIRED_FIELDS) {
    if (!body[field]?.trim()) {
      return NextResponse.json({ error: `Missing required field: ${field}` }, { status: 400 })
    }
  }

  const { firstName, lastName, email, service, budget, message } = body

  const { error } = await resend.emails.send({
    from: 'PixelPetal Contact <onboarding@resend.dev>',
    to: 'reachpixelpetal@gmail.com',
    replyTo: email,
    subject: `New inquiry from ${firstName} ${lastName} — ${service}`,
    html: `
      <h2>New Contact Form Submission — PixelPetal</h2>
      <table cellpadding="8" style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
        <tr><td><strong>Name</strong></td><td>${firstName} ${lastName}</td></tr>
        <tr><td><strong>Email</strong></td><td><a href="mailto:${email}">${email}</a></td></tr>
        <tr><td><strong>Service</strong></td><td>${service}</td></tr>
        <tr><td><strong>Budget</strong></td><td>${budget || 'Not specified'}</td></tr>
        <tr><td><strong>Message</strong></td><td style="white-space:pre-wrap">${message}</td></tr>
      </table>
    `,
  })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
