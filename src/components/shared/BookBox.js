import React from "react";
import { FaCalendar, FaUserFriends } from "react-icons/fa";

import DatePickers from "../shared/DatePicker";

const BookBox = () => {
  return (
    <div className="book-box">
      Add Booking
      <div className="book-box-inner">
        <div>
          <h3>Check In</h3>
          <DatePickers /> <FaCalendar />
        </div>
        <div>
          <h3>Check Out</h3>
          <DatePickers /> <FaCalendar />
        </div>
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
        <div >


        <input type="checkbox"/> Booking for work
        </div>
      </div>
    </div>
  );
};

export default BookBox;
