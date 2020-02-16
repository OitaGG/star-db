import React, {Component} from "react";

import './list-item.css'

export default class ListItem extends Component{
    render() {
        return (
            <div className="list-item-container">
                <ul className="list-group">
                    <li className="list-group-item"><a>Anakin Skywaker</a></li>
                    <li className="list-group-item"><a>Luke Skywaker</a></li>
                    <li className="list-group-item"><a>Obi Van Kenobi</a></li>
                    <li className="list-group-item"><a>Something else</a></li>
                </ul>
            </div>
        );
    }
}