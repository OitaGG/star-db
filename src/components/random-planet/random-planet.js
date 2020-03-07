import React, {Component} from "react";
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../error-indicator/error-indicator";
import './random-planet.css'
import ErrorHandler from "../error-handler/ErrorHandler";
import {SwapiServiceContext} from "../swapi-service-context/swapi-service-context";
import {PlanetDetails} from "../wrapper-for-items/wrappered-item-details";

export default class RandomPlanet extends Component{
    static contextType = SwapiServiceContext;

    constructor(props) {
        super(props);
        this.state = {
            planet: {},
            loading: true,
            error: false
        };
    }

    componentDidMount() {
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet,10000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false,
            error: false
        });
    };

    updatePlanet = () => {
        const id = Math.floor(Math.random()*25) + 2;
        const swapiService = this.context;
        swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError)
    };

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
        const planetView = hasData ? <PlanetDetails id={planet.id} classname="random-planet-container"/> : null;


        return (
            <ErrorHandler>
                <div className="random-planet-container d-flex jumbotron rounded">
                    {spinner}
                    {planetView}
                    {errorIndicator}
                </div>
            </ErrorHandler>
        );
    }
}