import React from 'react';
import Header from 'src/containers/Page/Header';
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
      <div className="legal-mention-content">
        <p >
          Pour la bonne gestion du site, l'éditeur pourra à tout moment : 
        </p>
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
      </div>
      <h3 className="legal-mention-item">Article 5 - Responsabilités</h3>
      <div className="legal-mention-content">
        <p>
          La responsabilité de l'éditeur ne peut être engagée en cas de défaillance, panne, difficulté ou interruption de fonctionnement, empêchant l'accès au site ou à une de ses fonctionnalités. <br/>
          Le matériel de connexion au site que vous utilisez est sous votre entière responsabilité. Vous devez prendre toutes les mesures appropriées pour protéger votre matériel et vos propres données notamment d'attaques virales par Internet. Vous êtes par ailleurs seul responsable des sites et données que vous consultez. <br/>
          L'éditeur ne pourra être tenu responsable en cas de poursuite judiciaires à votre encontre :
          </p>
          <ul>
            <li>
              du fait de l'usage du site ou de tout service accessible via Internet;
            </li>
            <li>
              du fait du non-respect par vous des présentes conditions générales.
            </li>
          </ul>
          <p>
          L'éditeur n'est pas responsable des dommages causés à vous-même, à des tiers et/ou à votre équipement de fait de votre connexion ou de votre utilisation du site et vous renoncez à toute action contre lui de ce fait. <br/>
          Si l'éditeur venait à faire l'objet d'une procédure amiable ou judiciaire en raison de votre utilisation du site, il pourra se retourner contre vous pour obtenir l'indemnisation de tous les préjudices, sommes, condamnations et frais qui pourraient découler de cette prodécure.
        </p>
      </div>
      <h3 className="legal-mention-item">Article 6 - Liens hypertextes</h3>
      <p className="legal-mention-content">
        La mise en place par les utilisateurs de tous liens hypertextes vers tout ou partie du site est autorisées par l'éditeur. Tout lien devra être retiré sur simple demande de l'éditeur. <br/>
        Toute information accessible via un lien vers d'autres sites n'est pas publiée par l'éditeur. L'éditeur ne dispose d'aucun droit sur le contenu présent dans ledit lien.
      </p>
      <h3 className="legal-mention-item">Article 7 - Collecte et protection des données</h3>
      <div className="legal-mention-content">
        <p>
          Vos données sont collectées par l'entreprise individuelle O'nurse. <br/>
          Une données à caractère personnel désigne toute information concernant une personne physique identifiée ou identifiable (personne concernée) ; est réputée identifiable une personne qui peut être identifée, directement ou indirectement, notamment par référence à un nom, un numéro d'identification ou à un ou plusieurs éléments spécifiques, propres à son identité physique, physiologique, génétique, psychique, économique, culturelle, ou sociale. <br/>
          Les informations personnelles pouvant être recueillies sur le site sont principalement utilisées par l'éditeur pour la gestion des relations avec vous.
          Les données personnelles collectées sont les suivants : 
          </p>
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
          <p>
          Un délégué à la protection des données est à votre disposition pour toute question relative à la protection de vos données personnelles à l'adresse suivante : o-nurse@apotheose.fr.
        </p>
      </div>
      <h3 className="legal-mention-item">Article 8 - Droit d'accès, de rectification et de déréférencement de vos données</h3>
      <div className="legal-mention-content">
        <p>
          En application de la réglementation applicable aux données à caractère personnel, les utilisateurs disposent des droits suivants:
        </p>
        <ul>
          <li>
            le droit d'accès: ils peuvent exercer leur droit d'accès, pour connaître les données personnelles les concernant, en écrivant à l'adresse électronique ci-dessous mentionnée. Dans ce cas, avant la mise en oeuvre de ce droit, la plateforme peut demander une preuve de l'identité de l'utilisateur afin d'en vérifier l'exactitude ;
          </li>
          <li>
            le droit de rectification: si les données à caractère personnel détenues par la plateforme sont inexactes, ils peuvent demander la mise à jour des informations ;
          </li>
          <li>
            le droit de suppression des données: les utilisateurs peuvent demander la suppression de leurs données à caractère personnel, conformément aux lois applicables en matère de protection des données ;
          </li>
          <li>
            le droit à la limitation du traitement : les utilisateurs peuvent demander à la plateforme de limiter le traitement des données personnelles conformément aux hypothèses prévues par le RGPD ; 
          </li>
          <li>
            le droit à s'opposer au traitement des données: les utilisateurs peuvent s'opposer à ce que leur données soient traitées conformément aux hypothèses prévues par le RGPD ; 
          </li>
          <li>
            le droit à la portabilité: ils peuvent réclamer que la plateforme leur remette les données personneles qu'ils ont fournies pour les transmettre à une nouvelle plateforme.
          </li>
        </ul>
        <p>
          Vous pouvez éxercer ces droits en nous contactant à l'adresse suivant : o-nurse@apotheose.fr. <br/>
          Toute demande doit être accompagnée de la photocopie d'un titre d'identité en cours de validité et signé et faire mention de l'adresse à laquelle l'éditeur pourra contacter le demander. La reponse sera adressée dans le mois suivant la réception de la demande. Ce délai d'un mois peut être prolongé de deux mois si la complexité de la demande et/ou le nombre de demandes l'exigent. <br/>
          Les utilisateurs peuvent aussi faire une réclamation après de la CNIL directement sur le site de la CNIL. <br/>
        </p>
      </div>
      <h3 className="legal-mention-item">Article 9 - Utilisation des données</h3>
      <div className="legal-mention-content">
        <p >
          Les données personnelles collectées auprès des utilisateur ont pour objectif la mise à disposition des services de la plateforme, leur amélioration et le maintien d'un environnement sécurisé. La base légale des traitements est l'éxecution du contrat entre l'utilisateur et la plateforme. Plus précisément, les utilisations sont les suivantes : 
        </p>
        <ul>
          <li>
            accès et utilisation de la plateforme par l'utilisateur ;
          </li>
          <li>
            gestion du fonctionnement et optimisation de la plateforme ;
          </li>
          <li>
            mise en oeuvre d'une assistance utilisateurs ;
          </li>
          <li>
            vérification, identification et authentification des données transmises par l'utilisateur ;
          </li>
          <li>
            prévention et détection des fraudes, gestion des incidents de sécurité ;
          </li>
        </ul>
      </div>
      <h3 className="legal-mention-item">Article 10 - Politique de conservation des données</h3>
      <p className="legal-mention-content">
        La plateforme conserve vos données pour la durée nécesaire pour vous fournir ses service ou son assistance. Dans la mesure raisonnablement nécessaire ou requise pour satisfaire aux obligations légales ou réglementaires, régler des litiges, empêcher les fraudes et abus ou appliquer nos modalités et conditions, nous pouvons également conserver certaines de vos informations si nécesaire, même après que vous ayez fermé votre compte ou que nous n'ayons plus besoin pour vous fournir nos services.
      </p>
      <h3 className="legal-mention-item">Article 11 - Partage des données personnelles avec des tiers</h3>
      <p className="legal-mention-content">
        Les données personnelles peuvent être partagées si la loi l'exige, pour donner suite aux réclamations présentées contre la plateforme et se conformer aux procédures administratives et judiciaires.
      </p>
      <h3 className="legal-mention-item">Article 12 - Cookies</h3>
      <p className="legal-mention-content">
        Un "cookie" est un fichier électonique déposé sur un terminal (ordinateur, tablette, smartphone, ...) et lu par exemple lors de la consultation d'un site internet, de la lecture d'un courrier électonique, de l'installation ou de l'utilisation d'un logiciel ou d'une application mobile et ce, quel que soit le type de terminal utilisé. <br/>
        Le site peut collecté automatiquement des informations standards. Toutes les informations collectées indirectement ne seront utilisées que pour suivre le volume, le type et la configuration du trafic utilisant ce site, pour en développer la conception et l'agencement et à d'autres fins administratives et de planification et plus généralement pour améliorer le service que nous vous offrons. <br/>
        Le cas échéant, des "cookies" émanant de l'éditeur du site et/ou des sociétés tiers pourront être déposés sur votre terminal, avec votre accord. Dans ce cas, lors de la première navigation sur ce site, une bannière explicative sur l'utilisation des "cookies" apparaîtra. Avant de poursuivre la navigation, l'utilisateur devra accepter ou refuser l'utilisation desdits "cookies". Le consentement donné sera valable pour une période de treize mois. L'utilisateur a la possibilité de désactiver les cookies à tout moment.
      </p>
      <h3 className="legal-mention-item">Article 13 - Loi applicable</h3>
      <p className="legal-mention-content">
        Les présentes conditions d'utilisation du site sont régies par la loi française et soumises à la compétence des tribunaux du siège social de l'éditeur, sous réserve d'une attribution de compétence spécifique découlant d'un texte de loi ou réglementaire particulier.
      </p>
      <h3 className="legal-mention-item">Article 14 - Contactez-nous</h3>
      <p className="legal-mention-content">
        Pour toute question vous pouvez laissez un message à l'adresse suivante : o-nurse@apotheose.fr.
      </p>
    </main>
  </>
);

export default LegalMention;
