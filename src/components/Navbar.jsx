import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Logo from './Logo.jsx'
import { company } from '../data.js'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/products', label: 'Products' },
  { to: '/exports', label: 'Exports' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : '' }, [open])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''} ${open ? 'nav--open' : ''}`}>
      <div className="nav__inner">
        <Link to="/" aria-label="Sultan House home" className="nav__logo"><Logo compact /></Link>
        <nav className="nav__links">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end className="nav__link">{l.label}</NavLink>
          ))}
        </nav>
        <div className="nav__right">
          <a href={`mailto:${company.emails[0].value}`} className="nav__mail">{company.emails[0].value}</a>
          <Link to="/contact" className="btn btn--dark btn--sm">Get a Quote</Link>
          <button className="nav__burger" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
            <span /><span />
          </button>
        </div>
      </div>
      <div className="nav__drawer">
        {links.map((l, i) => (
          <NavLink key={l.to} to={l.to} end className="nav__drawer-link" style={{ transitionDelay: `${open ? 80 + i * 50 : 0}ms` }}>
            <small>0{i + 1}</small>{l.label}
          </NavLink>
        ))}
      </div>
    </header>
  )
}
