---
title: "Créer une cascade"
module: "Cascade et organisation"
moduleSlug: cascade-et-organisation
order: 1
actors: ["Gérant"]
enBref: "Crée une nouvelle cascade pour y gérer tes modèles, souscriptions et contributions, en la rattachant à une organisation que tu as déjà ou en créant une nouvelle entité juridique."
where: "Tableau de bord › Mes cascades › Nouvelle cascade"
status: review
needs: ["se-connecter"]
glossary: ["cascade", "organisation", "prefixe"]
video: ""
videoStatus: none
---

## Avant de commencer

- Il te faut un compte et être connecté. Voir [Se connecter](/aide/acces-et-compte/se-connecter).
- Tu n'as pas d'autre prérequis : n'importe quel utilisateur connecté peut créer une cascade. Si tu n'as encore aucune cascade, l'application t'amène directement sur le formulaire.
- Prépare les informations légales de ton organisation : raison sociale, adresse de facturation, SIRET (ou N°BCE en Belgique) et IBAN. Si tu rattaches la cascade à une organisation que tu as déjà, tu n'as rien de tout cela à saisir.

## Étapes

### 1. Ouvre le formulaire

Il y a deux façons d'y arriver :

- Dans le menu de gauche, clique sur le nom de ta cascade en haut, puis sur **Nouvelle cascade** en bas de la liste.
- Ou, sur le **Tableau de bord**, clique sur le bouton **Nouvelle cascade** du bloc **Mes cascades**.

![Le menu de sélection de cascade et son entrée Nouvelle cascade](/aide/creer-une-cascade/creer-cascade-01a-selecteur.png)

![Le bouton Nouvelle cascade du bloc Mes cascades sur le Tableau de bord](/aide/creer-une-cascade/creer-cascade-01b-tableau-de-bord.png)

### 2. Donne un nom et un préfixe

Dans la section **Votre cascade**, remplis le **Nom**. Le **Préfixe** se remplit tout seul à partir du nom : les trois premières lettres, sans espace ni accent, en majuscules (« Atelier Coopératif » donne **ATE**).

Tu peux le modifier : il reste alors tel que tu l'as saisi. Il est toujours mis en majuscules, fait 5 caractères au maximum et sert à numéroter les contrats et les factures de la cascade.

![Les champs Nom et Préfixe, le préfixe rempli automatiquement](/aide/creer-une-cascade/creer-cascade-02-nom-prefixe.png)

### 3. Choisis l'entité juridique

Ce choix n'apparaît que si tu fais déjà partie d'au moins une organisation. Tu as alors le choix entre :

- **Nouvelle entité juridique** : tu renseignes les informations de ton organisation aux étapes suivantes ;
- **Rattacher à** suivi du nom d'une de tes organisations : la cascade reprend ses informations légales, et les sections **Organisation** et **Informations de facturation** (étapes 4 et 5) disparaissent du formulaire. Passe directement à l'étape 6.

Si tu n'as encore aucune organisation, ce choix n'est pas proposé : le formulaire te demande directement les informations de ta nouvelle organisation.

![Le choix entre une nouvelle entité juridique et le rattachement à une organisation existante](/aide/creer-une-cascade/creer-cascade-03a-entite.png)

![Avec Rattacher à…, les sections Organisation et Informations de facturation disparaissent du formulaire](/aide/creer-une-cascade/creer-cascade-03b-rattacher.png)

### 4. Renseigne l'organisation

Dans la section **Organisation** :

- **Raison sociale** (obligatoire) ;
- **Numéro de TVA** (facultatif) ;
- **Logo** (facultatif) : glisse une image ou clique pour la choisir. Il apparaîtra à côté du nom de la cascade dans le menu, sur les factures et sur les contrats.

![La section Organisation : raison sociale, numéro de TVA et logo](/aide/creer-une-cascade/creer-cascade-04-organisation.png)

### 5. Renseigne les informations de facturation

Dans la section **Informations de facturation**, tout est obligatoire :

- **Adresse**, **Code postal**, **Ville** ;
- **Pays** : France ou Belgique. Ce choix change le libellé du champ suivant : **SIRET** (14 chiffres) pour la France, **N°BCE** (10 chiffres) pour la Belgique ;
- **SIRET** ou **N°BCE** : les espaces et les points sont acceptés ;
- **IBAN** : il est vérifié (format et clé de contrôle). Une faute de frappe est refusée avant l'enregistrement.

![La section Informations de facturation remplie](/aide/creer-une-cascade/creer-cascade-05-facturation.png)

### 6. Crée la cascade

Clique sur **Créer la cascade** en bas du formulaire. Si un champ est incorrect, le formulaire t'indique lequel, et rien n'est créé tant que tout n'est pas valide.

![Le bouton Créer la cascade en bas du formulaire](/aide/creer-une-cascade/creer-cascade-06-creer.png)

### 7. Retrouve ta cascade

Tu arrives sur le **Tableau de bord**. La nouvelle cascade est sélectionnée : son nom (et son logo, si tu en as ajouté un) s'affiche en haut du menu de gauche, et elle apparaît dans le bloc **Mes cascades**, avec le nom de son organisation.

![Le bloc Mes cascades : la nouvelle cascade est sélectionnée et apparaît avec le nom de son organisation](/aide/creer-une-cascade/creer-cascade-07-tableau-de-bord.png)

## Et ensuite ?

- **Cascade sélectionnée** : l'application bascule tout de suite dans la nouvelle cascade. Tout ce que tu fais ensuite (modèles, souscriptions, contributions) se range dans celle-ci. Pour revenir à une autre, voir [Changer de cascade courante](/aide/acces-et-compte/changer-de-cascade-courante).
- **Cascade vide** : aucun modèle de souscription n'est créé pour toi. Commence par [Créer un modèle de souscription](/aide/modeles-de-souscription/creer-un-modele-de-souscription).
- **Nouvelle organisation** : si tu as choisi **Nouvelle entité juridique**, l'organisation est créée en même temps et tu en fais partie.
- **Paiement par carte ou prélèvement** : le compte Stripe est lié à l'organisation, pas à la cascade. Une nouvelle organisation doit donc le connecter ; une cascade rattachée à une organisation existante profite de son compte. Voir [Connecter le compte Stripe de l'organisation](/aide/paiements/connecter-le-compte-stripe).
- Aucun e-mail n'est envoyé.

## Bon à savoir

- Le nom et le préfixe doivent être uniques au sein d'une même organisation. Sinon, le formulaire affiche « Le nom doit être unique pour cette organisation. » ou « Le préfixe doit être unique pour cette organisation. ». Deux organisations différentes peuvent avoir le même nom ou le même préfixe.
- Toutes les cascades d'une même organisation partagent ses informations légales et son logo, et tous les membres de l'organisation les voient et les gèrent. Modifier ces informations dans une cascade les modifie donc pour toutes les autres. Voir [Modifier les réglages de la cascade (identité juridique, IBAN, TVA, adresse, logo, préfixe)](/aide/cascade-et-organisation/modifier-les-reglages-de-la-cascade).
- Tu peux modifier le nom, le préfixe et les informations légales plus tard, depuis **Ma cascade**. En revanche, il n'existe pas pour l'instant de bouton pour supprimer une cascade.
- Le choix du pays ne propose que la France et la Belgique pour l'instant.

## Questions fréquentes

::accordion
:::accordion-item{label="Je ne vois pas le choix « Rattacher à… ». Pourquoi ?"}
Ce choix n'est proposé que si tu fais déjà partie d'au moins une organisation. Pour ta toute première cascade, tu renseignes forcément une nouvelle entité juridique.
:::
:::accordion-item{label="Quand dois-je créer une nouvelle entité juridique plutôt que rattacher ma cascade à une organisation existante ?"}
Rattache la cascade quand elle relève de la même structure légale (même raison sociale, même IBAN, même SIRET), par exemple pour un second bâtiment. Crée une nouvelle entité juridique quand l'organisation est une autre structure : ses informations légales, son IBAN et son compte Stripe sont alors distincts.
:::
:::accordion-item{label="J'ai créé une cascade par erreur, comment la supprimer ?"}
Pour l'instant, une cascade ne peut pas être supprimée depuis l'application. Tu peux seulement la renommer depuis **Ma cascade**.
:::
::
