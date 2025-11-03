const Accueil = () => {
    return (
        <div>
            <header className="home-header px-4">
                <div>
                    <hr className="header-line m-0" />
                    <h1>Comment trouver mon artisan ? La Région peut vous aider</h1>
                </div>
            </header>

            <main>
                <section className="list-section">
                    <ol>
                    <div className="info-section row">
                        <div className="col-md-6">
                            <hr className="line redline"/>
                            <li className="text-section">Choisir la catégorie d'artisanat dans le menu</li> 
                            <p className="text">Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        </div>
                        <div className="img-placeholder col-md-6">
                            <img src="/img/img-placeholder.svg" alt="Placeholder img" />
                        </div>
                    </div>
                    
                    <div className="info-section row">
                        <div className="img-placeholder col-md-6">
                            <img src="/img/img-placeholder.svg" alt="Placeholder img"/>
                        </div>

                        <div className="col-md-6">
                            <hr className="line greenline"/>
                            <li className="text-section">Choisir un artisan</li>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>

                    <div className="info-section row">
                        <div className="col-md-6">
                            <hr className="line blueline"/>
                            <li className="text-section">Le contacter via le formulaire de contact</li>
                            <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        
                        <div className="img-placeholder col-md-6">
                            <img src="/img/img-placeholder.svg" alt="Placeholder img" />
                        </div>
                    </div>
                       
                    <div className="info-section row">
                        <div>
                            <hr className="line greenline"/>
                            <li className="last-text">Une réponse sera apportée sous 48h</li>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt <br /> ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>

                    </ol>
                </section>

                <section>
                    <div className="artisan-section px-4">
                        <div className="title">
                            <hr/>
                            <h2>Les artisans du mois</h2>
                        </div>
                    </div>

                    <div className="artisans-du-mois">
                        <article className="artisan-card">
                            <div className="img-container">
                                <img src="/img/img-placeholder.svg" alt="Placeholder img" />
                            </div>
                            <h3>Nom artisan/ entreprise</h3>
                            <p><i class="bi bi-star-fill px-1"></i><i class="bi bi-star-fill px-1"></i><i class="bi bi-star-fill px-1"></i><i class="bi bi-star-fill px-1"></i><i class="bi bi-star-half px-1"></i></p>
                            <p className="text-size"><i class="bi bi-check-circle-fill"></i>Spécialité</p>
                            <p className="text-size"><i class="bi bi-pin-map-fill"></i>Localisation</p>
                            <a href="/" className="text-size button">Découvrir <i class="bi bi-arrow-right px-3"></i></a>
                            
                        </article>

                        <article className="artisan-card">
                            <div className="img-container">
                                <img src="/img/img-placeholder.svg" alt="Placeholder img" />
                            </div>
                            <h3>Nom artisan/ entreprise</h3>
                            <p><i class="bi bi-star-fill px-1"></i><i class="bi bi-star-fill px-1"></i><i class="bi bi-star-fill px-1"></i><i class="bi bi-star-fill px-1"></i><i class="bi bi-star-half px-1"></i></p>
                            <p className="text-size"><i class="bi bi-check-circle-fill"></i>Spécialité</p>
                            <p className="text-size"><i class="bi bi-pin-map-fill"></i>Localisation</p>
                            <a href="/" className="text-size button">Découvrir <i class="bi bi-arrow-right px-3"></i></a>
                           
                        </article>

                        <article className="artisan-card">
                            <div className="img-container">
                                <img src="/img/img-placeholder.svg" alt="Placeholder img"/>
                            </div>
                            <h3>Nom artisan/ entreprise</h3>
                            <p><i class="bi bi-star-fill px-1"></i><i class="bi bi-star-fill px-1"></i><i class="bi bi-star-fill px-1"></i><i class="bi bi-star-fill px-1"></i><i class="bi bi-star-half px-1"></i></p>
                            <p className="text-size"><i class="bi bi-check-circle-fill"></i>Spécialité</p>
                            <p className="text-size"><i class="bi bi-pin-map-fill"></i>Localisation</p>
                            <a href="/" className="text-size button">Découvrir <i class="bi bi-arrow-right px-3"></i></a> 
                        </article>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Accueil;