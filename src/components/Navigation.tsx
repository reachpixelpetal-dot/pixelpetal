'use client'

import { useState, useEffect } from 'react'

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#about', label: 'About' },
  { href: '#scrapbook', label: 'Scrapbook' },
  { href: '#contact', label: 'Contact' },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-warmwhite/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-6 lg:px-12 h-18 flex items-center justify-between"
        role="navigation"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="#"
          className="font-display text-xl font-semibold tracking-tight text-charcoal hover:text-rose transition-colors duration-300 focus-visible:outline-rose"
          aria-label="Pixel Petal — home"
        >
          Pixel Petal
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-10" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-body text-sm tracking-wide text-charcoal-light hover:text-rose transition-colors duration-300 focus-visible:outline-rose"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden lg:inline-flex btn-primary text-xs"
        >
          Start a Project
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2 focus-visible:outline-rose"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <span
            className={`block w-6 h-px bg-charcoal transition-all duration-300 ${
              menuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-6 h-px bg-charcoal transition-all duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-px bg-charcoal transition-all duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden bg-warmwhite border-t border-mist transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!menuOpen}
      >
        <ul className="px-6 py-8 flex flex-col gap-6" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-body text-base text-charcoal hover:text-rose transition-colors duration-300 block"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="btn-primary inline-flex mt-2"
            >
              Start a Project
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
