import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.js';

function ProductCard({ produit, ajouterAuPanier }) {
    const [quantite, setQuantite] = useState(1);

    // Gérer l'augmentation de la quantité
    const augmenterQuantite = () => {
        setQuantite(quantite + 1);
    };

    // Gérer la diminution de la quantité
    const diminuerQuantite = () => {
        if (quantite > 1) {
            setQuantite(quantite - 1);
        }
    };

    // Ajouter au panier
    const ajouterProduitAuPanier = () => {
        ajouterAuPanier(produit, quantite);
    };

    return (
        <Link to={`/produit/${produit.produit_id}`} className="product-card-link">
        <div className="product-card">
            <div className="product-image-wrapper">
                <img
                    src={produit.image_path}
                    alt={produit.nom}
                    className="product-image"
                />
            </div>
            <h3>{produit.nom}</h3>
            <p>{produit.prix_TTC} €</p>
            <div className="bottom"></div>
            {/* Cette div donne la forme du paquet */}
        </div>
        </Link>
    );
}

export default ProductCard;
