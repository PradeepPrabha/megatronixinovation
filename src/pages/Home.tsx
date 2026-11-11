import { useSEO } from '../hooks/useSEO'
import { HeroSection } from '../components/home/HeroSection'
import { AboutPreview } from '../components/home/AboutPreview'
import { ServicesGrid } from '../components/home/ServicesGrid'
// import { WhyChooseUs } from '../components/home/WhyChooseUs'
import { TechnologiesGrid } from '../components/home/TechnologiesGrid'
import { ProcessTimeline } from '../components/home/ProcessTimeline'
import { ProjectGallery } from '../components/projects/ProjectGallery'
import { TestimonialsCarousel } from '../components/home/TestimonialsCarousel'
import { CTASection } from '../components/common/CTABanner'
import { ContactPreview } from '../components/home/ContactPreview'
import { SectionHeading } from '../components/common/SectionHeading'
import { DemoNotice } from '../components/common/DemoNotice'

export default function Home() {
  useSEO('Home', 'Megatronix Innovation delivers web solutions, app development and intelligent digital services for every kind of business.')
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <ServicesGrid />
      {/* <WhyChooseUs /> */}
      
      <section className="section">
        <div className="container-x">
          <SectionHeading eyebrow="Portfolio" title="Our Creative Work and Projects." />
          <div className="mb-8"><DemoNotice>The projects shown are sample demonstration projects until actual Megatronix projects are added.</DemoNotice></div>
          <ProjectGallery limit={6} />
        </div>
      </section>
      <TechnologiesGrid />
      {/* <ProcessTimeline /> */}
      
      <TestimonialsCarousel />
      <CTASection />
      <ContactPreview />
    </>
  )
}
