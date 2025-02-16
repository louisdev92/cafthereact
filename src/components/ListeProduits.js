import React, {useEffect, useState} from 'react';
import {api} from "../api";
import {Link} from "react-router-dom";

const ListeProduits =() => {
    const [produits, setProduits] = useState([]);

    useEffect(() => {
        api.get("/produits")
            .then(response => setProduits(response.data))
            .catch(error => console.error("Erreur de chargement des produits", error));
    }, []);

    return (
        <div>
            <h2>Nos Produits</h2>
            <ul>
                {produits.map(produit => (
                    <li key={produit.produit_id}>
                        <Link to={`/produit/${produit.produit_id}`}>
                        {produit.nom} - {produit.prix_TTC} €
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListeProduits