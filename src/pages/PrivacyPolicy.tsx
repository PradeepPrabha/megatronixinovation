import { useSEO } from '../hooks/useSEO'
import { PageHero } from '../components/common/PageHero'
import { DemoNotice } from '../components/common/DemoNotice'
import { company } from '../data/company'

export default function PrivacyPolicy() {
  useSEO('Privacy Policy', 'Privacy policy for the Megatronix Innovation website.')
  return (
    <>
      <PageHero title="Privacy Policy" crumbs={[{ label: 'Privacy Policy' }]} />
      <section className="section"><div className="container-x max-w-3xl space-y-5 text-muted">
        <DemoNotice>Template text for layout purposes. Have it reviewed and replaced by Megatronix Innovation before the site goes live.</DemoNotice>
        <h2 className="font-heading text-xl font-bold text-ink">Information we collect</h2>
        <p>This frontend demo does not collect or transmit any personal information. Once connected to a backend, this section should describe what data is collected through the contact form.</p>
        <h2 className="font-heading text-xl font-bold text-ink">How information is used</h2>
        <p>To be completed by Megatronix Innovation: purposes such as responding to enquiries and quote requests.</p>
        <h2 className="font-heading text-xl font-bold text-ink">Contact</h2>
        <p>Questions about privacy can be sent to {company.email}.</p>
      </div></section>
    </>
  )
}
