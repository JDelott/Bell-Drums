// Drums.jsx

import React from 'react';
import './Drums.css';
import drum1 from '../assets/bellsnarehero.jpeg';
import drum2 from '../assets/snare-gold-small.png';
import Footer from "./Footer";

const Drums = () => {
  return (
    <div>
    <div className='drum-parent'>
      <div className="drums-item">
        <img src={drum1} alt="Drum Description" className="drum-image" />
        <div className="drums-details">
          <h2 className="drum-description">Bell Drums 14&quot; x 6.5&quot; Bell Brass Snare Drum - Trick Throw Off</h2>
          <p className="drum-price">$3,200.00</p>
        </div>
      </div>
      <div className='gold-drum'>
        <div className="drums-item">
          <img src={drum2} alt="Drum Description" className="drum-image" />
          <div className="drums-details">
            <h2 className="drum-description">Bell Drums 14&quot; x 5.5&quot; 3mm Bell Brass Snare Drum - Trick Throw Off</h2>
            <p className="drum-price">$2500.00</p>
          </div>
        </div>
      </div>
      </div>
       <Footer />
    </div>
  );
};

export default Drums;
