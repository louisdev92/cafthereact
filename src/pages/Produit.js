import React, { useState } from 'react';
import ProductList from "./ProductList";
import '../styles/App.css';
import FicheProduit from "../components/FicheProduit";

function Produit() {
    // États pour les différents filtres
    const [filter, setFilter] = useState('');
    const [priceRange, setPriceRange] = useState('');  // Plage de prix

    // Fonction pour gérer les changements de filtres
    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    const handlePriceChange = (e) => {
        setPriceRange(e.target.value);
    };

    return (
        <section id="products" className="product-section">
            <div className="product-header">
                <h2 className="section-title">Nos Produits</h2>
                <p className="section-description">
                    Des cafés de spécialité, des thés raffinés et des accessoires haut de gamme, sélectionnés avec soin
                    pour vous offrir une expérience unique.
                </p>
            </div>

            {/* Zone de filtrage */}
            <div className="filter-container">
                <label htmlFor="productFilter" className="filter-label">Filtrer par :</label>
                <select
                    id="productFilter"
                    className="filter-select"
                    value={filter}
                    onChange={handleFilterChange}
                >
                    <option value="">Toutes les catégories</option>
                    <option value="cafe">Café</option>
                    <option value="the">Thé</option>
                    <option value="accessoire">Accessoire</option>
                </select>

                {/* Filtrer par prix */}
                <label htmlFor="priceFilter" className="filter-label">Plage de prix :</label>
                <select
                    id="priceFilter"
                    className="filter-select"
                    value={priceRange}
                    onChange={handlePriceChange}
                >
                    <option value="">Toutes les prix</option>
                    <option value="0-20">Moins de 5€</option>
                    <option value="20-50">De 5€ à 10€</option>
                    <option value="50-100">De 10€ à 20€</option>
                    <option value="100+">Plus de 20€</option>
                </select>

                <button className="ajouter-panier-btn" > Appliquer </button>
            </div>

            <div className="product-list-container">
                {/* Passer les filtres à ProductList */}
                <ProductList
                    filter={filter}
                    priceRange={priceRange}
                />
            </div>
        </section>
    );
}

export default Produit;
