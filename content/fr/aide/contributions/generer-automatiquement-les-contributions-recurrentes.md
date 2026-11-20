---
title: "Générer automatiquement les contributions récurrentes"
module: "Contributions"
moduleSlug: contributions
order: 3
actors: ["Gérant"]
enBref: "Cascade crée toute seule les contributions d'une souscription, mois après mois, sans que tu aies à les saisir. Cette fiche explique quand elles apparaissent, comment leur montant est calculé et comment les reconnaître dans la liste."
where: "Contributions (créées automatiquement, repérées par l'icône Automatique)"
status: review
needs: ["creer-une-souscription", "creer-un-modele-de-souscription"]
glossary: ["adhesion-simple", "contrat", "contribution", "date-de-fin", "date-de-prise-d-effet", "delai-de-prelevement", "montant-fixe-par-le-gerant", "montant-ht", "permanente", "ponctuel", "recurrent", "souscription"]
video: ""
videoStatus: none
---

## Avant de commencer

- Il n'y a rien à faire : tu n'as aucun bouton à cliquer, Cascade crée les contributions d'une souscription dès qu'elle est prête. Cette fiche t'explique quand elles apparaissent, combien elles valent et comment les reconnaître.
- Il faut une souscription dont le modèle est en **Montant fixé par le gérant** (le seul choix disponible pour l'instant) et dont le **Montant HT** n'est pas nul. Avec un montant nul, aucune contribution n'est créée. Voir [Créer une souscription (inviter un contributeur)](/aide/souscriptions/creer-une-souscription) et [Créer un modèle de souscription](/aide/modeles-de-souscription/creer-un-modele-de-souscription).
- Si le modèle demande un contrat, rien n'est créé tant que le contrat n'est pas signé par les deux parties. Voir [Signer un contrat (contributeur)](/aide/contrats-et-signature/signer-un-contrat) et [Contresigner un contrat (signataire)](/aide/contrats-et-signature/contresigner-un-contrat).

## Étapes

### 1. Crée la souscription

Une fois la souscription créée, Cascade en déduit ses contributions. Le moment dépend du mode d'adhésion du modèle :

- **Adhésion simple** : les contributions sont créées dès la création de la souscription.
- **Contrat** : elles sont créées dès que le contrat est signé par les deux parties, y compris quand tu ajoutes un contrat déjà signé sur papier (voir [Ajouter un contrat sans signature (déjà signé sur papier)](/aide/contrats-et-signature/ajouter-un-contrat-sans-signature)).

### 2. Laisse Cascade créer les contributions

Ce qui est créé dépend de la récurrence du modèle :

- **Récurrent sans date de fin** : une contribution par période, mois après mois, jusqu'à 2 ans à l'avance. Chaque matin, Cascade ajoute les périodes qui entrent dans cet horizon : il y a donc toujours des contributions pour les 2 prochaines années (horaire et règles dans [Ce que Cascade fait chaque jour](/aide/general/ce-que-cascade-fait-chaque-jour)).
- **Récurrent avec une date de fin** : toutes les périodes jusqu'à la date de fin sont créées d'un coup.
- **Ponctuel** et **Permanent** : une seule contribution, à la date de prise d'effet de la souscription.

Les périodes sont mensuelles pour l'instant. Chaque contribution est datée du premier jour de sa période, sauf la première, datée du jour de prise d'effet.

Le montant est celui de la souscription, avec un prorata pour la première période si la souscription démarre en cours de mois, et pour la dernière si elle se termine en cours de mois. Exemple : pour 100 € HT par mois et une prise d'effet le 16 novembre, la première contribution est de 50 € HT (15 jours sur les 30 du mois, le jour de prise d'effet compris). Pour une date de fin, c'est le même calcul, sur les jours écoulés jusqu'à cette date.

### 3. Retrouve les contributions dans la liste

Dans le menu, va dans **Contributions**. Les contributions créées par Cascade portent une icône de calendrier : survole-la pour lire **Automatique**. Celles que tu crées toi-même portent une icône en forme de main (**Manuelle**). Pour les retrouver plus vite, voir [Consulter et filtrer les contributions](/aide/contributions/consulter-et-filtrer-les-contributions).
## Et ensuite ?

- **Statut** : chaque contribution est **À facturer** si le modèle de souscription est en mode d'envoi Facture, sinon **Nouvelle**.
- **Paiement attendu** : un paiement du montant TTC est prévu à la date de la contribution, avec le moyen de paiement de la souscription. En Prélèvement SEPA, sa date est celle du jour de prélèvement (la date de la contribution moins le délai de prélèvement du modèle). Tu pourras l'enregistrer avec [Marquer une contribution comme payée](/aide/paiements/marquer-une-contribution-comme-payee).
- **Facture** : si le modèle a la facturation automatique, la contribution est facturée et envoyée au contributeur le matin de son jour de facturation (voir [Facturer automatiquement](/aide/facturation/facturer-automatiquement)). Sinon, facture-la toi-même : voir [Facturer des contributions (une ou plusieurs à la fois)](/aide/facturation/facturer-des-contributions).
- Aucun e-mail n'est envoyé au contributeur quand les contributions sont créées ; il ne reçoit que les factures.

## Bon à savoir

- Il n'y a pas de bouton pour lancer la création à la main. Pour une contribution ponctuelle de ta part (frais, régularisation), voir [Créer une contribution ou un avoir à la main](/aide/contributions/creer-une-contribution-ou-un-avoir).
- Cascade ne recrée jamais une période déjà facturée, et relancer la création ne produit pas de doublons.
- Quand une souscription change de version, les contributions automatiques à venir de l'ancienne version, non facturées, sont remplacées à partir de la date de prise d'effet de la nouvelle. Les contributions déjà facturées et celles que tu as créées à la main sont conservées. Voir [Faire un avenant](/aide/souscriptions/faire-un-avenant).
- Le montant TTC du paiement attendu est calculé avec le taux de TVA du modèle au moment de la création. Un changement de taux ultérieur n'est pas répercuté sur ce paiement.
- Les modèles dont le montant est fixé par le contributeur ou adaptatif ne sont pas encore disponibles : ils ne créent aucune contribution.

## Questions fréquentes

::accordion
:::accordion-item{label="Ma souscription vient d'être créée, mais je ne vois aucune contribution."}
Vérifie que le modèle demande un contrat : dans ce cas, les contributions n'apparaissent qu'une fois le contrat signé par les deux parties. Vérifie aussi que le montant de la souscription n'est pas nul.
:::
:::accordion-item{label="Pourquoi mes contributions s'arrêtent-elles dans 2 ans ?"}
Pour une souscription sans date de fin, Cascade crée les contributions 2 ans à l'avance et prolonge cet horizon chaque matin : il y en aura toujours pour les 2 prochaines années.
:::
:::accordion-item{label="La première contribution est plus petite que les autres."}
La souscription a démarré en cours de mois : la première période est calculée au prorata des jours restants.
:::
::
