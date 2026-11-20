---
title: "Resend the invitation to sign"
module: "Contracts and signature"
moduleSlug: contrats-et-signature
order: 4
actors: ["Manager"]
enBref: "Sends the invitation-to-sign email to the contributor again, if they lost it, let it expire or never received it, without recreating the contract."
where: "Souscriptions (Subscriptions) › (the contributor) › Historique (History) › Renvoyer l'invitation (Resend the invitation)"
status: review
needs: ["envoyer-un-contrat-en-signature"]
glossary: ["avenant", "contrat", "contributeur", "message-d-invitation", "souscription"]
video: ""
videoStatus: none
---

## Before you start

- You need a subscription whose contract has already been sent. See [Send a contract for signature](/en/aide/contrats-et-signature/envoyer-un-contrat-en-signature) and [Create a subscription (invite a contributor)](/en/aide/souscriptions/creer-une-souscription).
- The button only exists while the contract has the **Invitation envoyée** (Invitation sent) status (see "Good to know" for when this status applies).

## Steps

### 1. Open the subscription

In the menu, go to **Souscriptions** (Subscriptions), then click the contributor's name in the list.
### 2. Find the contract status

On the subscription page, the **Historique** (History) card lists each version (the original subscription, then any amendments). On the relevant row, the contract is marked by the **Invitation envoyée** (Invitation sent) badge.
### 3. Hover over the row and click the button

Hover over the row: a window opens, with the buttons **Voir les détails** (View details), **Voir le contrat** (View the contract) and **Renvoyer l'invitation** (Resend the invitation). Click **Renvoyer l'invitation**. No confirmation is requested.

If the row is that of an amendment, it is the invitation to sign the amendment that is resent.
### 4. Check the confirmation

You stay on the subscription page, and the message **L'invitation a bien été renvoyée.** (The invitation has been resent.) appears at the bottom right.
## What happens next?

- **Email to the contributor**: they receive the invitation email again, with the **Message d'invitation** (Invitation message) entered when the subscription was created and a link to sign. They are the one who continues the process: see [Sign a contract (contributor)](/en/aide/contrats-et-signature/signer-un-contrat). Nothing is sent to the signer or to the other contacts.
- **Nothing changes in Cascade**: the contract is not recreated, its content and status stay the same, and no history of the resend is kept.
- **Signing link**: the email contains a signing link specific to the contributor (see "Good to know" for how long it is valid).

## Good to know

- **When the button appears.** The **Invitation envoyée** (Invitation sent) status applies as long as the contract is waiting for information the contributor must fill in themselves before they can sign it. As soon as they have filled everything in, the status changes to **À signer par le contributeur** (To be signed by the contributor) and the button disappears. If the contract template asks the contributor for no information, the subscription goes straight to **À signer par le contributeur** and you never get this button, even if the contributor has not opened their email yet.
- **Resending does not extend the link.** The link sent remains valid until 10 days after the subscription's effective date; resending it does not push back this deadline. If that date has passed by more than 10 days, the new email contains a link that has already expired.
- **No sending limit.** You can click as many times as you like; each click sends an email. Click once, then wait a little.
- **Contributor's address.** The email goes to the address recorded in the subscription. If it is wrong, you cannot correct it here.
- **Only for the first invitation.** This button is not for reminding a contributor who has already started (for example signing or uploading their supporting documents), nor the signer.

## Frequently asked questions

::accordion
:::accordion-item{label="The « Renvoyer l'invitation » button doesn't appear."}
It only appears if the contract status is **Invitation envoyée** (Invitation sent), and only in the window that opens when you hover over the row in **Historique** (History). If the status is different, the subscription is no longer at this stage.
:::
:::accordion-item{label="The contributor says their link no longer works."}
The link expires 10 days after the subscription's effective date, and resending does not renew it. For now, there is no button to extend it.
:::
:::accordion-item{label="How do I know whether the contributor received the email?"}
Cascade does not show this. The confirmation message only says that the resend was requested.
:::
::
