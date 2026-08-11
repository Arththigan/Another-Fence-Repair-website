const services = [
  {
    title: 'Wood Fence Repair',
    image: 'https://fencerepaircompany.com/wp-content/uploads/2022/08/IMG_8567-scaled.jpeg',
    desc: 'Rotted posts, broken panels, and leaning sections restored to solid, straight condition.',
    icon: 'M4 21V9l8-6 8 6v12M9 21v-6h6v6',
  },
  {
    title: 'Vinyl Fence Repair',
    image: 'https://cdn.prod.website-files.com/664b4a371f1e43b58efbb1fe/6a4e4c15d574625bf4392021_vinyl-fence-repair-how-to-fix-panels-posts-common-issues.webp',
    desc: 'Cracked, stained, or wind-damaged vinyl panels replaced with a clean, seamless match.',
    icon: 'M4 4h16v16H4zM4 10h16M4 16h16M10 4v16',
  },
  {
    title: 'Chain Link Repair',
    image: 'https://www.laportefencing.com/images/chain-link-repair.jpg',
    desc: 'Torn mesh, bent poles, and sagging tension wire fixed fast to keep your yard secure.',
    icon: 'M4 4l16 16M20 4L4 20M4 4v16h16V4z',
  },
  {
    title: 'Gate Repair & Install',
    image: 'https://acehandyman-dss.ingeniuxondemand.com/Images/Corporate%20Site/Service%20Pages/Fence/gate_repair.jpg',
    desc: 'Sticking gates, broken hinges, and faulty latches repaired or replaced for smooth use.',
    icon: 'M3 21V7l9-4 9 4v14M8 21V11h8v10M3 21h18',
  },
  {
    title: 'New Fence Installation',
    image: 'https://images.squarespace-cdn.com/content/v1/55b7a78fe4b06cefdea9c78a/1747527054278-0UVWD4HOG3U8FBXLTUZD/Image%2B%2826%29.jpg',
    desc: 'Full fence installs in wood, vinyl, aluminum, or chain link — built to last for years.',
    icon: 'M5 21V9M12 21V4M19 21V9M2 21h20',
  },
  {
    title: 'Emergency Fence Repair',
    image: 'https://i.ytimg.com/vi/QD-l9qrVggw/maxresdefault.jpg',
    desc: 'Storm damage or a fallen fence? We offer same-day and 24/7 emergency response.',
    icon: 'M12 2l9 4v6c0 5-3.8 8.7-9 10-5.2-1.3-9-5-9-10V6z M12 8v5 M12 16h.01',
  },
]

export default function Services() {
  return (
    <section id="services" className="section-py bg-white">
      <div className="mx-auto max-w-7xl container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow bg-white text-fence-700">What We Do</span>
          <h2 className="mt-5 font-display text-3xl font-extrabold text-charcoal-900 sm:text-4xl">
            Complete Fence Repair &amp; Installation Services
          </h2>
          <p className="mt-4 text-charcoal-600">
            Whatever your fence needs, our licensed crew handles it with quality materials and
            honest, upfront pricing.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 rounded-[2rem] border border-charcoal-100 bg-[#f7f9fa] p-3 sm:grid-cols-2 sm:p-4 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group overflow-hidden rounded-3xl border border-charcoal-100 bg-white p-3 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden rounded-[1.15rem]">
                <img src={s.image} alt={s.title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              <span className="absolute left-3 top-3 flex h-11 w-11 items-center justify-center rounded-xl bg-white/95 text-fence-600 shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d={s.icon} />
                </svg>
              </span>
              </div>
              <div className="px-3 pb-3">
              <h3 className="mt-5 font-display text-lg font-bold text-charcoal-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal-600">{s.desc}</p>
              <a href="#contact" className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-fence-100 px-4 py-2 font-display text-xs font-bold text-fence-700 hover:bg-fence-200">
                Request Service
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
