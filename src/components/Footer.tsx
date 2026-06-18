import { PetalDivider } from './PetalDivider'

const footerLinks = {
  Studio: [
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'About', href: '#about' },
    { label: 'Scrapbook', href: '#scrapbook' },
  ],
  Connect: [
    { label: 'Start a Project', href: '#contact' },
    { label: 'Instagram', href: 'https://instagram.com', external: true },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-charcoal text-warmwhite" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-24 pb-12">
        {/* Top row */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a
              href="#"
              className="font-display text-3xl text-warmwhite hover:text-rose transition-colors duration-300 focus-visible:outline-rose"
              aria-label="Pixel Petal — back to top"
            >
              Pixel Petal
            </a>
            <p className="font-body text-sm text-warmwhite/50 mt-4 max-w-xs leading-relaxed italic">
              Sharp pixels. Soft petals.
            </p>
            <p className="font-body text-xs text-warmwhite/30 mt-6 tracking-wide">
              Women-Owned · Creative Studio
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <nav key={group} aria-label={`${group} links`}>
              <h3 className="font-body text-xs tracking-[0.2em] uppercase text-rose mb-6">
                {group}
              </h3>
              <ul className="space-y-3" role="list">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...('external' in link && link.external
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                      className="font-body text-sm text-warmwhite/60 hover:text-warmwhite transition-colors duration-200 focus-visible:outline-rose"
                    >
                      {link.label}
                      {'external' in link && link.external && (
                        <span className="sr-only"> (opens in new tab)</span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <PetalDivider color="#C4907A" className="mb-10 opacity-30" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-warmwhite/30">
            © {year} Pixel Petal Studio. All rights reserved.
          </p>
          <p className="font-body text-xs text-warmwhite/20">
            reachpixelpetal@gmail.com
          </p>
        </div>
      </div>
    </footer>
  )
}
