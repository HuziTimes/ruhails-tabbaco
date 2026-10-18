import Reveal from '../components/Reveal.jsx'
import { PageHero, SectionHead, Collections, QuoteCTA } from '../components/Shared.jsx'
import { steps, regions } from '../data.js'

const logistics = [
  { title: 'Export Documentation', text: 'Commercial invoice, packing list, certificate of origin, phytosanitary and destination-specific paperwork.' },
  { title: 'Fumigation & Inspection', text: 'Fumigation certificates and third-party inspection arranged before every shipment.' },
  { title: 'Secure Packing', text: 'Moisture-controlled cartons and bales to protect quality throughout the journey.' },
  { title: 'Sea & Air Freight', text: 'Full container shipments by sea, and air freight for samples and urgent orders.' },
]

export default function Exports() {
  return (
    <>
      <PageHero label="Global Exports" title="Worldwide supply. Seamless delivery." text="From origin selection to export documentation and logistics, our team ensures a smooth and dependable supply chain." image="pexels hero.jpg" tags={regions} />

      <section className="section">
        <div className="wrap">
          <SectionHead label="How it works" title="Enquiry to delivery" text="A clear, transparent process — refined over years of exporting to international buyers." />
          <div className="rows">
            {steps.map((s, i) => (
              <Reveal key={s.title} className="row" delay={i * 60}>
                <span className="row__num">0{i + 1}</span>
                <h3 className="row__title">{s.title}</h3>
                <p className="row__text">{s.text}</p>
                <span className="row__arrow">↗</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="wrap">
          <SectionHead light label="Logistics" title="We handle everything" />
          <div className="grid4 grid4--dark">
            {logistics.map((l, i) => (
              <Reveal key={l.title} className="gcard" delay={i * 80}>
                <span className="gcard__num">0{i + 1}</span>
                <h3>{l.title}</h3>
                <p>{l.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Collections title="What we ship" text="Every grade below is available for worldwide export." />
      <QuoteCTA />
    </>
  )
}
