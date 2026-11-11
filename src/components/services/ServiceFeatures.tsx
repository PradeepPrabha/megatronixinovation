import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { SectionHeading } from '../common/SectionHeading'
import { stagger, fadeUp, viewOnce } from '../../utils/motion'

export function ServiceFeatures({ features }: { features: string[] }) {
  return (
    <section className="section bg-greylight">
      <div className="container-x">
        <SectionHeading eyebrow="Key Features" title="What You Can Expect" />
        <motion.ul variants={stagger} initial="hidden" whileInView="show" viewport={viewOnce} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(f => (
            <motion.li key={f} variants={fadeUp} className="card flex items-center gap-3 p-4">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand text-white"><Check size={16} aria-hidden /></span>
              <span className="font-medium">{f}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
