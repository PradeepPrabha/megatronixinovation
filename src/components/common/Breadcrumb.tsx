import { Link } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'
export function Breadcrumb({ items }: { items: { label: string; to?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex flex-wrap items-center gap-1.5 text-muted">
        <li><Link to="/" className="inline-flex items-center gap-1 hover:text-brand"><Home size={14} aria-hidden /> Home</Link></li>
        {items.map((it, i) => (
          <li key={i} className="flex items-center gap-1.5">
            <ChevronRight size={14} aria-hidden />
            {it.to ? <Link to={it.to} className="hover:text-brand">{it.label}</Link> : <span className="font-medium text-ink" aria-current="page">{it.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  )
}
