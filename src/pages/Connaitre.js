import React from 'react';
import '../styles/App.css';
import Panier from "../components/Panier";  // Assure-toi d'ajouter des styles appropriés dans ce fichier

function AboutUs(props) {
    return (
        <div className="about-us-container">
            <h1 className="about-us-title">Nous connaître</h1>
            <div className="about-us-content">
                <p>
                    Bienvenue sur notre page "Nous connaître". Chez CAFTHE, notre mission est de
                    proposer des produits de qualité supérieure tout en offrant une expérience
                    client exceptionnelle. Nous croyons en l'importance de la transparence, de la
                    durabilité et de l'innovation dans tous nos produits.
                </p>
                <h2>Notre histoire</h2>
                <p>
                    CAFTHE a été fondé en 2023 avec l'idée de créer une marque qui allie
                    qualité, responsabilité et accessibilité. Nous avons démarré avec une petite
                    équipe passionnée, mais notre vision d'un service client personnalisé et
                    notre engagement envers l'excellence ont rapidement fait grandir notre
                    entreprise.
                </p>
                <h2>Notre équipe</h2>
                <p>
                    Notre équipe est composée de personnes talentueuses et dédiées, provenant
                    de divers horizons. Chacun d'entre nous partage une passion commune pour
                    offrir le meilleur à nos clients et contribuer à une entreprise durable.
                </p>
                <div className="about-us-image">
                    <img src="https://images.pexels.com/photos/17362900/pexels-photo-17362900/free-photo-of-femme-modele-jeune-retro.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Logo" width={200}/>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
