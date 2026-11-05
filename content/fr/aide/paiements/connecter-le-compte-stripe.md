---
title: "Connecter le compte Stripe de l'organisation"
module: "Paiements"
moduleSlug: paiements
order: 1
actors: ["Gérant"]
enBref: "Relie l'organisation à Stripe pour pouvoir encaisser les contributions par prélèvement. Tu remplis une seule fois le formulaire de Stripe, et le compte est partagé par toutes les cascades de l'organisation."
where: "Ma cascade › Compte Stripe"
status: review
needs: ["choisir-le-moyen-de-paiement-par-defaut", "modifier-les-reglages-de-la-cascade"]
glossary: ["compte-stripe", "organisation"]
video: ""
videoStatus: none
---

## Avant de commencer

- Les informations de facturation de l'organisation doivent être remplies. Voir [Modifier les réglages de la cascade (identité juridique, IBAN, TVA, adresse, logo, préfixe)](/aide/cascade-et-organisation/modifier-les-reglages-de-la-cascade).
- Prévois de quoi répondre aux questions de Stripe : informations sur l'organisation, pièce d'identité du représentant, bénéficiaires effectifs et IBAN du compte qui recevra l'argent.
- Un seul compte Stripe est utilisé pour l'organisation. Si elle compte plusieurs cascades, elles le partagent.

## Étapes

### 1. Ouvre le bloc Compte Stripe

Dans le menu, va dans **Ma cascade**, puis descends tout en bas de la page, jusqu'au bloc **Compte Stripe**. Clique sur le bouton pour commencer l'inscription (**Reprendre l'inscription** si tu l'avais déjà commencée). Tu quittes Cascade pour le site de Stripe.

![](/aide/connecter-le-compte-stripe/01-ouvrir.png)

### 2. Crée ton accès Stripe

Saisis ton adresse e-mail, puis choisis un mot de passe. Stripe te demande ensuite de sécuriser l'accès avec une authentification à deux facteurs : scanne le QR code avec une application d'authentification, puis saisis le code à 6 chiffres qu'elle affiche. Stripe te montre alors un code de récupération : garde-le précieusement.

![](/aide/connecter-le-compte-stripe/02-email.png)

![](/aide/connecter-le-compte-stripe/03-mot-de-passe.png)

![](/aide/connecter-le-compte-stripe/04-2fa.png)

### 3. Présente ton organisation

Indique le pays et le type d'entreprise (particulier, société ou association), puis, pour une société, sa structure. Renseigne ensuite sa dénomination, son numéro SIREN, son adresse, son téléphone, son secteur d'activité, son site web et une courte description de ce que tu vends.

![](/aide/connecter-le-compte-stripe/05-type.png)

![](/aide/connecter-le-compte-stripe/06-entreprise.png)

### 4. Identifie le représentant

Saisis le nom, l'e-mail, l'intitulé de poste, la date de naissance, l'adresse et le téléphone de la personne qui représente l'organisation. Stripe lui demande ensuite de prouver son identité avec une pièce d'identité.

![](/aide/connecter-le-compte-stripe/07-representant.png)

![](/aide/connecter-le-compte-stripe/08a-identite.png)

![](/aide/connecter-le-compte-stripe/08b-identite-stripe.png)

### 5. Confirme les bénéficiaires effectifs

Stripe peut te proposer des personnes. Vérifie la liste, puis complète les informations demandées pour chacune (e-mail, date de naissance, adresse).

![](/aide/connecter-le-compte-stripe/09-beneficiaires.png)

### 6. Ajoute le compte bancaire

Renseigne l'IBAN du compte qui recevra les versements. Stripe affiche aussi les conditions du mandat de prélèvement SEPA : lis-les avant de continuer.

![](/aide/connecter-le-compte-stripe/10-iban.png)

### 7. Complète les informations publiques

Vérifie le nom et le téléphone qui apparaîtront aux clients sur leurs relevés.

![](/aide/connecter-le-compte-stripe/11-public.png)

### 8. Choisis les options facultatives

Stripe propose un niveau de protection contre la fraude, une contribution climat et le calcul des taxes. Cascade n'utilise pas le calcul des taxes : choisis **Pas pour l'instant**. Tu peux refuser la contribution climat avec **Non merci**.

![](/aide/connecter-le-compte-stripe/12-radar.png)

![](/aide/connecter-le-compte-stripe/13-climate.png)

![](/aide/connecter-le-compte-stripe/14-taxes.png)

### 9. Relis et envoie

Le récapitulatif regroupe tout ce que tu as saisi : modifie ce qui doit l'être, puis clique sur **Accepter et envoyer**. Tu certifies ainsi que les informations sont exactes, tu acceptes le contrat de comptes connectés de Stripe et tu acceptes de recevoir des SMS automatisés.

![](/aide/connecter-le-compte-stripe/15a-recap.png)

![](/aide/connecter-le-compte-stripe/15b-recap.png)

## Et ensuite ?

- Tu reviens dans Cascade, sur Ma cascade, avec le message « Votre compte Stripe est connecté : vous pouvez encaisser par prélèvement. ».
- Le bloc **Compte Stripe** affiche **Opérationnel**, précise que le compte est partagé par les cascades de l'organisation et propose **Ouvrir le tableau de bord Stripe**.
- Les changements de situation du compte sont repris automatiquement dans Cascade, sans qu'aucun e-mail ne soit envoyé.
- Pour encaisser par prélèvement, il faut aussi un moyen de paiement par défaut et un délai de prélèvement. Voir [Choisir le moyen de paiement par défaut et le délai de prélèvement](/aide/modeles-de-souscription/choisir-le-moyen-de-paiement-par-defaut).

![](/aide/connecter-le-compte-stripe/16-retour.png)

## Bon à savoir

- Un seul compte Stripe est relié à l'organisation, quel que soit le nombre de cascades.
- Cascade n'utilise pas toutes les options que Stripe propose pendant l'inscription (protection contre la fraude, climat, taxes).
- Si tu quittes Stripe avant la fin, tu peux reprendre là où tu t'étais arrêté depuis le bloc **Compte Stripe**.

## Questions fréquentes

::accordion
:::accordion-item{label="J'ai fermé la page Stripe avant la fin, que faire ?"}
Retourne dans Ma cascade, bloc **Compte Stripe**, et clique sur **Reprendre l'inscription**.
:::
:::accordion-item{label="Où voir mon compte Stripe une fois connecté ?"}
Dans le bloc **Compte Stripe**, clique sur **Ouvrir le tableau de bord Stripe**.
:::
::
