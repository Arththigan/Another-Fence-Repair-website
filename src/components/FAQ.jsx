import { useState } from 'react'
import { business } from '../data/business.js'

const faqs = [
  {
    q: 'What areas do you serve?',
    a: `We proudly serve Rochester, NY and the surrounding communities, working out of our shop at ${business.address}.`,
  },
  {
    q: 'Do you offer free estimates?',
    a: 'Yes. We provide free, no-obligation on-site inspections and written estimates before any work begins.',
  },
  {
    q: 'What types of fences do you repair?',
    a: 'We repair and install wood, vinyl, chain link, and aluminum/iron fences, plus gates and automatic gate hardware.',
  },
  {
    q: 'How fast can you respond to storm or emergency damage?',
    a: 'We offer 24/7 emergency response for safety hazards like fallen fence sections, and typically schedule standard repairs within a few days.',
  },
  {
    q: 'Are you licensed and insured?',
    a: 'Yes, Another Fence Repair is fully licensed and insured, so your property is protected during every job.',
  },
]

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0)

  return (
    <section id="faq" className="relative section-py bg-gradient-to-b from-[#dff4ff] via-white to-white">
      <div className="mx-auto max-w-4xl container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow bg-white text-fence-700">FAQ</span>
          <h2 className="mt-5 font-display text-3xl font-extrabold text-charcoal-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-3 rounded-[2rem] border border-white/80 bg-white/60 p-3 backdrop-blur sm:p-5">
          {faqs.map((item, idx) => {
            const isOpen = openIdx === idx
            return (
              <div key={item.q} className="overflow-hidden rounded-2xl border border-fence-100 bg-white">
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-display text-sm font-bold text-charcoal-900 sm:text-base">{item.q}</span>
                  <span className={`flex h-8 w-8 flex-none items-center justify-center rounded-full bg-fence-100 text-fence-700 transition ${isOpen ? 'rotate-45' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-sm leading-relaxed text-charcoal-600">{item.a}</div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
