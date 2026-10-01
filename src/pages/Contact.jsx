import { useState } from 'react'
import Reveal from '../components/Reveal.jsx'
import { PageHero } from '../components/Shared.jsx'

export default function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <>
      <PageHero eyebrow="Get in Touch" title="Contact Sultan House" text="For distribution enquiries, partnerships or general questions, our team will be delighted to assist." />
      <section className="section section--cream">
        <div className="container contact">
          <Reveal className="contact__info">
            <p className="eyebrow">Head Office</p>
            <h2 className="display">Let's start a conversation.</h2>
            <div className="contact__item"><h4>Address</h4><p>Sultan House Head Office<br />Street Address, City, Country</p></div>
            <div className="contact__item"><h4>Phone</h4><p><a href="tel:+000000000">+00 000 000 000</a></p></div>
            <div className="contact__item"><h4>Email</h4><p><a href="mailto:info@yourdomain.com">info@yourdomain.com</a></p></div>
            <div className="contact__item"><h4>Hours</h4><p>Monday – Friday, 9:00 – 18:00</p></div>
          </Reveal>
          <Reveal className="contact__form-wrap" delay={150}>
            {sent ? (
              <div className="contact__thanks">
                <h3 className="display">Thank you.</h3>
                <p>Your message has been received. A member of our team will be in touch shortly.</p>
              </div>
            ) : (
              <form className="form" onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
                <div className="form__row">
                  <label>Full Name<input required name="name" /></label>
                  <label>Company<input name="company" /></label>
                </div>
                <div className="form__row">
                  <label>Email<input required type="email" name="email" /></label>
                  <label>Country<input name="country" /></label>
                </div>
                <label>Enquiry Type
                  <select name="type" defaultValue="Distribution">
                    <option>Distribution</option>
                    <option>Partnership</option>
                    <option>Media</option>
                    <option>Careers</option>
                    <option>General</option>
                  </select>
                </label>
                <label>Message<textarea required rows="5" name="message" /></label>
                <label className="form__check"><input type="checkbox" required /> I confirm I am of legal smoking age.</label>
                <button className="btn btn--gold" type="submit">Send Message</button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  )
}
