import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Logo from './Logo.jsx'
import { company } from '../data.js'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/products', label: 'Products' },
  { to: '/exports', label: 'Global Exports' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <>
      <div className="topbar">
        <div className="container topbar__inner">
          <span>Exporting premium Pakistani tobacco & raw materials worldwide</span>
          <a href={`mailto:${company.emails[0].value}`}>{company.emails[0].value}</a>
        </div>
      </div>
      <header className={`nav ${scrolled ? 'nav--solid' : ''} ${open ? 'nav--open' : ''}`}>
        <div className="container nav__inner">
          <Link to="/" aria-label="Sultan House home"><Logo compact /></Link>
          <nav className="nav__links">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} end className="nav__link">{l.label}</NavLink>
            ))}
          </nav>
          <Link to="/contact" className="btn btn--cream nav__cta">Get a Quote</Link>
          <button className="nav__burger" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
            <span /><span /><span />
          </button>
        </div>
        <div className="nav__drawer">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end className="nav__drawer-link">{l.label}</NavLink>
          ))}
          <Link to="/contact" className="btn btn--gold">Get a Quote</Link>
        </div>
      </header>
    </>
  )
}
