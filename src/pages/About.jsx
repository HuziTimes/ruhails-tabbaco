import Reveal from '../components/Reveal.jsx'
import { Leaf } from '../components/Logo.jsx'
import { PageHero, SectionHead } from '../components/Shared.jsx'
import { timeline } from '../data.js'

const values = [
  { title: 'Heritage', text: 'We honour the traditions and craftsmanship passed down through generations of tobacco masters.' },
  { title: 'Excellence', text: 'From leaf selection to final pack, we accept nothing less than exceptional quality.' },
  { title: 'Integrity', text: 'We operate with honesty and transparency with every partner, grower and regulator.' },
  { title: 'Innovation', text: 'We invest in modern technology to refine our craft while preserving its soul.' },
]

export default function About() {
  return (
    <>
      <PageHero eyebrow="Our Heritage" title="A Legacy Written in Leaf" text="Three decades of passion, patience and an uncompromising pursuit of the perfect blend." />

      <section className="section section--cream">
        <div className="container intro">
          <Reveal className="intro__text">
            <p className="eyebrow">Our Story</p>
            <h2 className="display">Where tradition meets <em>modern mastery.</em></h2>
            <p>Sultan House began as a family leaf-trading business with a simple belief: that exceptional tobacco begins long before it reaches the factory — in the soil, in the sun, and in the hands of those who grow it.</p>
            <p>That belief still guides us. Today we combine time-honoured curing and blending techniques with state-of-the-art manufacturing, delivering consistent quality to adult consumers around the world.</p>
          </Reveal>
          <Reveal className="intro__art" delay={150}>
            <div className="intro__frame">
              <div className="intro__frame-inner">
                <Leaf size={160} />
                <p className="intro__est">SINCE</p>
                <p className="intro__year">1990</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <SectionHead light eyebrow="Milestones" title="Our Journey" />
          <div className="timeline">
            {timeline.map((t, i) => (
              <Reveal key={t.year} className="timeline__item" delay={i * 100}>
                <span className="timeline__year">{t.year}</span>
                <span className="timeline__dot" />
                <p>{t.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--cream2">
        <div className="container">
          <SectionHead eyebrow="What Guides Us" title="Our Values" />
          <div className="values">
            {values.map((v, i) => (
              <Reveal key={v.title} className="value" delay={i * 100}>
                <span className="craft__num">0{i + 1}</span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
