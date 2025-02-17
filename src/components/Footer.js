import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faSnapchatGhost } from '@fortawesome/free-brands-svg-icons';  // Import des icônes

function Footer(props) {
    return (
        <div>
            <footer className="footer">
                <Link to="/mentions-legales" className="nav-link">Mentions Légales</Link>
                <a href="/" className="nav-link">Politique de Confidentialité</a>
                <a href="/" className="nav-link">Conditions de Vente</a>
                <div className="social-links">
                    <a href="https://www.instagram.com" className="nav-link" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} size="2x"/>
                    </a>
                    <a href="https://www.snapchat.com" className="nav-link" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faSnapchatGhost} size="2x"/>
                    </a>
                    <a href="https://www.linkedin.com" className="nav-link" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} size="2x"/>
                    </a>
                </div>
                <p>&copy; 2025 Cafthé. Tous droits réservés.</p>
            </footer>
        </div>
    );
}

export default Footer;
