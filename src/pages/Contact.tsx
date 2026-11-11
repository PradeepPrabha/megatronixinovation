import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { useSEO } from '../hooks/useSEO'
import { PageHero } from '../components/common/PageHero'
import { ContactForm } from '../components/forms/ContactForm'
import { company } from '../data/company'

export default function Contact() {
  useSEO(
    'Contact Us',
    'Contact Megatronix Innovation for web, app, software, marketing and branding enquiries.'
  )

  const rows = [
    {
      I: MapPin,
      t: 'Address',
      v: (
        <address className="not-italic">
          {company.address.map((l) => (
            <span key={l} className="block">
              {l}
            </span>
          ))}
        </address>
      ),
    },
    {
      I: Phone,
      t: 'Phone',
      v: (
        <a className="hover:text-brand" href={company.phoneHref}>
          {company.phone}
        </a>
      ),
    },
    {
      I: Clock,
      t: 'Working Hours',
      v: (
        <>
          {company.hours.map((l) => (
            <span key={l} className="block">
              {l}
            </span>
          ))}
        </>
      ),
    },
    {
      I: Mail,
      t: 'Email',
      v: (
        <a className="break-all hover:text-brand" href={`mailto:${company.email}`}>
          {company.email}
        </a>
      ),
    },
  ]

  return (
    <>
      <PageHero
        title={
          <>
            Let's Talk About <span className="text-white">Your Next Project.</span>
          </>
        }
        subtitle="Send us your query anytime!"
        crumbs={[{ label: 'Contact Us' }]}
        backgroundimg="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-4">
            {rows.map(({ I, t, v }) => (
              <div key={t} className="card flex gap-4 p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand">
                  <I size={20} aria-hidden />
                </span>
                <div>
                  <h2 className="font-heading font-bold">{t}</h2>
                  <div className="text-sm text-muted">{v}</div>
                </div>
              </div>
            ))}

            {company.mapEmbedUrl ? (
              <iframe
                title="Megatronix office location"
                src={company.mapEmbedUrl}
                loading="lazy"
                className="h-64 w-full rounded-2xl border-0"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <p className="rounded-xl bg-cyanlight p-4 text-sm text-muted ring-1 ring-cyan-100">
                Map not shown: add a verified Google Maps embed URL in <code>src/data/company.ts</code>{' '}
                after confirming the office location.
              </p>
            )}
          </div>

          <div className="card p-6 sm:p-8">
            <h2 className="mb-5 font-heading text-2xl font-bold">Send Us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}