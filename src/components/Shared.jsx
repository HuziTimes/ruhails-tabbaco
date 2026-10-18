import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Leaf } from './Logo.jsx'
import Reveal from './Reveal.jsx'
import { img, products } from '../data.js'

export function SectionHead({ label, title, text, action, light = false }) {
  return (
    <Reveal className={`shead ${light ? 'shead--light' : ''}`}>
      <div className="shead__left">
        {label && <p className="label">{label}</p>}
        <h2 className="h-xl">{title}</h2>
      </div>
      <div className="shead__right">
        {text && <p className="shead__text">{text}</p>}
        {action}
      </div>
    </Reveal>
  )
}

export function PageHero({ label, title, text, image = 'tbc 2.jpg', tags = [] }) {
  return (
    <section className="phero">
      <div className="wrap">
        <div className="phero__head">
          <p className="label">{label}</p>
          <h1 className="h-hero">{title}</h1>
          <div className="phero__meta">
            {text && <p>{text}</p>}
            {tags.length > 0 && <div className="tags">{tags.map((t) => <span key={t} className="tag">{t}</span>)}</div>}
          </div>
        </div>
        <div className="phero__media">
          <img src={img(image)} alt="" />
        </div>
      </div>
    </section>
  )
}

export function Marquee({ items, dark = false }) {
  const row = [...items, ...items]
  return (
    <div className={`marquee ${dark ? 'marquee--dark' : ''}`} aria-hidden="true">
      <div className="marquee__track">
        {row.map((t, i) => (
          <span key={i} className="marquee__item">{t}<Leaf size={22} /></span>
        ))}
      </div>
    </div>
  )
}

export function ProductCard({ product, index, delay = 0 }) {
  return (
    <Reveal as="article" className="pcard" delay={delay}>
      <Link to={`/contact?product=${encodeURIComponent(product.name)}`} className="pcard__media">
        <img src={img(product.image)} alt={product.name} loading="lazy" />
        <span className="pcard__cta">Get a quote ↗</span>
      </Link>
      <div className="pcard__info">
        <div>
          <h3>{product.name}</h3>
          <p>{product.text}</p>
        </div>
        {index != null && <span className="pcard__index">{String(index + 1).padStart(2, '0')}</span>}
      </div>
      <div className="tags"><span className="tag">{product.tag}</span><span className="tag tag--line">Export Ready</span></div>
    </Reveal>
  )
}

export function Collections({ title = 'Collections', text = 'Explore a wide variety of tobacco grades and raw materials.' }) {
  const track = useRef(null)
  const move = (dir) => track.current?.scrollBy({ left: dir * track.current.clientWidth * 0.8, behavior: 'smooth' })
  return (
    <section className="collections">
      <div className="wrap collections__grid">
        <Reveal className="collections__intro">
          <p className="label">Our Products</p>
          <h2 className="h-xl">{title}</h2>
          <p className="collections__text">{text}</p>
          <div className="collections__ctrl">
            <button onClick={() => move(-1)} aria-label="Previous">←</button>
            <button onClick={() => move(1)} aria-label="Next">→</button>
          </div>
          <Link to="/products" className="btn btn--dark">View Collections</Link>
        </Reveal>
        <div className="collections__track" ref={track}>
          {products.map((p) => (
            <Link key={p.name} to={`/contact?product=${encodeURIComponent(p.name)}`} className="ccard">
              <div className="ccard__media">
                <img src={img(p.image)} alt={p.name} loading="lazy" />
              </div>
              <h3>{p.name}</h3>
              <div className="ccard__meta">
                <span className="avatars"><i><Leaf size={12} /></i><i><Leaf size={12} /></i><i><Leaf size={12} /></i></span>
                <span>{p.tag}</span>
                <span className="ccard__plus">Quote ↗</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export function QuoteCTA() {
  return (
    <section className="cta">
      <div className="wrap">
        <Reveal className="cta__box" style={{ '--img': `url("${img('pexels hero.jpg')}")` }}>
          <p className="label label--light">Let's work together</p>
          <h2 className="h-hero">Need a reliable<br />tobacco supplier?</h2>
          <div className="cta__row">
            <p>Transparent pricing, samples and expert guidance — tailored to your exact specifications.</p>
            <div className="cta__actions">
              <Link to="/contact" className="btn btn--gold">Request a Quote</Link>
              <Link to="/products" className="btn btn--ghost">Browse Products</Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
