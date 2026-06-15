'use client'

import { useState } from 'react'
import { useLang } from './useLang'
import { t } from '@/lib/translations'

export default function Reviews() {
  const lang = useLang()
  const [current, setCurrent] = useState(0)
  const items = t.reviews.items

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
          <a href="https://maps.google.com/?cid=17744891490161392760" target="_blank" rel="noopener noreferrer"
            style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textDecoration: 'none', borderBottom: '1px solid var(--cream-dark)', paddingBottom: '2px', alignSelf: 'flex-end' }}>
            {t.reviews.link[lang]}
          </a>
        </div>

        {/* Desktop: masonry grid */}
        <div className="reviews-desktop">
          <div style={{ columns: '2', columnGap: '1.5px', background: 'var(--cream-dark)', border: '1.5px solid var(--cream-dark)', borderRadius: '4px', overflow: 'hidden' }}>
            {items.map((review, i) => (
              <div key={review.name} className={`reveal reveal-delay-${(i % 4) + 1}`} style={{
                breakInside: 'avoid',
                background: 'var(--white)',
                padding: '2.25rem',
                marginBottom: '1.5px',
                display: 'inline-block',
                width: '100%',
              }}>
                <span style={{ fontFamily: 'var(--font-playfair), serif', fontSize: '4.5rem', lineHeight: 0.5, color: 'var(--gold)', opacity: 0.18, display: 'block', marginBottom: '1.25rem' }}>"</span>
                <p style={{ fontSize: '0.93rem', lineHeight: 1.82, fontWeight: 300, color: 'var(--text)', marginBottom: '1.75rem' }}>
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

        {/* Mobile: carousel */}
        <div className="reviews-mobile">
          <div style={{ border: '1.5px solid var(--cream-dark)', borderRadius: '4px', overflow: 'hidden', background: 'var(--white)', padding: '2rem' }}>
            <span style={{ fontFamily: 'var(--font-playfair), serif', fontSize: '4rem', lineHeight: 0.5, color: 'var(--gold)', opacity: 0.18, display: 'block', marginBottom: '1.25rem' }}>"</span>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.8, fontWeight: 300, color: 'var(--text)', marginBottom: '1.75rem', minHeight: '80px' }}>
              {items[current].text[lang]}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem', marginBottom: '1.5rem' }}>
              <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: 'var(--green)', color: 'var(--cream)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.68rem', fontWeight: 500, flexShrink: 0 }}>
                {items[current].initials}
              </div>
              <div>
                <div style={{ fontSize: '0.82rem', fontWeight: 500, color: 'var(--text)' }}>{items[current].name}</div>
                <div style={{ fontSize: '0.68rem', color: 'var(--gold)', letterSpacing: '0.1em', marginTop: '2px' }}>★★★★★</div>
              </div>
            </div>
            {/* Controls */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', gap: '6px' }}>
                {items.map((_, i) => (
                  <button key={i} onClick={() => setCurrent(i)} style={{ width: i === current ? '20px' : '6px', height: '6px', borderRadius: '3px', background: i === current ? 'var(--green)' : 'var(--cream-dark)', border: 'none', cursor: 'pointer', padding: 0, transition: 'all 0.2s' }} />
                ))}
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button onClick={() => setCurrent(i => (i - 1 + items.length) % items.length)} style={{ width: '36px', height: '36px', borderRadius: '50%', border: '1px solid var(--cream-dark)', background: 'transparent', cursor: 'pointer', fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--green)' }}>←</button>
                <button onClick={() => setCurrent(i => (i + 1) % items.length)} style={{ width: '36px', height: '36px', borderRadius: '50%', border: '1px solid var(--cream-dark)', background: 'transparent', cursor: 'pointer', fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--green)' }}>→</button>
              </div>
            </div>
          </div>
        </div>

        {/* Google CTA */}
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a href="https://maps.google.com/?cid=17744891490161392760" target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.82rem', fontWeight: 500, color: 'var(--green)', textDecoration: 'none', border: '1px solid var(--cream-dark)', padding: '0.85rem 1.75rem', borderRadius: '2px', background: 'var(--white)' }}>
            <span style={{ color: 'var(--gold)' }}>★★★★★</span>
            <span>{lang === 'nl' ? 'Bekijk alle 643 reviews op Google' : 'Read all 643 reviews on Google'}</span>
            <span style={{ color: 'var(--text-muted)' }}>↗</span>
          </a>
        </div>
      </div>
    </section>
  )
}
