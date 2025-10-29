import React from "react";

function Footer () {
    return(
        <footer>
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3 py-4 ms-4">
                            <a className="footer-logo" href="/">
                                <img src="/img/logo2.svg" alt="Logo Région" width="305" height="103"/>
                            </a>
                        </div>

                        <div className="col-md-3 py-5">
                            <p className="bold">Lyon</p>
                            <p>101 Cours Charlemagne</p>
                            <p>CS 20033</p>
                            <p>69269 LYON CEDEX 02</p>
                            <p>France</p>
                            <p>+33 (0)4 26 73 40 00</p>
                        </div>
                    </div>
                </div>
                
                <div className="d-flex justify-content-center">
                    <hr />
                </div>

                <div className="row">
                    <ul className="bottom-footer py-5">
                        <li className="footer-item">Mentions légales</li>
                        <li className="footer-item">Données personnelles</li>
                        <li className="footer-item">Accessibilité</li>
                        <li className="footer-item">Politique des cookies</li>
                        <li className="footer-item">Gestion des cookies</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;