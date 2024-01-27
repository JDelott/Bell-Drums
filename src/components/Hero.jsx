import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom'
import SnareHero from '../assets/logo.png'


export const Hero = () => {
  return (
    <div className='hero'>
        <div className='container'>
        <div className='left'>
            <p>Bell Drums, your new favorite snare drum awaits...</p>
            <h1>Find your tone  with Bell Drums</h1>
            <p>Explore all the drums and pricing info</p>
            <div className='input-container button-space'>
            <Link to="/drums">
                <button className='btn'>Shop Now</button>
            </Link>
            </div>
        </div>
        <Link to='/drums'>
        <div className='right'>
            <div className='img-container'>
            
                <img src={SnareHero} alt='snarepic' />
            </div>

        </div>
        </Link>
        </div>
    </div>
  )
}
