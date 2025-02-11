import React, {useContext, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom'; // Importation de useNavigate
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import {AuthContext} from "../context/AuthContext";
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';

function Header() {
    const navigate = useNavigate(); // Déclaration du hook navigate
    const handlelogout = () => {
        logout();
    };
    const{user, isAuthenticated, logout} = useContext(AuthContext);

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
                <FontAwesomeIcon icon={faShoppingCart} className="icon"/>
                <div>
                    {isAuthenticated ? (
                        <>
                            <span>{user.prenom.toUpperCase()} {user.nom.toUpperCase()}   </span>
                            <button onClick={handlelogout}>
                                <FaSignOutAlt />
                            </button>
                        </>
                    ) : (
                        <Link to={'/login'}>
                            <FaSignInAlt /> Se connecter
                        </Link>
                    )}
                </div>
            </div>

        </header>
    );
}

export default Header;
