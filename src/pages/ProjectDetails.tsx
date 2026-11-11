import { Link, Navigate, useParams } from 'react-router-dom'
import { Check } from 'lucide-react'
import { getProject, projects } from '../data/projects'
import { useSEO } from '../hooks/useSEO'
import { Breadcrumb } from '../components/common/Breadcrumb'
import { ProjectThumb } from '../components/projects/ProjectThumb'
import { DemoNotice } from '../components/common/DemoNotice'
import { CTASection } from '../components/common/CTABanner'

export default function ProjectDetails() {
  const { slug } = useParams()
  const p = getProject(slug)
  useSEO(p?.title ?? 'Project', p?.description ?? '')
  if (!p) return <Navigate to="/projects" replace />
  return (
    <>
      <section className="bg-gradient-to-br from-brand-soft via-white to-cyanlight"><div className="container-x py-10"><Breadcrumb items={[{ label: 'Projects', to: '/projects' }, { label: p.title }]} /></div></section>
      <section className="section"><div className="container-x grid gap-10 lg:grid-cols-[1.3fr_1fr]">
        <div className="overflow-hidden rounded-3xl shadow-card"><ProjectThumb icon={p.image} index={projects.indexOf(p)} large /></div>
        <div>
          <span className="rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand">{p.category}</span>
          <h1 className="mt-3 font-heading text-3xl font-extrabold sm:text-4xl">{p.title}</h1>
          <p className="mt-4 text-muted">{p.details}</p>
          <h2 className="mt-6 font-heading text-lg font-bold">Highlights</h2>
          <ul className="mt-2 space-y-2">{p.features.map(f => <li key={f} className="flex items-center gap-2"><Check size={16} className="text-brand" aria-hidden />{f}</li>)}</ul>
          <h2 className="mt-6 font-heading text-lg font-bold">Technologies</h2>
          <ul className="mt-2 flex flex-wrap gap-2">{p.technologies.map(t => <li key={t} className="rounded-md bg-greylight px-3 py-1 text-sm font-medium">{t}</li>)}</ul>
          <div className="mt-6"><DemoNotice>Sample demonstration project – not a delivered client project.</DemoNotice></div>
          <Link to="/projects" className="btn-outline mt-6">Back to Projects</Link>
        </div>
      </div></section>
      <CTASection />
    </>
  )
}
