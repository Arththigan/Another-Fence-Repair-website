import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'

const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy.jsx'))
const TermsConditions = lazy(() => import('./pages/TermsConditions.jsx'))

export default function App() {
  const pathname = window.location.pathname.replace(/\/$/, '') || '/'
  const Page = pathname === '/privacy-policy'
    ? PrivacyPolicy
    : pathname === '/terms-conditions'
      ? TermsConditions
      : Home

  return (
    <div className="flex min-h-screen flex-col bg-fence-50">
      <Navbar />
      <main className="flex-1">
        <Suspense fallback={<div className="min-h-screen bg-white" />}>
          <Page />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
