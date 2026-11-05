---
title: "Créer une contribution ou un avoir à la main"
module: "Contributions"
moduleSlug: contributions
order: 2
actors: ["Gérant"]
enBref: "Ajoute toi-même une contribution à une souscription, en plus de celles générées automatiquement : des frais ponctuels, une régularisation… Avec un montant négatif, tu crées un avoir qui corrige une contribution déjà due."
where: "Contributions › Créer une contribution"
status: review
needs: ["creer-une-souscription"]
glossary: ["avoir", "contribution", "montant-ht"]
video: ""
videoStatus: none
---

## Avant de commencer

- Il te faut une souscription qui a déjà démarré : sa date de prise d'effet doit être aujourd'hui ou passée. Voir [Créer une souscription (inviter un contributeur)](/aide/souscriptions/creer-une-souscription).
- Pour un prélèvement SEPA, le modèle de souscription doit avoir un délai de prélèvement. Voir [Choisir le moyen de paiement par défaut et le délai de prélèvement](/aide/modeles-de-souscription/choisir-le-moyen-de-paiement-par-defaut).

## Étapes

### 1. Ouvre le formulaire

Dans le menu, va dans **Contributions**, puis clique sur **Créer une contribution**.

![La liste des contributions et le bouton Créer une contribution](/aide/creer-une-contribution-ou-un-avoir/contribution-avoir-main-01-ouvrir.png)

### 2. Choisis la souscription

Dans le champ **Souscription**, tape le nom du contributeur ou du modèle de souscription. Chaque ligne affiche le contributeur, le modèle, la récurrence et le montant HT souscrit.

Une fois la souscription choisie, un encadré la résume : contributeur, modèle de souscription, prise d'effet, montant HT souscrit et récurrence. Le reste du formulaire apparaît, déjà prérempli avec les réglages de la souscription et de son modèle (moyen de paiement, libellé facture, catégorie d'opération, période en cours). Tu peux tout modifier pour cette contribution.

![La recherche d'une souscription](/aide/creer-une-contribution-ou-un-avoir/contribution-avoir-main-02a-souscription-recherche.png)

![L'encadré récapitulatif une fois la souscription choisie](/aide/creer-une-contribution-ou-un-avoir/contribution-avoir-main-02b-souscription-choisie.png)

### 3. Indique la date et la période

- **Date** : le jour où la contribution est due. Elle ne peut pas être antérieure à la date de prise d'effet de la souscription.
- **Période** (souscriptions récurrentes uniquement) : la période que couvre la contribution. Elle est préremplie avec la période en cours, et la liste propose les périodes proches, passées comme à venir (par exemple les 12 derniers mois et les 3 prochains pour une récurrence mensuelle).

![Les champs Date et Période remplis](/aide/creer-une-contribution-ou-un-avoir/contribution-avoir-main-03-date-periode.png)

### 4. Saisis le montant

Indique le **Montant HT**. Le montant TTC s'affiche juste en dessous, calculé avec le taux de TVA du modèle de souscription.

Pour créer un **avoir**, saisis un montant négatif. Un encadré « Ce montant négatif va créer un avoir » apparaît : choisis dans **Contribution corrigée par cet avoir** la contribution que tu corriges. Ce choix est facultatif, et seules les contributions positives de cette souscription sont proposées.

![Un montant positif et son équivalent TTC](/aide/creer-une-contribution-ou-un-avoir/contribution-avoir-main-04a-montant.png)

![Un montant négatif : l'encadré de l'avoir et le choix de la contribution corrigée](/aide/creer-une-contribution-ou-un-avoir/contribution-avoir-main-04b-avoir.png)

### 5. Choisis le moyen de paiement

Le **Moyen de paiement** reprend celui de la souscription : Virement SEPA, Prélèvement SEPA, Carte bancaire, Espèces ou Chèque. Change-le si cette contribution sera réglée autrement.

En **Prélèvement SEPA**, le formulaire t'indique la date à laquelle la contribution sera prélevée : la date de la contribution moins le délai de prélèvement du modèle. Si la facture ne peut plus partir à temps, il t'indique la date au plus tôt, 2 jours après l'envoi de la facture.

![Le prélèvement SEPA et la date de prélèvement annoncée](/aide/creer-une-contribution-ou-un-avoir/contribution-avoir-main-05-prelevement.png)

### 6. Vérifie les informations de facturation

Cette section n'apparaît que si le modèle de souscription est en mode d'envoi **Facture**.

- **Libellé facture** : le texte qui figurera sur la facture.
- **Catégorie d'opération** : Prestation de service ou Vente de marchandise.

Les deux sont repris du modèle de souscription ; tes changements ne valent que pour cette contribution.

![La section Facturation](/aide/creer-une-contribution-ou-un-avoir/contribution-avoir-main-06-facturation.png)

### 7. Crée la contribution

Clique sur **Créer**. Tu reviens à la liste des contributions, où ta contribution apparaît avec une icône en forme de main : survole-la pour lire **Manuelle**.

![Une contribution manuelle dans la liste, repérée par l'icône de la main](/aide/creer-une-contribution-ou-un-avoir/contribution-avoir-main-07-liste.png)

## Et ensuite ?

- **Statut** : la contribution est **À facturer** si le modèle de souscription est en mode d'envoi Facture, sinon **Nouvelle**.
- **Paiement attendu** : pour une contribution positive, un paiement du montant TTC est prévu à la date de la contribution (ou au jour du prélèvement). Tu pourras l'enregistrer avec [Marquer une contribution comme payée](/aide/paiements/marquer-une-contribution-comme-payee).
- **Facture** : si le modèle a un délai avant facturation, la contribution est facturée et la facture envoyée au contributeur automatiquement, le matin du jour prévu, ou dès le matin suivant si ce jour est déjà passé (voir [Ce que Cascade fait chaque jour](/aide/general/ce-que-cascade-fait-chaque-jour)). Sinon, facture-la toi-même depuis la liste : voir [Facturer des contributions (une ou plusieurs à la fois)](/aide/facturation/facturer-des-contributions).
- **Avoir** : aucun paiement n'est prévu et il n'est jamais facturé automatiquement. Facture-le depuis la liste, une fois la contribution qu'il corrige facturée (une icône le rappelle à côté de son montant).
- Aucun e-mail n'est envoyé au contributeur à la création ; il ne reçoit que la facture.

## Bon à savoir

- Une contribution ne peut ni être modifiée ni être supprimée une fois créée : relis tout avant de cliquer sur **Créer**. Pour corriger une erreur, crée un avoir.
- Le montant ne peut pas être nul.
- Une contribution que tu as créée est conservée quand la souscription change de version, contrairement aux contributions automatiques à venir, qui sont remplacées.
- Le prélèvement SEPA est refusé si le modèle de souscription n'a pas de délai de prélèvement.

## Questions fréquentes

::accordion
:::accordion-item{label="Je ne trouve pas la souscription dans la liste."}
Seules les souscriptions déjà démarrées sont proposées : vérifie sa date de prise d'effet. Pour une souscription qui a plusieurs versions, seule la plus récente apparaît.
:::
:::accordion-item{label="Comment annuler une contribution créée par erreur ?"}
Crée un avoir du même montant, en négatif, et désigne-la comme contribution corrigée.
:::
::
