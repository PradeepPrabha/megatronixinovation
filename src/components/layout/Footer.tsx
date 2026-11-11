import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import logo from '../../assets/logo/megatronix-logo.png'
import { company } from '../../data/company'
import { services } from '../../data/services'


type P = { size?: number; 'aria-hidden'?: boolean }
const svg = (d: string) => ({ size = 16 }: P) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d={d} /></svg>)
const Facebook = svg('M13.5 21v-7.5H16l.5-3h-3V8.6c0-.9.3-1.5 1.6-1.5h1.5V4.4c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.4H8v3h2.5V21h3Z')
const Instagram = svg('M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9a4.5 4.5 0 0 1-4.5 4.5h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3Zm0 1.8A2.7 2.7 0 0 0 4.8 7.5v9a2.7 2.7 0 0 0 2.7 2.7h9a2.7 2.7 0 0 0 2.7-2.7v-9a2.7 2.7 0 0 0-2.7-2.7h-9ZM12 7.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 1.8a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Zm5-2.6a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z')
const Linkedin = svg('M5 3.5a1.8 1.8 0 1 1 0 3.6 1.8 1.8 0 0 1 0-3.6ZM3.5 9h3v11.5h-3V9Zm5 0h2.9v1.6c.5-.9 1.6-1.9 3.4-1.9 3.2 0 3.7 2.1 3.7 4.8v7h-3v-6.2c0-1.5 0-3.3-2-3.3s-2.3 1.600-2.300 3.200v6.300h-3V9Z')
const Youtube = svg('M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.200 5 12 5 12 5s-6.200 0-7.800.4A2.500 2.500 0 0 0 2.400 7.200C2 8.800 2 12 2 12s0 3.200.4 4.800a2.500 2.500 0 0 0 1.800 1.800C5.800 19 12 19 12 19s6.200 0 7.800-.4a2.500 2.500 0 0 0 1.800-1.800c.4-1.600.4-4.800.4-4.800s0-3.200-.4-4.800ZM10 15V9l5.200 3L10 15Z')
const socials = [Facebook, Instagram, Linkedin, Youtube]
const col = 'font-heading text-base font-semibold text-white mb-4'
const lnk = 'text-sm text-gray-300 hover:text-sky-300 transition-colors'

export function Footer() {
  return (
    <footer className="bg-navy-deep text-gray-300">
      <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <img src={logo} alt="Megatronix Innovation – Innovate, Intelligent, Impact" loading="lazy" width={948} height={708} className="h-28 w-auto" />
          <p className="mt-4 text-sm text-gray-400">Web solutions, app development and intelligent digital services.
</p>
          <div className="mt-5 flex gap-2">
            {socials.map((S, i) => (
              <a key={i} href={company.social[i].href} aria-label={company.social[i].label} className="grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-brand"><S size={16} aria-hidden /></a>
            ))}
          </div>
        </div>
        <div><h2 className={col}>Company</h2><ul className="space-y-2">
          {[['About Us', '/about'], ['Our Process', '/process'], ['Projects', '/projects'], ['Contact', '/contact']].map(([l, t]) => <li key={t}><Link className={lnk} to={t}>{l}</Link></li>)}
        </ul></div>
        <div><h2 className={col}>Services</h2><ul className="space-y-2">
          {services.map(s => <li key={s.slug}><Link className={lnk} to={`/services/${s.slug}`}>{s.title}</Link></li>)}
        </ul></div>
        <div><h2 className={col}>Contact</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2"><MapPin size={16} className="mt-0.5 shrink-0 text-sky-400" aria-hidden /><span>{company.address.join(' ')}</span></li>
            <li className="flex gap-2"><Phone size={16} className="mt-0.5 shrink-0 text-sky-400" aria-hidden /><a className={lnk} href={company.phoneHref}>{company.phone}</a></li>
            <li className="flex gap-2"><Mail size={16} className="mt-0.5 shrink-0 text-sky-400" aria-hidden /><a className={`${lnk} break-all`} href={`mailto:${company.email}`}>{company.email}</a></li>
            <li className="flex gap-2"><Clock size={16} className="mt-0.5 shrink-0 text-sky-400" aria-hidden /><span>{company.hours.join(', ')}</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-brand/40">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-5 text-sm text-gray-400 sm:flex-row">
          <p>© 2026 Megatronix Innovation. All Rights Reserved.</p>
          <div className="flex gap-5"><Link to="/privacy-policy" className="hover:text-sky-300">Privacy Policy</Link><Link to="/terms-and-conditions" className="hover:text-sky-300">Terms and Conditions</Link></div>
        </div>
      </div>
    </footer>
  )
}
