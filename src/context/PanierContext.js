import React, {createContext, useEffect, useState} from "react";

export const PanierContext = createContext();

export const PanierProvider = ({ children }) => {
    const [panier, setPanier] = useState(() => {
        // Charger le panier depuis localStorage au démarrage
        const panierStocké = localStorage.getItem("panier");
        return panierStocké ? JSON.parse(panierStocké) : [];
    });
        // Sauvegarder le panier à chaque mise à jour
    useEffect(() => {
        localStorage.setItem("panier", JSON.stringify(panier));
    }, [panier]);

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
        localStorage.removeItem("panier");
    };

    return (
        <PanierContext.Provider value={{panier, ajouterAuPanier, supprimerDuPanier, viderPanier}}>
            {children}
        </PanierContext.Provider>
    );
};