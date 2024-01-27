import React from 'react';
import DrumCarousel from './DrumCarousel'; // Import the DrumCarousel component
import DrumCarousel2 from './DrumCarousel2';
import './Drums.css';
import Footer from "./Footer";

const Drums = () => {
  return (
    <div className=''> {/*drum-featured*/}
      <div className='drum-parent'>
        <div className='gold-drum'>
          <DrumCarousel /> {/* You can add multiple instances of DrumCarousel with different props if needed */}
        </div>
        <div className='carousel-space'>
          <DrumCarousel2 />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Drums;
