'use client'

import { useLang } from './useLang'
import { t } from '@/lib/translations'

export default function Contact() {
  const lang = useLang()
  const c = t.contact

  return (
    <section id="contact" style={{ background: 'var(--green)', padding: '8rem 3rem' }}>
      <div style={{
        maxWidth: '1200px', margin: '0 auto',
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: '8rem', alignItems: 'start',
      }}
        className="contact-inner"
      >
        {/* Left */}
        <div className="reveal">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <span className="gold-line" />
            <span style={{ fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)' }}>
              {c.eyebrow[lang]}
            </span>
          </div>
          <h2 style={{
            fontFamily: 'var(--font-playfair), serif',
            fontSize: 'clamp(2.2rem, 3.5vw, 3.4rem)',
            fontWeight: 400, lineHeight: 1.15, color: 'var(--cream)',
          }}>
            {c.title1[lang]}<br />
            <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>{c.title2[lang]}</em>
          </h2>
          <p style={{
            fontSize: '0.9rem', lineHeight: 1.8, fontWeight: 300,
            color: 'rgba(245,239,228,0.55)',
            marginTop: '1.5rem', maxWidth: '320px',
          }}>
            {c.tagline[lang]}
          </p>

          {/* Contact rows */}
          <div style={{ marginTop: '3rem' }}>
            {[
              { href: 'tel:0646635556', icon: '📞', label: c.phone[lang], value: '06 466 355 56' },
              { href: 'https://www.google.com/maps/search/Staringplein+20+Amsterdam', icon: '📍', label: c.address[lang], value: 'Staringplein 20HS, Amsterdam', external: true },
            ].map((row) => (
              <a
                key={row.href}
                href={row.href}
                target={row.external ? '_blank' : undefined}
                rel={row.external ? 'noopener noreferrer' : undefined}
                style={{
                  display: 'flex', alignItems: 'center', gap: '1.25rem',
                  padding: '1.4rem 0',
                  borderBottom: '1px solid rgba(245,239,228,0.08)',
                  textDecoration: 'none',
                }}
                className="contact-row"
              >
                <div style={{
                  width: '40px', height: '40px',
                  background: 'rgba(245,239,228,0.05)',
                  borderRadius: '2px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, fontSize: '0.9rem',
                }}>
                  {row.icon}
                </div>
                <div>
                  <div style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(245,239,228,0.3)', fontWeight: 500, marginBottom: '3px' }}>
                    {row.label}
                  </div>
                  <div style={{ fontSize: '0.9rem', color: 'rgba(245,239,228,0.8)', fontWeight: 300 }}>
                    {row.value}
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Hours */}
          <div style={{ marginTop: '2.5rem' }}>
            <div style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '1.25rem' }}>
              {c.hours[lang]}
            </div>
            {c.days.map((row, i) => (
              <div key={i} style={{
                display: 'flex', justifyContent: 'space-between',
                fontSize: '0.83rem', padding: '0.4rem 0',
                color: 'rgba(245,239,228,0.4)',
                borderBottom: '1px solid rgba(245,239,228,0.05)',
              }}>
                <span>{row.day[lang]}</span>
                <span style={{ color: 'rgba(245,239,228,0.72)' }}>
                  {typeof row.time === 'string' ? row.time : row.time[lang]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: CTAs */}
        <div className="reveal reveal-delay-1" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingTop: '0.5rem' }}>
          <a href="tel:0646635556" style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '1.3rem 1.6rem',
            background: 'var(--gold)', color: 'var(--green)',
            textDecoration: 'none', borderRadius: '2px',
            fontFamily: 'var(--font-inter), sans-serif',
          }}>
            <div>
              <span style={{ fontSize: '0.92rem', fontWeight: 500, display: 'block' }}>{c.cta1[lang]}</span>
              <span style={{ fontSize: '0.72rem', fontWeight: 300, opacity: 0.65, display: 'block', marginTop: '3px' }}>{c.cta1sub[lang]}</span>
            </div>
            <span>→</span>
          </a>

          <a
            href="https://www.google.com/maps/search/Staringplein+20+Amsterdam"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '1.3rem 1.6rem',
              background: 'rgba(245,239,228,0.05)', color: 'rgba(245,239,228,0.65)',
              textDecoration: 'none', borderRadius: '2px',
              fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.85rem',
              border: '1px solid rgba(245,239,228,0.1)',
            }}
          >
            <span>{c.cta2[lang]}</span>
            <span>↗</span>
          </a>
        </div>
      </div>


    </section>
  )
}
