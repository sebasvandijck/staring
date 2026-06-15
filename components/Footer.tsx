'use client'

import { useLang } from './useLang'
import { t } from '@/lib/translations'

export default function Footer() {
  const lang = useLang()

  return (
    <footer style={{
      background: '#0F1C13',
      padding: '1.75rem 3rem',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      flexWrap: 'wrap', gap: '1rem',
    }}>
      <a href="#" style={{
        fontFamily: 'var(--font-playfair), serif',
        fontSize: '0.95rem', fontWeight: 500, letterSpacing: '0.22em',
        textTransform: 'uppercase', color: 'var(--gold)',
        textDecoration: 'none',
      }}>
        Staring
      </a>
      <span style={{ fontSize: '0.72rem', color: 'rgba(245,239,228,0.2)', letterSpacing: '0.03em' }}>
        {t.footer.copy[lang]}
      </span>
    </footer>
  )
}
