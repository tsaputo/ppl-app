import React from 'react';
import { NavLink } from 'react-router-dom';
// import MonthsPage from '../pages/MonthsPage';
// import PeoplePage from '../pages/PeoplePage'


const NavBar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/people">People<span
                        className="sr-only">(current)</span></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/months">Months</NavLink>
                </li>
            </ul>
        </div>
    </nav>
)

export default NavBar;