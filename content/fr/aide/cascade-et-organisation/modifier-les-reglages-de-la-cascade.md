---
title: "Modifier les réglages de la cascade (identité juridique, IBAN, TVA, adresse, logo, préfixe)"
module: "Cascade et organisation"
moduleSlug: cascade-et-organisation
order: 2
actors: ["Gérant"]
enBref: "Mets à jour le nom et le préfixe de ta cascade, ainsi que l'identité juridique de son organisation : raison sociale, TVA, logo, adresse de facturation, SIRET (ou N°BCE) et IBAN. L'identité vaut pour toutes les cascades de l'organisation."
where: "Ma cascade"
status: review
needs: ["creer-une-cascade"]
glossary: ["adresse-de-facturation", "cascade", "compte-stripe", "numero-de-tva", "organisation", "prefixe"]
video: ""
videoStatus: none
---

## Avant de commencer

- Il te faut une cascade déjà créée : voir [Créer une cascade](/aide/cascade-et-organisation/creer-une-cascade). N'importe quel gérant rattaché à l'organisation de la cascade peut modifier ces réglages.
- Les réglages s'ouvrent sur la cascade sélectionnée. Pour régler une autre cascade, sélectionne-la d'abord : voir [Changer de cascade courante](/aide/acces-et-compte/changer-de-cascade-courante).
- Si tu es administrateur de la plateforme et que tu corriges l'organisation d'un gérant à sa place, passe plutôt par Modifier une organisation.

## Étapes

### 1. Ouvre les réglages de ta cascade

Dans le menu de gauche, clique sur **Ma cascade**. L'écran s'ouvre avec les valeurs actuelles.

Sur le **Tableau de bord**, tu peux aussi cliquer sur la roue dentée au bout de la ligne d'une cascade du bloc **Mes cascades**.

![Le menu de gauche avec l'entrée Ma cascade](/aide/modifier-les-reglages-de-la-cascade/reglages-cascade-01-menu.png)

### 2. Modifie le nom et le préfixe

Dans la section **Votre cascade**, change le **Nom** et le **Préfixe**. Le préfixe est toujours mis en majuscules et fait 5 caractères au maximum : il sert à numéroter les contrats et les factures de la cascade. Contrairement à la création, il ne suit pas le nom : changer le nom ne change pas le préfixe.

Ces deux champs sont propres à ta cascade : ils ne touchent pas les autres cascades de l'organisation.

![Les champs Nom et Préfixe de la section Votre cascade](/aide/modifier-les-reglages-de-la-cascade/reglages-cascade-02-nom-et-prefixe.png)

### 3. Mets à jour l'organisation

Dans la section **Organisation** :

- **Raison sociale** (obligatoire) ;
- **Numéro de TVA** (facultatif).

Si ton organisation porte plusieurs cascades, un encadré te prévient : **Ces informations sont partagées avec 1 autre cascade.** (le nombre s'adapte). Tout ce qui se trouve sous cet encadré, jusqu'au bouton d'enregistrement, vaut pour toutes les cascades de l'organisation.

![L'encadré d'information, la raison sociale et le numéro de TVA](/aide/modifier-les-reglages-de-la-cascade/reglages-cascade-03-organisation.png)

### 4. Change le logo si besoin

Dans **Logo**, le fichier actuel est affiché avec une croix pour le retirer. Pour le remplacer, glisse une image sur la zone **Glissez un fichier ici ou cliquez pour le remplacer**, ou clique dessus pour choisir un fichier. Une seule image est conservée.

Le logo s'affiche à côté du nom de la cascade en haut du menu, ainsi que sur les factures et les contrats. Pour ne plus en avoir, retire-le avec la croix.

![Le champ Logo avec le fichier actuel](/aide/modifier-les-reglages-de-la-cascade/reglages-cascade-04-logo.png)

### 5. Corrige les informations de facturation

Dans la section **Informations de facturation**, tous les champs sont obligatoires :

- **Adresse**, **Code postal**, **Ville** ;
- **Pays** : France ou Belgique. Ce choix change le libellé et le contrôle du champ suivant ;
- **SIRET** (14 chiffres) pour la France, **N°BCE** (10 chiffres) pour la Belgique. Les espaces et les points sont acceptés ;
- **IBAN** : son format et sa clé de contrôle sont vérifiés, les espaces sont acceptés.

Si une valeur est refusée, un message s'affiche sous le champ (par exemple **Le champ doit être un IBAN valide.**) et rien n'est enregistré tant que tout n'est pas correct.

![La section Informations de facturation](/aide/modifier-les-reglages-de-la-cascade/reglages-cascade-05-facturation.png)

![Un IBAN refusé : le message sous le champ et la notification Corrigez les erreurs du formulaire avant de continuer](/aide/modifier-les-reglages-de-la-cascade/reglages-cascade-06-iban-refuse.png)

### 6. Enregistre

Clique sur **Enregistrer**, en bas du formulaire. Tu arrives sur le **Tableau de bord**, où une notification **Modifié(e)** confirme l'enregistrement : tu ne restes pas sur le formulaire.

![Le bouton Enregistrer en bas du formulaire](/aide/modifier-les-reglages-de-la-cascade/reglages-cascade-07-enregistrer.png)

![La notification Modifié(e) sur le Tableau de bord](/aide/modifier-les-reglages-de-la-cascade/reglages-cascade-08-confirmation.png)

## Et ensuite ?

- **Effet immédiat** : les nouvelles valeurs valent tout de suite, pour la cascade (nom, préfixe) ou pour toutes les cascades de l'organisation (le reste).
- **Factures** : une facture déjà émise garde la raison sociale, l'adresse, le SIRET (ou N°BCE), le numéro de TVA et l'IBAN d'origine. Les factures créées ensuite reprennent les nouvelles valeurs, y compris pour une contribution plus ancienne qui n'était pas encore facturée. Voir [Facturer des contributions (une ou plusieurs à la fois)](/aide/facturation/facturer-des-contributions) et [Facturer automatiquement](/aide/facturation/facturer-automatiquement).
- **Numéros** : changer le préfixe ne renumérote rien. Les contrats et factures déjà numérotés gardent leur numéro ; seuls les suivants prennent le nouveau préfixe.
- **Compte Stripe** : il se trouve sous le formulaire, dans le bloc **Compte Stripe**, avec son état (par exemple **Non connecté**) et le bouton **Connecter Stripe**. Il est lié à l'organisation, donc partagé par toutes ses cascades. Stripe a besoin du pays de l'adresse de facturation : enregistre l'adresse avant de le connecter. Voir [Connecter le compte Stripe de l'organisation](/aide/paiements/connecter-le-compte-stripe).
- Aucun e-mail n'est envoyé et rien ne se déclenche automatiquement.

![Le bloc Compte Stripe sous le formulaire](/aide/modifier-les-reglages-de-la-cascade/reglages-cascade-09-stripe.png)

## Bon à savoir

- Le nom et le préfixe sont propres à la cascade ; la raison sociale, la TVA, le logo, l'adresse, le SIRET (ou N°BCE), l'IBAN et le compte Stripe sont ceux de l'organisation. Les modifier ici les modifie dans toutes ses cascades, pour tous ses gérants, sans confirmation préalable.
- Le nom et le préfixe doivent être uniques dans l'organisation. Sinon : « Le nom doit être unique pour cette organisation. » ou « Le préfixe doit être unique pour cette organisation. ». Deux organisations différentes peuvent avoir le même nom ou le même préfixe.
- Le SIRET (ou N°BCE) est enregistré sans espaces ni points, l'IBAN sans espaces et en majuscules : l'écran les réaffiche groupés pour la lecture.
- Le numéro de TVA est facultatif et n'est pas vérifié à l'enregistrement.
- Depuis cet écran, tu ne peux ni supprimer une cascade, ni la rattacher à une autre organisation. Le choix du pays ne propose que la France et la Belgique pour l'instant.
- Ici, le SIRET (ou N°BCE), l'IBAN et l'adresse sont obligatoires et vérifiés ; le panneau d'administration est moins strict.

## Questions fréquentes

::accordion
:::accordion-item{label="J'ai changé l'IBAN dans une cascade et il a changé dans une autre. Est-ce normal ?"}
Oui : l'IBAN appartient à l'organisation, que ses cascades partagent. L'encadré « Ces informations sont partagées avec… » te le rappelle. Seuls le nom et le préfixe sont propres à chaque cascade.
:::
:::accordion-item{label="Comment modifier les réglages d'une autre cascade ?"}
Sélectionne-la (voir [Changer de cascade courante](/aide/acces-et-compte/changer-de-cascade-courante)), puis clique sur **Ma cascade**. Sur le Tableau de bord, la roue dentée de sa ligne ouvre directement ses réglages.
:::
:::accordion-item{label="J'ai changé le préfixe : les anciennes factures vont-elles changer de numéro ?"}
Non. Seuls les contrats et les factures créés après le changement utilisent le nouveau préfixe.
:::
:::accordion-item{label="Je n'arrive pas à enregistrer."}
Regarde les messages rouges sous les champs : SIRET ou N°BCE au mauvais nombre de chiffres (14 en France, 10 en Belgique), IBAN invalide, champ obligatoire vide, nom ou préfixe déjà pris dans l'organisation.
:::
::
