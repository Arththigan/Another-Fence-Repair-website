import { business } from '../data/business.js'

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-fence-500">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 container-px py-14 text-center sm:flex-row sm:text-left">
        <div>
          <h2 className="font-display text-2xl font-extrabold text-charcoal-950 sm:text-3xl">
            Need Your Fence Fixed Fast?
          </h2>
          <p className="mt-2 font-medium text-charcoal-900">
            Same-day estimates. Emergency repairs available 24/7 across Rochester, NY.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-charcoal-950 px-6 py-3 font-display text-sm font-semibold text-white transition hover:bg-charcoal-800">
            Get Free Quote
          </a>
          <a href={business.phoneHref} className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-charcoal-950 bg-charcoal-950 px-6 py-3 font-display text-sm font-bold text-white transition hover:bg-white hover:text-charcoal-950">
            Call {business.phone}
          </a>
        </div>
      </div>
    </section>
  )
}
