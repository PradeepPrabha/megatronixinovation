import { useState, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { technologies } from '../../data/process'
import { SectionHeading } from '../common/SectionHeading'
import { Reveal } from '../common/Reveal'

// Map technology names → real logo image URL + brand color
const TECH_LOGO_MAP: Record<string, { src: string; color: string }> = {
  React:          { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61DAFB' },
  'React Native': { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61DAFB' },
  Node:           { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: '#5FA04E' },
  'Node.js':      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: '#5FA04E' },
  Python:         { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: '#3776AB' },
  TypeScript:     { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', color: '#3178C6' },
  'Next.js':      { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', color: '#000000' },
  Angular:        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', color: '#DD0031' },
  Vue:            { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', color: '#4FC08D' },
  AWS:            { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', color: '#FF9900' },
  Docker:         { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', color: '#2496ED' },
  MongoDB:        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', color: '#47A248' },
  PostgreSQL:     { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', color: '#4169E1' },
  Flutter:        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg', color: '#02569B' },
  GraphQL:        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg', color: '#E10098' },
  Kubernetes:     { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', color: '#326CE5' },
  Firebase:       { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', color: '#FFCA28' },
  Figma:          { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', color: '#F24E1E' },
  Redis:          { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', color: '#DC382D' },
  Laravel:        { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg', color: '#FF2D20' },
  JavaScript:     { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', color: '#F7DF1E' },
  'Tailwind CSS': { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', color: '#06B6D4' },
  Django:         { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg', color: '#092E20' },
  Spring:         { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg', color: '#6DB33F' },
  Go:             { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg', color: '#00ADD8' },
}

const DEFAULT_LOGO = {
  src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  color: '#1D5FE0',
}

export function TechnologiesGrid() {
  return (
    <section className="section relative overflow-hidden bg-gradient-to-b from-white via-gray-50/60 to-white">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/4 h-[450px] w-[450px] rounded-full bg-brand/15 blur-[130px]" />
        <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-cyan-400/15 blur-[130px]" />
        <div className="absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-400/8 blur-[100px]" />
        {/* Light grid */}
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
          }}
        />
      </div>

      <div className="container-x relative z-10">
        <SectionHeading
          eyebrow="Technology Expertise"
          title="Technologies That Power Digital Innovation."
        />

        <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6 lg:gap-5">
          {technologies.map((t, i) => {
            const { src, color } = TECH_LOGO_MAP[t] ?? DEFAULT_LOGO
            return (
              <li key={t}>
                <Reveal delay={(i % 6) * 0.05}>
                  <TechCard name={t} src={src} color={color} />
                </Reveal>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

function TechCard({
  name,
  src,
  color,
}: {
  name: string
  src: string
  color: string
}) {
  const [imgError, setImgError] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  // 3D tilt values
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), {
    stiffness: 250,
    damping: 25,
  })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
    stiffness: 250,
    damping: 25,
  })

  // Spotlight position
  const spotlightX = useMotionValue(0)
  const spotlightY = useMotionValue(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    mouseX.set(x / rect.width - 0.5)
    mouseY.set(y / rect.height - 0.5)
    spotlightX.set(x)
    spotlightY.set(y)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      className="group relative flex h-32 cursor-pointer flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-sm transition-shadow duration-500 hover:shadow-2xl"
    >
      {/* Animated gradient border glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `linear-gradient(135deg, ${color}60, transparent 40%, transparent 60%, ${color}60)`,
          filter: 'blur(1px)',
        }}
      />
      <div className="pointer-events-none absolute inset-0 rounded-2xl border border-transparent transition-colors duration-500 group-hover:border-white/60" />

      {/* Inner white surface (sits on top of gradient border) */}
      <div className="absolute inset-[1px] rounded-[15px] bg-white" />

      {/* Spotlight (follows cursor) */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: useTransform(
            [spotlightX, spotlightY],
            ([x, y]) =>
              `radial-gradient(180px circle at ${x}px ${y}px, ${color}25, transparent 70%)`
          ),
        }}
      />

      {/* Soft brand tint */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: `linear-gradient(135deg, ${color}06, ${color}14)` }}
      />

      {/* Content wrapper (above overlays) */}
      <div className="relative z-20 flex flex-col items-center gap-3">
        {/* Floating logo with glow ring */}
        <div className="relative" style={{ transform: 'translateZ(30px)' }}>
          {/* Animated rotating conic glow */}
          <div
            className="absolute -inset-3 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background: `conic-gradient(from 0deg, transparent 0%, ${color}50 25%, transparent 50%, ${color}50 75%, transparent 100%)`,
              filter: 'blur(10px)',
              animation: 'spin 4s linear infinite',
            }}
          />

          {/* Icon plate */}
          <motion.span
            className="relative grid h-14 w-14 place-items-center rounded-2xl bg-white shadow-[0_4px_14px_rgba(0,0,0,0.06)] ring-1 ring-gray-100 transition-all duration-500 group-hover:ring-2"
            style={{ ['--tw-ring-color' as string]: `${color}40` }}
            whileHover={{ rotate: [0, -6, 6, 0] }}
            transition={{ duration: 0.5 }}
          >
            {imgError ? (
              <span
                className="font-heading text-base font-black"
                style={{ color }}
              >
                {name.slice(0, 2).toUpperCase()}
              </span>
            ) : (
              <img
                src={src}
                alt=""
                loading="lazy"
                decoding="async"
                draggable={false}
                onError={() => setImgError(true)}
                className="h-8 w-8 object-contain transition-transform duration-500 group-hover:scale-110"
              />
            )}
          </motion.span>
        </div>

        {/* Name */}
        <span
          className="text-center text-[13px] font-bold leading-tight text-gray-700 transition-colors duration-300 group-hover:text-gray-900 sm:text-sm"
          style={{ transform: 'translateZ(20px)' }}
        >
          {name}
        </span>
      </div>

      {/* Top shine line */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-30 h-px opacity-60 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `linear-gradient(90deg, transparent, ${color}80, transparent)`,
        }}
      />

      {/* Corner accent dot */}
      <span
        className="pointer-events-none absolute right-2 top-2 z-30 h-1.5 w-1.5 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          backgroundColor: color,
          boxShadow: `0 0 8px ${color}`,
        }}
      />

      {/* Bottom accent bar */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-[2px] origin-left scale-x-0 rounded-full transition-transform duration-500 group-hover:scale-x-100"
        style={{
          background: `linear-gradient(90deg, ${color}, ${color}00)`,
        }}
      />
    </motion.div>
  )
}