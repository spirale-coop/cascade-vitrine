---
title: "Inviter plusieurs contributeurs en masse"
module: "Souscriptions"
moduleSlug: souscriptions
order: 6
actors: ["Gérant"]
enBref: "Invite d'un coup plusieurs contributeurs à signer un contrat : tu choisis un modèle de souscription, tu importes un fichier Excel avec une ligne par contributeur, tu vérifies le résultat, et Cascade crée les souscriptions et envoie les invitations."
where: "Souscriptions › Inviter plusieurs contributeurs"
status: review
needs: ["creer-une-souscription", "creer-un-modele-de-souscription", "rediger-le-modele-de-contrat"]
glossary: ["contrat", "contributeur", "date-de-fin", "date-de-prise-d-effet", "message-d-invitation", "modele-de-souscription", "montant-fixe-par-le-gerant", "montant-ht", "moyen-de-paiement-par-defaut", "ponctuel", "souscription"]
video: ""
videoStatus: none
---

## Avant de commencer

- Il te faut un modèle de souscription en mode d'adhésion **Contrat**, avec un modèle de contrat rédigé : c'est le seul type de modèle proposé ici. Voir [Créer un modèle de souscription](/aide/modeles-de-souscription/creer-un-modele-de-souscription) et [Rédiger le modèle de contrat (variables entre crochets)](/aide/modeles-de-souscription/rediger-le-modele-de-contrat).
- Un seul contributeur à inviter ? Passe plutôt par [Créer une souscription (inviter un contributeur)](/aide/souscriptions/creer-une-souscription).
- Prépare, pour chaque contributeur : son nom, son adresse e-mail, la date de début de sa souscription, et selon le modèle son montant et quelques informations de contrat (voir l'étape 4).

## Étapes

### 1. Ouvre la page d'invitation en masse

Dans le menu, va dans **Souscriptions**, puis clique sur **Inviter plusieurs contributeurs**. La page se déroule en deux étapes : **Import du fichier**, puis **Confirmation**.
### 2. Choisis le modèle de souscription

Dans **Modèle de souscription**, ouvre la liste et choisis le modèle sur lequel tous les contributeurs du fichier seront invités. Chaque modèle affiche sa description. Tant que tu n'en as pas choisi, rien d'autre n'apparaît.

Un fichier ne sert qu'à un seul modèle. Si tu changes de modèle après avoir importé un fichier, l'import est effacé : il faut importer à nouveau.
### 3. Écris le message d'invitation

Dans **Message d'invitation**, tu peux écrire un texte, mis en forme si tu veux (titres, listes, gras, liens). Il est facultatif et il est le même pour tout le lot : il sera inclus dans l'e-mail d'invitation de chaque contributeur. Tu peux le modifier jusqu'au bouton **Suivant**, même après avoir importé le fichier.

### 4. Télécharge le modèle Excel et complète-le

Dans l'encadré **Modèle Excel à compléter**, clique sur **Télécharger le modèle**. Tu obtiens un fichier Excel (.xlsx) avec une feuille **Contributeurs** : complète une ligne par contributeur, sans changer les colonnes. Les colonnes dépendent du modèle choisi :

- **Nom du contributeur** et **Email du contributeur** : toujours demandés. L'e-mail est l'adresse à laquelle l'invitation est envoyée.
- **Date de début (AAAA-MM-JJ)** : toujours demandée, par exemple 2027-01-01.
- **Date de fin (AAAA-MM-JJ) (optionnel)** : facultative, sauf pour un modèle ponctuel, où le libellé de la colonne n'a plus la mention « (optionnel) » et où la date est obligatoire.
- **Montant HT (€)** : seulement si le montant est fixé par le gérant dans le modèle. Tu peux écrire les centimes avec une virgule ou un point.
- Une colonne par champ personnalisé du contrat que le modèle te réserve (par exemple **Emplacement**), avec le nom que le modèle lui donne. Les champs réservés au contributeur ne figurent pas dans le fichier : il les complète lui-même.

Le moyen de paiement n'est pas dans le fichier : chaque souscription reprend celui du modèle. Voir [Choisir le moyen de paiement par défaut et le délai de prélèvement](/aide/modeles-de-souscription/choisir-le-moyen-de-paiement-par-defaut).
### 5. Importe le fichier et corrige les erreurs

Dans **Import du fichier complété**, glisse ton fichier dans la zone ou clique dessus pour le choisir. Seuls les fichiers **.xlsx** sont acceptés, et seule la première feuille est lue. Les lignes entièrement vides sont ignorées.

Cascade vérifie alors chaque ligne avec les mêmes règles que le formulaire de création d'une souscription. Le résultat s'affiche sous la zone :

- des pastilles indiquent le nombre de **lignes valides** et de **lignes invalides** ;
- pour chaque ligne invalide, **Ligne N** donne son numéro dans ton fichier (la ligne 1 est l'en-tête), puis chaque erreur est précédée du nom de la colonne tel qu'il figure dans le fichier. Exemples : « Email du contributeur : le champ doit être une adresse e-mail valide. », « Email du contributeur : ce contributeur apparaît plusieurs fois dans le fichier. », « Email du contributeur : Le contributeur existe déjà sur ce mode de contribution. ».

Les lignes invalides ne seront pas envoyées. Tu peux les corriger dans ton fichier et l'importer à nouveau, ou continuer sans elles. S'il n'y a aucune ligne valide, un encadré **Aucune ligne valide** s'affiche et tu ne peux pas continuer. Si le fichier ne correspond pas au modèle (colonnes modifiées ou fichier d'un autre modèle), un message t'invite à télécharger à nouveau le modèle.

Clique sur **Suivant**.
### 6. Vérifie la confirmation

L'écran **Confirmation** annonce combien d'invitations seront envoyées, et combien de lignes invalides seront ignorées. Dessous, l'**Aperçu du contrat (premier contributeur valide)** montre le contrat tel qu'il sera généré pour le premier contributeur valide du fichier : relis-le. Les autres contributeurs reçoivent le même contrat, avec leurs propres informations.

Rien n'est encore créé à ce stade. **Précédent** te ramène à l'import pour corriger quelque chose.
### 7. Envoie les invitations

Clique sur **Envoyer les invitations**. Une fenêtre te demande de confirmer : **Envoyer les invitations ?** Clique sur **Confirmer**.
Tu reviens à la liste des souscriptions, avec un message du type « 3 invitations en cours d'envoi. ». La liste se met à jour toute seule pendant environ une minute, au fur et à mesure que les souscriptions sont créées.
## Et ensuite ?

- **Une souscription par ligne valide** : chaque contributeur invité a sa souscription, créée en arrière-plan, avec son contrat généré à partir du modèle de contrat. Les lignes sont traitées une par une : l'échec de l'une ne bloque pas les autres. Retrouve-les dans la liste : voir [Consulter et filtrer les souscriptions](/aide/souscriptions/consulter-et-filtrer-les-souscriptions).
- **E-mail au contributeur** : chaque contributeur reçoit une invitation avec ton message d'invitation et un lien pour lire et signer le contrat en ligne. Le contributeur n'a pas de compte : ce lien est son seul accès, et il expire 10 jours après la date de début de sa souscription. S'il l'a perdu : voir [Relancer l'invitation à signer](/aide/contrats-et-signature/relancer-l-invitation-a-signer).
- **Statut du contrat** : **À signer par le contributeur**, ou **Invitation envoyée** si le contrat réclame des informations que seul le contributeur peut donner (par exemple son adresse de facturation, ou un champ du contrat qui lui est réservé) : il les complète avant de signer.
- **Parcours du contributeur** : il complète ses informations si besoin, dépose les documents demandés par le modèle, puis signe. Voir [Signer un contrat (contributeur)](/aide/contrats-et-signature/signer-un-contrat) et [Déposer des documents justificatifs](/aide/documents-justificatifs/deposer-des-documents-justificatifs).
- **Contre-signature** : une fois le contributeur passé (et ses documents validés, voir [Valider ou rejeter des documents justificatifs](/aide/documents-justificatifs/valider-ou-rejeter-des-documents-justificatifs)), les signataires du modèle reçoivent un e-mail pour contresigner. Voir [Contresigner un contrat (signataire)](/aide/contrats-et-signature/contresigner-un-contrat). Le détail de l'envoi d'un contrat est dans [Envoyer un contrat en signature](/aide/contrats-et-signature/envoyer-un-contrat-en-signature).
- **Contributions** : tant que le contrat n'est pas signé par les deux parties, aucune contribution n'est créée. Voir [Générer automatiquement les contributions récurrentes](/aide/contributions/generer-automatiquement-les-contributions-recurrentes) et [Ce que Cascade fait chaque jour](/aide/general/ce-que-cascade-fait-chaque-jour).

## Bon à savoir

- Seuls les modèles en mode **Contrat** sont proposés : l'invitation en masse sert à envoyer des contrats à signer. Pour un modèle en **Adhésion simple**, crée les souscriptions une par une.
- Une fois les invitations confirmées, rien ne permet de les annuler en bloc. Pour mettre fin à une souscription, voir [Annuler une souscription](/aide/souscriptions/annuler-une-souscription).
- Avant de cliquer sur **Envoyer les invitations**, rien n'est créé : l'import et la vérification ne laissent aucune trace.
- Le contrat n'est pas relisible contributeur par contributeur : seul celui du premier contributeur valide est montré en aperçu, et il est envoyé tel quel, sans possibilité de le modifier. Pour un contrat à modifier avant l'envoi, ou déjà signé sur papier, utilise la création à l'unité.
- Un contributeur ne peut pas être invité deux fois sur le même modèle tant que sa souscription n'est pas terminée, repéré par son e-mail (majuscules et minuscules sont traitées pareil). La ligne est refusée avec « Le contributeur existe déjà sur ce mode de contribution. ». Une souscription terminée n'empêche pas une nouvelle invitation.
- Si la même adresse e-mail apparaît plusieurs fois dans le fichier, seule sa première ligne est acceptée : les suivantes sont refusées avec « Ce contributeur apparaît plusieurs fois dans le fichier. ».
- Chaque ligne crée un nouveau contributeur. Les informations sur sa société (raison sociale, adresse, numéro de TVA, SIRET) ne sont pas dans le fichier : s'il doit les donner, il le fait en ouvrant son lien. Sans raison sociale, Cascade reprend le nom du contributeur.
- Cascade ne vérifie pas que la date de début est un début de période, ni qu'elle n'est pas déjà passée : relis tes dates. Pour une date de début passée, le lien du contributeur peut avoir déjà expiré (10 jours après la date de début).
- Les dates s'écrivent **AAAA-MM-JJ**. Une cellule Excel au format date est aussi comprise.

## Questions fréquentes

::accordion
:::accordion-item{label="Mon fichier est refusé avec « Ce fichier ne correspond pas au modèle attendu »."}
Les colonnes ne sont pas celles du modèle choisi : l'ordre, le nombre ou le nom d'une colonne a changé, ou le fichier vient d'un autre modèle de souscription. Télécharge à nouveau le modèle depuis la page, avec le bon modèle choisi, et recopie tes lignes dedans sans toucher à l'en-tête.
:::
:::accordion-item{label="Certaines lignes sont invalides, que faire ?"}
Corrige-les dans ton fichier en suivant les messages, puis importe-le à nouveau : l'import remplace le précédent. Tu peux aussi envoyer sans elles et inviter ces contributeurs plus tard.
:::
:::accordion-item{label="Après l'envoi, je ne vois pas toutes les souscriptions."}
Elles sont créées une à une en arrière-plan : attends un peu et recharge la liste. Si une ligne manque toujours, vérifie que le contributeur n'a pas déjà une souscription sur ce modèle, puis invite-le à l'unité.
:::
::
