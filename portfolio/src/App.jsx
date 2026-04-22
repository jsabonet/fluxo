import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Clients from './components/Clients'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { FaWhatsapp } from 'react-icons/fa'

function App() {
  return (
    <div className="min-h-screen bg-dark text-light">
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Clients />
        <About />
        <Contact />
      </main>
      <Footer />
      {/* Floating WhatsApp Button (global, transparent) */}
      <a
        href="https://wa.me/258876141982"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-8 right-3 w-14 h-14 bg-transparent text-[#25D366] border border-[#25D366]/20 rounded-full flex items-center justify-center shadow-lg hover:bg-[#25D366] hover:text-white hover:scale-105 transition-colors transition-transform duration-200 z-50"
      >
        <FaWhatsapp className="text-2xl" />
      </a>
    </div>
  )
}

export default App
