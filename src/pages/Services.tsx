import { motion } from 'framer-motion'
import { useSEO } from '../hooks/useSEO'
import { PageHero } from '../components/common/PageHero'
import { services } from '../data/services'
import { ServiceCard } from '../components/services/ServiceCard'
import { CTASection } from '../components/common/CTABanner'
import { stagger, viewOnce } from '../utils/motion'

export default function Services() {
  useSEO(
    'Services',
    'ERP, mobile, desktop, web, e-commerce, digital marketing and branding services from Megatronix Innovation.'
  )

  return (
    <>
      <PageHero
        title={
          <>
            Complete Technology Solutions for <span className="text-white">Modern Businesses.</span>
          </>
        }
        subtitle="From custom software to digital marketing, discover solutions that help your business grow."
        crumbs={[{ label: 'Services' }]}
        backgroundimg="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="section">
        <div className="container-x">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewOnce}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} detailed />
            ))}
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  )
}