import React from 'react'
import './Featured.css'
import useFetch from '../../hooks/useFetch'

const Featured = () => {
    const {data, loading, error} = useFetch("/api/hotels/countByCity?cities=goa,ooty,munnar,rishikesh");

    return (
    <div className="featured">
      {loading ? ("loading please wait") : (
        <>
            <div className="featuredItem">
                <img
                src="https://r-xx.bstatic.com/xdata/images/region/170x136/49646.jpg?k=b7f38878b9164ee38e0b99c4d4646dbea76b7bf4add8464b1aa75e4c9d0efc6e&o="
                alt="Goa"
                className='featuredImg'
                />
                <div className="featuredTitle">
                    <h1>Goa</h1>
                    <h2>{data[0]} Properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img
                src="https://r-xx.bstatic.com/xdata/images/city/170x136/684919.jpg?k=0a73fce29109503c055e288c413d9a1c5bd66fdb26f01c1438e8017b0b64b42f&o="
                alt="Ooty"
                className='featuredImg'
                />
                <div className="featuredTitle">
                    <h1>Ooty</h1>
                    <h2>{data[1]} Properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img
                src="https://r-xx.bstatic.com/xdata/images/city/170x136/684720.jpg?k=fdb1d9397eeb9b17d4a1ef6fdf806e6b4366d5ebda38d7f0c212b9c1bec8dcea&o="
                alt="Munnar"
                className='featuredImg'
                />
                <div className="featuredTitle">
                    <h1>Munnar</h1>
                    <h2>{data[2]} Properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img
                src="https://cf.bstatic.com/xdata/images/xphoto/300x240/140018183.jpg?k=9c5c044264eeae74e558133f082a3449c14b23c4114d26a08a158c515f92f041&o="
                alt="Rishikesh"
                className='featuredImg'
                />
                <div className="featuredTitle">
                    <h1>Rishikesh</h1>
                    <h2>{data[3]} Properties</h2>
                </div>
            </div>
        </>
      )
      }
    </div>
    )
}

export default Featured
