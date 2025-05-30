import React, { useState, useEffect } from 'react';
import ProductList from "./ProductList";
import '../styles/App.css';

function Produit() {
    const [category, setCategory] = useState('');
    const [priceRange, setPriceRange] = useState('');
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                let url = `https://api.louis.hameau.dev-campus.fr/api/produits/search`;
                const params = new URLSearchParams();

                if (category) {
                    params.append("categorie_nom", category); // Use categorie_nom
                }

                if (priceRange) {
                    const [min, max] = priceRange.split('-');
                    params.append("minPriceTTC", min);
                    if (max) params.append("maxPriceTTC", max);
                }

                if (params.toString()) {
                    url += `?${params.toString()}`;
                }

                console.log("Requête envoyée à l'API:", url);

                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Erreur HTTP! Statut: ${response.status}`);
                }
                const data = await response.json();
                setProducts(data);
                setError(null);
            } catch (error) {
                console.error("Erreur lors de la récupération des produits :", error);
            }
        };

        const timeoutId = setTimeout(fetchProducts, 500);
        return () => clearTimeout(timeoutId);
    }, [category, priceRange]);

    return (
        <section id="products" className="product-section">
            <div className="product-header">
                <h2 className="section-title">Nos Produits</h2>
                <p className="section-description">
                    Des cafés de spécialité, des thés raffinés et des accessoires haut de gamme, sélectionnés avec soin
                    pour vous offrir une expérience unique.
                </p>
            </div>

            <div className="filter-container">
                <label htmlFor="productFilter" className="filter-label">Filtrer par :</label>
                <select
                    id="productFilter"
                    className="filter-select"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="">Toutes les catégories</option>
                    <option value="Café">Café</option>
                    <option value="Thé">Thé</option>
                    <option value="Accessoire">Accessoire</option>
                </select>

                <label htmlFor="priceFilter" className="filter-label">Plage de prix :</label>
                <select
                    id="priceFilter"
                    className="filter-select"
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                >
                    <option value="">Tous les prix</option>
                    <option value="0-5">Moins de 5€</option>
                    <option value="5-10">De 5€ à 10€</option>
                    <option value="10-20">De 10€ à 20€</option>
                    <option value="20-100">Plus de 20€</option>
                </select>
            </div>

            {error && <p className="error-message">{error}</p>}

            <div className="product-list-container">
                <ProductList products={products} />
            </div>
        </section>
    );
}

export default Produit;
