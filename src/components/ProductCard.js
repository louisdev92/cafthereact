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
        <div className="product-card">
            {/* Lien cliquable pour rediriger vers la page de détails du produit */}
            <Link to={`/produit/${produit.produit_id}`} className="product-card-link">
                {/* Affichage de l'image (si elle existe) */}
                <h3>{produit.nom}</h3>
                <p>{produit.prix_TTC} €</p>
            </Link>
        </div>
    );
}

export default ProductCard;
