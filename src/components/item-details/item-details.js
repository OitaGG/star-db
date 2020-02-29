import React from "react";
import './item-details.css'
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../error-indicator/error-indicator";
import ItemView from "./item-view/item-view";
import ErrorHandler from "../error-handler/ErrorHandler";

const ItemDetails = (props) => {
    const {item, image, loading, error} = props;
    if(!item){
        return <span>Select person from person list</span>
    }
    const hasData = !(loading || error);
    const spinner = loading ? <Spinner /> : null;
    const errorIndicator = error ? <ErrorIndicator/> : null;
    const content = hasData ? <ItemView item={item} image={image} content={props.children}/> : null;
    return(
        <ErrorHandler>
            <div className="person-details-container jumbotron d-flex">
                {spinner}
                {content}
                {errorIndicator}
            </div>
        </ErrorHandler>
    );
};

export default ItemDetails;