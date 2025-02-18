import React from 'react';
import '../styles/rgpd.css';

function RGPD() {
    return (
        <section id="rgpd">
            <div className="rgpd-contenu">
                <h2>Protection des Données Personnelles (RGPD)</h2>
                <p>
                    Cette page décrit comment nous collectons, utilisons et protégeons les informations personnelles conformément au
                    Règlement Général sur la Protection des Données (RGPD).
                </p>

                <h3>Données collectées</h3>
                <p>
                    Nous collectons les informations suivantes : nom, adresse email, numéro de téléphone et toute autre information
                    nécessaire pour fournir nos services et améliorer votre expérience sur le site CafThé.
                </p>

                <h3>Utilisation des données</h3>
                <p>
                    Les informations collectées sont utilisées pour améliorer nos services, vous fournir des produits personnalisés,
                    communiquer avec vous, et personnaliser votre expérience sur notre site.
                </p>

                <h3>Partage des données</h3>
                <p>
                    Nous ne partageons pas les données personnelles des utilisateurs avec des tiers, sauf si cela est nécessaire pour
                    respecter des obligations légales ou si vous y avez consenti explicitement.
                </p>

                <h3>Sécurité des données</h3>
                <p>
                    Nous nous engageons à sécuriser les informations personnelles en utilisant des mesures de sécurité appropriées pour
                    éviter tout accès non autorisé, modification, divulgation ou destruction de vos données.
                </p>

                <h3>Droits des utilisateurs</h3>
                <p>
                    Conformément au RGPD, les utilisateurs ont le droit d'accéder à leurs données, de les corriger, de les supprimer ou de
                    restreindre leur traitement. Pour toute demande, veuillez nous contacter à : [exemple@mail.com].
                </p>

                <h3>Contact</h3>
                <p>
                    Si vous avez des questions concernant notre politique de protection des données personnelles ou si vous souhaitez exercer
                    vos droits, vous pouvez nous contacter à l'adresse suivante : [exemple@mail.com].
                </p>
            </div>
        </section>
    );
}

export default RGPD;
