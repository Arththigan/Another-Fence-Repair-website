import { business } from '../data/business.js'

const points = [
  'Local, family-owned crew serving Rochester & the Finger Lakes region',
  'Free on-site inspections and transparent, written estimates',
  'Specialists in wood, vinyl, aluminum & chain link systems',
  'Clean, respectful crews who leave your property spotless',
]

export default function About() {
  return (
    <section id="about" className="section-py bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 container-px lg:grid-cols-2">
        <div className="relative">
          <div className="overflow-hidden rounded-3xl shadow-xl">
            <img
              src="/images/optimized/about-1200.webp"
              srcSet="/images/optimized/about-640.webp 640w, /images/optimized/about-1200.webp 1200w"
              sizes="(max-width: 1023px) 100vw, 50vw"
              alt="Fence technician repairing a wood fence panel"
              width="700"
              height="560"
              loading="lazy"
              decoding="async"
              className="h-[420px] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -right-6 hidden max-w-[220px] rounded-2xl bg-fence-700 p-5 text-white shadow-xl sm:block">
            <p className="font-display text-3xl font-extrabold">15+</p>
            <p className="mt-1 text-sm font-semibold text-fence-50">Years repairing &amp; building fences across Rochester, NY</p>
          </div>
        </div>

        <div>
          <span className="eyebrow bg-fence-100 text-fence-700">About Another Fence Repair</span>
          <h2 className="mt-5 font-display text-3xl font-extrabold text-charcoal-900 sm:text-4xl">
            Rochester&apos;s Go-To Team for Dependable Fence Repair
          </h2>
          <p className="mt-5 text-charcoal-600 leading-relaxed">
            Another Fence Repair has spent over 15 years helping Rochester homeowners and
            businesses fix, restore, and install fences that hold up against harsh Western New
            York winters. From a single storm-damaged panel to a full property fence line, our
            crew shows up on time, works clean, and stands behind every repair.
          </p>

          <ul className="mt-6 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-fence-500 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="h-3 w-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-sm text-charcoal-700">{p}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contact" className="btn-primary">
              Talk to Our Team
            </a>
            <a href={business.phoneHref} className="btn-secondary">
              Call {business.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
