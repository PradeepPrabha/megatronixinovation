import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { projects, projectCategories } from '../../data/projects'
import { ProjectCard } from './ProjectCard'
import { ProjectFilter } from './ProjectFilter'

export function ProjectGallery({ limit }: { limit?: number }) {
  const [cat, setCat] = useState('All')
  const list = projects.filter(p => cat === 'All' || p.category === cat).slice(0, limit)

  return (
    <div className="relative">
      <ProjectFilter categories={projectCategories} active={cat} onChange={setCat} />
      
      <motion.div 
        layout 
        className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
      >
        <AnimatePresence mode="popLayout">
          {list.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </AnimatePresence>
      </motion.div>
      
      {list.length === 0 && (
        <p className="py-16 text-center text-gray-500 font-medium">
          No sample projects in this category yet.
        </p>
      )}
    </div>
  )
}