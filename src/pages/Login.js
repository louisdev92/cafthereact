import React, { useContext, useState } from 'react';
import axios from 'axios'; // Import axios
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import '../styles/index.css';

function Login(props) {
    const { login } = useContext(AuthContext); // Fonction login venant du contexte
    const navigate = useNavigate(); // Navigation

    const [email, setEmail] = useState('');
    const [mot_de_passe, setMot_de_passe] = useState('');
    const [error, setError] = useState('');

    // Gestion de la soumission du formulaire
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Vérification de la validité des champs
        if (!email || !mot_de_passe) {
            setError('Tous les champs doivent être remplis');
            return;
        }

        // Réinitialiser l'erreur si tout est valide
        setError('');

        try {
            // Demande d'authentification
            const response = await axios.post("http://localhost:3000/api/clients/login", {
            email,
            mot_de_passe,
            });

            const { token, client } = response.data;

            // On met à jour le contexte d'authentification
            login(token, client);

            // Redirection vers la page d'accueil
            navigate("/");

        } catch (error) {
            console.error("Erreur lors de la connexion : ", error);

            // Gérer les erreurs du serveur et de l'API
            if (error.response) {
                // Si une réponse est reçue du serveur
                if (error.response.data && error.response.data.message) {
                    setError(error.response.data.message);
                } else {
                    setError("Erreur de connexion : veuillez réessayer.");
                    console.log(error)
                }
            } else if (error.request) {
                // Si aucune réponse du serveur
                setError("Impossible de se connecter");
            } else {
                // Si un autre type d'erreur est survenu
                setError("Une erreur inconnue est survenue.");
            }
        }

        // Réinitialiser les champs après la soumission
        setEmail('');
        setMot_de_passe('');
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
                        value={mot_de_passe}
                        onChange={(e) => setMot_de_passe(e.target.value)}
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
