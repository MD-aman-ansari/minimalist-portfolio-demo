import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Testimonials from './components/Testimonials.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
