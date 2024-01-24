// Footer.js

import React from 'react';
import './Footer.css';
import logo from '../assets/logo.png';


const Footer = () => {
  return (
    
    <div className='footer line'>
      <div className='container'>
        <div>
        
        <div className='logo'>
                <img src={logo} alt='Logo' />
            </div>
          {/* <h1>Bell<span className='primary'>Drums</span></h1> */}
        </div>
        <div className='support-section'>
          
         
          <div className='support-links'>
            <a href='/'>Contact</a>
            
          
          </div>
           
        </div>
      </div>
    </div>
  );
}

export default Footer;
