import React, { useState, useEffect } from 'react';
import '../styles/PromoPopup.css'; // Assurez-vous d'avoir un fichier CSS pour le style

const PromoPopup = () => {
    const [isVisible, setIsVisible] = useState(true);

    const closePopup = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="promo-popup-overlay">
            <div className="promo-popup">
                <button className="close-btn" onClick={closePopup}>
                    &times;
                </button>
                <h2>Promotion Spéciale sur le Thé!</h2>
                <p>Profitez de 20% de réduction sur notre sélection exclusive de thés. Offre valable jusqu'à la fin du mois!</p>
                <button className="promo-btn" onClick={closePopup}>
                    Profitez-en maintenant
                </button>
            </div>
        </div>
    );
};

export default PromoPopup;
