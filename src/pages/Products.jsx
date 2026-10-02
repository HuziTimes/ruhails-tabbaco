import Reveal from '../components/Reveal.jsx'
import { PageHero, SectionHead, ProductCard, QuoteCTA } from '../components/Shared.jsx'
import { products } from '../data.js'

const specs = [
  { k: 'Forms', v: 'Whole leaf, lamina strips, scraps, cut rag, stems' },
  { k: 'Custom specs', v: 'Cut width, moisture, nicotine & sugar levels' },
  { k: 'Packing', v: 'Cartons (C48) & bales, as per buyer requirement' },
  { k: 'Quality', v: 'Graded, cleaned & pre-shipment inspected' },
  { k: 'Samples', v: 'Representative samples available on request' },
  { k: 'Volumes', v: 'From trial orders to full container loads' },
]

export default function Products() {
  return (
    <>
      <PageHero eyebrow="Our Products" title="Pure leaf & tobacco raw materials" text="Every grade and raw material a tobacco manufacturer needs — sourced, graded and prepared to your exact specification." image="FLUE CURED VIRGINIA TOBACCO.jpg" />

      <section className="section section--cream">
        <div className="container">
          <SectionHead eyebrow="Full Portfolio" title="Grades we export" text="Can't see what you need? We source all kinds of tobacco raw material on request." />
          <div className="products products--light">
            {products.map((p, i) => <ProductCard key={p.name} product={p} delay={(i % 4) * 100} />)}
          </div>
        </div>
      </section>

      <section className="panel-wrap">
        <div className="container">
          <div className="panel panel--sage specs">
            <Reveal>
              <p className="eyebrow">Made to Specification</p>
              <h2 className="display">Tailored to <em>your blend</em></h2>
              <p>Tobacco is prepared according to customer-defined specifications — so it arrives ready for your production line.</p>
            </Reveal>
            <dl className="specs__list">
              {specs.map((s, i) => (
                <Reveal key={s.k} className="specs__row" delay={i * 60}>
                  <dt>{s.k}</dt><dd>{s.v}</dd>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <QuoteCTA />
    </>
  )
}
