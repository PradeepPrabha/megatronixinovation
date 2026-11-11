import { Reveal } from './Reveal'
export function SectionHeading({ eyebrow, title, subtitle, center = true }: { eyebrow?: string; title: React.ReactNode; subtitle?: string; center?: boolean }) {
  return (
    <Reveal className={`mb-10 sm:mb-12 ${center ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'}`}>
      {eyebrow && <span className="eyebrow mb-3">{eyebrow}</span>}
      <h2 className="h-section">{title}</h2>
      {subtitle && <p className="mt-3 text-muted text-base sm:text-lg">{subtitle}</p>}
    </Reveal>
  )
}
