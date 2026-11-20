---
title: "Facturer des contributions (une ou plusieurs à la fois)"
module: "Facturation"
moduleSlug: facturation
order: 3
actors: ["Gérant"]
enBref: "Génère les factures d'une ou de plusieurs contributions à facturer en une seule action, puis les envoie par e-mail aux contributeurs. C'est aussi la seule façon de facturer un avoir."
where: "Contributions › (les lignes cochées) › Lancer la facturation"
status: review
needs: ["creer-un-modele-de-souscription", "creer-une-contribution-ou-un-avoir", "generer-automatiquement-les-contributions-recurrentes"]
glossary: ["avoir", "contributeur", "contribution", "delai-avant-facturation", "delai-de-paiement", "designation", "facture", "modele-de-souscription", "prefixe", "section-mode-d-envoi", "type-d-operation"]
video: ""
videoStatus: none
---

## Avant de commencer

- Il te faut au moins une contribution à facturer, c'est-à-dire dont le modèle de souscription est en mode d'envoi **Facture**. Elle vient d'une génération automatique (voir [Générer automatiquement les contributions récurrentes](/aide/contributions/generer-automatiquement-les-contributions-recurrentes)) ou de ta saisie (voir [Créer une contribution ou un avoir à la main](/aide/contributions/creer-une-contribution-ou-un-avoir)). Le mode d'envoi se règle à la création du modèle : voir [Créer un modèle de souscription](/aide/modeles-de-souscription/creer-un-modele-de-souscription).
- Les informations de ton organisation doivent être complètes : adresse de facturation, numéro SIRET (ou BCE) et préfixe des numéros de facture. Voir [Modifier les réglages de la cascade (identité juridique, IBAN, TVA, adresse, logo, préfixe)](/aide/cascade-et-organisation/modifier-les-reglages-de-la-cascade). Le contributeur doit aussi avoir une adresse de facturation.
- Si le modèle de souscription a un délai avant facturation, Cascade facture seule les contributions à leur jour de facturation : tu n'as alors rien à faire, sauf pour les avoirs. Voir [Facturer automatiquement](/aide/facturation/facturer-automatiquement).

## Étapes

### 1. Ouvre la liste des contributions

Dans le menu, va dans **Contributions**. Tu y trouves les contributions de la cascade courante, les plus anciennes d'abord. Pour retrouver une contribution précise, voir [Consulter et filtrer les contributions](/aide/contributions/consulter-et-filtrer-les-contributions).
### 2. Repère les contributions à facturer

Ouvre le filtre **Statut** et choisis **À facturer**. Par défaut, la liste ne montre que les contributions dont la date tombe entre un mois avant et un mois après aujourd'hui : élargis le filtre **Date** si tu cherches plus loin.

Tu peux aussi chercher par libellé de facture ou par numéro de facture avec la barre **Rechercher…**.
### 3. Coche les contributions à facturer

Une case à cocher apparaît au début des lignes qui peuvent encore être facturées. Pour facturer une seule contribution, coche seulement sa ligne.
Pour tout cocher d'un coup, utilise la case de l'en-tête (**Tout sélectionner**) : elle coche toutes les lignes facturables de la page affichée, pas celles des autres pages. La liste affiche 100 contributions par page, et tu peux passer à 50, 200 ou 500 en bas du tableau.
Certaines lignes n'ont pas de case :

- celles dont le modèle n'est pas en mode d'envoi Facture (statut **Nouvelle**) ;
- celles qui ont déjà une facture ;
- un avoir lié à une contribution que l'on n'a pas encore facturée. Une icône en forme de flèche courbe suit son montant : survole-la pour lire quelle contribution il corrige. Facture d'abord cette contribution, l'avoir pourra l'être ensuite, dans une seconde facturation.
Attention : la sélection est vidée dès que la liste change (changement de page, de filtre, de tri ou de recherche). Coche tes lignes juste avant de lancer la facturation.

### 4. Lance la facturation

Dès qu'au moins une ligne est cochée, le bouton **Lancer la facturation** apparaît en haut du tableau, avec le nombre de lignes cochées entre parenthèses. Clique dessus.
### 5. Confirme

Une fenêtre te demande « Voulez-vous lancer la facturation pour ces contributeurs ? ». Elle annonce le nombre de factures qui vont être créées, leur montant total HT (les avoirs se retranchent), la date des factures, qui est celle d'aujourd'hui, et rappelle qu'elles seront envoyées par e-mail aux contributeurs. Relis ces chiffres, puis clique sur **Confirmer**. **Annuler** te ramène à la liste sans rien changer.
Le message **Facturation lancée** s'affiche et tu reviens à la liste, dont les filtres sont remis à leur valeur par défaut. Les contributions facturées n'ont plus de case, et leur numéro de facture apparaît dans la colonne **N° facture** (fais défiler le tableau vers la droite si besoin). Si le numéro n'est pas encore là, recharge la page quelques instants plus tard.
Clique sur le numéro pour ouvrir la facture en PDF dans un nouvel onglet.
## Et ensuite ?

- **Facture** : une facture est créée pour chaque contribution cochée, toutes datées du jour où tu as confirmé. Son numéro se compose du préfixe de ta cascade, de `-F-`, de l'année sur deux chiffres, du mois et d'un compteur sur quatre chiffres. Le compteur repart à 1 chaque mois : `BAT1-F-26110002` est la deuxième facture de novembre 2026.
- **E-mail** : chaque facture part par e-mail au contact du contributeur, avec le PDF en pièce jointe. Voir [Envoyer la facture par e-mail au contributeur](/aide/facturation/envoyer-la-facture-par-e-mail).
- **Statut** : la contribution passe de **À facturer** à **Facturée**. Si elle a déjà reçu un paiement, elle garde son statut **Partiellement payée** ou **Payée**. Voir [Marquer une contribution comme payée](/aide/paiements/marquer-une-contribution-comme-payee).
- **Échéance** : la facture reprend le délai de paiement du modèle de souscription pour calculer sa date d'échéance. Un avoir n'a pas d'échéance : il rappelle le numéro de la facture de la contribution qu'il corrige.
- **Prélèvement SEPA** : si une contribution est facturée plus tard que prévu, la date de son prélèvement est repoussée à 2 jours après la date de la facture, pour laisser le temps au contributeur de recevoir la facture avant d'être prélevé. Un prélèvement déjà assez éloigné ne bouge pas.
- Le contributeur n'a rien à faire : il reçoit la facture et règle selon le moyen de paiement prévu.

## Bon à savoir

- Une contribution n'est jamais facturée deux fois, et une facture émise ne se modifie pas : il n'existe pas d'écran pour la corriger ou l'annuler. Pour rectifier une erreur, crée un avoir (voir [Créer une contribution ou un avoir à la main](/aide/contributions/creer-une-contribution-ou-un-avoir)), puis facture-le ici.
- Une contribution déjà payée mais pas encore facturée peut quand même l'être : un paiement reçu en avance n'empêche pas d'émettre la facture.
- Un avoir qui ne corrige aucune contribution peut être facturé tout de suite. S'il en corrige une, il faut que celle-ci soit facturée avant. Les deux ne se cochent pas ensemble : fais deux facturations successives.
- Les avoirs ne sont jamais facturés automatiquement : c'est toujours à toi de les facturer ici.
- Si la liste a changé entre-temps (une contribution a déjà été facturée par une autre personne ou par la facturation automatique), toute la sélection est refusée avec le message « Certaines contributions sélectionnées ne peuvent pas être facturées. » et aucune facture n'est créée. Recharge la liste et recommence.
- Pour émettre une facture, Cascade a besoin de l'adresse de facturation et du SIRET (ou BCE) de ton organisation, de l'adresse de facturation du contributeur et d'un type d'opération (Prestation de service ou Vente de marchandise). Si l'une de ces informations manque, la facture n'est pas créée et la contribution reste **À facturer**.
- Les passages automatiques, leurs horaires et leurs règles sont décrits dans [Ce que Cascade fait chaque jour](/aide/general/ce-que-cascade-fait-chaque-jour). Pour régler le jour de facturation automatique d'un modèle, voir [Configurer la facturation automatique](/aide/modeles-de-souscription/configurer-la-facturation-automatique).

## Questions fréquentes

::accordion
:::accordion-item{label="Je ne peux pas cocher une contribution."}
Vérifie son statut : seules celles qui sont **À facturer** ont une case, y compris si elles sont déjà payées. Une contribution **Nouvelle** appartient à un modèle qui n'envoie pas de facture, et une contribution **Facturée** a déjà la sienne. Pour un avoir, survole l'icône à côté du montant : il attend peut-être que la contribution qu'il corrige soit facturée.
:::
:::accordion-item{label="J'ai lancé la facturation, mais la contribution est toujours À facturer."}
La facture n'a probablement pas pu être créée : vérifie que ton organisation a une adresse de facturation et un SIRET (ou BCE), que le contributeur a une adresse de facturation et que la contribution a un type d'opération. Complète ce qui manque, puis relance la facturation de cette contribution.
:::
:::accordion-item{label="Puis-je choisir la date de la facture ?"}
Non : toutes les factures d'un lot portent la date du jour où tu confirmes.
:::
::
