import React from 'react';
import '../styles/App.css';

function RGPD() {
    return (
        <section id="rgpd">
            <div className="rgpd-contenu">
                <h2>Protection des Données Personnelles (RGPD)</h2>
                <p>Cette page décrit comment nous collectons, utilisons et protégeons les informations personnelles conformément au Règlement Général sur la Protection des Données (RGPD).</p>

                <h3>Données collectées</h3>
                <p>Nous collectons les informations suivantes : nom, adresse email, numéro de téléphone et tout autre renseignement nécessaire pour fournir nos services.</p>

                <h3>Utilisation des données</h3>
                <p>Les informations collectées sont utilisées pour améliorer nos services, communiquer avec les utilisateurs et personnaliser leur expérience sur notre site.</p>

                <h3>Partage des données</h3>
                <p>Nous ne partageons pas les données personnelles des utilisateurs avec des tiers, sauf si cela est nécessaire pour respecter des obligations légales ou si l'utilisateur y a consenti explicitement.</p>

                <h3>Sécurité des données</h3>
                <p>Nous nous engageons à sécuriser les informations personnelles en utilisant des mesures de sécurité appropriées pour éviter tout accès non autorisé, modification, divulgation ou destruction de vos données.</p>

                <h3>Droits des utilisateurs</h3>
                <p>Conformément au RGPD, les utilisateurs ont le droit d'accéder à leurs données, de les corriger, de les supprimer ou de restreindre leur traitement. Pour toute demande, veuillez nous contacter à : exemple@mail.com</p>
            </div>
        </section>
    );
}

export default RGPD;