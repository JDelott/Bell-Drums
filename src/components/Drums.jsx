import React from 'react';
import DrumCarousel from './DrumCarousel'; // Import the DrumCarousel component
import './Drums.css';
import Footer from "./Footer";

const Drums = () => {
  return (
    <div>
      <div className='drum-parent'>
        <div className='gold-drum'>
          <DrumCarousel /> {/* You can add multiple instances of DrumCarousel with different props if needed */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Drums;
