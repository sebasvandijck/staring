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
                  <a href={`https://wa.me/${loc.whatsapp}`} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.9rem 1.25rem', background: 'transparent', color: 'var(--text-muted)', textDecoration: 'none', borderRadius: '2px', fontSize: '0.82rem', border: '1px solid var(--cream-dark)', fontFamily: 'var(--font-inter), sans-serif' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.554 4.103 1.523 5.828L.057 23.571a.75.75 0 00.918.899l5.9-1.498A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.713 9.713 0 01-4.953-1.354l-.355-.211-3.683.935.999-3.585-.231-.368A9.715 9.715 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/></svg>
                      WhatsApp
                    </span>
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
