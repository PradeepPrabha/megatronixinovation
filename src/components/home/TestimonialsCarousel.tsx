import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { Star } from 'lucide-react'
import { testimonials } from '../../data/testimonials'
import { SectionHeading } from '../common/SectionHeading'

// Hidden until genuine, verified reviews are added to data/testimonials.ts
export function TestimonialsCarousel() {
  if (testimonials.length === 0) return null
  return (
    <section className="section">
      <div className="container-x">
        <SectionHeading eyebrow="Testimonials" title="Experiences That Inspire Us." />
        <Swiper modules={[Pagination, Autoplay]} pagination={{ clickable: true }} autoplay={{ delay: 5000, disableOnInteraction: true }} spaceBetween={20} slidesPerView={1} breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }} className="!pb-10">
          {testimonials.map(t => (
            <SwiperSlide key={t.name} className="!h-auto">
              <figure className="card h-full p-6">
                <div className="flex gap-0.5 text-brand" aria-label={`${t.rating} out of 5 stars`}>{Array.from({ length: t.rating }).map((_, i) => <Star key={i} size={16} fill="currentColor" aria-hidden />)}</div>
                <blockquote className="mt-3 text-muted">{t.review}</blockquote>
                <figcaption className="mt-4 font-heading font-semibold">{t.name}<span className="block text-sm font-normal text-muted">{t.role}</span></figcaption>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
