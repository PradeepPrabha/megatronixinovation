import { motion, useReducedMotion } from 'framer-motion'
export function PageTransition({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion()
  return (
    <motion.main id="main" initial={reduce ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
      {children}
    </motion.main>
  )
}
