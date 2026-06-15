'use client'

import { useLang } from './useLang'
import { t } from '@/lib/translations'

export default function Reviews() {
  const lang = useLang()

  return (
    <section id="reviews" style={{ padding: '8rem 3rem', background: 'var(--white)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '5rem', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <span className="gold-line" />
              <span style={{ fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)' }}>
                {t.reviews.eyebrow[lang]}
              </span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 'clamp(2.2rem, 3.5vw, 3.4rem)', fontWeight: 400, lineHeight: 1.15, color: 'var(--green)' }}>
              {t.reviews.title1[lang]} <em style={{ fontStyle: 'italic' }}>{t.reviews.title2[lang]}</em>
            </h2>
          </div>
          <a href="https://www.google.com/maps/search/Staring+Kledingreparatie+Stomerij+Amsterdam" target="_blank" rel="noopener noreferrer"
            style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textDecoration: 'none', borderBottom: '1px solid var(--cream-dark)', paddingBottom: '2px', alignSelf: 'flex-end' }}>
            {t.reviews.link[lang]}
          </a>
        </div>

        {/* 4-column masonry-style grid */}
        <div style={{ columns: '2', columnGap: '1.5px', background: 'var(--cream-dark)', border: '1.5px solid var(--cream-dark)', borderRadius: '4px', overflow: 'hidden' }} className="reviews-masonry">
          {t.reviews.items.map((review, i) => (
            <div key={review.name} className={`reveal reveal-delay-${(i % 4) + 1}`} style={{
              breakInside: 'avoid',
              background: 'var(--white)',
              padding: '2.25rem 2.25rem',
              marginBottom: '1.5px',
              display: 'inline-block',
              width: '100%',
            }}>
              <span style={{ fontFamily: 'var(--font-playfair), serif', fontSize: '4.5rem', lineHeight: 0.5, color: 'var(--gold)', opacity: 0.18, display: 'block', marginBottom: '1.25rem' }}>"</span>
              <p style={{ fontSize: '0.93rem', lineHeight: 1.82, fontWeight: 300, color: 'var(--text)', marginBottom: '1.75rem', position: 'relative', zIndex: 1 }}>
                {review.text[lang]}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
                <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: 'var(--green)', color: 'var(--cream)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.68rem', fontWeight: 500, flexShrink: 0 }}>
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

      <style>{`
        @media (max-width: 700px) {
          .reviews-masonry { columns: 1 !important; }
        }
      `}</style>
    </section>
  )
}
