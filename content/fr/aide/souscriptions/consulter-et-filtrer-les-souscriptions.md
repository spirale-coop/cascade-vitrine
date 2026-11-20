---
title: "Consulter et filtrer les souscriptions"
module: "Souscriptions"
moduleSlug: souscriptions
order: 2
actors: ["Gérant"]
enBref: "Retrouve les souscriptions de ta cascade dans une seule liste : recherche un contributeur ou un modèle, trie les colonnes, lis le statut et le montant, et ouvre une souscription ou ses contributions."
where: "Souscriptions"
status: review
needs: ["creer-une-souscription"]
glossary: ["avenant", "contrat", "contributeur", "contribution", "date-de-fin", "date-de-prise-d-effet", "modele-de-souscription", "signataire", "souscription", "version"]
video: ""
videoStatus: none
---

## Avant de commencer

- Il te faut au moins une souscription dans la cascade courante. Voir [Créer une souscription (inviter un contributeur)](/aide/souscriptions/creer-une-souscription).
- La liste ne montre que les souscriptions de la cascade courante. Pour consulter une autre cascade, change d'abord de cascade : voir [Changer de cascade courante](/aide/acces-et-compte/changer-de-cascade-courante).

## Étapes

### 1. Ouvre la liste

Dans le menu, clique sur **Souscriptions**. La liste affiche une ligne par souscription : le contributeur, le modèle de souscription, la date de première prise d'effet, la date de fin, le statut et le montant. Si une souscription a plusieurs versions, elle n'occupe quand même qu'une seule ligne, et c'est sa version la plus récente qui est résumée.

Une petite icône de document, sans titre de colonne, indique les souscriptions avec contrat : survole-la pour lire **Avec contrat**, ou **Avec contrat et avenants** quand la souscription a déjà plusieurs versions.
### 2. Retrouve une souscription avec la recherche

Tape quelques lettres dans le champ **Rechercher…**. La liste se met à jour toute seule, sans valider, et ne garde que les souscriptions dont le nom du contributeur ou le nom du modèle de souscription contient ce texte (les majuscules et les minuscules n'ont pas d'importance). Efface le champ pour revoir toute la liste.
### 3. Trie les colonnes

Clique sur l'en-tête d'une colonne pour trier la liste : **Contributeur**, **Modèle de souscription**, **Date de première prise d'effet**, **Date de fin** ou **Statut**. Un premier clic trie dans l'ordre croissant, un deuxième dans l'ordre décroissant ; l'icône de l'en-tête indique le sens du tri en cours. Le tri par statut suit l'ordre de la vie d'une souscription : **À venir**, puis **Actif**, puis **Terminé**.

Les colonnes **Montant** et celle de l'icône de contrat ne se trient pas.
### 4. Lis le statut, la date de fin et le montant

Sur un écran étroit, fais défiler le tableau vers la droite pour voir les dernières colonnes.

- **Date de fin** : un tiret signifie que la souscription n'a pas de fin prévue.
- **Statut** : **À venir** tant que la première date de prise d'effet n'est pas arrivée, **Terminé** dès que la date de fin de la version la plus récente est atteinte (le jour même compris), **Actif** sinon.
- **Montant** : le montant TTC de la version la plus récente, calculé avec le taux de TVA du modèle de souscription. C'est le montant d'une contribution, qu'elle soit ponctuelle ou générée à chaque échéance.
### 5. Va plus loin depuis une ligne

- Clique n'importe où sur une ligne (ou sur le nom du contributeur) pour ouvrir la souscription, dans sa version la plus récente : voir [Modifier une souscription](/aide/souscriptions/modifier-une-souscription) et [Consulter l'historique des versions d'une souscription](/aide/souscriptions/consulter-l-historique-des-versions).
- Quand le contrat de la souscription est signé, un lien **Contributions** apparaît en bout de ligne. Il s'ouvre dans un nouvel onglet sur toutes les contributions de cette souscription, sans limite de période : voir [Consulter et filtrer les contributions](/aide/contributions/consulter-et-filtrer-les-contributions).
- Quand le contrat attend la signature et que tu fais partie des signataires du modèle, un bouton **Signer** apparaît à la place, et ouvre la page de signature dans un nouvel onglet : voir [Contresigner un contrat (signataire)](/aide/contrats-et-signature/contresigner-un-contrat).
### 6. Parcours les pages

En bas de la liste, choisis le nombre de souscriptions affichées par page (50, 100, 200 ou 500 ; 100 par défaut) et passe d'une page à l'autre avec la pagination. La recherche et le tri restent appliqués quand tu changes de page.
## Et ensuite ?

- Au-dessus de la liste, **Créer une souscription** ouvre le formulaire d'invitation d'un contributeur, et **Inviter plusieurs contributeurs** permet d'en inviter plusieurs d'un coup : voir [Créer une souscription (inviter un contributeur)](/aide/souscriptions/creer-une-souscription) et [Inviter plusieurs contributeurs en masse](/aide/souscriptions/inviter-plusieurs-contributeurs-en-masse).
- Après une invitation en masse, tu reviens sur cette liste, qui se rafraîchit toute seule pendant une minute environ pour y faire apparaître les nouvelles souscriptions au fur et à mesure de leur création.
- Quand des documents justificatifs attendent ta validation, une entrée **Documents à valider** avec le nombre de documents apparaît sous **Souscriptions** dans le menu : voir [Valider ou rejeter des documents justificatifs](/aide/documents-justificatifs/valider-ou-rejeter-des-documents-justificatifs).

## Bon à savoir

- La liste n'a pas de filtre : tu disposes de la recherche et du tri. Il n'est pas possible, par exemple, de n'afficher que les souscriptions actives.
- La recherche porte uniquement sur le nom du contributeur et sur le nom du modèle de souscription, pas sur les dates, le statut ou le montant.
- La recherche, le tri et la page affichée figurent dans l'adresse de la page : tu peux la copier pour retrouver ou partager la même vue.
- Le statut ne dépend que des dates. Une souscription dont le contrat n'est pas encore signé est **Actif** dès que sa date de prise d'effet est arrivée ; l'avancement du contrat se suit dans la souscription elle-même (voir [Envoyer un contrat en signature](/aide/contrats-et-signature/envoyer-un-contrat-en-signature)).
- Une souscription terminée reste dans la liste, avec le statut **Terminé**. Une souscription annulée, elle, est supprimée et disparaît de la liste : voir [Annuler une souscription](/aide/souscriptions/annuler-une-souscription).
- Le lien **Contributions** n'apparaît que pour les souscriptions dont le contrat est signé ; il n'y en a donc pas pour les souscriptions sans contrat.
- Le montant affiché ne tient pas compte des versions précédentes : seule la version la plus récente compte. Voir [Faire un avenant](/aide/souscriptions/faire-un-avenant) pour changer le montant d'une souscription signée.

## Questions fréquentes

::accordion
:::accordion-item{label="Je ne trouve pas une souscription que je viens de créer."}
Vérifie que tu es dans la bonne cascade, puis efface le champ de recherche. Après une invitation en masse, patiente quelques secondes : les souscriptions arrivent au fur et à mesure.
:::
:::accordion-item{label="Comment ne voir que les souscriptions en cours ?"}
Pour l'instant, la liste ne se filtre pas par statut : clique sur l'en-tête **Statut** pour regrouper les souscriptions **Actif**, ou celles à venir et terminées.
:::
:::accordion-item{label="Pourquoi le montant n'est pas celui de mon contrat d'origine ?"}
La colonne **Montant** affiche le montant TTC de la version la plus récente de la souscription. Si un avenant a changé le montant, c'est le nouveau qui apparaît.
:::
::
