import React, {useEffect} from 'react';
import axios from "axios";
/* npm install axios */
function ProductList(props) {
        const [produits, setProduits] = React.useState([]);

        useEffect(() => {
            const fetchProduits = async () => {
                try {
                    const response = await axios.get("http://localhost:3000/api/produits");

                    setProduits(response.data);
                } catch (error) {
                    console.error("Erreur de chargement des produits", error);
                }
            };

            void fetchProduits();
        }, []);
    return (
        <div>
            <h3> Liste des produits</h3>
            <div className="product-list">
                {produits.map((produit) => produit.produit_id)}
            </div>
        </div>
    );
}

export default ProductList;