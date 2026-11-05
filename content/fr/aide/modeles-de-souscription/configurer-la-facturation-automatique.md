---
title: "Configurer la facturation automatique"
module: "Modèles de souscription"
moduleSlug: modeles-de-souscription
order: 2
actors: ["Gérant"]
enBref: "Indique sur le modèle de souscription combien de jours avant la date de chaque contribution Cascade émet et envoie la facture, pour ne plus avoir à la faire à la main."
where: "Modèles de souscription › (le modèle) › Configuration générale › Mode d'envoi"
status: review
needs: ["creer-un-modele-de-souscription"]
glossary: ["avoir", "contributeur", "contribution", "delai-avant-facturation", "delai-de-paiement", "delai-de-prelevement", "designation", "facture", "modele-de-souscription", "moyen-de-paiement-par-defaut", "section-mode-d-envoi", "type-d-operation"]
video: ""
videoStatus: none
---

## Avant de commencer

- Il te faut un modèle de souscription en mode d'envoi **Facture** : c'est le seul mode disponible pour l'instant. Voir [Créer un modèle de souscription](/aide/modeles-de-souscription/creer-un-modele-de-souscription).
- Pour que les factures partent, l'adresse de facturation et le SIRET de ton organisation doivent être renseignés. Voir [Modifier les réglages de la cascade (identité juridique, IBAN, TVA, adresse, logo, préfixe)](/aide/cascade-et-organisation/modifier-les-reglages-de-la-cascade).

## Étapes

### 1. Ouvre le modèle de souscription

Dans le menu, va dans **Modèles de souscription**. Clique sur **Créer un modèle** pour un nouveau modèle, ou sur la ligne d'un modèle existant pour le modifier (voir [Modifier un modèle de souscription](/aide/modeles-de-souscription/modifier-un-modele-de-souscription)). Le réglage se trouve dans la première étape du formulaire, **Configuration générale**.

![La liste des modèles de souscription et le bouton Créer un modèle](/aide/configurer-la-facturation-automatique/facturation-auto-01-liste-modeles.png)

### 2. Choisis le mode d'envoi Facture

Dans la section **Mode d'envoi**, laisse **Facture** coché (**Email (à venir)** n'est pas encore disponible). Renseigne ensuite les réglages de la facture :

- **Courte désignation de l'élément à facturer** : le texte qui figurera sur chaque facture.
- **Type d'opération** : Prestation de service ou Vente de marchandise.
- **Délai de paiement** : Immédiatement, 30 jours fin de mois ou 60 jours fin de mois. C'est l'échéance de chaque facture, à partir de sa date d'émission.

### 3. Indique combien de jours avant la contribution facturer

Dans le champ **Facturer automatiquement … jours avant la date de contribution**, saisis un nombre de jours entre 0 et 365. Avec 10 jours, par exemple, la contribution du 1er mars est facturée le 19 février. Avec 0, elle est facturée le jour même.

Si tu laisses le champ vide, rien n'est facturé automatiquement : tu factures toi-même depuis la liste des contributions (voir [Facturer des contributions (une ou plusieurs à la fois)](/aide/facturation/facturer-des-contributions)).

![Le champ Facturer automatiquement laissé vide : facturation à la main](/aide/configurer-la-facturation-automatique/facturation-auto-02a-delai-vide.png)

![Le champ Facturer automatiquement rempli avec 10 jours](/aide/configurer-la-facturation-automatique/facturation-auto-02b-delai-10.png)

### 4. Prépare le prélèvement SEPA (facultatif)

Si les contributions de ce modèle doivent être prélevées, choisis **Prélèvement SEPA** comme **Moyen de paiement par défaut**. Le champ **Prélever … jours avant la date de contribution** devient alors obligatoire. Il ne s'utilise qu'avec la facturation automatique : la facture sert de préavis, et il faut au moins 2 jours entre la facture et le prélèvement. Avec une facturation 10 jours avant la contribution, le prélèvement peut donc avoir lieu au plus 8 jours avant.

Entre 2 et 13 jours de préavis, un encadré orange te rappelle de mentionner ce préavis réduit dans tes contrats. Sous 2 jours, l'enregistrement est refusé avec un message qui indique le délai maximal possible. Le détail de ce réglage est dans [Choisir le moyen de paiement par défaut et le délai de prélèvement](/aide/modeles-de-souscription/choisir-le-moyen-de-paiement-par-defaut).

![Le prélèvement SEPA avec 3 jours avant la contribution : préavis de 7 jours](/aide/configurer-la-facturation-automatique/facturation-auto-03a-prelevement.png)

![Un prélèvement 9 jours avant la contribution, refusé : le préavis serait inférieur à 2 jours](/aide/configurer-la-facturation-automatique/facturation-auto-03b-prelevement-trop-court.png)

### 5. Enregistre le modèle

En adhésion simple, clique sur **Créer le modèle de souscription** (**Enregistrer les modifications** pour un modèle existant). En adhésion avec contrat, clique sur **Suivant** jusqu'à la dernière étape : le bouton d'enregistrement s'y trouve. Si une règle n'est pas respectée, un message apparaît sous le champ concerné et tu restes sur le formulaire.

![Le bouton Créer le modèle de souscription](/aide/configurer-la-facturation-automatique/facturation-auto-04-creer.png)

## Et ensuite ?

- Chaque matin, Cascade facture sans action de ta part les contributions du modèle qui sont positives, n'ont pas encore de facture et dont le jour de facturation (leur date moins le nombre de jours du modèle) est arrivé ou passé. Les horaires et toutes les règles du passage sont dans [Ce que Cascade fait chaque jour](/aide/general/ce-que-cascade-fait-chaque-jour) ; le déroulé complet, du point de vue du gérant, est dans [Facturer automatiquement](/aide/facturation/facturer-automatiquement).
- La facture est datée du jour du passage, son échéance suit le **Délai de paiement** du modèle, et elle part aussitôt par e-mail au contributeur (voir [Envoyer la facture par e-mail au contributeur](/aide/facturation/envoyer-la-facture-par-e-mail)). La contribution passe à **Facturée**.
- Si le jour de facturation est déjà passé (souscription signée tard, passage manqué), la contribution est facturée au passage suivant.
- Pour une contribution en **Prélèvement SEPA**, la date de prélèvement est repoussée à 2 jours après la facture si elle tombait plus tôt. Pour l'instant, aucun prélèvement n'est encore exécuté : seule sa date est préparée.
- Les avoirs ne sont jamais facturés automatiquement : tu les factures depuis la liste.

## Bon à savoir

- Le réglage s'applique à toutes les contributions du modèle, y compris celles déjà créées et pas encore facturées : si leur jour de facturation est déjà passé, elles sont facturées au prochain passage, et leur contributeur reçoit la facture par e-mail. Une contribution déjà facturée n'est jamais refacturée.
- Si les adresses de facturation, le SIRET de ton organisation ou le type d'opération manquent, la contribution n'est pas facturée et tu n'en es pas prévenu : elle sera facturée au premier passage qui suit la correction.
- Tant que le modèle a un **Délai de prélèvement**, tu ne peux pas vider le champ de facturation automatique. De même, tant qu'une souscription du modèle est en Prélèvement SEPA, le délai de prélèvement ne peut pas être vidé : il faut d'abord changer le moyen de paiement de ces souscriptions.
- Modifier le délai de facturation change le jour de facturation des contributions pas encore facturées ; une facture déjà émise n'est jamais modifiée.
- Il n'y a pas de bouton pour déclencher la facturation automatique à la main : pour facturer tout de suite, facture depuis la liste des contributions.

## Questions fréquentes

::accordion
:::accordion-item{label="Je laisse le champ vide : que se passe-t-il ?"}
Rien n'est facturé automatiquement. Les contributions restent **À facturer** jusqu'à ce que tu les factures toi-même depuis la liste.
:::
:::accordion-item{label="La date de facturation est passée, mais ma contribution est toujours À facturer."}
Vérifie que ce n'est pas un avoir, que le modèle a bien un nombre de jours renseigné, et que les adresses de facturation, le SIRET et le type d'opération sont complétés. Une fois corrigé, elle part au prochain passage.
:::
:::accordion-item{label="Puis-je prélever sans facturation automatique ?"}
Non : le prélèvement s'appuie sur la facture, qui sert de préavis. Renseigne d'abord le délai de facturation automatique.
:::
::
