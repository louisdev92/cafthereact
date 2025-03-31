import React, { useEffect, useState } from "react";
import { api } from "../api";
import '../styles/App.css';
import { useNavigate } from "react-router-dom";

const MonCompte = () => {
    const [client, setClient] = useState(null);
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            alert("Veuillez vous connecter!");
            window.location.href = "/login";
        } else {
            api.get("/ficheclient/6")
                .then(response => {
                    setClient(response.data);
                    setFormData(response.data);
                })
                .catch(() => alert("Erreur de chargement du profil."));
        }
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleUpdate = () => {
        api.put(`/clients/${client.client_id}`, formData)
            .then(() => {
                alert("Informations mises à jour !");
                setIsEditing(false);
                setClient(formData);
            })
            .catch(() => alert("Erreur lors de la mise à jour."));
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        alert("Déconnexion réussie !");
        window.location.href = "/login";
    };

    if (!client) return <p>Chargement ...</p>;

    return (
        <div className="compte-container">
            <h2>Mon compte</h2>
            {isEditing ? (
                <div className="edit-container">
                    <p>Nom :</p>
                    <input type="text" name="nom" value={formData.nom} onChange={handleChange}/>
                    <p>Prenom :</p>
                    <input type="text" name="prenom" value={formData.prenom} onChange={handleChange}/>
                    <p>Adresse :</p>
                    <input type="text" name="adresse_livraison" value={formData.adresse_livraison}
                           onChange={handleChange}/>
                    <div className="button-group">
                        <button onClick={handleUpdate} className="compte-btn">Enregistrer</button>
                        <button onClick={() => setIsEditing(false)} className="compte-btn">Annuler</button>
                    </div>
                </div>
            ) : (
                <div className="info-container">
                    <p><strong>Nom :</strong> {client.nom}</p>
                    <p><strong>Prénom :</strong> {client.prenom}</p>
                    <p><strong>Email :</strong> {client.email}</p>
                    <p><strong>Adresse :</strong> {client.adresse_livraison || "Non renseignée"}</p>
                    <div className="button-group">
                        <button onClick={() => setIsEditing(true)} className="compte-btn">Modifier</button>
                        <button className="compte-btn" onClick={() => navigate(-1)}>
                            Retour
                        </button>
                    </div>
                </div>
                    )}
                    <button onClick={handleLogout} className="compte-btn logout-btn">Se déconnecter</button>
        </div>
            );
            };

            export default MonCompte;
