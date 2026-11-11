import { Info } from 'lucide-react'
export function DemoNotice({ children }: { children: React.ReactNode }) {
  return (
    <p className="mx-auto flex max-w-3xl items-start gap-2 rounded-xl bg-cyanlight px-4 py-3 text-sm text-muted ring-1 ring-cyan-100">
      <Info size={16} className="mt-0.5 shrink-0 text-brand" aria-hidden /> <span>{children}</span>
    </p>
  )
}
