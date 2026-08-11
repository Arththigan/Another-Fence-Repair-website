const steps = [
  {
    step: '01',
    title: 'Free Inspection',
    desc: 'We visit your property, assess the damage, and identify the best fix.',
  },
  {
    step: '02',
    title: 'Upfront Quote',
    desc: 'You get a clear, written estimate — no hidden fees or surprise charges.',
  },
  {
    step: '03',
    title: 'Expert Repair',
    desc: 'Our licensed crew completes the repair or install using quality materials.',
  },
  {
    step: '04',
    title: 'Final Walkthrough',
    desc: 'We clean up the site and walk you through the finished work.',
  },
]

export default function Process() {
  return (
    <section className="section-py bg-fence-50">
      <div className="mx-auto max-w-7xl container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow bg-white text-fence-700">How It Works</span>
          <h2 className="mt-5 font-display text-3xl font-extrabold text-charcoal-900 sm:text-4xl">
            Simple, Stress-Free Fence Repair Process
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.step} className="relative">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-charcoal-900 font-display text-xl font-extrabold text-fence-400">
                {s.step}
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-charcoal-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal-600">{s.desc}</p>
              {i < steps.length - 1 && (
                <span className="pointer-events-none absolute right-[-24px] top-8 hidden text-fence-300 lg:block">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
