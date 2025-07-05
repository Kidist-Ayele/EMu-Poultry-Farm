import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play.png'

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon'/>
      </div>
      <div className="about-right">
        <h3>ABOUT EMU POULTRY FARM</h3>
        <h2>From clean farms come clean food.</h2>
        <p>At EMu Poultry Farm, we are dedicated to raising healthy, 
            high-quality poultry through ethical and sustainable farming practices. 
            Located in a clean and well-managed environment, our farm is built on a 
            foundation of care—for the animals, the people we serve, and the environment.</p>
        <p>Our operations focus on delivering fresh and dependable poultry products to 
            individuals, markets, and businesses. We follow strict hygiene and health 
            standards to ensure every product we offer is safe, nutritious, and responsibly 
            sourced. From daily farm routines to long-term planning, we aim to exceed expectations 
            in every step of our process.</p>
        <p>We believe in doing more than just farming. Our goal is to contribute to 
            food security and create value in our community by offering trustworthy 
            poultry solutions. Whether you're a local buyer or a partner, EMu Poultry 
            Farm is committed to quality, transparency, and growth together.</p>
      </div>
    </div>
  )
}

export default About
