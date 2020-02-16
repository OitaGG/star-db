import React, {Component} from "react";

import './person-details.css'

const PersonDetails = () => {
    return(
      <div className="person-details-container jumbotron d-flex">
          <img className="person-details-img" src="https://starwars-visualguide.com/assets/img/characters/1.jpg"/>

          <div className="person-details-body">
              <h4>Luke Skywaker</h4>
              <ul className="list-group-flush">
                  <li className="list-group-item">
                      <span>Age:</span>
                      <span>25</span>
                  </li>
                  <li className="list-group-item">
                      <span>Gender:</span>
                      <span>Male</span>
                  </li>
                  <li className="list-group-item">
                      <span>Eye color:</span>
                      <span>Blue</span>
                  </li>
              </ul>
          </div>
      </div>
    );
};

export default PersonDetails;