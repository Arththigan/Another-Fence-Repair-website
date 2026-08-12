import { useEffect, useState } from 'react'
import logo from '../assets/logo.webp'
import { business } from '../data/business.js'

const navLinks = [
  { label: 'Home', hash: '#home' },
  { label: 'Services', hash: '#services' },
  { label: 'Why Us', hash: '#why-us' },
  { label: 'Gallery', hash: '#gallery' },
  { label: 'Reviews', hash: '#testimonials' },
  { label: 'FAQ', hash: '#faq' },
  { label: 'Contact', hash: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = window.location.pathname
  const [active, setActive] = useState(pathname === '/' ? '#home' : '')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    if (pathname !== '/') setActive('')
  }, [pathname])

  useEffect(() => {
    if (pathname !== '/') return undefined
    const sections = navLinks
      .map((link) => document.querySelector(link.hash))
      .filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(`#${visible.target.id}`)
      },
      { rootMargin: '-25% 0px -60% 0px', threshold: [0.05, 0.25, 0.5] },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [pathname])

  const goToSection = (hash) => (e) => {
    e.preventDefault()
    setOpen(false)
    if (pathname !== '/') {
      window.location.assign('/' + hash)
      return
    }
    setActive(hash)
    const el = document.querySelector(hash)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="sticky top-0 z-50 bg-transparent px-2 pt-2 sm:px-4 sm:pt-3">
      <div className={`mx-auto flex max-w-[1348px] items-center justify-between rounded-full border border-white/70 bg-white/90 px-3 backdrop-blur-xl transition-all duration-500 ${scrolled ? 'py-1.5 shadow-[0_14px_40px_rgba(7,31,51,.14)]' : 'py-2 shadow-[0_8px_25px_rgba(7,31,51,.08)]'}`}>
        <a href="/" className="group flex items-center gap-2 rounded-full pr-3">
          <img src={logo} alt="Another Fence Repair logo" width="180" height="134" className={`w-auto transition-all duration-500 ${scrolled ? 'h-10' : 'h-12'}`} />
          <span className="hidden font-display text-sm font-extrabold leading-tight text-charcoal-950 sm:block">
            Another Fence
            <span className="block text-[11px] font-bold uppercase tracking-widest text-fence-700">Repair</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1.5 rounded-full bg-charcoal-950 p-1.5 shadow-inner lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.hash}
              onClick={goToSection(link.hash)}
              className={`group relative min-w-[82px] overflow-hidden rounded-full px-5 py-2.5 text-center font-display text-xs font-bold transition-all duration-300 ${active === link.hash ? 'bg-[#ffd84d] text-charcoal-950 shadow-md' : 'text-white/70 hover:bg-white/10 hover:text-white'}`}
            >
              <span className="relative z-10 inline-block transition-transform duration-300 group-hover:-translate-y-0.5">{link.label}</span>
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={business.phoneHref}
            className="group flex items-center gap-2 font-display text-xs font-extrabold text-charcoal-900"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-fence-100 text-fence-700 transition duration-300 group-hover:rotate-12 group-hover:bg-fence-500 group-hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.49a1 1 0 011 1 11.36 11.36 0 00.57 3.56 1 1 0 01-.25 1.02l-2.2 2.21z" />
              </svg>
            </span>
            {business.phone}
          </a>
          <a href="#contact" onClick={goToSection('#contact')} className="group inline-flex items-center gap-2 rounded-full bg-[#a83e08] px-5 py-3 font-display text-xs font-extrabold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#8f3205] hover:shadow-lg">
            Get Free Quote <span className="transition-transform duration-300 group-hover:rotate-45">↗</span>
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={`flex h-10 w-10 items-center justify-center rounded-full transition duration-300 lg:hidden ${open ? 'rotate-90 bg-charcoal-950 text-white' : 'bg-charcoal-100 text-charcoal-950'}`}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="mx-2 mt-2 overflow-hidden rounded-3xl border border-white/60 bg-white/95 shadow-2xl backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col gap-1 p-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.hash}
                onClick={goToSection(link.hash)}
                className={`rounded-2xl px-4 py-3 font-display text-sm font-bold transition ${active === link.hash ? 'bg-charcoal-950 text-white' : 'text-charcoal-700 hover:bg-fence-100 hover:text-fence-700'}`}
              >
                {link.label}
              </a>
            ))}
            <a href={business.phoneHref} className="mt-2 flex items-center gap-2 rounded-lg px-3 py-2.5 font-display text-sm font-bold text-fence-700">
              Call {business.phone}
            </a>
            <a href="#contact" onClick={goToSection('#contact')} className="btn-primary mt-2 w-full">
              Get Free Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
