import { useContext, useState } from 'react';
import './Hotel.css';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBanSmoking, faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot, faMugSaucer, faWifi, faWineGlass } from '@fortawesome/free-solid-svg-icons';
import useFetch from '../../hooks/useFetch';
import { useLocation } from 'react-router-dom';
import { SearchContext } from '../../context/searchContext';

const Hotel = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const { data, loading, error } = useFetch(`/api/hotels/find/${id}`);

    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);

    const { date, options} = useContext(SearchContext);

    const MILLISECOND_PER_DAY = 1000*60*60*24;
    function dayDifference(date1, date2){
        const timeDiff = Math.abs(date2.getTime() - date1.getTime());
        const daysDiff = Math.ceil(timeDiff / MILLISECOND_PER_DAY);
        return daysDiff;
    }
    
    const days = dayDifference(date[0].endDate, date[0].startDate);
    
    const images = [
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/162421571.jpg?k=848f7adb33e705d0a19e2c7818ec9a3c1f9e161d6a282cf12805289a48869cec&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max500/162421585.jpg?k=866fb4778e1af30a12954b8f9a4d4d12a96d34cc7f747ee0a728c97ff6b12b52&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max500/162421572.jpg?k=8cc214764295a158fb383ba9892d32b8262a15b81ce97d6ceae68b2b2a7dc656&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/162631939.jpg?k=5e7086e7a645be3a665b0f595e67a4d5394df539b3f5b2c65d070a174a2ad7dc&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max300/162421577.jpg?k=57a5ddf516fe09f053169e2cc46b07130dc2116f179a25d070044c0a0ee30cc1&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max300/162421567.jpg?k=6ea43415760b5e7dc31ebc89580ef3455e0d6cbe0fcfce3c5ff2fff416c122cc&o=&hp=1"
        }
    ]

    const handleOpen = (i) => {
        setSlideNumber(i);
        setOpen(true);
    };
    
    const handleMove = (direction) => {
        let newSlideNumber;

        if (direction === "l") {
            newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
        } else {
            newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
        }

        setSlideNumber(newSlideNumber);
    };

    return (
        <div>
            <Navbar />
            <Header type="list" typeHotel="hotel"/>
            {loading ? ("loading please wait") : (
                <div className="hotelMain">
                {open && (
                <div className="slider">
                    <FontAwesomeIcon
                    icon={faCircleXmark}
                    className="close"
                    onClick={() => setOpen(false)}
                    />
                    <FontAwesomeIcon
                    icon={faCircleArrowLeft}
                    className="arrow"
                    onClick={() => handleMove("l")}
                    />
                    <div className="sliderWrapper">
                    <img src={images[slideNumber].src} alt="" className="sliderImg" />
                    </div>
                    <FontAwesomeIcon
                    icon={faCircleArrowRight}
                    className="arrow"
                    onClick={() => handleMove("r")}
                    />
                </div>
                )}
                <div className="hotelWrapper">
                    <button className="hotelBook">Reserve</button>
                    <h1 className="hotelTitle">{data.name}</h1>
                    <div className="hotelAddress">
                        <FontAwesomeIcon icon={faLocationDot} className='icon'/>
                        <span>{data.address}</span>
                    </div>
                    <div className="hotelImages">
                        {images.map((photo, index)=>(
                            <div 
                            className="hotelImgWrapper"
                            key={index}
                            onClick={()=>handleOpen(index)}
                            >
                                <img src={photo.src} className='hotelImg'/>
                            </div>
                        ))}
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailsText">
                            <h1 className="hotelTitle">{data.title}</h1>
                            <p className="hotelDesc">
                            Located in Madgaon,  {data.distance}m from Margao Railway Station. {data.desc}.
                            </p>
                            <div className="hotelFacility">
                                <h2>Most popular facilities</h2>
                                <div className="facilityOp">
                                    <div className="facility">
                                        <FontAwesomeIcon  icon={faWifi} className="facilityIcon"/>
                                        <span>Free Wifi</span>
                                    </div>
                                    <div className="facility">
                                        <FontAwesomeIcon  icon={faBanSmoking} className="facilityIcon"/>
                                        <span>Non-smoking rooms</span>
                                    </div>
                                    <div className="facility">
                                        <FontAwesomeIcon  icon={faWineGlass} className="facilityIcon"/>
                                        <span>Bar</span>
                                    </div>
                                    <div className="facility">
                                        <FontAwesomeIcon  icon={faMugSaucer} className="facilityIcon"/>
                                        <span>Breakfast</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hotelDetailPrice">
                            <h1>Property highlights</h1>
                            <h2>Perfect for a {days}-night stay!</h2>
                            <span> Top location: Highly rated by recent guests ({data.rating || '8.2'}) </span>
                            <h2 className='price'><b>₹ {days * data.cheapestPrice * options.room}</b> ({days} nights)</h2>
                            <button>Reserve</button>
                        </div>
                    </div>
                </div>
            <MailList />
            <Footer />
            </div>)}
        </div>
    )
}

export default Hotel
