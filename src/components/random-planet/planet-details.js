import React, {Component} from "react";

import './random-planet.css'

export default class RandomPlanet extends Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="random-planet-container d-flex jumbotron rounded">
                <img className="random-planet-img" src="https://starwars-visualguide.com/assets/img/planets/2.jpg"/>
                <div className="random-planet-info-container">
                    <h4>Planet Name</h4>
                    <ul className="list-group-flush">
                        <li className="list-group-item">
                            <span>Population:</span>
                            <span>125000</span>
                        </li>
                        <li className="list-group-item">
                            <span>Rotation Period:</span>
                            <span>125</span>
                        </li>
                        <li className="list-group-item">
                            <span>Diameter:</span>
                            <span>130</span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}