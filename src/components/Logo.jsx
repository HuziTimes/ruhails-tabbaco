import { useId } from 'react'

export function Leaf({ size = 48, className = '', outline = false }) {
  const id = useId().replace(/:/g, '')
  return (
    <svg className={className} width={size} height={size * 1.2} viewBox="0 0 100 120" aria-hidden="true">
      <defs>
        <linearGradient id={`lg${id}`} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#A9782C" />
          <stop offset=".5" stopColor="#D4A44E" />
          <stop offset="1" stopColor="#F0D592" />
        </linearGradient>
      </defs>
      <path
        d="M46 112C18 96 6 60 30 32 46 14 70 6 94 2c-2 22 2 50-12 74-10 18-22 30-36 36z"
        fill={outline ? 'none' : `url(#lg${id})`}
        stroke={outline ? `url(#lg${id})` : 'none'}
        strokeWidth={outline ? 0.6 : 0}
      />
      <g stroke={outline ? `url(#lg${id})` : '#fff'} strokeWidth={outline ? 0.5 : 1.6} fill="none" strokeLinecap="round" opacity={outline ? 1 : 0.9}>
        <path d="M44 116Q60 64 92 5" strokeWidth={outline ? 0.7 : 2.2} />
        <path d="M54 82Q40 76 30 64M60 66Q46 58 38 44M67 50Q56 40 50 28M75 34Q68 24 66 16" />
        <path d="M56 78Q70 74 78 62M63 62Q76 56 84 44M71 46Q82 38 88 26" />
      </g>
    </svg>
  )
}

export function Ornament({ className = '' }) {
  return (
    <div className={`ornament ${className}`} aria-hidden="true">
      <span className="line" />
      <span className="dots">• • • ◆ • • •</span>
      <span className="line" />
    </div>
  )
}

export default function Logo({ compact = false }) {
  return (
    <span className={`logo ${compact ? 'logo--compact' : ''}`}>
      <Leaf size={compact ? 26 : 34} />
      <span className="logo__word">Sultan House</span>
    </span>
  )
}
