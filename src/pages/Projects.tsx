import { useSEO } from '../hooks/useSEO'
import { PageHero } from '../components/common/PageHero'
import { ProjectGallery } from '../components/projects/ProjectGallery'
import { DemoNotice } from '../components/common/DemoNotice'
import { CTASection } from '../components/common/CTABanner'

export default function Projects() {
  useSEO('Projects', 'Explore sample projects and creative work from Megatronix Innovation.')
  
  return (
    <>
      <PageHero 
        title={
          <>
            Our Projects and <span className="text-white">Creative Work.</span>
          </>
        }
        subtitle="A look at the kinds of solutions we design and build." 
        crumbs={[{ label: 'Projects' }]} 
        backgroundimg="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80"
      />
      
      <section className="section">
        <div className="container-x">
          <div className="mb-8">
            <DemoNotice>
              These are sample demonstration projects, shown until actual Megatronix projects are added.
            </DemoNotice>
          </div>
          <ProjectGallery />
        </div>
      </section>
      
      <CTASection />
    </>
  )
}