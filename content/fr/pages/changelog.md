---
title: Changelog — Cascade
description: Le journal des évolutions et corrections apportées à l'application Cascade depuis le début du projet.
---

::page-header
---
headline: Changelog
title: Journal des modifications
narrow: true
description: Ce document retrace les évolutions et corrections apportées à l'application.
---
::

::page-prose
## 13 octobre 2026

### Factures : un numéro qui indique le mois :changelog-tag{type="feature"}

Suite aux retours de la démo du 22 juillet, le numéro de facture contient désormais l'année et le mois. La numérotation repart à 1 au début de chaque mois, pour chaque Cascade : avec une numérotation continue, le mois n'aurait été qu'un décor. Par exemple, `PREFIXE-F-26100001` est la première facture d'octobre 2026. C'est admis légalement, puisque chaque série est identifiée par son préfixe (Cascade, année et mois). Les factures déjà émises gardent leur ancien numéro : un numéro de facture ne se modifie jamais.

### Avoirs : facturer dans le bon ordre :changelog-tag{type="feature"}

Suite aux retours de la démo du 22 juillet, on ne facture plus un avoir avant la contribution qu'il corrige : un avoir lié à une contribution ne peut être facturé qu'une fois cette contribution facturée. Dans la liste des contributions, une icône à côté du montant de l'avoir rappelle la contribution qu'il corrige, et une infobulle explique ce qu'il faut faire quand elle n'est pas encore facturée. Un avoir saisi sans contribution d'origine peut, lui, être facturé librement, pour ne pas rester bloqué définitivement. Ces règles s'appliquent aussi à la facturation en masse.

### Contributions payées avant d'être facturées :changelog-tag{type="feature"}

Une contribution réglée avant l'émission de sa facture peut désormais être facturée ensuite : un paiement reçu en avance ne doit pas empêcher d'émettre la facture. Auparavant, certains de ces cas étaient bloqués à tort.

### Contributions : une liste centrée sur la période utile :changelog-tag{type="feature"}

Par défaut, la liste n'affiche que les contributions allant d'un mois avant à un mois après aujourd'hui. La période se modifie dans un calendrier, et « Effacer » retire toute restriction. Quand vous saisissez une recherche, cette période est ignorée, et le lien « Contributions » d'une souscription affiche tout l'historique de cette souscription : dans ces deux cas, vous cherchez quelque chose de précis que la période par défaut ne doit pas vous masquer. Un ancien numéro de facture reste ainsi toujours retrouvable.

### Contributions : une liste plus lisible :changelog-tag{type="improvement"}

Le mode de paiement et le type de création (automatique ou manuelle) s'affichent sous forme d'icônes, pour gagner de la largeur, avec leur libellé au survol. Le montant HT est aligné à droite, seul le nom du contributeur est cliquable (le nom du modèle apparaît dessous), et la date d'une facture s'affiche sous son numéro.

### Invitations : plus de doublons :changelog-tag{type="feature"}

Il était possible d'inviter deux fois le même contributeur sur le même modèle de souscription, sans aucun avertissement. Ce n'est plus possible, que ce soit à l'unité ou en masse. Le message « Le contributeur existe déjà sur ce mode de contribution » s'affiche s'il a déjà une souscription active ou en attente de signature. En revanche, un contributeur dont la souscription est terminée peut être invité de nouveau. Dans une invitation en masse, un courriel qui apparaît plusieurs fois dans le fichier est signalé, car deux lignes identiques créeraient le doublon que cette règle veut éviter.

### Avenants : pas de date d'effet dans le passé :changelog-tag{type="feature"}

Lors de la modification d'une souscription déjà signée par le contributeur, la liste des dates d'effet pouvait proposer, et l'application accepter, une date antérieure à la version modifiée. La date d'effet ne peut désormais plus être antérieure à la version actuelle (elle peut rester identique, pour ne changer que le montant), et la liste ne propose que des dates valides. Tant que le contributeur n'a pas signé, la souscription se modifie encore librement : il n'y a pas encore d'avenant à protéger.

### Modèles de souscription : plus d'erreur sur un avenant vide :changelog-tag{type="fix"}

Enregistrer un modèle dont l'avenant est vide provoquait une erreur : c'est corrigé. À noter : pour modifier une souscription déjà signée, le modèle doit contenir un avenant (un en-tête, un pied de page ou au moins un paragraphe). Sinon, un message vous invite à en définir un : un avenant vide n'aurait rien à faire signer.

## 16 septembre 2026

### Organisations :changelog-tag{type="fix"}

Quand un contributeur est invité, Cascade crée automatiquement un nom d'organisation pour lui. Le contributeur peut désormais corriger ce nom lui-même s'il ne lui convient pas.

## 15 septembre 2026

### Paiements :changelog-tag{type="fix"}

Un paiement enregistré manuellement ne peut plus dépasser le solde restant dû sur la contribution.

## 9 septembre 2026

### Factures :changelog-tag{type="feature"}

La date d'une facture est désormais celle de sa création, et non plus celle de la contribution concernée.

## 4 septembre 2026

### Invitations :changelog-tag{type="fix"}

Un bouton « Renvoyer l'invitation » est disponible pour les contrats qui attendent encore une signature.

### Contributions manuelles :changelog-tag{type="fix"}

Un paiement en attente est créé dès la création de la contribution.

### Factures :changelog-tag{type="fix"}

La mention française sur les pénalités de retard n'apparaît plus sur les factures des émetteurs belges.

### Signature déléguée :changelog-tag{type="fix"}

Le formulaire de pré-signature rempli par le contributeur propose maintenant une liste de pays.

## 30 août 2026

### Organisations : toutes les informations légales au même endroit :changelog-tag{type="feature"}

La raison sociale, le SIRET ou numéro BCE, le numéro de TVA, l'IBAN et l'adresse sont regroupés dans une « Organisation », rattachée à la Cascade. Auparavant, ces informations étaient portées séparément par chaque Cascade et par chaque contributeur. C'est aussi l'appartenance à l'Organisation qui détermine désormais qui peut faire quoi : elle remplace les rôles propres à chaque Cascade. Les données existantes ont été reprises automatiquement.

### Formulaires :changelog-tag{type="feature"}

La création d'une Cascade et celle d'une souscription ont été repensées autour de l'Organisation. On peut réutiliser un contributeur déjà connu, et le nom de son organisation s'affiche dans les écrans concernés.

### Factures et contrats :changelog-tag{type="feature"}

Les factures, les courriels de contrat et les PDF utilisent ces nouvelles informations.

## 25 août 2026

### Liste des souscriptions :changelog-tag{type="feature"}

Elle propose maintenant un lien vers les contributions de chaque souscription, une colonne « Montant » et un bouton « Signer ».

### Avenants :changelog-tag{type="feature"}

Les contributions déjà facturées sont conservées quand un avenant recrée les contributions à venir.

### Contrats :changelog-tag{type="feature"}

Le courriel « contrat en cours de signature » n'est envoyé que lorsqu'aucun document n'est demandé au contributeur.

### Fichiers :changelog-tag{type="feature"}

Un fichier déposé ne se retire plus qu'avec la croix prévue à cet effet, et non plus en cliquant par erreur sur le champ.

## 21 août 2026

### Paiements des contributions :changelog-tag{type="feature"}

Le statut d'une contribution (payée, en attente, etc.) est maintenant calculé à partir de ses paiements réels, ce qui n'était pas le cas auparavant. Un gérant peut enregistrer un paiement dans le tableau des contributions. Si le montant reçu dépasse ce qui était dû, le trop-perçu génère automatiquement une nouvelle contribution.

### Historique des versions :changelog-tag{type="feature"}

Une version d'une souscription peut être annulée ou modifiée depuis l'historique, tant que le contrat n'est pas entièrement signé.

## 20 août 2026

### Historique des versions :changelog-tag{type="feature"}

Une fenêtre liste les changements et le contrat de chaque version d'une souscription, pour comprendre ce qui a évolué et quand.

### Avenants :changelog-tag{type="feature"}

Un avenant peut être validé sans passer par la signature électronique.

### Mon compte :changelog-tag{type="feature"}

Une nouvelle page de réglages permet de modifier son profil, son mot de passe et le thème de l'interface (clair ou sombre).

## 17 août 2026

### Nouvelle interface :changelog-tag{type="feature"}

L'application passe entièrement sur la nouvelle interface, avec une nouvelle page de connexion. Elle est désormais servie à la racine du site, et les anciennes adresses redirigent automatiquement vers les nouvelles. Seul le panneau d'administration reste inchangé.

## 16 août 2026

### Cascades :changelog-tag{type="feature"}

Il est possible de créer une Cascade, de modifier ses réglages (le logo est conservé si vous ne le changez pas) et de passer d'une Cascade à l'autre depuis le tableau de bord. Le préfixe des factures est proposé automatiquement à partir du nom.

### IBAN :changelog-tag{type="feature"}

L'IBAN est vérifié selon les règles de chaque pays, avec un message d'erreur clair en cas de problème.

### Belgique :changelog-tag{type="feature"}

Le numéro BCE est pris en charge pour les Cascades et les contributeurs. Les champs IBAN, SIRET ou BCE et TVA sont saisis avec un format guidé.

## 15 août 2026

### Invitation en masse :changelog-tag{type="feature"}

Vous pouvez inviter plusieurs contributeurs d'un coup à partir d'un fichier Excel : un modèle est fourni, les lignes sont vérifiées avant l'envoi, puis les invitations partent en arrière-plan. La liste des souscriptions se met à jour une fois l'envoi terminé.

### Annulation :changelog-tag{type="feature"}

Une souscription peut être annulée depuis la nouvelle interface.

## 8 août 2026

### Souscriptions :changelog-tag{type="feature"}

Les pages de liste et de modification sont disponibles dans la nouvelle interface. Pour créer un avenant, un aperçu montre clairement les différences avec la version précédente.

### Documents du contributeur :changelog-tag{type="feature"}

Le gérant peut valider ou rejeter les documents déposés par le contributeur.

## 6 août 2026

### Création d'une souscription :changelog-tag{type="feature"}

Un parcours guidé permet de créer un contributeur puis de l'inviter.

### Signature du contrat :changelog-tag{type="feature"}

Le contributeur dispose d'une page pour lire son contrat, le signer et déposer ses documents. Il remplit lui-même les champs que le gérant lui a délégués. Le lien de signature expire 10 jours après la date de début.

## 3 août 2026

### Modèles de souscription :changelog-tag{type="feature"}

Liste, création pas à pas et modification sont disponibles dans la nouvelle interface.

### Éditeur de contrat :changelog-tag{type="feature"}

Il propose des barres d'outils, des commandes rapides en tapant `/`, et l'insertion ou la création de champs personnalisés en tapant `[`.

### Contributions :changelog-tag{type="feature"}

Le formulaire de création a été repensé, avec une recherche pour choisir la souscription et un champ de date plus tolérant.

## 7 juillet 2026

### Une nouvelle interface :changelog-tag{type="feature"}

Lancement de la refonte complète de l'interface de l'application. Elle démarre par les contributions : liste avec facturation groupée, création d'une contribution et création d'avoirs. Les en-têtes et pieds de tableau restent visibles quand on fait défiler la page.

## 30 juin 2026

### Souscriptions :changelog-tag{type="feature"}

Nouveau type « Permanent », pour les souscriptions à paiement unique et sans limite de durée.

## 25 juin 2026

### Factures et avoirs :changelog-tag{type="feature"}

Cascade peut maintenant générer les factures à partir des contributions, ainsi que les avoirs. Chaque facture est un PDF dont le numéro est construit sur le préfixe de la Cascade, et les informations de facturation sont figées au moment de l'émission.

### Envoi :changelog-tag{type="feature"}

La facture est envoyée par courriel au contributeur, et un lien permet de l'ouvrir depuis la liste des contributions.

### Contributions :changelog-tag{type="feature"}

On peut filtrer la liste selon le statut de facturation et rechercher une contribution par numéro de facture.

## 24 juin 2026

### Contributions manuelles :changelog-tag{type="feature"}

Vous pouvez créer une contribution à la main, en plus de celles générées automatiquement. Le montant TTC est masqué quand la TVA est nulle.

### Courriels :changelog-tag{type="feature"}

Les courriels envoyés par Cascade ont été refaits, avec un modèle dédié pour chaque type de message.

## 2 avril 2026

### Documents du contributeur :changelog-tag{type="feature"}

Ils apparaissent sur la page de modification de la souscription, avec le motif du rejet quand un document est refusé, et un bouton pour les télécharger.

### TVA :changelog-tag{type="feature"}

Le numéro de TVA devient facultatif.

## 12 mars 2026

### Contrats :changelog-tag{type="fix"}

Le logo qui manquait sur certains contrats est corrigé. Les avenants ont maintenant leur propre courriel, et une souscription peut avoir un montant de 0.

## 14 février 2026

### Souscriptions :changelog-tag{type="feature"}

Les différentes versions d'une même souscription sont regroupées, avec un historique plus clair. Il n'est plus possible de modifier une version périmée.

### Contributions automatiques :changelog-tag{type="feature"}

Cascade crée automatiquement les contributions à partir de la souscription, sans doublon. Pour une souscription sans date de fin, elles se renouvellent d'elles-mêmes. La liste des contributions est aussi disponible.

## 28 décembre 2025

### Avenants :changelog-tag{type="feature"}

Des options permettent de choisir la date de début de l'avenant.

### Contrats :changelog-tag{type="feature"}

La section des annexes est masquée quand elle est vide, et aucun contrat n'est généré tant que toutes les signatures ne sont pas réunies.

## 11 décembre 2025

### Facturation :changelog-tag{type="feature"}

Elle se lance depuis la liste des contributions. Le préfixe de la Cascade et le nom de la société peuvent être insérés dans le contrat.

### Administration :changelog-tag{type="feature"}

Les administrateurs peuvent se connecter en tant qu'un utilisateur, par exemple pour l'aider, et consulter sa dernière activité.

## 9 décembre 2025

### Vocabulaire :changelog-tag{type="improvement"}

Les termes sont alignés sur le glossaire du domaine : ce qui s'appelait « contribution » devient une « souscription », et les « transactions » deviennent des « contributions ». Les contributions sont masquées en production le temps de leur finalisation.

## 27 novembre 2025

### Souscriptions :changelog-tag{type="feature"}

Il est possible de créer une souscription sans contrat, ainsi qu'une contribution ponctuelle.

### Contributions à venir :changelog-tag{type="feature"}

Elles peuvent être créées manuellement (29 novembre) ou automatiquement (2 décembre).

### Contrats :changelog-tag{type="feature"}

La mention « Avenant » apparaît sur les avenants, un message d'invitation peut être ajouté au premier courriel, et la date de début est fixée au 1er du mois.

## 7 novembre 2025

### Contrats :changelog-tag{type="feature"}

Le numéro de contrat est généré automatiquement, l'envoi des courriels de contrat est corrigé, et un nouvel avenant est créé après chaque mise à jour.

## 5 octobre 2025

### Modèles de contribution :changelog-tag{type="feature"}

Ils se créent pas à pas, avec un formulaire d'avenant, et peuvent être modifiés ou supprimés. L'éditeur de contrat permet d'insérer des champs personnalisés.

## 14 mai 2025

### Courriels :changelog-tag{type="feature"}

Un courriel est envoyé à chaque étape du contrat, et les annexes sont fusionnées avec le PDF du contrat.

## 13 avril 2025

### Contrats :changelog-tag{type="feature"}

Un contrat peut être créé, puis généré en PDF.

### Signature :changelog-tag{type="feature"}

Le contrat se signe en ligne, avec des écrans d'attente entre chaque étape. Le gérant valide les documents du contributeur, puis signe à son tour en tant qu'auteur.

## 20 mars 2025

### Contributeurs :changelog-tag{type="feature"}

Les champs manquants dans leur fiche sont ajoutés, et l'éditeur de contrat est agrandi pour être plus confortable.

## 2 février 2025

### Contributeurs :changelog-tag{type="feature"}

Il est possible de créer un contributeur et d'obtenir un aperçu de son contrat.

## 23 janvier 2025

### Modes de contribution :changelog-tag{type="feature"}

Un formulaire et une liste permettent de les gérer, avec une désignation de facture obligatoire. La création d'une Cascade donne de meilleurs retours à l'utilisateur.

## 18 novembre 2024

### Cascade :changelog-tag{type="feature"}

Chaque Cascade devient un espace de travail : on peut la créer, la modifier, et l'on est redirigé au bon endroit après la mise à jour.

## 12 novembre 2024

### Administration :changelog-tag{type="feature"}

Premier panneau d'administration, création d'utilisateurs et page de connexion personnalisée.

## 3 novembre 2024

### Lancement :changelog-tag{type="feature"}

Début du projet.

::
