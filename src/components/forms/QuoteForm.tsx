import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'
import { quoteSchema, QuoteValues } from '../../utils/schemas'
import { services } from '../../data/services'
import { InputField, SelectField, TextAreaField } from './FormField'
import { FormSuccess, DemoBanner } from './FormSuccess'
import { useFakeSubmit } from '../../hooks/useFakeSubmit'

export function QuoteForm({ defaultService = '' }: { defaultService?: string }) {
  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm<QuoteValues>({ resolver: zodResolver(quoteSchema), defaultValues: { service: defaultService } })
  const { state, run, reset: r } = useFakeSubmit()
  const d = watch('details') ?? ''
  if (state === 'success') return <FormSuccess title="Demo quote request completed" message="This is a frontend demo – no quote request was sent to Megatronix." onReset={r} />
  return (
    <form onSubmit={handleSubmit(async () => { await run(); reset() })} noValidate className="space-y-4" aria-label="Quick quote form">
      <DemoBanner>Frontend demo – nothing is transmitted.</DemoBanner>
      <InputField id="q-name" label="Name" required error={errors.name} {...register('name')} />
      <InputField id="q-email" label="Email" type="email" required error={errors.email} {...register('email')} />
      <SelectField id="q-service" label="Service" required options={services.map(s => s.title)} error={errors.service} {...register('service')} />
      <TextAreaField id="q-details" label="Project details" required maxLength={500} limit={500} count={d.length} error={errors.details} {...register('details')} />
      <button type="submit" disabled={state === 'loading'} className="btn-primary w-full disabled:opacity-70">
        {state === 'loading' ? <><Loader2 size={16} className="animate-spin" aria-hidden /> Sending…</> : 'Request Quote'}
      </button>
    </form>
  )
}
