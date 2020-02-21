import React, {Component} from "react";
import ListItem from "../list-item/list-item";
import PersonDetails from "../person-details/person-details";

import './people-page.css'
import ErrorIndicator from "../error-indicator/error-indicator";

export default class PeoplePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedPerson: 3,
            hasError: false
        }
    }

    componentDidCatch() {
        this.setState({
            hasError: true
        });
    }

    onItemSelected = (personId) => {
        this.setState({
            selectedPerson: personId
        })
    };

    render() {
        const {selectedPerson, hasError} = this.state;
        if(hasError){
            return(
                <ErrorIndicator />
            );
        }
        return(
            <div className="person-block">
                <ListItem onItemSelected={this.onItemSelected}/>
                <PersonDetails id={selectedPerson}/>
            </div>
        );
    }
}