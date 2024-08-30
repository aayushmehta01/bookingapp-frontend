import React from "react";
import Navbar from "../../components/navbar/Navbar.jsx";
import Header from "../../components/header/Header.jsx";
import "./List.css";
import { useLocation } from "react-router-dom";

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
		<Navbar type="list" />
		<Header type="list" prefill={{destination, date, options}}/>
		<div className="lContainer">
			<div className="lWrapper">
				<div className="lSearch">
					<h1 className="lTitle">Filter by:</h1>
				</div>
				<div className="lResult">r</div>
			</div>
		</div>
    </div>
  );
};

export default List;