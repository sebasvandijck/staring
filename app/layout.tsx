import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: 'Staring — Kledingreparatie & Stomerij Amsterdam',
  description:
    'Professionele kledingreparatie, stomerij en maatwerk in Amsterdam. Bezoek ons op Staringplein 20HS of bel 06 466 355 56.',
  keywords: ['kledingreparatie', 'stomerij', 'Amsterdam', 'vermaken', 'reparatie', 'maatwerk'],
  openGraph: {
    title: 'Staring — Kledingreparatie & Stomerij Amsterdam',
    description: 'Professionele kledingreparatie en stomerij in Amsterdam. 4,9 ★ op Google.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body className={`${inter.variable} ${playfair.variable}`}>{children}</body>
    </html>
  )
}
