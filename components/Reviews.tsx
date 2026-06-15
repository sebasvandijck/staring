'use client'

import { useLang } from './useLang'
import { t } from '@/lib/translations'

export default function Reviews() {
  const lang = useLang()

  return (
    <section id="reviews" style={{ padding: '8rem 3rem', background: 'var(--white)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Header */}
        <div className="reveal" style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'flex-end', marginBottom: '5rem',
          flexWrap: 'wrap', gap: '2rem',
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <span className="gold-line" />
              <span style={{ fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)' }}>
                {t.reviews.eyebrow[lang]}
              </span>
            </div>
            <h2 style={{
              fontFamily: 'var(--font-playfair), serif',
              fontSize: 'clamp(2.2rem, 3.5vw, 3.4rem)',
              fontWeight: 400, lineHeight: 1.15, color: 'var(--green)',
            }}>
              {t.reviews.title1[lang]} <em style={{ fontStyle: 'italic' }}>{t.reviews.title2[lang]}</em>
            </h2>
          </div>
          <a
            href="https://www.google.com/maps/search/Staring+Kledingreparatie+Stomerij+Amsterdam"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: '0.75rem', color: 'var(--text-muted)',
              textDecoration: 'none', letterSpacing: '0.05em',
              borderBottom: '1px solid var(--cream-dark)',
              paddingBottom: '2px', alignSelf: 'flex-end',
            }}
          >
            {t.reviews.link[lang]}
          </a>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
          border: '1px solid var(--cream-dark)',
          borderRadius: '4px', overflow: 'hidden',
        }}
          className="reviews-grid"
        >
          {t.reviews.items.map((review, i) => (
            <div
              key={review.name}
              className={`reveal reveal-delay-${i + 1}`}
              style={{
                padding: '3rem 3rem 2.5rem',
                borderRight: i % 2 === 0 ? '1px solid var(--cream-dark)' : 'none',
                borderBottom: i < 2 ? '1px solid var(--cream-dark)' : 'none',
                background: 'var(--white)',
                position: 'relative',
              }}
            >
              {/* Big quote mark */}
              <span style={{
                fontFamily: 'var(--font-playfair), serif',
                fontSize: '7rem', lineHeight: 0.6,
                color: 'var(--gold)', opacity: 0.15,
                position: 'absolute', top: '2rem', right: '2.5rem',
                userSelect: 'none', pointerEvents: 'none',
              }}>"</span>

              <p style={{
                fontSize: '0.95rem', lineHeight: 1.82, fontWeight: 300,
                color: 'var(--text)', marginBottom: '2rem',
                position: 'relative', zIndex: 1,
              }}>
                {review.text[lang]}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
                <div style={{
                  width: '36px', height: '36px', borderRadius: '50%',
                  background: 'var(--green)', color: 'var(--cream)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.05em',
                  flexShrink: 0,
                }}>
                  {review.initials}
                </div>
                <div>
                  <div style={{ fontSize: '0.82rem', fontWeight: 500, color: 'var(--text)' }}>{review.name}</div>
                  <div style={{ fontSize: '0.68rem', color: 'var(--gold)', letterSpacing: '0.1em', marginTop: '2px' }}>★★★★★</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


    </section>
  )
}
