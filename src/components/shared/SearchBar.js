import React, { useState } from "react";
import { FaCalendar, FaSearch, FaUserFriends } from "react-icons/fa";
import DatePickers from "./DatePicker";

// Searchbar is a dummy for searching,
//and it creates popup to show interactivity

const SearchBar = () => {
  const [popUp, openPopUp] = useState(false);

  return (
    <section className="max-width searchbar">
      <div className="searchbar-inner">
        <div>
          <h3>Destination</h3>
          <input type="text" placeholder="Select your next destination" />
        </div>
        <div>
          <h3>Check In</h3>
          <DatePickers /> <FaCalendar />
        </div>
        <div>
          <h3>Check Out</h3>
          <DatePickers /> <FaCalendar />
        </div>
        {
          //creates a dropdown selector
        }
        <div>
          <h3>Guests</h3>
          <select name="guests" id="Guests">
            <option> Number Of Guests</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
          </select>
          <FaUserFriends />
        </div>
        {
          //creates a button that on click provides a popup message
          //to demonstrate that it could work :))))))))))
        }
        <button className="search-icon" onClick={() => openPopUp(!popUp)}>
          <FaSearch />
          <h3>Search</h3>
        </button>
      </div>
      {popUp && <div className="pop-up">perro</div>}
    </section>
  );
};

export default SearchBar;
