import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import '../styles/App.css';

function Navbar() {
    const [searchQuery, setSearchQuery] = useState('');
    const [products, setProducts] = useState([]);
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleSearch = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`/api/produits/search?nom=${encodeURIComponent(searchQuery)}`);
            if (response.ok) {
                const data = await response.json();
                setProducts(data);
            } else {
                setProducts([]);
            }
        } catch (error) {
            console.error('Erreur lors de la recherche des produits :', error);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <img className="logo"
                 src="https://www.cafthe.fr/wp-content/uploads/2019/06/logo_white_x2.png"
                 alt="Logo"
            />

            {/* Icône du menu burger pour mobile */}
            <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
            </div>

            {/* Menu Desktop */}
            <div className="nav-links">
                <Link to="/" className="nav-link">Accueil</Link>
                <Link to="/produits" className="nav-link">Nos produits</Link>
                <Link to="/connaitre" className="nav-link">Nous Connaître</Link>
                <Link to="/contact" className="nav-link">Nous Contacter</Link>
            </div>

            {/* Menu Mobile */}
            {menuOpen && (
                <div className="mobile-menu">
                    <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Accueil</Link>
                    <Link to="/produits" className="nav-link" onClick={() => setMenuOpen(false)}>Nos produits</Link>
                    <Link to="/connaitre" className="nav-link" onClick={() => setMenuOpen(false)}>Nous Connaître</Link>
                    <Link to="/contact" className="nav-link" onClick={() => setMenuOpen(false)}>Nous Contacter</Link>
                </div>
            )}

            {/* Barre de recherche */}
            <div className="header-right">
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
                {products.length > 0 && (
                    <div className="product-results">
                        {products.map((product) => (
                            <Link key={product.produit_id} to={`/produit/${product.produit_id}`} className="product-item">
                                {product.nom}
                            </Link>
                        ))}
                    </div>
                )}
                {products.length === 0 && searchQuery && <p>Aucun produit trouvé</p>}
            </div>
        </nav>
    );
}

export default Navbar;
