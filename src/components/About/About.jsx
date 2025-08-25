import React, { useState } from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play.png'

const About = () => {
    const [showVideo, setShowVideo] = useState(false);

    const handlePlayClick = () => {
        setShowVideo(true);
    };

    const handleCloseVideo = () => {
        setShowVideo(false);
    };

    return (
        <div className="about-section">
            {/* Titles at the top center */}
            <div className="about-title">
                <h3>ABOUT EMU POULTRY FARM</h3>
                <h2>From clean farms come clean food.</h2>
            </div>
            
            {/* Two cards container */}
            <div className="about-cards">
                {/* Video Card */}
                <div className="video-card">
                    <div className="video-container">
                        <img src={about_img} alt="About EMu Poultry Farm" className="about-img" />
                        <img 
                            src={play_icon} 
                            alt="Play Video" 
                            className="play-icon"
                            onClick={handlePlayClick}
                        />
                    </div>
                </div>

                {/* Description Card */}
                <div className="description-card">
                    <p>At EMu Poultry Farm, we raise healthy, high-quality poultry through ethical and sustainable farming practices. Our commitment to excellence begins with a clean and well-managed environment where our birds thrive.</p>
                    <p>We believe in doing more than just farming. Our goal is to contribute to food security while maintaining the highest standards of animal welfare and environmental responsibility. Every step of our process is designed to deliver fresh, dependable products that meet and exceed expectations.</p>
                    <p>Our foundation is built on care - for our animals, our people, and our environment. We follow strict hygiene and health standards, ensuring that every product from our farm meets the highest quality benchmarks. From our carefully selected feed to our modern facilities, we prioritize the well-being of our poultry and the satisfaction of our customers.</p>
                </div>
            </div>

            {/* Video Modal */}
            {showVideo && (
                <div className="video-modal" onClick={handleCloseVideo}>
                    <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="video-close-btn" onClick={handleCloseVideo}>×</button>
                        <video 
                            className="video-player" 
                            controls 
                            autoPlay
                            muted
                            src="/chickens_video.mp4"
                        >
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            )}
        </div>
    )
}

export default About
