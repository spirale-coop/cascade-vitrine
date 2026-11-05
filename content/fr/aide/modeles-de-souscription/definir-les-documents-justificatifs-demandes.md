---
title: "Définir les documents justificatifs demandés"
module: "Modèles de souscription"
moduleSlug: modeles-de-souscription
order: 5
actors: ["Gérant"]
enBref: "Désigne les documents que le contributeur doit déposer avant de signer son contrat : tu les listes une fois dans le modèle de souscription, et ils sont demandés à chaque contributeur."
where: "Modèles de souscription › (le modèle) › Contrat › Documents"
status: review
needs: ["creer-un-modele-de-souscription"]
glossary: ["contrat", "contributeur", "documents-justificatifs", "gerant", "modele-de-contrat", "modele-de-souscription", "signataire", "souscription"]
video: ""
videoStatus: none
---

## Avant de commencer

- Il te faut un modèle de souscription dont le mode d'adhésion est **Contrat** : la liste des documents se règle à l'étape **Contrat** du modèle, qui n'existe pas en **Adhésion simple**. Voir [Créer un modèle de souscription](/aide/modeles-de-souscription/creer-un-modele-de-souscription) ; pour changer un modèle existant, voir [Modifier un modèle de souscription](/aide/modeles-de-souscription/modifier-un-modele-de-souscription).
- Prépare la liste : un nom par document, tel que le contributeur le lira (par exemple « Pièce d'identité » ou « Attestation d'assurance »).

## Étapes

### 1. Ouvre le modèle de souscription

Dans le menu, va dans **Modèles de souscription**, puis clique sur le nom du modèle à modifier. Pour un nouveau modèle, clique sur **Créer un modèle** : le formulaire est le même.

![La liste des modèles de souscription, avec le modèle à ouvrir](/aide/definir-les-documents-justificatifs-demandes/documents-justificatifs-01-liste-modeles.png)

### 2. Vérifie le mode d'adhésion et passe à l'étape Contrat

Sur la première étape, **Configuration générale**, descends jusqu'à **Mode d'adhésion** et choisis **Contrat** (« Le contributeur doit signer un contrat électroniquement »). Les étapes **Contrat** et **Avenants** apparaissent alors en haut du formulaire. Clique sur **Suivant** : Cascade vérifie l'étape avant de te laisser avancer.

![Le Mode d'adhésion réglé sur Contrat et le bouton Suivant](/aide/definir-les-documents-justificatifs-demandes/documents-justificatifs-02-mode-adhesion.png)

### 3. Ajoute les documents demandés

Sur l'étape **Contrat**, la section **Documents** t'invite à désigner les documents que le contributeur doit t'envoyer pour valider l'adhésion. Clique sur **Ajouter un document** et tape son nom dans le champ **Document** ; recommence pour chaque document. La croix à droite d'une ligne la supprime.

Il n'y a pas de limite au nombre de documents. Les lignes laissées vides sont ignorées à l'enregistrement. Chaque document porte un nom différent : le nom sert d'identifiant du document.

![La section Documents avec deux documents déjà listés](/aide/definir-les-documents-justificatifs-demandes/documents-justificatifs-03-documents.png)

![Un document ajouté dans la liste](/aide/definir-les-documents-justificatifs-demandes/documents-justificatifs-04-ajout.png)

### 4. Rappelle les documents dans le contrat (facultatif)

Dans le texte du modèle de contrat, la donnée de publipostage **Documents requis pour adhérer** insère la liste de tes documents dans le contrat envoyé au contributeur. Voir [Rédiger le modèle de contrat (variables entre crochets)](/aide/modeles-de-souscription/rediger-le-modele-de-contrat).

![La donnée Documents requis pour adhérer dans le texte du modèle de contrat](/aide/definir-les-documents-justificatifs-demandes/documents-justificatifs-05-publipostage.png)

### 5. Enregistre le modèle

Clique sur **Suivant** jusqu'à la dernière étape, **Avenants**, puis sur **Enregistrer les modifications** (pour un nouveau modèle, le bouton s'appelle **Créer le modèle de souscription**). Tu reviens à la liste des modèles de souscription. Tant que tu n'as pas enregistré, rien n'est modifié.

![Le bouton Enregistrer les modifications, sur la dernière étape](/aide/definir-les-documents-justificatifs-demandes/documents-justificatifs-06-enregistrer.png)

## Et ensuite ?

Les documents ne sont demandés qu'au moment de la signature du contrat. Voici le parcours, du côté du contributeur puis du tien.

- **Avant la signature** : quand tu envoies un contrat en signature, la page de préparation rappelle la liste dans une carte **Documents que le contributeur doit vous envoyer**. Voir [Envoyer un contrat en signature](/aide/contrats-et-signature/envoyer-un-contrat-en-signature).
- **Côté contributeur** : il n'a pas de compte, il agit depuis le lien reçu par e-mail. Sur la page du contrat, une carte **Justificatifs à fournir** affiche un champ par document, tous obligatoires. Il peut déposer un fichier PDF, JPEG ou PNG (glisser-déposer ou clic). Il doit déposer tous les documents avant de pouvoir cliquer sur **Signer** ; sinon l'écran lui indique « Envoyez d'abord tous les justificatifs requis ci-dessus pour pouvoir signer » et un message « Ce justificatif est requis. » apparaît sous chaque champ vide. S'il doit d'abord compléter ses informations, les documents ne lui sont demandés qu'ensuite. Voir [Signer un contrat (contributeur)](/aide/contrats-et-signature/signer-un-contrat) et [Déposer des documents justificatifs](/aide/documents-justificatifs/deposer-des-documents-justificatifs).
- **Dès qu'il a signé** : le contrat passe au statut **Documents à valider**. Tu reçois un e-mail avec un lien vers la page **Documents à valider** (voir plus bas à qui il est envoyé). Le contributeur reçoit un e-mail lui disant que ses documents sont en cours de validation, et sa page affiche « Vos pièces justificatives sont en cours de validation. Le signataire signera ensuite le contrat. »
- **Ce que tu vois** : l'entrée **Documents à valider** apparaît dans le menu, avec un badge qui compte les souscriptions concernées, uniquement tant qu'au moins un document attend une décision. La page liste le contributeur, la date de prise d'effet, le modèle de souscription et les documents à valider. Un clic sur une ligne ouvre une fenêtre : tu ouvres chaque fichier, puis tu choisis **Accepté** ou **Rejeté**. Un rejet demande une **Raison du rejet**, communiquée au contributeur. Tu valides tous les documents en attente d'une souscription en une seule fois avec **Confirmer**. Voir [Valider ou rejeter des documents justificatifs](/aide/documents-justificatifs/valider-ou-rejeter-des-documents-justificatifs). Sur la page de la souscription, la section **Documents justificatifs** garde chaque document avec son statut (**En attente**, **Accepté** ou **Rejeté**) et un bouton **Télécharger**.
- **Si tout est accepté** : le contrat attend la signature du signataire, qui reçoit son lien par e-mail. Voir [Contresigner un contrat (signataire)](/aide/contrats-et-signature/contresigner-un-contrat). Comme des documents sont demandés, le contributeur ne reçoit pas l'e-mail « contrat en cours de signature » : celui sur la validation de ses documents en tient lieu.
- **Si au moins un document est rejeté** : le contrat passe au statut **Documents à mettre à jour**. Le contributeur reçoit un e-mail qui liste les documents rejetés avec ta raison, et le même lien. Il redépose seulement les documents rejetés, signe de nouveau, et le cycle de validation recommence.

## Bon à savoir

- Tous les documents de la liste sont obligatoires : il n'existe pas de document facultatif. Cascade ne vérifie pas le contenu d'un fichier, c'est toi qui juges à la validation.
- Cascade n'impose pas de taille maximale de fichier au contributeur ; les formats proposés sont PDF, JPEG et PNG.
- Si tu passes un modèle en **Adhésion simple**, la liste des documents est vidée à l'enregistrement.
- Les documents ne sont jamais demandés avec [Ajouter un contrat sans signature (déjà signé sur papier)](/aide/contrats-et-signature/ajouter-un-contrat-sans-signature).
- La liste est lue sur le modèle au moment où le contributeur ouvre la page de signature : modifier la liste concerne donc aussi les contrats déjà envoyés mais pas encore signés. N'y compte pas pour récupérer un document manquant chez un contributeur qui a déjà signé. Un document déjà déposé reste enregistré sous son nom, même si tu retires ou renommes ensuite la ligne.
- Le lien reçu par le contributeur expire 10 jours après la date de prise d'effet de la souscription. Voir [Relancer l'invitation à signer](/aide/contrats-et-signature/relancer-l-invitation-a-signer) : pour l'instant, renvoyer l'invitation génère un lien qui garde cette même date limite.
- L'e-mail « documents à valider » part vers un seul gérant, le premier de l'organisation, et pas vers tous : les autres gérants voient simplement l'entrée dans le menu.
- Un fichier envoyé par le contributeur mais jamais soumis avec sa signature est supprimé automatiquement, entre 24 et 48 heures après son dépôt (voir [Ce que Cascade fait chaque jour](/aide/general/ce-que-cascade-fait-chaque-jour)).

## Questions fréquentes

::accordion
:::accordion-item{label="Puis-je rendre un document facultatif ?"}
Non, pour l'instant. Tout ce que tu ajoutes à la liste doit être déposé avant la signature. Si un document n'est utile que dans certains cas, demande-le à part, hors de Cascade.
:::
:::accordion-item{label="Le contributeur n'arrive plus à ouvrir la page de dépôt."}
Vérifie la date de prise d'effet de sa souscription : son lien expire 10 jours après. Renvoyer l'invitation ne prolonge pas ce délai pour l'instant.
:::
:::accordion-item{label="J'ai ajouté un document alors que des contributeurs ont déjà signé : le redemande-t-on ?"}
Non, le contributeur qui a déjà signé n'est pas sollicité de nouveau, sauf si l'un de ses documents est rejeté. Demande-lui le document directement.
:::
::
