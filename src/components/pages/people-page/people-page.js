import React, {Component} from "react";
import Row from "../../row/Row";
import ErrorHandler from "../../error-handler/ErrorHandler";
import {PersonList} from "../../wrapper-for-items/wrappered-item-lists";
import {PersonDetails} from "../../wrapper-for-items/wrappered-item-details";
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
        const peopleDetails = <PersonDetails id={selectedPerson}/>;
        return(
            <ErrorHandler>
                <Row leftBar={itemList} rightBar={peopleDetails}/>
            </ErrorHandler>
        );
    }
}