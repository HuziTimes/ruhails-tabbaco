import { Link } from 'react-router-dom'
import { Leaf, Ornament } from './Logo.jsx'
import { company } from '../data.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__brand">
          <Leaf size={46} />
          <p className="footer__word">Sultan House</p>
          <Ornament />
          <p className="footer__tag">Supplying premium tobacco to global markets</p>
        </div>

        <div className="footer__grid">
          <div>
            <h4>Head Office</h4>
            <span>{company.name}</span>
            {company.address.map((l) => <span key={l}>{l}</span>)}
            <a href={company.phoneHref}>{company.phone}</a>
          </div>
          <div>
            <h4>Contact</h4>
            {company.emails.map((e) => (
              <a key={e.value} href={`mailto:${e.value}`}><small>{e.label}:</small> {e.value}</a>
            ))}
          </div>
          <div>
            <h4>Company</h4>
            <Link to="/about">About Us</Link>
            <Link to="/products">Our Products</Link>
            <Link to="/exports">Global Exports</Link>
            <Link to="/about#team">Our Team</Link>
            <Link to="/contact">Get a Quote</Link>
          </div>
          <div>
            <h4>Follow Us</h4>
            <a href={company.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={company.facebook} target="_blank" rel="noreferrer">Facebook</a>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} {company.name}. All rights reserved.</span>
          <span>Trade enquiries only · Manufacturers, processors & distributors</span>
        </div>
      </div>
    </footer>
  )
}
