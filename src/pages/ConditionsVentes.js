import React from 'react';
import '../styles/CondiVente.css';

function ConditionsVentes() {
    return (
        <section id="conditions-ventes">
            <div className="conditions-contenu">
                <h2>Conditions Générales de Vente</h2>

                <p>Les présentes Conditions Générales de Vente (CGV) régissent les ventes de produits proposés sur le site de CafThé. En passant commande, vous acceptez les termes suivants.</p>

                <h3>1. Objet</h3>
                <p>
                    Les présentes conditions ont pour objet de définir les modalités de vente entre CafThé et l'acheteur, de la commande à la livraison, en passant par le paiement.
                </p>

                <h3>2. Commandes</h3>
                <p>
                    Toute commande passée sur le site CafThé implique l'acceptation de ces conditions générales. L'acheteur devra fournir des informations exactes et complètes lors de la commande.
                </p>

                <h3>3. Prix et Paiement</h3>
                <p>
                    Les prix des produits sont indiqués en euros toutes taxes comprises (TTC). Le paiement est exigible immédiatement à la commande par carte bancaire ou via tout autre moyen de paiement proposé sur le site.
                </p>

                <h3>4. Livraison</h3>
                <p>
                    Nous nous engageons à expédier les produits dans un délai de [X] jours ouvrés après réception de la commande, sous réserve de disponibilité des produits. Les frais de livraison seront ajoutés au montant total de la commande.
                </p>

                <h3>5. Droit de rétractation</h3>
                <p>
                    Conformément à la loi, l'acheteur dispose d'un délai de 14 jours à compter de la réception de sa commande pour exercer son droit de rétractation, sous réserve que le produit soit retourné dans son état d'origine.
                </p>

                <h3>6. Garanties</h3>
                <p>
                    Tous les produits bénéficient de la garantie légale de conformité et de la garantie contre les vices cachés, conformément aux dispositions du Code de la consommation.
                </p>

                <h3>7. Responsabilité</h3>
                <p>
                    CafThé ne saurait être tenue responsable des dommages résultant d'une mauvaise utilisation des produits ou de l'usage des informations présentes sur le site.
                </p>

                <h3>8. Modification des CGV</h3>
                <p>
                    CafThé se réserve le droit de modifier à tout moment ces conditions générales de vente. Les modifications seront publiées sur cette page et entreront en vigueur dès leur mise en ligne.
                </p>

                <h3>9. Contact</h3>
                <p>
                    Pour toute question concernant les présentes conditions générales de vente, vous pouvez nous contacter à l'adresse suivante : [exemple@mail.com].
                </p>
            </div>
        </section>
    );
}

export default ConditionsVentes;
