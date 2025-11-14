const FicheArtisan = () => {
    return (
        <div>
            <header className="fiche-header ">
                <h1 className="page-title">Nom artisan/entreprise</h1>
                <hr className="line blueline"/>
            </header>
            <main>
                
                <section className="section-info row">
                        <article className="presentation">
                            <div className="presentation-left">
                                <img src="/img/img-placeholder.svg" alt="Placeholder" />
                            </div>
                            
                            <div>
                                <div className="rating">
                                <i class="bi bi-star-fill px-1"></i>
                                <i class="bi bi-star-fill px-1"></i>
                                <i class="bi bi-star-fill px-1"></i>
                                <i class="bi bi-star-fill px-1"></i>
                                <i class="bi bi-star-half px-1"></i>
                                </div>
                                <p><i class="bi bi-check-circle-fill"></i>Spécialité</p>
                                <p><i class="bi bi-pin-map-fill"></i>Localisation</p>
                                <a href="/"><i class="bi bi-globe"></i>Lien site internet</a>
                            </div>
                            
                        </article>
                    
                        <article className="apropos">
                            <h2>A propos</h2>
                            <p><i class="bi bi-caret-right-fill"></i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            <p><i class="bi bi-caret-right-fill"></i>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            <p><i class="bi bi-caret-right-fill"></i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        </article>    
                </section>

                <section className="section-form">
                    <div className="form-title">
                        <hr className="line blueline"/>
                        <h2>Nous envoyer un mail</h2>
                    </div>

                    <p><em>Les champs marqués d'un astérisques (*) sont requis.</em></p>
                    <form action="#" method="post">
                        <label htmlFor="objet">Objet de votre demande*</label>
                        <select name="objet" id="objet" required>
                            <option value="" disabled selected>-Sélectionner-</option>
                            <option value="devis">Devis</option>
                            <option value="Autre">Autre</option>
                        </select>

                        <label htmlFor="nom">Nom*</label>
                        <input type="text" name="nom" id="nom" required/>

                        <label htmlFor="prenom">Prénom*</label>
                        <input type="text" name="prenom" id="prenom" required/>

                        <label htmlFor="email">Email*</label>
                        <input type="email" name="email" id="email" required/>

                        <label htmlFor="message">Votre demande*</label>
                        <textarea name="message" id="message" required></textarea>
                    </form>
                    <a href="/ficheartisan" className="btn text-size">Soumettre <i class="bi bi-arrow-right px-3"></i></a>
                </section>
            </main>
        </div>
    )
}

export default FicheArtisan;