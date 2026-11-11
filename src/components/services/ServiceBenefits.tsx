import { Sparkles } from 'lucide-react'
import { SectionHeading } from '../common/SectionHeading'
import { Reveal } from '../common/Reveal'

export function ServiceBenefits({ benefits }: { benefits: string[] }) {
  return (
    <section className="section">
      <div className="container-x">
        <SectionHeading eyebrow="Benefits" title="Why It Matters for Your Business" />
        <div className="grid gap-5 sm:grid-cols-2">
          {benefits.map((b, i) => (
            <Reveal key={b} delay={i * 0.05}>
              <div className="flex gap-4 rounded-2xl bg-brand-soft p-5"><Sparkles className="mt-0.5 shrink-0 text-brand" size={22} aria-hidden /><p className="font-medium">{b}</p></div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
