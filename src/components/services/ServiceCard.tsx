import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import { Service } from '../../types'
import { Icon } from '../../utils/icons'
import { fadeUp } from '../../utils/motion'

export function ServiceCard({ service, detailed = false }: { service: Service; detailed?: boolean }) {
  return (
    <motion.article variants={fadeUp} whileHover={{ y: -6 }} className="card group flex h-full flex-col p-6 transition-shadow hover:shadow-xl">
      <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-white"><Icon name={service.icon} size={24} /></span>
      <h3 className="mt-4 font-heading text-lg font-bold">{service.title}</h3>
      <p className="mt-2 text-sm text-muted">{service.short}</p>
      {detailed && (
        <ul className="mt-4 space-y-1.5 text-sm">
          {service.cardFeatures.slice(0, 4).map(f => <li key={f} className="flex items-center gap-2"><Check size={14} className="text-brand" aria-hidden />{f}</li>)}
        </ul>
      )}
      <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-5">
        <Link to={`/services/${service.slug}`} className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:gap-2.5 transition-all">Learn More <ArrowRight size={15} aria-hidden /></Link>
        {detailed && <Link to={`/contact?service=${encodeURIComponent(service.enquiryValue)}`} className="text-sm font-semibold text-ink underline decoration-brand underline-offset-4 hover:text-brand">Enquire Now</Link>}
      </div>
    </motion.article>
  )
}
