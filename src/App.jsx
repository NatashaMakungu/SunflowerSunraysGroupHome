import React from 'react'
import Footer from './Components/footer'
import FacilitiesSection from './Components/services'
import AppSection from './Components/our-home'
import Navbar from './Components/navbar'
import Hero from './Components/hero'
import About from './Components/about'



import './App.css'

function App() {

  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <AppSection />
    <FacilitiesSection />
    <Footer />
    </>
  )
}

export default App
