---
title: "Create a subscription (invite a contributor)"
module: "Subscriptions"
moduleSlug: souscriptions
order: 4
actors: ["Manager"]
enBref: "Invite a contributor to join your Cascade by creating their subscription from a model: dates, amount, payment method, signer, then sending the contract to sign if the model requires one."
where: "Subscriptions › Create a subscription"
status: review
needs: ["creer-un-modele-de-souscription"]
glossary: ["adhesion-simple", "adresse-de-facturation", "contrat", "contributeur", "date-de-fin", "date-de-prise-d-effet", "message-d-invitation", "modele-de-souscription", "montant-ht", "signataire", "souscription"]
video: ""
videoStatus: none
---

## Before you start

- You need at least one subscription model in your Cascade: it decides what the form asks you. See [Create a subscription model](/en/aide/modeles-de-souscription/creer-un-modele-de-souscription).
- To offer SEPA direct debit, the model must have a direct debit lead time. See [Choose the default payment method and the direct debit lead time](/en/aide/modeles-de-souscription/choisir-le-moyen-de-paiement-par-defaut).
- Do you have several contributors to invite at once? See [Invite several contributors in bulk](/en/aide/souscriptions/inviter-plusieurs-contributeurs-en-masse).

## Steps

### 1. Open the form

In the menu, go to **Souscriptions** (Subscriptions), then click **Créer une souscription** (Create a subscription). The form is called **Nouveau contributeur** (New contributor) and runs in three steps: **Informations contribution** (Contribution information), **Informations contributeur** (Contributor information), then **Contrat** (Contract) (this last step only exists if the model requires a contract).

### 2. Choose the subscription model

In **Modèle de souscription** (Subscription model), open the list (you can search by name): each model shows its description. As long as you have not chosen one, nothing else appears.

Once the model is chosen, the rest of the form adapts to it. The end date and the payment method are pre-filled with those of the model.

### 3. Enter the dates, the amount and the payment method

- **Prise d'effet** (Effective date): the first day of the subscription. It is mandatory.
- **Date de fin** (End date): optional, except for a one-time model. It takes the model's one, and you can change it.
- **Montant HT** (Amount excl. VAT): only asked if the amount is set by the manager in the model. The **Montant TTC** (Amount incl. VAT) is calculated next to it with the model's VAT rate, and you can also enter it yourself: the amount excl. VAT follows. If the VAT rate is zero, the amount incl. VAT is not offered.
- **Moyen de paiement** (Payment method): taken from the model, you can change it for this subscription. SEPA direct debit is refused if the model has no direct debit lead time.
- If the contract template contains fields to be filled in by you, a **Contrat de souscription** (Subscription contract) section asks for them (for example a floor or an office number).

Click **Suivant** (Next).

### 4. Choose the contributor

In **Contributeur** (Contributor), choose **Nouveau contributeur** (New contributor), or a contributor you already know. In that case, their identity (company name, billing address…) is taken as is and not asked again, and the signer's name and email are pre-filled with the last contact used.

### 5. Enter the signer and the invitation message

In **Informations du signataire** (Signer information), enter their **Nom** (Name) and **Email**: the invitation will be sent to this address. You can add a **Message d'invitation** (Invitation message), which will be included in the email.

The same contributor cannot be invited twice on the same model as long as their subscription is not over: Cascade answers « Le contributeur existe déjà sur ce mode de contribution. » (The contributor already exists on this contribution mode.). They can, however, have a subscription on another model.

### 6. Say who fills in the contributor's information

For a new contributor, choose in **Qui renseigne les informations ci-dessous ?** (Who fills in the information below?):

- **Je remplis moi-même les informations de mon contributeur** (I fill in my contributor's information myself): you fill in the fields yourself, and the contributor will not be able to edit them. The address (if the model sends an invoice) and the contract fields that fall to them become mandatory.
- **Mon contributeur va remplir ses informations lui-même** (My contributor will fill in their information themselves): the fields are greyed out, they will fill them in from the link they receive.

In **Informations du contributeur** (Contributor information), **Raison sociale ou nom** (Company name or name) stays empty to take the signer's name. If the model's sending method is **Facture** (Invoice), you also enter the address, the **N° TVA** (VAT number) and the **SIRET** (or the company identifier of the chosen country); fill in one of the two and the other becomes mandatory. For an already known contributor, this block disappears, and this choice is only offered if the model has contract fields reserved for the contributor.

### 7. Create the subscription

Click **Créer** (Create).

- If the model is in **Adhésion simple** (Simple membership), the subscription is created and you go back to the list of subscriptions.
- If the model requires a **Contrat** (Contract), you land on the **Création du contrat** (Contract creation) page: review the contract (you can edit it) then click **Envoyer en signature** (Send for signature), or **Envoyer l'invitation** (Send the invitation) if the contributor must first complete their information. Confirm with **Confirmer** (Confirm). Has the contributor already signed on paper? See [Add a contract without a signature (already signed on paper)](/en/aide/contrats-et-signature/ajouter-un-contrat-sans-signature). The details of sending are in [Send a contract for signature](/en/aide/contrats-et-signature/envoyer-un-contrat-en-signature).

## What happens next?

- **Simple membership**: the subscription is active from the effective date, and its contributions are created right away. No email is sent to the contributor.
- **Contract**: the contributor receives an email with a link (and your invitation message) to complete their information if needed, then sign. See [Sign a contract (contributor)](/en/aide/contrats-et-signature/signer-un-contrat). If they have lost the link, see [Resend the invitation to sign](/en/aide/contrats-et-signature/relancer-l-invitation-a-signer). Their contributions are only created once the contract is signed by both parties.
- The following contributions, for a recurring subscription, are created by Cascade: see [Generate recurring contributions automatically](/en/aide/contributions/generer-automatiquement-les-contributions-recurrentes) and [What Cascade does every day](/en/aide/general/ce-que-cascade-fait-chaque-jour).
- Your subscription is in the list: see [View and filter subscriptions](/en/aide/souscriptions/consulter-et-filtrer-les-souscriptions).

## Good to know

- The contributor has no account: they act only through the links received by email.
- The subscription is created as soon as you click **Créer** (Create), even if you then leave the **Création du contrat** (Contract creation) page without sending the contract: it then appears in the list, with no contract sent.
- The **Message d'invitation** (Invitation message) only goes out with the invitation-to-sign email. With a model in **Adhésion simple** (Simple membership), no email is sent: the message is therefore read by nobody.
- There is no minimum effective date: you can create a subscription that starts in the past.
- To change a subscription afterwards: see [Edit a subscription](/en/aide/souscriptions/modifier-une-souscription); to end it: [Cancel a subscription](/en/aide/souscriptions/annuler-une-souscription).

## Frequently asked questions

::accordion
:::accordion-item{label="I don't see the Amount section."}
It only appears if the model sets the amount by the manager. Otherwise, the amount is determined another way and you have nothing to enter.
:::
:::accordion-item{label="The contributor already exists, why does Cascade refuse?"}
They already have a subscription that is not over on this model (in progress, upcoming or awaiting signature), identified by the email or by the contributor chosen. Choose another model or wait for the subscription to end.
:::
:::accordion-item{label="The contributor received nothing."}
Check that the model is in Contract mode and that you clicked **Envoyer en signature** (Send for signature) or **Envoyer l'invitation** (Send the invitation); then see [Resend the invitation to sign](/en/aide/contrats-et-signature/relancer-l-invitation-a-signer).
:::
::
