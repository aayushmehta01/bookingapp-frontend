import React from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogo = ()=>{
        navigate('/')
    }

    return (
        <div className="navbar">
            <div className="navContainer">
                <span className="logo" onClick={handleLogo}>bookeasy</span>
                <div className="navItems">
                <button className="navButton">Register</button>
                <button className="navButton">Sign in</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
