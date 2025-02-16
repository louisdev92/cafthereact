import React, {useContext} from "react";
import {PanierContext} from "../context/PanierContext";
import {api} from "../api";
import {useNavigate} from "react-router-dom";

const PasserCommande = () => {
    const {panier, viderPanier} = useContext(PanierContext);
    const navigate = useNavigate();
    const clientID = 6;

    const handleCommande = () => {
        const produits = panier.map(item => ({
            produit_id: item.produit_id,
            quantite: item.quantite
        }));
        api.post(`/clients/${clientID}/commandes`, {produits})
            .then(response => {
                alert("Commande validée !");
                viderPanier();
                navigate("/");
            })
            .catch(error => alert("Erreur lors de la commande"));
    };

    return (
        <div>
            <h2>Confirmation de Commande</h2>
            <button onClick={handleCommande}>Confirmer la commande</button>
        </div>
    );
};

export default PasserCommande;