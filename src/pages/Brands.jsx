import { useState } from 'react'
import Reveal from '../components/Reveal.jsx'
import { PageHero, Pack } from '../components/Shared.jsx'
import { brands } from '../data.js'

const cats = ['All', ...new Set(brands.map((b) => b.category))]

export default function Brands() {
  const [cat, setCat] = useState('All')
  const list = cat === 'All' ? brands : brands.filter((b) => b.category === cat)

  return (
    <>
      <PageHero eyebrow="Our Portfolio" title="Signature Brands" text="Each blend tells its own story — composed from the finest Virginia, Burley and Oriental leaf." />
      <section className="section section--dark">
        <div className="container">
          <div className="filters" role="tablist">
            {cats.map((c) => (
              <button key={c} role="tab" aria-selected={cat === c} className={`filter ${cat === c ? 'is-active' : ''}`} onClick={() => setCat(c)}>{c}</button>
            ))}
          </div>
          <div className="brand-grid">
            {list.map((b, i) => (
              <Reveal key={b.name} className="brand-tile" delay={(i % 3) * 120}>
                <div className="brand-tile__stage"><Pack brand={b} /></div>
                <div className="brand-tile__body">
                  <p className="eyebrow">{b.category}</p>
                  <h3>{b.name}</h3>
                  <p className="brand-tile__line">{b.line}</p>
                  <p>{b.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="disclaimer">Product information is provided for adult trade partners and consumers of legal smoking age only.</p>
        </div>
      </section>
    </>
  )
}
