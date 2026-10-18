import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import { company, products } from '../data.js'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [params] = useSearchParams()
  const preset = params.get('product') || ''

  return (
    <section className="contact">
      <div className="wrap">
        <div className="phero__head">
          <p className="label">Get a Quote</p>
          <h1 className="h-hero">Let's work together</h1>
          <div className="phero__meta"><p>Our team is here to provide transparent pricing and expert guidance. Tell us your requirements and we'll prepare a quote tailored to you.</p></div>
        </div>

        <div className="contact__grid">
          <Reveal className="contact__info">
            <div className="contact__item"><h4>Head Office</h4><p>{company.name}<br />{company.address.join(', ')}</p></div>
            <div className="contact__item"><h4>Phone / WhatsApp</h4><p><a href={company.phoneHref}>{company.phone}</a></p></div>
            {company.emails.map((e) => (
              <div className="contact__item" key={e.value}><h4>{e.label}</h4><p><a href={`mailto:${e.value}`}>{e.value} ↗</a></p></div>
            ))}
          </Reveal>
          <Reveal className="contact__form" delay={120}>
            {sent ? (
              <div className="contact__thanks">
                <h3 className="h-lg">Thank you.</h3>
                <p>Your enquiry has been received. Our export team will be in touch shortly.</p>
              </div>
            ) : (
              <form className="form" onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
                <div className="form__row">
                  <label>Full Name<input required name="name" /></label>
                  <label>Company<input required name="company" /></label>
                </div>
                <div className="form__row">
                  <label>Email<input required type="email" name="email" /></label>
                  <label>Phone<input type="tel" name="phone" /></label>
                </div>
                <div className="form__row">
                  <label>Product
                    <select name="product" defaultValue={preset}>
                      <option value="">Select a product</option>
                      {products.map((p) => <option key={p.name}>{p.name}</option>)}
                      <option>Other raw material</option>
                    </select>
                  </label>
                  <label>Quantity<input name="quantity" placeholder="kg / containers" /></label>
                </div>
                <label>Destination Country / Port<input name="destination" /></label>
                <label>Specifications & Message<textarea required rows="4" name="message" placeholder="Grade, cut, moisture, packing, timeline…" /></label>
                <button className="btn btn--dark" type="submit">Send Enquiry ↗</button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
