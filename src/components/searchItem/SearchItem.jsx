import React from 'react';
import './SearchItem.css';

const SearchItem = () => {
    return (
        <div className="searchItem">
            <img
                src="https://cf.bstatic.com/xdata/images/hotel/square600/442796608.webp?k=bd9788f6decdcf70060e4f3acb0d561df8eb378e96ea55f76c0b692398abbd77&o="
                alt=""
                className="siImg"
            />
            <div className="siDesc">
                <h1 className="siTitle">Storii By ITC Hotels Moira Riviera</h1>
                <span className="siDistance">
                    500m from center
                </span>
                <span className="siTaxiOp">
                    Free airport taxi
                </span>
                <span className="siSubtitle">
                    Studio Apartment with Air conditioning
                </span>
                <span className="siFeatures">
                    Entire studio • 1 bathroom • 21m² 1 full bed
                </span>
                <span className="siCancelOp">
                    Free cancellation
                </span>
                <span className="siCancelOpSubtitle">
                    You can cancel later, so lock in this great price today!
                </span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
                <div className="siDetailTexts">
                    <span className="siPrice">₹ 3,990</span>
                    <span className="siTaxOp">+₹ 9,809 taxes and charges</span>
                    <button className="siCheckButton">See availability</button>
                </div>
            </div>
        </div>
    )
}

export default SearchItem