import React from 'react'
import './HeroBottom.css'
import { Link } from 'react-router-dom'

import herobottom from '../assets/logobw.png'



const HeroBottom = () => {
    return (
        <div className='signup white-space'>
            <div className='container'>
                {/* left */}
                <div className='left'>
                    <img src={herobottom} alt='' />
                </div>

                {/* right */}
                <div className='right'>
                    <h2>Get the best sounding bell brass snare from Bell Drums now!</h2>
                    <p>Once you hear and play this snare drum you will look no further for the snare for every type</p>
                    {/* <div className='input-container'>
                        <Link to="timer" >
                            <button className='btn'>Get Started</button>
                        </Link>    
                        </div> */}
                        <div className='input-container'>
                        <Link to='/drums'>
                            <button className='btn'> Shop Now</button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HeroBottom
