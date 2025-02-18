import React, {createContext, useState, useEffect} from 'react';

/* Exportation du contexte pour y avoir accès*/
export const AuthContext = createContext(null);

/* Création du provider pour la connexion et la deco */
export function AuthProvider({ children }) {
    const [user, setUser] = useState(null); // Client
    const [token, setToken] = useState(null); // token JWT

    // Stockage dans le LocalStorage pour la persistance des données
    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        const storedUser = localStorage.getItem("user");

        if(storedUser && storedToken) {
            setToken(storedToken)
            setUser(JSON.parse(storedUser));
        }
    }, []);

    // Si le token où l'user changent, on met a jour le LocalStorage
    useEffect(() => {
        if (token && user) {
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));
        } else {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
        }
    }, [token, user]);

    // Connexion (On reçoit les données envoyées par l'API : token + infos client)

    const login = (jwt, userData) => {
        setToken(jwt);
        setUser(userData);
    };
    // Deconnexion

    const logout = () => {
        setToken(null);
        setUser(null);
    };

    const value = {
        token,
        user,
        login,
        logout,
        isAuthenticated: !!token,
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}