import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Project } from '../../types'
import { ProjectThumb } from './ProjectThumb'

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <motion.article 
      layout 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, scale: 0.95 }} 
      transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
      whileHover={{ y: -6 }} 
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:border-gray-300"
    >
      <ProjectThumb 
        icon={project.image} 
        index={index} 
        slug={project.slug}
        title={project.title}
        category={project.category}
      />
      
      <div className="flex flex-1 flex-col p-5">
        <p className="text-sm text-gray-600 line-clamp-2">{project.description}</p>
        
        {/* Tech tags */}
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.map(t => (
            <li key={t} className="rounded-md bg-gray-100 px-2 py-1 text-xs font-semibold text-gray-600">
              {t}
            </li>
          ))}
        </ul>
        
        {/* Explore link */}
        <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
          <Link 
            to={`/projects/${project.slug}`} 
            className="inline-flex items-center gap-1.5 text-sm font-bold text-gray-900 transition-colors hover:text-brand"
          >
            Explore Project
          </Link>
          
          <span className="grid h-8 w-8 place-items-center rounded-full bg-gray-50 text-gray-400 transition-colors group-hover:bg-brand group-hover:text-white">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </span>
        </div>
      </div>
    </motion.article>
  )
}