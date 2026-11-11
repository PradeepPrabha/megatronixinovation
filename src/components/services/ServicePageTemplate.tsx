import { Navigate } from 'react-router-dom'
import { getService } from '../../data/services'
import { useSEO } from '../../hooks/useSEO'
import { ServiceHero } from './ServiceHero'
import { ServiceFeatures } from './ServiceFeatures'
import { ServiceBenefits } from './ServiceBenefits'
import { ServiceProcess } from './ServiceProcess'
import { ServiceTechnologies } from './ServiceTechnologies'
import { RelatedServices } from './RelatedServices'
import { SectionHeading } from '../common/SectionHeading'
import { FAQ } from '../common/FAQ'
import { CTASection } from '../common/CTABanner'
import { Reveal } from '../common/Reveal'

export function ServicePageTemplate({ slug }: { slug: string }) {
  const s = getService(slug)
  useSEO(s?.title ?? 'Service', s?.short ?? '')
  if (!s) return <Navigate to="/services" replace />
  return (
    <>
      <ServiceHero service={s} />
      <section className="section">
        <div className="container-x max-w-4xl text-center"><Reveal>
          <span className="eyebrow">Overview</span>
          <h2 className="h-section mt-3">{s.title} at Megatronix</h2>
          <p className="mt-4 text-lg text-muted">{s.intro}</p>
        </Reveal></div>
      </section>
      <ServiceFeatures features={s.features} />
      <ServiceBenefits benefits={s.benefits} />
      <ServiceProcess />
      <ServiceTechnologies technologies={s.technologies} />
      <section className="section bg-greylight"><div className="container-x"><SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" /><FAQ items={s.faqs} /></div></section>
      <RelatedServices currentSlug={s.slug} />
      <CTASection title={`Ready to Start With ${s.title}?`} primary={{ label: 'Enquire Now', to: `/contact?service=${encodeURIComponent(s.enquiryValue)}` }} />
    </>
  )
}
