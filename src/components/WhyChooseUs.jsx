const features = [
  {
    title: 'Licensed & Insured',
    desc: 'Fully licensed and insured crews so your property — and our team — stay protected.',
    icon: 'M12 2l8 3v6c0 5-3.4 8.6-8 11-4.6-2.4-8-6-8-11V5z M9 12l2 2 4-4',
  },
  {
    title: 'Same-Day Estimates',
    desc: 'Call or fill out our form and get a straightforward, no-obligation quote fast.',
    icon: 'M12 8v4l3 3 M12 22a10 10 0 100-20 10 10 0 000 20z',
  },
  {
    title: 'Quality Materials',
    desc: 'We use durable, weather-resistant wood, vinyl, and metal built for Rochester winters.',
    icon: 'M4 4h16v16H4z M4 9h16 M9 9v11',
  },
  {
    title: 'Workmanship Guarantee',
    desc: 'Every repair and installation is backed by our satisfaction guarantee.',
    icon: 'M12 2l3 6 6.5.9-4.7 4.6 1.1 6.5L12 16l-5.9 3 1.1-6.5L2.5 7.9 9 7z',
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section-py bg-charcoal-950 text-white">
      <div className="mx-auto max-w-7xl container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow bg-white/10 text-fence-300">Why Choose Us</span>
          <h2 className="mt-5 font-display text-3xl font-extrabold sm:text-4xl">
            Rochester Homeowners &amp; Businesses Trust Another Fence Repair
          </h2>
          <p className="mt-4 text-charcoal-300">
            We treat every property like our own — clean job sites, honest pricing, and repairs
            that hold up for years.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-white/10 bg-white/5 p-7 transition hover:bg-white/10">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-fence-500/20 text-fence-400">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d={f.icon} />
                </svg>
              </span>
              <h3 className="mt-5 font-display text-base font-bold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
