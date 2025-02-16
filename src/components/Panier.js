import React, {useContext} from "react";
import {PanierContext} from "../context/PanierContext";
import {useNavigate} from "react-router-dom";

const Panier = () => {
    const {panier, supprimerDuPanier, viderPanier} = useContext(PanierContext);
    const navigate = useNavigate();

    const total = panier.reduce((acc, item) => acc+item.prix_TTC * item.quantite, 0);

    return (
        <div>
            <h2>Mon Panier</h2>
            {panier.length === 0 ? (
                <p>Votre panier est vide.</p>
            ) : (
                <>
                <ul>
                    {panier.map(item => (
                        <li key={item.produit_id}>
                            {item.nom} - {item.quantite} x {item.prix_TTC}€
                            <button onClick={() => supprimerDuPanier(item.produit_id)}>X</button>
                        </li>
                    ))}
                </ul>
                <p>Total : {total.toFixed(2)}€</p>
                <button onClick={() => navigate("/passer-commande")}>Passer la Commande</button>
                <button onClick={viderPanier}>Vider le Panier</button>
            </>
            )}
        </div>
    );
};

export default Panier;