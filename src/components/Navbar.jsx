import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Logo from './Logo.jsx'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'Our Heritage' },
  { to: '/brands', label: 'Brands' },
  { to: '/sustainability', label: 'Sustainability' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <header className={`nav ${scrolled ? 'nav--solid' : ''} ${open ? 'nav--open' : ''}`}>
      <div className="container nav__inner">
        <Link to="/" aria-label="Sultan House home"><Logo compact /></Link>
        <nav className="nav__links">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end className="nav__link">{l.label}</NavLink>
          ))}
        </nav>
        <Link to="/contact" className="btn btn--outline nav__cta">Partner With Us</Link>
        <button className="nav__burger" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
      </div>
      <div className="nav__drawer">
        {links.map((l) => (
          <NavLink key={l.to} to={l.to} end className="nav__drawer-link">{l.label}</NavLink>
        ))}
      </div>
    </header>
  )
}
