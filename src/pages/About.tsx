import {
  Check,
  Lightbulb,
  Target,
  ShieldCheck,
  Users,
  Rocket,
  Eye,
  Gem,
  Code2,
  BarChart3,
  Layers,
  Laptop,
  RefreshCw,
  Star,
  Home,
  ChevronRight,
  ArrowRight,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { useSEO } from '../hooks/useSEO'

const u = (id: string, w: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

const IMAGES = {
  hero: u('photo-1497366754035-f200968a6e72', 1600),
  teamWorking: u('photo-1522071820081-009f0129c71c', 1000),
  boardroom: u('photo-1497366811353-6870744d04b2', 1200),
  teamGroup: u('photo-1521737604893-d14cc237f11d', 1200),
}

const Accent = ({ children }: { children: React.ReactNode }) => (
  <span className="text-[#1D5FE0]">{children}</span>
)

const Bar = ({ className = '' }: { className?: string }) => (
  <div className={`h-[3px] w-10 rounded-full bg-[#1D5FE0] ${className}`} />
)

export default function About() {
  useSEO(
    'About Us',
    'Learn about Megatronix Innovation – technology, creativity and quality driving digital progress.'
  )

  return (
    <div
      className="overflow-hidden bg-white text-gray-800 antialiased"
      style={{ fontFamily: "'Poppins', 'Inter', system-ui, sans-serif" }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');`}</style>
      
      {/* 1. HERO - Full width background image */}
      <section 
        className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden border-b border-gray-100 bg-gray-900"
        style={{
          backgroundImage: `url(${IMAGES.hero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50 z-0" />

        <div className="container-x relative z-10">
          <nav className="mb-4 flex items-center gap-2 text-sm text-gray-200 font-medium drop-shadow-sm">
            <Link to="/" className="flex items-center gap-1 hover:text-blue-400 transition-colors">
              <Home size={14} /> Home
            </Link>
            <ChevronRight size={14} />
            <span className="text-white">About Us</span>
          </nav>

          <div className="flex gap-3">
            <div className="mt-1.5 h-10 w-[3px] shrink-0 bg-[#1D5FE0]" />
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl text-[#1D5FE0] drop-shadow-md">
              <span className="block">About</span>
              <span className="block text-white">Megatronix Innovation</span>
            </h1>
          </div>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-white font-medium drop-shadow-sm">
            A technology solutions company delivering innovative software, digital services and
            intelligent products that create lasting impact.
          </p>
          <Bar className="mt-6 w-16" />
        </div>
      </section>

      {/* 2. WHO WE ARE */}
      <section className="relative bg-white py-10 md:py-14">
        <div className="container-x grid items-center gap-10 md:grid-cols-12">
          <div className="relative md:col-span-5">
            <div className="absolute inset-0 -z-0 translate-x-2 translate-y-2 rounded-[2rem] rounded-tl-[4rem] border-[3px] border-[#1D5FE0]" />
            <img
              src={IMAGES.teamWorking}
              alt="Team working"
              className="relative z-10 h-[260px] w-full rounded-[2rem] rounded-tl-[4rem] object-cover shadow-md"
            />
          </div>

          <div className="md:col-span-4">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Who We <Accent>Are</Accent>
            </h2>
            <Bar className="my-4" />
            <p className="mb-6 text-[15px] leading-relaxed text-gray-600">
              Megatronix Innovation is a forward-thinking technology company that provides web
              solutions, app development and digital services of every kind. We help businesses grow
              with innovative, intelligent and impactful technology.
            </p>
            <a
              href="#journey"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#1D5FE0] to-[#0F3FA8] px-7 py-3 text-sm font-semibold text-white shadow-md shadow-blue-300/50 transition hover:brightness-110"
            >
              Our Journey <ArrowRight size={16} />
            </a>
          </div>

          <div className="flex flex-col gap-5 md:col-span-3 md:border-l">
            {[
              { icon: Code2, title: 'IT Services & Solutions' },
              { icon: Laptop, title: 'Web & App Development' },
              { icon: BarChart3, title: 'Business Digital Transformation' },
            ].map((item) => (
              <div key={item.title} className="flex items-center gap-4">
                <item.icon size={34} strokeWidth={1.6} className="shrink-0 text-[#1D5FE0]" />
                <span className="text-[15px] font-semibold leading-snug text-gray-900">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MISSION / VISION / VALUES */}
      <section className="bg-white pb-10 md:pb-14">
        <div className="container-x grid gap-5 md:grid-cols-3">
          <div className="flex gap-4 rounded-2xl bg-gradient-to-br from-blue-100/80 to-blue-50 p-6">
            <Target size={38} strokeWidth={1.6} className="shrink-0 text-[#1D5FE0]" />
            <div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">Our Mission</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                Deliver innovative, intelligent IT solutions that create real, lasting impact for
                businesses and the community.
              </p>
            </div>
          </div>

          <div className="flex gap-4 rounded-2xl bg-gradient-to-br from-sky-50 to-blue-50 p-6">
            <Eye size={38} strokeWidth={1.6} className="shrink-0 text-[#1D5FE0]" />
            <div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">Our Vision</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                To be a trusted technology partner for businesses, known for continuous innovation
                and measurable impact.
              </p>
            </div>
          </div>

          <div className="flex gap-4 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100/80 p-6">
            <Gem size={38} strokeWidth={1.6} className="shrink-0 text-[#1D5FE0]" />
            <div className="flex-1">
              <h3 className="mb-3 text-xl font-semibold text-gray-900">Our Values</h3>
              <ul className="grid grid-cols-2 gap-x-3 gap-y-2.5 text-sm text-gray-700">
                {['Innovation', 'Collaboration', 'Quality', 'Impact', 'Integrity', 'Customer Success'].map(
                  (v) => (
                    <li key={v} className="flex items-center gap-1.5">
                      <Check size={14} strokeWidth={3} className="shrink-0 text-[#1D5FE0]" /> {v}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR JOURNEY */}
      <section id="journey" className="relative bg-white py-10 md:py-14">
        <div className="pointer-events-none absolute inset-x-0 top-1/2 h-24 -translate-y-1/2 bg-gradient-to-r from-transparent via-blue-50 to-transparent" />
        <div className="container-x relative grid items-center gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <Bar className="mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Our <Accent>Journey</Accent>
            </h2>
            <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-gray-700">
              A growing journey of technology, innovation and trust, built with a clear purpose to
              create real impact.
            </p>
          </div>

          <div className="relative grid gap-8 md:col-span-8 md:grid-cols-3">
            <div className="absolute left-[16%] right-[16%] top-6 hidden border-t-2 border-dashed border-[#1D5FE0]/60 md:block" />
            {[
              {
                icon: Rocket,
                year: '2026',
                title: 'Megatronix Established',
                desc: 'Started with a vision to deliver innovative, intelligent and impactful technology solutions.',
              },
              {
                icon: Users,
                year: 'Today',
                title: 'Growing with Trust',
                desc: 'Delivering web solutions, app development and digital services for growing businesses.',
              },
              {
                icon: Target,
                year: 'Our Goal',
                title: 'A Bigger Impact',
                desc: 'To become a leading technology partner for businesses across every industry.',
              },
            ].map((s) => (
              <div key={s.year} className="relative z-10 flex flex-col items-center text-center">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#1D5FE0] text-white shadow-md shadow-blue-300/60">
                  <s.icon size={22} />
                </div>
                <span className="text-xl font-bold text-gray-900">{s.year}</span>
                <h3 className="mb-1 text-base font-semibold text-gray-900">{s.title}</h3>
                <p className="max-w-[240px] text-sm leading-relaxed text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE MEGATRONIX */}
      <section className="relative bg-white py-10 md:py-14">
        <div className="pointer-events-none absolute -left-20 top-0 h-full w-1/2 bg-gradient-to-r from-blue-50 to-transparent" />
        <div className="container-x relative grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Why Choose <Accent>Megatronix?</Accent>
            </h2>
            <p className="mb-7 mt-3 max-w-md text-[15px] leading-relaxed text-gray-700">
              A perfect blend of technology expertise, creative thinking and practical industry
              experience.
            </p>

            <div className="grid gap-x-6 gap-y-5 sm:grid-cols-2">
              {[
                { icon: Layers, title: 'Industry Expertise', desc: 'Real-world knowledge and practical experience.' },
                { icon: Laptop, title: 'Modern Technology Stack', desc: 'Web, mobile and desktop solutions built with current tools.' },
                { icon: ShieldCheck, title: 'Quality Solutions', desc: 'Reliable, scalable and business-focused solutions.' },
                { icon: Target, title: 'Client-Centric Approach', desc: 'Solutions tailored to your business goals.' },
                { icon: Users, title: 'Experienced Team', desc: 'A skilled and passionate team of professionals.' },
                { icon: RefreshCw, title: 'Continuous Improvement', desc: 'Adopting new technologies to deliver better results.' },
              ].map((f) => (
                <div key={f.title} className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-[#1D5FE0]">
                    <f.icon size={20} />
                  </div>
                  <div>
                    <h4 className="mb-0.5 text-[15px] font-semibold text-gray-900">{f.title}</h4>
                    <p className="text-sm leading-relaxed text-gray-600">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-3 top-4 h-full w-full rounded-[3rem] rounded-r-3xl bg-gradient-to-br from-[#1D5FE0]/70 to-blue-200" />
            <img
              src={IMAGES.boardroom}
              alt="Megatronix boardroom"
              className="relative h-[300px] w-full rounded-[3rem] rounded-r-3xl object-cover shadow-lg md:h-[340px]"
            />
          </div>
        </div>
      </section>

      {/* 6. TEAM & CULTURE */}
      <section className="bg-white py-10 md:py-14">
        <div className="container-x grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Our <Accent>Team</Accent>
            </h2>
            <p className="mb-5 mt-3 max-w-md text-[15px] leading-relaxed text-gray-700">
              A passionate team of developers, designers and marketers dedicated to
              building effective digital solutions.
            </p>
            <img
              src={IMAGES.teamGroup}
              alt="Our team"
              className="h-[230px] w-full rounded-2xl object-cover shadow-md"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Our Work <Accent>Culture</Accent>
            </h2>
            <p className="mb-5 mt-3 max-w-md text-[15px] leading-relaxed text-gray-700">
              We believe in a positive, collaborative and innovation-driven work environment that
              drives creativity, innovation and growth.
            </p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                { icon: RefreshCw, title: 'Improve Continuously' },
                { icon: Users, title: 'Collaborate Effectively' },
                { icon: Lightbulb, title: 'Build Innovatively' },
                { icon: Star, title: 'Grow Together' },
              ].map((c) => (
                <div
                  key={c.title}
                  className="flex h-32 flex-col items-center justify-center rounded-xl bg-white p-3 text-center shadow-[0_4px_18px_rgba(0,0,0,0.08)]"
                >
                  <c.icon size={28} strokeWidth={1.6} className="mb-2 text-[#1D5FE0]" />
                  <span className="text-[13px] font-semibold leading-tight text-gray-900">{c.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA BANNER */}
      <section className="bg-gradient-to-r from-[#1D5FE0] via-[#1650C2] to-[#1D5FE0] py-8">
        <div className="container-x flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-white md:text-3xl">Ready to Work With Us?</h2>
            <p className="mt-1 text-base text-blue-100">Let's build something impactful together.</p>
          </div>
          <div className="hidden h-12 w-px bg-white/30 md:block" />
          <div className="flex gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-7 py-3 text-sm font-semibold text-[#1D5FE0] shadow-sm transition hover:bg-gray-50"
            >
              Get a Quote <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-white px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Contact Us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}