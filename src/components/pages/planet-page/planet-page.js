import React, {Component} from "react";
import Row from "../../row/Row";
import ErrorHandler from "../../error-handler/ErrorHandler";
import {PlanetList} from "../../wrapper-for-items/wrappered-item-lists";
import {PlanetDetails} from "../../wrapper-for-items/wrappered-item-details";


export default class PlanetPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedPlanet: 3,
        };
    };

    onItemSelected = (planetId) => {
        this.setState({
            selectedPlanet: planetId
        })
    };

    render() {
        const {selectedPlanet} = this.state;
        const itemList = (
            <PlanetList
                onItemSelected={this.onItemSelected}
                renderLabel={(item) => <span>{item.name}</span>}
            />);
        const planetView = <PlanetDetails id={selectedPlanet}/>;
        return(
            <ErrorHandler>
                <Row leftBar={itemList} rightBar={planetView}/>
            </ErrorHandler>
        );
    }
}