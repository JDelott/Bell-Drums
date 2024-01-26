import React, { useState } from 'react';
import image1 from '../assets/logo.png';
import image2 from '../assets/snare-wood.png';
import image3 from '../assets/bellsnarehero.jpeg';
import './DrumCarousel.css';

function DrumCarousel() {
  const [currentSlide, setCurrentSlide] = useState(1);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide % 3) + 1);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 2 + 3) % 3 + 1);
  };

  return (
    <div className="carousel-container">
     {/* <label className="carousel-label">Bell Drum 1</label> */}
      <div id={`slide${currentSlide}`} className="carousel-item">
        <div className="carousel-image-container">
          <img src={currentSlide === 1 ? image1 : currentSlide === 2 ? image2 : image3} className="carousel-image" alt={`Slide ${currentSlide}`} />
        </div>
        <div className="carousel-info">
         
          
          <label className="carousel-label">Description:</label>
          <p className="carousel-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <label className="carousel-label">Price:</label>
          <span className="carousel-price">$10.00</span>

        </div>
        <button onClick={prevSlide} className="carousel-button carousel-button-prev">❮</button>
        <button onClick={nextSlide} className="carousel-button carousel-button-next">❯</button>
      </div>
    </div>
  );
}

export default DrumCarousel;
