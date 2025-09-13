import About from "../components/About"
import FAQ from "../components/FAQ"
import Gallery from "../components/Gallery"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Testimonials from "../components/Testimonials"
import Contact from "../components/Contact"
import CTA from "../components/CTA"
import Footer from "../components/Footer"

function App() {
  return (
    <div>      
      <link rel="canonical" href="https://lavinelektriska.se"/>
        <Header />
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <FAQ />
        <Contact />
        <CTA />
        <Footer />
    </div>
  )
}

export default App
