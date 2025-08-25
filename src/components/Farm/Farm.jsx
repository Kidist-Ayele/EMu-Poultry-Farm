import React, { useState } from 'react'
import './Farm.css'
import gallery_1 from '../../assets/gallery-1.jpg'
import gallery_2 from '../../assets/gallery-2.jpg'  
import gallery_3 from '../../assets/gallery-3.jpg'
import gallery_4 from '../../assets/gallery-4.avif'
import white_arrow from '../../assets/arrow.png'

const Farm = () => {
  const [showGalleryModal, setShowGalleryModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Extended gallery with more farm photos
  const extendedGallery = [
    { src: gallery_1, title: "Modern Chicken Coops", description: "State-of-the-art facilities ensuring optimal living conditions" },
    { src: gallery_2, title: "Healthy Poultry", description: "Well-cared for chickens in spacious environments" },
    { src: gallery_3, title: "Farm Operations", description: "Daily farm activities and maintenance" },
    { src: gallery_4, title: "Quality Control", description: "Rigorous quality checks and health monitoring" },
    { src: gallery_1, title: "Egg Collection", description: "Fresh eggs collected daily from our healthy hens" },
    { src: gallery_2, title: "Feeding Time", description: "Nutritious feed provided to ensure healthy growth" },
    { src: gallery_3, title: "Farm Maintenance", description: "Regular cleaning and maintenance of facilities" },
    { src: gallery_4, title: "Health Monitoring", description: "Veterinary care and health monitoring systems" }
  ];

  const handleGalleryClick = () => {
    setShowGalleryModal(true);
    setCurrentImageIndex(0);
  };

  const handleCloseGallery = () => {
    setShowGalleryModal(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === extendedGallery.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? extendedGallery.length - 1 : prev - 1
    );
  };

  return (
    <div className='farm'>
        <div className="gallery">
            <img src={gallery_1} alt="" />
            <img src={gallery_2} alt="" />
            <img src={gallery_3} alt="" />
            <img src={gallery_4} alt="" />
        </div>
        <button className='btn dark-btn' onClick={handleGalleryClick}>
            See more here <img src={white_arrow} alt="" />
        </button>

        {/* Gallery Modal */}
        {showGalleryModal && (
            <div className="gallery-modal" onClick={handleCloseGallery}>
                <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
                    <button className="gallery-close-btn" onClick={handleCloseGallery}>
                        ×
                    </button>
                    
                    <div className="gallery-navigation">
                        <button className="nav-btn prev-btn" onClick={prevImage}>
                            ‹
                        </button>
                        <div className="gallery-main">
                            <img 
                                src={extendedGallery[currentImageIndex].src} 
                                alt={extendedGallery[currentImageIndex].title}
                                className="gallery-main-image"
                            />
                            <div className="gallery-info">
                                <h3>{extendedGallery[currentImageIndex].title}</h3>
                                <p>{extendedGallery[currentImageIndex].description}</p>
                            </div>
                        </div>
                        <button className="nav-btn next-btn" onClick={nextImage}>
                            ›
                        </button>
                    </div>

                    <div className="gallery-thumbnails">
                        {extendedGallery.map((image, index) => (
                            <img
                                key={index}
                                src={image.src}
                                alt={image.title}
                                className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                                onClick={() => setCurrentImageIndex(index)}
                            />
                        ))}
                    </div>

                    <div className="gallery-counter">
                        {currentImageIndex + 1} / {extendedGallery.length}
                    </div>
                </div>
            </div>
        )}
    </div>
  )
}

export default Farm
