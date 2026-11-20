---
title: "Relancer l'invitation à signer"
module: "Contrats et signature"
moduleSlug: contrats-et-signature
order: 4
actors: ["Gérant"]
enBref: "Renvoie au contributeur l'e-mail d'invitation à signer, s'il l'a perdu, laissé expirer ou jamais reçu, sans recréer le contrat."
where: "Souscriptions › (le contributeur) › Historique › Renvoyer l'invitation"
status: review
needs: ["envoyer-un-contrat-en-signature"]
glossary: ["avenant", "contrat", "contributeur", "message-d-invitation", "souscription"]
video: ""
videoStatus: none
---

## Avant de commencer

- Il te faut une souscription dont le contrat a déjà été envoyé. Voir [Envoyer un contrat en signature](/aide/contrats-et-signature/envoyer-un-contrat-en-signature) et [Créer une souscription (inviter un contributeur)](/aide/souscriptions/creer-une-souscription).
- Le bouton n'existe que tant que le contrat porte le statut **Invitation envoyée** (voir « Bon à savoir » pour savoir quand ce statut s'applique).

## Étapes

### 1. Ouvre la souscription

Dans le menu, va dans **Souscriptions**, puis clique sur le nom du contributeur dans la liste.
### 2. Repère le statut du contrat

Sur la page de la souscription, la carte **Historique** liste chaque version (la souscription d'origine, puis les éventuels avenants). Sur la ligne concernée, le contrat est signalé par le badge **Invitation envoyée**.
### 3. Survole la ligne et clique sur le bouton

Survole la ligne : une fenêtre s'ouvre, avec les boutons **Voir les détails**, **Voir le contrat** et **Renvoyer l'invitation**. Clique sur **Renvoyer l'invitation**. Aucune confirmation n'est demandée.

Si la ligne est celle d'un avenant, c'est l'invitation à signer l'avenant qui est renvoyée.
### 4. Vérifie la confirmation

Tu restes sur la page de la souscription, et le message **L'invitation a bien été renvoyée.** s'affiche en bas à droite.
## Et ensuite ?

- **E-mail au contributeur** : il reçoit de nouveau l'e-mail d'invitation, avec le **Message d'invitation** saisi à la création de la souscription et un lien pour signer. C'est lui qui continue le parcours : voir [Signer un contrat (contributeur)](/aide/contrats-et-signature/signer-un-contrat). Rien n'est envoyé au signataire ni aux autres contacts.
- **Rien ne change dans Cascade** : le contrat n'est pas recréé, son contenu et son statut restent identiques, et aucun historique du renvoi n'est conservé.
- **Lien de signature** : l'e-mail contient un lien de signature propre au contributeur (voir « Bon à savoir » pour sa durée de validité).

## Bon à savoir

- **Quand le bouton apparaît.** Le statut **Invitation envoyée** s'applique tant que le contrat attend des informations que le contributeur doit renseigner lui-même, avant de pouvoir le signer. Dès qu'il a tout rempli, le statut passe à **À signer par le contributeur** et le bouton disparaît. Si le modèle de contrat ne demande aucune information au contributeur, la souscription passe directement à **À signer par le contributeur** et tu n'as jamais ce bouton, même si le contributeur n'a pas encore ouvert son e-mail.
- **Le renvoi ne prolonge pas le lien.** Le lien envoyé reste valable jusqu'à 10 jours après la date de prise d'effet de la souscription ; le renvoyer ne repousse pas cette échéance. Si la date est dépassée de plus de 10 jours, le nouvel e-mail contient un lien déjà expiré.
- **Pas de limite d'envois.** Tu peux cliquer autant de fois que tu veux ; chaque clic envoie un e-mail. Clique une fois, puis attends un peu.
- **Adresse du contributeur.** L'e-mail part à l'adresse enregistrée dans la souscription. Si elle est fausse, tu ne peux pas la corriger ici.
- **Seulement pour la première invitation.** Ce bouton ne sert pas à relancer un contributeur qui a déjà commencé (par exemple à signer ou à déposer ses justificatifs), ni le signataire.

## Questions fréquentes

::accordion
:::accordion-item{label="Le bouton « Renvoyer l'invitation » n'apparaît pas."}
Il n'apparaît que si le statut du contrat est **Invitation envoyée**, et seulement dans la fenêtre qui s'ouvre au survol de la ligne dans **Historique**. Si le statut est autre, la souscription n'est plus à ce stade.
:::
:::accordion-item{label="Le contributeur dit que son lien ne fonctionne plus."}
Le lien expire 10 jours après la date de prise d'effet de la souscription, et le renvoi ne le renouvelle pas. Pour l'instant, il n'y a pas de bouton pour le prolonger.
:::
:::accordion-item{label="Comment savoir si le contributeur a bien reçu l'e-mail ?"}
Cascade ne l'indique pas. Le message de confirmation dit seulement que le renvoi a été demandé.
:::
::
