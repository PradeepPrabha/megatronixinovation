import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { navigation } from '../../data/navigation'

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [sub, setSub] = useState<string | null>(null)
  return (
    <AnimatePresence>
      {open && (
        <motion.nav aria-label="Mobile" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
          className="max-h-[calc(100vh-72px)] overflow-y-auto border-t border-gray-100 bg-white lg:hidden">
          <ul className="container-x space-y-1 py-4">
            {navigation.map(item => (
              <li key={item.label}>
                {item.children ? (
                  <>
                    <button type="button" aria-expanded={sub === item.label} onClick={() => setSub(sub === item.label ? null : item.label)} className="flex min-h-[48px] w-full items-center justify-between rounded-xl px-3 font-medium hover:bg-brand-soft">
                      {item.label}<ChevronDown size={18} aria-hidden className={`transition-transform ${sub === item.label ? 'rotate-180 text-brand' : ''}`} />
                    </button>
                    <AnimatePresence initial={false}>
                      {sub === item.label && (
                        <motion.ul initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden pl-3">
                          <li><Link to={item.to} onClick={onClose} className="flex min-h-[44px] items-center rounded-lg px-3 text-sm font-semibold text-brand">All {item.label}</Link></li>
                          {item.children.map(c => (
                            <li key={c.to}><Link to={c.to} onClick={onClose} className="flex min-h-[44px] items-center rounded-lg px-3 text-sm text-ink hover:bg-brand-soft">{c.label}</Link></li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <NavLink to={item.to} end={item.to === '/'} onClick={onClose} className={({ isActive }) => `flex min-h-[48px] items-center rounded-xl px-3 font-medium hover:bg-brand-soft ${isActive ? 'bg-brand-soft text-brand' : ''}`}>{item.label}</NavLink>
                )}
              </li>
            ))}
            <li className="pt-2"><Link to="/contact" onClick={onClose} className="btn-primary w-full">Get a Quote</Link></li>
          </ul>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}
