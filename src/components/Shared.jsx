import { Link } from 'react-router-dom'
import { Leaf, Ornament } from './Logo.jsx'
import Reveal from './Reveal.jsx'
import { img } from '../data.js'

export function SectionHead({ eyebrow, title, text, light = false, align = 'center' }) {
  return (
    <Reveal className={`section-head section-head--${align} ${light ? 'section-head--light' : ''}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="display">{title}</h2>
      {align === 'center' && <Ornament />}
      {text && <p className="lead">{text}</p>}
    </Reveal>
  )
}

export function PageHero({ eyebrow, title, text, image = 'tbc 2.jpg' }) {
  return (
    <section className="page-hero-wrap">
      <div className="page-hero" style={{ '--bg': `url("${img(image)}")` }}>
        <Leaf size={380} outline className="page-hero__leaf" />
        <div className="page-hero__inner">
          <p className="eyebrow eyebrow--light">{eyebrow}</p>
          <h1 className="display display--xl">{title}</h1>
          <Ornament />
          {text && <p className="lead lead--light">{text}</p>}
        </div>
      </div>
    </section>
  )
}

export function ProductCard({ product, delay = 0 }) {
  return (
    <Reveal as="article" className="product" delay={delay}>
      <div className="product__media">
        <img src={img(product.image)} alt={product.name} loading="lazy" />
        <span className="product__tag">{product.tag}</span>
      </div>
      <div className="product__body">
        <h3>{product.name}</h3>
        <p>{product.text}</p>
        <Link to={`/contact?product=${encodeURIComponent(product.name)}`} className="link-arrow">Get a quote <span>→</span></Link>
      </div>
    </Reveal>
  )
}

export function QuoteCTA() {
  return (
    <section className="cta-wrap">
      <div className="container">
        <Reveal className="cta" style={{ '--bg': `url("${img('pexels hero.jpg')}")` }}>
          <Leaf size={54} />
          <p className="eyebrow eyebrow--light">Let's work together</p>
          <h2 className="display display--light">Looking for a reliable tobacco supplier?</h2>
          <p className="lead lead--light">Our export team provides transparent pricing, samples and expert guidance tailored to your exact specifications.</p>
          <div className="cta__actions">
            <Link to="/contact" className="btn btn--gold">Request a Quote</Link>
            <Link to="/products" className="btn btn--ghost">Browse Products</Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
