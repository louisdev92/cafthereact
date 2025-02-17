import React from 'react';
import TopVente from './TopVente'; // Importez votre liste de produits
import '../App.js';
import { Link } from "react-router-dom";  // Assurez-vous d'avoir un fichier de style global.
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
                <h2 className="section-title">Meilleures Ventes</h2>
                <p>
                    Découvrez nos produits les plus populaires, soigneusement sélectionnés pour leur qualité et leur
                    succès auprès de nos clients.
                </p>
                <TopVente />
                <div className="button-container">
                    <Link to="/produits" className="main-btn">Voir Plus</Link>
                </div>
            </section>

            {/* Section Notre Histoire */}
            <section
                id="about"
                className="about-section"
                style={{
                    textAlign: 'center',
                    padding: '80px 20px',
                    backgroundImage: 'url("https://thumbs.dreamstime.com/b/coffee-background-space-text-85121087.jpg")',
                    backgroundPosition: 'center',
                    position: 'relative',
                    color: '#F4EDE4'
                }}
            >
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    zIndex: 1
                }}></div>
                <div style={{ position: 'relative', zIndex: 2 }}>
                    <h2 style={{ fontSize: '36px', marginBottom: '20px' }}>Notre Histoire</h2>
                    <p className="cafe" style={{ fontSize: '20px', margin: '0 auto 10px' }}>
                        Chez Cafthé, nous sélectionnons les meilleurs producteurs pour vous offrir des produits exceptionnels.
                    </p>
                    <p className="cafe" style={{ fontSize: '20px', margin: '0 auto 10px' }}>
                        Notre engagement : une qualité irréprochable et un respect des valeurs artisanales.
                    </p>
                    <p className="cafe" style={{ fontSize: '20px', margin: '0 auto 30px' }}>
                        Nous travaillons main dans la main avec des producteurs et des torréfacteurs passionnés pour vous garantir une qualité et une fraîcheur incomparables.
                    </p>
                    <div className="button-container">
                        <Link to="/connaitre" className="main-btn-cafe" style={{
                            backgroundColor: '#8B5E3C',
                            color: '#fff',
                            padding: '12px 25px',
                            fontSize: '18px',
                            borderRadius: '25px',
                            textDecoration: 'none',
                            fontWeight: 'bold',
                            transition: '0.3s'
                        }}
                              onMouseOver={(e) => e.target.style.backgroundColor = '#5a382d'}
                              onMouseOut={(e) => e.target.style.backgroundColor = '#8B5E3C'}>
                            Découvrez notre histoire
                        </Link>
                    </div>
                </div>
            </section>

            <section id="testimonials" className="testimonials-section"
                     style={{textAlign: 'center', padding: '50px 20px', backgroundColor: '#f8f8f8'}}>
                <h2 style={{fontSize: '28px', marginBottom: '20px', color: '#333'}}>Ce que nos clients disent</h2>
                <div style={{display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap'}}>
                    <div style={{
                        maxWidth: '300px',
                        padding: '20px',
                        borderRadius: '10px',
                        backgroundColor: '#fff',
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                        textAlign: 'center'
                    }}>
                        <img
                            src="https://randomuser.me/api/portraits/women/44.jpg"
                            alt="Sophie D."
                            style={{
                                width: '80px',
                                height: '80px',
                                borderRadius: '50%',
                                objectFit: 'cover',
                                marginBottom: '10px'
                            }}
                        />
                        <p style={{fontSize: '16px', fontStyle: 'italic', color: '#555'}}>
                            "Le meilleur café que j'ai jamais goûté ! La qualité est exceptionnelle, et la livraison
                            rapide."
                        </p>
                        <strong style={{color: '#333'}}>- Sophie D.</strong>
                    </div>
                    <div style={{
                        maxWidth: '300px',
                        padding: '20px',
                        borderRadius: '10px',
                        backgroundColor: '#fff',
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                        textAlign: 'center'
                    }}>
                        <img
                            src="https://randomuser.me/api/portraits/men/46.jpg"
                            alt="Marc L."
                            style={{
                                width: '80px',
                                height: '80px',
                                borderRadius: '50%',
                                objectFit: 'cover',
                                marginBottom: '10px'
                            }}
                        />
                        <p style={{fontSize: '16px', fontStyle: 'italic', color: '#555'}}>
                            "Un service client au top, et les thés sont d'une qualité supérieure. Je suis cliente fidèle
                            !"
                        </p>
                        <strong style={{color: '#333'}}>- Marc L.</strong>
                    </div>
                    <div style={{
                        maxWidth: '300px',
                        padding: '20px',
                        borderRadius: '10px',
                        backgroundColor: '#fff',
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                        textAlign: 'center'
                    }}>
                        <img
                            src="https://previews.123rf.com/images/milkos/milkos2105/milkos210501603/169508669-dame-asiatique-gaie-buvant-du-caf%C3%A9-dans-le-salon.jpg"
                            alt="Témoignage"
                            style={{
                                width: '80px',
                                height: '80px',
                                borderRadius: '50%',
                                objectFit: 'cover',
                                marginBottom: '10px'
                            }}
                        />
                        <p style={{fontSize: '16px', fontStyle: 'italic', color: '#555'}}>
                            "Une expérience incroyable ! Les arômes du café sont sublimes et la commande est arrivée
                            très rapidement."
                        </p>
                        <strong style={{color: '#333'}}>- Zoe R.</strong>
                    </div>
                </div>
            </section>

            <section id="contact" className="contact-section" style={{ textAlign: 'center', padding: '50px 20px', backgroundColor: '#f8f8f8' }}>
                <h2 style={{ fontSize: '28px', marginBottom: '15px', color: '#333' }}>Contactez-nous</h2>
                <p style={{ fontSize: '16px', color: '#555', maxWidth: '600px', margin: '0 auto 10px' }}>
                    Besoin d'aide ? Nous sommes là pour répondre à toutes vos questions.
                </p>
                <p style={{ fontSize: '16px', color: '#555', maxWidth: '600px', margin: '0 auto 30px' }}>
                    Que vous ayez des demandes spécifiques ou des questions sur nos produits, n'hésitez pas à nous contacter.
                </p>
                <h3 style={{ fontSize: '22px', marginBottom: '15px', color: '#333',}}>Nos Coordonnées</h3>
                <ul style={{ listStyle: 'none', padding: 0, fontSize: '16px', color: '#444', lineHeight: '1.8' }}>
                    <li><strong>📍 Adresse :</strong> 123 Rue des Tasses, 41000 Blois, France</li>
                    <li><strong>🕒 Horaires :</strong> Lundi - Vendredi : 9h00 - 18h00</li>
                    <li><strong>🗺️ Plan :</strong>
                        <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" style={{ color: '#007BFF', textDecoration: 'none', fontWeight: 'bold' }}>
                            Voir sur Google Maps
                        </a>
                    </li>
                </ul>
                <div className="google-map" style={{ marginTop: '20px', borderRadius: '10px', overflow: 'hidden' }}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.2721892114455!2d1.3321366758845532!3d47.58600948939995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e4a81baa47a01b%3A0x283456d5dbb777bb!2sLa%20Caf&#39;Th%C3%A9!5e1!3m2!1sfr!2sfr!4v1739200110707!5m2!1sfr!2sfr"
                        width="100%"
                        height="400"
                        style={{ border: 0, borderRadius: '10px' }}
                        allowFullScreen=""
                        loading="lazy">
                    </iframe>
                </div>
                <div className="button-container" style={{ marginTop: '30px' }}>
                    <Link to="/contact" className="main-btn">
                        Nous contacter
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default Home;
