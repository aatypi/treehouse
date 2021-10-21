import React from "react";
import { FaCalendar, FaSearch, FaUserFriends } from "react-icons/fa";

export function SearchBar() {
  return (
    <section className="max-width searchbar">
      <div className="searchbar-inner">
        <div>
          <h3>Destination</h3>
          Select your next destination
        </div>
        <div>
          <h3>Check In</h3>
          Pick a Date <FaCalendar />
        </div>
        <div>
          <h3>Check Out</h3>
          Pick a Date <FaCalendar />
        </div>
        <div>
          <h3>Guests</h3>
          Select number of Guests <FaUserFriends />
        </div>
      </div>
      <div className="search-icon">
        <FaSearch />
        <h3>Search</h3>
      </div>
    </section>
  );
}
