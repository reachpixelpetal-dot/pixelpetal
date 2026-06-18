'use client'

import Image from 'next/image'
import { PetalDivider } from './PetalDivider'

const values = [
  {
    title: 'Intentional by nature',
    body: 'Every choice — typeface, color, margin — is deliberate. Nothing is filler. Nothing is default.',
  },
  {
    title: 'Your story, our medium',
    body: 'We listen first, design second. The best work happens when we truly understand what you are building, or celebrating, and why.',
  },
  {
    title: 'Made for the moment',
    body: 'Brand systems are built to grow with your business. Wedding and event designs are made to capture one unforgettable day.',
  },
]

export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-30 bg-warmwhite"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: visual */}
          <div className="relative">
            {/* Founder image placeholder */}
            <div
              className="relative w-full aspect-[4/5] bg-parchment flex items-center justify-center overflow-hidden"
              aria-label="Founder photo placeholder — replace with real image"
            >
              <Image
                src="/images/logo-mark.png"
                alt="Pixel Petal logo"
                width={280}
                height={192}
                className="w-2/3 h-auto relative z-10"
              />
            </div>

            {/* Floating stat */}
            <div className="absolute -bottom-6 -right-6 bg-charcoal text-warmwhite p-8 hidden lg:block">
              <p className="font-display text-4xl font-bold">100%</p>
              <p className="font-body text-xs tracking-widest uppercase text-rose mt-1">
                Women-Owned
              </p>
            </div>
          </div>

          {/* Right: copy */}
          <div>
            <p className="section-label mb-5">About Pixel Petal</p>
            <h2
              id="about-heading"
              className="font-display text-display-md text-charcoal mb-6"
            >
              One studio. Every detail.
              <span className="italic text-rose block">Every time.</span>
            </h2>

            <div className="space-y-5 font-body text-base text-charcoal-light leading-relaxed mb-10">
              <p>
                Pixel Petal is a women-owned creative studio built on the belief
                that great design isn&rsquo;t a luxury — it&rsquo;s a strategy, and a
                celebration. We work with founders and small businesses ready to
                show up with intention, and with couples and families planning the
                moments they&rsquo;ll remember forever.
              </p>
              <p>
                From the first conversation to the final file — or the final
                invitation in the mail — every project is handled with curiosity,
                craft, and complete attention to detail. We don&rsquo;t do cookie-cutter.
                We do yours.
              </p>
            </div>

            <PetalDivider className="mb-10 justify-start" />

            {/* Values */}
            <dl className="space-y-7">
              {values.map((v) => (
                <div key={v.title}>
                  <dt className="font-display text-base font-semibold text-charcoal mb-1.5">
                    {v.title}
                  </dt>
                  <dd className="font-body text-sm text-charcoal-light leading-relaxed">
                    {v.body}
                  </dd>
                </div>
              ))}
            </dl>

            <a href="#contact" className="btn-primary mt-10 inline-flex">
              Let&rsquo;s Work Together
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
