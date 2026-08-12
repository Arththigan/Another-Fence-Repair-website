import { business } from '../data/business.js'

const services = ['Fence repair', 'New installation', 'Gates & hardware']

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[calc(100svh-105px)] overflow-hidden bg-[#79cff2]">
      <div className="pointer-events-none absolute -right-40 -top-52 h-[620px] w-[620px] rounded-full border-[110px] border-white/10" />
      <div className="relative mx-auto flex min-h-[calc(100svh-105px)] max-w-7xl items-center container-px py-8 lg:py-10">
        <div className="grid w-full items-end gap-10 lg:grid-cols-[1.05fr_.95fr]">
          <div className="relative z-10 pb-3">
            <span className="eyebrow bg-white/45 text-charcoal-900">Rochester’s local fence specialists</span>
            <h1 className="mt-5 max-w-4xl font-display text-[2.95rem] font-extrabold leading-[.94] tracking-[-.055em] text-charcoal-950 sm:text-[3.7rem] lg:text-[4.75rem]">
              Everything your <span className="text-charcoal-900 underline decoration-white/70 decoration-4 underline-offset-4">fence</span> could ever need.
            </h1>
            <p className="mt-4 max-w-xl text-sm font-medium leading-relaxed text-charcoal-800 sm:text-base">
              Fast repairs, lasting installations, and honest advice from a licensed local crew that treats your property like our own.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="btn-primary">Get a free estimate <span aria-hidden="true">↗</span></a>
              <a href={business.phoneHref} className="inline-flex items-center justify-center rounded-full border border-charcoal-950/25 bg-white/20 px-6 py-3 font-display text-sm font-bold text-charcoal-950 transition hover:bg-white/45">Call {business.phone}</a>
            </div>
            <div className="mt-6 grid max-w-xl divide-y divide-charcoal-950/15 border-y border-charcoal-950/15 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {services.map((item, i) => (
                <a key={item} href="#services" className="group flex items-center justify-between py-3 text-xs font-bold text-charcoal-950 sm:px-3 sm:first:pl-0">
                  <span><span className="mr-2 text-xs text-charcoal-900">0{i + 1}</span>{item}</span><span className="transition group-hover:translate-x-1">→</span>
                </a>
              ))}
            </div>
          </div>
          <div className="relative min-h-[430px] lg:min-h-[clamp(500px,68vh,650px)]">
            <div className="absolute inset-x-0 bottom-0 top-4 overflow-hidden rounded-[2.5rem] rounded-br-[7rem] bg-charcoal-950 shadow-2xl shadow-charcoal-950/20">
              <img
                src="/images/optimized/hero-1200.webp"
                srcSet="/images/optimized/hero-640.webp 640w, /images/optimized/hero-1200.webp 1200w"
                sizes="(max-width: 1023px) calc(100vw - 3rem), 50vw"
                alt="Professional contractor installing a residential wood fence"
                width="640"
                height="720"
                fetchPriority="high"
                decoding="async"
                className="h-full w-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/65 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-white">
                <div><p className="text-4xl font-extrabold">15+</p><p className="mt-1 text-sm text-white/75">years protecting Rochester yards</p></div>
                <span className="mr-8 rounded-full bg-[#ffd84d] px-4 py-2 text-xs font-bold text-charcoal-950 shadow-md sm:mr-12">Licensed & insured</span>
              </div>
            </div>
            <div className="absolute right-4 top-0 rounded-2xl bg-white p-4 shadow-xl sm:right-7">
              <p className="text-xs font-bold uppercase tracking-wider text-charcoal-700">Available now</p>
              <p className="mt-1 font-display text-sm font-extrabold text-charcoal-950"><span className="mr-2 inline-block h-2 w-2 rounded-full bg-green-500" />Same-day estimates</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
