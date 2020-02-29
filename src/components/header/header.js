import React from "react";
import './header.css'

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-dark bd-dark">
                <a href="#" className="navbar-brand">StarDB</a>
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <a href="#" className="nav-link">Peoples</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Planets</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Starships</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;