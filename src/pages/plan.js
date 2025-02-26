import { Link } from 'react-router-dom';
import '../styles/App.css';

function Plan() {
    return (
        <div className="plan-container">
            <h1 className="plan-title">Plan du site</h1>
            <div className="plan-links">
                <Link to="/" className="plan-link">Accueil</Link>
                <Link to="/produits" className="plan-link">Nos produits</Link>
                <Link to="/connaitre" className="plan-link">Nous Connaitre</Link>
                <Link to="/contact" className="plan-link">Nous Contacter</Link>
                <Link to="/inscriptions" className="plan-link">Inscription</Link>
                <Link to="/monpanier" className="plan-link">Mon panier</Link>
                <Link to="/mon-compte" className="plan-link">Mon Compte</Link>
                <Link to="/mentions-legales" className="plan-link">Mentions Légales</Link>
                <Link to="/rgpd" className="plan-link">RGPD</Link>
                <Link to="/conditions-ventes" className="plan-link">Conditions de Ventes</Link>
            </div>
        </div>
    );
}

export default Plan;
