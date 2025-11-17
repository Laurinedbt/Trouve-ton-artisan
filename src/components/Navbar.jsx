import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function NavBar() {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/artisans/categories')
      .then(response => response.json())
      .then(data => {
        setCategories(data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des catégories', error);
      });
  }, []);

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src="/img/Logo.png" alt="Logo" width="383" height="216" />
        </a>

        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav">
            {categories.map((cat, index) => {

              // Sécurisation
              const categorie = cat.categorie || "";  

              return (
                <li key={index} className="nav-item px-3">
                  <NavLink 
                    to={`/categorie/${categorie.toLowerCase()}`}
                    className="nav-link"
                  >
                    {categorie}
                  </NavLink>
                </li>
              );
            })}
          </ul>

          <div className="search-container">
            <form className="d-flex align-items-center justify-content-between w-100" role="search">
              <input className="search-input" type="search" placeholder="Rechercher" aria-label="Search" />
              <button className="btn search-btn" type="submit">
                <i className="bi bi-search pe-2"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

