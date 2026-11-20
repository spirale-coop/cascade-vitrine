---
title: "Modifier une souscription"
module: "Souscriptions"
moduleSlug: souscriptions
order: 7
actors: ["Gérant"]
enBref: "Corrige une souscription tant que le contributeur n'a pas signé son contrat (ou sans contrat) : dates, montant, moyen de paiement et informations du contributeur. Après signature, la modification passe par un avenant."
where: "Souscriptions › (le contributeur) › Enregistrer"
status: review
needs: ["creer-une-souscription"]
glossary: ["adhesion-simple", "avenant", "contrat", "contributeur", "contribution", "date-de-fin", "date-de-prise-d-effet", "delai-de-prelevement", "facture", "modele-de-souscription", "montant-ht", "signataire", "souscription", "version"]
video: ""
videoStatus: none
---

## Avant de commencer

- Cette fiche décrit la modification d'une souscription **tant que le contributeur n'a pas signé** son contrat, ou quand le modèle de souscription est en Adhésion simple (sans contrat) : tes changements s'appliquent directement à la souscription. Dès que le contributeur a signé, une modification crée une nouvelle version et un avenant : voir [Faire un avenant](/aide/souscriptions/faire-un-avenant).
- La souscription doit exister : voir [Créer une souscription (inviter un contributeur)](/aide/souscriptions/creer-une-souscription).
- Tu ne peux modifier que la dernière version d'une souscription, tant qu'elle n'est pas terminée, et seulement si elle n'est pas ponctuelle (voir « Bon à savoir »).

## Étapes

### 1. Ouvre la souscription

Dans le menu, va dans **Souscriptions**, puis clique sur le nom du contributeur. La page s'ouvre sur la dernière version de la souscription.
En haut de la page, l'**Historique** liste les versions de la souscription (la version affichée est en gras) avec, pour chacune, l'état de son contrat. Si le contrat n'a pas encore été envoyé, un bouton **Créer le contrat** y figure. Le formulaire de modification se trouve juste en dessous.
### 2. Change les dates

Dans la section **Dates de souscription** :

- **Prise d'effet** : si le modèle de souscription a une récurrence, tu choisis dans une liste de débuts de période (par exemple « Semaine du 22 juin 2026 » pour une récurrence hebdomadaire, « Juillet 2026 » pour une récurrence mensuelle). La liste propose les périodes proches, passées comme à venir. Sans récurrence, un calendrier te laisse choisir n'importe quel jour.
- **Date de fin** : facultative. Laisse le champ vide pour une souscription sans fin.
### 3. Change le montant

La section **Montant de souscription** n'apparaît que si le modèle de souscription te fait fixer le montant. Modifie le **Montant HT** : le **Montant TTC** se recalcule avec le taux de TVA du modèle. Tu peux aussi saisir le montant TTC, et le montant HT suit. Si le taux de TVA est nul, le montant TTC n'est pas proposé.
### 4. Choisis le moyen de paiement

Le **Moyen de paiement** est celui de la souscription (à l'origine, celui du modèle). Change-le si elle sera réglée autrement : Virement SEPA, Prélèvement SEPA, Carte bancaire, Espèces ou Chèque. Le prélèvement SEPA est refusé si le modèle n'a pas de délai de prélèvement : voir [Choisir le moyen de paiement par défaut et le délai de prélèvement](/aide/modeles-de-souscription/choisir-le-moyen-de-paiement-par-defaut).
### 5. Corrige les informations du contributeur

La section **Informations du contributeur** reprend le **Nom** et l'**Email** du signataire côté contributeur, la **Raison sociale ou nom** et, si le modèle a pour mode d'envoi **Facture**, l'adresse, le **N° TVA** et le **SIRET** (ou l'identifiant d'entreprise du pays choisi). Tous les champs marqués d'une étoile sont obligatoires. Renseigne le N° TVA ou le SIRET et l'autre devient obligatoire.

Si le modèle de contrat comporte des champs personnalisés, ils apparaissent aussi : ceux qui te reviennent dans la section **Contrat de souscription**, ceux du contributeur dans cette section. Ils sont tous obligatoires.

Quand l'administrateur a donné au contributeur un accès à la plateforme, un encadré t'indique que ses informations légales (raison sociale, adresse, N° TVA, SIRET) ne sont plus modifiables ici. Le nom et l'e-mail du signataire restent modifiables.
### 6. Enregistre

Clique sur **Enregistrer**. Le message **Modifié(e)** confirme la modification.
- Si le modèle de souscription demande un contrat, tu arrives sur la page **Création du contrat** quand le contrat n'a pas encore été créé : le texte du contrat reprend déjà tes nouvelles valeurs (ici un montant de 45,6 € TTC). Relis-le, puis envoie-le : voir [Envoyer un contrat en signature](/aide/contrats-et-signature/envoyer-un-contrat-en-signature). Si le contrat a déjà été envoyé, tu reviens au formulaire de la souscription.
- Sans contrat (Adhésion simple), tu restes sur la page de la souscription.
## Et ensuite ?

- **Aucun e-mail n'est envoyé** au contributeur quand tu enregistres. S'il n'a pas reçu ou perdu son invitation, voir [Relancer l'invitation à signer](/aide/contrats-et-signature/relancer-l-invitation-a-signer). Ce qu'il voit en signant est décrit dans [Signer un contrat (contributeur)](/aide/contrats-et-signature/signer-un-contrat).
- **Contrat pas encore envoyé** : le contrat sera généré avec les valeurs que tu viens d'enregistrer.
- **Contrat déjà envoyé, mais pas encore signé par le contributeur** : la souscription est modifiée, mais le texte du contrat déjà envoyé ne change pas. Vérifie qu'il correspond toujours à ce que tu veux faire signer.
- **Contributions** : enregistrer ne crée, ne modifie et ne supprime aucune contribution. Celles d'une souscription avec contrat sont créées à la signature du contrat par les deux parties ; les suivantes, pour une souscription récurrente, par Cascade : voir [Générer automatiquement les contributions récurrentes](/aide/contributions/generer-automatiquement-les-contributions-recurrentes) et [Ce que Cascade fait chaque jour](/aide/general/ce-que-cascade-fait-chaque-jour). Pour corriger une contribution déjà créée, voir [Créer une contribution ou un avoir à la main](/aide/contributions/creer-une-contribution-ou-un-avoir).

## Bon à savoir

- **Le formulaire est grisé** (et le bouton **Enregistrer** disparaît) dans trois cas : un avenant existe déjà pour la version affichée (alerte **Avenant existant**), la souscription est terminée (alerte **Souscription expirée**), ou elle est ponctuelle. Pour une souscription ponctuelle, aucune alerte n'explique le blocage.
- Une souscription terminée n'est plus modifiable : sa date de fin est passée.
- **Le moment de la signature change tout.** Tant que le contributeur n'a pas signé, ou si le modèle est en Adhésion simple, la souscription est modifiée sur place : il n'y a ni nouvelle version ni avenant. Dès qu'il a signé, voir [Faire un avenant](/aide/souscriptions/faire-un-avenant), qui détaille aussi les dates minimales, la confirmation des changements et les éléments repris dans l'avenant.
- Le **Nom**, l'**Email** et les informations légales du contributeur sont toujours enregistrés directement, même après signature : ils ne créent pas de version.
- Le bouton **Annuler** (en haut de la page, ou sur la ligne d'une version dans l'**Historique**) supprime la souscription et son contrat. Il est proposé tant que le contrat n'est pas signé, y compris sans contrat. Une fois le contrat signé, il disparaît. Voir [Annuler une souscription](/aide/souscriptions/annuler-une-souscription).
- Le **Montant HT** n'est modifiable que si le modèle de souscription fixe le montant côté gérant. Les autres réglages du modèle (récurrence, délais, mode d'envoi) se changent dans le modèle : voir [Modifier un modèle de souscription](/aide/modeles-de-souscription/modifier-un-modele-de-souscription).
- Pour retrouver une souscription dans la liste : voir [Consulter et filtrer les souscriptions](/aide/souscriptions/consulter-et-filtrer-les-souscriptions). Pour relire les versions passées : voir [Consulter l'historique des versions d'une souscription](/aide/souscriptions/consulter-l-historique-des-versions).

## Questions fréquentes

::accordion
:::accordion-item{label="Je modifie la souscription, mais aucun avenant n'est proposé."}
Le contributeur n'a pas encore signé son contrat, ou le modèle est en Adhésion simple : la souscription est modifiée directement, sans avenant.
:::
:::accordion-item{label="Le formulaire est grisé, je ne peux plus enregistrer."}
Regarde l'alerte en haut du formulaire : un avenant existe déjà (ouvre la dernière version depuis la liste des souscriptions), ou la souscription est terminée. Sans alerte, la souscription est ponctuelle et ne peut pas être modifiée.
:::
:::accordion-item{label="J'ai changé le montant, mais mes contributions n'ont pas bougé."}
Enregistrer ne touche pas aux contributions déjà créées. Pour corriger l'une d'elles, crée un avoir puis une nouvelle contribution : voir [Créer une contribution ou un avoir à la main](/aide/contributions/creer-une-contribution-ou-un-avoir).
:::
::
