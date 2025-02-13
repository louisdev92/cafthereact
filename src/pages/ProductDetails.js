import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/App.css'; // Assurez-vous d'avoir un fichier App.css pour les styles

function ProductDetails(props) {
    const { id } = useParams();
    const [produit, setProduit] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const [quantite, setQuantite] = useState(1);

    useEffect(() => {
        const fetchProduit = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/produits/${id}`);
                setProduit(response.data);
            } catch (error) {
                console.error('Erreur au chargement du produit', error);
                setError('Erreur au chargement du produit. Veuillez réessayer plus tard.');
            }
        };

        void fetchProduit();
    }, [id]);

    if (error) {
        return <div className="error-message">{error}</div>;
    }

    if (!produit) {
        return <div>Chargement...</div>;
    }

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

    return (
        <div className="product-details-container">
            <button onClick={() => navigate(-1)} className="ajouter-panier-btn">
                Retour
            </button>
            <div className="product-details">
                <img src={produit.imageUrl} alt={produit.nom} className="product-image"/>
                <h2>{produit.nom}</h2>
                <p>{produit.description}</p>
                <p>
                    <strong>Prix TTC :</strong> {produit.prix_TTC} €
                </p>
                <p><strong>Stock :</strong> {produit.stock} unités</p>
                {/* Contrôles de quantité */}
                <div className="quantite-container">
                    <button onClick={diminuerQuantite}>-</button>
                    <span>{quantite}</span>
                    <button onClick={augmenterQuantite}>+</button>
                </div>
                <button onClick={() => alert('Ajouter au panier')} className="add-to-cart-btn">
                    Ajouter au panier
                </button>
            </div>
        </div>
    );
}

export default ProductDetails;
