const Batiment = () => {
    return (
        <div>
            <header>
                <h1 className="page-title">Liste des artisans</h1>
            </header>

            <main>
                <div className="second-title">
                    <hr className="line greenline"/>
                    <h2>Bâtiment</h2>
                </div>

                <section className="card-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div className="batiment-card">
                                    <div>
                                        <img src="/img/img-placeholder.svg" alt="Placeholder"/>
                                    </div>
                                    <div className="card-body-content">
                                        <h3 className="card-title">Nom artisan/ entreprise</h3>
                                        <div className="rating">
                                            <i className="bi bi-star-fill px-1"></i>
                                            <i className="bi bi-star-fill px-1"></i>
                                            <i className="bi bi-star-fill px-1"></i>
                                            <i className="bi bi-star-fill px-1"></i>
                                            <i className="bi bi-star-half px-1"></i>
                                        </div>
                                        <p className="card-info text-size"><i className="bi bi-check-circle-fill"></i>Spécialité</p>
                                        <p className="card-info text-size"><i className="bi bi-pin-map-fill"></i>Localisation</p>
                                        <a href="/ficheartisan" className="btn text-size">Découvrir <i className="bi bi-arrow-right px-3"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-6">
                                <div className="batiment-card">
                                    <div>
                                        <img src="/img/img-placeholder.svg" alt="Placeholder"/>
                                    </div>
                                    <div className="card-body-content">
                                        <h3 className="card-title">Nom artisan/ entreprise</h3>
                                        <div className="rating">
                                            <i className="bi bi-star-fill px-1"></i>
                                            <i className="bi bi-star-fill px-1"></i>
                                            <i className="bi bi-star-fill px-1"></i>
                                            <i className="bi bi-star-fill px-1"></i>
                                            <i className="bi bi-star-half px-1"></i>
                                        </div>
                                        <p className="card-info text-size"><i className="bi bi-check-circle-fill"></i>Spécialité</p>
                                        <p className="card-info text-size"><i className="bi bi-pin-map-fill"></i>Localisation</p>
                                        <a href="/ficheartisan" className="btn text-size">Découvrir <i className="bi bi-arrow-right px-3"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-6">
                                <div className="batiment-card">
                                    <div>
                                        <img src="/img/img-placeholder.svg" alt="Placeholder"/>
                                    </div>
                                    <div className="card-body-content">
                                        <h3 className="card-title">Nom artisan/ entreprise</h3>
                                        <div className="rating">
                                            <i className="bi bi-star-fill px-1"></i>
                                            <i className="bi bi-star-fill px-1"></i>
                                            <i className="bi bi-star-fill px-1"></i>
                                            <i className="bi bi-star-fill px-1"></i>
                                            <i className="bi bi-star-half px-1"></i>
                                        </div>
                                        <p className="card-info text-size">
                                            <i className="bi bi-check-circle-fill"></i>Spécialité
                                        </p>
                                        <p className="card-info text-size">
                                            <i className="bi bi-pin-map-fill"></i>Localisation
                                        </p>
                                        <a href="/ficheartisan" className="btn text-size">Découvrir <i className="bi bi-arrow-right px-3"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-6">
                                <div className="batiment-card">
                                    <div>
                                        <img src="/img/img-placeholder.svg" alt="Placeholder"/>
                                    </div>
                                    <div className="card-body-content">
                                        <h3 className="card-title">Nom artisan/ entreprise</h3>
                                        <div className="rating">
                                            <i className="bi bi-star-fill px-1"></i>
                                            <i className="bi bi-star-fill px-1"></i>
                                            <i className="bi bi-star-fill px-1"></i>
                                            <i className="bi bi-star-fill px-1"></i>
                                            <i className="bi bi-star-half px-1"></i>
                                        </div>
                                        <p className="card-info text-size"><i className="bi bi-check-circle-fill"></i>Spécialité</p>
                                        <p className="card-info text-size"><i className="bi bi-pin-map-fill"></i>Localisation</p>
                                        <a href="/ficheartisan" className="btn text-size">Découvrir <i className="bi bi-arrow-right px-3"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Batiment;