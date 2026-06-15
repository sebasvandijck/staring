'use client'

import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { href: '#reviews', nl: 'Reviews', en: 'Reviews' },
  { href: '#services', nl: 'Services', en: 'Services' },
  { href: '#prijzen', nl: 'Prijzen', en: 'Pricing' },
  { href: '#contact', nl: 'Contact', en: 'Contact' },
]

export default function Nav() {
  const [lang, setLang] = useState<'nl' | 'en'>('nl')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const switchLang = (l: 'nl' | 'en') => {
    setLang(l)
    window.dispatchEvent(new CustomEvent('langchange', { detail: l }))
  }

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 3rem',
      height: '68px',
      background: scrolled ? 'rgba(245,239,228,0.98)' : 'rgba(245,239,228,0.95)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(30,51,37,0.06)',
      transition: 'background 0.3s',
    }}>
      <a href="#" style={{ flexShrink: 0, textDecoration: 'none' }}>
        <span style={{ fontFamily: 'var(--font-playfair), serif', fontSize: '1.05rem', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--green)' }}>Staring</span>
      </a>

      <div style={{ display: 'flex', gap: '2.25rem' }} className="nav-links">
        {NAV_LINKS.map(link => (
          <a key={link.href} href={link.href} style={{
            fontFamily: 'var(--font-inter), sans-serif',
            fontSize: '0.8rem', fontWeight: 400,
            color: 'var(--text-muted)', textDecoration: 'none',
            letterSpacing: '0.03em', transition: 'color 0.15s',
          }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--green)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
          >
            {lang === 'nl' ? link.nl : link.en}
          </a>
        ))}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexShrink: 0 }}>
        <div style={{ display: 'flex', gap: '1px', background: 'var(--cream-dark)', borderRadius: '2px', padding: '2px' }}>
          {(['nl', 'en'] as const).map(l => (
            <button key={l} onClick={() => switchLang(l)} style={{
              fontFamily: 'var(--font-inter), sans-serif',
              fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.1em',
              padding: '4px 9px', border: 'none', borderRadius: '2px',
              background: lang === l ? 'var(--green)' : 'transparent',
              color: lang === l ? 'var(--cream)' : 'var(--text-muted)',
              cursor: 'pointer', transition: 'all 0.15s',
            }}>
              {l.toUpperCase()}
            </button>
          ))}
        </div>
        <a href="tel:0207750448" style={{
          fontFamily: 'var(--font-inter), sans-serif',
          fontSize: '0.78rem', fontWeight: 500, letterSpacing: '0.05em',
          color: 'var(--cream)', background: 'var(--green)',
          padding: '0.55rem 1.3rem', borderRadius: '2px',
          textDecoration: 'none',
        }}>
          {lang === 'nl' ? 'Bel ons' : 'Call us'}
        </a>
      </div>
    </nav>
  )
}