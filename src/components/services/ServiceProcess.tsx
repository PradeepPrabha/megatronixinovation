import { SectionHeading } from '../common/SectionHeading'
import { homeProcess } from '../../data/process'
export function ServiceProcess() {
  return (
    <section className="section bg-cyanlight">
      <div className="container-x">
        <SectionHeading eyebrow="Development Process" title="From Concept to Successful Delivery" />
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {homeProcess.map((s, i) => (
            <li key={s} className="card flex items-center gap-4 p-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand font-heading font-bold text-white">{String(i + 1).padStart(2, '0')}</span>
              <span className="font-medium">{s}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
