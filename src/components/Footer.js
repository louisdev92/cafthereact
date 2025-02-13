import React from 'react';
import {Link} from "react-router-dom";

function Footer(props) {
    return (
        <div>
            <footer className="footer">
                <Link to="/mentions-legales" className="nav-link">Mentions Légales</Link>
                <a href="/" className="nav-link">Politique de Confidentialité</a> {/* Correction de l'orthographe */}
                <a href="/" className="nav-link">Conditions de Vente</a> {/* Correction de l'orthographe */}
                <p>&copy; 2025 Cafthé. Tous droits réservés.</p>
            </footer>
        </div>
    );
}

export default Footer;