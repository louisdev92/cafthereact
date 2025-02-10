import React from 'react';
import { Link } from 'react-router-dom';
import '../App.js';

function ProductCard({ produit }) {
    return (
        <div className="product-card">
            {/* image */}
            <h3>{produit.nom}</h3>
            <p>{produit.prix_TTC} €</p>
            <Link to={`/produit/${produit.produit_id}`} className="details-btn">
                Voir Details
            </Link>
        </div>
    );
}


export default ProductCard;