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
        navigate('/mon-compte');
    };

    const handleUserClickk = () => {
        navigate('/panier');
    };

    const handleLogout = () => {
        logout();
    };

    return (
        <header className="header">
            <div className="header-icons">
                <FontAwesomeIcon
                    icon={faUser}
                    className="icon"
                    onClick={handleUserClick}
                />
                <FontAwesomeIcon
                    icon={faShoppingCart}
                    className="icon"
                onClick={handleUserClickk} />
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
