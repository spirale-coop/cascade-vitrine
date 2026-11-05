---
title: "Choisir le moyen de paiement par défaut et le délai de prélèvement"
module: "Modèles de souscription"
moduleSlug: modeles-de-souscription
order: 1
actors: ["Gérant"]
enBref: "Choisis par quel moyen les contributeurs d'un modèle de souscription règlent leurs contributions (virement, prélèvement, carte, espèces ou chèque) et, pour un prélèvement, combien de jours avant la date de contribution il a lieu. Chaque souscription reprend ce réglage et peut le changer."
where: "Modèles de souscription › (le modèle) › Configuration générale › Moyen de paiement"
status: review
needs: ["creer-un-modele-de-souscription"]
glossary: ["compte-stripe", "contribution", "delai-avant-facturation", "delai-de-prelevement", "facture", "modele-de-souscription", "moyen-de-paiement-par-defaut", "paiement", "section-mode-d-envoi", "section-moyen-de-paiement", "souscription"]
video: ""
videoStatus: none
---

## Avant de commencer

- Il te faut un modèle de souscription, nouveau ou existant : voir [Créer un modèle de souscription](/aide/modeles-de-souscription/creer-un-modele-de-souscription) et [Modifier un modèle de souscription](/aide/modeles-de-souscription/modifier-un-modele-de-souscription).
- Pour proposer le **Prélèvement SEPA**, le modèle doit être en mode d'envoi **Facture** avec la facturation automatique réglée : voir [Configurer la facturation automatique](/aide/modeles-de-souscription/configurer-la-facturation-automatique).
- Le compte de paiement en ligne de l'organisation n'a pas besoin d'être prêt pour préparer le modèle, mais aucun prélèvement ne partira tant qu'il n'est pas opérationnel : voir [Connecter le compte Stripe de l'organisation](/aide/paiements/connecter-le-compte-stripe).

## Étapes

### 1. Ouvre le modèle de souscription

Dans le menu, va dans **Modèles de souscription**, puis clique sur **Créer un modèle**. Pour changer un modèle existant, clique sur son nom dans la liste. Le moyen de paiement se règle dans l'étape **Configuration générale**, dans la section **Moyen de paiement**, juste sous le mode d'envoi.

![La liste des modèles de souscription et le bouton Créer un modèle](/aide/choisir-le-moyen-de-paiement-par-defaut/moyen-paiement-prelevement-01-ouvrir.png)

### 2. Choisis le moyen de paiement par défaut

Dans **Moyen de paiement par défaut**, choisis le moyen avec lequel les contributeurs de ce modèle règlent leurs contributions : **Carte bancaire**, **Virement SEPA**, **Prélèvement SEPA**, **Espèces** ou **Chèque**. Un nouveau modèle démarre en **Virement SEPA**.

Ce choix n'est qu'un point de départ : chaque souscription reprend ce moyen et peut ensuite le changer (voir l'étape 5).

![Les cinq moyens de paiement proposés](/aide/choisir-le-moyen-de-paiement-par-defaut/moyen-paiement-prelevement-02-moyens.png)

### 3. Règle le délai de prélèvement

Avec **Prélèvement SEPA**, renseigne **Prélever … jours avant la date de contribution** : c'est le nombre de jours avant la date de la contribution auquel le prélèvement a lieu. Ce champ est obligatoire pour le prélèvement. Il apparaît quand le mode d'envoi est **Facture** ; avec un autre moyen de paiement, tu peux le laisser vide.

Le prélèvement a besoin de la facturation automatique (**Facturer automatiquement … jours avant la date de contribution**) : c'est la facture qui prévient le contributeur. Le *préavis* est le nombre de jours entre la facture et le prélèvement.

Exemple : facturation 20 jours avant la date de contribution et prélèvement 5 jours avant, soit un préavis de 15 jours.

![Le moyen Prélèvement SEPA et son délai de prélèvement](/aide/choisir-le-moyen-de-paiement-par-defaut/moyen-paiement-prelevement-03-prelevement.png)

Deux règles encadrent ce préavis :

- Il faut **au moins 2 jours** entre la facture et le prélèvement. En dessous, le modèle est refusé, avec un message qui donne le délai maximum possible.
- Entre 2 et 13 jours, le modèle est accepté mais un encadré t'avertit : **Vous devez mentionner ce préavis réduit dans vos contrats.** Le préavis est disponible comme donnée à insérer dans le contrat : **Préavis de prélèvement (jours)**.

![L'avertissement de préavis réduit (facture 10 jours avant, prélèvement 5 jours avant)](/aide/choisir-le-moyen-de-paiement-par-defaut/moyen-paiement-prelevement-04-preavis-reduit.png)

![Le refus d'un délai trop court, avec le délai maximum indiqué](/aide/choisir-le-moyen-de-paiement-par-defaut/moyen-paiement-prelevement-05-refus.png)

Si le compte de paiement en ligne de l'organisation ne peut pas encore encaisser, un encadré **Le compte Stripe de l'organisation ne peut pas encore encaisser** t'indique l'état du compte, avec le bouton **Configurer le compte Stripe**. Tu peux quand même enregistrer le modèle.

### 4. Enregistre le modèle

Termine le formulaire, puis clique sur **Créer le modèle de souscription** (en création) ou **Enregistrer les modifications** (en modification). Avec un mode d'adhésion **Contrat**, ce bouton se trouve à la dernière étape. Tu reviens à la liste des modèles.

![Le bouton Créer le modèle de souscription](/aide/choisir-le-moyen-de-paiement-par-defaut/moyen-paiement-prelevement-06-creer.png)

![Le nouveau modèle dans la liste des modèles de souscription](/aide/choisir-le-moyen-de-paiement-par-defaut/moyen-paiement-prelevement-07-liste.png)

### 5. Ajuste le moyen de paiement d'une souscription

Quand tu crées une souscription (menu **Souscriptions**), la section **Moyen de paiement** reprend celui du modèle : change-le si besoin pour cette souscription. Voir [Créer une souscription (inviter un contributeur)](/aide/souscriptions/creer-une-souscription). Le contributeur ne peut pas le modifier.

![Une souscription qui reprend le Prélèvement SEPA de son modèle](/aide/choisir-le-moyen-de-paiement-par-defaut/moyen-paiement-prelevement-08-souscription.png)

Le **Prélèvement SEPA** n'est accepté que si le modèle de la souscription a un délai de prélèvement. Sinon un message te renvoie vers le modèle.

![Le refus du prélèvement quand le modèle n'a pas de délai de prélèvement](/aide/choisir-le-moyen-de-paiement-par-defaut/moyen-paiement-prelevement-09-souscription-refus.png)

Pour changer le moyen d'une souscription existante, ouvre-la depuis **Souscriptions** et modifie la section **Moyen de paiement**. Si le contrat est déjà signé par le contributeur, le changement passe par un avenant : voir [Faire un avenant](/aide/souscriptions/faire-un-avenant).

## Et ensuite ?

- **Les souscriptions existantes ne bougent pas.** Changer le moyen par défaut d'un modèle ne modifie ni ses souscriptions, ni leurs contributions, ni leurs paiements déjà créés.
- **Contributions à venir** : celles qui sont créées ensuite reprennent le moyen de paiement de leur souscription. Voir [Générer automatiquement les contributions récurrentes](/aide/contributions/generer-automatiquement-les-contributions-recurrentes).
- **Paiement attendu** : pour une contribution positive, un paiement est attendu avec ce moyen. En **Prélèvement SEPA**, il est daté du jour de prélèvement, c'est-à-dire la date de la contribution moins le délai de prélèvement du modèle. Pour les autres moyens, il est daté de la date de la contribution.
- **Changer le délai de prélèvement du modèle** ne touche aucun paiement déjà créé ; le nouveau délai s'applique aux contributions créées ensuite, y compris pour les souscriptions déjà en cours.
- **Facture en retard** : si la facture part moins de 2 jours avant la date de prélèvement prévue (contribution créée peu avant son échéance, passage manqué), la date de prélèvement est repoussée à 2 jours après la facture. Voir [Ce que Cascade fait chaque jour](/aide/general/ce-que-cascade-fait-chaque-jour).
- **Pour l'instant, aucun prélèvement n'est exécuté** : Cascade prépare seulement la date de prélèvement. Le contributeur ne reçoit rien de plus que sa facture.
- **Contribution créée à la main** : le moyen de paiement proposé est celui de la souscription, et en prélèvement le formulaire annonce la date de prélèvement. Voir [Créer une contribution ou un avoir à la main](/aide/contributions/creer-une-contribution-ou-un-avoir).

## Bon à savoir

- Le prélèvement n'existe qu'avec la facturation automatique : sans elle, le délai de prélèvement est refusé.
- Tant qu'une souscription du modèle est en prélèvement, tu ne peux pas vider le délai de prélèvement du modèle ni retirer sa facturation automatique : change d'abord le moyen de paiement de ces souscriptions.
- Une souscription ponctuelle ne peut plus être modifiée une fois créée : son moyen de paiement est donc celui choisi à la création.
- Avec un contrat signé, le changement de moyen de paiement d'une souscription crée un avenant comme tout autre changement.
- L'import en masse n'a pas de colonne pour le moyen de paiement : les souscriptions importées prennent celui du modèle. Voir [Inviter plusieurs contributeurs en masse](/aide/souscriptions/inviter-plusieurs-contributeurs-en-masse).
- Quand tu modifies un réglage du modèle (par exemple le mode d'envoi), les champs qui n'ont plus lieu d'être sont remis à zéro ; le moyen de paiement, lui, est conservé.

## Questions fréquentes

::accordion
:::accordion-item{label="Je ne vois pas le champ « Prélever … jours avant la date de contribution »."}
Il n'apparaît que si le mode d'envoi du modèle est **Facture**.
:::
:::accordion-item{label="Le modèle est refusé alors que j'ai renseigné un délai de prélèvement."}
Vérifie la facturation automatique et l'écart avec le délai de prélèvement : il faut au moins 2 jours entre la facture et le prélèvement. Avec une facturation 10 jours avant la date de contribution, le prélèvement doit avoir lieu au plus 8 jours avant.
:::
:::accordion-item{label="J'ai changé le moyen de paiement du modèle, mais mes souscriptions n'ont pas changé."}
C'est normal : le moyen du modèle ne sert que de point de départ pour les nouvelles souscriptions. Modifie chaque souscription concernée.
:::
::
