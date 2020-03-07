import React from "react";
import ItemDetails, {Record} from "../item-details/item-details";
import SwapiService from "../../services/swapi-service";
import {hocDataWrapperForDetails} from "./wrapper/hoc-data-component";

const {getPerson, getPlanet, getStarship, getPlanetImage, getStarshipImage, getPersonImage} = new SwapiService();

const childrenForPerson = (
    <React.Fragment>
        <Record field="gender" label="Gender: "/>
        <Record field="birthYear" label="Birth Year: "/>
        <Record field="height" label="Height: "/>
    </React.Fragment>
);

const childrenForPlanet = (
    <React.Fragment>
        <Record field="population" label="Population: "/>
        <Record field="rotationPeriod" label="Rotation Period: "/>
        <Record field="diameter" label="Diameter: "/>
    </React.Fragment>
);

const childrenForStarship = (
    <React.Fragment>
        <Record field="model" label="Model: "/>
        <Record field="passengers" label="Passengers: "/>
        <Record field="crew" label="Crew: "/>
    </React.Fragment>
);
const PersonDetails = hocDataWrapperForDetails(ItemDetails, getPerson, getPersonImage, childrenForPerson);

const PlanetDetails = hocDataWrapperForDetails(ItemDetails, getPlanet, getPlanetImage, childrenForPlanet);

const StarshipDetails = hocDataWrapperForDetails(ItemDetails, getStarship, getStarshipImage, childrenForStarship);

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
};