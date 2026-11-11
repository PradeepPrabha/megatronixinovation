import { Routes, Route, useLocation } from 'react-router-dom'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { ScrollManager, BackToTop } from './components/layout/ScrollToTop'
import { FloatingContactButton } from './components/layout/FloatingContactButton'
import { PageTransition } from './components/layout/PageTransition'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import ProjectDetails from './pages/ProjectDetails'
import Process from './pages/Process'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Terms from './pages/Terms'
import NotFound from './pages/NotFound'
import ERPDevelopment from './pages/services/ERPDevelopment'
import MobileAppDevelopment from './pages/services/MobileAppDevelopment'
import DesktopAppDevelopment from './pages/services/DesktopAppDevelopment'
import DigitalMarketing from './pages/services/DigitalMarketing'
import WebDesign from './pages/services/WebDesign'
import WebDevelopment from './pages/services/WebDevelopment'
import EcommerceDevelopment from './pages/services/EcommerceDevelopment'
import BrandingSolutions from './pages/services/BrandingSolutions'

export default function App() {
  const location = useLocation()
  return (
    <>
      <ScrollManager />
      <Header />
      <PageTransition key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/erp-development" element={<ERPDevelopment />} />
          <Route path="/services/mobile-app-development" element={<MobileAppDevelopment />} />
          <Route path="/services/desktop-application-development" element={<DesktopAppDevelopment />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/services/web-design" element={<WebDesign />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/ecommerce-development" element={<EcommerceDevelopment />} />
          <Route path="/services/branding-solutions" element={<BrandingSolutions />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetails />} />
          <Route path="/process" element={<Process />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </PageTransition>
      <Footer />
      <BackToTop />
      <FloatingContactButton />
    </>
  )
}
