import React, { useContext } from 'react'
import './Navbar.css'
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from '../../context/AuthContext.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {

    const { dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
        localStorage.removeItem("user");
        navigate("/login");
    };

    const {user} = useContext(AuthContext);

    return (
        <div className="navbar">
            <div className="navContainer">
                <Link to="/" style={{color:'inherit', textDecoration:'none'}}>
                <span className="logo">bookeasy</span>
                </Link>
                {user ? 
                (<>
                <div className='user' style={{display:'flex', gap:'20px'}}>
                    <div className="username">{user.username}</div>
                    <FontAwesomeIcon icon={faRightFromBracket} style={{cursor:'pointer'}} onClick={handleLogout}/>
                </div>
                </>) 
                : (
                <div className="navItems">
                    <Link to='/register'><button className="navButton">Register</button></Link>
                    <Link to='/login'><button className="navButton">Sign in</button></Link>
                </div>
                )
                }
            </div>
        </div>
    )
}

export default Navbar
