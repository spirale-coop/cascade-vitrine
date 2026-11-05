---
title: "Créer un modèle de souscription"
module: "Modèles de souscription"
moduleSlug: modeles-de-souscription
order: 4
actors: ["Gérant"]
enBref: "Un modèle de souscription regroupe les réglages communs à plusieurs souscriptions : récurrence, mode d'envoi, moyen de paiement, reçu et, si besoin, contrat et avenants. Le formulaire tient en une étape en Adhésion simple, en trois avec un contrat."
where: "Modèles de souscription › Créer un modèle"
status: review
needs: []
glossary: ["modele-de-souscription", "section-informations-generales", "section-mode-d-adhesion", "section-mode-d-envoi", "section-montant-de-contribution", "section-moyen-de-paiement", "section-recu-de-contribution", "section-recurrence"]
video: ""
videoStatus: none
---

## Avant de commencer

- Si tu veux proposer le paiement par **Prélèvement SEPA**, le compte de paiement en ligne de l'organisation doit être connecté et opérationnel (voir [Connecter le compte Stripe de l'organisation](/aide/paiements/connecter-le-compte-stripe)). Sinon un avertissement s'affiche dans le formulaire.
- Si tu veux que les contributeurs signent un contrat, prépare le texte du contrat : tu le rédiges dans le formulaire, avec des données qui se remplissent toutes seules.
- Rien n'est enregistré tant que tu n'as pas cliqué sur le bouton de création à la dernière étape. Tu peux revenir en arrière avec **Précédent** sans rien perdre.

## Étapes

### 1. Ouvre le formulaire de création

Dans le menu, va dans **Modèles de souscription**, puis clique sur **Créer un modèle**. Le formulaire s'ouvre sur l'étape **Configuration générale**.

![La liste des modèles de souscription et le bouton Créer un modèle](/aide/creer-un-modele-de-souscription/creer-modele-souscription-01-ouvrir.png)

### 2. Renseigne les informations générales

Donne un **Nom** au modèle, celui que tu retrouveras dans les listes et à la création d'une souscription. Choisis le **Taux de TVA** applicable (par exemple 20 %).

![Les informations générales du modèle](/aide/creer-un-modele-de-souscription/creer-modele-souscription-02-informations.png)

### 3. Choisis la récurrence

Dans la section de récurrence, trois choix :

- **Récurrent** : la contribution revient à intervalles réguliers. Choisis alors le cycle (**Mois** pour l'instant, les autres cycles ne sont pas encore disponibles) et, si tu veux, une date de fin par défaut des souscriptions.
- **Ponctuel** : une seule contribution, à la date de début de la souscription.
- **Permanent** : une seule contribution à la date de début, sans fin prévue.

Pour **Ponctuel** et **Permanent**, aucun champ supplémentaire n'apparaît.

![Le choix Récurrent avec son cycle et sa date de fin par défaut](/aide/creer-un-modele-de-souscription/creer-modele-souscription-03a-recurrent.png)

![Le choix Ponctuel : aucun champ en plus](/aide/creer-un-modele-de-souscription/creer-modele-souscription-03b-ponctuel.png)

### 4. Vérifie le montant de contribution

Pour l'instant, une seule option existe : le montant est **fixé par le gérant**, c'est-à-dire que tu le saisis toi-même à la création de chaque souscription. Rien à régler ici.

![Le montant fixé par le gérant](/aide/creer-un-modele-de-souscription/creer-modele-souscription-04-montant.png)

### 5. Règle le mode d'envoi

Avec **Facture**, tu renseignes une **Désignation** (le libellé qui apparaîtra sur la facture), le **Type d'opération**, le **Délai de paiement** et le nombre de jours avant la date de la contribution à partir duquel la facture est créée automatiquement. L'option **Email** est annoncée « à venir » et ne peut pas être choisie.

![Les réglages du mode d'envoi Facture](/aide/creer-un-modele-de-souscription/creer-modele-souscription-05-mode-envoi.png)

### 6. Choisis le moyen de paiement par défaut

Cinq moyens sont proposés : **Carte bancaire**, **Virement SEPA**, **Prélèvement SEPA**, **Espèces** et **Chèque**. Avec **Prélèvement SEPA**, un champ de délai de prélèvement apparaît : il faut au moins 2 jours entre la facture et le prélèvement, la facturation automatique doit être active, et un avertissement te prévient quand le préavis est réduit (entre 2 et 13 jours). Un autre avertissement s'affiche si le compte de paiement en ligne n'est pas opérationnel. Voir [Choisir le moyen de paiement par défaut et le délai de prélèvement](/aide/modeles-de-souscription/choisir-le-moyen-de-paiement-par-defaut).

![Le moyen de paiement Prélèvement SEPA et son délai de prélèvement](/aide/creer-un-modele-de-souscription/creer-modele-souscription-06-paiement.png)

### 7. Choisis le reçu de contribution

Un seul type est disponible pour l'instant : le reçu simple.

![Le reçu de contribution](/aide/creer-un-modele-de-souscription/creer-modele-souscription-07-recu.png)

### 8. Choisis le mode d'adhésion

- **Adhésion simple** : le contributeur n'a rien à signer. Le formulaire est terminé, tu peux créer le modèle.
- **Contrat** : le contributeur signe un contrat. Deux étapes s'ajoutent : **Contrat** et **Avenants**. Clique sur **Suivant**.

![Le mode Adhésion simple](/aide/creer-un-modele-de-souscription/creer-modele-souscription-08a-adhesion-simple.png)

![Le mode Contrat, qui ajoute deux étapes](/aide/creer-un-modele-de-souscription/creer-modele-souscription-08b-adhesion-contrat.png)

### 9. Prépare les documents du contrat

À l'étape **Contrat**, tu peux demander des documents justificatifs au contributeur : le réglage est détaillé dans [Définir les documents justificatifs demandés](/aide/modeles-de-souscription/definir-les-documents-justificatifs-demandes). Tu peux aussi joindre des annexes au format PDF, qui seront ajoutées au contrat.

![La liste des documents justificatifs](/aide/creer-un-modele-de-souscription/creer-modele-souscription-09-documents.png)

### 10. Ajoute les signataires

Dans **Contact(s) signataire(s)**, renseigne le nom et l'adresse e-mail de chaque personne qui signera pour ton organisation.

![Les contacts signataires](/aide/creer-un-modele-de-souscription/creer-modele-souscription-10-signataires.png)

### 11. Rédige le modèle de contrat

Écris le texte du contrat dans l'éditeur. Tape `[` (crochet ouvrant) ou clique sur le bouton des **Données de publipostage** pour insérer une donnée qui sera remplacée à la création de chaque contrat (nom du contributeur, montant, dates…). Le détail est dans [Rédiger le modèle de contrat (variables entre crochets)](/aide/modeles-de-souscription/rediger-le-modele-de-contrat).

![Le menu des données à insérer entre crochets](/aide/creer-un-modele-de-souscription/creer-modele-souscription-11a-crochet.png)

Pour une information qui n'existe pas encore, choisis **Nouveau champ** : le champ est créé et ajouté au texte.

![La création d'un nouveau champ](/aide/creer-un-modele-de-souscription/creer-modele-souscription-11b-nouveau-champ.png)

![Un modèle de contrat rempli de données entre crochets](/aide/creer-un-modele-de-souscription/creer-modele-souscription-11c-contrat-rempli.png)

Un champ peut aussi être rempli par le contributeur lui-même au moment de la signature.

![Les champs remplis par le contributeur](/aide/creer-un-modele-de-souscription/creer-modele-souscription-11d-champs-contributeur.png)

### 12. Configure le modèle d'avenant

Clique sur **Suivant** pour arriver à l'étape **Avenants**. Le modèle d'avenant se compose d'un en-tête, de paragraphes qui n'apparaissent que si un changement précis est fait, et d'un pied de page. Par défaut, il contient un paragraphe vide. Le détail est dans [Configurer le modèle d'avenant (paragraphes conditionnels)](/aide/modeles-de-souscription/configurer-le-modele-d-avenant).

![L'étape Avenants](/aide/creer-un-modele-de-souscription/creer-modele-souscription-12-avenants.png)

### 13. Crée le modèle

Vérifie tes réglages, puis clique sur **Créer le modèle de souscription** (en bas de l'étape **Configuration générale** en Adhésion simple, de l'étape **Avenants** en Contrat). Si un champ est incomplet, un message t'indique lequel corriger avant de continuer.

![Le bouton de création du modèle](/aide/creer-un-modele-de-souscription/creer-modele-souscription-13-creer.png)

## Et ensuite ?

- Le modèle apparaît dans la liste des modèles de souscription. Rien n'est envoyé à personne.

![Un modèle déjà présent dans la liste](/aide/creer-un-modele-de-souscription/creer-modele-souscription-14-liste.png)

- Tu peux maintenant l'utiliser pour créer des souscriptions : voir [Créer une souscription (inviter un contributeur)](/aide/souscriptions/creer-une-souscription).
- Les contributions d'une souscription sont créées dès sa création (adhésion simple) ou dès la signature du contrat par les deux parties : une seule à la date de début pour **Ponctuel** et **Permanent**, les périodes à venir pour **Récurrent**, prolongées chaque matin quand il n'y a pas de date de fin. Horaires et règles : voir [Ce que Cascade fait chaque jour](/aide/general/ce-que-cascade-fait-chaque-jour). Voir [Générer automatiquement les contributions récurrentes](/aide/contributions/generer-automatiquement-les-contributions-recurrentes).
- Si la facturation automatique est active, chaque contribution est facturée et envoyée au contributeur le nombre de jours choisi avant sa date ; les avoirs ne le sont jamais. Voir [Ce que Cascade fait chaque jour](/aide/general/ce-que-cascade-fait-chaque-jour). Voir [Facturer automatiquement](/aide/facturation/facturer-automatiquement).
- Si le contrat change plus tard, voir [Faire un avenant](/aide/souscriptions/faire-un-avenant).

## Bon à savoir

- Les modèles ne peuvent pas être supprimés ni dupliqués pour l'instant. Tu peux en revanche modifier un modèle existant : voir [Modifier un modèle de souscription](/aide/modeles-de-souscription/modifier-un-modele-de-souscription).
- Quand tu modifies un réglage (par exemple en passant de **Récurrent** à **Ponctuel**), les champs qui ne s'appliquent plus sont remis à zéro.
- Un délai de prélèvement de moins de 2 jours est refusé. Entre 2 et 13 jours, le modèle est accepté mais l'avertissement de préavis réduit s'affiche.
- Les étapes sont contrôlées l'une après l'autre : tu ne peux pas passer à la suivante tant que la précédente contient une erreur.

## Questions fréquentes

::accordion
:::accordion-item{label="Pourquoi je ne vois pas les étapes Contrat et Avenants ?"}
Elles n'apparaissent que si le mode d'adhésion est **Contrat**. Avec **Adhésion simple**, le formulaire n'a qu'une étape.
:::
:::accordion-item{label="Pourquoi mon modèle n'a généré aucune contribution ?"}
Un modèle seul ne génère rien : il faut créer des souscriptions. Si le mode d'adhésion est **Contrat**, les contributions d'une souscription ne sont créées qu'au moment où son contrat est signé par les deux parties.
:::
:::accordion-item{label="Puis-je changer le montant dans le modèle ?"}
Non, pour l'instant le montant se saisit à la création de chaque souscription.
:::
::
