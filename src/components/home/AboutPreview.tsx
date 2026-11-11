import { Link } from 'react-router-dom'
import { Lightbulb, ShieldCheck, HeartHandshake } from 'lucide-react'
import { motion } from 'framer-motion'
import team from '../../assets/images/team-laptop.webp'
import { Reveal } from '../common/Reveal'

const labels = [
  [Lightbulb, 'Innovative Solutions'],
  [ShieldCheck, 'Quality-Focused Development'],
  [HeartHandshake, 'Customer-Centric Approach'],
] as const

const highlightWords = ['Partner', 'in', 'Technology', 'and', 'Innovation.']

export function AboutPreview() {
  return (
    <section className="section relative overflow-hidden">
      {/* Accent spot-light glows */}
      <div
        className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-300/40 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-sky-300/40 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-1/3 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-200/30 blur-3xl"
        aria-hidden
      />

      <div className="container-x relative grid items-center gap-10 lg:grid-cols-2">
        <Reveal>
          <div className="relative">
            <div
              className="absolute -bottom-3 -left-3 h-full w-full rounded-3xl bg-gradient-to-br from-blue-300/70 to-sky-300/50"
              aria-hidden
            />
            <img
              src={team}
              alt="Megatronix team collaborating around a laptop"
              loading="lazy"
              className="relative w-full rounded-3xl object-cover shadow-card"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <span className="eyebrow">About Megatronix</span>

          <h2 className="h-section mt-3">
            Your Trusted{' '}
            <span className="inline-block">
              {highlightWords.map((word, i) => (
                <motion.span
                  key={word + i}
                  className="inline-block bg-gradient-to-r from-blue-500 via-sky-500 to-blue-600 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
                  whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.15,
                    ease: 'easeOut',
                  }}
                >
                  {word}
                  {i < highlightWords.length - 1 ? '\u00A0' : ''}
                </motion.span>
              ))}
            </span>
          </h2>

          <p className="mt-4 text-muted">
            Megatronix Innovation delivers modern software and digital solutions designed
            to help businesses simplify operations, improve productivity and establish
            a stronger digital presence.
          </p>

          <ul className="mt-6 grid gap-3 sm:grid-cols-3">
            {labels.map(([I, l]) => (
              <li
                key={l}
                className="flex items-center gap-2 rounded-xl bg-white p-3 text-sm font-semibold shadow-sm"
              >
                <I size={18} className="shrink-0 text-brand" aria-hidden />
                {l}
              </li>
            ))}
          </ul>

          <Link to="/about" className="btn-primary mt-7">
            Learn More About Us
          </Link>
        </Reveal>
      </div>
    </section>
  )
} 