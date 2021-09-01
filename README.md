# projet-o-nurse-front

## Installation

A la premiere installation (suite au clonage du repo) il faut utiliser la commande:
yarn

cette commande sert à installer toute les dépendances du projet.

## Environnement de dev

pour ouvrir le projet sur un environnement de dev utiliser la commande:
yarn start ou yarn start --open

les deux commandes sont identiques à la différence que la deuxieme ouvrira directement un onglet chrome.

## Environnement Prod

pour ouvrir le projet sur un environnement de Prod utiliser la commande:
yarn build

Cette commande embarque les "dependancies" pour le projet et n'embarque pas les "devDependancies" 
Du package.json.
Elle prépare un dossier dist (pour distribute) tout ce qu'il faut pour envoyer ça sur un serveur de prod
Compresse le CSS.

## Mise en Prod

installer Surge (si surge n'est pas déjà sur la machine)
npm install --global surge

Etape 1:
avoir ouvert le projet en environnement de prod

Etape 2:
faire la commande:
surge dist

La premiere fois il demande des id/mdp

Etape 3:
Faire "entrée"

Annuler une prod
surge teardown nom-de-domaine
