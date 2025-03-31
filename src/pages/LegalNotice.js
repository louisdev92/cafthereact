import React from 'react';
import '../styles/LegalNotice.css';

const LegalNotice = () => {
    return (
        <div className="legal-notice">
            <h1>Mentions Légales</h1>

            <h2>Éditeur du Site</h2>
            <p>
                Le présent site est édité par CafThé, dont le siège social est situé à Blois, immatriculée au Registre du Commerce et des Sociétés de Blois sous le numéro [Numéro RCS].
            </p>

            <h2>Directeur de la Publication</h2>
            <p>
                Le directeur de la publication est [Nom du directeur de la publication].
            </p>

            <h2>Hébergement</h2>
            <p>
                Le site est hébergé par [Nom de l'hébergeur], dont le siège social est situé à [Adresse de l'hébergeur], [Code postal] [Ville], [Pays].
            </p>

            <h2>Propriété Intellectuelle</h2>
            <p>
                Tous les éléments du site, y compris les textes, images, graphismes, logos, icônes, sons, logiciels, sont la propriété exclusive de CafThé ou de ses partenaires, à l'exception des marques, logos ou contenus appartenant à d'autres sociétés partenaires ou auteurs.
            </p>
            <p>
                Les images présentes sur le site sont des images libres de droits provenant de Pexels, Shutterstock, Dreamstime, et 123Ref. Le logo de CafThé a été généré avec ChatGPT.
            </p>

            <h2>Responsabilité</h2>
            <p>
                CafThé ne saurait être tenue responsable des erreurs ou omissions dans les informations diffusées ou des problèmes techniques rencontrés sur le site et sur tous les autres sites vers lesquels des liens sont établis, ou de toute interprétation des informations publiées sur ces sites, ainsi que des conséquences de leur utilisation.
            </p>
        </div>
    );
};

export default LegalNotice;
