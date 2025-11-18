import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function NavBar() {
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [allArtisans, setAllArtisans] = useState([]);
  const navigate = useNavigate();

  // Récupération des catégories
  useEffect(() => {
    
    fetch(`${process.env.REACT_APP_API_URL}/api/artisans/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error(err));
  }, []);

  // Récupération de tous les artisans
  useEffect(() => {
   
    fetch(`${process.env.REACT_APP_API_URL}/api/artisans`)
      .then((res) => res.json())
      .then((data) => setAllArtisans(data))
      .catch((err) => console.error(err));
  }, []);

  // Suggestions en temps réel
  useEffect(() => {
    if (!searchTerm) {
      setSuggestions([]);
      return;
    }
    const filtered = allArtisans.filter((a) =>
      a.Nom.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSuggestions(filtered);
  }, [searchTerm, allArtisans]);

  // Cliquer sur une suggestion
  const handleSelect = (id) => {
    setSearchTerm("");
    setSuggestions([]);
    navigate(`/ficheartisan/${id}`);
  };

  // Validation sur Enter ou loupe
  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchTerm) return;

    const artisan = allArtisans.find((a) =>
      a.Nom.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (artisan) {
      handleSelect(artisan.id);
    } else {
      alert("Artisan non trouvé !");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img src="/img/Logo.png" alt="Logo" width="383" height="216" />
        </NavLink>

        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav me-auto">
            {categories.map((cat, index) => {
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
            <form
              className="d-flex w-100"
              role="search"
              onSubmit={handleSearch}
            >
              <input
                className="search-input"
                type="search"
                placeholder="Rechercher"
                aria-label="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                autoComplete="off"
              />
              <button className="search-btn" type="submit">
                <i className="bi bi-search pe-2"></i>
              </button>
            </form>

            {suggestions.length > 0 && (
              <ul className="suggestions-list">
                {suggestions.map((artisan) => (
                  <li
                    key={artisan.id}
                    onClick={() => handleSelect(artisan.id)}
                  >
                    {artisan.Nom}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;





