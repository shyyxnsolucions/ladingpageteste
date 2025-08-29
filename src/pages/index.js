import Header from '../components/Header'
import Hero from '../components/Hero'
import VideoSection from '../components/VideoSection'
import Testimonials from '../components/Testimonials'
import Benefits from '../components/Benefits'
import Ingredient from '../components/Ingredient'
import BeforeAfter from '../components/BeforeAfter'
import Pricing from '../components/Pricing'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <VideoSection />
        <Testimonials />
        <Benefits />
        <Ingredient />
        <BeforeAfter />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}