import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { business } from '../data/business.js'

const services = [
  'Wood Fence Repair',
  'Vinyl Fence Repair',
  'Chain Link Fence Repair',
  'Gate Repair & Installation',
  'New Fence Installation',
  'Emergency Fence Repair',
]

const quickLinks = [
  { label: 'Home', hash: '#home' },
  { label: 'Services', hash: '#services' },
  { label: 'Why Choose Us', hash: '#why-us' },
  { label: 'Gallery', hash: '#gallery' },
  { label: 'Reviews', hash: '#testimonials' },
  { label: 'Contact', hash: '#contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-charcoal-950 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 container-px py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Another Fence Repair logo" className="h-14 w-auto" />
            <span className="font-display text-lg font-bold text-white">Another Fence Repair</span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-white/75">
            Rochester&apos;s trusted fence repair &amp; installation crew — licensed, insured, and
            committed to keeping your property secure and looking sharp.
          </p>
          <div className="mt-5 flex gap-3">
            {['facebook', 'instagram', 'google'].map((s) => (
              <span
                key={s}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-charcoal-800 text-fence-400"
                aria-hidden="true"
              >
                <SocialIcon name={s} />
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">Our Services</h3>
          <ul className="mt-4 space-y-2.5 text-sm font-medium text-white/80">
            {services.map((s) => (
              <li key={s}>
                <a href="#services" className="transition hover:text-[#ffd84d]">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2.5 text-sm font-medium text-white/80">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <a href={l.hash} className="transition hover:text-[#ffd84d]">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">Contact Us</h3>
          <ul className="mt-4 space-y-3 text-sm font-medium text-white/80">
            <li className="flex gap-2.5">
              <PinIcon />
              <a href={business.mapLink} target="_blank" rel="noopener noreferrer" className="transition hover:text-[#ffd84d]">
                {business.address}
              </a>
            </li>
            <li className="flex gap-2.5">
              <PhoneIcon />
              <a href={business.phoneHref} className="transition hover:text-[#ffd84d]">
                {business.phone}
              </a>
            </li>
            <li className="flex gap-2.5">
              <MailIcon />
              <a href={`mailto:${business.email}`} className="break-all transition hover:text-[#ffd84d]">
                {business.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-charcoal-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 container-px py-6 text-xs font-medium text-white/65 sm:flex-row">
          <p>
            &copy; {year} {business.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="transition hover:text-[#ffd84d]">
              Privacy Policy
            </Link>
            <Link to="/terms-conditions" className="transition hover:text-[#ffd84d]">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function SocialIcon({ name }) {
  const paths = {
    facebook:
      'M13 22v-8h2.7l.4-3H13V9.1c0-.9.2-1.5 1.5-1.5H16V5c-.3 0-1.2-.1-2.2-.1-2.2 0-3.8 1.4-3.8 3.9V11H7.5v3H10v8h3z',
    instagram:
      'M12 8.5A3.5 3.5 0 1012 15.5 3.5 3.5 0 0012 8.5zM12 2c-2.7 0-3.1 0-4.1.1-1.1 0-1.8.2-2.4.5-.7.3-1.2.6-1.8 1.2C3.1 4.4 2.8 4.9 2.5 5.6c-.3.6-.5 1.3-.5 2.4C2 9 2 9.4 2 12s0 3 .1 4.1c0 1.1.2 1.8.5 2.4.3.7.6 1.2 1.2 1.8.6.6 1.1.9 1.8 1.2.6.3 1.3.5 2.4.5C9 22 9.4 22 12 22s3 0 4.1-.1c1.1 0 1.8-.2 2.4-.5.7-.3 1.2-.6 1.8-1.2.6-.6.9-1.1 1.2-1.8.3-.6.5-1.3.5-2.4.1-1.1.1-1.5.1-4.1s0-3-.1-4.1c0-1.1-.2-1.8-.5-2.4-.3-.7-.6-1.2-1.2-1.8-.6-.6-1.1-.9-1.8-1.2-.6-.3-1.3-.5-2.4-.5C15 2 14.6 2 12 2z',
    google:
      'M21.6 12.2c0-.7-.1-1.4-.2-2H12v3.9h5.4c-.2 1.3-1 2.4-2.1 3.1v2.6h3.4c2-1.8 3.1-4.5 3.1-7.6z M12 22c2.8 0 5.2-.9 6.9-2.5l-3.4-2.6c-.9.6-2.1 1-3.5 1-2.7 0-5-1.8-5.8-4.3H2.7v2.7C4.4 19.7 7.9 22 12 22z M6.2 13.6c-.2-.6-.3-1.2-.3-1.9s.1-1.3.3-1.9V7.1H2.7C2 8.5 1.6 10.2 1.6 12s.4 3.5 1.1 4.9l3.5-2.7z M12 5.4c1.5 0 2.9.5 3.9 1.5l3-3C17.2 2.2 14.8 1 12 1 7.9 1 4.4 3.3 2.7 6.7l3.5 2.7c.8-2.5 3.1-4 5.8-4z',
  }
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d={paths[name]} />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 h-4 w-4 flex-none text-fence-400">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-7-6.1-7-11a7 7 0 1114 0c0 4.9-7 11-7 11z" />
      <circle cx="12" cy="10" r="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 h-4 w-4 flex-none text-fence-400">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.49a1 1 0 011 1 11.36 11.36 0 00.57 3.56 1 1 0 01-.25 1.02z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 h-4 w-4 flex-none text-fence-400">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l9 6 9-6M4 5h16a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1z" />
    </svg>
  )
}
