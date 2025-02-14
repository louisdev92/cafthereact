import React from 'react';

function Projets() {
    return (
        <section id="projets">
            <h2>Projets Réalisés</h2>
            <div className="projets">
                <div className="projet">
                    <h3 className="bold">Projet 1</h3>
                    <img src="/img/projet.png" alt="illustration projet 1" className="skill-image" />
                    <p>Création d'un site web e-commerce.</p>
                </div>
                <div className="projet">
                    <h3 className="bold">Projet 2</h3>
                    <img src="/img/projet.png" alt="illustration projet 2" className="skill-image" />
                    <p>Développement d'une application de gestion.</p>
                </div>
                <div className="projet">
                    <h3 className="bold">Projet 3</h3>
                    <img src="/img/projet.png" alt="illustration projet 3" className="skill-image" />
                    <p>Refonte complète d'un site vitrine.</p>
                </div>
            </div>
        </section>
    );
}

export default Projets;