import React, {createContext, useState} from "react";

export const PanierContext = createContext();

export const PanierProvider = ({ children }) => {
    const [panier, setPanier] = useState([]);

    // Ajouter un produit au panier
    const ajouterAuPanier = (produit, quantite = 1) => {
        setPanier(prevPanier => {
            const itemExistant = prevPanier.find(item => item.produit_id === produit.produit_id);
            if (itemExistant) {
                return prevPanier.map(item =>
                item.produit_id === produit.produit_id
                ? {...item, quantite: item.quantite + quantite}
                : item
              );
            }
            return [...prevPanier, {...produit, quantite}];
        });
    };

    // Supprimer un produit du panier
    const supprimerDuPanier = (id) => {
        setPanier(prevPanier => prevPanier.filter(item => item.produit_id !== id));
    };

    // Vider le panier
    const viderPanier = () => {
        setPanier([]);
    };

    return (
        <PanierContext.Provider value={{panier, ajouterAuPanier, supprimerDuPanier, viderPanier}}>
            {children}
        </PanierContext.Provider>
    );
};