'use client'

import { useState } from 'react'
import { PetalDivider } from './PetalDivider'

const testimonials = [
  {
    id: 1,
    quote:
      'Working with Pixel Petal was the best investment I made for my business. They took my messy vision and turned it into something that genuinely stopped people in their tracks. The attention to detail is unlike anything I have experienced.',
    author: 'Amara Osei',
    title: 'Founder, Bloom & Build Co.',
    category: 'Brand Identity + Web Design',
  },
  {
    id: 2,
    quote:
      'Our invitation suite set the tone for our entire wedding before guests even arrived. Every card, every detail felt like it was made just for us. People still ask where we found our stationery designer.',
    author: 'Sofia & Daniel',
    title: 'Married June 2025',
    category: 'Wedding Suite + Day-of Signage',
  },
  {
    id: 3,
    quote:
      'I came in with a logo on a napkin and left with a full brand system I am obsessed with. The process felt collaborative and easy — they really listened. My clients regularly comment on how professional and cohesive everything looks.',
    author: 'Maya Chen',
    title: 'Creative Director, Studio North',
    category: 'Brand Identity + Social Templates',
  },
  {
    id: 4,
    quote:
      'Our new website has completely changed how potential clients perceive us before we even speak. The design is stunning and it actually converts. Worth every penny and then some.',
    author: 'Priya Sharma',
    title: 'CEO, Luminary Consulting',
    category: 'Custom Web Design',
  },
]

export function TestimonialsSection() {
  const [active, setActive] = useState(0)

  return (
    <section
      id="scrapbook"
      aria-labelledby="scrapbook-heading"
      className="py-30 bg-charcoal text-warmwhite overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="section-label text-rose mb-5">Scrapbook</p>
            <h2
              id="scrapbook-heading"
              className="font-display text-display-lg text-warmwhite"
            >
              The work speaks.
              <span className="italic text-rose-light block">
                So do our clients.
              </span>
            </h2>
          </div>
        </div>

        <PetalDivider className="mb-16" color="#C4907A" />

        {/* Active testimonial */}
        <div className="max-w-3xl">
          <blockquote
            className="font-display text-2xl md:text-3xl text-warmwhite leading-relaxed mb-10 italic"
            key={active}
          >
            &ldquo;{testimonials[active].quote}&rdquo;
          </blockquote>

          <div className="flex items-center gap-5 mb-12">
            {/* Avatar placeholder */}
            <div
              className="w-12 h-12 rounded-full bg-rose flex items-center justify-center flex-shrink-0"
              aria-hidden="true"
            >
              <span className="font-display text-lg font-bold text-warmwhite">
                {testimonials[active].author.charAt(0)}
              </span>
            </div>
            <div>
              <p className="font-body text-sm font-medium text-warmwhite">
                {testimonials[active].author}
              </p>
              <p className="font-body text-xs text-warmwhite/60 mt-0.5">
                {testimonials[active].title}
              </p>
              <p className="font-body text-xs text-rose mt-1 tracking-wide">
                {testimonials[active].category}
              </p>
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex items-center gap-4" role="tablist" aria-label="Testimonial navigation">
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                role="tab"
                aria-selected={i === active}
                aria-label={`Testimonial from ${t.author}`}
                onClick={() => setActive(i)}
                className={`transition-all duration-300 focus-visible:outline-rose rounded-full ${
                  i === active
                    ? 'w-8 h-2 bg-rose'
                    : 'w-2 h-2 bg-warmwhite/30 hover:bg-warmwhite/60'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Side quote strip */}
        <div className="mt-20 pt-16 border-t border-warmwhite/10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setActive(i)}
              className={`text-left p-6 border transition-all duration-300 focus-visible:outline-rose ${
                i === active
                  ? 'border-rose bg-rose/5'
                  : 'border-warmwhite/10 hover:border-warmwhite/30'
              }`}
            >
              <p
                className={`font-body text-sm leading-relaxed mb-4 line-clamp-3 ${
                  i === active ? 'text-warmwhite' : 'text-warmwhite/50'
                }`}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className={`font-body text-xs font-medium ${i === active ? 'text-rose' : 'text-warmwhite/30'}`}>
                — {t.author}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
