import React, { useContext } from "react";
import { PanierContext } from "../context/PanierContext";
import { useNavigate } from "react-router-dom";
import '../styles/App.css';

const Panier = () => {
    const { panier, supprimerDuPanier, viderPanier } = useContext(PanierContext);
    const navigate = useNavigate();

    const total = panier.reduce((acc, item) => acc + item.prix_TTC * item.quantite, 0);

    return (
        <div className="panier-container">
            <h2>Mon Panier</h2>
            {panier.length === 0 ? (
                <p>Votre panier est vide.</p>
            ) : (
                <>
                    <ul>
                        {panier.map(item => (
                            <li key={item.produit_id}>
                                <span>{item.nom} - {item.quantite} x {item.prix_TTC}€</span>
                                <button onClick={() => supprimerDuPanier(item.produit_id)}>X</button>
                            </li>
                        ))}
                    </ul>
                    <p>Total : {total.toFixed(2)}€</p>
                    <div className="panier-buttons">
                        <button onClick={() => navigate("/produits")}>Continuer Achat</button>
                        <button onClick={() => navigate("/passer-commande")}>Passer la Commande</button>
                        <button className="vider" onClick={viderPanier}>Vider le Panier</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Panier;
