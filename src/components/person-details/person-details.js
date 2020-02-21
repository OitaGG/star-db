import React, {Component} from "react";

import './person-details.css'
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../error-indicator/error-indicator";
import PersonView from "./person-view/person-view";

export default class PersonDetails extends Component {
    constructor(props) {
        super(props);
        this.swapiService = new SwapiService();
        this.state = {
            person: null,
            loading: true,
            error: false
        }
    }

    updatePerson = () =>{
        const {id} = this.props;
        if(!id) {
            return;
        }

        this.swapiService
            .getPerson(id)
            .then((person) => {
                this.setState({
                    person,
                    loading: false,
                    error: false
                })
            })
            .catch(this.onError)
    };

    componentDidMount() {
        this.updatePerson();
    }

    componentDidUpdate(prevProps) {
        if(prevProps.id !== this.props.id) {
            this.setState({
                loading: true
            });
            this.updatePerson(this.props.id)
        }
    }
    
    onError = () => {
        this.setState({
            loading: false,
            error: true
        })
    };

    render() {
        const {person, loading, error} = this.state;
        if(!person){
            return <span>Select person from person list</span>
        }
        const hasData = !(loading || error);
        const spinner = loading ? <Spinner /> : null;
        const errorIndicator = error ? <ErrorIndicator/> : null;
        const content = hasData ? <PersonView person={person}/> : null;
        return(
            <div className="person-details-container jumbotron d-flex">
                {spinner}
                {content}
                {errorIndicator}
            </div>
        )
    }
};