'use client'

import Image from 'next/image'
import { useLang } from './useLang'
import { t } from '@/lib/translations'

export default function Services() {
  const lang = useLang()

  return (
    <section id="services" style={{ padding: '8rem 3rem', background: 'var(--cream)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <div className="reveal">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <span className="gold-line" />
            <span style={{ fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)' }}>
              {t.services.eyebrow[lang]}
            </span>
          </div>
          <h2 style={{
            fontFamily: 'var(--font-playfair), serif',
            fontSize: 'clamp(2.2rem, 3.5vw, 3.4rem)',
            fontWeight: 400, lineHeight: 1.15, color: 'var(--green)',
          }}>
            {t.services.title1[lang]}<br />
            <em style={{ fontStyle: 'italic' }}>{t.services.title2[lang]}</em>
          </h2>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '8rem', alignItems: 'start',
          marginTop: '4rem',
        }}
          className="services-layout"
        >
          {/* Service list */}
          <div>
            {t.services.items.map((item, i) => (
              <div
                key={item.num}
                className={`reveal reveal-delay-${i + 1}`}
                style={{
                  display: 'grid', gridTemplateColumns: '48px 1fr',
                  gap: '1.5rem', alignItems: 'start',
                  padding: '2rem 0',
                  borderBottom: '1px solid var(--cream-dark)',
                  borderTop: i === 0 ? '1px solid var(--cream-dark)' : 'none',
                }}
              >
                <span style={{
                  fontFamily: 'var(--font-playfair), serif',
                  fontSize: '0.78rem', fontWeight: 400,
                  color: 'var(--gold)', paddingTop: '3px',
                  letterSpacing: '0.05em',
                }}>
                  {item.num}
                </span>
                <div>
                  <div style={{
                    fontFamily: 'var(--font-playfair), serif',
                    fontSize: '1.15rem', fontWeight: 400,
                    color: 'var(--green)', marginBottom: '0.5rem',
                  }}>
                    {item.name[lang]}
                  </div>
                  <div style={{
                    fontSize: '0.83rem', lineHeight: 1.7, fontWeight: 300,
                    color: 'var(--text-muted)',
                  }}>
                    {item.desc[lang]}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sticky image */}
          <div className="reveal services-image" style={{
            position: 'sticky', top: '8rem',
            borderRadius: '3px', overflow: 'hidden',
            aspectRatio: '3/4',
          }}>
            <Image
              src="/images/vakman.png"
              alt="Vakman aan het werk bij Staring"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center 10%' }}
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>


    </section>
  )
}
