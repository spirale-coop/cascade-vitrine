---
title: "Faire un avenant"
module: "Souscriptions"
moduleSlug: souscriptions
order: 5
actors: ["Gérant"]
enBref: "Modifie une souscription dont le contributeur a déjà signé : l'application crée une nouvelle version et génère un avenant, que tu envoies en signature (ou valides sans signature)."
where: "Souscriptions › (le contributeur) › Enregistrer"
status: review
needs: ["envoyer-un-contrat-en-signature", "configurer-le-modele-d-avenant"]
glossary: ["avenant", "contrat", "contributeur", "contribution", "date-de-fin", "date-de-prise-d-effet", "modele-d-avenant", "montant-ht", "signataire", "souscription", "version"]
video: ""
videoStatus: none
---

## Avant de commencer

- Le contributeur doit avoir **déjà signé** son contrat (ou un avenant précédent). Tant qu'il n'a pas signé, modifier la souscription la change directement, sans avenant : voir [Envoyer un contrat en signature](/aide/contrats-et-signature/envoyer-un-contrat-en-signature) et [Signer un contrat (contributeur)](/aide/contrats-et-signature/signer-un-contrat).
- Le modèle de souscription doit avoir un modèle d'avenant : au moins un en-tête, un pied de page ou un paragraphe. Sinon l'application refuse la modification. Voir [Configurer le modèle d'avenant (paragraphes conditionnels)](/aide/modeles-de-souscription/configurer-le-modele-d-avenant).
- Tu ne peux modifier que la dernière version de la souscription, et seulement si elle n'est pas terminée. Une souscription ponctuelle ne peut pas faire l'objet d'un avenant.

## Étapes

### 1. Ouvre la souscription

Dans le menu, va dans **Souscriptions**, puis clique sur le nom du contributeur. La page s'ouvre sur la dernière version de la souscription, avec l'**Historique** de ses versions en haut.

![La liste des souscriptions, avec le nom du contributeur à ouvrir](/aide/faire-un-avenant/faire-un-avenant-01-liste.png)

### 2. Modifie ce qui change

Change les valeurs concernées dans le formulaire :

- **Prise d'effet** : la date à partir de laquelle l'avenant s'applique. La liste propose les débuts de période (le 1er du mois pour une récurrence mensuelle, par exemple). Tu ne peux pas choisir une date antérieure à la prise d'effet de la version actuelle ; la même date est acceptée, pour ne changer que le montant.
- **Date de fin**, **Montant HT** (le montant TTC se recalcule), **Moyen de paiement** et les champs de la section **Contrat de souscription**.
- Les **Informations du contributeur**.

Seuls la **Date de fin**, le **Montant HT** et les champs du contrat que le modèle d'avenant a choisis comme déclencheurs sont repris dans l'avenant. Les autres changements créent bien une nouvelle version, mais n'ajoutent aucun paragraphe à l'avenant.

![Le champ Prise d'effet, avec la liste des débuts de période proposés](/aide/faire-un-avenant/faire-un-avenant-02-prise-effet.png)

![Un nouveau Montant HT saisi, avec son équivalent TTC](/aide/faire-un-avenant/faire-un-avenant-03-montant.png)

### 3. Enregistre et confirme

Clique sur **Enregistrer**. Si tu as changé un élément qui déclenche un paragraphe de l'avenant, une fenêtre **Confirmer les modifications** liste chaque changement : le champ, sa valeur avant et sa valeur après. Vérifie-les, puis clique sur **Confirmer et enregistrer**, ou sur **Annuler** pour revenir au formulaire sans rien enregistrer.

Si aucun élément déclencheur n'a changé, la fenêtre n'apparaît pas et la modification est enregistrée directement.

![La fenêtre de confirmation avec le Montant HT avant et après](/aide/faire-un-avenant/faire-un-avenant-04-confirmation.png)

### 4. Relis l'avenant

Après l'enregistrement, tu arrives sur la page **Avenant au contrat**, suivie du nom du contributeur. Le bloc **Éléments modifiés** rappelle les changements (champ, avant, après). En dessous, le **Texte de l'avenant** est généré à partir du modèle d'avenant : l'en-tête, les paragraphes dont un déclencheur a changé, puis le pied de page. Tu peux le modifier librement avant l'envoi.

![Le bloc Éléments modifiés au-dessus du texte de l'avenant](/aide/faire-un-avenant/faire-un-avenant-05-elements-modifies.png)

### 5. Envoie l'avenant en signature

Clique sur **Envoyer en signature**, puis confirme dans la fenêtre **Envoyer l'avenant en signature ?** : le contributeur reçoit un e-mail avec l'avenant à signer. Tu reviens à la liste des souscriptions.

![Les boutons Envoyer en signature et Valider sans signature](/aide/faire-un-avenant/faire-un-avenant-06-envoyer.png)

![La fenêtre de confirmation de l'envoi](/aide/faire-un-avenant/faire-un-avenant-07-confirmer-envoi.png)

Si l'avenant est déjà signé par ailleurs, par exemple sur papier, clique plutôt sur **Valider sans signature** et confirme dans la fenêtre **Considérer l'avenant comme déjà signé ?**. L'avenant est alors considéré comme signé par les deux parties, sans qu'aucun e-mail ne soit envoyé.

![La fenêtre de confirmation de Valider sans signature](/aide/faire-un-avenant/faire-un-avenant-08-sans-signature.png)

### 6. Suis la signature

Retourne dans **Souscriptions** et ouvre le contributeur : l'avenant est une nouvelle ligne de l'**Historique**, avec son statut (**À signer par le contributeur**, **À signer par le signataire**, puis **Signé le** suivi de la date). Survole la ligne pour voir les éléments modifiés et ouvrir le document avec **Voir l'avenant**.

![L'historique d'une souscription dont l'avenant attend la signature du contributeur](/aide/faire-un-avenant/faire-un-avenant-09-historique.png)

## Et ensuite ?

- **Signature du contributeur** : il reçoit un e-mail avec un lien pour lire et signer l'avenant, sans compte à créer. Voir [Signer un contrat (contributeur)](/aide/contrats-et-signature/signer-un-contrat). Si besoin, relance-le : voir [Relancer l'invitation à signer](/aide/contrats-et-signature/relancer-l-invitation-a-signer).
- **Contre-signature** : une fois le contributeur passé, un e-mail est envoyé au signataire du modèle pour contresigner. Voir [Contresigner un contrat (signataire)](/aide/contrats-et-signature/contresigner-un-contrat).
- **Quand l'avenant est signé des deux côtés** : le document signé est généré, et le signataire, l'administrateur de la cascade et le contributeur sont prévenus par e-mail. Les contributions automatiques non facturées à partir de la prise d'effet sont supprimées, puis recréées avec les nouvelles valeurs. Voir [Générer automatiquement les contributions récurrentes](/aide/contributions/generer-automatiquement-les-contributions-recurrentes).
- Avec **Valider sans signature**, la même chose se produit tout de suite, sans e-mail.
- Jusqu'à la signature, la souscription continue de produire ses contributions avec les anciennes valeurs (voir [Ce que Cascade fait chaque jour](/aide/general/ce-que-cascade-fait-chaque-jour)).

## Bon à savoir

- Un avenant est créé uniquement si le contributeur a déjà signé. Dès qu'il a signé, une modification crée une nouvelle version, même si le signataire n'a pas encore contresigné.
- Les contributions déjà facturées ne sont jamais modifiées ni supprimées : seules les contributions automatiques non facturées sont remplacées. Les contributions créées à la main sont conservées.
- Le lien reçu par le contributeur expire 10 jours après la prise d'effet de l'avenant. Choisis donc une date d'effet récente : avec une date plus ancienne, le lien peut être périmé dès l'envoi. Le lien du signataire n'expire pas.
- Les informations du contributeur (nom, e-mail, raison sociale, adresse…) sont enregistrées directement : elles ne sont pas versionnées et n'apparaissent pas dans les éléments modifiés.
- Une fois l'avenant envoyé, son texte est figé : modifier ensuite la souscription ne le réécrit pas. Pour repartir de zéro tant qu'il n'est pas signé des deux côtés, clique sur **Annuler** (sur la ligne de l'avenant dans l'**Historique**, ou en haut de la page) : l'avenant est supprimé. Une fois signé, il ne peut plus être annulé. Voir [Annuler une souscription](/aide/souscriptions/annuler-une-souscription).
- Si tu quittes la page de l'avenant sans l'envoyer, la nouvelle version existe déjà : ouvre le contributeur et clique sur **Créer l'avenant** dans l'**Historique**.
- Le formulaire est grisé, sans possibilité d'enregistrer, quand un avenant existe déjà pour la version affichée (alerte **Avenant existant**), quand la souscription est terminée (alerte **Souscription expirée**) ou quand elle est ponctuelle. Pour le détail des champs, voir [Modifier une souscription](/aide/souscriptions/modifier-une-souscription).
- Le changement de moyen de paiement n'est pas encore proposé comme déclencheur dans les modèles d'avenant : pour l'instant, il crée une nouvelle version mais n'ajoute pas de paragraphe.

## Questions fréquentes

::accordion
:::accordion-item{label="J'ai modifié la souscription, mais aucun avenant n'a été proposé."}
Le contributeur n'a probablement pas encore signé son contrat : tant que c'est le cas, la souscription est modifiée directement. Vérifie le statut dans l'**Historique**.
:::
:::accordion-item{label="L'application refuse ma modification et parle d'un modèle d'avenant."}
Le modèle de souscription n'a ni en-tête, ni pied de page, ni paragraphe d'avenant. Complète-le d'abord : voir [Configurer le modèle d'avenant (paragraphes conditionnels)](/aide/modeles-de-souscription/configurer-le-modele-d-avenant).
:::
:::accordion-item{label="Je n'ai changé que la date ou le moyen de paiement : que contient l'avenant ?"}
Seulement l'en-tête et le pied de page du modèle, car aucun paragraphe n'est déclenché. Relis-le avant de l'envoyer.
:::
::
