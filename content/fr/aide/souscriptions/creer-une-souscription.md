---
title: "Créer une souscription (inviter un contributeur)"
module: "Souscriptions"
moduleSlug: souscriptions
order: 4
actors: ["Gérant"]
enBref: "Invite un contributeur à rejoindre ta cascade en créant sa souscription à partir d'un modèle : dates, montant, moyen de paiement, signataire, puis envoi du contrat à signer si le modèle en demande un."
where: "Souscriptions › Créer une souscription"
status: review
needs: ["creer-un-modele-de-souscription"]
glossary: ["adhesion-simple", "adresse-de-facturation", "contrat", "contributeur", "date-de-fin", "date-de-prise-d-effet", "message-d-invitation", "modele-de-souscription", "montant-ht", "signataire", "souscription"]
video: ""
videoStatus: none
---

## Avant de commencer

- Il te faut au moins un modèle de souscription dans ta cascade : c'est lui qui décide de ce que le formulaire te demande. Voir [Créer un modèle de souscription](/aide/modeles-de-souscription/creer-un-modele-de-souscription).
- Pour proposer le prélèvement SEPA, le modèle doit avoir un délai de prélèvement. Voir [Choisir le moyen de paiement par défaut et le délai de prélèvement](/aide/modeles-de-souscription/choisir-le-moyen-de-paiement-par-defaut).
- Tu as plusieurs contributeurs à inviter d'un coup ? Voir [Inviter plusieurs contributeurs en masse](/aide/souscriptions/inviter-plusieurs-contributeurs-en-masse).

## Étapes

### 1. Ouvre le formulaire

Dans le menu, va dans **Souscriptions**, puis clique sur **Créer une souscription**. Le formulaire s'appelle **Nouveau contributeur** et se déroule en trois étapes : **Informations contribution**, **Informations contributeur**, puis **Contrat** (cette dernière étape n'existe que si le modèle demande un contrat).

### 2. Choisis le modèle de souscription

Dans **Modèle de souscription**, ouvre la liste (tu peux chercher par nom) : chaque modèle affiche sa description. Tant que tu n'en as pas choisi, rien d'autre n'apparaît.

Une fois le modèle choisi, la suite du formulaire s'adapte à lui. La date de fin et le moyen de paiement sont préremplis avec ceux du modèle.

### 3. Renseigne les dates, le montant et le moyen de paiement

- **Prise d'effet** : le premier jour de la souscription. Elle est obligatoire.
- **Date de fin** : facultative, sauf pour un modèle ponctuel. Elle reprend celle du modèle, et tu peux la changer.
- **Montant HT** : demandé seulement si le montant est fixé par le gérant dans le modèle. Le **Montant TTC** se calcule à côté avec le taux de TVA du modèle, et tu peux aussi le saisir lui-même : le montant HT suit. Si le taux de TVA est nul, le montant TTC n'est pas proposé.
- **Moyen de paiement** : repris du modèle, tu peux le changer pour cette souscription. Le prélèvement SEPA est refusé si le modèle n'a pas de délai de prélèvement.
- Si le modèle de contrat contient des champs à remplir par toi, une section **Contrat de souscription** les demande (par exemple un étage ou un numéro de bureau).

Clique sur **Suivant**.

### 4. Choisis le contributeur

Dans **Contributeur**, choisis **Nouveau contributeur**, ou un contributeur que tu connais déjà. Dans ce cas, son identité (raison sociale, adresse de facturation…) est reprise telle quelle et n'est pas redemandée, et le nom et l'e-mail du signataire se préremplissent avec le dernier contact utilisé.

### 5. Renseigne le signataire et le message d'invitation

Dans **Informations du signataire**, indique son **Nom** et son **Email** : c'est à cette adresse que l'invitation sera envoyée. Tu peux ajouter un **Message d'invitation**, qui sera inclus dans l'e-mail.

Un même contributeur ne peut pas être invité deux fois sur le même modèle tant que sa souscription n'est pas terminée : Cascade te répond « Le contributeur existe déjà sur ce mode de contribution. ». Il peut en revanche avoir une souscription sur un autre modèle.

### 6. Dis qui remplit les informations du contributeur

Pour un nouveau contributeur, choisis dans **Qui renseigne les informations ci-dessous ?** :

- **Je remplis moi-même les informations de mon contributeur** : tu complètes toi-même les champs, et le contributeur ne pourra pas les modifier. L'adresse (si le modèle envoie une facture) et les champs du contrat qui lui reviennent deviennent obligatoires.
- **Mon contributeur va remplir ses informations lui-même** : les champs sont grisés, il les complétera depuis le lien qu'il reçoit.

Dans **Informations du contributeur**, **Raison sociale ou nom** reste vide pour reprendre le nom du signataire. Si le modèle a pour mode d'envoi **Facture**, tu renseignes aussi l'adresse, le **N° TVA** et le **SIRET** (ou l'identifiant d'entreprise du pays choisi) ; renseigne l'un des deux et l'autre devient obligatoire. Pour un contributeur déjà connu, ce bloc disparaît, et ce choix n'est proposé que si le modèle a des champs de contrat réservés au contributeur.

### 7. Crée la souscription

Clique sur **Créer**.

- Si le modèle est en **Adhésion simple**, la souscription est créée et tu reviens à la liste des souscriptions.
- Si le modèle demande un **Contrat**, tu arrives sur la page **Création du contrat** : relis le contrat (tu peux le modifier) puis clique sur **Envoyer en signature**, ou sur **Envoyer l'invitation** si le contributeur doit d'abord compléter ses informations. Confirme avec **Confirmer**. Le contributeur a déjà signé sur papier ? Voir [Ajouter un contrat sans signature (déjà signé sur papier)](/aide/contrats-et-signature/ajouter-un-contrat-sans-signature). Le détail de l'envoi est dans [Envoyer un contrat en signature](/aide/contrats-et-signature/envoyer-un-contrat-en-signature).

## Et ensuite ?

- **Adhésion simple** : la souscription est active dès la prise d'effet, et ses contributions sont créées tout de suite. Aucun e-mail n'est envoyé au contributeur.
- **Contrat** : le contributeur reçoit un e-mail avec un lien (et ton message d'invitation) pour compléter ses informations s'il y a lieu, puis signer. Voir [Signer un contrat (contributeur)](/aide/contrats-et-signature/signer-un-contrat). S'il a perdu le lien, voir [Relancer l'invitation à signer](/aide/contrats-et-signature/relancer-l-invitation-a-signer). Ses contributions ne sont créées qu'une fois le contrat signé par les deux parties.
- Les contributions suivantes, pour une souscription récurrente, sont créées par Cascade : voir [Générer automatiquement les contributions récurrentes](/aide/contributions/generer-automatiquement-les-contributions-recurrentes) et [Ce que Cascade fait chaque jour](/aide/general/ce-que-cascade-fait-chaque-jour).
- Ta souscription est dans la liste : voir [Consulter et filtrer les souscriptions](/aide/souscriptions/consulter-et-filtrer-les-souscriptions).

## Bon à savoir

- Le contributeur n'a pas de compte : il agit uniquement par les liens reçus par e-mail.
- La souscription est créée dès que tu cliques sur **Créer**, même si tu quittes ensuite la page **Création du contrat** sans envoyer le contrat : elle apparaît alors dans la liste, sans contrat envoyé.
- Le **Message d'invitation** ne part qu'avec l'e-mail d'invitation à signer. Avec un modèle en **Adhésion simple**, aucun e-mail n'est envoyé : le message n'est donc lu par personne.
- Il n'y a pas de date de prise d'effet minimale : tu peux créer une souscription qui commence dans le passé.
- Pour changer une souscription après coup : voir [Modifier une souscription](/aide/souscriptions/modifier-une-souscription) ; pour y mettre fin : [Annuler une souscription](/aide/souscriptions/annuler-une-souscription).

## Questions fréquentes

::accordion
:::accordion-item{label="Je ne vois pas la section Montant."}
Elle n'apparaît que si le modèle fixe le montant par le gérant. Sinon, le montant est déterminé autrement et tu n'as rien à saisir.
:::
:::accordion-item{label="Le contributeur existe déjà, pourquoi Cascade refuse ?"}
Il a déjà une souscription non terminée sur ce modèle (en cours, à venir ou en attente de signature), repérée par l'e-mail ou par le contributeur choisi. Choisis un autre modèle ou attends la fin de la souscription.
:::
:::accordion-item{label="Le contributeur n'a rien reçu."}
Vérifie que le modèle est bien en mode Contrat et que tu as cliqué sur **Envoyer en signature** ou **Envoyer l'invitation** ; puis voir [Relancer l'invitation à signer](/aide/contrats-et-signature/relancer-l-invitation-a-signer).
:::
::
