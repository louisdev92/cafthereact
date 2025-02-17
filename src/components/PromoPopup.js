import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import '../styles/PromoPopup.css'; // Assurez-vous d'avoir un fichier CSS pour le style

const PromoPopup = () => {
    const [isVisible, setIsVisible] = useState(true);
    const navigate = useNavigate();

    const closePopup = () => {
        setIsVisible(false);
    };

    // Ferme le popup après 5 secondes (ou autre délai)
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 5000); // Changez ce temps en fonction de vos besoins
        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="promo-popup-overlay">
            <div className="promo-popup">
                <button className="close-btn" onClick={closePopup}>&times;</button>
                <div className="promo-content">
                    <img src="https://cdn.shopify.com/s/files/1/2557/9694/files/Image-2-promo-10pourcents_600x600.png?v=1696252719" alt="Promo" className="promo-image" />
                    <div>
                        <h2 className="promo-title">Promotion Spéciale sur le Thé!</h2>
                        <p className="promo-description">Profitez de 10% de réduction sur notre sélection exclusive de thés. Offre valable jusqu'à la fin du mois!</p>
                        <button className="promo-btn" onClick={() => navigate("/produits")}>En profitez</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PromoPopup;
