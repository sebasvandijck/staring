import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'optional',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'optional',
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: 'Staring Kledingreparatie & Stomerij Amsterdam',
  description: 'Professionele kledingreparatie, stomerij en maatwerk in Amsterdam. Twee vestigingen: Staringplein 20HS en Binnen Oranjestraat 18. Bel 020 775 04 48. 4,9 ★ op Google.',
  keywords: ['kledingreparatie Amsterdam', 'stomerij Amsterdam', 'kleding vermaken Amsterdam', 'maatpakken Amsterdam', 'rits vervangen Amsterdam', 'trouwjurk stomen Amsterdam', 'Staring Amsterdam'],
  metadataBase: new URL('https://staringamsterdam.nl'),
  alternates: { canonical: 'https://staringamsterdam.nl' },
  openGraph: {
    title: 'Staring Kledingreparatie & Stomerij Amsterdam',
    description: 'Professionele kledingreparatie en stomerij in Amsterdam. 4,9 ★ op Google · 643 beoordelingen.',
    type: 'website',
    locale: 'nl_NL',
    url: 'https://staringamsterdam.nl',
    siteName: 'Staring Tailor & Dry Cleaning',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ClothingStore',
  name: 'Staring Kledingreparatie & Stomerij',
  alternateName: 'Staring Tailor & Dry Cleaning',
  description: 'Professionele kledingreparatie, stomerij en maatwerk in Amsterdam.',
  url: 'https://staringamsterdam.nl',
  telephone: '+31207750448',
  priceRange: '€€',
  image: 'https://staringamsterdam.nl/images/winkel2.webp',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '643',
    bestRating: '5',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Staringplein 20HS',
    addressLocality: 'Amsterdam',
    postalCode: '1054 VL',
    addressCountry: 'NL',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 52.3676,
    longitude: 4.8722,
  },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '09:00', closes: '21:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '09:00', closes: '19:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Sunday'], opens: '09:00', closes: '19:00' },
  ],
  hasMap: 'https://maps.google.com/?cid=17744891490161392760',
  sameAs: [
    'https://maps.google.com/?cid=17744891490161392760',
  ],
  department: [
    {
      '@type': 'ClothingStore',
      name: 'Staring Binnen Oranjestraat',
      telephone: '+31203373039',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Binnen Oranjestraat 18',
        addressLocality: 'Amsterdam',
        postalCode: '1013 JA',
        addressCountry: 'NL',
      },
      openingHoursSpecification: [
        { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '09:00', closes: '21:00' },
        { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '09:00', closes: '19:00' },
      ],
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable}`}>{children}</body>
    </html>
  )
}
