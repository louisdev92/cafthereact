import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../App.js';

function ProductDetails(props) {
    const { id } = useParams();
    const [produit, setProduit] = useState(null);  // Initialisation à null, pas undefined

    useEffect(() => {
        const fetchProduit = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/produits/${id}`);
                setProduit(response.data);
            } catch (error) {
                console.error('Erreur au chargement du produit', error);
            }
        };

        void fetchProduit();
    }, [id]);

    // Vérifier si le produit est défini avant de tenter de l'afficher
    if (!produit) {
        return <div>Chargement...</div>;
    }

    return (
        <div className="product-details">
            <h2>{produit.nom}</h2>
            <p>{produit.description}</p>
            <p>
                <strong>Prix TTC :</strong> {produit.prix_TTC} €
            </p>
            <p><strong>Stock :</strong> {produit.stock} unités</p>
        </div>
    );
}

export default ProductDetails;
