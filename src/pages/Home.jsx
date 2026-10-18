import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Leaf } from '../components/Logo.jsx'
import Reveal, { Counter } from '../components/Reveal.jsx'
import { SectionHead, Marquee, Collections, QuoteCTA } from '../components/Shared.jsx'
import { img, products, services, reasons, regions, faqs } from '../data.js'

function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero__head">
          <div className="hero__label">
            <span className="hero__dot" />
            <p className="label">Trusted tobacco exporter · Islamabad, Pakistan</p>
          </div>
          <h1 className="h-mega">
            <span className="line"><span>Pure Leaf</span></span>
            <span className="line"><span>Tobacco <em>to the</em></span></span>
            <span className="line"><span>Whole World</span></span>
          </h1>
        </div>

        <div className="hero__feature">
          <div className="hero__media">
            <img src={img('pexels hero.jpg')} alt="Tobacco fields in Pakistan" />
            <span className="hero__badge"><Leaf size={18} /> Featured — Virginia FCV</span>
          </div>
          <aside className="hero__card">
            <div className="hero__by">
              <span className="hero__avatar"><Leaf size={22} /></span>
              <div>
                <strong>Sultan House (Pvt) Ltd</strong>
                <small>Islamabad, Pakistan</small>
              </div>
            </div>
            <p>Pure leaf tobacco and every raw material used in tobacco manufacturing — carefully sourced, quality-controlled and exported to manufacturers worldwide.</p>
            <div className="tags">
              {['Virginia FCV', 'Burley', 'Sun-Cured', 'Shredded', 'Expanded Stem'].map((t) => <span key={t} className="tag">{t}</span>)}
            </div>
            <div className="hero__scores">
              <div><b>8+</b><small>Grades</small></div>
              <div><b>100%</b><small>Inspected</small></div>
              <div><b>Global</b><small>Shipping</small></div>
            </div>
            <div className="hero__actions">
              <Link to="/contact" className="btn btn--dark">Get a Quote</Link>
              <Link to="/products" className="btn btn--line">Explore Products</Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

function Statement() {
  return (
    <section className="statement">
      <div className="wrap statement__grid">
        <Reveal><p className="label">Our Vision</p></Reveal>
        <Reveal delay={100}>
          <p className="statement__text">
            To build <em>long-term partnerships</em> through reliability, transparency and ethical sourcing — supplying high-quality raw tobacco that meets international standards and every buyer's specification.
          </p>
          <div className="stats">
            {[
              { v: 8, s: '+', l: 'Tobacco grades & raw materials' },
              { v: 100, s: '%', l: 'Pre-shipment inspected' },
              { t: '∞', l: 'Custom buyer specifications' },
              { t: 'Global', l: 'Export & logistics support' },
            ].map((x) => (
              <div key={x.l} className="stat">
                <span className="stat__value">{x.t ?? <Counter value={x.v} suffix={x.s} />}</span>
                <span className="stat__label">{x.l}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section className="section">
      <div className="wrap">
        <SectionHead label="What we offer" title="End-to-end export" text="Sourcing, grading, processing coordination and international shipment — one dependable partner from origin to destination port." />
        <div className="rows">
          {services.map((s, i) => (
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
  )
}

function Featured() {
  const [active, setActive] = useState(0)
  const p = products[active]
  return (
    <section className="section section--dark">
      <div className="wrap">
        <SectionHead light label="Product of the day" title="Featured Grades" text="Hover through our most requested grades — every one prepared to your cut, moisture and packing requirements." action={<Link to="/products" className="btn btn--cream">All Products</Link>} />
        <div className="featured">
          <ul className="featured__list">
            {products.slice(0, 6).map((x, i) => (
              <li key={x.name} onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)} className={active === i ? 'is-active' : ''}>
                <Link to={`/contact?product=${encodeURIComponent(x.name)}`}>
                  <span>0{i + 1}</span>{x.name}<small>{x.tag}</small>
                </Link>
              </li>
            ))}
          </ul>
          <div className="featured__media">
            <img key={p.image} src={img(p.image)} alt={p.name} />
            <div className="featured__caption"><b>{p.name}</b><span>{p.text}</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Why() {
  return (
    <section className="section">
      <div className="wrap">
        <SectionHead label="Why Sultan House" title="Built on trust" />
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
  )
}

function Global() {
  return (
    <section className="section section--sage">
      <div className="wrap global">
        <Reveal>
          <p className="label">Worldwide reach</p>
          <h2 className="h-xl">From Pakistan<br />to the world</h2>
          <p className="global__text">For years we have shipped tobacco to manufacturers, processors and distributors across the globe — with documentation, fumigation, packing and freight handled end to end.</p>
          <div className="tags tags--lg">{regions.map((r) => <span key={r} className="tag tag--line">{r}</span>)}</div>
          <Link to="/exports" className="btn btn--dark">How We Export</Link>
        </Reveal>
        <Reveal className="globe" delay={120} aria-hidden="true">
          <svg viewBox="0 0 400 400">
            <circle cx="200" cy="200" r="170" fill="#384933" />
            {[30, 70, 110, 150].map((rx) => <ellipse key={rx} cx="200" cy="200" rx={rx} ry="170" fill="none" stroke="rgba(216,217,188,.22)" />)}
            {[-120, -60, 0, 60, 120].map((y) => <ellipse key={y} cx="200" cy={200 + y} rx={Math.sqrt(170 * 170 - y * y)} ry="8" fill="none" stroke="rgba(216,217,188,.22)" />)}
            <g className="globe__routes" fill="none" stroke="#e8c980" strokeWidth="1.5" strokeDasharray="4 5">
              <path d="M248 182 Q 200 90 120 130" /><path d="M248 182 Q 300 110 330 160" /><path d="M248 182 Q 190 230 150 270" /><path d="M248 182 Q 290 260 300 290" /><path d="M248 182 Q 210 160 90 200" />
            </g>
            {[[120, 130], [330, 160], [150, 270], [300, 290], [90, 200]].map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r="4" fill="#fffcf2" className="globe__pin" style={{ animationDelay: `${i * .4}s` }} />
            ))}
            <circle cx="248" cy="182" r="7" fill="#e8c980" />
            <circle cx="248" cy="182" r="7" fill="none" stroke="#e8c980" className="globe__pulse" />
          </svg>
        </Reveal>
      </div>
    </section>
  )
}

function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section className="section">
      <div className="wrap">
        <SectionHead label="FAQ" title="Questions" text="Can't find what you need? Our export team is happy to help." action={<Link to="/contact" className="btn btn--line">Contact Us</Link>} />
        <div className="faq">
          {faqs.map((f, i) => (
            <div key={f.q} className={`faq__item ${open === i ? 'is-open' : ''}`}>
              <button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                <span className="faq__num">0{i + 1}</span>{f.q}<span className="faq__icon" />
              </button>
              <div className="faq__answer"><p>{f.a}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee items={products.map((p) => p.name)} />
      <Statement />
      <Collections />
      <Services />
      <Featured />
      <Why />
      <Global />
      <FAQ />
      <QuoteCTA />
    </>
  )
}
