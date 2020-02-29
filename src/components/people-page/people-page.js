import React, {Component} from "react";
import Row from "../row/Row";
import ErrorHandler from "../error-handler/ErrorHandler";
import {PersonList} from "../hoc-components-for-items/item-lists";
import {PersonDetails} from "../hoc-components-for-items/item-details";
import {Record} from "../item-details/item-view/item-view";

import './people-page.css'

export default class PeoplePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedPerson: 3,
        };
    };

    onItemSelected = (personId) => {
        this.setState({
            selectedPerson: personId
        })
    };

    render() {
        const {selectedPerson} = this.state;
        const itemList = (
            <PersonList
                onItemSelected={this.onItemSelected}
                renderLabel={(item) => <span>{item.name}<br/> Birth Date: {item.birthYear}</span>}
            />);
        const peopleView = (
            <PersonDetails id={selectedPerson}>
                <Record field="gender" label="Gender: "/>
                <Record field="birthYear" label="Birth Year: "/>
                <Record field="height" label="Height: "/>
            </PersonDetails>);
        return(
            <ErrorHandler>
                <Row leftBar={itemList} rightBar={peopleView}/>
            </ErrorHandler>
        );
    }
}