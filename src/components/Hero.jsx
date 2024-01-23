import React from 'react'
import './Hero.css'
import SnareHero from '../assets/bellsnarehero.jpeg'


export const Hero = () => {
  return (
    <div className='hero'>
        <div className='container'>
        <div className='left'>
            <p>Bell Drums, your new favorite snare drum awaits.</p>
            <h1>Get the tone you can only find with Bell Drums</h1>
            <p>Explore all the drums and pricing info</p>
            <div className='input-container'>
                <button className='btn'> Learn More</button>
            </div>
        </div>
        
        <div className='right'>
            <div className='img-container'>
                <img src={SnareHero} alt='snarepic' />
            </div>

        </div>

        </div>
    </div>
  )
}
