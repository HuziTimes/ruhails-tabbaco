import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import { PageHero } from '../components/Shared.jsx'
import { company, products } from '../data.js'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [params] = useSearchParams()
  const preset = params.get('product') || ''

  return (
    <>
      <PageHero eyebrow="Get a Quote" title="Let's work together" text="Our team is here to provide transparent pricing and expert guidance. Tell us your requirements and we'll prepare a quote tailored to you." image="tbc 4.jpg" />
      <section className="section section--cream contours">
        <div className="container contact">
          <Reveal className="contact__info">
            <p className="eyebrow">Head Office</p>
            <h2 className="display">Sultan House <em>Islamabad</em></h2>
            <div className="contact__item"><h4>Address</h4><p>{company.name}<br />{company.address.join(', ')}</p></div>
            <div className="contact__item"><h4>Phone / WhatsApp</h4><p><a href={company.phoneHref}>{company.phone}</a></p></div>
            {company.emails.map((e) => (
              <div className="contact__item" key={e.value}><h4>{e.label}</h4><p><a href={`mailto:${e.value}`}>{e.value}</a></p></div>
            ))}
          </Reveal>
          <Reveal className="contact__form-wrap" delay={150}>
            {sent ? (
              <div className="contact__thanks">
                <h3 className="display">Thank you.</h3>
                <p>Your enquiry has been received. Our export team will be in touch shortly.</p>
              </div>
            ) : (
              <form className="form" onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
                <h3 className="form__title">Request a quotation</h3>
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
                  <label>Quantity (kg / containers)<input name="quantity" /></label>
                </div>
                <label>Destination Country / Port<input name="destination" /></label>
                <label>Specifications & Message<textarea required rows="4" name="message" placeholder="Grade, cut, moisture, packing, delivery timeline…" /></label>
                <button className="btn btn--green" type="submit">Send Enquiry</button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  )
}
