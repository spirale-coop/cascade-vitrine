---
title: "Consulter et filtrer les contributions"
module: "Contributions"
moduleSlug: contributions
order: 1
actors: ["Gérant"]
enBref: "Retrouve les contributions de ta cascade : filtre-les par statut ou par période, cherche une facture, et vois d'un coup d'œil ce qui est facturé, payé ou encore à facturer."
where: "Contributions"
status: review
needs: ["creer-une-souscription"]
glossary: ["avoir", "contributeur", "contribution", "facture", "montant-ht", "paiement", "souscription"]
video: ""
videoStatus: none
---

## Avant de commencer

- Il te faut au moins une souscription dont les contributions existent déjà. Voir [Créer une souscription (inviter un contributeur)](/aide/souscriptions/creer-une-souscription).
- La liste ne montre que les contributions de la cascade dans laquelle tu te trouves. Pour en changer : [Changer de cascade courante](/aide/acces-et-compte/changer-de-cascade-courante).

## Étapes

### 1. Ouvre la liste

Dans le menu, clique sur **Contributions**. La liste s'ouvre sur les contributions dont la date tombe entre un mois avant et un mois après aujourd'hui, les plus anciennes en premier, par pages de 100 (tu peux passer à 50, 200 ou 500 par page, en bas à gauche).

Chaque ligne affiche, de gauche à droite : le moyen de paiement (une icône), le **Montant HT**, un repère « Automatique » ou « Manuelle », la **Souscription** (le contributeur, puis le modèle de souscription en dessous), la **Date**, le **Statut**, **Reçu / Total** et le **N° facture**. Les libellés « Automatique », « Manuelle » et le nom du moyen de paiement n'apparaissent qu'en infobulle, quand tu survoles l'icône.
### 2. Cherche une facture

Tape dans **Rechercher…** : la liste se met à jour toute seule après un court instant. La recherche porte sur le **numéro de facture** et sur le **libellé facture** de la contribution, pas sur le nom du contributeur. Elle ne tient pas compte de la majuscule et trouve aussi un morceau de numéro.

Quand tu cherches, la période (étape 4) n'est plus appliquée : tu retrouves une facture même si elle est ancienne. Le filtre de statut, lui, reste appliqué.
### 3. Filtre par statut

Ouvre la liste **Statut** et coche un ou plusieurs statuts ; tu peux en cocher plusieurs à la fois, et les vider avec la croix.

- **Nouvelle** : pas encore facturée, et le modèle de souscription n'envoie pas de facture.
- **À facturer** : pas encore facturée, et le modèle de souscription est en mode d'envoi Facture.
- **Facturée** : la facture existe, aucun paiement reçu.
- **Partiellement payée** : des paiements reçus, mais moins que le montant TTC.
- **Payée** : les paiements reçus couvrent le montant TTC.
### 4. Choisis la période

Clique sur le bouton de période, à droite des filtres : un calendrier de deux mois s'ouvre. Clique sur le premier jour, puis sur le dernier : la liste se recharge une fois les deux dates choisies. Les deux bornes sont incluses. **Effacer** retire toute restriction de date : la liste montre alors tout l'historique.
### 5. Trie la liste

Clique sur l'en-tête **Montant HT** ou **Date** : un clic trie dans l'ordre croissant (du plus petit montant, ou de la date la plus ancienne), un nouveau clic inverse l'ordre. La liste étant déjà triée par date croissante à l'ouverture, le premier clic sur **Date** la passe en ordre décroissant. L'icône à côté du nom de la colonne indique le tri en cours. Les autres colonnes ne se trient pas.
### 6. Lis une ligne

- **Reçu / Total** : le total est le montant TTC ; le reçu ne compte que les paiements marqués comme payés. Survole le montant pour voir le détail des paiements : montant, date, moyen de paiement et état (**Payé** ou **En attente**).
- **Avoir** : un montant négatif, suivi d'une flèche. Survole-le pour lire à quelle contribution il se rapporte. Un avoir n'a pas de reçu ni de total : la colonne affiche un tiret.
- **N° facture** : clique sur le numéro pour ouvrir la facture dans un nouvel onglet ; la date de la facture est dessous. Un tiret signifie que la contribution n'est pas encore facturée.
- **Souscription** : clique sur le nom du contributeur pour ouvrir sa souscription dans un nouvel onglet.
- Le menu **⋮** en bout de ligne n'apparaît que si un paiement est attendu : il propose **Ajouter un paiement** (voir [Marquer une contribution comme payée](/aide/paiements/marquer-une-contribution-comme-payee)). Sur un écran étroit, fais défiler le tableau vers la droite pour l'atteindre.
### 7. Lance la facturation de plusieurs contributions

Coche les contributions à facturer : seules celles qui peuvent l'être ont une case (voir « Bon à savoir »). La case de l'en-tête sélectionne toute la page. Le bouton **Lancer la facturation (N)** apparaît à côté des filtres, avec le nombre de contributions cochées. En cliquant dessus, une fenêtre te demande confirmation en rappelant le nombre de factures, le total HT et la date du jour. Le détail est dans [Facturer des contributions (une ou plusieurs à la fois)](/aide/facturation/facturer-des-contributions).
## Et ensuite ?

- Consulter la liste ne change rien et n'envoie rien à personne.
- Les contributions d'une souscription récurrente apparaissent seules dans la liste : voir [Générer automatiquement les contributions récurrentes](/aide/contributions/generer-automatiquement-les-contributions-recurrentes). Pour en ajouter une toi-même : [Créer une contribution ou un avoir à la main](/aide/contributions/creer-une-contribution-ou-un-avoir).
- Après **Lancer la facturation**, le message **Facturation lancée** s'affiche. Les factures sont créées, datées du jour du lancement, et envoyées par e-mail aux contributeurs ; les contributions passent à **Facturée** après quelques instants.
- Selon le modèle de souscription, les factures peuvent aussi partir seules, sans que tu coches quoi que ce soit : voir [Facturer automatiquement](/aide/facturation/facturer-automatiquement) et [Ce que Cascade fait chaque jour](/aide/general/ce-que-cascade-fait-chaque-jour).

## Bon à savoir

- Depuis cette liste, tu ne peux ni modifier ni supprimer une contribution.
- Une contribution **Payée** peut n'avoir aucune facture : le statut dépend des paiements reçus, avant la facture.
- Un avoir n'est jamais **Payé** : il reste **Nouvelle**, **À facturer** ou **Facturée**.
- Une case à cocher n'apparaît que sur une contribution qui n'a pas encore de facture, dont le modèle de souscription est en mode d'envoi Facture. Elle peut déjà être payée. Un avoir lié à une contribution n'a de case qu'une fois la contribution corrigée facturée : l'infobulle de son montant l'explique.
- La sélection se vide quand tu changes de page, de tri, de filtre ou de recherche.
- Depuis la liste des souscriptions, le lien **Contributions** d'une ligne (proposé quand le contrat est signé) ouvre cette liste dans un nouvel onglet, limitée à ce contributeur et sur tout l'historique. Rien à l'écran ne rappelle ce filtre : pour revenir à la liste complète, passe par le menu **Contributions**. Voir [Consulter et filtrer les souscriptions](/aide/souscriptions/consulter-et-filtrer-les-souscriptions).
- Quand rien ne correspond à ta recherche ou à tes filtres, la liste affiche **Aucune contribution** avec un bouton **Créer une contribution** : la liste n'est pas forcément vide, vérifie la période.

## Questions fréquentes

::accordion
:::accordion-item{label="Je ne vois pas une contribution que je connais."}
La liste ne montre par défaut que le mois qui précède et le mois qui suit aujourd'hui. Élargis la période, ou cherche son numéro de facture si elle est facturée.
:::
:::accordion-item{label="Je cherche un contributeur par son nom, mais rien ne s'affiche."}
La recherche ne porte que sur le numéro et le libellé de la facture. Pour voir les contributions d'un contributeur, ouvre la liste des souscriptions et clique sur le lien **Contributions** de sa ligne.
:::
:::accordion-item{label="Pourquoi je ne peux pas cocher une contribution ?"}
Elle est déjà facturée, son modèle de souscription n'est pas en mode d'envoi Facture, ou c'est un avoir dont la contribution corrigée n'a pas encore sa facture.
:::
::
