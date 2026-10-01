import { Link } from 'react-router-dom'
import { Leaf, Ornament } from '../components/Logo.jsx'
import Reveal, { Counter } from '../components/Reveal.jsx'
import { SectionHead, Pack } from '../components/Shared.jsx'
import { brands, stats, process, pillars, news } from '../data.js'

function Hero() {
  return (
    <section className="hero">
      <div className="hero__glow" />
      <div className="hero__particles" aria-hidden="true">
        {Array.from({ length: 18 }).map((_, i) => (
          <span key={i} style={{ left: `${(i * 37) % 100}%`, animationDelay: `${(i * 0.9) % 8}s`, animationDuration: `${9 + (i % 5) * 2}s` }} />
        ))}
      </div>
      <Leaf size={620} outline className="hero__leaf-bg" />
      <div className="container hero__inner">
        <div className="hero__emblem"><Leaf size={92} /></div>
        <p className="eyebrow hero__eyebrow">Established Heritage · Crafted Excellence</p>
        <h1 className="hero__title">
          <span className="hero__brand">Sultan House</span>
          <span className="hero__sub">The Art of Fine Tobacco</span>
        </h1>
        <Ornament />
        <p className="lead lead--light hero__lead">
          From sun-kissed fields to signature blends — every leaf we select carries a legacy of patience, mastery and uncompromising quality.
        </p>
        <div className="hero__actions">
          <Link to="/brands" className="btn btn--gold">Discover Our Brands</Link>
          <Link to="/about" className="btn btn--ghost">Our Heritage</Link>
        </div>
      </div>
      <a href="#intro" className="hero__scroll" aria-label="Scroll down"><span /></a>
    </section>
  )
}

function Intro() {
  return (
    <section id="intro" className="section section--cream">
      <div className="container intro">
        <Reveal className="intro__text">
          <p className="eyebrow">Welcome to Sultan House</p>
          <h2 className="display">Rooted in heritage,<br /><em>crafted for the connoisseur.</em></h2>
          <p>
            For more than three decades, Sultan House has devoted itself to a single pursuit: the perfection of tobacco. We partner directly with growers, cure each harvest with patience, and blend with the precision of true artisans.
          </p>
          <p>
            Today our portfolio is enjoyed by adult consumers across more than forty markets — yet every pack still carries the same promise our founders made: nothing less than the finest.
          </p>
          <Link to="/about" className="link-arrow">Read our story <span>→</span></Link>
        </Reveal>
        <Reveal className="intro__art" delay={150}>
          <div className="intro__frame">
            <div className="intro__frame-inner">
              <Leaf size={160} />
              <p className="intro__est">EST.</p>
              <p className="intro__year">1990</p>
            </div>
          </div>
        </Reveal>
      </div>
      <div className="container stats">
        {stats.map((s, i) => (
          <Reveal key={s.label} className="stat" delay={i * 100}>
            <span className="stat__value"><Counter value={s.value} suffix={s.suffix} /></span>
            <span className="stat__label">{s.label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function BrandShowcase() {
  return (
    <section className="section section--dark">
      <div className="container">
        <SectionHead light eyebrow="Our Portfolio" title="Signature Brands" text="A curated collection of blends, each with its own character — united by an unwavering standard of quality." />
        <div className="brand-row">
          {brands.slice(0, 4).map((b, i) => (
            <Reveal key={b.name} className="brand-card" delay={i * 120}>
              <Pack brand={b} />
              <h3>{b.name}</h3>
              <p>{b.line}</p>
            </Reveal>
          ))}
        </div>
        <div className="center"><Link to="/brands" className="btn btn--outline">View Full Portfolio</Link></div>
      </div>
    </section>
  )
}

function Craft() {
  return (
    <section className="section section--cream craft">
      <div className="container">
        <SectionHead eyebrow="Our Craft" title="From Seed to Signature" text="Four disciplines, perfected over generations, define every Sultan House blend." />
        <div className="craft__grid">
          {process.map((p, i) => (
            <Reveal key={p.title} className="craft__step" delay={i * 120}>
              <span className="craft__num">0{i + 1}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Quote() {
  return (
    <section className="quote">
      <div className="quote__pattern" />
      <Reveal className="container quote__inner">
        <Leaf size={44} />
        <blockquote>“Quality is never an accident. It is the patient result of a thousand careful decisions, made one leaf at a time.”</blockquote>
        <Ornament />
        <cite>The Founders of Sultan House</cite>
      </Reveal>
    </section>
  )
}

function Sustain() {
  return (
    <section className="section section--cream2">
      <div className="container">
        <SectionHead eyebrow="Responsibility" title="Growing a Better Tomorrow" text="We believe true excellence must be sustainable — for our growers, our planet and the communities we serve." />
        <div className="pillars">
          {pillars.map((p, i) => (
            <Reveal key={p.title} className="pillar" delay={i * 120}>
              <div className="pillar__icon"><Leaf size={34} /></div>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </Reveal>
          ))}
        </div>
        <div className="center"><Link to="/sustainability" className="link-arrow">Our sustainability commitments <span>→</span></Link></div>
      </div>
    </section>
  )
}

function News() {
  return (
    <section className="section section--cream">
      <div className="container">
        <SectionHead eyebrow="Newsroom" title="Latest from Sultan House" />
        <div className="news">
          {news.map((n, i) => (
            <Reveal key={n.title} as="article" className="news__card" delay={i * 120}>
              <div className="news__media"><Leaf size={70} outline /></div>
              <div className="news__body">
                <p className="news__meta"><span>{n.tag}</span>{n.date}</p>
                <h3>{n.title}</h3>
                <a href="#" className="link-arrow">Read more <span>→</span></a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="cta">
      <div className="hero__glow" />
      <Reveal className="container cta__inner">
        <p className="eyebrow">Distribution & Partnerships</p>
        <h2 className="display display--light">Bring Sultan House to your market</h2>
        <p className="lead lead--light">We are always seeking distinguished distribution partners who share our passion for quality.</p>
        <Link to="/contact" className="btn btn--gold">Become a Partner</Link>
      </Reveal>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <BrandShowcase />
      <Craft />
      <Quote />
      <Sustain />
      <News />
      <CTA />
    </>
  )
}
