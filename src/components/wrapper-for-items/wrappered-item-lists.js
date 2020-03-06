import React from "react";
import ListItem from "../list-item/list-item";
import {hocDataWrapperForList} from "./wrapper/hoc-data-component";
import SwapiService from "../../services/swapi-service";

const {getAllPeople, getAllPlanets, getAllStarships} = new SwapiService();

const PersonList = hocDataWrapperForList(ListItem, getAllPeople);

const PlanetList = hocDataWrapperForList(ListItem, getAllPlanets);

const StarshipList = hocDataWrapperForList(ListItem, getAllStarships)

export {
    PersonList,
    PlanetList,
    StarshipList
};