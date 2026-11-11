import { Settings2, BadgeCheck, Cpu, PenTool, MonitorSmartphone, Wrench, LifeBuoy, RefreshCw } from 'lucide-react'
import { SectionHeading } from '../common/SectionHeading'
import { Reveal } from '../common/Reveal'

const items = [
  { icon: Settings2, label: 'Customized Technology Solutions', desc: 'Tailored to your specific business needs.' },
  { icon: BadgeCheck, label: 'Quality-Focused Development', desc: 'Nothing ships until it meets our high standards.' },
  { icon: Cpu, label: 'Modern Technologies', desc: 'Built with the latest, scalable tech stack.' },
  { icon: PenTool, label: 'Professional Design Approach', desc: 'User-centric design that drives engagement.' },
  { icon: MonitorSmartphone, label: 'User-Friendly Applications', desc: 'Intuitive interfaces for a seamless experience.' },
  { icon: Wrench, label: 'Practical Technical Expertise', desc: 'Real-world solutions, not just theory.' },
  { icon: LifeBuoy, label: 'Reliable Support', desc: 'We are here for you long after launch.' },
  { icon: RefreshCw, label: 'Continuous Innovation', desc: 'Always evolving and improving our craft.' },
] as const

export function WhyChooseUs() {
  return (
    <section className="section bg-white relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-brand/5 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-brand/5 blur-3xl" aria-hidden />

      <div className="container-x relative z-10">
        <SectionHeading 
          eyebrow="Why Megatronix" 
          title="Why Choose Megatronix Innovation?" 
          subtitle="We don't just build software. We build partnerships rooted in quality, transparency, and measurable results."
          center
        />
        
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, label, desc }, i) => (
            <Reveal key={label} delay={(i % 4) * 0.08}>
              <div className="group relative flex h-full flex-col items-start rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-brand/30 hover:shadow-xl hover:shadow-brand/5">
                {/* Icon Wrapper with Hover Effect */}
                <span className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-brand-soft text-brand transition-all duration-300 group-hover:bg-brand group-hover:text-white group-hover:shadow-lg group-hover:shadow-brand/30">
                  <Icon size={26} aria-hidden />
                </span>
                
                {/* Text Content */}
                <h3 className="font-heading text-lg font-bold leading-tight text-foreground transition-colors group-hover:text-brand">
                  {label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}