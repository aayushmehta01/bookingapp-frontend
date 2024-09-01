import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar.jsx";
import Header from "../../components/header/Header.jsx";
import "./List.css";
import { useLocation } from "react-router-dom";
import SearchItem from "../../components/searchItem/SearchItem.jsx";
import useFetch from '../../hooks/useFetch'

const List = () => {
    const location = useLocation();
    
    const { destination, date, options } = location.state || {
        destination: '',
        date: [
            {
                startDate: new Date(),
                endDate: new Date(),
                key: 'selection',
            },
        ],
        options: {
            adult: 2,
            children: 0,
            room: 1,
        },
    };

    const [min, setMin] = useState(undefined);
    const [max, setMax] = useState(undefined);

    const handleListSearch = ()=>{
        reFetch();
    }

    const { data, loading, error, reFetch } = useFetch(`/api/hotels?city=${destination}&min=${min || 1}&max=${max || 999}`);
    console.log(data);

    return (
    <div>
		<Navbar />
		<Header type="list" prefill={{destination, date, options}}/>
		<div className="lsContainer">
			<div className="lsWrapper">
				<div className="left">
                    <div className="lsMap">
                    </div>
                    <div className="lsSearch">
                        <h1 className="lsTitle">Filter by:</h1>
                        <div className="lsOption">
                            <h2 className="lsOptionHeading">Your budget (per night)</h2>
                            <div className="lsOptionItem">
                                <span className="lsOptionText">Min price</span>
                                <div className="lsOptionInputdiv">
                                    <span>₹</span>
                                    <input type="number" onChange={(e)=>setMin(e.target.value)} className="lsOptionInput" min={500} max={20000}/>
                                </div>
                            </div>
                            <div className="lsOptionItem">
                                <span className="lsOptionText">Max price</span>
                                <div className="lsOptionInputdiv">
                                    <span>₹</span>
                                    <input type="number" onChange={(e)=>setMax(e.target.value)} className="lsOptionInput" min={500} max={20000}/>
                                </div>
                            </div>
                            <button onClick={handleListSearch}>Search</button>
                        </div>
                    </div>
                </div>
				<div className="lsResult">
                {loading ? ("loading please wait") : (
                    <>
                    {data.map((item)=>(
                        <SearchItem item={item} key={item._id}/>
                    ))
                    }
                    </>
                    )
                }
                </div>
			</div>
		</div>
    </div>
  );
};

export default List;