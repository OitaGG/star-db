import React, {Component} from "react";
import Row from "../../row/Row";
import ErrorHandler from "../../error-handler/ErrorHandler";
import {StarshipList} from "../../wrapper-for-items/wrappered-item-lists";
import {StarshipDetails} from "../../wrapper-for-items/wrappered-item-details";
import {Record} from "../../item-details/item-view/item-view";

export default class StarshipPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedStarship: 3,
        };
    };

    onItemSelected = (starshipId) => {
        this.setState({
            selectedStarship: starshipId
        })
    };

    render() {
        const {selectedStarship} = this.state;
        const itemList = (
            <StarshipList
                onItemSelected={this.onItemSelected}
                renderLabel={(item) => <span>{item.name}</span>}
            />);
        const starshipView = (
            <StarshipDetails id={selectedStarship}>
                <Record field="model" label="Model: "/>
                <Record field="passengers" label="Passengers: "/>
                <Record field="crew" label="Crew: "/>
            </StarshipDetails>);
        return(
            <ErrorHandler>
                <Row leftBar={itemList} rightBar={starshipView}/>
            </ErrorHandler>
        );
    }
}