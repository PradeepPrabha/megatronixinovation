import { forwardRef } from 'react'
import type { FieldError } from 'react-hook-form'

interface Shared { label: string; id: string; error?: FieldError; required?: boolean; hint?: string }
const wrap = (p: Shared, child: React.ReactNode) => (
  <div>
    <label htmlFor={p.id} className="mb-1.5 block text-sm font-medium">{p.label}{p.required && <span className="text-brand" aria-hidden> *</span>}</label>
    {child}
    {p.hint && !p.error && <p className="mt-1 text-xs text-muted">{p.hint}</p>}
    {p.error && <p id={`${p.id}-err`} role="alert" className="mt-1 text-xs font-medium text-red-600">{p.error.message}</p>}
  </div>
)
const aria = (p: Shared) => ({ 'aria-invalid': !!p.error, 'aria-describedby': p.error ? `${p.id}-err` : undefined, 'aria-required': p.required })

export const InputField = forwardRef<HTMLInputElement, Shared & React.InputHTMLAttributes<HTMLInputElement>>(({ label, error, required, hint, ...rest }, ref) =>
  wrap({ label, id: rest.id!, error, required, hint }, <input ref={ref} {...rest} {...aria({ label, id: rest.id!, error, required })} className={`input ${error ? 'border-red-400' : ''}`} />))
InputField.displayName = 'InputField'

export const SelectField = forwardRef<HTMLSelectElement, Shared & React.SelectHTMLAttributes<HTMLSelectElement> & { options: string[]; placeholder?: string }>(({ label, error, required, hint, options, placeholder = 'Select…', ...rest }, ref) =>
  wrap({ label, id: rest.id!, error, required, hint }, (
    <select ref={ref} {...rest} {...aria({ label, id: rest.id!, error, required })} className={`input ${error ? 'border-red-400' : ''}`}>
      <option value="">{placeholder}</option>
      {options.map(o => <option key={o} value={o}>{o}</option>)}
    </select>)))
SelectField.displayName = 'SelectField'

export const TextAreaField = forwardRef<HTMLTextAreaElement, Shared & React.TextareaHTMLAttributes<HTMLTextAreaElement> & { count?: number; limit?: number }>(({ label, error, required, hint, count, limit, ...rest }, ref) =>
  wrap({ label, id: rest.id!, error, required, hint: undefined }, (
    <>
      <textarea ref={ref} rows={5} {...rest} {...aria({ label, id: rest.id!, error, required })} className={`input resize-y ${error ? 'border-red-400' : ''}`} />
      {limit && <p className="mt-1 text-right text-xs text-muted">{count ?? 0}/{limit}</p>}
    </>)))
TextAreaField.displayName = 'TextAreaField'
