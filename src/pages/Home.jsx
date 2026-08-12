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
