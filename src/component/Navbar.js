import React, { useRef } from 'react'
import {FaBars, FaTimes} from "react-icons/fa"
import './navbar.css'

export default function Navbar() {
    const navRef= useRef()

    const showNavbar= ()=>{
        navRef.current.classList.toggle("responsive_nav")
    }

  return (
    <header>
        <h3 >Furniture</h3>
        <div>
        <nav ref={navRef}>
            <a href="/#">Home</a>
            <a href="/#">Services</a>
            <a href="/#reviews">Reviews</a>
            <a href="/#contact">Contact</a>
            <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                <FaTimes/>
            </button>
        </nav>
        <button className='nav-btn' onClick={showNavbar}>
            <FaBars/>
        </button>
        </div>
    </header>
  )
}
