import React from 'react'
import Navbar from './components/Navbar/navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Farm from './components/Farm/Farm'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Our Services' title = 'What We Offer'/>
        <Programs/>
        <About/>
        <Title subTitle='Gallery' title = 'Farm Photos'/>
        <Farm/>
        <Title subTitle='Testimonials' title = 'What Customers Says'/>
        <Testimonials/>
        <Title subTitle='Contact Us' title = 'Get in Touch'/>
        <Contact/>
        <Footer/>
      </div>
      
    </div>
  )
}

export default App
