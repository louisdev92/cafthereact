import React from 'react';
import {Link} from "react-router-dom";

function Footer() {
    return (
        <footer>
            <div className="footer-contenu">
                <Link to="/mention-legal">Mentions Légales</Link>
                &nbsp;&nbsp;
                <Link to="/rgpd">Politique de Confidentialité</Link>
                <p>&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;L. Hameau &nbsp;2024</p>
            </div>
        </footer>
    );
}

export default Footer;