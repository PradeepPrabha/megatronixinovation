import { Link } from 'react-router-dom'
import { Phone } from 'lucide-react'
import { Reveal } from './Reveal'
export function CTASection({ title = "Let's Turn Your Ideas Into Reality.", text = "Looking for a technology partner for your next project? Let's discuss your ideas and create something meaningful together.", primary = { label: 'Start Your Project', to: '/contact' }, secondary = { label: 'Contact Us', to: '/contact' } }: {
  title?: string; text?: string; primary?: { label: string; to: string }; secondary?: { label: string; to: string } }) {
  return (
    <section className="section">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand to-[#0B3187] px-6 py-12 text-center text-white sm:px-12 sm:py-16">
            <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/10" aria-hidden />
            <div className="absolute -bottom-12 -right-8 h-52 w-52 rounded-full bg-white/10" aria-hidden />
            <h2 className="relative mx-auto max-w-2xl font-heading text-3xl font-bold text-white sm:text-4xl">{title}</h2>
            <p className="relative mx-auto mt-4 max-w-2xl text-white/90">{text}</p>
            <div className="relative mt-8 flex flex-wrap justify-center gap-3">
              <Link to={primary.to} className="btn-white">{primary.label}</Link>
              <Link to={secondary.to} className="btn border-2 border-white text-white hover:bg-white hover:text-brand"><Phone size={16} aria-hidden />{secondary.label}</Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
