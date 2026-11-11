import { useState, useRef, useEffect, useCallback, useLayoutEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { services } from '../../data/services'

const FALLBACK_IMAGES = [
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
  'https://images.unsplash.com/photo-1555421689-491a97ff2040?w=800&q=80',
  'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&q=80',
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80',
]

const AUTO_SCROLL_SPEED = 1.2
const DRAG_THRESHOLD = 5
const HAS_MOVED_RESET_MS = 100
const ACCENT_TEXT = 'Technology Services'

// --- Typewriter hook ---
function useTypewriter(text: string, speed = 80, startDelay = 400) {
  const [displayed, setDisplayed] = useState('')
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), startDelay)
    return () => clearTimeout(startTimer)
  }, [startDelay])

  useEffect(() => {
    if (!started) return
    if (displayed.length >= text.length) return

    const timer = setTimeout(() => {
      setDisplayed(text.slice(0, displayed.length + 1))
    }, speed)

    return () => clearTimeout(timer)
  }, [started, displayed, text, speed])

  return displayed
}

export function ServicesGrid() {
  const navigate = useNavigate()
  const carouselRef = useRef<HTMLDivElement>(null)
  const isHoveredRef = useRef(false)
  const isDraggingRef = useRef(false)
  const isTouchingRef = useRef(false)

  const typedText = useTypewriter(ACCENT_TEXT, 80, 500)

  // Stable items — computed once per mount, not every render
  const items = services.map((service, index) => ({
    id: service.slug,
    title: service.title,
    subtitle: service.short || 'Digital Solution',
    image: FALLBACK_IMAGES[index % FALLBACK_IMAGES.length],
  }))

  // Triple items for seamless loop
  const infiniteItems = [...items, ...items, ...items]

  const dragState = useRef({
    startX: 0,
    startY: 0,
    scrollLeft: 0,
    isPointerDown: false,
    hasMoved: false,
  })

  // --- Init scroll position BEFORE paint to avoid visible jump ---
  useLayoutEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    const setInitialScroll = () => {
      const oneSetWidth = carousel.scrollWidth / 3
      if (oneSetWidth > 0) {
        carousel.style.scrollBehavior = 'auto'
        carousel.scrollLeft = oneSetWidth
        requestAnimationFrame(() => {
          carousel.style.scrollBehavior = ''
        })
      }
    }

    setInitialScroll()

    const images = carousel.querySelectorAll('img')
    let pendingImages = images.length
    if (pendingImages === 0) return

    const onImgLoad = () => {
      pendingImages--
      if (pendingImages === 0) {
        const oneSetWidth = carousel.scrollWidth / 3
        if (oneSetWidth > 0 && carousel.scrollLeft < oneSetWidth * 0.5) {
          carousel.style.scrollBehavior = 'auto'
          carousel.scrollLeft = oneSetWidth
          requestAnimationFrame(() => {
            carousel.style.scrollBehavior = ''
          })
        }
      }
    }

    images.forEach((img) => {
      if ((img as HTMLImageElement).complete) {
        pendingImages--
      } else {
        img.addEventListener('load', onImgLoad, { once: true })
        img.addEventListener('error', onImgLoad, { once: true })
      }
    })

    if (pendingImages === 0) {
      const oneSetWidth = carousel.scrollWidth / 3
      if (oneSetWidth > 0) {
        carousel.style.scrollBehavior = 'auto'
        carousel.scrollLeft = oneSetWidth
        requestAnimationFrame(() => {
          carousel.style.scrollBehavior = ''
        })
      }
    }

    return () => {
      images.forEach((img) => {
        img.removeEventListener('load', onImgLoad)
        img.removeEventListener('error', onImgLoad)
      })
    }
  }, [])

  // --- Auto-scroll loop ---
  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    let rafId = 0
    let lastTimestamp = 0
    let oneSetWidth = 0

    const recalcWidth = () => {
      oneSetWidth = carousel.scrollWidth / 3
    }
    recalcWidth()

    let resizeRaf = 0
    const onResize = () => {
      cancelAnimationFrame(resizeRaf)
      resizeRaf = requestAnimationFrame(recalcWidth)
    }
    window.addEventListener('resize', onResize, { passive: true })

    const tick = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp
      const delta = timestamp - lastTimestamp
      lastTimestamp = timestamp

      const paused =
        isHoveredRef.current || isDraggingRef.current || isTouchingRef.current

      if (!paused && oneSetWidth > 0) {
        const step = AUTO_SCROLL_SPEED * (delta / 16.67)
        carousel.scrollLeft += step

        if (carousel.scrollLeft >= oneSetWidth * 2) {
          carousel.scrollLeft -= oneSetWidth
        } else if (carousel.scrollLeft <= 0) {
          carousel.scrollLeft += oneSetWidth
        }
      }

      rafId = requestAnimationFrame(tick)
    }

    rafId = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(rafId)
      cancelAnimationFrame(resizeRaf)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  // --- Pointer drag handlers ---
  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    const carousel = carouselRef.current
    if (!carousel) return

    dragState.current = {
      startX: e.clientX,
      startY: e.clientY,
      scrollLeft: carousel.scrollLeft,
      isPointerDown: true,
      hasMoved: false,
    }
    isDraggingRef.current = true
  }, [])

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    const carousel = carouselRef.current
    const state = dragState.current
    if (!carousel || !state.isPointerDown) return

    const deltaX = e.clientX - state.startX
    const deltaY = e.clientY - state.startY

    if (
      !state.hasMoved &&
      Math.abs(deltaX) > Math.abs(deltaY) &&
      Math.abs(deltaX) > DRAG_THRESHOLD
    ) {
      state.hasMoved = true
      carousel.setPointerCapture?.(e.pointerId)
    }

    if (state.hasMoved) {
      e.preventDefault()
      const walk = deltaX * 1.5
      carousel.scrollLeft = state.scrollLeft - walk
    }
  }, [])

  const handlePointerUp = useCallback((e: React.PointerEvent) => {
    const carousel = carouselRef.current
    const state = dragState.current

    if (carousel?.hasPointerCapture?.(e.pointerId)) {
      carousel.releasePointerCapture(e.pointerId)
    }

    if (state.hasMoved) {
      setTimeout(() => {
        dragState.current.hasMoved = false
      }, HAS_MOVED_RESET_MS)
    }

    state.isPointerDown = false
    isDraggingRef.current = false
  }, [])

  const handleCardClick = useCallback(
    (slug: string) => {
      if (dragState.current.hasMoved) return
      navigate(`/services/${slug}`)
    },
    [navigate]
  )

  const handleCardKeyDown = useCallback(
    (e: React.KeyboardEvent, slug: string) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        if (!dragState.current.hasMoved) {
          navigate(`/services/${slug}`)
        }
      }
    },
    [navigate]
  )

  const handleMouseEnter = useCallback(() => {
    isHoveredRef.current = true
  }, [])

  const handleMouseLeave = useCallback(() => {
    isHoveredRef.current = false
    isDraggingRef.current = false
    dragState.current.isPointerDown = false
  }, [])

  const handleTouchStart = useCallback(() => {
    isTouchingRef.current = true
  }, [])

  const handleTouchEnd = useCallback(() => {
    isTouchingRef.current = false
  }, [])

  const isTyping = typedText.length < ACCENT_TEXT.length

  return (
    <section className="relative overflow-hidden bg-[#040B20] py-12 sm:py-16 md:py-20">
      {/* Background Gradients */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/4 h-[300px] w-[300px] rounded-full bg-brand/20 blur-[120px] sm:h-[500px] sm:w-[500px]" />
        <div className="absolute bottom-0 right-1/4 h-[250px] w-[250px] rounded-full bg-cyan-500/10 blur-[100px] sm:h-[400px] sm:w-[400px]" />
      </div>

      {/* Header */}
      <div className="container-x relative z-10">
        <div className="text-center">
          <h2 className="font-heading text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="text-white">Our</span>{' '}
            <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              {typedText}
            </span>
            {isTyping && (
              <span className="ml-1 inline-block h-[0.9em] w-[3px] animate-pulse bg-blue-400 align-middle" />
            )}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-400 sm:mt-5 sm:text-base md:text-lg">
            Complete Digital Solutions to Move Your Business Forward.
          </p>
        </div>
      </div>

      {/* Carousel */}
      <div
        className="relative mt-6 w-full sm:mt-8 md:mt-10"
        style={{ perspective: '1400px' }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          ref={carouselRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onPointerLeave={(e) => {
            if (dragState.current.isPointerDown) handlePointerUp(e)
          }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onDragStart={(e) => e.preventDefault()}
          className="flex gap-3 overflow-x-auto px-4 py-8 sm:gap-5 sm:px-6 sm:py-10 md:gap-6 md:px-[10vw] md:py-12
            [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden
            touch-pan-y select-none cursor-grab active:cursor-grabbing"
          style={{
            WebkitOverflowScrolling: 'touch',
            touchAction: 'pan-y pinch-zoom',
            willChange: 'scroll-position',
          }}
        >
          {infiniteItems.map((item, index) => (
            <motion.div
              key={`${item.id}-${index}`}
              initial={false}
              whileHover={{
                scale: 1.04,
                y: -8,
                transition: { type: 'spring', stiffness: 300, damping: 22 },
              }}
              onClick={() => handleCardClick(item.id)}
              onKeyDown={(e) => handleCardKeyDown(e, item.id)}
              role="link"
              tabIndex={0}
              aria-label={`View details for ${item.title}`}
              className="group relative flex h-[280px] w-[200px] shrink-0 cursor-pointer flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#071433]/80 shadow-2xl backdrop-blur-xl
                outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-[#040B20]
                transform-gpu
                xs:h-[300px] xs:w-[220px]
                sm:h-[340px] sm:w-[250px]
                md:h-[360px] md:w-[260px]"
            >
              <div className="pointer-events-none absolute inset-0 z-20 rounded-2xl border border-white/5 transition-colors duration-500 group-hover:border-brand/60" />

              {/* Image */}
              <div className="relative h-[48%] w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  draggable={false}
                  loading="lazy"
                  decoding="async"
                  className="pointer-events-none h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071433] via-[#071433]/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-1 flex-col justify-between p-3.5 sm:p-4 md:p-5">
                <div>
                  <h3 className="font-heading text-base font-bold text-white transition-colors duration-300 group-hover:text-brand sm:text-lg md:text-xl line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-[11px] leading-relaxed text-gray-400 line-clamp-2 transition-colors duration-300 group-hover:text-gray-300 sm:mt-2 sm:text-xs">
                    {item.subtitle}
                  </p>
                </div>

                <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-3 sm:mt-4 sm:pt-4">
                  <Link
                    to={`/services/${item.id}`}
                    onClick={(e) => {
                      if (dragState.current.hasMoved) {
                        e.preventDefault()
                        e.stopPropagation()
                      }
                    }}
                    className="inline-flex items-center gap-1.5 text-[11px] font-bold text-white transition-colors hover:text-brand sm:text-xs md:text-sm"
                  >
                    Explore Service
                  </Link>
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-white/5 text-brand transition-all duration-300 group-hover:bg-brand group-hover:text-white sm:h-8 sm:w-8">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="sm:h-3.5 sm:w-3.5"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Edge Gradients */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-40 w-8 bg-gradient-to-r from-[#040B20] to-transparent sm:w-20 md:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-40 w-8 bg-gradient-to-l from-[#040B20] to-transparent sm:w-20 md:w-40" />
      </div>

      {/* CTA */}
      <div className="container-x relative z-10 mt-2 text-center sm:mt-4">
        <Link
          to="/services"
          className="group inline-flex items-center gap-2 rounded-full border border-brand/50 bg-brand/10 px-6 py-3 text-xs font-bold text-brand backdrop-blur-md transition-all hover:bg-brand hover:text-white sm:px-8 sm:py-3.5 sm:text-sm"
        >
          View All Services
          <span className="inline-block transition-transform group-hover:translate-x-1">
            &rarr;
          </span>
        </Link>
      </div>
    </section>
  )
}