import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Navbar() {
    const [searchQuery, setSearchQuery] = useState('');
    const [products, setProducts] = useState([]);
    const [isScrolled, setIsScrolled] = useState(false);

    const handleSearch = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`/api/produits/search?nom=${encodeURIComponent(searchQuery)}`);
            if (response.ok) {
                const data = await response.json();
                setProducts(data);
            } else {
                setProducts([]);
                console.error('Aucun produit trouvé');
            }
        } catch (error) {
            console.error('Erreur lors de la recherche des produits :', error);
        }
    };

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
            <img className="logo"
                src="https://www.cafthe.fr/wp-content/uploads/2019/06/logo_white_x2.png"
                alt="Logo"

            />

            <div className="header-center">
                <nav className="nav-links">
                    <a href="/" className="nav-link">Accueil</a>
                    <Link to="/produits" className="nav-link">Nos produits</Link>
                    <Link to="/connaitre" className="nav-link">Nous Connaitres</Link>
                    <Link to="/contact" className="nav-link">Nous Contactez</Link>
                </nav>
            </div>
            <div className="header-right">
                <form onSubmit={handleSearch} className="search-form">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Rechercher par nom..."
                        className="search-input"
                    />
                    <button type="submit" className="search-button">
                        <FontAwesomeIcon icon={faSearch}/>
                    </button>
                </form>
                {products.length > 0 && (
                    <div className="product-results">
                        {products.map((product) => (
                            <Link key={product.produit_id} to={`/produit/${product.produit_id}`}
                                  className="product-item">
                                <h2>{product.nom}</h2>
                                <p>Description: {product.description}</p>
                                <p>Prix HT: {product.prix_HT} €</p>
                                <p>Prix TTC: {product.prix_TTC} €</p>
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
