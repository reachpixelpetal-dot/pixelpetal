'use client'

import { PetalDivider } from './PetalDivider'

// Placeholder collage tiles — replace each with a real project photo.
// Sizes vary to create a mosaic effect; swap colors/spans for actual images later.
const collageTiles = [
  { id: 1, color: '#F2E8E3', accent: '#C4907A', span: 'col-span-2 row-span-2' },
  { id: 2, color: '#EDF2EE', accent: '#8A9E8C', span: 'col-span-1 row-span-1' },
  { id: 3, color: '#F7F3EE', accent: '#C4907A', span: 'col-span-1 row-span-1' },
  { id: 4, color: '#EDF2EE', accent: '#8A9E8C', span: 'col-span-1 row-span-2' },
  { id: 5, color: '#F2E8E3', accent: '#C4907A', span: 'col-span-1 row-span-1' },
  { id: 6, color: '#F7F3EE', accent: '#8A9E8C', span: 'col-span-1 row-span-1' },
  { id: 7, color: '#EDF2EE', accent: '#C4907A', span: 'col-span-2 row-span-1' },
]

export function PortfolioSection() {
  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-heading"
      className="py-30 bg-parchment"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="section-label mb-5">Portfolio</p>
            <h2
              id="portfolio-heading"
              className="font-display text-display-lg text-charcoal"
            >
              Work we&rsquo;re
              <span className="italic text-rose"> proud of.</span>
            </h2>
          </div>
          <a href="#contact" className="btn-ghost self-start md:self-auto">
            Start Your Project
          </a>
        </div>

        <PetalDivider className="mb-16" />

        {/* Photo collage — replace each tile's background with a real image */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 auto-rows-[140px] md:auto-rows-[160px] gap-3"
          role="img"
          aria-label="A collage of past project photography, to be added as our portfolio grows"
        >
          {collageTiles.map((tile) => (
            <div
              key={tile.id}
              className={`relative overflow-hidden flex items-center justify-center ${tile.span}`}
              style={{ backgroundColor: tile.color }}
            >
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                <ellipse cx="20" cy="20" rx="8" ry="15" fill={tile.accent} fillOpacity="0.3" transform="rotate(-20 20 20)" />
                <ellipse cx="20" cy="20" rx="8" ry="15" fill={tile.accent} fillOpacity="0.3" transform="rotate(20 20 20)" />
                <ellipse cx="20" cy="20" rx="4" ry="7" fill={tile.accent} fillOpacity="0.45" />
              </svg>
            </div>
          ))}
        </div>

        <p className="mt-8 font-body text-sm text-charcoal-light/70 text-center italic">
          Our story is just getting started — full case studies coming soon.
        </p>
      </div>
    </section>
  )
}
