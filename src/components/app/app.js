import React, {Component} from "react";
import Header from "../header/header";
import RandomPlanet from "../random-planet/random-planet";
import ToggleRandomPlanetButton from "../toggle-random-planet-button/toggle-random-planet-button";
import ErrorIndicator from "../error-indicator/error-indicator";

import './app.css'
import PeoplePage from "../people-page/people-page";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showRandomPlanet: true,
            error: false
        };
    }

    componentDidCatch() {
        this.setState({
            error: true
        });
    }

    toggleRandomPlanet = () => {
        this.setState({
            showRandomPlanet: !this.state.showRandomPlanet,
        });
    };

    render() {
        const {showRandomPlanet, error} = this.state;
        if(error){
            return <ErrorIndicator />
        }
        const randomPlanetView = showRandomPlanet ? <RandomPlanet /> : null;
        return(
            <div className="app-container">
                <Header/>
                {randomPlanetView}
                <ToggleRandomPlanetButton togglePlanet={() => this.toggleRandomPlanet()}/>
                <PeoplePage/>
            </div>
        );
    }
};