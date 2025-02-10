import React, { useState } from 'react';
import '../App.js';  // Assurez-vous d'avoir un fichier de style global.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Header() {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (event) => {
        event.preventDefault();
        console.log('Searching for:', searchQuery);
        // Tu peux ajouter ici la logique de recherche
    };

    return (
        <header className="header">
            <div className="header-left">
                {/* Icônes de profil et de panier */}
                {/* Tu peux ajouter des icônes ici si nécessaire */}
            </div>
            <div className="header-center">
                {/* Navigation centrée */}
                <nav className="nav-links">
                    <a href="/" className="nav-link">Accueil</a>
                    <a href="/" className="nav-link">Nos Produits</a>
                    <a href="/" className="nav-link">À propos de nous</a>
                    <a href="/" className="nav-link">Contact</a>
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
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </form>
            </div>
        </header>
    );
}

export default Header;
