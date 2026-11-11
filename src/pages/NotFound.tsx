import { Link } from 'react-router-dom'
import { useSEO } from '../hooks/useSEO'
export default function NotFound() {
  useSEO('Page Not Found', 'The page you are looking for does not exist.')
  return (
    <section className="section"><div className="container-x py-16 text-center">
      <p className="font-heading text-7xl font-extrabold text-brand">404</p>
      <h1 className="mt-4 font-heading text-3xl font-bold">Page not found</h1>
      <p className="mt-2 text-muted">The page you are looking for does not exist.</p>
      <Link to="/" className="btn-primary mt-6">Back to Home</Link>
    </div></section>
  )
}
