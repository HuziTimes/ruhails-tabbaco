import Reveal from '../components/Reveal.jsx'
import { Leaf } from '../components/Logo.jsx'
import { PageHero, SectionHead, QuoteCTA } from '../components/Shared.jsx'
import { steps, regions, img } from '../data.js'

const logistics = [
  { title: 'Export Documentation', text: 'Commercial invoice, packing list, certificate of origin, phytosanitary and all destination-specific paperwork.' },
  { title: 'Fumigation & Inspection', text: 'Fumigation certificates and third-party inspection arranged before every shipment.' },
  { title: 'Secure Packing', text: 'Moisture-controlled cartons and bales to protect quality throughout the journey.' },
  { title: 'Sea & Air Freight', text: 'Container shipments from Karachi port and air freight for samples and urgent orders.' },
]

export default function Exports() {
  return (
    <>
      <PageHero eyebrow="Global Exports" title="Worldwide supply, seamless delivery" text="From origin selection to export documentation and logistics, our team ensures a smooth and dependable supply chain." image="pexels hero.jpg" />

      <section className="section section--cream contours">
        <div className="container">
          <SectionHead eyebrow="How It Works" title="From enquiry to delivery" text="A clear, transparent process — refined over years of exporting to international buyers." />
          <ol className="process">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.title} className="process__step" delay={i * 100}>
                <span className="process__num">{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--green">
        <div className="container">
          <SectionHead light eyebrow="Logistics" title="We handle everything" />
          <div className="reasons reasons--dark">
            {logistics.map((l, i) => (
              <Reveal key={l.title} className="reason" delay={i * 100}>
                <div className="reason__icon"><Leaf size={24} /></div>
                <h3>{l.title}</h3>
                <p>{l.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="panel-wrap">
        <div className="container">
          <div className="panel panel--sage markets">
            <Reveal className="markets__media">
              <img src={img('tbc 2.jpg')} alt="Tobacco ready for export" loading="lazy" />
            </Reveal>
            <Reveal delay={150}>
              <p className="eyebrow">Markets We Serve</p>
              <h2 className="display">Worldwide <em>support</em></h2>
              <p>We serve cigarette manufacturers, tobacco processors and distributors across international markets — with a responsive team supporting you before, during and after every shipment.</p>
              <div className="regions regions--dark">
                {regions.map((r) => <span key={r}>{r}</span>)}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <QuoteCTA />
    </>
  )
}
