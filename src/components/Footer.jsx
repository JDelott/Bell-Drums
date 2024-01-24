// Footer.js

import React from 'react';
import './Footer.css';
import logo from '../assets/logo.png';
import { FaFacebook, FaInstagram, FaTwitter, FaEbay, FaYoutube  } from 'react-icons/fa'



const Footer = () => {
  return (
    <div className='footer line'>
      <div className='container'>
        <div>
          <div className='logo'>
            <img src={logo} alt='Logo' />
          </div>
        </div>
        <div className='support-links'>
          <div className='shop-link'>
            <a href='/'>Contact</a>
          </div>
          <div className='shop-link'>
            <a href='/'>FAQ</a>
          </div>
          <div className='shop-link'>
            <a href='/'>Catalogue</a>
          </div>
          <div >
           <div className='social-icons FaFacebook icon-space'>
            <div className='social-icon-link'>
              <FaFacebook />
            </div>
            <div className='social-icon-link'>
              <FaEbay />
            </div>
            <div className='social-icon-link'>
              <FaInstagram />
            </div>
            <div className='social-icon-link'>
              <FaTwitter />
            </div>
            <div className='social-icon-link'>
              <FaYoutube />
            </div>
            {/* Add more icons as needed */}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
