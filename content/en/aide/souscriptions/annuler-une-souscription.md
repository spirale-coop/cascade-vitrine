---
title: "Cancel a subscription"
module: "Subscriptions"
moduleSlug: souscriptions
order: 1
actors: ["Manager"]
enBref: "Cancel a subscription as long as its contract is not signed by both parties: it is then permanently deleted, along with its contract."
where: "Subscriptions › (the contributor) › Cancel"
status: review
needs: ["creer-une-souscription"]
glossary: ["avenant", "contrat", "contributeur", "souscription", "version"]
video: ""
videoStatus: none
---

## Before you start

- You need a subscription whose contract is not yet signed by both parties (contributor and signer). A subscription without a contract (simple membership, or contract not yet created) can also be cancelled. See [Create a subscription (invite a contributor)](/en/aide/souscriptions/creer-une-souscription).
- Once the contract is signed by both parties, the subscription can no longer be cancelled: the **Annuler** (Cancel) button no longer appears. To change its settings, make an amendment: see [Make an amendment](/en/aide/souscriptions/faire-un-avenant).

## Steps

### 1. Open the subscription

In the menu, go to **Souscriptions** (Subscriptions), then click the contributor's name. You land on their subscription page (the latest version, if there are several).
### 2. Find the Cancel button

The red **Annuler** (Cancel) button is at the top right of the page. It cancels the version you are viewing.
The **Historique** (History) block, at the top of the page, also shows an **Annuler** (Cancel) button on each version whose contract is not signed. It is used to cancel a specific version, for example an amendment in progress while the previous version is already signed (see [View a subscription's version history](/en/aide/souscriptions/consulter-l-historique-des-versions)).
### 3. Confirm the cancellation

A window warns you: « Vous êtes sur le point d'annuler la signature du contrat de cette souscription. » (You are about to cancel the signature of this subscription's contract.) It specifies that all the subscription's data will be deleted. Click **Confirmer** (Confirm). The **Annuler** (Cancel) button of this window closes it without deleting anything.
You go back to the list of subscriptions, with the message « La souscription a bien été supprimée. » (The subscription has been deleted.)
## What happens next?

- **What is deleted**: the cancelled version and its contract. If it was the only version, the subscription disappears entirely from the list. The contributor also disappears from your Cascade if they have no other subscription with you.
- **If there were other versions** (for example a cancelled amendment): the previous versions are kept and the subscription stays in the list.
- **Contributions**: for a model with a contract, no contribution is generated before both parties have signed (see [What Cascade does every day](/en/aide/general/ce-que-cascade-fait-chaque-jour)): so there is nothing to clean up.
- **Contributor**: no email is sent to inform them of the cancellation. Remember to let them know yourself if they had already received an invitation.

## Good to know

- Cancellation is permanent: nothing can be recovered. To start over, create a new subscription for this contributor.
- There is no cancel button once the contract is signed by both parties, whatever the date of the subscription.
- Cancelling is not the same as editing: to correct an amount or a date before the signature, use [Edit a subscription](/en/aide/souscriptions/modifier-une-souscription) instead.
- Contracts added without a signature are considered signed: their subscription can therefore no longer be cancelled. See [Add a contract without a signature (already signed on paper)](/en/aide/contrats-et-signature/ajouter-un-contrat-sans-signature).

## Frequently asked questions

::accordion
:::accordion-item{label="I don't see the Cancel button."}
The contract of this version is signed by the contributor and the signer. Cancellation is not possible: make an amendment to change the settings.
:::
:::accordion-item{label="The contributor has already signed, but not the signer. Can I cancel?"}
Yes: as long as the signer has not countersigned, the contract is not signed by both parties (see [Countersign a contract (signer)](/en/aide/contrats-et-signature/contresigner-un-contrat)).
:::
:::accordion-item{label="I cancelled by mistake."}
You need to recreate the subscription from scratch and send the invitation to the contributor again.
:::
::
