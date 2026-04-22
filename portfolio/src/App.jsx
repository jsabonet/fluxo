import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Clients from './components/Clients'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

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
    </div>
  )
}

export default App
