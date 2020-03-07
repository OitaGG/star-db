import React from "react";
import PropTypes from 'prop-types';
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

ToggleRandomPlanet.propTypes = {
    togglePlanet: PropTypes.func
};

export default ToggleRandomPlanet
