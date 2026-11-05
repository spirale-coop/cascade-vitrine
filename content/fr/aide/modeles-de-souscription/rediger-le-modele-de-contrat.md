---
title: "Rédiger le modèle de contrat (variables entre crochets)"
module: "Modèles de souscription"
moduleSlug: modeles-de-souscription
order: 7
actors: ["Gérant"]
enBref: "Rédige une seule fois le texte du contrat d'un modèle de souscription ; Cascade remplace ensuite les données entre crochets (nom, montant, dates…) par celles de chaque contributeur."
where: "Modèles de souscription › (le modèle) › Contrat › Modèle de contrat"
status: review
needs: ["creer-un-modele-de-souscription"]
glossary: ["adresse-de-facturation", "annexes-au-contrat", "contact-s-signataire-s", "contrat", "contributeur", "date-de-fin", "date-de-prise-d-effet", "delai-de-prelevement", "documents-justificatifs", "modele-d-avenant", "modele-de-contrat", "modele-de-souscription", "montant-ht", "numero-de-tva", "souscription", "taux-de-tva"]
video: ""
videoStatus: none
---

## Avant de commencer

- Il te faut un modèle de souscription dont le mode d'adhésion est **Contrat** : le texte se rédige à l'étape **Contrat** du formulaire, qui n'existe pas en **Adhésion simple**. Voir [Créer un modèle de souscription](/aide/modeles-de-souscription/creer-un-modele-de-souscription).
- Prépare le texte de ton contrat et repère les informations qui changent d'un contributeur à l'autre : nom, montant, date de début… Ce sont elles que tu placeras entre crochets.
- L'étape **Contrat** demande aussi au moins un contact signataire (voir [Créer un modèle de souscription](/aide/modeles-de-souscription/creer-un-modele-de-souscription)) ; les documents justificatifs sont facultatifs (voir [Définir les documents justificatifs demandés](/aide/modeles-de-souscription/definir-les-documents-justificatifs-demandes)).

## Étapes

### 1. Ouvre l'étape Contrat

Dans le menu, va dans **Modèles de souscription**, puis clique sur **Créer un modèle** (ou sur le nom d'un modèle existant pour le modifier). Renseigne la **Configuration générale**, choisis le mode d'adhésion **Contrat** et clique sur **Suivant**. L'étape **Contrat** s'ouvre : tout en bas, la section **Modèle de contrat** contient le champ **Modèle**, obligatoire.

![L'étape Contrat et la section Modèle de contrat](/aide/rediger-le-modele-de-contrat/modele-contrat-01-ouvrir.png)

### 2. Rédige le texte du contrat

Écris le contrat dans l'éditeur. La barre d'outils propose : annuler et rétablir, titres, listes à puces ou numérotées, gras, italique, souligné, barré, lien, et le bouton **Données de publipostage** (le bouton avec deux crochets). Écris une seule fois le texte : à la création de chaque contrat, Cascade remplace les données entre crochets par celles du contributeur.

![Un texte de contrat avec des données entre crochets](/aide/rediger-le-modele-de-contrat/modele-contrat-02-texte.png)

### 3. Insère une donnée avec le bouton Données de publipostage

Place le curseur où la donnée doit apparaître, clique sur **Données de publipostage** et choisis la donnée dans la liste. Elle s'insère sous la forme d'une pastille bleue qui porte son nom. Les données déjà utilisées dans le texte sont écrites en bleu dans la liste. La liste défile : elle contient 14 données.

![Le bouton Données de publipostage](/aide/rediger-le-modele-de-contrat/modele-contrat-03-bouton.png)

![La liste des données, première partie](/aide/rediger-le-modele-de-contrat/modele-contrat-04-menu.png)

![La liste des données, suite](/aide/rediger-le-modele-de-contrat/modele-contrat-05-menu-suite.png)

Voici ce que Cascade met à la place de chacune :

| Donnée | Ce que Cascade écrit dans le contrat |
| --- | --- |
| **Nom** | Le nom du signataire côté contributeur, saisi à la création de la souscription. |
| **Email** | L'adresse e-mail de ce signataire. |
| **Date de prise d'effet** | La date de prise d'effet de la souscription, écrite en toutes lettres pour le mois (par exemple « 01 décembre 2026 »). |
| **Date de fin** | La date de fin de la souscription ou, à défaut, la date de fin par défaut du modèle. Sans date de fin, le nom de la donnée apparaît à la place. |
| **Taux de TVA** | Le taux de TVA du modèle, sans le symbole % : ajoute-le toi-même. |
| **Montant TVA** | Le montant de TVA de la contribution, sans le symbole €. |
| **Montant HT** | Le montant hors taxes de la souscription (par exemple « 180 »), sans le symbole €. |
| **Montant TTC** | Le montant toutes taxes comprises (par exemple « 216 »), sans le symbole €. |
| **Adresse de facturation** | L'adresse de facturation du contributeur. |
| **Numéro de TVA** | Le numéro de TVA du contributeur. |
| **Numéro de SIRET / N°BCE** | Le numéro d'identification de l'entreprise du contributeur. |
| **Dénomination sociale** | La raison sociale du contributeur. |
| **Documents requis pour adhérer** | La liste à puces des documents justificatifs demandés par le modèle. Voir [Définir les documents justificatifs demandés](/aide/modeles-de-souscription/definir-les-documents-justificatifs-demandes). |
| **Préavis de prélèvement (jours)** | Le nombre de jours entre l'envoi de la facture et le prélèvement. Vide si le modèle n'a pas de facturation automatique ou de délai de prélèvement. Voir [Choisir le moyen de paiement par défaut et le délai de prélèvement](/aide/modeles-de-souscription/choisir-le-moyen-de-paiement-par-defaut). |

### 4. Ou ouvre le menu avec le crochet

Tu peux aussi taper `[` (crochet ouvrant) dans le texte : le même menu s'ouvre sous le curseur. Continue à taper pour le filtrer (par exemple « montant »), puis choisis la donnée avec la souris ou la touche Entrée.

![Le menu qui s'ouvre quand on tape le crochet](/aide/rediger-le-modele-de-contrat/modele-contrat-06-crochet.png)

Pour une donnée de la liste, choisis-la toujours dans le menu : si tu tapes à la main `[Nom]` ou `[Montant HT]`, Cascade ne reconnaît pas la donnée existante : elle crée un nouveau champ du même nom, à renseigner à la main à chaque souscription.

### 5. Crée un nouveau champ pour une information propre à ton contrat

Pour une information qui n'est pas dans la liste (un numéro de dossier, un étage, un lot…), tape `[` puis le nom du champ. Le menu propose **Nouveau champ** : valide-le et le champ s'ajoute au texte sous forme de pastille. Tu peux aussi taper le nom jusqu'au crochet fermant, par exemple `[Numéro de dossier]`. Le champ est ensuite proposé dans la liste des données, et il est demandé à la création de chaque souscription.

![Un nouveau champ proposé par le menu](/aide/rediger-le-modele-de-contrat/modele-contrat-07-nouveau-champ.png)

![Le texte du contrat avec ses données et son nouveau champ](/aide/rediger-le-modele-de-contrat/modele-contrat-08-texte-rempli.png)

### 6. Choisis les champs que le contributeur remplit lui-même

Sous le texte, le champ **Champs remplis par le contributeur** liste tes nouveaux champs. Ceux que tu choisis ici seront complétés par le contributeur avant qu'il signe, au lieu de l'être par toi. Par défaut (**Aucun champ délégué au contributeur**), c'est toi qui renseignes chaque champ à la création de la souscription. Certaines données sont déjà remplies par le contributeur sans que tu aies à le préciser, par exemple l'**Adresse de facturation** quand tu lui laisses saisir ses informations.

![La liste des champs qu'on peut confier au contributeur](/aide/rediger-le-modele-de-contrat/modele-contrat-09-champs-menu.png)

![Un champ confié au contributeur](/aide/rediger-le-modele-de-contrat/modele-contrat-10-champs-choisis.png)

### 7. Termine le formulaire

Clique sur **Suivant** pour passer à l'étape **Avenants**, qui demande le modèle d'avenant (voir [Configurer le modèle d'avenant (paragraphes conditionnels)](/aide/modeles-de-souscription/configurer-le-modele-d-avenant)). Enregistre ensuite avec **Créer le modèle de souscription** pour un nouveau modèle, ou **Enregistrer les modifications** pour un modèle existant. Si un champ est incomplet, un message t'indique lequel corriger.

![Le bouton Créer le modèle de souscription](/aide/rediger-le-modele-de-contrat/modele-contrat-11-creer.png)

## Et ensuite ?

- **À la création d'une souscription** : Cascade te demande la valeur de chaque champ que tu n'as pas confié au contributeur, puis compose le contrat à partir de ton texte. Voir [Créer une souscription (inviter un contributeur)](/aide/souscriptions/creer-une-souscription).
- **Sur la page « Création du contrat »** : tu relis le texte, avec les données remplacées par leurs valeurs, et tu peux le retoucher à la main avant de l'envoyer. Voir [Envoyer un contrat en signature](/aide/contrats-et-signature/envoyer-un-contrat-en-signature).

![Le contrat composé pour un contributeur, prêt à être relu](/aide/rediger-le-modele-de-contrat/modele-contrat-12-contrat-genere.png)

- **Du côté du contributeur** : il reçoit le contrat par e-mail, complète les champs que tu lui as confiés, puis le signe. Voir [Signer un contrat (contributeur)](/aide/contrats-et-signature/signer-un-contrat).
- **Un contrat déjà créé garde son texte** : modifier le modèle ensuite ne change pas les contrats déjà créés. Pour changer une souscription après signature, voir [Faire un avenant](/aide/souscriptions/faire-un-avenant).

## Bon à savoir

- Le champ **Modèle** est obligatoire : sans texte, tu ne peux pas passer à l'étape suivante.
- Toutes les données sont toujours proposées, même celles que ton modèle n'alimente pas (le préavis de prélèvement sans prélèvement, par exemple). Quand une valeur manque, le nom de la donnée (par exemple « Adresse de facturation ») s'affiche à la place dans le contrat : repère-la à la relecture, avant d'envoyer.
- Les montants et le taux sont écrits sans unité : écris toi-même « € HT », « € TTC » ou « % » après la donnée.
- Un nouveau champ créé par le menu perd les accents de son nom (« Numéro de dossier » devient « Numero De Dossier »). Pour le garder intact, tape son nom complet entre crochets avec les accents.
- Les majuscules ne comptent pas dans une donnée tapée entre crochets, mais l'orthographe du nom doit rester la même partout dans le texte, pour que ce soit un seul champ.
- Les paragraphes du modèle d'avenant utilisent les mêmes données entre crochets : voir [Configurer le modèle d'avenant (paragraphes conditionnels)](/aide/modeles-de-souscription/configurer-le-modele-d-avenant).
- Pour modifier le texte d'un modèle existant : voir [Modifier un modèle de souscription](/aide/modeles-de-souscription/modifier-un-modele-de-souscription).

## Questions fréquentes

::accordion
:::accordion-item{label="J'ai tapé « [Nom] » à la main et le contrat n'affiche pas le nom du contributeur."}
Une donnée tapée à la main avec le nom du menu est traitée comme un nouveau champ. Supprime-la et insère la donnée avec le bouton **Données de publipostage** ou en choisissant dans le menu qui s'ouvre avec le crochet.
:::
:::accordion-item{label="Une information du contrat est remplacée par son titre, par exemple « Date de fin »."}
La valeur n'existe pas pour ce contributeur (ici, la souscription n'a pas de date de fin). Renseigne-la dans la souscription, ou retouche le texte sur la page « Création du contrat » avant l'envoi.
:::
:::accordion-item{label="Comment faire remplir une information par le contributeur lui-même ?"}
Crée un nouveau champ à l'étape 5, puis choisis-le dans **Champs remplis par le contributeur**.
:::
::
