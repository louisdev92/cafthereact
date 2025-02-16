import React, {useContext, useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {api} from "../api";
import {PanierContext} from "../context/PanierContext";

const FicheProduit = () => {
    const {id} = useParams();
    const {ajouterAuPanier} = useContext(PanierContext);
    const [produit, setProduit] = useState((null));
    const [quantite, setQuantite] = useState(1);
    const navigate = useNavigate();

    useEffect(() => {
        api.get(`produits/${id}`)
            .then(response => setProduit(response.data))
            .catch(error => console.log("Erreur de Chargement du produit", error));
    }, [id]);

    if (!produit) return <p>Chargement...</p>;

    const handleAddtoCard = () => {
        ajouterAuPanier(produit, quantite);
        alert(`${quantite}x ${produit.nom} ajouté au panier !`);
    };

    return (
        <div>
            <h2>{produit.nom}</h2>
            <p>{produit.description}</p>
            <p>Prix : {produit.prix_TTC}€</p>
            <button onClick={() => ajouterAuPanier(produit)}>Ajouter au Panier</button>
            <button onClick={() => navigate(-1)}>Retour</button>

            {/* Sélecteur de quantité */}
            <div>
                <button onClick={() => setQuantite(prev => (prev > 1 ? prev - 1 : 1))}>-</button>
                <span style={{margin: "o 10px"}}>{quantite}</span>
                <button onClick={() => setQuantite(prev => prev+1)}>+</button>
            </div>

            <button onClick={handleAddtoCard}>Ajouter {quantite} au panier</button>
            <button onClick={() => navigate(-1)}>Retour</button>
        </div>
    );
};

export default FicheProduit