'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { PetalScatter } from './PetalDivider'

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    const timer = setTimeout(() => el.classList.add('visible'), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      aria-label="Hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-parchment"
    >
      {/* Decorative petal background */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <PetalScatter className="absolute top-0 left-0 w-full h-full opacity-70" />
      </div>

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, #1C1917, #1C1917 1px, transparent 1px, transparent 80px), repeating-linear-gradient(90deg, #1C1917, #1C1917 1px, transparent 1px, transparent 80px)',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div
        ref={heroRef}
        className="reveal relative z-10 max-w-5xl mx-auto px-6 text-center pt-32 pb-24"
      >
        {/* Eyebrow */}
        <p className="section-label mb-8 reveal reveal-delay-1">
          Women-Owned Creative Studio
        </p>

        {/* Logo mark */}
        <div className="flex justify-center mb-8 reveal reveal-delay-1">
          <Image
            src="/images/logo-mark.png"
            alt="Pixel Petal logo"
            width={140}
            height={96}
            priority
            className="w-28 sm:w-32 md:w-36 h-auto"
          />
        </div>

        {/* Headline */}
        <h1 className="font-display text-display-xl text-charcoal mb-6 reveal reveal-delay-2">
          Your story,
          <span className="block italic text-rose"> beautifully told.</span>
        </h1>

        {/* Tagline */}
        <p className="font-body text-lg md:text-xl text-charcoal-light max-w-2xl mx-auto mb-12 leading-relaxed reveal reveal-delay-3">
          Sharp pixels. Soft petals. From brand identities and websites to weddings,
          showers, and milestone celebrations — we design every detail to feel
          unmistakably yours.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal reveal-delay-4">
          <a href="#contact" className="btn-primary">
            Start a Project
          </a>
          <a href="#portfolio" className="btn-ghost">
            View Our Portfolio
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 flex flex-col items-center gap-2 opacity-50" aria-hidden="true">
          <span className="font-body text-xs tracking-widest uppercase text-charcoal-light">
            Scroll
          </span>
          <div className="w-px h-12 bg-charcoal-light" />
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-warmwhite to-transparent"
        aria-hidden="true"
      />
    </section>
  )
}
