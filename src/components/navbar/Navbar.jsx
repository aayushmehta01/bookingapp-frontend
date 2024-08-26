import React from 'react'
import './Navbar.css'

const Navbar = ({type}) => {
  return (
    <div className={type==="list" ? "listNavbar" : "navbar"}>
      <div className="navContainer">
        <span className="logo">bookeasy</span>
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
