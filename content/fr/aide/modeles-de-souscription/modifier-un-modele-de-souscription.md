---
title: "Modifier un modèle de souscription"
module: "Modèles de souscription"
moduleSlug: modeles-de-souscription
order: 6
actors: ["Gérant"]
enBref: "Change les réglages d'un modèle de souscription déjà créé : TVA, facturation, moyen de paiement par défaut, contrat, avenants… Les souscriptions, contributions et factures existantes ne sont pas réécrites : seule la suite tient compte des nouveaux réglages."
where: "Modèles de souscription › (le modèle) › Enregistrer les modifications"
status: review
needs: ["creer-un-modele-de-souscription"]
glossary: ["avenant", "contrat", "contribution", "date-de-fin-par-defaut-des-souscriptions", "delai-avant-facturation", "delai-de-prelevement", "facture", "modele-d-avenant", "modele-de-contrat", "modele-de-souscription", "moyen-de-paiement-par-defaut", "souscription", "taux-de-tva"]
video: ""
videoStatus: none
---

## Avant de commencer

- Le modèle doit déjà exister : voir [Créer un modèle de souscription](/aide/modeles-de-souscription/creer-un-modele-de-souscription). Le formulaire de modification est le même que celui de création, déjà rempli avec les réglages actuels.
- Rien n'est enregistré tant que tu n'as pas cliqué sur **Enregistrer les modifications** à la dernière étape. Tu peux revenir en arrière avec **Précédent**, ou quitter la page, sans rien changer au modèle.
- Les souscriptions qui utilisent déjà le modèle ne sont pas réécrites (voir « Et ensuite ? ») : lis cette section avant de changer un réglage d'un modèle déjà utilisé.

## Étapes

### 1. Ouvre le modèle

Dans le menu, va dans **Modèles de souscription**, puis clique sur le nom du modèle (toute la ligne est cliquable). Il n'y a pas de bouton « Modifier » : le clic sur la ligne ouvre directement le formulaire. Tu peux retrouver un modèle avec le champ **Rechercher…**.

![La liste des modèles de souscription : clique sur le nom du modèle](/aide/modifier-un-modele-de-souscription/modifier-modele-souscription-01-liste.png)

### 2. Repère les étapes du formulaire

Le formulaire s'ouvre sur **Modifier le modèle de souscription**, à l'étape **Configuration générale**, avec tous les champs préremplis. Avec le mode d'adhésion **Adhésion simple**, cette étape est la seule ; avec **Contrat**, il y a deux étapes de plus, **Contrat** et **Avenants**. Chaque champ est décrit dans [Créer un modèle de souscription](/aide/modeles-de-souscription/creer-un-modele-de-souscription).

![L'étape Configuration générale, préremplie avec les réglages du modèle](/aide/modifier-un-modele-de-souscription/modifier-modele-souscription-02-formulaire.png)

### 3. Change les réglages de la Configuration générale

Modifie ce dont tu as besoin : nom, taux de TVA, récurrence, mode d'envoi, moyen de paiement par défaut, reçu, mode d'adhésion. Quelques points propres à la modification :

- Quand tu changes un choix (par exemple le mode d'envoi), les champs qui en dépendent sont remis à zéro et à renseigner à nouveau.
- Le moyen de paiement par défaut et la date de fin par défaut ne servent qu'aux **nouvelles** souscriptions : les souscriptions existantes gardent les leurs.
- Pour la facturation automatique, voir [Configurer la facturation automatique](/aide/modeles-de-souscription/configurer-la-facturation-automatique) ; pour le prélèvement, voir [Choisir le moyen de paiement par défaut et le délai de prélèvement](/aide/modeles-de-souscription/choisir-le-moyen-de-paiement-par-defaut).
- Tant qu'une souscription du modèle est payée par **Prélèvement SEPA**, tu ne peux pas retirer le délai de prélèvement : le message « Des souscriptions de ce modèle sont en prélèvement SEPA : le délai de prélèvement est obligatoire. » t'en empêche. Comme le prélèvement nécessite la facturation automatique, tu ne peux pas non plus la retirer.

![Les réglages de facturation modifiés : désignation et nombre de jours avant la date de contribution](/aide/modifier-un-modele-de-souscription/modifier-modele-souscription-03-facturation.png)

### 4. Adapte le contrat et les avenants

Seulement si le mode d'adhésion est **Contrat**. Clique sur **Suivant** : l'étape **Contrat** reprend les documents justificatifs demandés, les annexes déjà ajoutées (tu peux en ajouter d'autres), les signataires, le texte du modèle de contrat et les champs remplis par le contributeur. L'étape **Avenants** reprend le modèle d'avenant. Les réglages ont leur propre fiche : [Définir les documents justificatifs demandés](/aide/modeles-de-souscription/definir-les-documents-justificatifs-demandes), [Rédiger le modèle de contrat (variables entre crochets)](/aide/modeles-de-souscription/rediger-le-modele-de-contrat) et [Configurer le modèle d'avenant (paragraphes conditionnels)](/aide/modeles-de-souscription/configurer-le-modele-d-avenant).

Si tu passes le mode d'adhésion de **Contrat** à **Adhésion simple**, tout ce qui concerne le contrat est supprimé du modèle à l'enregistrement : documents demandés, annexes, signataires, texte du contrat, champs et modèle d'avenant.

![L'étape Contrat : le texte du modèle de contrat et les champs remplis par le contributeur](/aide/modifier-un-modele-de-souscription/modifier-modele-souscription-04-contrat.png)

### 5. Enregistre les modifications

Clique sur **Enregistrer les modifications** : en **Adhésion simple**, il est en bas de l'étape **Configuration générale** ; en **Contrat**, en bas de l'étape **Avenants**. Si un champ est incomplet, un message t'indique lequel corriger. Une fois enregistré, tu reviens à la liste des modèles et le message **Modifié(e)** s'affiche.

![Le bouton Enregistrer les modifications, en bas de l'étape Avenants](/aide/modifier-un-modele-de-souscription/modifier-modele-souscription-05-enregistrer.png)

![De retour à la liste des modèles, avec le message Modifié(e)](/aide/modifier-un-modele-de-souscription/modifier-modele-souscription-06-liste-apres.png)

## Et ensuite ?

Enregistrer ne modifie aucune souscription, contribution, facture ou paiement existant, et personne n'est prévenu par e-mail. Les réglages du modèle sont lus au moment où ils servent, donc :

- **Pas touché** : le moyen de paiement et la date de chaque contribution déjà créée, les paiements déjà prévus (la date de prélèvement est fixée à la création de la contribution, elle ne bouge pas si tu changes le délai de prélèvement), et le moyen de paiement des souscriptions existantes.
- **Factures déjà émises** : elles gardent la désignation, le taux de TVA, le type d'opération et le délai de paiement qu'elles avaient.
- **Contributions pas encore facturées** : elles suivent les nouveaux réglages de facturation (taux de TVA, désignation, type d'opération, délai de paiement). Si tu changes le nombre de jours avant la date de contribution, la facturation automatique s'en sert dès le prochain passage du matin ; si le nouveau jour de facturation est déjà passé, la contribution est facturée dès ce passage. Voir [Ce que Cascade fait chaque jour](/aide/general/ce-que-cascade-fait-chaque-jour) et [Facturer automatiquement](/aide/facturation/facturer-automatiquement). Une contribution créée à la main avec son propre libellé garde ce libellé.
- **Contrats** : le texte du contrat est repris du modèle quand tu envoies un contrat en signature (voir [Envoyer un contrat en signature](/aide/contrats-et-signature/envoyer-un-contrat-en-signature)) ; le nouveau texte ne vaut donc que pour les contrats envoyés ensuite.
- **Avenants** : le modèle d'avenant modifié sert aux prochains avenants. Voir [Faire un avenant](/aide/souscriptions/faire-un-avenant).
- **Nouvelles souscriptions** : elles partent des nouveaux réglages. Voir [Créer une souscription (inviter un contributeur)](/aide/souscriptions/creer-une-souscription).

## Bon à savoir

- Il n'existe aucune confirmation ni avertissement avant l'enregistrement, et le modèle n'a pas d'historique : relis tes changements avant de cliquer sur **Enregistrer les modifications**.
- Pour changer un réglage d'une seule souscription (montant, moyen de paiement, date de fin), modifie plutôt la souscription : voir [Modifier une souscription](/aide/souscriptions/modifier-une-souscription).
- Les modèles ne peuvent pas être supprimés ni dupliqués pour l'instant.
- Tu ne vois et ne modifies que les modèles de la cascade courante.
- Pour l'instant, **Mois** est le seul cycle de récurrence proposé pour un nouveau modèle ; les autres sont grisés.

## Questions fréquentes

::accordion
:::accordion-item{label="J'ai changé le moyen de paiement du modèle, mais mes souscriptions n'ont pas changé."}
C'est voulu : le moyen de paiement du modèle n'est qu'une valeur proposée à la création d'une souscription. Modifie chaque souscription concernée.
:::
:::accordion-item{label="Je n'arrive pas à retirer le délai de prélèvement."}
Au moins une souscription du modèle est payée par prélèvement SEPA : le délai est nécessaire pour dater ses prélèvements. Change d'abord le moyen de paiement de ces souscriptions.
:::
:::accordion-item{label="Le nouveau texte du contrat ne s'applique pas à un contrat déjà envoyé."}
Normal : un contrat envoyé en signature garde le texte qu'il avait au moment de l'envoi. Seuls les contrats envoyés ensuite reprennent le nouveau texte.
:::
::
