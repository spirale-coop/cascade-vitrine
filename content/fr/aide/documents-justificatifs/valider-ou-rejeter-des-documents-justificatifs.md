---
title: "Valider ou rejeter des documents justificatifs"
module: "Documents justificatifs"
moduleSlug: documents-justificatifs
order: 2
actors: ["Gérant"]
enBref: "Quand un contributeur a déposé ses documents en signant, tu les ouvres un par un et tu les acceptes ou les rejettes : c'est ta décision qui débloque la signature du contrat ou renvoie le contributeur redéposer ses pièces."
where: "Souscriptions › Documents à valider › (le contributeur)"
status: review
needs: ["definir-les-documents-justificatifs-demandes", "deposer-des-documents-justificatifs"]
glossary: ["contrat", "contributeur", "documents-justificatifs", "gerant", "signataire", "souscription"]
video: ""
videoStatus: none
---

## Avant de commencer

- Il faut qu'un contributeur ait déposé ses documents en signant son contrat : tant qu'il n'a pas signé, rien n'arrive dans ta liste. Voir [Déposer des documents justificatifs](/aide/documents-justificatifs/deposer-des-documents-justificatifs) ; les documents demandés se définissent dans le modèle de souscription, voir [Définir les documents justificatifs demandés](/aide/modeles-de-souscription/definir-les-documents-justificatifs-demandes).
- Tu vois les souscriptions de la cascade courante seulement : si tu gères plusieurs cascades, choisis d'abord la bonne. Voir [Changer de cascade courante](/aide/acces-et-compte/changer-de-cascade-courante).

## Étapes

### 1. Ouvre la page Documents à valider

Dans le menu, sous **Souscriptions**, clique sur **Documents à valider**. Cette entrée n'apparaît que lorsqu'au moins une souscription attend une décision, avec un badge qui compte ces souscriptions (et non les documents). Tu peux aussi y arriver depuis le lien de l'e-mail que Cascade t'envoie quand un contributeur a déposé ses documents.

La page liste une ligne par souscription : le **Contributeur**, la **Date de prise d'effet**, le **Modèle de souscription** et les **Documents à valider** (leurs noms). Les lignes sont classées par date de prise d'effet. Quand plus rien n'attend de décision, la page affiche « Aucun document en attente de validation. »

![La page Documents à valider quand aucun document n'attend de décision](/aide/valider-ou-rejeter-des-documents-justificatifs/valider-documents-01-liste-vide.png)

### 2. Ouvre la souscription à traiter

Clique sur la ligne du contributeur : une fenêtre s'ouvre, intitulée du nom du contributeur. Elle liste tous les documents de cette souscription qui attendent une décision.

### 3. Consulte chaque document

Chaque document est un bouton portant son nom, avec une icône de téléchargement. Clique dessus : le fichier s'ouvre dans un nouvel onglet. Regarde-le avant de te prononcer ; Cascade ne vérifie pas son contenu.

### 4. Accepte ou rejette chaque document

À droite de chaque document, choisis **Accepté** ou **Rejeté**. Aucun des deux n'est sélectionné au départ : tu dois te prononcer sur chaque document.

Si tu choisis **Rejeté**, le champ **Raison du rejet** apparaît (« Communiqué au contributeur »). Il est obligatoire et limité à 255 caractères. Explique ce qui ne va pas (« Pièce illisible, merci d'envoyer un scan plus net »), puisque le contributeur lira ce texte dans son e-mail et sur sa page.

### 5. Confirme

Clique sur **Confirmer**. Tous les documents de la souscription sont décidés d'un seul coup : Cascade refuse la confirmation tant qu'un document n'a pas de décision ou qu'un rejet n'a pas de raison. **Annuler** ferme la fenêtre sans rien changer.

Le message « Documents mis à jour » s'affiche. Tu restes sur la page **Documents à valider** s'il reste d'autres souscriptions à traiter ; sinon tu arrives sur la liste des souscriptions.

## Et ensuite ?

- **Si tout est accepté** : le contrat attend la signature du signataire. Chaque signataire désigné dans le modèle de souscription reçoit un e-mail avec son lien de signature. Le contributeur ne reçoit pas d'e-mail à ce moment-là. Voir [Contresigner un contrat (signataire)](/aide/contrats-et-signature/contresigner-un-contrat).
- **Si au moins un document est rejeté** : le contrat passe au statut **Documents à mettre à jour**. Le contributeur reçoit un e-mail qui liste les documents rejetés avec ta raison, et son lien. Il redépose seulement ces documents et signe de nouveau : la souscription revient alors dans ta liste, avec les nouveaux documents seulement. Les documents déjà acceptés ne sont pas redemandés. Voir [Déposer des documents justificatifs](/aide/documents-justificatifs/deposer-des-documents-justificatifs).
- **Trace** : sur la page de la souscription, la section **Documents justificatifs** garde chaque document avec son statut (**En attente**, **Accepté** ou **Rejeté**), la raison du rejet et un bouton **Télécharger**.
- Le contributeur est ensuite informé de la signature finale du contrat. Voir [Signer un contrat (contributeur)](/aide/contrats-et-signature/signer-un-contrat).

## Bon à savoir

- **Une décision est définitive.** Il n'existe pas d'écran pour revenir sur un document accepté ou rejeté. Si tu as rejeté par erreur, le contributeur devra redéposer le document ; si tu as accepté par erreur, il n'y a pas de moyen de le remettre en attente pour l'instant.
- **Toute la souscription d'un coup.** Tu ne peux pas valider un document et laisser les autres « pour plus tard » : la fenêtre les réunit tous.
- **Tous les gérants de la cascade** voient la page et peuvent décider, mais l'e-mail d'alerte « documents à valider » ne part qu'au premier gérant de l'organisation.
- **Seul le contrat initial** donne lieu à des documents à valider, pas un avenant. Voir [Faire un avenant](/aide/souscriptions/faire-un-avenant).
- Le badge du menu compte les souscriptions de la cascade courante qui attendent une décision.
- Une fois les documents décidés, la souscription se retrouve dans la liste des souscriptions. Voir [Consulter et filtrer les souscriptions](/aide/souscriptions/consulter-et-filtrer-les-souscriptions).

## Questions fréquentes

::accordion
:::accordion-item{label="L'entrée « Documents à valider » n'est pas dans mon menu."}
Elle n'apparaît que quand une souscription de la cascade courante attend une décision. Vérifie aussi que tu es dans la bonne cascade, et que le contributeur a bien signé son contrat avec ses documents.
:::
:::accordion-item{label="J'ai rejeté un document par erreur."}
Il n'y a pas d'annulation. Préviens le contributeur : il recevra l'e-mail de rejet avec ta raison, redéposera le document et signera de nouveau. Il reviendra dans ta liste.
:::
:::accordion-item{label="Le contributeur dit n'avoir rien reçu après mon rejet."}
L'e-mail part avec le lien de sa page de signature, qui expire 10 jours après la date de prise d'effet de la souscription. Voir [Définir les documents justificatifs demandés](/aide/modeles-de-souscription/definir-les-documents-justificatifs-demandes).
:::
::
