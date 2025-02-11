import React, { useState } from 'react';
import '../styles/App.css';  // Assure-toi d'ajouter des styles appropriés dans ce fichier

function Contact(props) {
    // État pour gérer le formulaire de contact
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !message) {
            setError('Tous les champs doivent être remplis');
            return;
        }
        setError('');
        console.log('Message envoyé : ', { name, email, message });
        // Ajoute ici le code pour envoyer les informations (par exemple, via une API)
        alert('Votre message a été envoyé avec succès !');
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="contact-container">
            <h1 className="contact-title">Contactez-nous</h1>
            <div className="contact-info">
                <p>Nous serions ravis de recevoir vos messages et de répondre à vos questions !</p>
                <h2>Nos coordonnées</h2>
                <ul>
                    <li>Email : contact@cafthe.com</li>
                    <li>Téléphone : +33 1 23 45 67 89</li>
                    <li>Adresse : 123 Rue de l'Entreprise, Paris, France</li>
                </ul>
            </div>

            <h2>Envoyez-nous un message</h2>
            {/* Formulaire de contact */}
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="input-group">
                    <label htmlFor="name">Nom</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Entrez votre nom"
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Entrez votre email"
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Écrivez votre message ici"
                    />
                </div>
                {error && <p className="error-message">{error}</p>}
                <button type="submit" className="submit-btn">Envoyer</button>
            </form>
        </div>
    );
}

export default Contact;
