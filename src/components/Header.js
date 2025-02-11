import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importation de useNavigate
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function Header() {
    const navigate = useNavigate(); // Déclaration du hook navigate

    // Fonction pour gérer le clic sur l'icône utilisateur
    const handleUserClick = () => {
        navigate('/login'); // Redirection vers la route "/login"
    };

    return (
        <header className="header">
            <div className="header-content">
                <h1 className="brand-title">CAFTHE</h1>
            </div>
            <div className="header-icons">
                {/* Icône de profil (connexion) */}
                <FontAwesomeIcon
                    icon={faUser}
                    className="icon"
                    onClick={handleUserClick} // Ajout de l'événement de clic
                />
                {/* Icône de panier */}
                <FontAwesomeIcon icon={faShoppingCart} className="icon" />
            </div>
        </header>
    );
}

export default Header;
