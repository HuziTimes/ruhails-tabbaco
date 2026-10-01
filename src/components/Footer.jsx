import { Link } from 'react-router-dom'
import { Leaf, Ornament } from './Logo.jsx'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__brand">
          <Leaf size={46} />
          <p className="footer__word">Sultan House</p>
          <Ornament />
          <p className="footer__tag">The Art of Fine Tobacco</p>
        </div>

        <div className="footer__grid">
          <div>
            <h4>Company</h4>
            <Link to="/about">Our Heritage</Link>
            <Link to="/sustainability">Sustainability</Link>
            <Link to="/contact">Careers</Link>
          </div>
          <div>
            <h4>Portfolio</h4>
            <Link to="/brands">Cigarettes</Link>
            <Link to="/brands">Slims</Link>
            <Link to="/brands">Fine Cut</Link>
          </div>
          <div>
            <h4>Contact</h4>
            <a href="mailto:info@yourdomain.com">info@yourdomain.com</a>
            <a href="tel:+000000000">+00 000 000 000</a>
            <span>Head Office, Your City</span>
          </div>
          <div>
            <h4>Follow</h4>
            <a href="#" aria-label="LinkedIn">LinkedIn</a>
            <a href="#" aria-label="Instagram">Instagram</a>
            <a href="#" aria-label="Facebook">Facebook</a>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Sultan House. All rights reserved.</span>
          <span><a href="#">Privacy Policy</a> · <a href="#">Terms of Use</a></span>
        </div>
      </div>
      <div className="warning">Warning: Smoking is injurious to health. This website is intended for adults of legal smoking age only.</div>
    </footer>
  )
}
