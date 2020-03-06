import React from "react";
import ItemDetails from "../item-details/item-details";
import SwapiService from "../../services/swapi-service";
import {hocDataWrapperForDetails} from "./wrapper/hoc-data-component";

const {getPerson, getPlanet, getStarship, getPlanetImage, getStarshipImage, getPersonImage} = new SwapiService();

const PersonDetails = hocDataWrapperForDetails(ItemDetails, getPerson, getPersonImage);

const PlanetDetails = hocDataWrapperForDetails(ItemDetails, getPlanet, getPlanetImage);

const StarshipDetails = hocDataWrapperForDetails(ItemDetails, getStarship, getStarshipImage);

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
};