import React from 'react';
import './legalMention.scss';

const LegalMention = () => (
  <>
    <Header titlePage="Mentions légales" />
    <main className="main-legal-mention">
      <h2 className="legal-mention-title">Mentions légales et politique de confidentialité</h2>
      <p className="legal-mention-content">
        L'entreprise individuelle O'nurse, soucieuse des droits des individus, notamment au regard des traitements automatisés et dans une volonté de transparence avec les utilisateurs du site O'nurse, a mis en place une politique reprenant l'ensemble de ces traitements, des finalités poursuivies par ces derniers ainsi que des moyens d'actions à la disposition des individus afin qu'ils puissent au mieux exercer leurs droits. <br/>
        Pour toute information complémentaire sur la protection des données personnelles, nous vous invitons à consulter le site de la <a href="https://www.cnil.fr" className="cnil-link">CNIL</a>. <br/>
        La poursuite de la navigation sur ce site vaut acceptation sans réserve de dispositions et conditions d'utilisation qui suivent. La version actuellement en ligne de ces conditions d'utilisation est la seule opposable pendant toute la durée d'utilisation du site et jusqu'à ce qu'une nouvelle version la remplace.
      </p>
      <h3 className="legal-mention-item">Article 1 - Mentions légales</h3>
      <h4>1.1 Site :</h4>
      <p className="legal-mention-content">O'nurse</p>
      <h4>1.2 Editeur :</h4>
      <p className="legal-mention-content">
        L'entreprise individuelle : O'nurse <br/>
        située : 15 rue des pâquerettes, 91000 Evry <br/>
        immatriculée au RCS de Paris 123456789 <br/>
        n° de téléphone : 0102030405 <br/>
        adresse mail : o-nurse@apotheose.fr
      </p>
      <h4>1.3 Hébergeur :</h4>
      <p className="legal-mention-content">
        O'nurse est hébergé par AWS, dont le siège social est situé 31 Pl. des Corolles, 92400 Courbevoie.
      </p>
      <h4>1.4 Délégué à la protection des données (DPO) :</h4>
      <p className="legal-mention-content">
        Un délégué à la protection des données est à votre disposition pour toute question relative à la protection de vos données personnelles à l'adresse suivante : o-nurse@apotheose.fr.
      </p>
      <h3 className="legal-mention-item">Article 2 - Accès au site</h3>
      <p className="legal-mention-content">
        L'accès au site et son utilisation sont réservés à un usage strictement personnel. Vous vous engagez à ne pas utiliser ce site et les informations ou données qui y figurent à des fins commerciales, politiques, publicitaires et pour toute forme de sollicitation commerciale et notamment l'envoi de courriers électoniques non sollicités.
      </p>
      <h3 className="legal-mention-item">Article 3 - Contenu du site</h3>
      <p className="legal-mention-content">
        Toutes les marques, photographies, textes, commentaires, illustrations, images animées ou non, séquences vidéo, sons, ainsi que toutes les applications informatiques qui pouraient être utilisées pour faire fonctionner ce site et plus généralement tous les éléments reproduits ou utilisés sur le sites sont protégés par les lois en vigueur au titre de la propriété intellectuelle. Ils sont la propriété pleine et entière de l'éditeur ou de ses partenaires. Toute reproduction, représentation utilisation ou adaptation, sous quelque forme que ce soit, de tout ou partie de ces éléments, y compris les applications informatiques, sans l'accord préalable et écrit de l'éditeur, sont strictement interdites. Le fait pour l'éditeur de ne pas engager de procédure dès la prise de connaissance de ces utilisations non autorisées ne vuat pas acceptation desdites utilisations et renonciation aux poursuites.
      </p>
      <h3 className="legal-mention-item">Article 4 - Gestion du site</h3>
      <p className="legal-mention-content">
        Pour la bonne gestion du site, l'éditeur pourra à tout moment : 
        <ul>
          <li>
            suspendre, interrompre ou limiter l'accès à tout ou partie du site, réserver l'accès au site, ou à certaines parties du site, à une catégorie déterminée d'internautes;
          </li>
          <li>
            supprimer toute information pouvant perturber le fonctionnement ou entrant en contravention avec les lois nationales ou internationales;
          </li>
          <li>
            suspendre le site afin de procéder à des mises à jour.
          </li>
        </ul>
      </p>
      <h3 className="legal-mention-item">Article 5 - Responsabilités</h3>
      <p className="legal-mention-content">
        La responsabilité de l'éditeur ne peut être engagée en cas de défaillance, panne, difficulté ou interruption de fonctionnement, empêchant l'accès au site ou à une de ses fonctionnalités. <br/>
        Le matériel de connexion au site que vous utilisez est sous votre entière responsabilité. Vous devez prendre toutes les mesures appropriées pour protéger votre matériel et vos propres données notamment d'attaques virales par Internet. Vous êtes par ailleurs seul responsable des sites et données que vous consultez. <br/>
        L'éditeur ne pourra être tenu responsable en cas de poursuite judiciaires à votre encontre :
        <ul>
          <li>
            du fait de l'usage du site ou de tout service accessible via Internet;
          </li>
          <li>
            du fait du non-respect par vous des présentes conditions générales.
          </li>
        </ul>
        L'éditeur n'est pas responsable des dommages causés à vous-même, à des tiers et/ou à votre équipement de fait de votre connexion ou de votre utilisation du site et vous renoncez à toute action contre lui de ce fait. <br/>
        Si l'éditeur venait à faire l'objet d'une procédure amiable ou judiciaire en raison de votre utilisation du site, il pourra se retourner contre vous pour obtenir l'indemnisation de tous les préjudices, sommes, condamnations et frais qui pourraient découler de cette prodécure.
      </p>
      <h3 className="legal-mention-item">Article 6 - Liens hypertextes</h3>
      <p className="legal-mention-content">
        La mise en place par les utilisateurs de tous liens hypertextes vers tout ou partie du site est autorisées par l'éditeur. Tout lien devra être retiré sur simple demande de l'éditeur. <br/>
        Toute information accessible via un lien vers d'autres sites n'est pas publiée par l'éditeur. L'éditeur ne dispose d'aucun droit sur le contenu présent dans ledit lien.
      </p>
      <h3 className="legal-mention-item">Article 7 - Collecte et protection des données</h3>
      <p className="legal-mention-content">
        Vos données sont collectées par l'entreprise individuelle O'nurse. <br/>
        Une données à caractère personnel désigne toute information concernant une personne physique identifiée ou identifiable (personne concernée) ; est réputée identifiable une personne qui peut être identifée, directement ou indirectement, notamment par référence à un nom, un numéro d'identification ou à un ou plusieurs éléments spécifiques, propres à son identité physique, physiologique, génétique, psychique, économique, culturelle, ou sociale. <br/>
        Les informations personnelles pouvant être recueillies sur le site sont principalement utilisées par l'éditeur pour la gestion des relations avec vous.
        Les données personnelles collectées sont les suivants : 
        <ul>
          <li>
            nom et prénom
          </li>
          <li>
            adresse
          </li>
          <li>
            adresse mail
          </li>
          <li>
            numéro de téléphone
          </li>
          <li>
            date de naissance
          </li>
          <li>
            données médicales
          </li>
        </ul>
        Un délégué à la protection des données est à votre disposition pour toute question relative à la protection de vos données personnelles à l'adresse suivante : o-nurse@apotheose.fr.
      </p>
      <p className="legal-mention-content"></p>
      <p className="legal-mention-content"></p>


    </main>
  </>
);

export default LegalMention;
