import React from "react";
import { FaCalendar, FaSearch, FaUserFriends } from "react-icons/fa";

export function SearchBar() {
  return (
    <section className="max-width searchbar">
      <div className="searchbar-inner">
        <div>Destination</div>
        <div>
          Check In
          <FaCalendar />
        </div>
        <div>
          Check Out
          <FaCalendar />
        </div>
        <div>
          Guests
          <FaUserFriends />
        </div>
      </div>
      <div className="search-icon">
        <FaSearch />
      </div>
    </section>
  );
}
