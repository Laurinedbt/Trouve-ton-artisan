import React from "react";
import { NavLink } from "react-router-dom";

function NavBar () {
    return(
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img src="/img/Logo.png" alt="Logo" width="383" height="216"/>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span> {/*pour le menu "burger"*/}
            </button>

            <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item px-3">
                  <NavLink to="/batiment" className="nav-link" aria-current="page">Bâtiment</NavLink>
                </li>
                <li className="nav-item px-3">
                  <NavLink to="/services" className="nav-link">Services</NavLink>
                </li>
                <li className="nav-item px-3">
                  <NavLink to="fabrication" className="nav-link">Fabrication</NavLink>
                </li>
                <li className="nav-item px-3">
                  <NavLink to="alimentation" className="nav-link">Alimentation</NavLink>
                </li>
              </ul>
            </div>

            <div className="search-container">
              <form className="d-flex align-items-center justify-content-between w-100" role="search">
                <input className="search-input" type="search" placeholder="Rechercher" aria-label="Search"/>
                <button className="btn search-btn" type="submit">
                  <i className="bi bi-search pe-2"></i>
                </button>
              </form>
            </div>
          </div>
        </nav>
      );
}

export default NavBar;