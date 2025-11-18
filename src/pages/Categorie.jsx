
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const Categorie = () => {
  const { categorie } = useParams(); // récupère la catégorie depuis l'URL
  const [artisans, setArtisans] = useState([]);

  useEffect(() => {
    
    fetch(`${process.env.REACT_APP_API_URL}/api/artisans/categorie/${encodeURIComponent(categorie)}`)
      .then((res) => res.json())
      .then((data) => {
      console.log("Données récupérées :", data);
      setArtisans(data);
    })
      .catch((err) => console.error(err));
  }, [categorie]);

  return (
    <div>
      <header>
        <h1 className="page-title">Liste des artisans</h1>
      </header>

      <main>
        <div className="second-title">
          <hr className="line greenline" />
          <h2>{categorie.charAt(0).toUpperCase() + categorie.slice(1)}</h2>
        </div>

        <section className="card-section">
          <div className="container">
            <div className="row">
              {artisans.length > 0 ? (
                artisans.map((artisan) => (
                  <div key={artisan.id} className="col-12 col-md-6">
                    <div className="batiment-card">
                      <div>
                        <img src="/img/img-placeholder.svg" alt="Placeholder" />
                      </div>
                      <div className="card-body-content">
                        <h3 className="card-title">{artisan.Nom}</h3>
                        <div className="rating">
                            <span>{artisan.Note}</span> <i className="bi bi-star-fill px-1"></i>
                        </div>

                        <p className="card-info text-size">
                          <i className="bi bi-check-circle-fill"></i> {artisan["Spécialité"] || artisan.specialite}
                        </p>
                        <p className="card-info text-size">
                          <i className="bi bi-pin-map-fill"></i> {artisan.Ville}
                        </p>
                        <Link to={`/ficheartisan/${artisan.id}`} className="btn text-size">
                          Découvrir <i className="bi bi-arrow-right px-3"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p>Aucun artisan trouvé pour cette catégorie.</p>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Categorie;
