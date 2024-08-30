import React from "react";
import Navbar from "../../components/navbar/Navbar.jsx";
import Header from "../../components/header/Header.jsx";
import "./List.css";

const List = () => {
  return (
    <div>
		<Navbar type="list" />
		<Header type="list" />
		<div className="lContainer">
			<div className="lWrapper">
				<div className="lSearch">
					<h1 className="lTitle">Search</h1>
					
				</div>
				<div className="lResult">r</div>
			</div>
		</div>
    </div>
  );
};

export default List;