import React from "react";
import "./index.css";

import "./components/shared/Menu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { About } from "./components/pages/about";
import { Destinations } from "./components/pages/Destinations";
import { Help } from "./components/pages/Help";
import { Favorites } from "./components/pages/Favorites";
import { Hotel } from "./components/pages/Hotel";
import { Home } from "./components/pages/Home";
import Menu from "./components/shared/Menu";

export default function App() {
  return (
    <Router>
      <div>
        <Menu />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. 
            
            Lägg över Home!*/}
        <Switch>
          <Route path="/about">
            <About />
          </Route>

          <Route path="/destinations">
            <Destinations name="something" />
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
