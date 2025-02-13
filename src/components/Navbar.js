import React, {useContext, useState} from 'react';
import '../App.js';  // Assurez-vous d'avoir un fichier de style global.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";

function Navbar() {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (event) => {
        event.preventDefault();
        console.log('Searching for:', searchQuery);
        // Tu peux ajouter ici la logique de recherche
    };

    return (
        <header className="navbar">
            <div className="header-left">
                {/* Icônes de profil et de panier */}
                {/* Tu peux ajouter des icônes ici si nécessaire */}
            </div>
            <div className="header-center">
                {/* Navigation centrée */}
                <nav className="nav-links">
                    <a href="/" className="nav-link">Accueil</a>
                    <Link to="/produits" className="nav-link">Nos produits</Link>
                    <Link to="/connaitre" className="nav-link">Nous Connaitres</Link>
                    <Link to="/contact" className="nav-link">Nous Contactez</Link>
                </nav>
            </div>
            <div className="header-right">
                {/* Formulaire de recherche */}
                <form onSubmit={handleSearch} className="search-form">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Rechercher..."
                        className="search-input"
                    />
                    <button type="submit" className="search-button">
                        <FontAwesomeIcon icon={faSearch}/>
                    </button>
                </form>
            </div>
        </header>
    );
}

export default Navbar;
