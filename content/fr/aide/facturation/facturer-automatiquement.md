---
title: "Facturer automatiquement"
module: "Facturation"
moduleSlug: facturation
order: 2
actors: ["Gérant"]
enBref: "Quand le modèle a un délai de facturation, Cascade émet et envoie la facture de chaque contribution toute seule, le matin de son jour de facturation. Tu la retrouves dans la liste des contributions, au statut Facturée."
where: "Contributions › (la contribution) › N° facture"
status: review
needs: ["configurer-la-facturation-automatique", "creer-une-souscription"]
glossary: ["adresse-de-facturation", "avoir", "contributeur", "contribution", "delai-avant-facturation", "delai-de-paiement", "delai-de-prelevement", "facture", "modele-de-souscription", "section-mode-d-envoi", "type-d-operation"]
video: ""
videoStatus: none
---

## Avant de commencer

- Le modèle de souscription doit avoir le mode d'envoi **Facture** et un nombre de jours dans **Facturer automatiquement … jours avant la date de contribution**. Le réglage lui-même s'explique dans [Configurer la facturation automatique](/aide/modeles-de-souscription/configurer-la-facturation-automatique) ; cette fiche décrit ce qui se passe ensuite.
- Les informations de facturation de ton organisation doivent être complètes (adresse, SIRET, IBAN). Voir [Modifier les réglages de la cascade (identité juridique, IBAN, TVA, adresse, logo, préfixe)](/aide/cascade-et-organisation/modifier-les-reglages-de-la-cascade).
- Le contributeur doit avoir une adresse de facturation et une adresse e-mail de contact. Voir [Créer une souscription (inviter un contributeur)](/aide/souscriptions/creer-une-souscription).

## Étapes

### 1. Règle le délai sur le modèle

Ouvre le modèle dans **Modèles de souscription**, section **Mode d'envoi**, et renseigne **Facturer automatiquement … jours avant la date de contribution**. Chaque contribution est alors facturée ce nombre de jours avant sa date : avec 10, une contribution du 1er novembre est facturée le 22 octobre. Avec 0, elle est facturée le jour même. Le délai va de 0 à 365 jours ; laisse le champ vide pour facturer à la main (voir [Facturer des contributions (une ou plusieurs à la fois)](/aide/facturation/facturer-des-contributions)).

![Le champ Facturer automatiquement … jours avant la date de contribution, dans la section Mode d'envoi d'un modèle](/aide/facturer-automatiquement/facturer-auto-01-delai-modele.png)

### 2. Vérifie les informations de facturation de ton organisation

Dans **Ma cascade**, la section **Informations de facturation** doit contenir l'adresse, le code postal, la ville, le pays, le SIRET et l'IBAN. Sans adresse ou sans SIRET, aucune facture ne peut partir.

![La section Informations de facturation dans Ma cascade](/aide/facturer-automatiquement/facturer-auto-02-informations-facturation.png)

### 3. Laisse Cascade facturer

Il n'y a rien à cliquer. Le matin du jour de facturation de chaque contribution, Cascade émet la facture et l'envoie par e-mail au contributeur (horaires dans [Ce que Cascade fait chaque jour](/aide/general/ce-que-cascade-fait-chaque-jour)).

### 4. Retrouve la facture dans la liste

Dans **Contributions**, la contribution passe de **À facturer** à **Facturée** et son numéro apparaît dans la colonne **N° facture**, avec la date de la facture. Clique sur le numéro pour ouvrir la facture.

![Une contribution Facturée avec son numéro de facture dans la colonne N° facture](/aide/facturer-automatiquement/facturer-auto-03-liste-facturee.png)

## Et ensuite ?

- **Statut** : la contribution passe à **Facturée**. Elle devient **Payée** quand tu enregistres le paiement : voir [Marquer une contribution comme payée](/aide/paiements/marquer-une-contribution-comme-payee).
- **Facture** : elle est datée du jour où Cascade la crée. Son numéro se compose du préfixe de ta cascade, de **F**, de l'année et du mois (AAMM) puis d'un compteur de 4 chiffres, qui repart de 1 chaque mois, par cascade (par exemple **BAT1-F-26100005**). Son échéance suit le **Délai de paiement** du modèle : immédiate, 30 jours fin de mois ou 60 jours fin de mois.
- **E-mail** : le contributeur reçoit la facture en pièce jointe, à l'adresse e-mail de contact de sa souscription. Voir [Envoyer la facture par e-mail au contributeur](/aide/facturation/envoyer-la-facture-par-e-mail).
- **Prélèvement SEPA** : la facture sert de préavis. Si la date de prélèvement prévue tombe moins de 2 jours après la facture, elle est repoussée à 2 jours après. Voir [Choisir le moyen de paiement par défaut et le délai de prélèvement](/aide/modeles-de-souscription/choisir-le-moyen-de-paiement-par-defaut).

## Bon à savoir

- Le jour de facturation est la date de la contribution moins le nombre de jours du modèle. S'il est déjà passé (souscription signée tard, contribution créée à la main), la facture part dès le matin suivant.
- Le délai se lit sur le modèle à chaque passage : si tu le modifies, il vaut aussi pour les contributions déjà créées qui ne sont pas encore facturées.
- Si tu actives la facturation automatique sur un modèle qui a déjà des contributions **À facturer** dont le jour de facturation est passé, toutes sont facturées et envoyées au passage suivant, même les plus anciennes.
- Les avoirs ne sont jamais facturés automatiquement : facture-les depuis la liste (voir [Facturer des contributions (une ou plusieurs à la fois)](/aide/facturation/facturer-des-contributions)).
- Une contribution déjà payée avant sa facturation est quand même facturée.
- Une contribution n'est pas facturée s'il manque l'adresse de facturation ou le SIRET de ton organisation, l'adresse de facturation du contributeur ou le type d'opération du modèle. Elle reste **À facturer**, sans message : elle partira au premier passage qui suit la correction.
- Une facture émise n'est jamais modifiée. Il n'y a pas de bouton pour lancer le passage à la main.

## Questions fréquentes

::accordion
:::accordion-item{label="Ma contribution est encore À facturer alors que son jour est passé."}
Vérifie qu'elle n'est pas un avoir, que le modèle a bien un nombre de jours dans **Facturer automatiquement …**, et que les adresses de facturation, le SIRET et le type d'opération sont renseignés. Une fois corrigé, elle partira au prochain passage, ou tout de suite si tu la factures depuis la liste.
:::
:::accordion-item{label="Je veux facturer plus tôt ou plus tard."}
Change le nombre de jours dans le modèle, ou facture la contribution à la main depuis la liste.
:::
:::accordion-item{label="Le contributeur dit n'avoir rien reçu."}
Vérifie dans la liste que la contribution est **Facturée**, puis l'adresse e-mail de contact de sa souscription.
:::
::
