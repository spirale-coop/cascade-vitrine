---
title: "Consulter la liste des modèles de souscription"
module: "Modèles de souscription"
moduleSlug: modeles-de-souscription
order: 4
actors: ["Gérant"]
enBref: "Retrouve tous les modèles de souscription de la cascade courante dans un tableau (récurrence, contribution, mode d'envoi, mode d'adhésion), pour en ouvrir un ou en créer un nouveau."
where: "Modèles de souscription"
status: review
needs: []
glossary: ["adhesion-simple", "contrat", "facture", "modele-de-souscription", "montant-fixe-par-le-gerant", "permanente", "ponctuel", "recurrent", "souscription"]
video: ""
videoStatus: none
---

## Avant de commencer

- Aucun prérequis : la liste est toujours accessible depuis le menu. Elle ne montre que les modèles de la cascade courante ; pour voir ceux d'une autre cascade, change d'abord de cascade : voir [Changer de cascade courante](/aide/acces-et-compte/changer-de-cascade-courante).
- Tant que la cascade n'a aucun modèle, la liste est vide (voir l'étape 5).

## Étapes

### 1. Ouvre la liste

Dans le menu, clique sur **Modèles de souscription**. La page s'ouvre avec le même titre, le bouton **Créer un modèle** en haut à droite et le tableau des modèles.
### 2. Lis le tableau

Chaque ligne est un modèle de souscription, avec cinq colonnes :

- **Nom** : le nom du modèle.
- **Récurrence** : **Récurrent**, **Ponctuel** ou **Permanent (sans échéance)**.
- **Contribution** : comment le montant est fixé. Seul **Fixé par le gérant** est disponible pour l'instant ; **Fixé par le contributeur (à venir)** et **Adaptative (à venir)** sont annoncés.
- **Mode d'envoi** : **Facture** ou **Email (à venir)**.
- **Mode d'adhésion** : **Contrat** (le contributeur signe un contrat) ou **Adhésion simple** (il rejoint sans contrat).

Les modèles sont classés par nom, de A à Z. Les autres réglages d'un modèle (taux de TVA, moyen de paiement par défaut, délais, texte du contrat…) ne sont pas dans le tableau : ils se lisent en ouvrant le modèle.
### 3. Retrouve un modèle

Tape quelques lettres dans le champ **Rechercher…** : le tableau ne garde que les modèles dont le nom contient ce texte. La recherche ne porte que sur le nom, pas sur les autres colonnes. Efface le champ pour revoir tous les modèles.

Si aucun nom ne correspond, le tableau affiche **Aucun modèle de souscription**, comme pour une cascade qui n'en a pas encore.

Un clic sur l'en-tête **Nom** inverse l'ordre (de Z à A) ; c'est la seule colonne qui se trie. Le sélecteur en bas à gauche choisit le nombre de lignes par page (**100 par page** au départ), les flèches en bas à droite changent de page.
### 4. Ouvre un modèle ou crée-en un

- Pour modifier un modèle, clique n'importe où sur sa ligne : il n'y a pas de bouton « Modifier ». Voir [Modifier un modèle de souscription](/aide/modeles-de-souscription/modifier-un-modele-de-souscription).
- Pour en ajouter un, clique sur **Créer un modèle** en haut à droite. Voir [Créer un modèle de souscription](/aide/modeles-de-souscription/creer-un-modele-de-souscription).
### 5. Pars d'une liste vide

Dans une cascade sans modèle, le tableau est remplacé par le message **Aucun modèle de souscription** et un second bouton, **Créer un modèle de souscription**, qui mène au même formulaire que **Créer un modèle**. Il te faut au moins un modèle avant d'inviter un contributeur : voir [Créer une souscription (inviter un contributeur)](/aide/souscriptions/creer-une-souscription).
## Et ensuite ?

Consulter la liste ne change rien et n'envoie rien à personne. Une fois un modèle choisi, tu passes soit à sa modification, soit à la création d'une souscription qui l'utilise (voir [Consulter et filtrer les souscriptions](/aide/souscriptions/consulter-et-filtrer-les-souscriptions) pour retrouver celles qui existent déjà).

## Bon à savoir

- Seuls les modèles de la cascade courante apparaissent.
- Les modèles ne peuvent pas être supprimés ni dupliqués pour l'instant : la liste ne propose que l'ouverture et la création.
- La liste n'indique pas combien de souscriptions utilisent chaque modèle.
- Il n'y a pas de filtre, seulement la recherche par nom et le tri sur le nom.
- Les options marquées **(à venir)** s'affichent dans la liste pour d'éventuels modèles qui les porteraient, mais elles ne sont pas encore proposées à la création : voir [Créer un modèle de souscription](/aide/modeles-de-souscription/creer-un-modele-de-souscription).

## Questions fréquentes

::accordion
:::accordion-item{label="Je ne trouve pas mon modèle dans la liste."}
Vérifie la cascade courante (en haut du menu) : un modèle n'existe que dans la cascade où il a été créé. Vérifie aussi que le champ **Rechercher…** est vide.
:::
:::accordion-item{label="Comment voir le moyen de paiement ou le taux de TVA d'un modèle ?"}
Ils ne figurent pas dans le tableau. Clique sur la ligne du modèle pour ouvrir son formulaire, où tous les réglages sont préremplis.
:::
:::accordion-item{label="Comment supprimer un modèle que je n'utilise plus ?"}
Ce n'est pas possible pour l'instant. Tu peux le renommer ou le modifier : voir [Modifier un modèle de souscription](/aide/modeles-de-souscription/modifier-un-modele-de-souscription).
:::
::
