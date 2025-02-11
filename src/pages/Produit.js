import React from 'react';
import ProductList from "./ProductList";
import '../styles/index.css';

function Produit() {
    return (
        <section id="products" className="product-section">
            <div className="product-header">
                <h2 className="section-title">Nos Produits</h2>
                <p className="section-description">
                    Des cafés de spécialité, des thés raffinés et des accessoires haut de gamme, sélectionnés avec soin
                    pour vous offrir une expérience unique.
                </p>
            </div>

            <div className="product-list-container">
                <ProductList />
            </div>
        </section>
    );
}

export default Produit;