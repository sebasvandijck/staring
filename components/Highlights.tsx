'use client'

import { useLang } from './useLang'
import { t } from '@/lib/translations'

export default function Highlights() {
  const lang = useLang()

  return (
    <section style={{ background: 'var(--cream)', padding: '6rem 3rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="reveal" style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span className="gold-line" />
            <span style={{ fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)' }}>
              {t.highlights.eyebrow[lang]}
            </span>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5px', background: 'var(--cream-dark)', border: '1.5px solid var(--cream-dark)', borderRadius: '4px', overflow: 'hidden' }} className="highlights-grid">
          {t.highlights.items.map((item, i) => (
            <div key={i} className={`reveal reveal-delay-${i + 1}`} style={{
              background: 'var(--white)',
              padding: '2rem 2rem',
              borderRight: i % 2 === 0 ? '1px solid var(--cream-dark)' : 'none',
              borderBottom: i < 2 ? '1px solid var(--cream-dark)' : 'none',
            }}>
              <div style={{ fontFamily: 'var(--font-playfair), serif', fontSize: '2rem', fontWeight: 400, color: 'var(--gold)', opacity: 0.4, marginBottom: '0.75rem', lineHeight: 1 }}>
                {item.stat}
              </div>
              <h3 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: '1.05rem', fontWeight: 400, color: 'var(--green)', marginBottom: '0.5rem', lineHeight: 1.3 }}>
                {item.title[lang]}
              </h3>
              <p style={{ fontSize: '0.82rem', lineHeight: 1.7, color: 'var(--text-muted)', fontWeight: 300 }}>
                {item.desc[lang]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
