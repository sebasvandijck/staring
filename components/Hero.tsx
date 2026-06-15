'use client'

import Image from 'next/image'
import { useLang } from './useLang'
import { t } from '@/lib/translations'

export default function Hero() {
  const lang = useLang()

  return (
    <section style={{
      position: 'relative',
      height: '100vh', minHeight: '600px',
      display: 'flex', alignItems: 'flex-end',
      overflow: 'hidden',
    }}>
      {/* Background image */}
      <Image
        src="/images/winkel.png"
        alt="Staring Kledingreparatie & Stomerij, Amsterdam"
        fill
        priority
        style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
        sizes="100vw"
      />

      {/* Overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `
          linear-gradient(to top, rgba(8,16,10,0.96) 0%, rgba(8,16,10,0.72) 35%, rgba(8,16,10,0.40) 65%, rgba(8,16,10,0.18) 100%),
          linear-gradient(to left, rgba(8,16,10,0.65) 0%, rgba(8,16,10,0.1) 60%, transparent 100%)
        `,
      }} />

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 2,
        width: '100%', padding: '0 3rem 5rem',
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: '4rem', alignItems: 'end',
      }}
        className="hero-content"
      >
        {/* Left: title */}
        <div style={{ maxWidth: '600px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.75rem' }}>
            <span className="gold-line" />
            <span style={{
              fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.22em',
              textTransform: 'uppercase', color: 'var(--gold)',
              textShadow: '0 1px 6px rgba(0,0,0,0.4)',
            }}>
              {t.hero.eyebrow[lang]}
            </span>
          </div>
          <h1 style={{
            fontFamily: 'var(--font-playfair), serif',
            fontSize: 'clamp(3rem, 5.5vw, 5.5rem)',
            fontWeight: 400, lineHeight: 1.08,
            color: 'var(--cream)',
            textShadow: '0 2px 20px rgba(0,0,0,0.35)',
          }}>
            {t.hero.title1[lang]}{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>{t.hero.title2[lang]}</em>
            <br />
            {t.hero.title3[lang]}
          </h1>
        </div>

        {/* Right: desc + CTAs + rating */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', paddingBottom: '0.5rem' }}>
          <p style={{
            fontSize: '0.92rem', lineHeight: 1.85, fontWeight: 300,
            color: 'rgba(245,239,228,0.85)',
            maxWidth: '300px',
            textShadow: '0 1px 8px rgba(0,0,0,0.3)',
          }}>
            {t.hero.desc[lang]}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', width: '100%', maxWidth: '260px' }}>
            <a href="tel:0646635556" style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '1rem 1.4rem',
              background: 'var(--gold)', color: 'var(--green)',
              fontFamily: 'var(--font-inter), sans-serif',
              fontSize: '0.85rem', fontWeight: 500,
              textDecoration: 'none', borderRadius: '2px',
            }}>
              <span>{t.hero.cta1[lang]}</span>
              <span>→</span>
            </a>
            <a href="#contact" style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '1rem 1.4rem',
              background: 'transparent', color: 'rgba(245,239,228,0.8)',
              fontFamily: 'var(--font-inter), sans-serif',
              fontSize: '0.85rem', fontWeight: 400,
              textDecoration: 'none', borderRadius: '2px',
              border: '1px solid rgba(245,239,228,0.2)',
            }}>
              <span>{t.hero.cta2[lang]}</span>
              <span>↓</span>
            </a>
          </div>

          <div style={{
            display: 'flex', alignItems: 'center', gap: '0.75rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid rgba(245,239,228,0.12)',
          }}>
            <span style={{ color: 'var(--gold)', fontSize: '0.82rem', letterSpacing: '0.12em' }}>★★★★★</span>
            <span style={{ fontSize: '0.78rem', color: 'rgba(245,239,228,0.65)' }}>
              <strong style={{ color: 'rgba(245,239,228,0.85)', fontWeight: 500 }}>4,9</strong>{' '}
              {t.hero.rating[lang]}
            </span>
          </div>
        </div>
      </div>


    </section>
  )
}
