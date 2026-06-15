'use client'

import Image from 'next/image'
import { useLang } from './useLang'
import { t } from '@/lib/translations'

export default function PhotoStrip() {
  const lang = useLang()

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', height: '480px' }} className="photo-strip">
      {[
        { src: '/images/naai.png', label: t.strip.label1[lang], position: 'center 20%' },
        { src: '/images/stomerij.png', label: t.strip.label2[lang], position: 'center center' },
        { src: '/images/winkel2.webp', label: t.strip.label3[lang], position: 'center 35%' },
      ].map((photo, i) => (
        <div key={i} style={{ position: 'relative', overflow: 'hidden' }}>
          <Image
            src={photo.src}
            alt={photo.label}
            fill
            className="strip-img"
            style={{ objectFit: 'cover', objectPosition: photo.position, transition: 'transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94)' }}
            sizes="33vw"
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,20,13,0.5) 0%, transparent 60%)' }} />
          <span style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', background: 'rgba(12,22,15,0.65)', backdropFilter: 'blur(8px)', color: 'rgba(245,239,228,0.9)', fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '0.5rem 0.9rem', borderRadius: '2px' }}>
            {photo.label}
          </span>
        </div>
      ))}
    </div>
  )
}
