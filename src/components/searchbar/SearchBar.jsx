import {Children, useState} from 'react'
import './SearchBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCalendarDays, faPerson } from '@fortawesome/free-solid-svg-icons'
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({ prefill = {} }) => {
    const [openDate, setOpenDate] = useState(false);
    const [openOptions, setOpenOptions] = useState(false);
    
    const [destination, setDestination] = useState(prefill.destination || "");
    const [date, setDate] = useState(prefill.date || [
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
    ]);

    const [options, setOptions] = useState(prefill.options || {
        adult: 2,
        children: 0,
        room: 1,
    });
    
    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "i" ? prev[name] + 1 : prev[name] - 1,
            };
        });
    };

    const navigate = useNavigate();
    
    const handleSearch = ()=>{
        navigate("/hotels", {state:{ destination, date, options }})
    }

    return (
    <div className="headerSearch">
        <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} className='headerIcon'/>
            <input
            type="text"
            placeholder='Where are you going?'
            className='headerSearchInput'
            value={destination}
            onChange={e=>setDestination(e.target.value)}
            />
        </div>
        <div className="headerSearchItem" >
            <FontAwesomeIcon icon={faCalendarDays} className='headerIcon'/>
            <span onClick={()=>setOpenDate(!openDate)} className="headerSearchText">
                {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}
            </span>
            {openDate &&
            <DateRange
                editableDateInputs={true}
                onChange={item => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className='headerDateRange'
            />}
        </div>
        <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className='headerIcon'/>
            <span onClick={()=>setOpenOptions(!openOptions)} className="headerSearchText">
                {`${options.adult} adult · ${options.children} children · ${options.room} room`}
            </span>
            {openOptions &&
            <div className="options">
                <div className="optionItem">
                    <span className="optionText">Adult</span>
                    <div className="optionCounter">
                        <button
                        disabled={options.adult<=1}
                        className="optionCounterButton"
                        onClick={()=>handleOption("adult", "d")}
                        >-</button>
                        <span className="optionCounterNumber">{options.adult}</span>
                        <button
                        className="optionCounterButton"
                        onClick={()=> handleOption("adult", "i")}
                        >+</button>
                    </div>
                </div>
                <div className="optionItem">
                    <span className="optionText">Children</span>
                    <div className="optionCounter">
                        <button 
                        disabled={options.children<1} 
                        className="optionCounterButton"
                        onClick={()=> handleOption("children", "d")}
                        >-</button>
                        <span className="optionCounterNumber">{options.children}</span>
                        <button
                        className="optionCounterButton"
                        onClick={()=> handleOption("children", "i")}
                        >+</button>
                    </div>
                </div>
                <div className="optionItem">
                    <span className="optionText">Room</span>
                    <div className="optionCounter">
                        <button
                        disabled={options.room<=1}
                        className="optionCounterButton"
                        onClick={()=> handleOption("room", "d")}
                        >-</button>
                        <span className="optionCounterNumber">{options.room}</span>
                        <button
                        className="optionCounterButton"
                        onClick={()=> handleOption("room", "i")}
                        >+</button>
                    </div>
                </div>
            </div>}
        </div>

        <div className="headerSearchItem">
            <button
            className="headerSearchBtn"
            onClick={handleSearch}
            >Search</button>
        </div>
    </div>
  )
}

export default SearchBar
