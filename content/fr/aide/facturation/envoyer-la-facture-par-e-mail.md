---
title: "Envoyer la facture par e-mail au contributeur"
module: "Facturation"
moduleSlug: facturation
order: 1
actors: ["Gérant", "Contributeur"]
enBref: "Quand tu lances la facturation (ou quand Cascade facture seule), le contributeur reçoit sa facture en pièce jointe d'un e-mail, à l'adresse de contact de sa souscription : il n'a pas de compte, c'est son seul accès à la facture."
where: "Contributions › (cocher des contributions) › Lancer la facturation › Confirmer"
status: review
needs: ["creer-un-modele-de-souscription", "creer-une-souscription", "modifier-les-reglages-de-la-cascade"]
glossary: ["avoir", "contributeur", "contribution", "delai-de-paiement", "facture", "modele-de-souscription", "section-mode-d-envoi", "souscription"]
video: ""
videoStatus: none
---

## Avant de commencer

- Le modèle de souscription doit être en mode d'envoi **Facture** : c'est ce qui rend les contributions facturables. Voir [Créer un modèle de souscription](/aide/modeles-de-souscription/creer-un-modele-de-souscription). L'autre mode d'envoi, **Email (à venir)**, n'est pas encore disponible : il est grisé dans le modèle.
- Les informations de facturation de ton organisation doivent être complètes (adresse et SIRET au minimum). Voir [Modifier les réglages de la cascade (identité juridique, IBAN, TVA, adresse, logo, préfixe)](/aide/cascade-et-organisation/modifier-les-reglages-de-la-cascade).
- Le contributeur doit avoir une adresse de facturation et une adresse e-mail de contact : c'est à cette adresse que part la facture. Voir [Créer une souscription (inviter un contributeur)](/aide/souscriptions/creer-une-souscription).

## Étapes

Le contributeur n'a pas de compte Cascade : l'e-mail est la seule façon dont il reçoit sa facture. Il part dans deux cas, avec le même contenu : quand tu lances la facturation depuis la liste (étapes ci-dessous), et quand Cascade facture toute seule (voir [Facturer automatiquement](/aide/facturation/facturer-automatiquement)). Il n'y a aucun autre réglage à faire pour l'envoi.

### 1. Sélectionne les contributions à facturer

Dans le menu, va dans **Contributions**. Coche la case de chaque contribution **À facturer** que tu veux envoyer ; le bouton **Lancer la facturation** apparaît en haut de la liste, avec le nombre de contributions cochées entre parenthèses. Les contributions qui ne peuvent pas être facturées (déjà facturées, ou sans facture dans leur modèle) n'ont pas de case à cocher.
### 2. Lance la facturation et confirme

Clique sur **Lancer la facturation (1)**. Une fenêtre te rappelle ce qui va se passer : le nombre de factures générées, leur montant total HT, leur date (le jour même) et leur envoi par e-mail aux contributeurs concernés. Clique sur **Confirmer** pour lancer l'envoi, ou sur **Annuler** pour revenir à la liste sans rien envoyer.
### 3. Retrouve la facture dans la liste

Le message **Facturation lancée** s'affiche. Cascade crée alors chaque facture puis l'envoie au contributeur ; si la liste n'a pas encore changé, recharge la page. La contribution passe à **Facturée** et son numéro apparaît dans la colonne **N° facture**, avec la date de la facture. Clique sur le numéro pour ouvrir la facture telle que le contributeur la reçoit.
## Et ensuite ?

- **E-mail** : le contributeur reçoit un e-mail à l'adresse e-mail de contact de sa souscription. Il lui indique le numéro de la facture, son échéance, ainsi que le nom de ta cascade et de ton organisation. La facture est jointe en PDF, sous le nom **Facture** suivi de son numéro.
- **Échéance** : elle suit le **Délai de paiement** du modèle de souscription, à partir de la date de la facture.
- **Statut** : la contribution est **Facturée** dès que la facture est créée. Elle devient **Payée** quand tu enregistres le paiement : voir [Marquer une contribution comme payée](/aide/paiements/marquer-une-contribution-comme-payee).
- **Prélèvement SEPA** : la facture fait office de préavis. Si la date de prélèvement prévue tombe moins de 2 jours après la facture, elle est repoussée à 2 jours après.
- **Facturation automatique** : quand le modèle a un délai de facturation, la même facture et le même e-mail partent seuls, le matin du jour de facturation. Voir [Facturer automatiquement](/aide/facturation/facturer-automatiquement) et [Ce que Cascade fait chaque jour](/aide/general/ce-que-cascade-fait-chaque-jour).

## Bon à savoir

- Le contributeur ne reçoit un e-mail qu'avec sa facture : la création d'une contribution, d'une souscription ou d'un paiement n'en envoie pas à ce titre.
- La facture est datée du jour où tu confirmes, pour toutes les contributions de la même sélection.
- Un avoir se facture et s'envoie de la même façon, depuis la liste ; il n'est jamais envoyé automatiquement. Il ne peut partir qu'une fois la contribution qu'il corrige facturée, et ne se sélectionne pas dans la même sélection qu'elle : fais deux facturations successives. Voir [Créer une contribution ou un avoir à la main](/aide/contributions/creer-une-contribution-ou-un-avoir).
- Il n'existe pas de bouton pour renvoyer une facture déjà envoyée, ni pour changer l'adresse d'envoi après coup : une contribution facturée ne se facture plus. Pour l'instant, la facture reste téléchargeable depuis la colonne **N° facture**.
- Une facture envoyée n'est jamais modifiée. Si l'envoi échoue, Cascade réessaie une fois ; elle renvoie alors la même facture, sans en créer une seconde.
- Pour facturer plusieurs contributions d'un coup et la sélection en détail, voir [Facturer des contributions (une ou plusieurs à la fois)](/aide/facturation/facturer-des-contributions).

## Questions fréquentes

::accordion
:::accordion-item{label="Le contributeur dit n'avoir rien reçu."}
Vérifie dans la liste que la contribution est **Facturée**, puis l'adresse e-mail de contact de sa souscription, et demande-lui de regarder ses courriers indésirables. Si la contribution n'est pas **Facturée**, la facture n'a pas été créée : vérifie les informations de facturation de ton organisation et l'adresse de facturation du contributeur.
:::
:::accordion-item{label="Puis-je renvoyer la facture ?"}
Pas depuis Cascade pour l'instant. Tu peux ouvrir la facture depuis la colonne **N° facture** et la transmettre toi-même.
:::
:::accordion-item{label="J'ai lancé la facturation mais rien n'apparaît."}
Recharge la page. Si la contribution est toujours **À facturer**, la facture n'a pas pu être créée (informations de facturation incomplètes, par exemple) : Cascade ne t'avertit pas, corrige les informations puis relance la facturation.
:::
::
