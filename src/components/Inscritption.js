import React, { useState } from "react";
import { api } from "../api";
import '../styles/App.css';

const Inscription = () => {
    const [formData, setFormData] = useState({ nom: "", prenom: "", email: "", mot_de_passe: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        api.post("/clients/register", formData)
            .then(response => alert("Inscription réussie !"))
            .catch(error => alert("Erreur lors de l'inscription"));
    };

    return (
        <div className="login-container">
            <h2>Ou s'inscrire</h2>
            <form onSubmit={handleSubmit} className="login-form">
                <div className="input-group">
                    <label htmlFor="nom">Nom</label>
                    <input
                        type="text"
                        name="nom"
                        id="nom"
                        placeholder="Nom"
                        value={formData.nom}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="prenom">Prénom</label>
                    <input
                        type="text"
                        name="prenom"
                        id="prenom"
                        placeholder="Prénom"
                        value={formData.prenom}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="mot_de_passe">Mot de passe</label>
                    <input
                        type="password"
                        name="mot_de_passe"
                        id="mot_de_passe"
                        placeholder="Mot de passe"
                        value={formData.mot_de_passe}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="submit-btn">S'inscrire</button>
            </form>
        </div>
    );
};

export default Inscription;
