import React, {Component} from "react";
import Spinner from "../spinner/spinner";
import PlanetView from "./planet-view/planet-view";
import ErrorIndicator from "../error-indicator/error-indicator";
import SwapiService from "../../services/swapi-service";

import './random-planet.css'

export default class RandomPlanet extends Component{
    constructor(props) {
        super(props);
        this.state = {
            planet: {},
            loading: true,
            error: false
        };
        this.swapiService = new SwapiService();
        this.updatePlanet();
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false,
            error: false
        });
    };

    updatePlanet() {
        const id = Math.floor(Math.random()*25) + 2;
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError)
    }

    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    };
    render() {
        const {planet, loading, error} = this.state;
        const hasData = !(loading || error);
        const spinner = loading ? <Spinner/> : null;
        const errorIndicator = error ? <ErrorIndicator/> : null;
        const content = hasData ? <PlanetView planet={planet}/> : null;

        return (
            <div className="random-planet-container d-flex jumbotron rounded">
                {spinner}
                {content}
                {errorIndicator}
            </div>
        );
    }
}