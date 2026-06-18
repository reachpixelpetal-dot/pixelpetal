'use client'

import { useEffect } from 'react'
import { Navigation } from '@/components/Navigation'
import { HeroSection } from '@/components/HeroSection'
import { ServicesSection } from '@/components/ServicesSection'
import { PortfolioSection } from '@/components/PortfolioSection'
import { AboutSection } from '@/components/AboutSection'
import { TestimonialsSection } from '@/components/TestimonialsSection'
import { ContactSection } from '@/components/ContactSection'
import { Footer } from '@/components/Footer'

export default function Home() {
  // Scroll-triggered reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const els = document.querySelectorAll('.reveal')
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Skip to main content — accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-charcoal focus:text-warmwhite focus:px-6 focus:py-3 focus:font-body focus:text-sm focus:tracking-wide"
      >
        Skip to main content
      </a>

      <Navigation />

      <main id="main-content">
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  )
}
