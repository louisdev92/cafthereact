import React from 'react';

function Footer(props) {
    return (
        <div>
            <footer className="footer">
                <a href="/" className="nav-link">Mentions Légales</a>
                <a href="/" className="nav-link">Politique de Confidentialité</a> {/* Correction de l'orthographe */}
                <a href="/" className="nav-link">Conditions de Vente</a> {/* Correction de l'orthographe */}
                <p>&copy; 2025 Cafthé. Tous droits réservés.</p>
            </footer>
        </div>
    );
}

export default Footer;