import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2, Send } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'
import { contactSchema, ContactValues, enquiryTypes } from '../../utils/schemas'
import { services } from '../../data/services'
import { InputField, SelectField, TextAreaField } from './FormField'
import { FormSuccess, FormError, DemoBanner } from './FormSuccess'
import { useFakeSubmit } from '../../hooks/useFakeSubmit'

export function ContactForm() {
  const [params] = useSearchParams()
  const { register, handleSubmit, watch, setValue, reset, formState: { errors } } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema), defaultValues: { enquiryType: '', service: '', message: '' },
  })
  const { state, run, reset: resetState } = useFakeSubmit()
  const msg = watch('message') ?? ''

  // Service enquiry buttons link here as /contact?service=<enquiryValue>
  useEffect(() => {
    const s = params.get('service')
    if (s && enquiryTypes.includes(s)) {
      setValue('enquiryType', s)
      const match = services.find(x => x.enquiryValue === s)
      if (match) setValue('service', match.title)
    }
  }, [params, setValue])

  const onSubmit = async () => { await run(); reset() }

  if (state === 'success') return <FormSuccess title="Demo enquiry completed" message="Your enquiry form has been completed successfully. This is a frontend demo – no enquiry was actually sent to Megatronix. Please call or email us directly using the details shown on this page." onReset={resetState} />

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5" aria-label="Contact form">
      <DemoBanner>Frontend demo: submitting this form does not send your enquiry to Megatronix.</DemoBanner>
      <div className="grid gap-5 sm:grid-cols-2">
        <InputField id="c-name" label="Full Name" required autoComplete="name" error={errors.name} {...register('name')} />
        <InputField id="c-email" label="Email" type="email" required autoComplete="email" error={errors.email} {...register('email')} />
        <InputField id="c-phone" label="Phone" type="tel" required autoComplete="tel" error={errors.phone} {...register('phone')} />
        <InputField id="c-company" label="Company Name (optional)" autoComplete="organization" error={errors.company} {...register('company')} />
        <SelectField id="c-type" label="Enquiry Type" required options={enquiryTypes} error={errors.enquiryType} {...register('enquiryType')} />
        <SelectField id="c-service" label="Service" options={services.map(s => s.title)} placeholder="Select a service (optional)" error={errors.service} {...register('service')} />
      </div>
      <TextAreaField id="c-msg" label="Message" required maxLength={1000} limit={1000} count={msg.length} error={errors.message} {...register('message')} />
      {state === 'error' && <FormError message="Something went wrong in the demo. Please try again." />}
      <button type="submit" disabled={state === 'loading'} className="btn-primary w-full sm:w-auto disabled:opacity-70">
        {state === 'loading' ? <><Loader2 size={16} className="animate-spin" aria-hidden /> Sending…</> : <><Send size={16} aria-hidden /> Send Message</>}
      </button>
    </form>
  )
}
