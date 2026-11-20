---
title: "View and filter subscriptions"
module: "Subscriptions"
moduleSlug: souscriptions
order: 2
actors: ["Manager"]
enBref: "Find your Cascade's subscriptions in a single list: search for a contributor or a model, sort the columns, read the status and the amount, and open a subscription or its contributions."
where: "Subscriptions"
status: review
needs: ["creer-une-souscription"]
glossary: ["avenant", "contrat", "contributeur", "contribution", "date-de-fin", "date-de-prise-d-effet", "modele-de-souscription", "signataire", "souscription", "version"]
video: ""
videoStatus: none
---

## Before you start

- You need at least one subscription in the current Cascade. See [Create a subscription (invite a contributor)](/en/aide/souscriptions/creer-une-souscription).
- The list only shows the subscriptions of the current Cascade. To view another Cascade, first change Cascade: see [Change the current Cascade](/en/aide/acces-et-compte/changer-de-cascade-courante).

## Steps

### 1. Open the list

In the menu, click **Souscriptions** (Subscriptions). The list shows one row per subscription: the contributor, the subscription model, the first effective date, the end date, the status and the amount. If a subscription has several versions, it still takes up only one row, and it is its most recent version that is summarized.

A small document icon, with no column title, marks subscriptions with a contract: hover over it to read **Avec contrat** (With contract), or **Avec contrat et avenants** (With contract and amendments) when the subscription already has several versions.
### 2. Find a subscription with the search

Type a few letters in the **Rechercher…** (Search…) field. The list updates by itself, without validating, and keeps only the subscriptions whose contributor name or subscription model name contains this text (upper and lower case do not matter). Clear the field to see the whole list again.
### 3. Sort the columns

Click a column header to sort the list: **Contributeur** (Contributor), **Modèle de souscription** (Subscription model), **Date de première prise d'effet** (First effective date), **Date de fin** (End date) or **Statut** (Status). A first click sorts in ascending order, a second in descending order; the header icon shows the current sort direction. Sorting by status follows the order of a subscription's life: **À venir** (Upcoming), then **Actif** (Active), then **Terminé** (Ended).

The **Montant** (Amount) column and the contract icon column cannot be sorted.
### 4. Read the status, the end date and the amount

On a narrow screen, scroll the table to the right to see the last columns.

- **Date de fin** (End date): a dash means the subscription has no planned end.
- **Statut** (Status): **À venir** (Upcoming) as long as the first effective date has not arrived, **Terminé** (Ended) as soon as the end date of the most recent version is reached (the day itself included), **Actif** (Active) otherwise.
- **Montant** (Amount): the amount incl. VAT of the most recent version, calculated with the subscription model's VAT rate. It is the amount of one contribution, whether one-off or generated at each due date.
### 5. Go further from a row

- Click anywhere on a row (or on the contributor's name) to open the subscription, in its most recent version: see [Edit a subscription](/en/aide/souscriptions/modifier-une-souscription) and [View a subscription's version history](/en/aide/souscriptions/consulter-l-historique-des-versions).
- When the subscription's contract is signed, a **Contributions** link appears at the end of the row. It opens in a new tab on all the contributions of this subscription, with no period limit: see [View and filter contributions](/en/aide/contributions/consulter-et-filtrer-les-contributions).
- When the contract is awaiting signature and you are one of the model's signers, a **Signer** (Sign) button appears instead, and opens the signature page in a new tab: see [Countersign a contract (signer)](/en/aide/contrats-et-signature/contresigner-un-contrat).
### 6. Browse the pages

At the bottom of the list, choose the number of subscriptions shown per page (50, 100, 200 or 500; 100 by default) and move from one page to another with the pagination. The search and the sort stay applied when you change page.
## What happens next?

- Above the list, **Créer une souscription** (Create a subscription) opens the form to invite a contributor, and **Inviter plusieurs contributeurs** (Invite several contributors) lets you invite several at once: see [Create a subscription (invite a contributor)](/en/aide/souscriptions/creer-une-souscription) and [Invite several contributors in bulk](/en/aide/souscriptions/inviter-plusieurs-contributeurs-en-masse).
- After a bulk invitation, you come back to this list, which refreshes by itself for about a minute so that the new subscriptions appear as they are created.
- When supporting documents are awaiting your approval, a **Documents à valider** (Documents to approve) entry with the number of documents appears under **Souscriptions** (Subscriptions) in the menu: see [Approve or reject supporting documents](/en/aide/documents-justificatifs/valider-ou-rejeter-des-documents-justificatifs).

## Good to know

- The list has no filter: you have the search and the sort. It is not possible, for example, to show only active subscriptions.
- The search only covers the contributor's name and the subscription model's name, not the dates, the status or the amount.
- The search, the sort and the page displayed are in the page address: you can copy it to find or share the same view.
- The status depends only on the dates. A subscription whose contract is not yet signed is **Actif** (Active) as soon as its effective date has arrived; the progress of the contract is followed in the subscription itself (see [Send a contract for signature](/en/aide/contrats-et-signature/envoyer-un-contrat-en-signature)).
- An ended subscription stays in the list, with the status **Terminé** (Ended). A cancelled subscription, however, is deleted and disappears from the list: see [Cancel a subscription](/en/aide/souscriptions/annuler-une-souscription).
- The **Contributions** link only appears for subscriptions whose contract is signed; so there is none for subscriptions without a contract.
- The amount shown does not take previous versions into account: only the most recent version counts. See [Make an amendment](/en/aide/souscriptions/faire-un-avenant) to change the amount of a signed subscription.

## Frequently asked questions

::accordion
:::accordion-item{label="I can't find a subscription I just created."}
Check that you are in the right Cascade, then clear the search field. After a bulk invitation, wait a few seconds: the subscriptions arrive one after another.
:::
:::accordion-item{label="How do I see only the current subscriptions?"}
For now, the list cannot be filtered by status: click the **Statut** (Status) header to group the **Actif** (Active) subscriptions, or the upcoming and ended ones.
:::
:::accordion-item{label="Why is the amount not the one in my original contract?"}
The **Montant** (Amount) column shows the amount incl. VAT of the most recent version of the subscription. If an amendment changed the amount, it is the new one that appears.
:::
::
