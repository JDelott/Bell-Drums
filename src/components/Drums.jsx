// Drums.jsx

import React from 'react';
import Slider from 'react-slick';
import './Drums.css';
import bellsnareheroImage from '../assets/bellsnarehero.jpeg';
import featuredsnareImage from '../assets/featuredsnare.jpeg';
import herobottomsnareImage from '../assets/herobottomsnare.jpeg';

const Drums = () => {
  const images = [bellsnareheroImage, featuredsnareImage, herobottomsnareImage];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="drums-item">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="carousel-image">
            <img src={image} alt={`Drum ${index + 1}`} className="drum-image" />
          </div>
        ))}
      </Slider>
      <div className="drums-details">
        {/* <h2 className="drums-description">{description}</h2>
        <p className="drums-price">{price}</p> */}
      </div>
    </div>
  );
};

export default Drums;
