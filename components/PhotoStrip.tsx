'use client'

import Image from 'next/image'
import { useLang } from './useLang'
import { t } from '@/lib/translations'

export default function PhotoStrip() {
  const lang = useLang()

  const photos = [
    { src: '/images/naai.png', alt: 'Kleermaker aan het werk', label: t.strip.label1[lang], position: 'center 20%', flex: 38 },
    { src: '/images/winkel.png', alt: 'Staring Amsterdam', label: t.strip.label2[lang], position: 'center 35%', flex: 62 },
  ]

  return (
    <div style={{ display: 'flex', height: '480px' }} className="photo-strip">
      {photos.map((photo) => (
        <div
          key={photo.src}
          style={{
            flex: photo.flex, position: 'relative', overflow: 'hidden',
          }}
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            style={{
              objectFit: 'cover',
              objectPosition: photo.position,
              transition: 'transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94)',
            }}
            sizes="(max-width: 900px) 100vw, 50vw"
            className="strip-img"
          />
          <span style={{
            position: 'absolute', bottom: '1.5rem', left: '1.5rem',
            background: 'rgba(12,22,15,0.7)',
            backdropFilter: 'blur(8px)',
            color: 'rgba(245,239,228,0.85)',
            fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase',
            padding: '0.5rem 0.9rem', borderRadius: '2px',
            fontWeight: 400,
          }}>
            {photo.label}
          </span>
        </div>
      ))}


    </div>
  )
}
