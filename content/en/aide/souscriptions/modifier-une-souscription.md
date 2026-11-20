---
title: "Edit a subscription"
module: "Subscriptions"
moduleSlug: souscriptions
order: 7
actors: ["Manager"]
enBref: "Correct a subscription as long as the contributor has not signed their contract (or without a contract): dates, amount, payment method and contributor information. After signature, the change goes through an amendment."
where: "Subscriptions › (the contributor) › Save"
status: review
needs: ["creer-une-souscription"]
glossary: ["adhesion-simple", "avenant", "contrat", "contributeur", "contribution", "date-de-fin", "date-de-prise-d-effet", "delai-de-prelevement", "facture", "modele-de-souscription", "montant-ht", "signataire", "souscription", "version"]
video: ""
videoStatus: none
---

## Before you start

- This article describes editing a subscription **as long as the contributor has not signed** their contract, or when the subscription model is in Simple membership (without a contract): your changes apply directly to the subscription. As soon as the contributor has signed, a change creates a new version and an amendment: see [Make an amendment](/en/aide/souscriptions/faire-un-avenant).
- The subscription must exist: see [Create a subscription (invite a contributor)](/en/aide/souscriptions/creer-une-souscription).
- You can only edit the latest version of a subscription, as long as it has not ended, and only if it is not one-off (see "Good to know").

## Steps

### 1. Open the subscription

In the menu, go to **Souscriptions** (Subscriptions), then click the contributor's name. The page opens on the latest version of the subscription.
At the top of the page, the **Historique** (History) lists the versions of the subscription (the version displayed is in bold) with, for each one, the status of its contract. If the contract has not been sent yet, a **Créer le contrat** (Create the contract) button appears there. The edit form is just below.
### 2. Change the dates

In the **Dates de souscription** (Subscription dates) section:

- **Prise d'effet** (Effective date): if the subscription model has a recurrence, you choose from a list of period starts (for example « Semaine du 22 juin 2026 » (Week of 22 June 2026) for a weekly recurrence, « Juillet 2026 » (July 2026) for a monthly recurrence). The list offers nearby periods, past as well as upcoming. Without a recurrence, a calendar lets you choose any day.
- **Date de fin** (End date): optional. Leave the field empty for a subscription with no end.
### 3. Change the amount

The **Montant de souscription** (Subscription amount) section only appears if the subscription model has you set the amount. Edit the **Montant HT** (Amount excl. VAT): the **Montant TTC** (Amount incl. VAT) is recalculated with the model's VAT rate. You can also enter the amount incl. VAT, and the amount excl. VAT follows. If the VAT rate is zero, the amount incl. VAT is not offered.
### 4. Choose the payment method

The **Moyen de paiement** (Payment method) is the subscription's one (originally, the model's one). Change it if it will be paid differently: Virement SEPA (SEPA transfer), Prélèvement SEPA (SEPA direct debit), Carte bancaire (Bank card), Espèces (Cash) or Chèque (Cheque). SEPA direct debit is refused if the model has no direct debit lead time: see [Choose the default payment method and the direct debit lead time](/en/aide/modeles-de-souscription/choisir-le-moyen-de-paiement-par-defaut).
### 5. Correct the contributor's information

The **Informations du contributeur** (Contributor information) section shows the **Nom** (Name) and **Email** of the signer on the contributor's side, the **Raison sociale ou nom** (Company name or name) and, if the model's sending mode is **Facture** (Invoice), the address, the **N° TVA** (VAT number) and the **SIRET** (or the company identifier of the chosen country). All fields marked with an asterisk are mandatory. Fill in the VAT number or the SIRET and the other becomes mandatory.

If the contract template has custom fields, they also appear: those that are yours in the **Contrat de souscription** (Subscription contract) section, the contributor's ones in this section. They are all mandatory.

When the administrator has given the contributor access to the platform, a box tells you that their legal information (company name, address, VAT number, SIRET) can no longer be edited here. The signer's name and email remain editable.
### 6. Save

Click **Enregistrer** (Save). The message **Modifié(e)** (Edited) confirms the change.
- If the subscription model requires a contract, you land on the **Création du contrat** (Contract creation) page when the contract has not been created yet: the contract text already uses your new values (here an amount of €45.60 incl. VAT). Read it over, then send it: see [Send a contract for signature](/en/aide/contrats-et-signature/envoyer-un-contrat-en-signature). If the contract has already been sent, you go back to the subscription form.
- Without a contract (Simple membership), you stay on the subscription page.
## What happens next?

- **No email is sent** to the contributor when you save. If they have not received or have lost their invitation, see [Resend the invitation to sign](/en/aide/contrats-et-signature/relancer-l-invitation-a-signer). What they see when signing is described in [Sign a contract (contributor)](/en/aide/contrats-et-signature/signer-un-contrat).
- **Contract not sent yet**: the contract will be generated with the values you have just saved.
- **Contract already sent, but not yet signed by the contributor**: the subscription is edited, but the text of the contract already sent does not change. Check that it still matches what you want to have signed.
- **Contributions**: saving creates, edits and deletes no contribution. Those of a subscription with a contract are created when the contract is signed by both parties; the following ones, for a recurring subscription, by Cascade: see [Generate recurring contributions automatically](/en/aide/contributions/generer-automatiquement-les-contributions-recurrentes) and [What Cascade does every day](/en/aide/general/ce-que-cascade-fait-chaque-jour). To correct a contribution already created, see [Create a contribution or credit note by hand](/en/aide/contributions/creer-une-contribution-ou-un-avoir).

## Good to know

- **The form is greyed out** (and the **Enregistrer** (Save) button disappears) in three cases: an amendment already exists for the version displayed (alert **Avenant existant** (Existing amendment)), the subscription has ended (alert **Souscription expirée** (Expired subscription)), or it is one-off. For a one-off subscription, no alert explains the block.
- An ended subscription can no longer be edited: its end date has passed.
- **The moment of signature changes everything.** As long as the contributor has not signed, or if the model is in Simple membership, the subscription is edited in place: there is neither a new version nor an amendment. As soon as they have signed, see [Make an amendment](/en/aide/souscriptions/faire-un-avenant), which also details the minimum dates, the confirmation of changes and the elements carried into the amendment.
- The contributor's **Nom** (Name), **Email** and legal information are always saved directly, even after signature: they do not create a version.
- The **Annuler** (Cancel) button (at the top of the page, or on a version's row in the **Historique** (History)) deletes the subscription and its contract. It is offered as long as the contract is not signed, including without a contract. Once the contract is signed, it disappears. See [Cancel a subscription](/en/aide/souscriptions/annuler-une-souscription).
- The **Montant HT** (Amount excl. VAT) can only be edited if the subscription model has the amount set by the manager. The model's other settings (recurrence, lead times, sending mode) are changed in the model: see [Edit a subscription model](/en/aide/modeles-de-souscription/modifier-un-modele-de-souscription).
- To find a subscription in the list: see [View and filter subscriptions](/en/aide/souscriptions/consulter-et-filtrer-les-souscriptions). To review past versions: see [View a subscription's version history](/en/aide/souscriptions/consulter-l-historique-des-versions).

## Frequently asked questions

::accordion
:::accordion-item{label="I'm editing the subscription, but no amendment is offered."}
The contributor has not signed their contract yet, or the model is in Simple membership: the subscription is edited directly, without an amendment.
:::
:::accordion-item{label="The form is greyed out, I can no longer save."}
Look at the alert at the top of the form: an amendment already exists (open the latest version from the list of subscriptions), or the subscription has ended. Without an alert, the subscription is one-off and cannot be edited.
:::
:::accordion-item{label="I changed the amount, but my contributions did not change."}
Saving does not touch contributions already created. To correct one of them, create a credit note and then a new contribution: see [Create a contribution or credit note by hand](/en/aide/contributions/creer-une-contribution-ou-un-avoir).
:::
::
