import React, {Component} from "react";
import ErrorIndicator from "../error-indicator/error-indicator";

export default class ErrorHandler extends Component{
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
    }

    render() {
        if(this.state.hasError){
            return <ErrorIndicator/>
        }
        return this.props.children;
    }

    componentDidCatch() {
        this.setState({
            hasError: true
        });
    }
}