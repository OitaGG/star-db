import React from "react";

const PersonView = ({person}) => {
    return(
        <React.Fragment>
            <img className="person-details-img" src={`https://starwars-visualguide.com/assets/img/characters/${person.id}.jpg`}/>
            <div className="person-details-body">
                <h4>{person.name}</h4>
                <ul className="list-group-flush person-details-body-characters">
                    <li className="list-group-item">
                        <span>Height:</span>
                        <span>{person.height}</span>
                    </li>
                    <li className="list-group-item">
                        <span>Gender:</span>
                        <span>{person.gender}</span>
                    </li>
                    <li className="list-group-item">
                        <span>Birth Year:</span>
                        <span>{person.birthYear}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
};

export default PersonView;