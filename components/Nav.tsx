'use client'

import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { href: '#reviews', nl: 'Reviews', en: 'Reviews' },
  { href: '#services', nl: 'Services', en: 'Services' },
  { href: '#prijzen', nl: 'Prijzen', en: 'Pricing' },
  { href: '#contact', nl: 'Contact', en: 'Contact' },
]Q

export default function Nav() {
  const [lang, setLang] = useState<'nl' | 'en'>('nl')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {Q
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const switchLang = (l: 'nl' | 'en') => {
    setLang(l)
    window.dispatchEvent(new CustomEvent('langchange', { detail: l }))
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 2rem',
        height: '64px',
        background: scrolled || menuOpen ? 'rgba(245,239,228,0.98)' : 'rgba(245,239,228,0.95)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(30,51,37,0.06)',
        transition: 'background 0.3s',
      }}>
        {/* Logo */}
        <a href="#" style={{ flexShrink: 0, textDecoration: 'none' }}>
          <span style={{ fontFamily: 'var(--font-playfair), serif', fontSize: '1.05rem', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--green)' }}>Staring</span>
        </a>

        {/* Desktop links */}
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

        {/* Right: lang + cta + hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexShrink: 0 }}>
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

          <a href="tel:0646635556" className="nav-cta" style={{
            fontFamily: 'var(--font-inter), sans-serif',
            fontSize: '0.78rem', fontWeight: 500, letterSpacing: '0.05em',
            color: 'var(--cream)', background: 'var(--green)',
            padding: '0.55rem 1.3rem', borderRadius: '2px',
            textDecoration: 'none',
          }}>
            {lang === 'nl' ? 'Bel ons' : 'Call us'}
          </a>

          {/* Hamburger — mobile only */}
          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: 'none',
              flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
              gap: '5px', width: '36px', height: '36px',
              background: 'transparent', border: 'none', cursor: 'pointer',
              padding: '4px',
            }}
            aria-label="Menu"
          >
            <span style={{ display: 'block', width: '22px', height: '1.5px', background: 'var(--green)', transition: 'all 0.2s', transform: menuOpen ? 'rotate(45deg) translateY(6.5px)' : 'none' }} />
            <span style={{ display: 'block', width: '22px', height: '1.5px', background: 'var(--green)', transition: 'all 0.2s', opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: 'block', width: '22px', height: '1.5px', background: 'var(--green)', transition: 'all 0.2s', transform: menuOpen ? 'rotate(-45deg) translateY(-6.5px)' : 'none' }} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: '64px', left: 0, right: 0, zIndex: 199,
          background: 'rgba(245,239,228,0.98)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(30,51,37,0.06)',
          padding: '1rem 2rem 1.5rem',
          display: 'flex', flexDirection: 'column', gap: '0',
        }}>
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              style={{
                fontFamily: 'var(--font-inter), sans-serif',
                fontSize: '1rem', fontWeight: 400,
                color: 'var(--text)', textDecoration: 'none',
                padding: '1rem 0',
                borderBottom: '1px solid var(--cream-dark)',
                letterSpacing: '0.02em',
              }}
            >
              {lang === 'nl' ? link.nl : link.en}
            </a>
          ))}
          <a
            href="tel:0646635556"
            onClick={closeMenu}
            style={{
              marginTop: '1rem',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '0.9rem', background: 'var(--green)', color: 'var(--cream)',
              textDecoration: 'none', borderRadius: '2px',
              fontFamily: 'var(--font-inter), sans-serif',
              fontSize: '0.9rem', fontWeight: 500,
            }}
          >
            {lang === 'nl' ? '📞 Bel direct — 06 466 355 56' : '📞 Call now — 06 466 355 56'}
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 700px) {
          .nav-links { display: none !important; }
          .nav-cta { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  )
}
