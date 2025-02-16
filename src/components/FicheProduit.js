import React, {useContext, useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {api} from "../api";
import {PanierContext} from "../context/PanierContext";

const FicheProduit = () => {
    const {id} = useParams();
    const {ajouterAuPanier} = useContext(PanierContext);
    const [produit, setProduit] = useState((null));
    const navigate = useNavigate();

    useEffect(() => {
        api.get(`produits/${id}`)
            .then(response => setProduit(response.data))
            .catch(error => console.log("Erreur de Chargement du produit", error));
    }, [id]);

    if (!produit) return <p>Chargement...</p>;

    return (
        <div>
            <h2>{produit.nom}</h2>
            <p>{produit.description}</p>
            <p>Prix : {produit.prix_TTC}€</p>
            <button onClick={() => ajouterAuPanier(produit)}>Ajouter au Panier</button>
            <button onClick={() => navigate(-1)}>Retour</button>
        </div>
    );
};

export default FicheProduit