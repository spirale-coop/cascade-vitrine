---
title: "Configurer le modèle d'avenant (paragraphes conditionnels)"
module: "Modèles de souscription"
moduleSlug: modeles-de-souscription
order: 3
actors: ["Gérant"]
enBref: "Prépare le texte des avenants d'un modèle de souscription : un en-tête, des paragraphes qui n'apparaissent que si une donnée précise du contrat change (montant, date de fin…), puis un pied de page."
where: "Modèles de souscription › (le modèle) › Avenants"
status: review
needs: ["creer-un-modele-de-souscription"]
glossary: ["avenant", "date-de-fin", "modele-d-avenant", "modele-de-contrat", "modele-de-souscription", "montant-ht", "souscription", "version"]
video: ""
videoStatus: none
---

## Avant de commencer

- Le modèle de souscription doit être en mode d'adhésion **Contrat** : l'étape **Avenants** n'existe pas en **Adhésion simple**. Voir [Créer un modèle de souscription](/aide/modeles-de-souscription/creer-un-modele-de-souscription).
- Rédige d'abord le contrat : les champs que tu y as créés avec **Nouveau champ** pourront ensuite déclencher un paragraphe d'avenant. Voir [Rédiger le modèle de contrat (variables entre crochets)](/aide/modeles-de-souscription/rediger-le-modele-de-contrat).
- Tu peux remplir cette étape à la création du modèle ou plus tard, en modifiant le modèle : voir [Modifier un modèle de souscription](/aide/modeles-de-souscription/modifier-un-modele-de-souscription). Fais-le avant la première modification d'une souscription signée : sans contenu d'avenant, Cascade refuse cette modification.

## Étapes

### 1. Ouvre l'étape Avenants

Dans le menu, va dans **Modèles de souscription** et clique sur le nom du modèle. Le formulaire **Modifier le modèle de souscription** s'ouvre sur **Configuration générale** : clique deux fois sur **Suivant** pour arriver à **Avenants**, la troisième étape. À la création d'un modèle, c'est la même troisième étape, après **Contrat**.

![La liste des modèles de souscription : le nom du modèle à ouvrir](/aide/configurer-le-modele-d-avenant/avenant-modele-01-ouvrir.png)

![L'étape Avenants d'un modèle existant](/aide/configurer-le-modele-d-avenant/avenant-modele-02-edition-avenants.png)

En haut de l'étape, un rappel explique le fonctionnement : un modèle d'avenant se compose d'un en-tête, d'un ou plusieurs paragraphes, puis d'un pied de page. À la création d'un modèle, l'étape propose déjà un paragraphe vide.

![L'étape Avenants à la création d'un modèle : le rappel et le paragraphe vide](/aide/configurer-le-modele-d-avenant/avenant-modele-03-presentation.png)

### 2. Rédige l'en-tête

L'**En-tête** est le premier texte de chaque avenant, toujours présent. Il est facultatif. Tu y insères des données du contrat qui seront remplies toutes seules : tape `[` ou clique sur le bouton **Données de publipostage** de la barre d'outils de l'éditeur, puis choisis par exemple **Nom**. Ce sont les mêmes données que dans le modèle de contrat. Dans l'avenant, elles prennent la valeur de la nouvelle version de la souscription.

![L'en-tête avec la donnée Nom insérée](/aide/configurer-le-modele-d-avenant/avenant-modele-04-en-tete.png)

### 3. Rédige un paragraphe et choisis ce qui le déclenche

Un paragraphe n'apparaît dans un avenant que si l'une des valeurs que tu lui associes a été modifiée. Écris son texte dans **Paragraphe 1** (le texte est obligatoire), avec les données entre crochets si besoin. Puis, dans **Le paragraphe s'affiche si l'une de ces valeurs est modifiée :**, choisis une ou plusieurs valeurs. Sont proposées, pour l'instant :

- **Date de fin** ;
- **Montant HT** ;
- chaque champ que tu as créé avec **Nouveau champ** (ici **Emplacement**).

Avec plusieurs valeurs, le paragraphe apparaît dès que l'une d'elles change.

![La liste des valeurs qui peuvent déclencher un paragraphe](/aide/configurer-le-modele-d-avenant/avenant-modele-05a-declencheurs.png)

![Un paragraphe déclenché par le montant HT](/aide/configurer-le-modele-d-avenant/avenant-modele-05b-paragraphe.png)

### 4. Ajoute d'autres paragraphes

Clique sur **Ajouter un paragraphe d'avenant** pour en créer un nouveau, avec ses propres valeurs déclencheuses. Les flèches à droite d'un paragraphe le montent ou le descendent : l'ordre du modèle est l'ordre dans l'avenant. La croix le supprime.

![Trois paragraphes et le bouton pour en ajouter](/aide/configurer-le-modele-d-avenant/avenant-modele-06-paragraphes.png)

### 5. Rédige le pied de page

Le **Pied de page** est le dernier texte de chaque avenant, toujours présent lui aussi, et facultatif. Il sert par exemple à rappeler que le reste du contrat ne change pas.

![Le pied de page](/aide/configurer-le-modele-d-avenant/avenant-modele-07-pied-de-page.png)

### 6. Enregistre le modèle

Clique sur **Enregistrer les modifications** (en modification) ou sur **Créer le modèle de souscription** (à la création), en bas de l'étape. Tu reviens à la liste des modèles, avec une confirmation.

![Le bouton final de l'étape Avenants](/aide/configurer-le-modele-d-avenant/avenant-modele-08-enregistrer.png)

![Le modèle dans la liste, après l'enregistrement](/aide/configurer-le-modele-d-avenant/avenant-modele-09-liste.png)

## Et ensuite ?

- Rien n'est envoyé à personne : le modèle d'avenant est seulement mémorisé.
- Il sert la prochaine fois que tu modifies une souscription de ce modèle dont le contributeur a déjà signé le contrat. Cascade crée alors une nouvelle version de la souscription et te propose un avenant dont le texte est prérempli : en-tête, puis les paragraphes dont une valeur déclencheuse a changé par rapport à la version précédente, puis pied de page. Un tableau **Éléments modifiés** montre l'avant et l'après, et tu peux corriger le texte avant de choisir **Envoyer en signature** ou **Valider sans signature**. Tout le parcours est dans [Faire un avenant](/aide/souscriptions/faire-un-avenant).
- Tant que le contributeur n'a pas signé le contrat, une modification s'applique directement à la souscription : il n'y a pas d'avenant et ce modèle n'intervient pas.
- Changer le modèle d'avenant n'affecte pas les avenants déjà créés. Il s'applique aux prochains avenants, y compris pour les souscriptions déjà existantes de ce modèle.

## Bon à savoir

- Le texte d'un paragraphe est obligatoire : un paragraphe laissé vide empêche d'enregistrer le modèle. L'en-tête et le pied de page peuvent rester vides.
- L'écran marque le choix des valeurs déclencheuses comme obligatoire, mais l'enregistrement fonctionne sans. Un paragraphe sans valeur ne s'affichera jamais : choisis-en toujours au moins une.
- Il faut au moins un en-tête, un pied de page ou un paragraphe. Sans rien, Cascade refuse de modifier une souscription dont le contributeur a signé, avec le message « Ce modèle de souscription ne définit pas encore de modèle d'avenant. Définissez-en un avant de pouvoir générer des avenants. »
- Pour l'instant, seuls la date de fin, le montant HT et les champs créés avec **Nouveau champ** peuvent déclencher un paragraphe. Le moyen de paiement, par exemple, n'est pas encore proposé.
- Les données insérées dans un avenant prennent la valeur de la nouvelle version : tu ne peux pas y afficher l'ancienne valeur. L'avant et l'après se voient dans le tableau **Éléments modifiés**, au-dessus du texte de l'avenant.
- Si le changement ne touche aucune valeur déclencheuse, l'avenant ne contient que l'en-tête et le pied de page.

## Questions fréquentes

::accordion
:::accordion-item{label="Je ne vois pas l'étape Avenants."}
Elle n'apparaît que si le mode d'adhésion du modèle est **Contrat**. En **Adhésion simple**, le formulaire n'a qu'une étape.
:::
:::accordion-item{label="Mon avenant ne contient pas le paragraphe que j'attendais."}
Vérifie les valeurs choisies sous ce paragraphe : il n'apparaît que si l'une d'elles a changé entre la version précédente et la nouvelle. Un changement d'un autre élément ne le déclenche pas.
:::
:::accordion-item{label="Puis-je afficher l'ancien montant dans l'avenant ?"}
Pas pour l'instant : le texte ne reçoit que la nouvelle valeur. L'ancien montant figure dans le tableau **Éléments modifiés** qui accompagne l'avenant.
:::
::
