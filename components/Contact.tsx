'use client'

import { useLang } from './useLang'
import { t } from '@/lib/translations'

export default function Contact() {
  const lang = useLang()
  const c = t.contact

  return (
    <section id="contact" style={{ background: 'var(--cream)', padding: '8rem 3rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="reveal" style={{ marginBottom: '5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <span className="gold-line" />
            <span style={{ fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)' }}>
              {c.eyebrow[lang]}
            </span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 'clamp(2.2rem, 3.5vw, 3.4rem)', fontWeight: 400, lineHeight: 1.15, color: 'var(--green)' }}>
            {c.title1[lang]} <em style={{ fontStyle: 'italic' }}>{c.title2[lang]}</em>
          </h2>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '1rem', fontWeight: 300 }}>
            {c.tagline[lang]}
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px', background: 'var(--cream-dark)', border: '1.5px solid var(--cream-dark)', borderRadius: '4px', overflow: 'hidden' }} className="contact-grid">
          {c.locations.map((loc, i) => (
            <div key={i} className={`reveal reveal-delay-${i + 1}`} style={{
              background: 'var(--white)',
              padding: '3rem 2.75rem',
              borderRight: i === 0 ? '1px solid var(--cream-dark)' : 'none',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--gold)', display: 'block', flexShrink: 0 }} />
                <span style={{ fontFamily: 'var(--font-playfair), serif', fontSize: '1.15rem', fontWeight: 400, color: 'var(--green)' }}>
                  {loc.name}
                </span>
              </div>

              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 300, marginBottom: '0.5rem' }}>
                {loc.address}
              </div>

              <a href={`tel:${loc.tel}`} style={{ fontSize: '1.1rem', fontWeight: 500, color: 'var(--green)', textDecoration: 'none', display: 'block', marginBottom: '2rem', fontFamily: 'var(--font-playfair), serif' }}>
                {loc.phone}
              </a>

              <div style={{ marginBottom: '2rem' }}>
                <div style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: '0.75rem' }}>
                  {lang === 'nl' ? 'Openingstijden' : 'Opening hours'}
                </div>
                {loc.hours.map((row, j) => (
                  <div key={j} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', padding: '0.35rem 0', borderBottom: '1px solid var(--cream-dark)', color: 'var(--text-muted)' }}>
                    <span>{row.day[lang]}</span>
                    <span style={{ color: 'var(--text)' }}>{typeof row.time === 'string' ? row.time : row.time[lang]}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <a href={`tel:${loc.tel}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.9rem 1.25rem', background: 'var(--green)', color: 'var(--cream)', textDecoration: 'none', borderRadius: '2px', fontSize: '0.82rem', fontWeight: 500, fontFamily: 'var(--font-inter), sans-serif' }}>
                  <span>{lang === 'nl' ? 'Bel direct' : 'Call now'}</span>
                  <span>→</span>
                </a>

                {loc.whatsapp && (
                  <a href={`https://wa.me/${loc.whatsapp}`} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.9rem 1.25rem', background: '#25D366', color: '#fff', textDecoration: 'none', borderRadius: '2px', fontSize: '0.82rem', fontWeight: 500, fontFamily: 'var(--font-inter), sans-serif' }}>
                    <span>{lang === 'nl' ? 'WhatsApp' : 'WhatsApp'}</span>
                    <span>↗</span>
                  </a>
                )}

                <a href={loc.maps} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.9rem 1.25rem', background: 'transparent', color: 'var(--text-muted)', textDecoration: 'none', borderRadius: '2px', fontSize: '0.82rem', border: '1px solid var(--cream-dark)', fontFamily: 'var(--font-inter), sans-serif' }}>
                  <span>Google Maps</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
