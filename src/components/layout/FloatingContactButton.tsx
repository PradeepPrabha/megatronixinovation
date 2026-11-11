import { MessageCircle } from 'lucide-react'
import { company } from '../../data/company'
// Only rendered when a verified WhatsApp number is configured in data/company.ts
export function FloatingContactButton() {
  if (!company.whatsappNumber) return null
  return (
    <a href={`https://wa.me/${company.whatsappNumber}`} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid h-12 w-12 place-items-center rounded-full bg-[#25D366] text-white shadow-lg hover:scale-105 transition-transform">
      <MessageCircle size={22} aria-hidden />
    </a>
  )
}
