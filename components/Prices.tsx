'use client'

import { useLang } from './useLang'
import { t } from '@/lib/translations'

export default function Prices() {
  const lang = useLang()
  const p = t.prices

  return (
    <section id="prijzen" style={{ padding: '8rem 3rem', background: 'var(--green)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="reveal" style={{ marginBottom: '5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <span className="gold-line" />
            <span style={{ fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)' }}>
              {p.eyebrow[lang]}
            </span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 'clamp(2.2rem, 3.5vw, 3.4rem)', fontWeight: 400, lineHeight: 1.15, color: 'var(--cream)' }}>
            {p.title1[lang]} <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>{p.title2[lang]}</em>
          </h2>
          <p style={{ fontSize: '0.82rem', color: 'rgba(245,239,228,0.35)', marginTop: '1rem', fontWeight: 300 }}>
            {p.note[lang]}
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5px', background: 'rgba(245,239,228,0.08)', border: '1px solid rgba(245,239,228,0.08)', borderRadius: '4px', overflow: 'hidden' }} className="prices-grid">
          {p.categories.map((cat, i) => (
            <div key={i} className={`reveal reveal-delay-${(i % 4) + 1}`} style={{
              padding: '2.5rem 2.25rem',
              background: 'rgba(245,239,228,0.03)',
              borderRight: i % 2 === 0 ? '1px solid rgba(245,239,228,0.08)' : 'none',
              borderBottom: i < 2 ? '1px solid rgba(245,239,228,0.08)' : 'none',
            }}>
              <h3 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: '1.1rem', fontWeight: 400, color: 'var(--gold)', marginBottom: '1.5rem' }}>
                {cat.name[lang]}
              </h3>
              {cat.items.map((item, j) => (
                <div key={j} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.65rem 0', borderBottom: '1px solid rgba(245,239,228,0.06)' }}>
                  <span style={{ fontSize: '0.85rem', color: 'rgba(245,239,228,0.65)', fontWeight: 300 }}>{item[lang]}</span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--cream)', fontWeight: 400, flexShrink: 0, marginLeft: '1rem' }}>{item.price}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
