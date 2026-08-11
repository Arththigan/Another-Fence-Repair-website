import { useEffect } from 'react'
import { business } from '../data/business.js'

export default function ContactSection() {
  useEffect(() => {
    if (document.querySelector('script[src="https://link.kdlead.com/js/form_embed.js"]')) return
    const script = document.createElement('script')
    script.src = 'https://link.kdlead.com/js/form_embed.js'
    script.async = true
    document.body.appendChild(script)
  }, [])

  return (
    <section id="contact" className="section-py bg-white">
      <div className="mx-auto max-w-7xl container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow bg-fence-100 text-fence-700">Get In Touch</span>
          <h2 className="mt-5 font-display text-3xl font-extrabold text-charcoal-900 sm:text-4xl">
            Request Your Free Fence Repair Estimate
          </h2>
          <p className="mt-4 text-charcoal-600">
            Tell us about your fence and we&apos;ll get back to you with a free quote — usually
            the same day.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-2">
            <ContactCard
              icon="phone"
              title="Call Us"
              lines={[business.phone]}
              href={business.phoneHref}
            />
            <ContactCard
              icon="mail"
              title="Email Us"
              lines={[business.email]}
              href={`mailto:${business.email}`}
            />
            <ContactCard
              icon="pin"
              title="Visit Us"
              lines={[business.address]}
              href={business.mapLink}
              external
            />

            <div className="overflow-hidden rounded-2xl border border-fence-100">
              <iframe
                title="Another Fence Repair location map"
                src={business.mapEmbedSrc}
                width="100%"
                height="220"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="rounded-2xl border border-fence-100 bg-fence-50 p-3 sm:p-4 lg:col-span-3">
            <iframe
              src="https://link.kdlead.com/widget/form/SJjj3u41Ky83WT5ysGi9"
              style={{ width: '100%', height: '100%', border: 'none', borderRadius: '8px' }}
              id="inline-SJjj3u41Ky83WT5ysGi9"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Another Fence Repair"
              data-height="877"
              data-layout-iframe-id="inline-SJjj3u41Ky83WT5ysGi9"
              data-form-id="SJjj3u41Ky83WT5ysGi9"
              title="Another Fence Repair"
              className="min-h-[700px] w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactCard({ icon, title, lines, href, external }) {
  const icons = {
    phone: 'M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.49a1 1 0 011 1 11.36 11.36 0 00.57 3.56 1 1 0 01-.25 1.02z',
    mail: 'M3 6l9 6 9-6M4 5h16a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1z',
    pin: 'M12 21s-7-6.1-7-11a7 7 0 1114 0c0 4.9-7 11-7 11z',
  }

  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="flex items-start gap-4 rounded-2xl border border-fence-100 bg-white p-5 transition hover:border-fence-300 hover:shadow-md"
    >
      <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-fence-500 text-white">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
          <path strokeLinecap="round" strokeLinejoin="round" d={icons[icon]} />
        </svg>
      </span>
      <div>
        <p className="font-display text-sm font-bold text-charcoal-900">{title}</p>
        {lines.map((l) => (
          <p key={l} className="mt-0.5 text-sm text-charcoal-600">
            {l}
          </p>
        ))}
      </div>
    </a>
  )
}
