import React from "react";
import { Link } from "react-router-dom";

// Menu component managing the links for all pages
export default function Menu() {
  return (
    <nav id="Main-Navigation">
      <div className="logo"></div>
      <ul className="navigation-wrapper">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/destinations">Destinations</Link>
        </li>
        <li>
          <Link to="/favorites">Favorites</Link>
        </li>
        <li>
          <Link to="/help">Help</Link>
        </li>
      </ul>
      <div className="secondary-navigation"></div>
    </nav>
  );
}
