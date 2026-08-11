export default function LegalPage({ title, effectiveDate, lastUpdated, children }) {
  return (
    <div className="bg-white">
      <div className="bg-charcoal-950 py-16 text-white">
        <div className="mx-auto max-w-4xl container-px text-center">
          <h1 className="font-display text-3xl font-extrabold sm:text-4xl">{title}</h1>
          <p className="mt-4 text-sm text-charcoal-300">
            Effective Date: {effectiveDate} &nbsp;|&nbsp; Last Updated: {lastUpdated}
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-4xl container-px py-14">
        <div className="space-y-10">{children}</div>
      </div>
    </div>
  )
}

export function LegalSection({ number, title, children }) {
  return (
    <section>
      <h2 className="font-display text-xl font-bold text-charcoal-900">
        {number ? `${number}. ` : ''}
        {title}
      </h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-charcoal-600">{children}</div>
    </section>
  )
}
