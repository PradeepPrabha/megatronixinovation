import { useSEO } from '../hooks/useSEO'
import { PageHero } from '../components/common/PageHero'
import { DemoNotice } from '../components/common/DemoNotice'
import { company } from '../data/company'

export default function Terms() {
  useSEO('Terms and Conditions', 'Terms and conditions for the Megatronix Innovation website.')
  return (
    <>
      <PageHero title="Terms and Conditions" crumbs={[{ label: 'Terms and Conditions' }]} />
      <section className="section"><div className="container-x max-w-3xl space-y-5 text-muted">
        <DemoNotice>Template text for layout purposes. Have it reviewed and replaced by Megatronix Innovation before the site goes live.</DemoNotice>
        <h2 className="font-heading text-xl font-bold text-ink">Use of this website</h2>
        <p>By using this website you agree to use it lawfully and not to misuse its content or services.</p>
        <h2 className="font-heading text-xl font-bold text-ink">Content</h2>
        <p>Sample projects shown on this website are for demonstration until confirmed by Megatronix Innovation.</p>
        <h2 className="font-heading text-xl font-bold text-ink">Contact</h2>
        <p>For any questions, contact {company.email}.</p>
      </div></section>
    </>
  )
}
