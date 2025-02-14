import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

function Header() {
    return (
        <header>
            <div className="header-contenu">
                <div>
                    <h1>L. Hameau</h1>
                    <h2>Développeur Web Junior</h2>
                </div>
                <div>
                    <nav>
                        <ul>
                            <li className="bouton"><Link smooth to="/#presentation">Accueil</Link></li>
                            <li className="bouton"><Link smooth to="/#competences">Compétences</Link></li>
                            <li className="bouton"><Link smooth to="/#projets">Projets Réalisés</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;