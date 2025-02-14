import React from 'react';

function Competences() {
    return (
        <section id="competences">
            <h2>Compétences</h2>
            <div className="skills">
                <div className="skill">
                    <h3 className="bold">HTML 5</h3>
                    <img src="/img/html5.png" alt="HTML5 Icon" className="skill-image" />
                    <p>Maîtrise complète de la structuration des pages web.</p>
                </div>
                <div className="skill">
                    <h3 className="bold">CSS</h3>
                    <img src="/img/css-3.png" alt="CSS Icon" className="skill-image" />
                    <p>Création de designs modernes et responsives.</p>
                </div>
                <div className="skill">
                    <h3 className="bold">Wordpress</h3>
                    <img src="/img/wordpress.png" alt="Wordpress Icon" className="skill-image" />
                    <p>Utilisation de Wordpress pour des sites dynamiques.</p>
                </div>
                <div className="skill">
                    <h3 className="bold">MySQL</h3>
                    <img src="/img/mysql.png" alt="MySQL Icon" className="skill-image" />
                    <p>Gestion des bases de données avec MySQL.</p>
                </div>
                <div className="skill">
                    <h3 className="bold">PHP</h3>
                    <img src="/img/php.png" alt="PHP Icon" className="skill-image" />
                    <p>Développement de sites dynamiques avec PHP.</p>
                </div>
                <div className="skill">
                    <h3 className="bold">Figma</h3>
                    <img src="/img/figma.png" alt="Figma Icon" className="skill-image" />
                    <p>Création de wireframes et de prototypes visuels.</p>
                </div>
                <div className="skill">
                    <h3 className="bold">Résolution de problèmes</h3>
                    <img src="/img/resolution-de-probleme.png" alt="Résolution de problèmes" className="skill-image" />
                    <p>Analyser des situations complexes et de proposer des solutions</p>
                </div>
                <div className="skill">
                    <h3 className="bold">Travail de groupe</h3>
                    <img src="/img/groupe.png" alt="Travail de groupe Icon" className="skill-image" />
                    <p>Capaciter à collaborer efficacement en équipe.</p>
                </div>
            </div>
        </section>
    );
}

export default Competences;