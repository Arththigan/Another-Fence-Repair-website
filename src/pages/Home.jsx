import { useEffect } from 'react'
import Hero from '../components/Hero.jsx'
import Services from '../components/Services.jsx'
import WhyChooseUs from '../components/WhyChooseUs.jsx'
import About from '../components/About.jsx'
import Process from '../components/Process.jsx'
import Gallery from '../components/Gallery.jsx'
import Testimonials from '../components/Testimonials.jsx'
import CTABanner from '../components/CTABanner.jsx'
import FAQ from '../components/FAQ.jsx'
import ContactSection from '../components/ContactSection.jsx'

export default function Home() {
  useEffect(() => {
    const targets = document.querySelectorAll(
      '.page-shell > section:not(#home) h2, .page-shell > section:not(#home) .grid > div, .page-shell > section:not(#home) img, .page-shell > section:not(#home) details, .page-shell > section:not(#home) iframe',
    )

    targets.forEach((target, index) => {
      target.classList.add('scroll-reveal')
      target.style.setProperty('--reveal-delay', `${(index % 4) * 70}ms`)
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('is-revealed', entry.isIntersecting)
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -7% 0px' },
    )

    targets.forEach((target) => observer.observe(target))
    return () => {
      observer.disconnect()
      targets.forEach((target) => {
        target.classList.remove('scroll-reveal', 'is-revealed')
        target.style.removeProperty('--reveal-delay')
      })
    }
  }, [])

  return (
    <div className="page-shell">
      <Hero />
      <Services />
      <WhyChooseUs />
      <About />
      <Process />
      <Gallery />
      <Testimonials />
      <CTABanner />
      <FAQ />
      <ContactSection />
    </div>
  )
}
