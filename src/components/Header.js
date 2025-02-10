import React from 'react';
import '../App.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function Header() {
    return (
        <header className="header">
            <div className="header-content">
                <h1 className="brand-title">CAFTHE</h1>
            </div>
            <div className="header-icons">
                {/* Icône de profil (connexion) */}
                <FontAwesomeIcon icon={faUser} className="icon" />
                {/* Icône de panier */}
                <FontAwesomeIcon icon={faShoppingCart} className="icon" />
            </div>
        </header>
    );
}

export default Header;
