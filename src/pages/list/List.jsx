import React from "react";
import Navbar from "../../components/navbar/Navbar.jsx";
import Header from "../../components/header/Header.jsx";
import "./List.css";
import { useLocation } from "react-router-dom";
import SearchItem from "../../components/searchItem/SearchItem.jsx";

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
                                    <input type="number" className="lsOptionInput" min={500} max={20000}/>
                                </div>
                            </div>
                            <div className="lsOptionItem">
                                <span className="lsOptionText">Max price</span>
                                <div className="lsOptionInputdiv">
                                    <span>₹</span>
                                    <input type="number" className="lsOptionInput" min={500} max={20000}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
				<div className="lsResult">
                    <SearchItem />
                    <SearchItem />
                    <SearchItem />
                    <SearchItem />
                </div>
			</div>
		</div>
    </div>
  );
};

export default List;