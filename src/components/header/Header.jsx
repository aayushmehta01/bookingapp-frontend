import {useState} from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCar, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css fil
import SearchBar from '../searchbar/SearchBar.jsx'

const Header = ({type}) => {
  return (
    <div className="header">
        <div className={type==="list" ? "headerContainer listMode" : "headerContainer"}>
            <div className="headerList">
                <div className="headerListItem active">
                    <FontAwesomeIcon icon={faBed} />
                    <span>Stays</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faPlane} />
                    <span>Flights</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faCar} />
                    <span>Car Rentals</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faBed} />
                    <span>Attractions</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faTaxi} />
                    <span>Airport Taxi</span>
                </div>
            </div>
            {type !== "list" &&
            <>
            <h1 className='headerTitle'>Booking made easy.</h1>
            <p className="headerDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis fugit consectetur molestiae nobis necessitatibus.</p>
            <button className="headerBtn">Sign In / Register</button>

            <SearchBar />
            </>
            }
        </div>
    </div>
  )
}

export default Header
