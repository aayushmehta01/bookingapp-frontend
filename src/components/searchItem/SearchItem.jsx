import React from 'react';
import './SearchItem.css';
import { Link } from "react-router-dom";

const SearchItem = ({item}) => {
    return (
        <div className="searchItem">
            <img
                src="https://cf.bstatic.com/xdata/images/hotel/square600/442796608.webp?k=bd9788f6decdcf70060e4f3acb0d561df8eb378e96ea55f76c0b692398abbd77&o="
                alt=""
                className="siImg"
            />
            <div className="siDesc">
                <h1 className="siTitle">{item.name}</h1>
                <span className="siDistance">
                    {item.distance} km from center, <span>{item.city}</span>
                </span>
                <span className="siTaxiOp">
                    Free airport taxi
                </span>
                <span className="siSubtitle">
                    Studio Apartment with Air conditioning
                </span>
                <span className="siFeatures">
                    {item.desc}
                </span>
                <span className="siCancelOp">
                    Free cancellation
                </span>
                <span className="siCancelOpSubtitle">
                    You can cancel later, so lock in this great price today!
                </span>
            </div>
            <div className="siDetails">
                {item.rating && <div className="siRating">
                    <span>Excellent</span>
                    <button>{item.rating}</button>
                </div>}
                <div className="siDetailTexts">
                    <span className="siPrice">₹ {item.cheapestPrice}</span>
                    <span className="siTaxOp">+₹ {Math.round(item.cheapestPrice*0.3)} taxes and charges</span>
                    <Link to={`/hotels/${item._id}`}>
                        <button className="siCheckButton">See availability</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SearchItem