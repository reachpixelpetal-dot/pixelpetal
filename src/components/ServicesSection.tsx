'use client'

import { PetalDivider } from './PetalDivider'

const services = [
  {
    number: '01',
    title: 'Brand Identity & Logo Design',
    description:
      'A mark that means something. We design logos and complete visual identities for businesses, or a monogram and motif for your wedding — built to carry your story from first impression to lasting memory.',
    detail: 'Logo suite · Brand guidelines · Wedding monograms · Event motifs',
    accent: 'bg-rose-pale',
    accentText: 'text-rose',
  },
  {
    number: '02',
    title: 'Custom Web Design',
    description:
      'Websites built for real people. Beautiful, intentional, and designed to convert — or a wedding website your guests will actually enjoy visiting. We handle the look, feel, and flow.',
    detail: 'UI/UX design · Figma prototypes · Wedding & event sites · Dev-ready handoff',
    accent: 'bg-sage-pale',
    accentText: 'text-sage',
  },
  {
    number: '03',
    title: 'Weddings & Celebrations',
    description:
      'From save-the-dates to day-of signage, we design the full visual experience of your celebration — weddings, showers, milestone birthdays, and everything in between.',
    detail: 'Save-the-dates · Invitations · Signage · Menus & programs',
    accent: 'bg-rose-pale',
    accentText: 'text-rose',
  },
  {
    number: '04',
    title: 'Social Media Graphics',
    description:
      'Show up consistently. We create template systems and custom content that keep your brand — or your big day — looking cohesive across every post and story.',
    detail: 'Instagram · LinkedIn · Pinterest · Stories & Reels covers',
    accent: 'bg-sage-pale',
    accentText: 'text-sage',
  },
  {
    number: '05',
    title: 'Posters & Print Design',
    description:
      'The physical world still matters. From event posters and marketing materials to ceremony programs and table cards, we design for print with the same care we bring to every pixel.',
    detail: 'Event posters · Flyers · Stationery · Day-of paper goods',
    accent: 'bg-rose-pale',
    accentText: 'text-rose',
  },
  {
    number: '06',
    title: 'Promo Videos',
    description:
      'Motion that moves people. We edit short promo and highlight videos using b-roll and stock footage, paired with your brand or event visuals, for social, web, and ads.',
    detail: 'B-roll editing · Stock footage curation · Social cuts · Highlight reels',
    accent: 'bg-sage-pale',
    accentText: 'text-sage',
  },
]

export function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="py-30 bg-warmwhite"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-2xl mb-20">
          <p className="section-label mb-5">What We Do</p>
          <h2
            id="services-heading"
            className="font-display text-display-lg text-charcoal mb-6"
          >
            Every service,
            <span className="italic text-rose"> crafted with care.</span>
          </h2>
          <p className="font-body text-base text-charcoal-light leading-relaxed">
            We don&rsquo;t offer packages off a shelf. Whether you&rsquo;re building a brand
            or planning the biggest day of your life, every engagement is shaped
            around your story, your people, and the details only you would notice.
          </p>
        </div>

        <PetalDivider className="mb-20" />

        {/* Service grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5 bg-mist">
          {services.map((service) => (
            <article
              key={service.number}
              className={`${service.accent} p-10 lg:p-14 group hover:shadow-md transition-shadow duration-300`}
            >
              <span
                className={`font-body text-xs tracking-[0.2em] ${service.accentText} mb-4 block`}
                aria-hidden="true"
              >
                {service.number}
              </span>
              <h3 className="font-display text-2xl font-medium text-charcoal mb-4 leading-snug">
                {service.title}
              </h3>
              <p className="font-body text-base text-charcoal-light leading-relaxed mb-6">
                {service.description}
              </p>
              <p className="font-body text-xs tracking-wide text-charcoal-light/70 border-t border-charcoal/10 pt-5">
                {service.detail}
              </p>
            </article>
          ))}
        </div>

        {/* CTA strip */}
        <div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-6 border-t border-mist pt-16">
          <p className="font-display text-xl text-charcoal italic max-w-md">
            Not sure what you need — for your brand or your big day? Let&rsquo;s figure it out together.
          </p>
          <a href="#contact" className="btn-rose ml-auto">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}
