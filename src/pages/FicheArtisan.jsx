import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const FicheArtisan = () => {
  const { id } = useParams();
  const [artisan, setArtisan] = useState(null);

  useEffect(() => {
    
    fetch(`${process.env.REACT_APP_API_URL}/api/artisans/${id}`)
      .then((res) => res.json())
      .then((data) => setArtisan(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!artisan) return <p>Chargement...</p>;

  return (
    <div>
      <header className="fiche-header">
        <h1 className="page-title">{artisan.Nom}</h1>
        <hr className="line blueline" />
      </header>

      <main>
        <section className="section-info row">
            <article className="presentation">
                <div className="presentation-left">
                    <img src="/img/img-placeholder.svg" alt="Placeholder" />
                </div>

                <div>
                    <div className="rating">
                        {artisan.Note} <i className="bi bi-star-fill px-1"></i>
                    </div>
                    <p><i className="bi bi-check-circle-fill"></i> {artisan.Spécialité}</p>
                    <p><i className="bi bi-pin-map-fill"></i> {artisan.Ville}</p>
                    {artisan["Site Web"] && (
                    <a href={artisan["Site Web"]} target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-globe"></i> {artisan["Site Web"]}
                    </a>
                    )}
                </div>
            </article>

          <article className="apropos">
            <h2>A propos</h2>
            <p><i className="bi bi-caret-right-fill"></i> {artisan["A propos"]}</p>
          </article>
        </section>

        <section className="section-form">
          <div className="form-title">
            <hr className="line blueline" />
            <h2>Nous envoyer un mail</h2>
          </div>

          <p><em>Les champs marqués d'un astérisques (*) sont requis.</em></p>
          <form action="#" method="post">
            <label htmlFor="objet">Objet de votre demande*</label>
            <select name="objet" id="objet" required defaultValue="">
              <option value="" disabled>-Sélectionner-</option>
              <option value="devis">Devis</option>
              <option value="Autre">Autre</option>
            </select>

            <label htmlFor="nom">Nom*</label>
            <input type="text" name="nom" id="nom" required />

            <label htmlFor="prenom">Prénom*</label>
            <input type="text" name="prenom" id="prenom" required />

            <label htmlFor="email">Email*</label>
            <input type="email" name="email" id="email" required />

            <label htmlFor="message">Votre demande*</label>
            <textarea name="message" id="message" required></textarea>
          </form>

          <button className="btn text-size" type="submit">
            Soumettre <i className="bi bi-arrow-right px-3"></i>
          </button>
        </section>
      </main>
    </div>
  );
};

export default FicheArtisan;
