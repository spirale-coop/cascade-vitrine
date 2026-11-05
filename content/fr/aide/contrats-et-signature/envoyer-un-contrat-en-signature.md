---
title: "Envoyer un contrat en signature"
module: "Contrats et signature"
moduleSlug: contrats-et-signature
order: 3
actors: ["Gérant"]
enBref: "Relis le contrat généré pour une souscription, modifie-le si besoin, puis envoie-le au contributeur pour qu'il le signe en ligne. Tu peux aussi l'ajouter sans signature si le contrat est déjà signé."
where: "Souscriptions › Créer une souscription › Contrat"
status: review
needs: ["creer-une-souscription", "rediger-le-modele-de-contrat"]
glossary: ["annexes-au-contrat", "avenant", "contrat", "contributeur", "documents-justificatifs", "message-d-invitation", "modele-de-contrat", "modele-de-souscription", "signataire", "souscription"]
video: ""
videoStatus: none
---

## Avant de commencer

- Le modèle de souscription doit être en mode d'adhésion **Contrat**, avec un modèle de contrat rédigé. Voir [Créer un modèle de souscription](/aide/modeles-de-souscription/creer-un-modele-de-souscription) et [Rédiger le modèle de contrat (variables entre crochets)](/aide/modeles-de-souscription/rediger-le-modele-de-contrat). Avec **Adhésion simple**, le formulaire de souscription s'arrête à **Créer** : il n'y a ni contrat ni cette étape.
- Tu arrives sur cette page à la fin de [Créer une souscription (inviter un contributeur)](/aide/souscriptions/creer-une-souscription). Si tu as quitté la page avant d'envoyer le contrat, tu peux y revenir : voir « Bon à savoir ».

## Étapes

### 1. Arrive sur la page du contrat

Dans le formulaire **Nouveau contributeur**, remplis les deux premières étapes (**Informations contribution**, **Informations contributeur**), puis clique sur **Créer**. Tu arrives sur la troisième étape, **Contrat**, dont le titre est « Création du contrat » suivi du nom du contributeur.

À l'étape précédente, la question **Qui renseigne les informations ci-dessous ?** décide de ce que tu pourras faire ici :

- **Je remplis moi-même les informations de mon contributeur** : le contrat est complet, tu peux l'envoyer en signature ou l'ajouter sans signature.
- **Mon contributeur va remplir ses informations lui-même** : le contributeur complète ses informations avant de signer, et tu ne peux qu'envoyer une invitation.

![Le choix de la personne qui renseigne les informations du contributeur](/aide/envoyer-un-contrat-en-signature/envoyer-contrat-signature-01-qui-renseigne.png)

### 2. Relis le contrat

Le champ **Contrat** contient le texte généré à partir du modèle de contrat de la souscription : le nom du contributeur, le montant, les dates et les autres variables y sont déjà remplis. Relis-le, et modifie-le si besoin : ce que tu envoies est exactement ce texte, avec la mise en forme de l'éditeur (titres, listes, gras, italique, souligné, liens). Le champ est obligatoire.

Une variable dont la valeur n'est pas connue (par exemple la date de fin quand la souscription n'en a pas) reste affichée sous son nom : remplace-la ou retire-la avant d'envoyer.

![Le champ Contrat prérempli à partir du modèle de contrat](/aide/envoyer-un-contrat-en-signature/envoyer-contrat-signature-02-relire.png)

### 3. Insère un champ si besoin

Pour ajouter une information de la souscription dans le texte, clique sur le bouton **[ ]** de la barre d'outils de l'éditeur et choisis le champ dans la liste : nom, e-mail, dates, taux de TVA, montants, adresse de facturation, documents requis, champs personnalisés du modèle…

![La liste des champs insérables dans le contrat](/aide/envoyer-un-contrat-en-signature/envoyer-contrat-signature-03-champs.png)

### 4. Vérifie les annexes et les documents demandés

Sous le texte, deux encadrés apparaissent seulement quand le modèle de souscription le prévoit :

- **Annexes envoyées** : les fichiers joints au contrat, que tu peux ouvrir. Le contributeur les retrouve sur sa page de signature.
- **Documents que le contributeur doit vous envoyer** : la liste des pièces qu'il devra déposer en signant. Voir [Définir les documents justificatifs demandés](/aide/modeles-de-souscription/definir-les-documents-justificatifs-demandes).

Ces deux encadrés sont informatifs : tu ne peux pas les modifier ici.

![L'encadré des documents que le contributeur doit envoyer](/aide/envoyer-un-contrat-en-signature/envoyer-contrat-signature-04-documents.png)

### 5. Envoie le contrat en signature

Dans l'encadré **Mon contributeur n'a pas encore signé de contrat**, clique sur **Envoyer en signature**. Une fenêtre te demande de confirmer : **Envoyer le contrat en signature ?** Clique sur **Confirmer**.

![Le bouton Envoyer en signature](/aide/envoyer-un-contrat-en-signature/envoyer-contrat-signature-05-envoyer.png)

![La fenêtre de confirmation](/aide/envoyer-un-contrat-en-signature/envoyer-contrat-signature-06-confirmation.png)

Si le contributeur doit remplir lui-même ses informations, l'encadré s'intitule **Mon contributeur n'a pas encore complété ses informations** et le bouton devient **Envoyer l'invitation** (fenêtre : **Envoyer l'invitation ?**). L'encadré **Mon contributeur a déjà signé le contrat**, qui propose **Ajouter sans signature**, disparaît alors.

![Le bouton Envoyer l'invitation quand le contributeur complète lui-même ses informations](/aide/envoyer-un-contrat-en-signature/envoyer-contrat-signature-07-invitation.png)

Tu reviens ensuite à la liste des souscriptions.

## Et ensuite ?

- **Statut du contrat** : ouvre la souscription, dans la section **Historique** : un badge indique **À signer par le contributeur**, ou **Invitation envoyée** si le contributeur doit d'abord compléter ses informations.

![Le badge « À signer par le contributeur » dans l'historique de la souscription](/aide/envoyer-un-contrat-en-signature/envoyer-contrat-signature-08-statut-signature.png)

![Le badge « Invitation envoyée » quand le contributeur doit compléter ses informations](/aide/envoyer-un-contrat-en-signature/envoyer-contrat-signature-09-statut-invitation.png)

- **E-mail au contributeur** : il reçoit une invitation avec un lien pour lire et signer le contrat en ligne. Si tu as écrit un **Message d'invitation** à la création de la souscription, il est repris dans cet e-mail. Le contributeur n'a pas de compte : ce lien est son seul accès, et il expire 10 jours après la date de prise d'effet de la souscription. Si tu dois le renvoyer : voir [Relancer l'invitation à signer](/aide/contrats-et-signature/relancer-l-invitation-a-signer).
- **Parcours du contributeur** : il complète ses informations si tu lui as délégué ce travail, dépose les documents demandés, puis signe. Voir [Signer un contrat (contributeur)](/aide/contrats-et-signature/signer-un-contrat) et [Déposer des documents justificatifs](/aide/documents-justificatifs/deposer-des-documents-justificatifs).
- **Validation et contre-signature** : tu valides les documents déposés ([Valider ou rejeter des documents justificatifs](/aide/documents-justificatifs/valider-ou-rejeter-des-documents-justificatifs)), puis les signataires du modèle reçoivent un e-mail pour contresigner ([Contresigner un contrat (signataire)](/aide/contrats-et-signature/contresigner-un-contrat)).
- **Contributions** : tant que le contrat n'est pas signé par les deux parties, aucune contribution n'est créée. Dès la dernière signature, elles sont générées : voir [Générer automatiquement les contributions récurrentes](/aide/contributions/generer-automatiquement-les-contributions-recurrentes) et [Ce que Cascade fait chaque jour](/aide/general/ce-que-cascade-fait-chaque-jour).

## Bon à savoir

- La souscription est déjà créée quand tu arrives sur cette page : le formulaire en trois étapes n'enregistre rien avant **Créer**, mais le contrat, lui, est créé seulement à l'envoi. Si tu quittes la page sans envoyer, la souscription existe sans contrat : ouvre-la, et dans la section **Historique** clique sur **Créer le contrat** pour revenir ici. Voir [Consulter l'historique des versions d'une souscription](/aide/souscriptions/consulter-l-historique-des-versions).
- Le contrat ne se crée qu'une fois par souscription : une fois envoyé, la page de création n'est plus accessible et son texte ne se modifie plus depuis cette page.
- Le texte que tu envoies est conservé tel quel dans le contrat : si tu modifies ensuite la souscription avant la signature du contributeur, relis le contrat.
- **Ajouter sans signature** (disponible seulement quand tu as rempli toi-même les informations du contributeur) considère le contrat comme déjà signé par les deux parties : les contributions sont créées tout de suite et rien n'est envoyé au contributeur. Voir [Ajouter un contrat sans signature (déjà signé sur papier)](/aide/contrats-et-signature/ajouter-un-contrat-sans-signature).
- Pour une souscription qui n'est pas la première version (après une modification), la page s'appelle « Avenant au contrat » : elle affiche les **Éléments modifiés** et le **Texte de l'avenant**, avec les boutons **Envoyer en signature** et **Valider sans signature**. Voir [Faire un avenant](/aide/souscriptions/faire-un-avenant).
- Tant que le contrat n'est pas signé par les deux parties, tu peux annuler la souscription depuis sa page : voir [Annuler une souscription](/aide/souscriptions/annuler-une-souscription).

## Questions fréquentes

::accordion
:::accordion-item{label="Je n'ai pas le bouton « Ajouter sans signature »."}
Il n'apparaît que si le contributeur n'a pas d'information à compléter lui-même. Si tu as choisi qu'il remplisse ses informations, seul **Envoyer l'invitation** est proposé.
:::
:::accordion-item{label="J'ai fermé la page avant d'envoyer le contrat."}
Ouvre la souscription dans **Souscriptions**, puis clique sur **Créer le contrat** dans la section **Historique**.
:::
:::accordion-item{label="Le contributeur dit qu'il n'a pas reçu l'e-mail."}
Vérifie l'adresse e-mail saisie pour le contributeur, puis renvoie l'invitation : voir [Relancer l'invitation à signer](/aide/contrats-et-signature/relancer-l-invitation-a-signer).
:::
::
