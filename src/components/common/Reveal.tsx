import { motion, useReducedMotion } from 'framer-motion'
import { fadeUp, viewOnce } from '../../utils/motion'
export function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduce = useReducedMotion()
  if (reduce) return <div className={className}>{children}</div>
  return (
    <motion.div className={className} variants={fadeUp} initial="hidden" whileInView="show" viewport={viewOnce} transition={{ delay }}>
      {children}
    </motion.div>
  )
}
