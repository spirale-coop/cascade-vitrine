---
title: "Annuler une souscription"
module: "Souscriptions"
moduleSlug: souscriptions
order: 1
actors: ["Gérant"]
enBref: "Annule une souscription tant que son contrat n'est pas signé par les deux parties : elle est alors supprimée définitivement, avec son contrat."
where: "Souscriptions › (le contributeur) › Annuler"
status: review
needs: ["creer-une-souscription"]
glossary: ["avenant", "contrat", "contributeur", "souscription", "version"]
video: ""
videoStatus: none
---

## Avant de commencer

- Il te faut une souscription dont le contrat n'est pas encore signé par les deux parties (contributeur et signataire). Une souscription sans contrat (adhésion simple, ou contrat pas encore créé) peut aussi être annulée. Voir [Créer une souscription (inviter un contributeur)](/aide/souscriptions/creer-une-souscription).
- Une fois le contrat signé par les deux parties, la souscription ne peut plus être annulée : le bouton **Annuler** n'apparaît plus. Pour changer ses réglages, fais un avenant : voir [Faire un avenant](/aide/souscriptions/faire-un-avenant).

## Étapes

### 1. Ouvre la souscription

Dans le menu, va dans **Souscriptions**, puis clique sur le nom du contributeur. Tu arrives sur la fiche de sa souscription (la dernière version, s'il y en a plusieurs).
### 2. Repère le bouton Annuler

Le bouton rouge **Annuler** est en haut à droite de la fiche. Il annule la version que tu consultes.
Le bloc **Historique**, en haut de la fiche, affiche aussi un bouton **Annuler** sur chaque version dont le contrat n'est pas signé. Il sert à annuler une version précise, par exemple un avenant en cours alors que la version précédente est déjà signée (voir [Consulter l'historique des versions d'une souscription](/aide/souscriptions/consulter-l-historique-des-versions)).
### 3. Confirme l'annulation

Une fenêtre te prévient : « Vous êtes sur le point d'annuler la signature du contrat de cette souscription. » Elle précise que toutes les données de la souscription seront supprimées. Clique sur **Confirmer**. Le bouton **Annuler** de cette fenêtre la ferme sans rien supprimer.
Tu reviens à la liste des souscriptions, avec le message « La souscription a bien été supprimée. »
## Et ensuite ?

- **Ce qui est supprimé** : la version annulée et son contrat. Si c'était la seule version, la souscription disparaît entièrement de la liste. Le contributeur disparaît lui aussi de ta cascade s'il n'a aucune autre souscription chez toi.
- **S'il y avait d'autres versions** (par exemple un avenant annulé) : les versions précédentes sont conservées et la souscription reste dans la liste.
- **Contributions** : pour un modèle avec contrat, aucune contribution n'est générée avant la signature des deux parties (voir [Ce que Cascade fait chaque jour](/aide/general/ce-que-cascade-fait-chaque-jour)) : il n'y a donc rien à nettoyer.
- **Contributeur** : aucun e-mail ne lui est envoyé pour l'informer de l'annulation. Pense à le prévenir toi-même s'il avait déjà reçu une invitation.

## Bon à savoir

- L'annulation est définitive : rien ne se récupère. Pour reprendre, crée une nouvelle souscription pour ce contributeur.
- Il n'y a pas de bouton d'annulation une fois le contrat signé par les deux parties, quelle que soit la date de la souscription.
- Annuler n'est pas la même chose que modifier : pour corriger un montant ou une date avant la signature, utilise plutôt [Modifier une souscription](/aide/souscriptions/modifier-une-souscription).
- Les contrats ajoutés sans signature sont considérés comme signés : leur souscription ne peut donc plus être annulée. Voir [Ajouter un contrat sans signature (déjà signé sur papier)](/aide/contrats-et-signature/ajouter-un-contrat-sans-signature).

## Questions fréquentes

::accordion
:::accordion-item{label="Je ne vois pas le bouton Annuler."}
Le contrat de cette version est signé par le contributeur et le signataire. Annulation impossible : fais un avenant pour changer les réglages.
:::
:::accordion-item{label="Le contributeur a déjà signé, mais pas le signataire. Puis-je annuler ?"}
Oui : tant que le signataire n'a pas contresigné, le contrat n'est pas signé par les deux parties (voir [Contresigner un contrat (signataire)](/aide/contrats-et-signature/contresigner-un-contrat)).
:::
:::accordion-item{label="J'ai annulé par erreur."}
Il faut recréer la souscription depuis le début et renvoyer l'invitation au contributeur.
:::
::
