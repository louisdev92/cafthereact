import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../api";
import { PanierContext } from "../context/PanierContext";
import '../styles/index.css';

const FicheProduit = () => {
    const { id } = useParams();
    const { ajouterAuPanier } = useContext(PanierContext);
    const [produit, setProduit] = useState(null);
    const [quantite, setQuantite] = useState(1);
    const navigate = useNavigate();

    useEffect(() => {
        api.get(`produits/${id}`)
            .then(response => setProduit(response.data))
            .catch(error => console.log("Erreur de chargement du produit", error));
    }, [id]);

    if (!produit) return <p>Chargement...</p>;

    const handleAddToCart = () => {
        ajouterAuPanier(produit, quantite);
        alert(`${quantite}x ${produit.nom} ajouté au panier !`);
    };

    return (
        <div className="fiche-produit-container">
            <h2>{produit.nom}</h2>
            <p>{produit.description}</p>
            <p>Prix : {produit.prix_TTC}€</p>

            {/* Sélecteur de quantité */}
            <div className="fiche-produit-quantity-selector">
                <button onClick={() => setQuantite(prev => (prev > 1 ? prev - 1 : 1))}>-</button>
                <span>{quantite}</span>
                <button onClick={() => setQuantite(prev => prev + 1)}>+</button>
            </div>

            {/* Container for buttons */}
            <div className="fiche-produit-buttons">
                <button className="fiche-produit-home-btn" onClick={handleAddToCart}>
                    Ajouter {quantite} au panier
                </button>
                <button className="fiche-produit-home-btn" onClick={() => navigate(-1)}>
                    Retour
                </button>
            </div>
        </div>
    );
};

export default FicheProduit;
