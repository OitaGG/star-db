import React, {Component} from "react";
import Header from "../header/header";
import RandomPlanet from "../random-planet/random-planet";
import ToggleRandomPlanetButton from "../toggle-random-planet-button/toggle-random-planet-button";
import PeoplePage from "../pages/people-page/people-page";
import PlanetPage from "../pages/planet-page/planet-page";
import StarshipPage from "../pages/starship-page/starship-page";
import ErrorHandler from "../error-handler/ErrorHandler";
import SwapiService from "../../services/swapi-service";
import {Provider} from "../swapi-service-context/swapi-service-context";
import './app.css'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showRandomPlanet: true,
        };
        this.swapiService = new SwapiService();
    };

    toggleRandomPlanet = () => {
        this.setState({
            showRandomPlanet: !this.state.showRandomPlanet,
        });
    };

    render() {
        const {showRandomPlanet} = this.state;
        const randomPlanetView = showRandomPlanet ? <RandomPlanet /> : null;
        return(
            <ErrorHandler>
                <Provider value={this.swapiService}>
                    <div className="app-container">
                        <Header/>
                        {randomPlanetView}
                        <ToggleRandomPlanetButton togglePlanet={() => this.toggleRandomPlanet()}/>
                        <PeoplePage/>
                        <PlanetPage/>
                        <StarshipPage/>
                    </div>
                </Provider>
            </ErrorHandler>
        );
    }
};