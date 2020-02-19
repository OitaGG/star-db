import React from "react";

const PlanetView = ({planet}) => {
    const {id, name, population, rotationPeriod, diameter} = planet;
    return(
        <React.Fragment>
            <img className="random-planet-img"
                 src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                 alt="planet-image"
            />
            <div className="random-planet-info-container">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush random-planet-info-characters">
                    <li className="list-group-item">
                        <span>Population:</span>
                        <span>{population}</span>
                    </li>
                    <li className="list-group-item">
                        <span>Rotation Period:</span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className="list-group-item">
                        <span>Diameter:</span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
};

export default PlanetView