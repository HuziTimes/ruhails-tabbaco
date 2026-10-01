import Reveal, { Counter } from '../components/Reveal.jsx'
import { Leaf } from '../components/Logo.jsx'
import { PageHero, SectionHead } from '../components/Shared.jsx'
import { pillars } from '../data.js'

const goals = [
  { value: 500000, suffix: '+', label: 'Trees planted' },
  { value: 30, suffix: '%', label: 'Less water per kg of leaf' },
  { value: 100, suffix: '%', label: 'Growers on fair contracts' },
]

export default function Sustainability() {
  return (
    <>
      <PageHero eyebrow="Responsibility" title="Growing a Better Tomorrow" text="Our commitment to people and planet is woven into every stage of our value chain." />
      <section className="section section--cream">
        <div className="container">
          <SectionHead eyebrow="Our Pillars" title="Three Commitments" />
          <div className="pillars">
            {pillars.map((p, i) => (
              <Reveal key={p.title} className="pillar" delay={i * 120}>
                <div className="pillar__icon"><Leaf size={34} /></div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section section--dark">
        <div className="container">
          <SectionHead light eyebrow="Progress" title="Measured Impact" />
          <div className="stats stats--dark">
            {goals.map((g, i) => (
              <Reveal key={g.label} className="stat" delay={i * 100}>
                <span className="stat__value"><Counter value={g.value} suffix={g.suffix} /></span>
                <span className="stat__label">{g.label}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section section--cream2">
        <div className="container narrow">
          <SectionHead eyebrow="Our Promise" title="Marketing Responsibly" text="We market our products only to adults of legal smoking age, comply fully with every local regulation, and never target minors in any form of communication." />
        </div>
      </section>
    </>
  )
}
