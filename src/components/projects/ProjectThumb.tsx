import { Icon } from '../../utils/icons'

// Map project slugs to high-quality cover images
const PROJECT_IMAGES: Record<string, string> = {
  'business-management-erp': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  'service-booking-app': 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
  'online-shopping-platform': 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&q=80',
  'corporate-website': 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
  'billing-dashboard-ui': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  'retail-brand-identity': 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=800&q=80',
  'inventory-desktop-app': 'https://images.unsplash.com/photo-1586528116311-ad8ed5c83163?w=800&q=80',
  'food-delivery-app-ui': 'https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800&q=80',
}

// Fallback image if the slug isn't mapped
const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80'

export function ProjectThumb({ 
  icon, 
  index = 0, 
  large = false,
  slug = '',
  title = '',
  category = ''
}: { 
  icon: string; 
  index?: number; 
  large?: boolean;
  slug?: string;
  title?: string;
  category?: string;
}) {
  const imageSrc = PROJECT_IMAGES[slug] || DEFAULT_IMAGE
  const chapterNum = String(index + 1).padStart(2, '0')
  const totalNum = '08' // You can pass this dynamically if you have a total count

  return (
    <div 
      className={`group relative overflow-hidden ${large ? 'h-[300px] sm:h-[450px]' : 'h-56 sm:h-64'} w-full`}
      role="img" 
      aria-label={`Cover for ${title}`}
    >
      {/* Cover Image with subtle zoom on hover */}
      <img 
        src={imageSrc} 
        alt={title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Dark gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80 pointer-events-none" />

      {/* Top Row: Chapter Number & Category */}
      <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4 sm:p-5">
        <span className="text-[10px] font-bold tracking-widest text-white/80 uppercase">
          {chapterNum} / {totalNum}
        </span>
        <span className="text-[10px] font-bold tracking-widest text-white/80 uppercase">
          {category}
        </span>
      </div>

      {/* Bottom Content: Title & Subtitle */}
      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 flex flex-col justify-end">
        <span className="text-[10px] font-bold tracking-widest text-white/60 uppercase mb-1">
          Chapter {chapterNum}
        </span>
        <h3 className="font-heading text-xl sm:text-2xl font-bold text-white leading-tight">
          {title || 'Untitled Project'}
        </h3>
        <p className="text-xs text-white/70 mt-1 line-clamp-1">
          {icon} {/* Using the icon name as a pseudo-subtitle for now */}
        </p>
      </div>
    </div>
  )
}