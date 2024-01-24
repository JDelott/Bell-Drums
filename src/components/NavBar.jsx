import React, {useState} from 'react'
import './NavBar.css'
import {FaBars, FaTimes} from 'react-icons/fa'
import logo from '../assets/logo.png';




const Navbar = () => {
const [click, setClick] = useState(false)
const handleClick = () => setClick(!click)


    return (
        <div className='header'>
            <div className='container'>
            <div className='logo'>
                <img src={logo} alt='Logo' />
            </div>
            {/* <h1>Bell<span className='primary'>Drums</span></h1> */}
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <a href='/'>Drums</a>
                    </li>
                    <li>
                        <a href='/'>About</a>
                    </li>
                    <li>
                        <a href='/'>Contact</a>
                    </li>
                </ul>
                <div className='btn-group'>
                    <button className='btn'>Shop Now</button>
                </div>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={20} style={{color: '#333'}}/>) : (<FaBars size={20} style={{color: '#333'}} />)}
                    
                </div>
                
            </div>
        </div>
    )
}

export default Navbar
