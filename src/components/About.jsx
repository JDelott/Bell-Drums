// About.js

import React from 'react';
import Footer from '../components/Footer';
import './About.css';

const About = () => {
  return (
    <>
      <div className="about-container about-featured">
        <h1 className="about-title">About Us</h1>
        <p className="about-text">
          Welcome to Bell Drums, your go-to destination for high-quality drum
          instruments. We are passionate about delivering top-notch drumming
          experiences to musicians around the world.
        </p>
        <p className="about-text">
          Our mission is to provide you with the finest drums, accessories, and
          expert advice to enhance your musical journey. Whether you're a
          beginner or a seasoned drummer, we have the perfect products to meet
          your needs.
        </p>
        <p className="about-text">
          Explore our catalog, connect with our community, and take your drumming
          skills to the next level with Bell Drums.
        </p>
      </div>
      <Footer className="footer"/>
    </>
  );
};

export default About;
