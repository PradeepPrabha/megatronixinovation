import { z } from 'zod'

const phone = z.string().trim().min(1, 'Phone number is required').regex(/^[+]?[0-9\s-]{8,15}$/, 'Enter a valid phone number')

export const enquiryTypes = ['General Enquiry', 'ERP Development', 'Mobile App Development', 'Desktop Application', 'Digital Marketing', 'Web Design', 'Web Development', 'E-commerce', 'Branding']

export const contactSchema = z.object({
  name: z.string().trim().min(2, 'Full name is required'),
  email: z.string().trim().min(1, 'Email is required').email('Enter a valid email address'),
  phone,
  company: z.string().trim().max(80).optional(),
  enquiryType: z.string().min(1, 'Select an enquiry type'),
  service: z.string().optional(),
  message: z.string().trim().min(10, 'Please enter at least 10 characters').max(1000, 'Maximum 1000 characters'),
})
export type ContactValues = z.infer<typeof contactSchema>

export const quoteSchema = z.object({
  name: z.string().trim().min(2, 'Name is required'),
  email: z.string().trim().min(1, 'Email is required').email('Enter a valid email address'),
  service: z.string().min(1, 'Select a service'),
  details: z.string().trim().min(10, 'Please add a few details').max(500, 'Maximum 500 characters'),
})
export type QuoteValues = z.infer<typeof quoteSchema>
