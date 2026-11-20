---
title: "View a subscription's version history"
module: "Subscriptions"
moduleSlug: souscriptions
order: 3
actors: ["Manager"]
enBref: "Find all the successive versions of a subscription, with what changed from one to the next and the contract or amendment that goes with them."
where: "Subscriptions › (the contributor) › History"
status: review
needs: ["creer-une-souscription", "faire-un-avenant"]
glossary: ["avenant", "contrat", "date-de-fin", "date-de-prise-d-effet", "modele-d-avenant", "montant-ht", "souscription", "version"]
video: ""
videoStatus: none
---

## Before you start

- You need a subscription that has already been created: see [Create a subscription (invite a contributor)](/en/aide/souscriptions/creer-une-souscription).
- The history becomes useful as soon as there are several versions, that is after an amendment: see [Make an amendment](/en/aide/souscriptions/faire-un-avenant).

## Steps

### 1. Open the subscription

In the menu, go to **Souscriptions** (Subscriptions), then click the contributor's name. The list shows a single row per subscription, even when it has several versions. The link always opens the most recent version.
### 2. Find the History block

At the top of the page, the **Historique** (History) block lists all the versions of the subscription, from the oldest to the most recent. Each row shows the version's effective date, followed by its end date when it has one. The version you are viewing is in bold.

To the right of each row, a badge gives the status of this version's contract or amendment: **Invitation envoyée** (Invitation sent), **À signer par le contributeur** (To be signed by the contributor), **Documents à valider** (Documents to approve), **Documents à mettre à jour** (Documents to update), **À signer par le signataire** (To be signed by the signer) or **Signé le …** (Signed on …) (with the signature date). If the version does not have a contract yet, a **Créer le contrat** (Create the contract) button (first version) or **Créer l'avenant** (Create the amendment) button (following versions) replaces it.

The block does not appear for a subscription model without a contract that has only one version.
### 3. Hover over a version to see what changed

Move the mouse over a row: a window opens. Its title is **Avenant du …** (Amendment of …) (or **Contrat du …** (Contract of …) for the first version), dated on the day the document was created, not the day it was signed. A table compares, field by field, the **Avant** (Before) value and the **Après** (After) value with respect to the previous version. An empty field is shown as **Non renseigné** (Not provided).

This table only lists the fields that trigger a paragraph of the amendment template: see [Set up the amendment template (conditional paragraphs)](/en/aide/modeles-de-souscription/configurer-le-modele-d-avenant). A change that triggers no paragraph does not appear in it.

The window also offers:

- **Voir les détails** (View details): opens the subscription as it was in this version (step 5);
- **Voir l'avenant** (View the amendment) (or **Voir le contrat** (View the contract) for the first version): opens the document in a new tab;
- **Créer le contrat** (Create the contract) or **Créer l'avenant** (Create the amendment), if this version does not have one yet;
- **Renvoyer l'invitation** (Resend the invitation), as long as the contributor has not opened their link: see [Resend the invitation to sign](/en/aide/contrats-et-signature/relancer-l-invitation-a-signer).
### 4. Compare with the first version

The first version has nothing to compare: its window shows no table, only **Voir les détails** (View details) and **Voir le contrat** (View the contract).
### 5. Open an older version

Click **Voir les détails** (View details) to display the subscription with the values of this version. If a more recent version exists, the form is greyed out and an **Avenant existant** (Existing amendment) box explains that you can no longer edit it. Only the latest version can be edited: see [Edit a subscription](/en/aide/souscriptions/modifier-une-souscription).
## What happens next?

- Viewing changes nothing: no email is sent and nothing is modified.
- The buttons in the history lead to the other actions. To create a missing document, see [Send a contract for signature](/en/aide/contrats-et-signature/envoyer-un-contrat-en-signature). On the contributor's side, see [Sign a contract (contributor)](/en/aide/contrats-et-signature/signer-un-contrat); on the signer's side, see [Countersign a contract (signer)](/en/aide/contrats-et-signature/contresigner-un-contrat).

## Good to know

- A new version is only created when you edit a subscription whose contributor has already signed the contract. Before this signature, the change applies directly to the existing version. The future uninvoiced contributions of the old version are then replaced; the ones you created by hand are kept.
- An older version can be neither deleted nor edited: the history is read-only.
- A version whose contract is not yet signed keeps an **Annuler** (Cancel) button on its row. Once the contract is signed, the button disappears. See [Cancel a subscription](/en/aide/souscriptions/annuler-une-souscription).
- The window opens when you hover with the mouse. It does not open on a touch screen.
- For a subscription model without a contract, no comparison is shown.
- To find all the contributions of the subscription, see [View and filter contributions](/en/aide/contributions/consulter-et-filtrer-les-contributions).

## Frequently asked questions

::accordion
:::accordion-item{label="I don't see the History block."}
The subscription model does not use a contract and the subscription has only one version: there is nothing to show.
:::
:::accordion-item{label="A version shows no table of changes."}
This is normal for the first version. For the others, none of the changed fields triggers a paragraph in the amendment template.
:::
:::accordion-item{label="How do I edit a subscription that already has several versions?"}
Open it from the list of subscriptions: you land on the latest version, the only one that can be edited. See [Make an amendment](/en/aide/souscriptions/faire-un-avenant).
:::
::
