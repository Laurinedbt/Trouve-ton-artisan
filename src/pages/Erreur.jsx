const Erreur = () => {
    return (
        <div>
            <div className="erreur">
                <div><i className="bi bi-emoji-frown"></i></div>
                <p>404</p>
                <p>Page non trouvée</p>
                <a href="/"><em>Retourner à la page d'accueil</em></a>
            </div>
        </div>
    )
}

export default Erreur;