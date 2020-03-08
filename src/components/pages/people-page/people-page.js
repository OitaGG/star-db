import React, { useState } from "react";
import Row from "../../row/Row";
import ErrorHandler from "../../error-handler/ErrorHandler";
import {PersonList} from "../../wrapper-for-items/wrappered-item-lists";
import {PersonDetails} from "../../wrapper-for-items/wrappered-item-details";
import './people-page.css'

const PeoplePage = () => {
    const [selectedPerson, setSelectedPerson] = useState(3);
    const itemList = (
        <PersonList
            onItemSelected={(id) => setSelectedPerson(id)}
                renderLabel={(item) => <span>{item.name}<br/> Birth Date: {item.birthYear}</span>}
        />);
    const peopleDetails = <PersonDetails id={selectedPerson}/>;
    return(
        <ErrorHandler>
            <Row leftBar={itemList} rightBar={peopleDetails}/>
        </ErrorHandler>
    );
};

export default PeoplePage;