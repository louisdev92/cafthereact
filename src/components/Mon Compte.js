import React, {useEffect, useState} from "react";
import {api} from "../api";

const MonCompte = () => {
    const [client, setClient] = useState(null);
    const [formData, setFormData] = useState({});
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            alert("Veuillez vous connecter!");
            window.location.href="/login";
        }else {
            api.get("/client/5")
            .then(response => {
                setClient(response.data);
                setFormData(response.data);
            })
                .catch(() => alert("Erreur de chargement du profil."));
        }
    }, []);

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleUpdate = () => {
        api.put(`/clients/${client.client_id}`, formData)
            .then(() => {
                alert("Information mises à jour !");
                setIsEditing(false);
                setClient(formData)
            })
            .catch(() => alert("Erreur lors de la mise à jour."));
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        alert("Déconnexion réussie !");
        window.location.href = "/login";
    };

    if (!client) return <p>Chargement ...</p>

    return (
        <div>
            <h2> Mon compte </h2>
            {isEditing ? (
            <div>
                <input type="text" name="nom" value={formData.nom} onChange={handleChange} />
                <input type="text" name="prenom" value={formData.prenom} onChange={handleChange} />
                <input type="text" name="adresse_livraison" value={formData.adresse_livraison} onChange={handleChange} />
                <button onClick={handleUpdate}>Enregister</button>
                <button onClick={() => setIsEditing(false)}>Annuler</button>
            </div>
         ) : (
         <div>
             <p><strong>Nom :</strong>{client.nom}</p>
             <p><strong>Prenom :</strong>{client.prenom}</p>
             <p><strong>Email :</strong>{client.email}</p>
             <p><strong>Adresse :</strong>{client.adresse_livraison || "Nom Renseignée"}</p>
             <button onClick={() => setIsEditing(true)}>Modifier</button>
         </div>
    )}
            <button onClick={handleLogout}>Se déconnecter</button>
        </div>
    );
};

export default MonCompte;