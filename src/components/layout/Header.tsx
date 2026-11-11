import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import mark from '../../assets/logo/megatronix-mark.png'
import wordmark from '../../assets/logo/megatronix-wordmark.png'
import { navigation } from '../../data/navigation'
import { Icon } from '../../utils/icons'
import { MobileMenu } from './MobileMenu'

export function Header() {
  const [open, setOpen] = useState<string | null>(null)
  const [mobile, setMobile] = useState(false)
  const { pathname } = useLocation()
  const wrap = useRef<HTMLDivElement>(null)

  useEffect(() => { setOpen(null); setMobile(false) }, [pathname])
  useEffect(() => {
    const onDoc = (e: MouseEvent) => { if (wrap.current && !wrap.current.contains(e.target as Node)) setOpen(null) }
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(null) }
    document.addEventListener('mousedown', onDoc); document.addEventListener('keydown', onKey)
    return () => { document.removeEventListener('mousedown', onDoc); document.removeEventListener('keydown', onKey) }
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy/95 shadow-lg shadow-black/20 backdrop-blur">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:rounded focus:bg-brand focus:px-3 focus:py-2 focus:text-white">Skip to content</a>
      <div className="container-x flex h-[72px] items-center justify-between gap-4">
        <Link to="/" aria-label="Megatronix Innovation home" className="flex shrink-0 items-center gap-3">
          <img src={mark} alt="" width={749} height={513} className="h-10 w-auto sm:h-11" />
          <span className="flex flex-col items-start leading-none">
            <img src={wordmark} alt="Megatronix" width={937} height={143} className="h-[18px] w-auto sm:h-[22px]" />
            <span className="mt-1.5 pl-0.5 text-[10px] font-semibold uppercase tracking-[0.42em] text-sky-300 sm:text-[11px]">Innovation</span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex" ref={wrap}>
          {navigation.map(item => item.children ? (
            <div key={item.label} className="relative" onMouseEnter={() => setOpen(item.label)} onMouseLeave={() => setOpen(null)}>
              <div className="flex items-center">
                <NavLink to={item.to} end={false} className={({ isActive }) => `rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:text-sky-300 ${isActive ? 'text-sky-300' : 'text-white'}`}>{item.label}</NavLink>
                <button type="button" aria-label={`Toggle ${item.label} menu`} aria-expanded={open === item.label} onClick={() => setOpen(open === item.label ? null : item.label)} className="-ml-1 rounded p-1 text-white hover:text-sky-300">
                  <ChevronDown size={14} aria-hidden className={`transition-transform ${open === item.label ? 'rotate-180' : ''}`} />
                </button>
              </div>
              <AnimatePresence>
                {open === item.label && (
                  <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.15 }}
                    className={`absolute left-0 top-full pt-2 ${item.label === 'Services' ? 'w-[520px]' : 'w-64'}`}>
                    <div className={`rounded-2xl border border-gray-100 bg-white p-3 shadow-xl ${item.label === 'Services' ? 'grid grid-cols-2 gap-1' : ''}`}>
                      {item.children.map(c => (
                        <Link key={c.to} to={c.to} className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium hover:bg-brand-soft hover:text-brand">
                          {c.icon && <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-brand-soft text-brand"><Icon name={c.icon} size={16} /></span>}
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <NavLink key={item.to} to={item.to} end={item.to === '/'} className={({ isActive }) => `relative rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:text-sky-300 ${isActive ? 'text-sky-300 after:absolute after:inset-x-3 after:-bottom-0.5 after:h-0.5 after:rounded after:bg-sky-300' : 'text-white'}`}>{item.label}</NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link to="/contact" className="btn-primary hidden !py-2.5 sm:inline-flex">Get a Quote <ArrowRight size={16} aria-hidden /></Link>
          <button type="button" aria-label={mobile ? 'Close menu' : 'Open menu'} aria-expanded={mobile} onClick={() => setMobile(v => !v)} className="grid h-11 w-11 place-items-center rounded-lg text-white hover:bg-white/10 lg:hidden">
            {mobile ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
          </button>
        </div>
      </div>
      <MobileMenu open={mobile} onClose={() => setMobile(false)} />
    </header>
  )
}
