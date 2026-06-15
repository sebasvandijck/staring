import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Highlights from '@/components/Highlights'
import Reviews from '@/components/Reviews'
import Services from '@/components/Services'
import PhotoStrip from '@/components/PhotoStrip'
import Prices from '@/components/Prices'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Highlights />
        <Reviews />
        <Services />
        <PhotoStrip />
        <Prices />
        <Contact />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  )
}
