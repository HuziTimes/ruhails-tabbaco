import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Leaf, Ornament } from '../components/Logo.jsx'
import Reveal, { Counter } from '../components/Reveal.jsx'
import { SectionHead, ProductCard, QuoteCTA } from '../components/Shared.jsx'
import { img, products, services, reasons, regions, faqs } from '../data.js'

function Hero() {
  return (
    <section className="hero-wrap">
      <div className="hero" style={{ '--bg': `url("${img('pexels hero.jpg')}")` }}>
        <div className="hero__inner">
          <div className="hero__emblem"><Leaf size={64} /></div>
          <p className="eyebrow eyebrow--light hero__eyebrow">Sultan House (Private) Limited · Pakistan</p>
          <h1 className="hero__title">Supplying Premium Tobacco <em>to Global Markets</em></h1>
          <p className="lead lead--light hero__lead">
            Pure leaf tobacco and every raw material used in tobacco manufacturing — carefully sourced, quality-controlled and exported to manufacturers and distributors worldwide.
          </p>
          <div className="hero__actions">
            <Link to="/contact" className="btn btn--gold">Get a Quote</Link>
            <Link to="/products" className="btn btn--ghost">Explore Products</Link>
          </div>
        </div>
        <div className="hero__strip">
          {['Pure Leaf Tobacco', 'Tobacco Raw Materials', 'Custom Buyer Grades', 'Worldwide Shipping'].map((t) => (
            <span key={t}><Leaf size={14} />{t}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

function Mission() {
  return (
    <section className="section section--cream contours">
      <div className="container mission">
        <Reveal className="mission__side">
          <p className="eyebrow">Our Mission</p>
          <p>To consistently supply high-quality raw tobacco that meets international standards and buyer specifications.</p>
        </Reveal>
        <Reveal className="mission__statement" delay={150}>
          <p className="eyebrow">Our Vision</p>
          <h2>To build <em>long-term partnerships</em> through reliability, transparency and <em>ethical sourcing.</em></h2>
        </Reveal>
      </div>
      <div className="container stats">
        {[
          { v: 8, s: '+', l: 'Tobacco Grades & Materials' },
          { v: 100, s: '%', l: 'Pre-Shipment Inspected' },
          { t: 'Global', l: 'Export Network' },
          { t: 'Years', l: 'of Export Expertise' },
        ].map((x, i) => (
          <Reveal key={x.l} className="stat" delay={i * 100}>
            <span className="stat__value">{x.t ?? <Counter value={x.v} suffix={x.s} />}</span>
            <span className="stat__label">{x.l}</span>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Offer() {
  return (
    <section className="panel-wrap">
      <div className="container">
        <div className="panel panel--sage offer">
          <Reveal className="offer__text">
            <p className="eyebrow">What We Offer</p>
            <h2 className="display">End-to-end tobacco <em>export services</em></h2>
            <p>Sultan House provides complete export solutions — sourcing, grading, processing coordination and international shipment of raw tobacco. We specialise in supplying tobacco that meets buyer-specific requirements for cut, moisture, cleanliness and consistency.</p>
            <ul className="offer__list">
              {services.map((s, i) => (
                <li key={s.title}>
                  <span className="offer__num">0{i + 1}</span>
                  <div><h3>{s.title}</h3><p>{s.text}</p></div>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="offer__media" delay={150}>
            <img src={img('tbc 4.jpg')} alt="Tobacco field in Pakistan" loading="lazy" />
            <div className="offer__badge">
              <Leaf size={28} />
              <span>Trusted growers &<br />processing partners</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function ProductsPreview() {
  return (
    <section className="section section--green">
      <div className="container">
        <SectionHead light eyebrow="Our Products" title="Pure Leaf & Raw Materials" text="From bright Virginia leaf to expanded stem — every grade and raw material a tobacco manufacturer needs, from a single trusted source." />
        <div className="products">
          {products.slice(0, 4).map((p, i) => <ProductCard key={p.name} product={p} delay={i * 100} />)}
        </div>
        <div className="center"><Link to="/products" className="btn btn--cream">View All Products</Link></div>
      </div>
    </section>
  )
}

function Why() {
  return (
    <section className="section section--cream">
      <div className="container">
        <SectionHead eyebrow="Why Sultan House?" title="A partner you can rely on" />
        <div className="reasons">
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
  )
}

function Global() {
  return (
    <section className="panel-wrap">
      <div className="container">
        <div className="panel panel--deep global">
          <Reveal className="global__text">
            <p className="eyebrow eyebrow--light">Worldwide Reach</p>
            <h2 className="display display--light">From Pakistan <em>to the world.</em></h2>
            <p>For years we have shipped tobacco to manufacturers, processors and distributors across the globe. Our team handles documentation, fumigation, packing and freight — so your consignment arrives on time, every time.</p>
            <div className="regions">
              {regions.map((r) => <span key={r}>{r}</span>)}
            </div>
            <Link to="/exports" className="link-arrow link-arrow--light">How we export <span>→</span></Link>
          </Reveal>
          <Reveal className="globe" delay={150} aria-hidden="true">
            <svg viewBox="0 0 400 400">
              <defs>
                <radialGradient id="gl" cx="40%" cy="35%"><stop offset="0" stopColor="#4d6346" /><stop offset="1" stopColor="#1d2a1a" /></radialGradient>
              </defs>
              <circle cx="200" cy="200" r="170" fill="url(#gl)" stroke="rgba(216,217,188,.35)" />
              {[30, 70, 110, 150].map((rx) => <ellipse key={rx} cx="200" cy="200" rx={rx} ry="170" fill="none" stroke="rgba(216,217,188,.16)" />)}
              {[-120, -60, 0, 60, 120].map((y) => <ellipse key={y} cx="200" cy={200 + y} rx={Math.sqrt(170 * 170 - y * y)} ry="8" fill="none" stroke="rgba(216,217,188,.16)" />)}
              <g className="globe__routes" fill="none" stroke="#e8c980" strokeWidth="1.4" strokeDasharray="4 5">
                <path d="M248 182 Q 200 90 120 130" />
                <path d="M248 182 Q 300 110 330 160" />
                <path d="M248 182 Q 190 230 150 270" />
                <path d="M248 182 Q 290 260 300 290" />
                <path d="M248 182 Q 210 160 90 200" />
              </g>
              {[[120, 130], [330, 160], [150, 270], [300, 290], [90, 200]].map(([x, y], i) => (
                <circle key={i} cx={x} cy={y} r="4" fill="#fffcf2" className="globe__pin" style={{ animationDelay: `${i * .4}s` }} />
              ))}
              <circle cx="248" cy="182" r="7" fill="#e8c980" />
              <circle cx="248" cy="182" r="7" fill="none" stroke="#e8c980" className="globe__pulse" />
            </svg>
            <span className="globe__label">Islamabad, Pakistan</span>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section className="section section--cream">
      <div className="container faq">
        <Reveal className="faq__head">
          <p className="eyebrow">FAQ</p>
          <h2 className="display">Questions from <em>our buyers</em></h2>
          <p className="lead">Can't find what you're looking for? Our export team is happy to help.</p>
          <Link to="/contact" className="btn btn--green">Contact Us</Link>
        </Reveal>
        <div className="faq__list">
          {faqs.map((f, i) => (
            <Reveal key={f.q} className={`faq__item ${open === i ? 'is-open' : ''}`} delay={i * 60}>
              <button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                {f.q}<span className="faq__icon" />
              </button>
              <div className="faq__answer"><p>{f.a}</p></div>
            </Reveal>
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
      <Mission />
      <Offer />
      <ProductsPreview />
      <Why />
      <Global />
      <FAQ />
      <QuoteCTA />
    </>
  )
}
