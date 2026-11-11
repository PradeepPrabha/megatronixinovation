import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { company } from '../../data/company'
import { SectionHeading } from '../common/SectionHeading'

export function ContactPreview() {
  const items = [
    { I: MapPin, t: 'Office', v: <>{company.address.map(l => <span key={l} className="block">{l}</span>)}</> },
    { I: Phone, t: 'Phone', v: <a href={company.phoneHref} className="hover:text-brand">{company.phone}</a> },
    { I: Mail, t: 'Email', v: <a href={`mailto:${company.email}`} className="break-all hover:text-brand">{company.email}</a> },
    { I: Clock, t: 'Working Hours', v: <>{company.hours.map(l => <span key={l} className="block">{l}</span>)}</> },
  ]
  return (
    <section className="section pt-0">
      <div className="container-x">
        <SectionHeading eyebrow="Get in Touch" title="Visit or Contact Us" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ I, t, v }) => (
            <div key={t} className="card p-5"><span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-brand"><I size={22} aria-hidden /></span><h3 className="mt-3 font-heading font-bold">{t}</h3><div className="mt-1 text-sm text-muted">{v}</div></div>
          ))}
        </div>
        <div className="mt-8 text-center"><Link to="/contact" className="btn-primary">Contact Us</Link></div>
      </div>
    </section>
  )
}
