import React from 'react';

function Presentation() {
    return (
        <section id="presentation">
            <div className="presentation-contenu">
                <div className="presentation-texte">
                    <h2>Présentation</h2>
                    <p>
                        Actuellement en formation de <span className="bold">développeur web</span> à La Fabrique du Numérique à <span className="bold">Blois</span>, je suis passionné par le développement et la création de solutions innovantes.
                        Mon parcours m'a permis d'acquérir des compétences solides en HTML, CSS, Wordpress. Je suis à la <span className="bold">recherche d'une alternance dans la région</span> afin de mettre en pratique
                        mes connaissances et de continuer à évoluer dans ce domaine dynamique. Je souhaite collaborer avec des professionnels expérimentés pour apprendre des meilleures pratiques
                        et contribuer à des projets stimulants. Mon ambition est de <span className="bold">développer mes compétences techniques et créatives</span> tout en apportant une valeur ajoutée à l'équipe avec
                        laquelle je travaillerai.
                    </p>
                    <p className="reseau">Suivez-moi sur :</p>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <img src="/img/logo-linkedin.png" alt="LinkedIn" />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <img src="/img/github.png" alt="GitHub" />
                    </a>
                </div>
                <div className="presentation-contact">
                    <img src="/img/profill.jpeg" alt="Mon portrait" className="portrait" />
                    <div className="contact-info">
                        <p>01 23 45 67 89</p>
                        <p>prenom.nom@mail.com</p>
                        <button className="button">
                            <a href="./assets/ressources/Mon_CV.pdf" download="Mon_CV.pdf" className="btn-download">Télécharger mon CV</a>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Presentation;