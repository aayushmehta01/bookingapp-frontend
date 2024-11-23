import React from 'react'
import './FeaturedProperties.css'
import useFetch from '../../hooks/useFetch'

const FeaturedProperties = () => {
    const {data, loading, error} = useFetch("/api/hotels?featured=true");

    return (
    <div className="fp">
        {loading ? ("loading please wait") : (
            <>
            {data.slice(0,4).map((item)=>(
                <div className="fpItem" key={item._id}>
                    <img
                    src="https://cf.bstatic.com/xdata/images/hotel/square600/556288034.jpg?k=3f014dd27df4ffa8285431bd46620bc286812717ceb16281515a09b31c113849&o="
                    alt="NewDelhihotel"
                    className="fpImg"
                    />
                    <div className="fpItemDetails">
                        <span className="fpName">{item.name}</span>
                        <span className="fpCity">{item.city}</span>
                        {item.rating && <div className="fpRating">
                            <button>{item.rating}</button>
                            <span>Good</span>
                        </div>}
                        <span className="fpPrice">2 nights <strong>₹{item.cheapestPrice*2}</strong></span>
                    </div>
                </div>
                ))}
            </>
            )
        }
    </div>
  )
}

export default FeaturedProperties;