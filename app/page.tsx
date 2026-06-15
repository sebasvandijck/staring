import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Reviews from '@/components/Reviews'
import Services from '@/components/Services'
import PhotoStrip from '@/components/PhotoStrip'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Reviews />
        <Services />
        <PhotoStrip />
        <Contact />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  )
}
