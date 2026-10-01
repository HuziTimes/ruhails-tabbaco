import { useEffect, useState } from 'react'
import { Leaf, Ornament } from './Logo.jsx'

const KEY = 'sh-age-verified'

export default function AgeGate() {
  const [show, setShow] = useState(false)
  const [denied, setDenied] = useState(false)

  useEffect(() => {
    let ok = false
    try { ok = localStorage.getItem(KEY) === '1' } catch {}
    setShow(!ok)
  }, [])

  useEffect(() => {
    document.body.style.overflow = show ? 'hidden' : ''
  }, [show])

  if (!show) return null

  const accept = () => {
    try { localStorage.setItem(KEY, '1') } catch {}
    setShow(false)
  }

  return (
    <div className="agegate" role="dialog" aria-modal="true" aria-labelledby="agegate-title">
      <div className="agegate__card">
        <Leaf size={56} />
        <p className="agegate__brand">Sultan House</p>
        <Ornament />
        {denied ? (
          <p className="agegate__text">We're sorry — this website is intended for adults of legal smoking age only.</p>
        ) : (
          <>
            <h2 id="agegate-title">Are you of legal smoking age?</h2>
            <p className="agegate__text">This website contains information about tobacco products and is intended for adults aged 18 or over (or the legal age in your country).</p>
            <div className="agegate__actions">
              <button className="btn btn--gold" onClick={accept}>Yes, I am</button>
              <button className="btn btn--ghost" onClick={() => setDenied(true)}>No, I'm not</button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
