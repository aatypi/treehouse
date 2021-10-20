
import React from "react";
import './index.css';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {About} from "./components/pages/about";
import {Destinations} from "./components/pages/Destinations";
import {Help} from "./components/pages/Help";
import {Favorites} from "./components/pages/Favorites";
import {Hotel} from "./components/pages/Hotel";
import {Home} from "./components/pages/Home";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
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
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. 
            
            Lägg över Home!*/}
        <Switch>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/destinations">
            <Destinations />
          </Route>

          <Route path="/help">
            <Help />
          </Route>

          <Route path="/favorites">
            <Favorites />
          </Route>

          <Route path="/hotel/:name">
            <Hotel />
          </Route>

          <Route path="/">
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

