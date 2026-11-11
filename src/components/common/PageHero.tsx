import { Link } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'
import { ReactNode } from 'react'

interface PageHeroProps {
  title: ReactNode
  subtitle?: string
  crumbs?: { label: string; to?: string }[]
  children?: ReactNode
  backgroundimg?: string
}

export function PageHero({ title, subtitle, crumbs, children, backgroundimg }: PageHeroProps) {
  return (
    <section 
      className="relative pt-24 pb-12 md:pt-28 md:pb-16 overflow-hidden border-b border-gray-100 bg-gray-900"
      style={
        backgroundimg
          ? { 
              backgroundImage: `url(${backgroundimg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : {}
      }
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      <div className="container-x relative z-10">
        {/* Breadcrumbs */}
        {crumbs && (
          <nav className="flex items-center gap-2 text-sm text-gray-200 mb-3 font-medium">
            <Link to="/" className="hover:text-blue-400 transition-colors flex items-center gap-1">
              <Home size={14} /> Home
            </Link>
            {crumbs.map((crumb, i) => (
              <div key={i} className="flex items-center gap-2">
                <ChevronRight size={14} />
                <span className="text-white">{crumb.label}</span>
              </div>
            ))}
          </nav>
        )}

        {/* Title & Subtitle */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-[#1D5FE0] tracking-tight max-w-4xl drop-shadow-md">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 text-base md:text-lg text-white font-medium max-w-2xl drop-shadow-sm">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  )
}