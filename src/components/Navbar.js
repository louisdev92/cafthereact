import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Navbar() {
    const [searchQuery, setSearchQuery] = useState('');
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [showResults, setShowResults] = useState(false);

    // Produits simulés pour tester la recherche
    useEffect(() => {
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
    }, []);

    useEffect(() => {
        if (searchQuery.trim() === '') {
            setFilteredProducts([]);
            setShowResults(false);
        } else {
            const results = products.filter(product =>
                product.nom.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredProducts(results);
            setShowResults(true);
        }
    }, [searchQuery, products]);

    const handleScroll = () => {
        setShowResults(false);
    };

    const handleClickOutside = (event) => {
        if (!event.target.closest('.search-container')) {
            setShowResults(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        document.addEventListener('click', handleClickOutside);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <a href="/" className="logo">
                <img src="/img/cafthe.png" alt="Cafthe"/>
            </a>

            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </button>

            {/* Navigation Links */}
            <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
                <Link to="/" className="nav-link">Accueil</Link>
                <Link to="/produits" className="nav-link">Nos produits</Link>
                <Link to="/connaitre" className="nav-link">Nous Connaitre</Link>
                <Link to="/contact" className="nav-link">Nous Contacter</Link>
            </nav>

            <div className="header-right">
                <div className="search-container">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Rechercher..."
                        className="search-input"
                    />
                    <button className="search-button">
                        <FontAwesomeIcon icon={faSearch}/>
                    </button>

                    {showResults && (
                        <div className="product-results">
                            {filteredProducts.length > 0 ? (
                                filteredProducts.map(product => (
                                    <Link
                                        key={product.produit_id}
                                        to={`/produit/${product.produit_id}`}
                                        className="product-item"
                                        onClick={() => setShowResults(false)}
                                    >
                                        {product.nom}
                                    </Link>
                                ))
                            ) : (
                                <p className="no-results">Aucun produit trouvé</p>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
