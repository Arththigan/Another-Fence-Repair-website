const reviews = [
  {
    name: 'Sarah M.',
    location: 'Rochester, NY',
    text: 'Another Fence Repair fixed our storm-damaged wood fence within two days of calling. Fair pricing and the crew was respectful of our yard the whole time.',
    initials: 'SM',
  },
  {
    name: 'David R.',
    location: 'Irondequoit, NY',
    text: 'Our chain link fence had a huge tear from a fallen branch. They patched it up same-day and it looks brand new. Highly recommend.',
    initials: 'DR',
  },
  {
    name: 'Linda K.',
    location: 'Greece, NY',
    text: 'Replaced several rotted posts on our vinyl fence and it was seamless — you can not even tell it was repaired. Great communication throughout.',
    initials: 'LK',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-py bg-charcoal-950 text-white">
      <div className="mx-auto max-w-7xl container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow bg-white/10 text-fence-300">Customer Reviews</span>
          <h2 className="mt-5 font-display text-3xl font-extrabold sm:text-4xl">
            What Rochester Homeowners Say About Us
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {reviews.map((r) => (
            <div key={r.name} className="rounded-2xl border border-white/10 bg-white/5 p-7">
              <div className="flex gap-1 text-fence-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path d="M12 1l3 6 6.5.9-4.7 4.6 1.1 6.5L12 16l-5.9 3 1.1-6.5L2.5 7.9 9 7z" />
                  </svg>
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-charcoal-200">&ldquo;{r.text}&rdquo;</p>
              <div className="mt-6 flex items-center gap-3">
                <span aria-hidden="true" className="flex h-11 w-11 items-center justify-center rounded-full bg-fence-700 text-xs font-bold text-white">
                  {r.initials}
                </span>
                <div>
                  <p className="font-display text-sm font-bold text-white">{r.name}</p>
                  <p className="text-xs text-charcoal-400">{r.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
