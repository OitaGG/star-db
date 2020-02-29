import React, {Component} from "react";
import Header from "../header/header";
import RandomPlanet from "../random-planet/random-planet";
import ToggleRandomPlanetButton from "../toggle-random-planet-button/toggle-random-planet-button";
import PeoplePage from "../people-page/people-page";
import ErrorHandler from "../error-handler/ErrorHandler";
import './app.css'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showRandomPlanet: true,
        };
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
                <div className="app-container">
                    <Header/>
                    {randomPlanetView}
                    <ToggleRandomPlanetButton togglePlanet={() => this.toggleRandomPlanet()}/>
                    <PeoplePage/>
                </div>
            </ErrorHandler>
        );
    }
};