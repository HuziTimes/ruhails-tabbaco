import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import { PageHero, SectionHead, Marquee, QuoteCTA } from '../components/Shared.jsx'
import { img, team, reasons } from '../data.js'

const initials = (name) => name.split(' ').map((w) => w[0]).join('').slice(0, 2)

export default function About() {
  return (
    <>
      <PageHero label="About Sultan House" title="Rooted in Pakistan. Trusted worldwide." text="A Pakistan-based tobacco export company delivering carefully sourced, quality-controlled raw tobacco to international manufacturers and distributors." image="tbc 4.jpg" tags={['Est. Islamabad', 'Leaf Tobacco', 'Raw Materials', 'Worldwide']} />

      <section className="section">
        <div className="wrap split">
          <Reveal><p className="label">Our Story</p></Reveal>
          <Reveal className="prose" delay={100}>
            <p className="statement__text">Years of experience connecting Pakistan's finest tobacco regions with <em>manufacturers across the world.</em></p>
            <div className="prose__cols">
              <p>We export pure leaf tobacco and all kinds of raw materials used in tobacco manufacturing — from Virginia flue-cured and Burley to sun-cured Rustica, shredded tobacco and expanded stem.</p>
              <p>Every consignment is sourced from trusted growers, graded with care and prepared to each buyer's exact specification — guided by strict quality control and a strong understanding of global trade.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <Marquee dark items={['Consistent Quality', 'Export Experience', 'Reliable Supply', 'Worldwide Support', 'Ethical Sourcing']} />

      <section className="section">
        <div className="wrap">
          <SectionHead label="Our Values" title="What sets us apart" />
          <div className="grid4">
            {reasons.map((r, i) => (
              <Reveal key={r.title} className="gcard" delay={i * 80}>
                <span className="gcard__num">0{i + 1}</span>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--sage" id="team">
        <div className="wrap">
          <SectionHead label="Our Team" title="The people" text="Experienced professionals in sourcing, quality, operations and international trade." />
          <div className="team">
            {team.map((m, i) => (
              <Reveal key={m.name} className="member" delay={(i % 3) * 80}>
                <div className="member__photo">
                  {m.photo ? <img src={img(m.photo)} alt={m.name} loading="lazy" /> : <span>{initials(m.name)}</span>}
                </div>
                <div className="member__info">
                  <h3>{m.name}</h3>
                  <p>{m.role}</p>
                  <a href={`mailto:${m.email}`}>{m.email} ↗</a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap duo">
          <Reveal className="duo__card">
            <p className="label">Affiliations & Certifications</p>
            <h3 className="h-lg">Compliant, inspected, reliable.</h3>
            <p>Our operations align with applicable export regulations and industry quality standards. We work closely with regulatory bodies, inspection agencies and logistics partners to ensure compliant shipments.</p>
          </Reveal>
          <Reveal className="duo__card duo__card--dark" delay={120}>
            <p className="label label--light">Join Our Team</p>
            <h3 className="h-lg">Grow with us.</h3>
            <p>We are always looking for passionate people who take pride in their work and value a family dynamic and dedication to customer service.</p>
            <Link to="/contact" className="btn btn--cream">Apply Now</Link>
          </Reveal>
        </div>
      </section>

      <QuoteCTA />
    </>
  )
}
