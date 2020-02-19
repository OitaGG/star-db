import React from "react";
import Header from "../header/header";
import RandomPlanet from "../random-planet/random-planet";
import ListItem from "../list-item/list-item";
import PersonDetails from "../person-details/person-details";

import './app.css'

const App = () => {
  return (
      <div className="app-container">
          <Header/>
          <RandomPlanet/>
          <ListItem/>
          <PersonDetails/>
      </div>
  );
};

export default App;