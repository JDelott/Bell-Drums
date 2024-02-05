// Footer.js

import React from 'react';
import './Footer.css';
import bluelogo from '../assets/bluelogo.png';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaEbay, FaYoutube  } from 'react-icons/fa'



const Footer = () => {
  return (
    <div className='footer line'>
      <div className='container'>
        <div>
          <div className='logo'>
          <Link to="/">
            <img src={bluelogo} alt='Logo' />
          </Link>
          </div>
        </div>
        <div className='support-links'>
          <div className='shop-link'>
            <a href='/contact'>Contact</a>
          </div>
          <div className='shop-link'>
            <a href='/'>FAQ</a>
          </div>
          <div className='shop-link'>
            <a href='/drums'>Catalogue</a>
          </div>
          <div >
           <div className='social-icons FaFacebook icon-space'>
            {/* <div className='social-icon-link'>
              <FaFacebook />
            </div> */}
            <div className='social-icon-link'>
            <Link to='https://www.ebay.com/sch/i.html?item=305364527617&rt=nc&_trksid=p4429486.m3561.l161211&_ssn=jacobwbell1'>
              <FaEbay />
            </Link>
            </div>
            <div className='social-icon-link'>
            <Link to='https://www.instagram.com/bell_drums_official/'>
              <FaInstagram />
            </Link>
            </div>
            {/* <div className='social-icon-link'>
              <FaTwitter />
            </div> */}
            {/* <div className='social-icon-link'>
              <FaYoutube />
            </div> */}
            {/* Add more icons as needed */}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
