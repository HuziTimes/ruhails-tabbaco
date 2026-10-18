import { useState } from 'react'
import Reveal from '../components/Reveal.jsx'
import { PageHero, SectionHead, ProductCard, Marquee, QuoteCTA } from '../components/Shared.jsx'
import { products } from '../data.js'

const specs = [
  { k: 'Forms', v: 'Whole leaf, lamina strips, scraps, cut rag, stems' },
  { k: 'Custom specs', v: 'Cut width, moisture, nicotine & sugar levels' },
  { k: 'Packing', v: 'Cartons & bales, as per buyer requirement' },
  { k: 'Quality', v: 'Graded, cleaned & pre-shipment inspected' },
  { k: 'Samples', v: 'Representative samples available on request' },
  { k: 'Volumes', v: 'From trial orders to full container loads' },
]

const filters = ['All', 'Leaf', 'Processed']
const isProcessed = (p) => /Processed|Buyer/.test(p.tag)

export default function Products() {
  const [f, setF] = useState('All')
  const list = products.filter((p) => f === 'All' || (f === 'Processed' ? isProcessed(p) : !isProcessed(p)))

  return (
    <>
      <PageHero label="Our Products" title="Leaf & raw materials" text="Every grade and raw material a tobacco manufacturer needs — sourced, graded and prepared to your exact specification." image="FLUE CURED VIRGINIA TOBACCO.jpg" tags={['Virginia FCV', 'Burley', 'Rustica', 'Shredded', 'Expanded Stem']} />

      <section className="section">
        <div className="wrap">
          <SectionHead label="Full portfolio" title="Grades we export" text="Can't see what you need? We source all kinds of tobacco raw material on request."
            action={<div className="filters">{filters.map((x) => <button key={x} className={`filter ${f === x ? 'is-active' : ''}`} onClick={() => setF(x)}>{x}<sup>{x === 'All' ? products.length : products.filter((p) => (x === 'Processed') === isProcessed(p)).length}</sup></button>)}</div>} />
          <div className="pgrid">
            {list.map((p, i) => <ProductCard key={p.name} product={p} index={products.indexOf(p)} delay={(i % 3) * 80} />)}
          </div>
        </div>
      </section>

      <Marquee dark items={['Made to specification', 'Cut', 'Moisture', 'Cleanliness', 'Consistency', 'Packing']} />

      <section className="section">
        <div className="wrap split">
          <Reveal>
            <p className="label">Made to specification</p>
            <h2 className="h-xl">Tailored to your blend</h2>
          </Reveal>
          <dl className="specs">
            {specs.map((s, i) => (
              <Reveal key={s.k} className="specs__row" delay={i * 50}>
                <dt>{s.k}</dt><dd>{s.v}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      <QuoteCTA />
    </>
  )
}
