import React from 'react'
import { Link } from 'react-router-dom'
import "../navbar/NavbarStyle.css"

export default function Navbar() {
  return (
    <div>
      <div className='navbar'>
        <div className='mini-logo'>
          <p className='mlogo'>Mini</p>
        </div>
        <div className='nav-links'>
          <ul>
            <Link to={'/'} style={{ textDecoration: "none", color: "black" }}><li>Home</li></Link>
            <li>About</li>
            <Link to={'/map'} style={{ textDecoration: "none", color: "black" }}><li>Map</li></Link>
          </ul>
        </div>
      </div>
    </div>
  )
}
