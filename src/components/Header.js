import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from "../context/AuthContext";
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import '../styles/App.css';

function Header() {
    const navigate = useNavigate();
    const { user, isAuthenticated, logout } = useContext(AuthContext);

    const handleUserClick = () => {
        navigate('/login');
    };

    return (
        <header className="header">
            <div className="header-content">
            </div>
            <div className="header-icons">
                <FontAwesomeIcon icon={faUser} className="icon" onClick={handleUserClick} />
                <FontAwesomeIcon icon={faShoppingCart} className="icon" />
                <div>
                    {isAuthenticated ? (
                        <>
                            <span>
                                {user.prenom.charAt(0).toUpperCase() + user.prenom.slice(1).toLowerCase()}
                                {" "}
                                {user.nom.charAt(0).toUpperCase() + user.nom.slice(1).toLowerCase()}
                                {" "}
                            </span>
                            <button className="logout-button" onClick={logout}>
                                <FaSignOutAlt/>
                            </button>
                        </>
                    ) : (
                        <Link to={'/login'}>
                        <FaSignInAlt/> Se connecter
                        </Link>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
