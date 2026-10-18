import { Link } from 'react-router-dom'
import { Leaf } from './Logo.jsx'
import { company } from '../data.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__top">
          <div className="footer__intro">
            <Leaf size={40} />
            <p className="footer__claim">Supplying premium tobacco<br />to global markets.</p>
            <Link to="/contact" className="btn btn--gold">Request a Quote</Link>
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
                <a key={e.value} href={`mailto:${e.value}`}><small>{e.label}</small>{e.value}</a>
              ))}
            </div>
            <div>
              <h4>Explore</h4>
              <Link to="/about">About Us</Link>
              <Link to="/products">Products</Link>
              <Link to="/exports">Global Exports</Link>
              <Link to="/contact">Get a Quote</Link>
            </div>
            <div>
              <h4>Follow</h4>
              <a href={company.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a href={company.facebook} target="_blank" rel="noreferrer">Facebook ↗</a>
            </div>
          </div>
        </div>
        <p className="footer__giant" aria-hidden="true">Sultan House</p>
        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} {company.name}</span>
          <span>Trade enquiries only — manufacturers, processors & distributors</span>
        </div>
      </div>
    </footer>
  )
}
