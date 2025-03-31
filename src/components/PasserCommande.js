import React, { useContext } from "react";
import { PanierContext } from "../context/PanierContext";
import { api } from "../api";
import { useNavigate } from "react-router-dom";
import '../styles/App.css';

const PasserCommande = () => {
    const { panier, viderPanier } = useContext(PanierContext);
    const navigate = useNavigate();
    const clientID = 6;

    const total = panier.reduce((acc, item) => acc + item.prix_TTC * item.quantite, 0);

    const handleCommande = () => {
        const produits = panier.map(item => ({
            produit_id: item.produit_id,
            quantite: item.quantite
        }));
        api.post(`/clients/${clientID}/commandes`, { produits })
            .then(response => {
                alert("Commande validée !");
                viderPanier();
                navigate("/");
            })
            .catch(error => alert("Erreur lors de la commande"));
    };

    return (
        <div className="commande-container">
            <h2>Confirmation de Commande</h2>
            <p>Total de votre commande : {total.toFixed(2)}€</p>
            <button onClick={handleCommande} className="submit-btn">Confirmer la commande</button>
            <button className="fiche-produit-home-btn" onClick={() => navigate(-1)}>
                Retour
            </button>
        </div>
    );
};

export default PasserCommande;
