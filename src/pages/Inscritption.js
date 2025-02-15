import React, {useState} from "react";
import {api} from "../api";
import '../styles/App.css';

const Inscritption = () => {
    const [formData, setFormData] = useState({nom: "", prenom: "", email: "", mot_de_passe: ""});

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        api.post("/clients/register", formData)
            .then(response => alert("Inscription réussie !"))
            .catch(error => alert("Erreur lors de l'inscription"));
    };

    return (
        <form onSubmit={handleSubmit} className="login-form">
            <input className="input-group" type="text" name="nom" placeholder="Nom" onChange={handleChange} required/>
            <input className="input-group" type="text" name="prenom" placeholder="Prenom" onChange={handleChange} required/>
            <input className="input-group" type="text" name="email" placeholder="Email" onChange={handleChange} required/>
            <input className="input-group" type="text" name="mot_de_passe" placeholder="Mot de passe" onChange={handleChange} required/>
            <button type="submit" className="submit-btn">S'inscrire</button>
        </form>
    );
};

export default Inscritption;