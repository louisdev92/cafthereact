import React, {useContext, useState} from 'react';
import axios from 'axios'; // Added axios import
import {AuthContext} from "../context/AuthContext";
import {useNavigate} from "react-router-dom";
import '../styles/index.css';

function Login(props) {
    const {login} = useContext(AuthContext); // fonction Login venant du contexte
    const navigate = useNavigate(); // La Navigation

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // Gestion de la soumission du formulaire
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Vérification de la validité des champs
        if (!email || !password) {
            setError('Tous les champs doivent être remplis');
            return;
        }

        // Si tout est valide, réinitialiser l'erreur
        setError('');

        try {
            const response = await axios.post("http://localhost:3001/api/login", {
                email,
                password,
            });

            const { token, client } = response.data;

            // On met a jour contexte d'authentification
            login(token, client);

            // Redirection du client vers une page
            navigate("/");
        } catch (error) {
            console.error("Erreur lors de la connexion : ", error);
        }

        // Réinitialiser les champs après la soumission
        setEmail('');
        setPassword('');
    };

    return (
        <div className="login-container">
            <h2>Connexion</h2>

            <form onSubmit={handleSubmit} className="login-form">
                {/* Champ e-mail */}
                <div className="input-group">
                    <label htmlFor="email">E-mail</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Entrez votre e-mail"
                        required
                    />
                </div>

                {/* Champ mot de passe */}
                <div className="input-group">
                    <label htmlFor="password">Mot de passe</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Entrez votre mot de passe"
                        required
                    />
                </div>

                {/* Affichage de l'erreur */}
                {error && <p className="error-message">{error}</p>}

                <button type="submit" className="submit-btn">Se connecter</button>
            </form>
        </div>
    );
}

export default Login;