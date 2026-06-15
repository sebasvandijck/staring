'use client'

import { useState, useEffect } from 'react'
import type { Lang } from '@/lib/translations'

export function useLang(): Lang {
  const [lang, setLang] = useState<Lang>('nl')

  useEffect(() => {
    const handler = (e: Event) => {
      setLang((e as CustomEvent<Lang>).detail)
    }
    window.addEventListener('langchange', handler)
    return () => window.removeEventListener('langchange', handler)
  }, [])

  return lang
}
