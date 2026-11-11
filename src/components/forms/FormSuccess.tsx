import { CheckCircle2, AlertTriangle, Info } from 'lucide-react'

export function FormSuccess({ title = 'Form completed', message, onReset }: { title?: string; message: string; onReset?: () => void }) {
  return (
    <div role="status" className="rounded-2xl border border-green-200 bg-green-50 p-6 text-center">
      <CheckCircle2 className="mx-auto text-green-600" size={40} aria-hidden />
      <h3 className="mt-3 font-heading text-xl font-bold">{title}</h3>
      <p className="mx-auto mt-2 max-w-xl text-sm text-muted">{message}</p>
      {onReset && <button type="button" onClick={onReset} className="btn-outline mt-5">Fill another form</button>}
    </div>
  )
}
export function FormError({ message }: { message: string }) {
  return (
    <div role="alert" className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
      <AlertTriangle size={18} className="mt-0.5 shrink-0" aria-hidden /> {message}
    </div>
  )
}
export function DemoBanner({ children }: { children: React.ReactNode }) {
  return <div className="flex items-start gap-2 rounded-xl bg-brand-soft p-3 text-sm text-ink"><Info size={16} className="mt-0.5 shrink-0 text-brand" aria-hidden /><span>{children}</span></div>
}
