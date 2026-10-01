import { Leaf, Ornament } from './Logo.jsx'
import Reveal from './Reveal.jsx'

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

export function PageHero({ eyebrow, title, text }) {
  return (
    <section className="page-hero">
      <div className="page-hero__glow" />
      <Leaf size={420} outline className="page-hero__leaf" />
      <div className="container page-hero__inner">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="display display--xl">{title}</h1>
        <Ornament />
        {text && <p className="lead lead--light">{text}</p>}
      </div>
    </section>
  )
}

export function Pack({ brand }) {
  const [a, b] = brand.tone
  return (
    <div className={`pack ${brand.light ? 'pack--light' : ''}`} style={{ '--p1': a, '--p2': b, '--pa': brand.accent }}>
      <div className="pack__lid" />
      <div className="pack__frame">
        <Leaf size={30} />
        <span className="pack__house">Sultan House</span>
        <span className="pack__name">{brand.name}</span>
        <span className="pack__rule" />
        <span className="pack__line">{brand.line}</span>
      </div>
      <div className="pack__shine" />
    </div>
  )
}
