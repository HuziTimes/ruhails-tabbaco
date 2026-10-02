import { useEffect, useRef, useState } from 'react'

export function useInView(options = { threshold: 0.15 }) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); io.disconnect() }
    }, options)
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return [ref, inView]
}

export default function Reveal({ as: Tag = 'div', delay = 0, className = '', style, children, ...rest }) {
  const [ref, inView] = useInView()
  return (
    <Tag ref={ref} className={`reveal ${inView ? 'in' : ''} ${className}`} style={{ ...style, transitionDelay: `${delay}ms` }} {...rest}>
      {children}
    </Tag>
  )
}

export function Counter({ value, suffix = '' }) {
  const [ref, inView] = useInView()
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!inView) return
    let raf, start
    const tick = (t) => {
      start ??= t
      const p = Math.min((t - start) / 1800, 1)
      setN(Math.round(value * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value])
  return <span ref={ref}>{n.toLocaleString()}{suffix}</span>
}
