'use client'

import Image from 'next/image'
import { useLang } from './useLang'
import { t } from '@/lib/translations'

export default function Hero() {
  const lang = useLang()

  return (
    <section style={{
      position: 'relative',
      minHeight: '100svh',
      display: 'flex', alignItems: 'flex-end',
      overflow: 'hidden',
    }}>
      <Image
        src="/images/winkel2.webp"
        alt="Staring Kledingreparatie & Stomerij, Amsterdam"
        fill
        priority
        style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
        sizes="100vw"
      />

      {/* Strong overlay everywhere */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `
          linear-gradient(to top, rgba(8,16,10,0.97) 0%, rgba(8,16,10,0.82) 30%, rgba(8,16,10,0.65) 60%, rgba(8,16,10,0.50) 100%),
          linear-gradient(to left, rgba(8,16,10,0.45) 0%, transparent 60%)
        `,
      }} />

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 2,
        width: '100%',
        padding: 'clamp(1.5rem, 4vw, 3rem)',
        paddingBottom: 'clamp(3rem, 6vw, 5rem)',
        paddingTop: '80px',
      }}>
        {/* Two column on desktop, single on mobile */}
        <div className="hero-content" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          alignItems: 'end',
          maxWidth: '1200px',
          margin: '0 auto',
        }}>
          {/* Left */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <span className="gold-line" />
              <span style={{ fontSize: 'clamp(0.6rem, 1.5vw, 0.68rem)', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)' }}>
                {t.hero.eyebrow[lang]}
              </span>
            </div>
            <h1 style={{
              fontFamily: 'var(--font-playfair), serif',
              fontSize: 'clamp(2.4rem, 6vw, 5.5rem)',
              fontWeight: 400, lineHeight: 1.08,
              color: 'var(--cream)',
              textShadow: '0 2px 20px rgba(0,0,0,0.4)',
            }}>
              {t.hero.title1[lang]}{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>{t.hero.title2[lang]}</em>
              <br />{t.hero.title3[lang]}
            </h1>
          </div>

          {/* Right */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <p style={{
              fontSize: 'clamp(0.85rem, 2vw, 0.93rem)',
              lineHeight: 1.8, fontWeight: 300,
              color: 'rgba(245,239,228,0.85)',
              textShadow: '0 1px 8px rgba(0,0,0,0.3)',
              maxWidth: '340px',
            }}>
              {t.hero.desc[lang]}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', maxWidth: '300px' }}>
              <a href="tel:0646635556" style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '0.9rem 1.4rem',
                background: 'var(--gold)', color: 'var(--green)',
                fontFamily: 'var(--font-inter), sans-serif',
                fontSize: '0.85rem', fontWeight: 500,
                textDecoration: 'none', borderRadius: '2px',
              }}>
                <span>{t.hero.cta1[lang]}</span><span>→</span>
              </a>
              <a href="#contact" style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '0.9rem 1.4rem',
                background: 'transparent', color: 'rgba(245,239,228,0.8)',
                fontFamily: 'var(--font-inter), sans-serif',
                fontSize: '0.85rem', fontWeight: 400,
                textDecoration: 'none', borderRadius: '2px',
                border: '1px solid rgba(245,239,228,0.2)',
              }}>
                <span>{t.hero.cta2[lang]}</span><span>↓</span>
              </a>
            </div>

            <a href="#reviews" style={{
              display: 'flex', alignItems: 'center', gap: '0.75rem',
              paddingTop: '1.25rem',
              borderTop: '1px solid rgba(245,239,228,0.12)',
              textDecoration: 'none',
            }}>
              <span style={{ color: 'var(--gold)', fontSize: '0.82rem', letterSpacing: '0.12em' }}>★★★★★</span>
              <span style={{ fontSize: '0.78rem', color: 'rgba(245,239,228,0.65)' }}>
                <strong style={{ color: 'rgba(245,239,228,0.85)', fontWeight: 500 }}>4,9</strong>{' '}
                {t.hero.rating[lang]}
              </span>
              <span style={{ fontSize: '0.7rem', color: 'rgba(245,239,228,0.35)' }}>↓</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
