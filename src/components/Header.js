import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from "../context/AuthContext";
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';

function Header() {
    const navigate = useNavigate();
    const { user, isAuthenticated, logout } = useContext(AuthContext);

    const handleUserClick = () => {
        navigate('/login');
    };

    const handleLogout = () => {
        logout();
    };

    return (
        <header className="header">
            <div className="header-content">
                <img
                    src="https://www.cafthe.fr/wp-content/uploads/2019/06/logo_white_x2.png"
                    alt="Logo"
                    width={150} // Grande taille du logo dans le header
                />
            </div>
            <div className="header-icons">
                <FontAwesomeIcon
                    icon={faUser}
                    className="icon"
                    onClick={handleUserClick}
                />
                <FontAwesomeIcon icon={faShoppingCart} className="icon" />
                <div>
                    {isAuthenticated ? (
                        <>
                            <span>{user.prenom.toUpperCase()} {user.nom.toUpperCase()}</span>
                            <button onClick={handleLogout}>
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
