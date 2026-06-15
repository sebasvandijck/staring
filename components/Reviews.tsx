'use client'

import { useState, useRef } from 'react'
import { useLang } from './useLang'
import { t } from '@/lib/translations'

export default function Reviews() {
  const lang = useLang()
  const [current, setCurrent] = useState(0)
  const items = t.reviews.items
  const touchStart = useRef<number | null>(null)

  const prev = () => setCurrent(i => (i - 1 + items.length) % items.length)
  const next = () => setCurrent(i => (i + 1) % items.length)

  const onTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX
  }
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStart.current === null) return
    const diff = touchStart.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev()
    touchStart.current = null
  }

  return (
    <section id="reviews" style={{ padding: 'clamp(4rem, 8vw, 8rem) clamp(1.25rem, 4vw, 3rem)', background: 'var(--white)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
              <span className="gold-line" />
              <span style={{ fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)' }}>
                {t.reviews.eyebrow[lang]}
              </span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 'clamp(2rem, 3.5vw, 3.4rem)', fontWeight: 400, lineHeight: 1.15, color: 'var(--green)' }}>
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
                breakInside: 'avoid', background: 'var(--white)',
                padding: '2.25rem', marginBottom: '1.5px',
                display: 'inline-block', width: '100%',
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

        {/* Mobile: swipeable carousel */}
        <div className="reviews-mobile"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          style={{ userSelect: 'none' }}
        >
          <div style={{ border: '1.5px solid var(--cream-dark)', borderRadius: '4px', overflow: 'hidden', background: 'var(--white)', padding: '2rem' }}>
            <span style={{ fontFamily: 'var(--font-playfair), serif', fontSize: '4rem', lineHeight: 0.5, color: 'var(--gold)', opacity: 0.18, display: 'block', marginBottom: '1.25rem' }}>"</span>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.8, fontWeight: 300, color: 'var(--text)', marginBottom: '1.75rem', minHeight: '80px' }}>
              {items[current].text[lang]}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem', marginBottom: '1.75rem' }}>
              <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: 'var(--green)', color: 'var(--cream)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.68rem', fontWeight: 500, flexShrink: 0 }}>
                {items[current].initials}
              </div>
              <div>
                <div style={{ fontSize: '0.82rem', fontWeight: 500, color: 'var(--text)' }}>{items[current].name}</div>
                <div style={{ fontSize: '0.68rem', color: 'var(--gold)', letterSpacing: '0.1em', marginTop: '2px' }}>★★★★★</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                {items.map((_, i) => (
                  <button key={i} onClick={() => setCurrent(i)} style={{
                    width: i === current ? '20px' : '6px', height: '6px',
                    borderRadius: '3px', background: i === current ? 'var(--green)' : 'var(--cream-dark)',
                    border: 'none', cursor: 'pointer', padding: 0, transition: 'all 0.2s',
                  }} />
                ))}
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button onClick={prev} style={{ width: '36px', height: '36px', borderRadius: '50%', border: '1px solid var(--cream-dark)', background: 'transparent', cursor: 'pointer', fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--green)' }}>←</button>
                <button onClick={next} style={{ width: '36px', height: '36px', borderRadius: '50%', border: '1px solid var(--cream-dark)', background: 'transparent', cursor: 'pointer', fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--green)' }}>→</button>
              </div>
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
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