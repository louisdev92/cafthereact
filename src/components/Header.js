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
                    icon={faShoppingCart}
                    className="icon"
                    onClick={handleUserClickk} />
                <FontAwesomeIcon
                    icon={faUser}
                    className="icon"
                    onClick={handleUserClick}
                />
                <div>
                    {isAuthenticated ? (
                        <>
                            <span>{user.prenom.charAt(0).toUpperCase() + user.prenom.slice(1).toLowerCase()} {user.nom.charAt(0).toUpperCase() + user.nom.slice(1).toLowerCase()}  </span>
                            <button onClick={handleLogout}>
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
