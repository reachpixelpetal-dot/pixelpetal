'use client'

import { useState, FormEvent } from 'react'
import { PetalDivider } from './PetalDivider'

type FormState = {
  firstName: string
  lastName: string
  email: string
  service: string
  budget: string
  message: string
}

type FieldError = Partial<Record<keyof FormState, string>>

const serviceOptions = [
  { value: '', label: 'Select a service…' },
  { value: 'brand-identity', label: 'Brand Identity & Logo Design' },
  { value: 'web-design', label: 'Custom Web Design' },
  { value: 'wedding-event', label: 'Wedding or Celebration Design' },
  { value: 'social-graphics', label: 'Social Media Graphics' },
  { value: 'print-design', label: 'Posters & Print Design' },
  { value: 'full-suite', label: 'Full Suite (multiple services)' },
  { value: 'not-sure', label: "I'm not sure yet" },
]

const budgetOptions = [
  { value: '', label: 'Approximate budget…' },
  { value: 'under-1k', label: 'Under $1,000' },
  { value: '1k-3k', label: '$1,000 – $3,000' },
  { value: '3k-6k', label: '$3,000 – $6,000' },
  { value: '6k-plus', label: '$6,000+' },
  { value: 'not-sure', label: "I'm not sure" },
]

const inputBase =
  'w-full bg-transparent border-b border-charcoal/20 py-3 font-body text-sm text-charcoal placeholder-charcoal/30 focus:outline-none focus:border-rose transition-colors duration-200'
const selectBase =
  'w-full bg-transparent border-b border-charcoal/20 py-3 font-body text-sm text-charcoal focus:outline-none focus:border-rose transition-colors duration-200 cursor-pointer appearance-none'

function validate(form: FormState): FieldError {
  const errors: FieldError = {}
  if (!form.firstName.trim()) errors.firstName = 'First name is required.'
  if (!form.lastName.trim()) errors.lastName = 'Last name is required.'
  if (!form.email.trim()) {
    errors.email = 'Email is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!form.service) errors.service = 'Please select a service.'
  if (!form.message.trim()) errors.message = 'Tell us a little about your project.'
  return errors
}

export function ContactSection() {
  const [form, setForm] = useState<FormState>({
    firstName: '',
    lastName: '',
    email: '',
    service: '',
    budget: '',
    message: '',
  })
  const [errors, setErrors] = useState<FieldError>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const fieldErrors = validate(form)
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors)
      // Focus first error field
      const first = Object.keys(fieldErrors)[0]
      document.getElementById(first)?.focus()
      return
    }
    setStatus('submitting')
    // Simulated async submission — replace with your form endpoint
    await new Promise((r) => setTimeout(r, 1200))
    setStatus('success')
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-30 bg-parchment"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: info */}
          <div>
            <p className="section-label mb-5">Let&rsquo;s Connect</p>
            <h2
              id="contact-heading"
              className="font-display text-display-lg text-charcoal mb-6"
            >
              Ready to build
              <span className="italic text-rose block">
                something beautiful?
              </span>
            </h2>
            <p className="font-body text-base text-charcoal-light leading-relaxed mb-10">
              Whether you&rsquo;re launching a brand or planning a wedding, shower,
              or milestone celebration, we&rsquo;d love to hear about your vision.
              Fill out the form and we&rsquo;ll be in touch within 2 business days.
            </p>

            <PetalDivider className="mb-10 justify-start" />

            <dl className="space-y-6">
              <div>
                <dt className="font-body text-xs tracking-widest uppercase text-rose mb-1">Email</dt>
                <dd>
                  <a
                    href="mailto:reachpixelpetal@gmail.com"
                    className="font-body text-base text-charcoal hover:text-rose transition-colors duration-200 focus-visible:outline-rose"
                  >
                    reachpixelpetal@gmail.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-body text-xs tracking-widest uppercase text-rose mb-1">Response time</dt>
                <dd className="font-body text-base text-charcoal-light">Within 2 business days</dd>
              </div>
              <div>
                <dt className="font-body text-xs tracking-widest uppercase text-rose mb-1">Follow along</dt>
                <dd className="flex items-center gap-5 mt-1">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm text-charcoal hover:text-rose transition-colors duration-200 focus-visible:outline-rose"
                    aria-label="Instagram (opens in new tab)"
                  >
                    Instagram
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          {/* Right: form */}
          <div>
            {status === 'success' ? (
              <div
                role="alert"
                aria-live="polite"
                className="flex flex-col items-center justify-center h-full min-h-64 text-center py-16"
              >
                <div className="mb-6" aria-hidden="true">
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                    <ellipse cx="32" cy="32" rx="14" ry="24" fill="#C4907A" fillOpacity="0.3" transform="rotate(-20 32 32)" />
                    <ellipse cx="32" cy="32" rx="14" ry="24" fill="#8A9E8C" fillOpacity="0.25" transform="rotate(20 32 32)" />
                    <circle cx="32" cy="32" r="6" fill="#C4907A" fillOpacity="0.6" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl text-charcoal mb-3">
                  Your message is on its way.
                </h3>
                <p className="font-body text-sm text-charcoal-light max-w-sm">
                  Thank you for reaching out! We&rsquo;ll be in touch within 2 business days.
                  We can&rsquo;t wait to hear more about your project.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                aria-label="Contact form"
                className="space-y-8"
              >
                {/* Name row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block font-body text-xs tracking-widest uppercase text-charcoal-light mb-3"
                    >
                      First Name <span aria-hidden="true" className="text-rose">*</span>
                      <span className="sr-only">(required)</span>
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      autoComplete="given-name"
                      value={form.firstName}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      aria-describedby={errors.firstName ? 'firstName-error' : undefined}
                      aria-invalid={!!errors.firstName}
                      className={inputBase}
                      placeholder="Your first name"
                    />
                    {errors.firstName && (
                      <p id="firstName-error" role="alert" className="mt-2 font-body text-xs text-rose">
                        {errors.firstName}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block font-body text-xs tracking-widest uppercase text-charcoal-light mb-3"
                    >
                      Last Name <span aria-hidden="true" className="text-rose">*</span>
                      <span className="sr-only">(required)</span>
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      autoComplete="family-name"
                      value={form.lastName}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      aria-describedby={errors.lastName ? 'lastName-error' : undefined}
                      aria-invalid={!!errors.lastName}
                      className={inputBase}
                      placeholder="Your last name"
                    />
                    {errors.lastName && (
                      <p id="lastName-error" role="alert" className="mt-2 font-body text-xs text-rose">
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block font-body text-xs tracking-widest uppercase text-charcoal-light mb-3"
                  >
                    Email Address <span aria-hidden="true" className="text-rose">*</span>
                    <span className="sr-only">(required)</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    aria-invalid={!!errors.email}
                    className={inputBase}
                    placeholder="you@example.com"
                  />
                  {errors.email && (
                    <p id="email-error" role="alert" className="mt-2 font-body text-xs text-rose">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Service */}
                <div>
                  <label
                    htmlFor="service"
                    className="block font-body text-xs tracking-widest uppercase text-charcoal-light mb-3"
                  >
                    I&rsquo;m interested in <span aria-hidden="true" className="text-rose">*</span>
                    <span className="sr-only">(required)</span>
                  </label>
                  <div className="relative">
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      aria-describedby={errors.service ? 'service-error' : undefined}
                      aria-invalid={!!errors.service}
                      className={selectBase}
                    >
                      {serviceOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 text-charcoal/40 pointer-events-none" aria-hidden="true">
                      ↓
                    </span>
                  </div>
                  {errors.service && (
                    <p id="service-error" role="alert" className="mt-2 font-body text-xs text-rose">
                      {errors.service}
                    </p>
                  )}
                </div>

                {/* Budget */}
                <div>
                  <label
                    htmlFor="budget"
                    className="block font-body text-xs tracking-widest uppercase text-charcoal-light mb-3"
                  >
                    Approximate Budget
                  </label>
                  <div className="relative">
                    <select
                      id="budget"
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      className={selectBase}
                    >
                      {budgetOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 text-charcoal/40 pointer-events-none" aria-hidden="true">
                      ↓
                    </span>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block font-body text-xs tracking-widest uppercase text-charcoal-light mb-3"
                  >
                    Tell us about your project <span aria-hidden="true" className="text-rose">*</span>
                    <span className="sr-only">(required)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    aria-invalid={!!errors.message}
                    className={`${inputBase} resize-none`}
                    placeholder="Share your vision, goals, timeline, or anything else we should know…"
                  />
                  {errors.message && (
                    <p id="message-error" role="alert" className="mt-2 font-body text-xs text-rose">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn-primary w-full sm:w-auto justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                  aria-busy={status === 'submitting'}
                >
                  {status === 'submitting' ? 'Sending…' : 'Send Your Message'}
                  {status !== 'submitting' && (
                    <span aria-hidden="true">→</span>
                  )}
                </button>

                <p className="font-body text-xs text-charcoal/40">
                  Fields marked <span aria-hidden="true">*</span><span className="sr-only">with an asterisk</span> are required.
                  We respect your privacy and will never share your information.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
