import { homeProcess } from '../../data/process'
import { SectionHeading } from '../common/SectionHeading'
import { Reveal } from '../common/Reveal'

export function ProcessTimeline() {
  return (
    <section className="section bg-cyanlight">
      <div className="container-x">
        <SectionHeading eyebrow="Our Development Process" title="From Concept to Successful Delivery." />
        <ol className="relative grid gap-8 lg:grid-cols-6 lg:gap-3">
          <div className="absolute left-6 top-6 hidden h-0.5 w-[calc(100%-3rem)] bg-brand/30 lg:block" aria-hidden />
          <div className="absolute bottom-6 left-6 top-6 w-0.5 bg-brand/30 lg:hidden" aria-hidden />
          {homeProcess.map((s, i) => (
            <li key={s}><Reveal delay={i * 0.07} className="relative flex items-start gap-4 lg:block lg:text-center">
              <span className="relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brand font-heading font-bold text-white shadow-brand lg:mx-auto">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="pt-3 font-heading text-base font-semibold lg:mt-4 lg:pt-0">{s}</h3>
            </Reveal></li>
          ))}
        </ol>
      </div>
    </section>
  )
}
