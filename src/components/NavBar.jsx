import React, {useState} from 'react'
import './NavBar.css'
import {FaBars, FaTimes} from 'react-icons/fa'
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';



const Navbar = () => {
const [click, setClick] = useState(false)
const handleClick = () => setClick(!click)


    return (
        <div className='header'>
            <div className='container'>
            <div className='logo'>
            <Link to="/">
                <img src={logo} alt='Logo' />
            </Link>
            </div>
            {/* <h1>Bell<span className='primary'>Drums</span></h1> */}
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <a href='/drums'>Drums</a>
                    </li>
                    <li>
                        <a href='/about'>About</a>
                    </li>
                    <li>
                        <a href='/contact'>Contact</a>
                    </li>
                </ul>
                <div className='btn-group'>
                <Link to="/drums">
                    <button className='btn'>Shop Now</button>
                </Link>
                </div>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={20} style={{color: '#333'}}/>) : (<FaBars size={20} style={{color: '#333'}} />)}
                    
                </div>
                
            </div>
        </div>
    )
}

export default Navbar
