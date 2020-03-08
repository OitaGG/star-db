import React, {useState} from "react";
import Row from "../../row/Row";
import ErrorHandler from "../../error-handler/ErrorHandler";
import {StarshipList} from "../../wrapper-for-items/wrappered-item-lists";
import {StarshipDetails} from "../../wrapper-for-items/wrappered-item-details";

const StarshipPage = () => {
    const [selectedStarship, setSelectedStarship] = useState(3);
    const itemList = (
        <StarshipList
            onItemSelected={(id) => setSelectedStarship(id)}
            renderLabel={(item) => <span>{item.name}</span>}
        />);
    const starshipView = <StarshipDetails id={selectedStarship}/>;
    return(
        <ErrorHandler>
            <Row leftBar={itemList} rightBar={starshipView}/>
        </ErrorHandler>
    );
};

export default StarshipPage;