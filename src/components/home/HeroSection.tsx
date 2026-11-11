import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Phone, CheckCircle2, Code2, MonitorSmartphone, ShieldCheck } from 'lucide-react'
import { useState, useEffect } from 'react'
import heroBg from '../../assets/images/hero-bg.jpg'

// --- CUSTOM TYPEWRITER HOOK (FIXED TYPES) ---
function useTypewriter(text: string, speed: number = 40, startDelay: number = 0) {
  const [displayedText, setDisplayedText] = useState('')
  const [isDone, setIsDone] = useState(false)

  useEffect(() => {
    let i = 0
    let timer: ReturnType<typeof setInterval>

    const startTyping = () => {
      timer = setInterval(() => {
        if (i < text.length) {
          setDisplayedText(text.slice(0, i + 1))
          i++
        } else {
          clearInterval(timer)
          setIsDone(true)
        }
      }, speed)
    }

    const delayTimer: ReturnType<typeof setTimeout> = setTimeout(startTyping, startDelay)

    return () => {
      clearTimeout(delayTimer)
      clearInterval(timer)
    }
  }, [text, speed, startDelay])

  return { displayedText, isDone }
}

export function HeroSection() {
  // ONLY typing the highlighted text sequence
  const { displayedText: typedHighlight } = useTypewriter('Intelligent Digital Solutions.', 50, 800)

  return (
    <section className="relative min-h-[650px] w-full overflow-hidden bg-[#071433] font-sans lg:min-h-[800px]">
      
      {/* 1. BACKGROUND IMAGE & CINEMATIC OVERLAYS */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Megatronix Innovation - Intelligent Digital Solutions"
          className="h-full w-full object-cover object-center"
        />
       
        {/* Bottom gradient for smooth blending */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#040B20]/90 via-transparent to-transparent" />
        
        {/* Subtle glowing brand accent on the left */}
        <div className="absolute -left-20 top-1/3 h-96 w-96 rounded-full bg-[#1D5FE0]/10 blur-[100px]" />
      </div>

      {/* 2. MAIN HERO CONTENT */}
      <div className="relative z-10 mx-auto flex min-h-[650px] max-w-7xl flex-col justify-center px-6 py-20 lg:min-h-[800px] lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT COLUMN: Text & CTAs */}
          <div className="max-w-2xl">
            
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center"
            >
              <span className="rounded-md bg-[#1D5FE0] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-[0_0_15px_rgba(29,95,224,0.4)] sm:text-sm">
                MEGATRONIX INNOVATION
              </span>
            </motion.div>

            {/* Main Headline with Targeted Typewriter Effect */}
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.15] text-white sm:text-5xl lg:text-[56px] min-h-[160px] sm:min-h-[180px] lg:min-h-[200px]">
              {/* Static text visible immediately */}
              <span>Transforming Ideas Into </span>
              <br className="hidden sm:block" />
              
              {/* Highlighted text that types out */}
              <span className="text-[#4D8DFF]">
                {typedHighlight}
                {/* Blinking Cursor */}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                  className="inline-block w-1 h-8 sm:h-10 lg:h-12 bg-[#4D8DFF] ml-1 translate-y-1"
                />
              </span>
            </h1>

            {/* Subtitle (Expanded Content) */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.5 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-gray-300 sm:text-lg"
            >
              We build scalable software, craft stunning digital experiences, and deliver web and app solutions that help businesses innovate, scale and make an impact.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.7 }}
              className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6"
            >
              <Link
                to="/services"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[#1D5FE0] px-8 py-3.5 text-sm font-bold text-white shadow-[0_0_20px_rgba(29,95,224,0.4)] transition-all hover:bg-[#0F3FA8] hover:shadow-[0_0_30px_rgba(29,95,224,0.6)]"
              >
                <span className="relative z-10">Explore Our Services</span>
                <ArrowRight size={18} className="relative z-10 transition-transform group-hover:translate-x-1" />
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </Link>
              
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full border-2 border-white/80 bg-transparent px-8 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white/10"
              >
                <Phone size={18} className="transition-transform group-hover:-translate-y-0.5" />
                Contact Us
              </Link>
            </motion.div>

            {/* New Feature/Trust List */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 2.9 }}
              className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-6"
            >
              <span className="inline-flex items-center gap-2 text-sm font-medium text-gray-300">
                <CheckCircle2 size={16} className="text-[#1D5FE0]" /> Custom Software
              </span>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-gray-300">
                <CheckCircle2 size={16} className="text-[#1D5FE0]" /> Digital Experiences
              </span>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-gray-300">
                <CheckCircle2 size={16} className="text-[#1D5FE0]" /> Web & App Solutions
              </span>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Floating Glassmorphism Stat Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 3.0 }}
            className="hidden lg:flex justify-end items-center h-full pr-8"
          >
            <div className="w-full max-w-sm rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
              <div className="mb-6 flex items-center justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#1D5FE0]/20 text-[#1D5FE0]">
                  <MonitorSmartphone size={24} />
                </div>
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-8 w-8 rounded-full border-2 border-[#040B20] bg-gray-600" />
                  ))}
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#040B20] bg-[#1D5FE0] text-[10px] font-bold text-white">
                    50+
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">Ready to Scale?</h3>
              <p className="text-sm text-gray-300 mb-6">
                Join the businesses that have transformed their digital presence with Megatronix Innovation.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-black/30 p-3 border border-white/5">
                  <ShieldCheck size={18} className="text-[#1D5FE0] mb-2" />
                  <div className="text-lg font-bold text-white">100%</div>
                  <div className="text-[10px] uppercase text-gray-400">Quality</div>
                </div>
                <div className="rounded-xl bg-black/30 p-3 border border-white/5">
                  <Code2 size={18} className="text-[#1D5FE0] mb-2" />
                  <div className="text-lg font-bold text-white">150+</div>
                  <div className="text-[10px] uppercase text-gray-400">Projects</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}