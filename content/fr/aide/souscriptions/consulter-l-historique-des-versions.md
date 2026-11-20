---
title: "Consulter l'historique des versions d'une souscription"
module: "Souscriptions"
moduleSlug: souscriptions
order: 3
actors: ["Gérant"]
enBref: "Retrouve toutes les versions successives d'une souscription, avec ce qui a changé de l'une à l'autre et le contrat ou l'avenant qui les accompagne."
where: "Souscriptions › (le contributeur) › Historique"
status: review
needs: ["creer-une-souscription", "faire-un-avenant"]
glossary: ["avenant", "contrat", "date-de-fin", "date-de-prise-d-effet", "modele-d-avenant", "montant-ht", "souscription", "version"]
video: ""
videoStatus: none
---

## Avant de commencer

- Il te faut une souscription déjà créée : voir [Créer une souscription (inviter un contributeur)](/aide/souscriptions/creer-une-souscription).
- L'historique devient intéressant dès qu'il y a plusieurs versions, c'est-à-dire après un avenant : voir [Faire un avenant](/aide/souscriptions/faire-un-avenant).

## Étapes

### 1. Ouvre la souscription

Dans le menu, va dans **Souscriptions**, puis clique sur le nom du contributeur. La liste affiche une seule ligne par souscription, même quand elle a plusieurs versions. Le lien ouvre toujours la version la plus récente.
### 2. Repère le bloc Historique

En haut de la page, le bloc **Historique** liste toutes les versions de la souscription, de la plus ancienne à la plus récente. Chaque ligne indique la date de prise d'effet de la version, suivie de sa date de fin quand elle en a une. La version que tu consultes est en gras.

À droite de chaque ligne, un badge donne l'état du contrat ou de l'avenant de cette version : **Invitation envoyée**, **À signer par le contributeur**, **Documents à valider**, **Documents à mettre à jour**, **À signer par le signataire** ou **Signé le …** (avec la date de signature). Si la version n'a pas encore de contrat, un bouton **Créer le contrat** (première version) ou **Créer l'avenant** (versions suivantes) le remplace.

Le bloc n'apparaît pas pour un modèle de souscription sans contrat qui n'a qu'une seule version.
### 3. Survole une version pour voir ce qui a changé

Passe la souris sur une ligne : une fenêtre s'ouvre. Elle porte le titre **Avenant du …** (ou **Contrat du …** pour la première version), daté du jour de création du document, et non de sa signature. Un tableau compare, champ par champ, la valeur **Avant** et la valeur **Après** par rapport à la version précédente. Un champ vide s'affiche **Non renseigné**.

Ce tableau ne liste que les champs qui déclenchent un paragraphe du modèle d'avenant : voir [Configurer le modèle d'avenant (paragraphes conditionnels)](/aide/modeles-de-souscription/configurer-le-modele-d-avenant). Un changement qui ne déclenche aucun paragraphe n'y figure pas.

La fenêtre propose aussi :

- **Voir les détails** : ouvre la souscription telle qu'elle était à cette version (étape 5) ;
- **Voir l'avenant** (ou **Voir le contrat** pour la première version) : ouvre le document dans un nouvel onglet ;
- **Créer le contrat** ou **Créer l'avenant**, si cette version n'en a pas encore ;
- **Renvoyer l'invitation**, tant que le contributeur n'a pas ouvert son lien : voir [Relancer l'invitation à signer](/aide/contrats-et-signature/relancer-l-invitation-a-signer).
### 4. Compare avec la première version

La première version n'a rien à comparer : sa fenêtre ne montre pas de tableau, seulement **Voir les détails** et **Voir le contrat**.
### 5. Ouvre une ancienne version

Clique sur **Voir les détails** pour afficher la souscription avec les valeurs de cette version. Si une version plus récente existe, le formulaire est grisé et un encadré **Avenant existant** t'explique que tu ne peux plus la modifier. Seule la dernière version se modifie : voir [Modifier une souscription](/aide/souscriptions/modifier-une-souscription).
## Et ensuite ?

- La consultation ne change rien : aucun e-mail n'est envoyé et rien n'est modifié.
- Les boutons de l'historique mènent aux autres actions. Pour créer un document manquant, voir [Envoyer un contrat en signature](/aide/contrats-et-signature/envoyer-un-contrat-en-signature). Côté contributeur, voir [Signer un contrat (contributeur)](/aide/contrats-et-signature/signer-un-contrat) ; côté signataire, voir [Contresigner un contrat (signataire)](/aide/contrats-et-signature/contresigner-un-contrat).

## Bon à savoir

- Une nouvelle version n'est créée que lorsque tu modifies une souscription dont le contributeur a déjà signé le contrat. Avant cette signature, la modification s'applique directement à la version existante. Les contributions futures non facturées de l'ancienne version sont alors remplacées, celles que tu as créées à la main sont conservées.
- On ne peut ni supprimer ni modifier une ancienne version : l'historique est en lecture seule.
- Une version dont le contrat n'est pas encore signé garde un bouton **Annuler** sur sa ligne. Une fois le contrat signé, le bouton disparaît. Voir [Annuler une souscription](/aide/souscriptions/annuler-une-souscription).
- La fenêtre s'ouvre au survol de la souris. Elle ne s'ouvre pas sur un écran tactile.
- Pour un modèle de souscription sans contrat, aucune comparaison n'est affichée.
- Pour retrouver toutes les contributions de la souscription, voir [Consulter et filtrer les contributions](/aide/contributions/consulter-et-filtrer-les-contributions).

## Questions fréquentes

::accordion
:::accordion-item{label="Je ne vois pas le bloc Historique."}
Le modèle de souscription n'utilise pas de contrat et la souscription n'a qu'une seule version : il n'y a rien à afficher.
:::
:::accordion-item{label="Une version n'affiche aucun tableau de changements."}
C'est normal pour la première version. Pour les autres, aucun des champs modifiés ne déclenche de paragraphe dans le modèle d'avenant.
:::
:::accordion-item{label="Comment modifier une souscription qui a déjà plusieurs versions ?"}
Ouvre-la depuis la liste des souscriptions : tu arrives sur la dernière version, la seule modifiable. Voir [Faire un avenant](/aide/souscriptions/faire-un-avenant).
:::
::
