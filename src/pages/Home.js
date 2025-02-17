import React from 'react';
import TopVente from './TopVente'; // Importez votre liste de produits
import '../App.js';
import {Link} from "react-router-dom";  // Assurez-vous d'avoir un fichier de style global.
import PromoPopup from '../components/PromoPopup';

function Home() {
    return (
        <div className="home-container">
            <PromoPopup />

            {/* Section Hero */}

            <section className="hero-section">
                <h2>Bienvenue chez Cafthé</h2>
                <p>
                    Découvrez l'art du café et du thé d'exception. À Cafthé, chaque tasse est soigneusement élaborée
                    pour vous offrir une expérience inoubliable, avec des produits sélectionnés pour leur qualité et
                    leur fraîcheur.
                </p>
                <p>
                    Explorez notre collection exclusive de cafés, thés et accessoires pour sublimer votre quotidien.
                </p>
                <Link to="/produits" className="main-btn">Voir nos produits</Link>
            </section>

            <section className="categories-section">
                <div className="categories-container">
                    <div className="category-item category-coffee">
                        <h3>Café</h3>
                        <p>Découvrez notre sélection de cafés de spécialité.</p>
                        <Link to="/produits" className="category-btn">Voir plus</Link>
                    </div>
                    <div className="category-item category-tea">
                        <h3>Thé</h3>
                        <p>Des thés raffinés pour une expérience unique.</p>
                        <Link to="/produits" className="category-btn">Voir plus</Link>
                    </div>
                    <div className="category-item category-accessory">
                        <h3>Accessoires</h3>
                        <p>Tout pour améliorer votre expérience café/thé.</p>
                        <Link to="/produits" className="category-btn">Voir plus</Link>
                    </div>
                </div>
            </section>


            {/* Section Produits */}
            <section id="products" className="product-section">
                <h2 className="section-title">Nos Produits</h2>
                <p>
                    Des cafés de spécialité, des thés raffinés et des accessoires haut de gamme, sélectionnés avec soin
                    pour vous offrir une expérience unique.
                </p>
                <TopVente/>
                <Link to="/produits" className="main-btn">Voir Plus</Link>
            </section>

            {/* Section À propos */}
            <section id="about" className="about-section">
                <h2>Notre Histoire</h2>
                <p>
                    Chez Cafthé, nous sélectionnons les meilleurs producteurs pour vous offrir des produits
                    exceptionnels. Notre engagement : une qualité irréprochable et un respect des valeurs artisanales.
                </p>
                <p>
                    Nous travaillons main dans la main avec des producteurs et des torréfacteurs passionnés pour vous
                    garantir une qualité et une fraîcheur incomparables.
                </p>
                <Link to="/connaitre" className="main-btn">Découvrez notre histoire</Link>
            </section>

            {/* Section Témoignages */}
            <section id="testimonials" className="testimonials-section">
                <h2>Ce que nos clients disent</h2>
                <p>
                    "Le meilleur café que j'ai jamais goûté ! La qualité est exceptionnelle, et la livraison rapide. Je
                    recommande vivement Cafthé." - Sophie D.
                </p>
                <p>
                    "Un service client au top, et les thés sont d'une qualité supérieure. Je suis cliente fidèle !" -
                    Marc L.
                </p>
                <img src="https://i.pinimg.com/564x/cf/79/c3/cf79c3680008de82541b7e7613f5ebc6.jpg" alt="Image" style={{ width: '200px', height: 'auto' }} />
            </section>

            {/* Section Contact */}
            <section id="contact" className="contact-section">
                <h2>Contactez-nous</h2>
                <p>
                    Besoin d'aide ? Nous sommes là pour répondre à toutes vos questions. Que vous ayez des demandes
                    spécifiques ou des questions sur nos produits, n'hésitez pas à nous contacter.
                </p>

                <h3>Nos Coordonnées</h3>
                <ul>
                    <li><strong>Adresse :</strong> 123 Rue des Tasses, 75000 Paris, France</li>
                    <li><strong>Horaires :</strong> Lundi - Vendredi : 9h00 - 18h00</li>
                    <li><strong>Plan :</strong>
                        <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">Voir sur Google
                            Maps</a>
                    </li>
                </ul>
                <div className="google-map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.2721892114455!2d1.3321366758845532!3d47.58600948939995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e4a81baa47a01b%3A0x283456d5dbb777bb!2sLa%20Caf&#39;Th%C3%A9!5e1!3m2!1sfr!2sfr!4v1739200110707!5m2!1sfr!2sfr"
                        width="100%"
                        height="400"
                        style={{border: 0}}
                        allowFullScreen=""
                        loading="lazy">
                    </iframe>
                </div>
                <Link to="/contact" className="main-btn">Nous contacter</Link>
            </section>
        </div>
    );
}

export default Home;
