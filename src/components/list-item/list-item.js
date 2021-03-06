import React from "react";
import Spinner from "../spinner/spinner";
import './list-item.css'
import ErrorHandler from "../error-handler/ErrorHandler";
import PropTypes from 'prop-types';

const ListItem = (props) => {
    const {data, renderLabel, onItemSelected} = props;
    if(!data) {
        return <Spinner/>
    }
    const renderItems = data.map((item) => {
            const {id} = item;
            const label = renderLabel(item);
            return(
                <li className="list-group-item"
                    key={id}
                    onClick={() => onItemSelected(id)}>
                    {label}
                </li>
            )
    });
    return (
        <ErrorHandler>
            <div className="list-item-container">
                <ul className="list-group">
                    {renderItems}
                </ul>
            </div>
        </ErrorHandler>)
};

ListItem.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
    renderLabel: PropTypes.func.isRequired,
    onItemSelected: PropTypes.func.isRequired
};

export default ListItem;