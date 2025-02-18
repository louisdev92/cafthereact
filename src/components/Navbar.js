import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Navbar() {
    const [searchQuery, setSearchQuery] = useState('');
    const [products, setProducts] = useState([]);
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [showResults, setShowResults] = useState(true); // Afficher les résultats

    // Fonction pour la recherche
    const handleSearch = async (event) => {
        event.preventDefault();

        if (!searchQuery.trim()) {
            setProducts([]);
            return;
        }

        // Remplacez la requête API par des données statiques pour tester
        const mockData = [
            { produit_id: 1, nom: "Thé Vert Bio" },
            { produit_id: 2, nom: "Thé Noir Earl Grey" },
            { produit_id: 3, nom: "Café Arabica" },
            { produit_id: 4, nom: "Filtre à thé" },
            { produit_id: 5, nom: "Thé Vert Sencha" },
            { produit_id: 6, nom: "Mug en Céramique" },
            { produit_id: 7, nom: "Cafetière à Piston" },
            { produit_id: 8, nom: "Théière en Fonte" },
            { produit_id: 9, nom: "Café Moulu Expresso" },
            { produit_id: 10, nom: "Boîte à Thé Vintage" }
        ];

        setProducts(mockData);
    };

    // Fermer les résultats si on fait défiler la page
    const handleScroll = () => {
        setShowResults(false);
    };

    // Fermer les résultats si on clique en dehors de la barre de recherche
    const handleClickOutside = (event) => {
        const searchBox = document.querySelector('.search-form');
        if (searchBox && !searchBox.contains(event.target)) {
            setShowResults(false);
        }
    };

    // Réagir au défilement
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('click', handleClickOutside);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div>
            <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
                <a href="/" className="logo">
                    <img src="/img/cafthe.png" alt="Cafthe" />
                </a>

                <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
                    ☰
                </button>

                <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
                    <Link to="/" className="nav-link">Accueil</Link>
                    <Link to="/produits" className="nav-link">Nos produits</Link>
                    <Link to="/connaitre" className="nav-link">Nous Connaitre</Link>
                    <Link to="/contact" className="nav-link">Nous Contacter</Link>
                </nav>

                <div className="header-right">
                    <form onSubmit={handleSearch} className="search-form">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => {
                                setSearchQuery(e.target.value);
                                setShowResults(true); // Afficher les résultats dès que l'utilisateur tape
                            }}
                            placeholder="Rechercher par nom..."
                            className="search-input"
                        />
                        <button type="submit" className="search-button">
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </form>

                    {/* Affichage des résultats de la recherche */}
                    {showResults && searchQuery && products.length > 0 && (
                        <div className="product-results">
                            {products.map((product) => (
                                <Link
                                    key={product.produit_id}
                                    to={`/produit/${product.produit_id}`}
                                    className="product-item"
                                    onClick={() => setShowResults(false)} // Cacher les résultats après un clic
                                >
                                    <h2>{product.nom}</h2>
                                </Link>
                            ))}
                        </div>
                    )}

                    {showResults && searchQuery && products.length === 0 && (
                        <p>Aucun produit trouvé</p>
                    )}
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
