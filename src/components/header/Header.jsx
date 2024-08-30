import {useState} from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArchway, faBed, faCar, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css fil
import SearchBar from '../searchbar/SearchBar.jsx'

const Header = ({type}) => {
    
    const [activeIndex, setActiveIndex] = useState(0);

    const headerItems = [
        { icon: faBed, label: 'Stays' },
        { icon: faPlane, label: 'Flights' },
        { icon: faCar, label: 'Car Rentals' },
        { icon: faArchway, label: 'Attractions' },
        { icon: faTaxi, label: 'Airport Taxi' },
    ];

    const handleItemClick = (index) => {
        setActiveIndex(index);
    };
    
  return (
    <div className={type==="list" ? "listHeader" : "header"}>
        <div className={type==="list" ? "headerContainer listMode" : "headerContainer"}>
            {/* <div className="headerList">
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
            </div> */}
            <div className="headerList">
                {headerItems.map((item, index) => (
                    <div
                        key={index}
                        className={`headerListItem ${activeIndex === index ? 'active' : ''}`}
                        onClick={() => handleItemClick(index)}
                    >
                        <FontAwesomeIcon icon={item.icon} />
                        <span>{item.label}</span>
                    </div>
                ))}
            </div>

            {type !== "list" &&
            <div className='headerHero'>
                <h1 className='headerTitle'>A place to call home</h1>
                <h1 className="headerTitle">on your next adventure</h1>
                <p className="headerDesc">Experience the joy of an entire place to yourself     </p>
                <button className="headerBtn">Book a holiday</button>
                <SearchBar />
            </div>
            }

            {type === "list" && 
            <div className="headerHero">
                <SearchBar />
            </div>
            }
        </div>
    </div>
  )
}

export default Header