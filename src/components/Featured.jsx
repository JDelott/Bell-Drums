import React from 'react'
import './Featured.css'
import featuredsnare from '../assets/bellsnarehero.jpeg'


const Featured = () => {
    return (
        <div className='signup featured'>
            <div className='container'>
                {/* left */}
                <div>
                    <img src={featuredsnare} alt='snare pic'/>
                </div>

                {/* right */}
                <div className='right'>
                    <h2>The nicest snare drum in your collection</h2>
                    <p>Play your heart out with the greatest brass bell snare drum on the market, for quality and price look no further. </p>
                    
                    
                    
                </div>
                {/* <div className='btnright'>
                        <button className='btn'>Shop Now</button>
                    </div> */}

            </div>
        </div>
    )
}

export default Featured
