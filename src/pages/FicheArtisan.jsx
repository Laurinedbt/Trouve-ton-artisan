const FicheArtisan = () => {
    return (
        <div>
            <header>
                <h1 className="page-title">Nom artisan/entreprise</h1>
                <hr className="line blueline"/>
            </header>
            <main>
                <section>
                    <article>
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
                    </article>

                    <article>
                        <h2>A propos</h2>
                        <p><hr />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <p><hr />Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <p><hr />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </article>
                </section>

                <section>
                    <div>
                        <hr />
                        <h2>Nous envoyer un mail</h2>
                    </div>

                    <p>Les champs marqués d'un astérisques (*) sont requis</p>
                    <form action="/">
                        <label htmlFor="objet">Objet de votre demande*</label>
                        <input type="/" id="objet"/>

                        <label htmlFor="nom">Nom*</label>
                        <input type="text" id="nom"/>

                        <label htmlFor="prenom">Prénom*</label>
                        <input type="text"/>

                        <label htmlFor="email">Email*</label>
                        <input type="email" id="email" />

                        <label htmlFor="postalcode">Code postal*</label>
                        <input type="text"/>

                        <label htmlFor="message">Votre demande*</label>
                        <input type="text" id="message" />
                    </form>
                </section>
            </main>
        </div>
    )
}

export default FicheArtisan;