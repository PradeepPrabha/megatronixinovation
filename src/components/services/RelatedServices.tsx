import { motion } from 'framer-motion'
import { services } from '../../data/services'
import { ServiceCard } from './ServiceCard'
import { SectionHeading } from '../common/SectionHeading'
import { stagger, viewOnce } from '../../utils/motion'

export function RelatedServices({ currentSlug }: { currentSlug: string }) {
  const idx = services.findIndex(s => s.slug === currentSlug)
  const related = [1, 2, 3].map(n => services[(idx + n) % services.length])
  return (
    <section className="section bg-greylight">
      <div className="container-x">
        <SectionHeading eyebrow="Related Services" title="You May Also Need" />
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewOnce} className="grid gap-5 md:grid-cols-3">
          {related.map(s => <ServiceCard key={s.slug} service={s} />)}
        </motion.div>
      </div>
    </section>
  )
}
