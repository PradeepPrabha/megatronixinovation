import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Service } from '../../types'
import { Breadcrumb } from '../common/Breadcrumb'
import { Icon } from '../../utils/icons'

export function ServiceHero({ service }: { service: Service }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-soft via-white to-cyanlight">
      <div className="container-x relative grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <Breadcrumb items={[{ label: 'Services', to: '/services' }, { label: service.title }]} />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="eyebrow mt-6">{service.title}</span>
            <h1 className="mt-4 font-heading text-3xl font-extrabold leading-tight sm:text-5xl">{service.heroHeading}</h1>
            <p className="mt-4 max-w-xl text-lg text-muted">{service.short}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to={`/contact?service=${encodeURIComponent(service.enquiryValue)}`} className="btn-primary">Enquire Now</Link>
              <Link to="/process" className="btn-outline">Our Process</Link>
            </div>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="relative mx-auto grid h-64 w-64 place-items-center sm:h-80 sm:w-80" aria-hidden>
          <div className="absolute inset-0 rounded-[40%_60%_55%_45%/50%_45%_55%_50%] bg-brand/10" />
          <div className="absolute inset-6 rounded-[55%_45%_40%_60%/45%_55%_45%_55%] bg-white shadow-card" />
          <Icon name={service.icon} size={96} className="relative text-brand" strokeWidth={1.4} />
        </motion.div>
      </div>
    </section>
  )
}
