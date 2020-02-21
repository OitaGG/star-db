import React, {Component} from "react";

import './list-item.css'
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner/spinner";

export default class ListItem extends Component{
    constructor(props) {
        super(props);
        this.state = {
            peopleList: null
        };
        this.swapiService = new SwapiService();
    }

    componentDidMount() {
        this.swapiService
            .getAllPeople()
            .then((peopleList) => {
                this.setState({
                    peopleList
                })
            })
    }

    renderItems(peopleList) {
        return peopleList.map(({id, name}) => {
            return(
                <li className="list-group-item"
                    key={id}
                    onClick={() => this.props.onItemSelected(id)}>
                    <a>{name}</a>
                </li>
            )
        });
    };

    render() {
        const {peopleList} = this.state;
        if(!peopleList) {
            return <Spinner/>
        }
        const people = this.renderItems(peopleList);
        return (
            <div className="list-item-container">
                <ul className="list-group">
                    {people}
                </ul>
            </div>
        );
    }
}