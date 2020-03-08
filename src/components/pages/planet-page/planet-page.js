import React, {useState} from "react";
import Row from "../../row/Row";
import ErrorHandler from "../../error-handler/ErrorHandler";
import {PlanetList} from "../../wrapper-for-items/wrappered-item-lists";
import {PlanetDetails} from "../../wrapper-for-items/wrappered-item-details";


const PlanetPage = () => {
    const [selectedPlanet, setSelectedPlanet] = useState(3);
    const itemList = (
        <PlanetList
            onItemSelected={(id) => setSelectedPlanet(id)}
            renderLabel={(item) => <span>{item.name}</span>}
        />);
    const planetView = <PlanetDetails id={selectedPlanet}/>;
    return(
        <ErrorHandler>
            <Row leftBar={itemList} rightBar={planetView}/>
        </ErrorHandler>
    );
};

export default PlanetPage;