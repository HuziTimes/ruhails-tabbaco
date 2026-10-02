import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import { Leaf } from '../components/Logo.jsx'
import { PageHero, SectionHead, QuoteCTA } from '../components/Shared.jsx'
import { img, team, reasons } from '../data.js'

function initials(name) {
  return name.split(' ').map((w) => w[0]).join('').slice(0, 2)
}

export default function About() {
  return (
    <>
      <PageHero eyebrow="About Us" title="Rooted in Pakistan, trusted worldwide" text="A Pakistan-based tobacco export company delivering carefully sourced, quality-controlled raw tobacco to international manufacturers and distributors." image="tbc 4.jpg" />

      <section className="section section--cream contours">
        <div className="container story">
          <Reveal className="story__media">
            <img src={img('tbc 2.jpg')} alt="Cured tobacco leaves" loading="lazy" />
            <div className="story__card">
              <Leaf size={30} />
              <p>Pure leaf.<br />Pure trust.</p>
            </div>
          </Reveal>
          <Reveal className="story__text" delay={150}>
            <p className="eyebrow">Our Story</p>
            <h2 className="display">Years of experience in <em>global tobacco trade</em></h2>
            <p>For many years, Sultan House (Private) Limited has connected Pakistan's finest tobacco-growing regions with manufacturers across the world. What began with a deep understanding of the leaf has grown into a complete export operation serving buyers on every continent.</p>
            <p>We export pure leaf tobacco and all kinds of raw materials used in tobacco manufacturing — from Virginia flue-cured and Burley to sun-cured Rustica, shredded tobacco and expanded stem. Every consignment is sourced from trusted growers, graded with care and prepared to each buyer's exact specification.</p>
            <p>Our operations are guided by strict quality control, responsible sourcing practices and a strong understanding of global trade requirements.</p>
          </Reveal>
        </div>
      </section>

      <section className="section section--green">
        <div className="container">
          <SectionHead light eyebrow="Our Values" title="What sets us apart" />
          <div className="reasons reasons--dark">
            {reasons.map((r, i) => (
              <Reveal key={r.title} className="reason" delay={i * 100}>
                <span className="reason__num">0{i + 1}</span>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--cream" id="team">
        <div className="container">
          <SectionHead eyebrow="Our Team" title="The people behind Sultan House" text="Experienced professionals in sourcing, quality, operations and international trade — dedicated to every buyer we serve." />
          <div className="team">
            {team.map((m, i) => (
              <Reveal key={m.name} className="member" delay={(i % 3) * 100}>
                <div className="member__photo">
                  {m.photo ? <img src={img(m.photo)} alt={m.name} loading="lazy" /> : <span>{initials(m.name)}</span>}
                </div>
                <h3>{m.name}</h3>
                <p className="member__role">{m.role}</p>
                <a href={`mailto:${m.email}`}>{m.email}</a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="panel-wrap">
        <div className="container two-panels">
          <Reveal className="panel panel--sage">
            <p className="eyebrow">Affiliations & Certifications</p>
            <h3 className="display display--sm">Compliant, inspected, reliable.</h3>
            <p>Our operations align with applicable export regulations and industry quality standards. We work closely with regulatory bodies, inspection agencies and logistics partners to ensure compliant and reliable shipments.</p>
          </Reveal>
          <Reveal className="panel panel--deep" delay={150}>
            <p className="eyebrow eyebrow--light">Join Our Team</p>
            <h3 className="display display--sm display--light">Grow with us.</h3>
            <p>We are always looking for passionate people who take pride in their work and value a family dynamic and dedication to customer service. We invest in our team with the same passion they bring every day.</p>
            <Link to="/contact" className="btn btn--cream">Apply Now</Link>
          </Reveal>
        </div>
      </section>

      <QuoteCTA />
    </>
  )
}
