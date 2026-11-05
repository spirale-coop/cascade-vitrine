---
title: "Marquer une contribution comme payée"
module: "Paiements"
moduleSlug: paiements
order: 2
actors: ["Gérant"]
enBref: "Enregistre sur une contribution un paiement reçu en dehors de l'application : virement, chèque ou espèces. Son statut se met à jour tout seul, payée si tout est réglé, partiellement payée sinon."
where: "Contributions › ⋮ en bout de ligne › Ajouter un paiement"
status: review
needs: ["creer-une-souscription"]
glossary: ["avoir", "contribution", "paiement"]
video: ""
videoStatus: none
---

## Avant de commencer

- La contribution doit attendre un paiement : c'est le cas de toute contribution positive qui n'est pas encore entièrement réglée, qu'elle ait été générée automatiquement ou créée à la main (voir [Créer une contribution ou un avoir à la main](/aide/contributions/creer-une-contribution-ou-un-avoir)).
- Le paiement doit avoir été reçu par virement, chèque ou espèces.

## Étapes

### 1. Repère la contribution dans la liste

Dans le menu, va dans **Contributions** et retrouve la contribution, au besoin avec la recherche ou les filtres **Statut** et de dates. La colonne **Reçu / Total** indique ce qui a déjà été reçu sur le montant TTC dû.

Clique sur le bouton **⋮** en bout de ligne. Il n'apparaît que sur les contributions qui attendent encore un paiement.

![Le bouton ⋮ en bout de ligne d'une contribution qui attend un paiement](/aide/marquer-une-contribution-comme-payee/marquer-contribution-payee-01-ligne.png)

### 2. Choisis Ajouter un paiement

Dans le menu qui s'ouvre, clique sur **Ajouter un paiement**.

![Le menu de la ligne et l'action Ajouter un paiement](/aide/marquer-une-contribution-comme-payee/marquer-contribution-payee-02-menu.png)

### 3. Vérifie ce qui est proposé

La fenêtre **Ajouter un paiement** rappelle le **Reste dû**, toutes taxes comprises. Elle est déjà remplie avec le montant attendu, le moyen de paiement prévu et la date du jour.

![La fenêtre Ajouter un paiement préremplie](/aide/marquer-une-contribution-comme-payee/marquer-contribution-payee-03-fenetre.png)

### 4. Renseigne le paiement reçu

- **Montant reçu** : le montant TTC réellement encaissé. Il peut être inférieur au reste dû (paiement partiel), jamais supérieur.
- **Moyen de paiement** : Espèces, Virement SEPA ou Chèque.
- **Date** : le jour où tu as reçu le paiement.
- **Référence** (facultatif) : un numéro de chèque, le libellé d'un virement… tout ce qui t'aidera à retrouver le paiement.

![Un paiement partiel de 100 € sur 120 € avec sa référence](/aide/marquer-une-contribution-comme-payee/marquer-contribution-payee-04-saisie.png)

Si le montant dépasse le reste dû, le message « Le montant ne peut pas dépasser le restant dû » s'affiche sous le champ et le paiement ne peut pas être enregistré.

![Le message affiché quand le montant dépasse le reste dû](/aide/marquer-une-contribution-comme-payee/marquer-contribution-payee-05-depassement.png)

### 5. Enregistre

Clique sur **Enregistrer**. La fenêtre se ferme et le message **Paiement enregistré** confirme l'opération.

Pour retrouver le détail des paiements d'une contribution, survole le montant de la colonne **Reçu / Total** : chaque paiement apparaît avec son montant, sa date, son moyen de paiement et son statut (**Payé** ou **En attente**).

![Le détail des paiements au survol de la colonne Reçu / Total](/aide/marquer-une-contribution-comme-payee/marquer-contribution-payee-06-historique.png)

## Et ensuite ?

- **Statut** : la contribution passe à **Payée** si le total est reçu, sinon à **Partiellement payée**. La colonne **Reçu / Total** est mise à jour.
- **Paiement partiel** : le reste demeure attendu, à sa date et avec son moyen de paiement d'origine. Le bouton **⋮** reste disponible pour enregistrer la suite.
- **Facture** : enregistrer un paiement ne change rien à la facturation. Une contribution payée avant d'avoir été facturée doit toujours l'être : elle reste prise en compte par la facturation automatique (voir [Ce que Cascade fait chaque jour](/aide/general/ce-que-cascade-fait-chaque-jour)), ou peut être facturée depuis la liste (voir [Facturer des contributions (une ou plusieurs à la fois)](/aide/facturation/facturer-des-contributions)).
- Aucun e-mail n'est envoyé au contributeur.

## Bon à savoir

- Pour l'instant, un paiement enregistré ne peut ni être modifié ni être supprimé : vérifie le montant et la date avant de cliquer sur **Enregistrer**.
- Les montants de la fenêtre sont TTC, alors que la colonne **Montant HT** de la liste est hors taxes.
- Le montant reçu est plafonné au reste dû : un trop-perçu s'enregistre sur une nouvelle contribution (voir les questions fréquentes).
- Le prélèvement SEPA et la carte bancaire ne s'enregistrent pas à la main : seuls les espèces, le virement et le chèque sont proposés.
- Une contribution payée mais pas encore facturée affiche **Payée** : son statut ne dit pas qu'une facture reste à émettre. Repère-la à la colonne **N° facture** vide.

## Questions fréquentes

::accordion
:::accordion-item{label="Le bouton ⋮ n'apparaît pas sur ma contribution."}
Elle n'attend pas de paiement : soit elle est déjà entièrement payée, soit c'est un avoir.
:::
:::accordion-item{label="Le contributeur a payé en deux fois. Comment faire ?"}
Enregistre le premier paiement avec le montant reçu : la contribution passe à **Partiellement payée**. Au second versement, rouvre **Ajouter un paiement** sur la même ligne, le reste dû est déjà proposé.
:::
:::accordion-item{label="Le contributeur a payé plus que prévu. Comment enregistrer le trop-perçu ?"}
Enregistre d'abord le paiement à hauteur du reste dû : la contribution passe à **Payée**. Crée ensuite une nouvelle contribution du montant du trop-perçu sur la même souscription (voir [Créer une contribution ou un avoir à la main](/aide/contributions/creer-une-contribution-ou-un-avoir)), puis enregistre le surplus dessus. Attention, la contribution se saisit hors taxes et le paiement toutes taxes comprises : pour 24 € TTC reçus en trop avec une TVA à 20 %, crée une contribution de 20 € HT.
:::
::
