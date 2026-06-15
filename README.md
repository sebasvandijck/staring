# Staring — Kledingreparatie & Stomerij

Next.js 14 website voor Staring Amsterdam.

## Lokaal draaien

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deployen op Vercel

1. Push naar GitHub
2. Ga naar [vercel.com](https://vercel.com) → New Project → importeer de repo
3. Vercel detecteert Next.js automatisch → Deploy

## Structuur

```
/app
  layout.tsx       ← fonts, metadata, SEO
  page.tsx         ← pagina samenstelling
  globals.css      ← CSS variabelen, reveal animaties

/components
  Nav.tsx          ← sticky nav met NL/EN toggle
  Hero.tsx         ← fullscreen hero met winkel foto
  Reviews.tsx      ← 4 Google reviews grid
  Services.tsx     ← diensten lijst met sticky foto
  PhotoStrip.tsx   ← asymmetrische foto strip
  Contact.tsx      ← contactinfo + CTAs
  Footer.tsx       ← footer
  ScrollReveal.tsx ← IntersectionObserver voor fade-ins
  useLang.ts       ← gedeelde taal hook

/lib
  translations.ts  ← alle NL/EN teksten

/public/images
  winkel.png       ← gevel hero foto
  vakman.png       ← kleermaker naaimachine
  naai.png         ← kleermaker opmeten
```

## Teksten aanpassen

Alle teksten staan in `/lib/translations.ts` — Nederlands en Engels naast elkaar.

## Openingstijden aanpassen

In `/lib/translations.ts` → `contact.days` array.
