import React from "react";

import './toggle-random-planet-button.css'

const ToggleRandomPlanet = ({togglePlanet}) => {
    return (
        <button
            type="button"
            className="btn btn-secondary toggle-random-planet-btn"
            onClick={togglePlanet}>
            Toggle Random Planet
        </button>
    );
};

export default ToggleRandomPlanet
