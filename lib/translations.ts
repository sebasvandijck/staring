export type Lang = 'nl' | 'en'

export const t = {
  nav: {
    cta: { nl: 'Bel ons', en: 'Call us' },
  },
  hero: {
    eyebrow: { nl: 'Kledingreparatie · Stomerij · Amsterdam', en: 'Clothing Repairs · Dry Cleaning · Amsterdam' },
    title1: { nl: 'Vakmanschap dat', en: 'Craftsmanship that' },
    title2: { nl: 'kleding', en: 'clothing' },
    title3: { nl: 'een leven geeft', en: 'new life gives' },
    desc: {
      nl: 'Uw favoriete kledingstuk verdient de beste handen. Al jaren vertrouwen Amsterdammers op Staring voor stomen, vermaken en repareren.',
      en: "Your favourite piece deserves the best hands. For years Amsterdammers have trusted Staring for cleaning, alterations and repairs.",
    },
    cta1: { nl: 'Bel direct', en: 'Call now' },
    cta2: { nl: 'Kom langs', en: 'Visit us' },
    rating: { nl: 'op Google · 643 beoordelingen', en: 'on Google · 643 reviews' },
  },
  reviews: {
    eyebrow: { nl: 'Wat klanten zeggen', en: 'What customers say' },
    title1: { nl: 'Mensen die', en: 'People who' },
    title2: { nl: 'terugkomen', en: 'come back' },
    link: { nl: 'Alle 643 reviews op Google →', en: 'All 643 reviews on Google →' },
    items: [
      {
        text: {
          nl: "Hele lieve, kundige mensen met fantastische service! De vintage lievelingsjas van m'n zoontje heeft weer een prachtige nieuwe rits en kan weer jaren mee.",
          en: "Lovely, skilled people with fantastic service! My son's vintage favourite jacket has a beautiful new zip and is good for years to come.",
        },
        name: 'Els Nadort',
        initials: 'EN',
      },
      {
        text: {
          nl: 'Je wordt hier onwijs goed geholpen, of het nu gaat om vermaken, knopen of stomerij. De eigenaren zijn ontzettend vriendelijk en denken echt met je mee. Ik ga nooit meer ergens anders naartoe!',
          en: "You get incredibly good help here, whether it's alterations, buttons or dry cleaning. The owners are extremely friendly and truly think along with you. I will never go anywhere else!",
        },
        name: 'L Andringa',
        initials: 'LA',
      },
      {
        text: {
          nl: 'Afgelopen december last-moment langs geweest voor het stomen van mijn pak en een jurk voor een bruiloft. Mijn pantalon ook nog vermaakt. Met alles erg tevreden.',
          en: 'Last December I came in last-minute to have my suit and a dress cleaned for a wedding. Had my trousers altered too. Very satisfied with everything.',
        },
        name: 'Bruno B',
        initials: 'BB',
      },
      {
        text: {
          nl: 'Vrijdagmiddag binnengekomen met de vraag of op vijf shirtjes lint genaaid kon worden — diezelfde avond klaar. Ongelooflijk snelle service.',
          en: 'Walked in Friday afternoon asking if ribbon could be sewn on five shirts — done that same evening. Incredibly fast service.',
        },
        name: 'Daan Brummelhuis',
        initials: 'DB',
      },
    ],
  },
  services: {
    eyebrow: { nl: 'Wat we doen', en: 'What we do' },
    title1: { nl: 'Van stomen tot', en: 'From cleaning to' },
    title2: { nl: 'op maat', en: 'custom fit' },
    items: [
      {
        num: '01',
        name: { nl: 'Stomerij', en: 'Dry Cleaning' },
        desc: {
          nl: 'Biologisch & milieuvriendelijk stomen voor kleding, gordijnen, tapijten, banken en hoeden.',
          en: 'Eco-friendly dry cleaning for clothes, curtains, carpets, sofas and hats.',
        },
      },
      {
        num: '02',
        name: { nl: 'Vermaken', en: 'Alterations' },
        desc: {
          nl: 'Broeken, jurken, jassen, blouses, trouwjurken, maatpakken — alles wordt perfect gemaakt.',
          en: 'Trousers, dresses, coats, blouses, wedding gowns, bespoke suits — everything made perfect.',
        },
      },
      {
        num: '03',
        name: { nl: 'Reparaties', en: 'Repairs' },
        desc: {
          nl: 'Rits vervangen, zoomreparaties, leerreparatie, knopen, borduurwerk en meer.',
          en: 'Zip replacement, hem repairs, leather repair, buttons, embroidery and more.',
        },
      },
      {
        num: '04',
        name: { nl: 'Bezorging', en: 'Pickup & Delivery' },
        desc: {
          nl: 'Ophalen en bezorgen aan huis. Industriële was beschikbaar voor grotere opdrachten.',
          en: 'Pickup and delivery at home. Industrial laundry service available for larger orders.',
        },
      },
    ],
  },
  strip: {
    label1: { nl: 'Het atelier', en: 'The atelier' },
    label2: { nl: 'Staringplein 20HS', en: 'Staringplein 20HS' },
  },
  contact: {
    eyebrow: { nl: 'Bezoek ons', en: 'Visit us' },
    title1: { nl: 'We helpen u', en: "We're happy" },
    title2: { nl: 'graag verder', en: 'to help' },
    tagline: {
      nl: 'Geen website nodig om langs te komen. Gewoon binnenlopen — we zijn er voor u.',
      en: "No website needed to visit. Just walk in — we're here for you.",
    },
    phone: { nl: 'Telefoon', en: 'Phone' },
    address: { nl: 'Adres', en: 'Address' },
    hours: { nl: 'Openingstijden', en: 'Opening hours' },
    days: [
      { day: { nl: 'Maandag – vrijdag', en: 'Monday – Friday' }, time: '09:00 – 19:00' },
      { day: { nl: 'Zaterdag', en: 'Saturday' }, time: '10:00 – 17:00' },
      { day: { nl: 'Zondag', en: 'Sunday' }, time: { nl: 'Gesloten', en: 'Closed' } },
    ],
    cta1: { nl: 'Bel direct', en: 'Call now' },
    cta1sub: { nl: 'We nemen snel op', en: "We'll pick up quickly" },
    cta2: { nl: 'Bekijk op Google Maps', en: 'Open in Google Maps' },
  },
  footer: {
    copy: { nl: '© 2025 Staring Kledingreparatie & Stomerij · Staringplein 20HS, Amsterdam', en: '© 2025 Staring Clothing Repairs & Dry Cleaning · Staringplein 20HS, Amsterdam' },
  },
} as const
