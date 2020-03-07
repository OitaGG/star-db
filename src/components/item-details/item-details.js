import React from "react";
import './item-details.css'
import Spinner from "../spinner/spinner";
import ErrorHandler from "../error-handler/ErrorHandler";
import PropTypes from 'prop-types';

const ItemDetails = (props) => {
    const {item, image, loading} = props;
    if(!item){
        return <span>Select person from person list</span>
    }
    if(loading){
        return(
            <div className="item-details-container jumbotron d-flex">
                <Spinner/>
            </div>);
    }
    return(
        <ErrorHandler>
            <div className="item-details-container jumbotron d-flex">
                <img className="item-details-img" src={image}/>
                <div className="item-details-body">
                    <h4>{item.name}</h4>
                    <ul className="list-group-flush item-details-body-characters">
                        {
                            React.Children.map(props.children, (child) => {
                                return React.cloneElement(child, {item});
                            })
                        }
                    </ul>
                </div>
            </div>
        </ErrorHandler>
    );
};

ItemDetails.defaultProps = {
    loading: true,
    error: false
};
ItemDetails.propTypes = {
    item: PropTypes.object,
    image: PropTypes.string,
    loading: PropTypes.bool,
    error: PropTypes.bool
};


const Record = ({item, label, field}) => {
    return(
        <li className="list-group-item">
            <span>{label}</span>
            <span>{item[field]}</span>
        </li>
    );
};

export {
    Record
};

export default ItemDetails;