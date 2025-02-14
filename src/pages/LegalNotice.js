import React from 'react';
import '../styles/App.css';

function MentionLegal() {
    return (
        <section id="mentions-legales">
            <div className="legal-contenu">
                <h2>Informations Légales</h2>
                <p>Conformément à la loi française, voici les informations relatives à ce site web.</p>

                <h3>Propriétaire du site</h3>
                <p>
                    Nom de l'entreprise ou du propriétaire<br />
                    Adresse complète<br />
                    Téléphone : 0123456789<br />
                    Email : exemple@mail.com
                </p>

                <h3>Responsabilité</h3>
                <p>Le propriétaire de ce site s'engage à fournir des informations exactes et à jour. Cependant, il ne peut être tenu responsable des erreurs ou des omissions dans les contenus diffusés sur ce site.</p>

                <h3>Hébergement</h3>
                <p>
                    Le site est hébergé par :<br />
                    Nom de l'hébergeur<br />
                    Adresse de l'hébergeur<br />
                    Téléphone : 0987654321
                </p>

                <h3>Propriété Intellectuelle</h3>
                <p>Les contenus de ce site sont protégés par les droits de propriété intellectuelle et ne peuvent être reproduits sans autorisation.</p>
            </div>
        </section>
    );
}

export default MentionLegal;
