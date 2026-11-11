import { useSEO } from '../hooks/useSEO'
import { PageHero } from '../components/common/PageHero'
import { fullProcess } from '../data/process'
import { Icon } from '../utils/icons'
import { Reveal } from '../components/common/Reveal'
import { CTASection } from '../components/common/CTABanner'

export default function Process() {
  useSEO('Our Process', 'How Megatronix Innovation transforms ideas into solutions – from requirement analysis to ongoing support.')
  return (
    <>
      <PageHero title="How We Transform Ideas Into Solutions." subtitle="A clear, collaborative process from the first conversation to long-term support." crumbs={[{ label: 'Our Process' }]} />
      <section className="section"><div className="container-x max-w-4xl">
        <ol className="relative space-y-10 before:absolute before:bottom-0 before:left-6 before:top-0 before:w-0.5 before:bg-brand/30 md:before:left-1/2">
          {fullProcess.map((s, i) => (
            <li key={s.title} className="relative">
              <Reveal className={`flex items-start gap-5 md:w-1/2 ${i % 2 ? 'md:ml-auto md:pl-10' : 'md:flex-row-reverse md:pr-10 md:text-right'}`}>
                <span className={`relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brand font-heading font-bold text-white shadow-brand md:absolute md:top-0 ${i % 2 ? 'md:-left-6' : 'md:-right-6'}`}>{String(i + 1).padStart(2, '0')}</span>
                <div className="card flex-1 p-5"><span className="inline-grid h-10 w-10 place-items-center rounded-lg bg-brand-soft text-brand"><Icon name={s.icon} size={20} /></span><h2 className="mt-2 font-heading text-xl font-bold">{s.title}</h2><p className="mt-1 text-muted">{s.text}</p></div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div></section>
      <CTASection />
    </>
  )
}
