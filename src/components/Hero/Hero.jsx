import React, { useState } from 'react'
import './Hero.css'
import dark_arrow from '../../assets/arrow.png'

const Hero = () => {
  const [showExploreModal, setShowExploreModal] = useState(false);

  const handleExploreClick = () => {
    setShowExploreModal(true);
  };

  const handleCloseModal = () => {
    setShowExploreModal(false);
  };

  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>Welcome to EMu Poultry Farm</h1>
            <p>Your trusted source for quality poultry farming. 
                We take pride in our commitment to ethical 
                farming practices, animal welfare, and delivering fresh, 
                reliable products to our community.</p>
            <button className='btn' onClick={handleExploreClick}>
                Explore More <img src={dark_arrow} alt="" />
            </button>
        </div>

        {/* Explore More Modal */}
        {showExploreModal && (
            <div className="explore-modal" onClick={handleCloseModal}>
                <div className="explore-modal-content" onClick={(e) => e.stopPropagation()}>
                    <button className="explore-close-btn" onClick={handleCloseModal}>
                        ×
                    </button>
                    <div className="explore-content">
                        <h2>Discover EMu Poultry Farm</h2>
                        <div className="explore-grid">
                            <div className="explore-item">
                                <h3>🐔 Our Mission</h3>
                                <p>To provide the highest quality poultry products while maintaining the highest standards of animal welfare and environmental sustainability.</p>
                            </div>
                            <div className="explore-item">
                                <h3>🌱 Sustainable Practices</h3>
                                <p>We implement eco-friendly farming methods, use renewable energy sources, and maintain a closed-loop waste management system.</p>
                            </div>
                            <div className="explore-item">
                                <h3>🏆 Quality Assurance</h3>
                                <p>Every product undergoes rigorous quality checks and meets international food safety standards before reaching our customers.</p>
                            </div>
                            <div className="explore-item">
                                <h3>🤝 Community Impact</h3>
                                <p>We support local communities by providing employment opportunities and contributing to food security in the region.</p>
                            </div>
                        </div>
                        <div className="explore-stats">
                            <div className="stat">
                                <h4>5000+</h4>
                                <p>Happy Customers</p>
                            </div>
                            <div className="stat">
                                <h4>10+</h4>
                                <p>Years Experience</p>
                            </div>
                            <div className="stat">
                                <h4>100%</h4>
                                <p>Quality Guaranteed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}
    </div>
  )
}

export default Hero
