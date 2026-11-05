---
title: "Ce que Cascade fait chaque jour"
module: "Général"
moduleSlug: general
order: 1
actors: ["Gérant"]
enBref: "Chaque matin, sans action de ta part, Cascade crée les contributions à venir puis émet et envoie les factures arrivées à échéance. Cette fiche donne les horaires et les règles de ces passages automatiques."
where: "Automatique (aucun écran)"
status: review
needs: []
glossary: ["adresse-de-facturation", "avoir", "contrat", "contribution", "date-de-fin", "delai-avant-facturation", "delai-de-prelevement", "facture", "recurrent", "souscription"]
video: ""
videoStatus: none
---

## Avant de commencer

- Rien à faire : ces passages tournent tous les jours, pour toutes les cascades.
- Les horaires sont ceux du serveur, en temps universel (UTC) : **5 h** et **6 h** UTC correspondent à **6 h et 7 h à Paris en hiver**, **7 h et 8 h en été**. Dans la suite, « 5 h » et « 6 h » désignent ces heures UTC.

## Chaque jour

### 5 h — Les contributions à venir sont créées

Ce passage concerne les souscriptions **récurrentes sans date de fin**. Pour chacune, Cascade crée les contributions des périodes à venir, jusqu'à 2 ans à l'avance : chaque jour, l'horizon avance donc d'un jour.

- La première période est calculée au prorata si la souscription démarre en cours de période (le 15 du mois pour une récurrence mensuelle, par exemple).
- Une période déjà facturée n'est jamais recréée.
- Une souscription avec contrat n'a aucune contribution tant que le contrat n'est pas signé par les deux parties.
- Pour chaque contribution positive, un paiement est attendu à sa date, avec le moyen de paiement de la souscription.

Les autres souscriptions ne passent pas par ce rendez-vous du matin : leurs contributions sont toutes créées d'un coup, à la création de la souscription (adhésion simple) ou dès que le contrat est signé par les deux parties :

- **Récurrent avec une date de fin** : toutes les périodes jusqu'à la date de fin, la dernière au prorata.
- **Ponctuel** et **Permanent** : une seule contribution, à la date de début de la souscription.

Voir [Générer automatiquement les contributions récurrentes](/aide/contributions/generer-automatiquement-les-contributions-recurrentes).

### 6 h — Les factures arrivées à échéance sont émises et envoyées

Ce passage concerne les contributions dont le modèle de souscription est en mode d'envoi **Facture** avec la facturation automatique réglée (**Facturer automatiquement … jours avant la date de contribution**). Une contribution est facturée quand :

- elle est positive et n'a pas encore de facture ;
- son jour de facturation (sa date moins le nombre de jours du modèle) est aujourd'hui ou déjà passé.

La facture est datée du jour, son échéance suit le délai de paiement du modèle, et elle part aussitôt par e-mail au contributeur. Voir [Facturer automatiquement](/aide/facturation/facturer-automatiquement) et [Envoyer la facture par e-mail au contributeur](/aide/facturation/envoyer-la-facture-par-e-mail).

- **Rattrapage** : une contribution dont le jour de facturation est déjà passé (souscription signée tard, contribution créée à la main, passage manqué) est facturée au passage suivant.
- **Avoirs** : ils ne sont jamais facturés automatiquement. Facture-les depuis la liste : voir [Facturer des contributions (une ou plusieurs à la fois)](/aide/facturation/facturer-des-contributions).
- **Données manquantes** : une contribution n'est pas facturée s'il manque l'adresse de facturation ou le SIRET de ton organisation, l'adresse de facturation du contributeur, ou le type d'opération. Elle reste en attente, sans message, et sera facturée au premier passage qui suit la correction. Voir [Modifier les réglages de la cascade (identité juridique, IBAN, TVA, adresse, logo, préfixe)](/aide/cascade-et-organisation/modifier-les-reglages-de-la-cascade).
- **Prélèvement SEPA** : la facture sert de préavis. Si la date de prélèvement prévue tombe moins de 2 jours après la facture, elle est repoussée à 2 jours après. Pour l'instant, aucun prélèvement n'est encore exécuté : seule sa date est préparée. Voir [Choisir le moyen de paiement par défaut et le délai de prélèvement](/aide/modeles-de-souscription/choisir-le-moyen-de-paiement-par-defaut).

### Dans la nuit — Les fichiers abandonnés sont supprimés

Un fichier déposé par un contributeur mais jamais envoyé avec sa signature (un document justificatif, par exemple) est supprimé au nettoyage de minuit (UTC) qui suit ses 24 heures : il disparaît donc entre 24 et 48 heures après son dépôt. Voir [Définir les documents justificatifs demandés](/aide/modeles-de-souscription/definir-les-documents-justificatifs-demandes).

## Et ensuite ?

- Les contributions créées apparaissent dans **Contributions**, au statut **À facturer** (mode d'envoi Facture) ou **Nouvelle**.
- Les contributions facturées passent à **Facturée**, avec leur numéro de facture dans la colonne **N° facture**.

## Bon à savoir

- Il n'y a pas de bouton pour lancer ces passages à la main. Pour facturer tout de suite, facture depuis la liste des contributions.
- Les deux passages sont dans cet ordre exprès : une contribution créée à 5 h dont le jour de facturation est déjà arrivé est facturée dès 6 h, le même matin.
- Un avenant signé remplace les contributions automatiques non facturées à partir de sa date de prise d'effet ; les contributions déjà facturées et celles créées à la main sont conservées. Voir [Faire un avenant](/aide/souscriptions/faire-un-avenant).
- Une facture émise n'est jamais modifiée, même si un avenant change ensuite le montant.

## Questions fréquentes

::accordion
:::accordion-item{label="J'ai créé une souscription ce matin, pourquoi ses contributions sont-elles déjà là ?"}
Les contributions d'une souscription sont créées dès sa création (adhésion simple) ou dès la signature de son contrat. Le passage de 5 h ne fait que prolonger l'horizon des souscriptions récurrentes sans date de fin.
:::
:::accordion-item{label="Une contribution aurait dû être facturée ce matin, mais elle est toujours À facturer."}
Vérifie que le modèle a bien la facturation automatique, que la contribution n'est pas un avoir, et que les adresses de facturation, le SIRET et le type d'opération sont renseignés. Une fois corrigé, elle partira au prochain passage, ou tout de suite si tu la factures depuis la liste.
:::
:::accordion-item{label="Pourquoi mes contributions s'arrêtent-elles dans 2 ans ?"}
Pour une souscription sans date de fin, Cascade crée les contributions 2 ans à l'avance et prolonge cet horizon chaque matin : il y en aura toujours pour les 2 prochaines années.
:::
::
