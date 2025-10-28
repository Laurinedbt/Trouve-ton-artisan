import React from "react";
import { NavLink } from "react-router-dom";

function NavBar () {
    return(
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img src="/img/Logo.png" alt="Logo" width="383" height="216"/>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span> {/*pour le menu "burger"*/}
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <NavLink to="/batiment" className="nav-link" aria-current="page">Bâtiment</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/services" className="nav-link active">Services</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="fabrication" className="nav-link">Fabrication</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="alimentation" className="nav-link">Alimentation</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      );
}

export default NavBar;