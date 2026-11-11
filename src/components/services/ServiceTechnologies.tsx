import { SectionHeading } from '../common/SectionHeading'
export function ServiceTechnologies({ technologies }: { technologies: string[] }) {
  return (
    <section className="section">
      <div className="container-x">
        <SectionHeading eyebrow="Technologies" title="Tools and Technologies We Work With" />
        <ul className="flex flex-wrap justify-center gap-3">
          {technologies.map(t => <li key={t} className="rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold shadow-sm">{t}</li>)}
        </ul>
      </div>
    </section>
  )
}
