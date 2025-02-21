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
    const [isModalOpen, setIsModalOpen] = useState(false); // Etat pour gérer l'ouverture de la pop-up
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

    const handleOpenModal = () => {
        setIsModalOpen(true); // Ouvre la pop-up en cliquant sur l'image
    };

    const handleCloseModal = () => {
        setIsModalOpen(false); // Ferme la pop-up
    };

    return (
        <div className="fiche-produit-container">
            <h2>{produit.nom}</h2>
            <div className="product-image-wrapper">
                <img
                    src={produit.image_path}
                    alt={produit.nom}
                    className="product-image"
                    onClick={handleOpenModal} // Ouvre la pop-up au clic sur l'image
                />
            </div>
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

            {/* Modale pour l'image agrandie */}
            {isModalOpen && (
                <div className="modal-overlay" onClick={handleCloseModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <img src={produit.image_path} alt={produit.nom} className="modal-image" />
                        <button className="modal-close-btn" onClick={handleCloseModal}>Fermer</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FicheProduit;
