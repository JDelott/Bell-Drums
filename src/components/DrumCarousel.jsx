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
    <div>

    <div className="carousel-container">
    {/* <h2 className='carousel-h2'> Bell Brass Snare 14x6.5  </h2> */}
      <div id={`slide${currentSlide}`} className="carousel-item">
     <label className="carousel-label carousel-h2">The Grand</label>
        <div className="carousel-image-container">
          <img src={currentSlide === 1 ? image1 : currentSlide === 2 ? image2 : image3} className="carousel-image" alt={`Slide ${currentSlide}`} />
        </div>
        <div className="carousel-info">
         
          
          <label className="carousel-label">Description:</label>
          <p className="carousel-description">Bell Drums 14"x6.5" Cast Bronze Snare Drum with Matching Hoops - Trick Throw Off</p>
          <label className="carousel-label">Price:</label>
          <span className="carousel-price">$3200.00</span>

        </div>
        <button onClick={prevSlide} className="carousel-button carousel-button-prev">❮</button>
        <button onClick={nextSlide} className="carousel-button carousel-button-next">❯</button>
      </div>
    </div>
    </div>
  );
}

export default DrumCarousel;
