import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>Welcome to EMu Poultry Farm</h1>
            <p>Your trusted source for quality poultry farming. 
                We take pride in our commitment to ethical 
                farming practices, animal welfare, and delivering fresh, 
                reliable products to our community.</p>
            <button className='btn'>Explore More <img src={dark_arrow} alt="" /></button>
        </div>
      
    </div>
  )
}

export default Hero
