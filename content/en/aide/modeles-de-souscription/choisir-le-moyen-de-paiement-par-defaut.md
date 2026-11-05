---
title: "Choose the default payment method and the direct debit lead time"
module: "Subscription models"
moduleSlug: modeles-de-souscription
order: 1
actors: ["Manager"]
enBref: "Choose how the contributors of a subscription model pay their contributions (transfer, direct debit, card, cash or cheque) and, for a direct debit, how many days before the contribution date it takes place. Each subscription takes over this setting and can change it."
where: "Subscription models › (the model) › Configuration générale (General configuration) › Moyen de paiement (Payment method)"
status: review
needs: ["creer-un-modele-de-souscription"]
glossary: ["compte-stripe", "contribution", "delai-avant-facturation", "delai-de-prelevement", "facture", "modele-de-souscription", "moyen-de-paiement-par-defaut", "paiement", "section-mode-d-envoi", "section-moyen-de-paiement", "souscription"]
video: ""
videoStatus: none
---

## Before you start

- You need a subscription model, new or existing: see [Create a subscription model](/en/aide/modeles-de-souscription/creer-un-modele-de-souscription) and [Edit a subscription model](/en/aide/modeles-de-souscription/modifier-un-modele-de-souscription).
- To offer **Prélèvement SEPA** (SEPA direct debit), the model must have the **Facture** (Invoice) sending method with automatic invoicing set up: see [Set up automatic invoicing](/en/aide/modeles-de-souscription/configurer-la-facturation-automatique).
- The organization's online payment account does not need to be ready to prepare the model, but no direct debit will go out until it is operational: see [Connect the organization's Stripe account](/en/aide/paiements/connecter-le-compte-stripe).

## Steps

### 1. Open the subscription model

In the menu, go to **Modèles de souscription** (Subscription models), then click **Créer un modèle** (Create a model). To change an existing model, click its name in the list. The payment method is set in the **Configuration générale** (General configuration) step, in the **Moyen de paiement** (Payment method) section, just below the sending method.

![The list of subscription models and the Créer un modèle (Create a model) button](/aide/choisir-le-moyen-de-paiement-par-defaut/moyen-paiement-prelevement-01-ouvrir.png)

### 2. Choose the default payment method

In **Moyen de paiement par défaut** (Default payment method), choose the method with which the contributors of this model pay their contributions: **Carte bancaire** (Bank card), **Virement SEPA** (SEPA transfer), **Prélèvement SEPA** (SEPA direct debit), **Espèces** (Cash) or **Chèque** (Cheque). A new model starts on **Virement SEPA**.

This choice is only a starting point: each subscription takes over this method and can then change it (see step 5).

![The five payment methods offered](/aide/choisir-le-moyen-de-paiement-par-defaut/moyen-paiement-prelevement-02-moyens.png)

### 3. Set the direct debit lead time

With **Prélèvement SEPA**, fill in **Prélever … jours avant la date de contribution** (Debit … days before the contribution date): this is the number of days before the contribution date at which the direct debit takes place. This field is required for direct debit. It appears when the sending method is **Facture**; with another payment method, you can leave it empty.

Direct debit needs automatic invoicing (**Facturer automatiquement … jours avant la date de contribution**): it is the invoice that notifies the contributor. The *notice period* is the number of days between the invoice and the direct debit.

Example: invoicing 20 days before the contribution date and direct debit 5 days before, i.e. a notice period of 15 days.

![The Prélèvement SEPA method and its direct debit lead time](/aide/choisir-le-moyen-de-paiement-par-defaut/moyen-paiement-prelevement-03-prelevement.png)

Two rules govern this notice period:

- There must be **at least 2 days** between the invoice and the direct debit. Below that, the model is refused, with a message giving the maximum lead time possible.
- Between 2 and 13 days, the model is accepted but a box warns you: **Vous devez mentionner ce préavis réduit dans vos contrats.** (You must mention this shortened notice period in your contracts.) The notice period is available as data to insert in the contract: **Préavis de prélèvement (jours)** (Direct debit notice (days)).

![The shortened notice warning (invoice 10 days before, direct debit 5 days before)](/aide/choisir-le-moyen-de-paiement-par-defaut/moyen-paiement-prelevement-04-preavis-reduit.png)

![The refusal of a lead time that is too short, with the maximum lead time indicated](/aide/choisir-le-moyen-de-paiement-par-defaut/moyen-paiement-prelevement-05-refus.png)

If the organization's online payment account cannot collect payments yet, a box **Le compte Stripe de l'organisation ne peut pas encore encaisser** (The organization's Stripe account cannot collect payments yet) tells you the account's status, with the **Configurer le compte Stripe** (Set up the Stripe account) button. You can still save the model.

### 4. Save the model

Complete the form, then click **Créer le modèle de souscription** (Create the subscription model) (when creating) or **Enregistrer les modifications** (Save changes) (when editing). With a **Contrat** (Contract) membership method, this button is at the last step. You go back to the list of models.

![The Créer le modèle de souscription (Create the subscription model) button](/aide/choisir-le-moyen-de-paiement-par-defaut/moyen-paiement-prelevement-06-creer.png)

![The new model in the list of subscription models](/aide/choisir-le-moyen-de-paiement-par-defaut/moyen-paiement-prelevement-07-liste.png)

### 5. Adjust a subscription's payment method

When you create a subscription (**Souscriptions** menu), the **Moyen de paiement** section takes over the model's method: change it if needed for this subscription. See [Create a subscription (invite a contributor)](/en/aide/souscriptions/creer-une-souscription). The contributor cannot change it.

![A subscription that takes over its model's Prélèvement SEPA](/aide/choisir-le-moyen-de-paiement-par-defaut/moyen-paiement-prelevement-08-souscription.png)

**Prélèvement SEPA** is only accepted if the subscription's model has a direct debit lead time. Otherwise a message sends you back to the model.

![The refusal of direct debit when the model has no direct debit lead time](/aide/choisir-le-moyen-de-paiement-par-defaut/moyen-paiement-prelevement-09-souscription-refus.png)

To change the method of an existing subscription, open it from **Souscriptions** and edit the **Moyen de paiement** section. If the contract has already been signed by the contributor, the change goes through an amendment: see [Make an amendment](/en/aide/souscriptions/faire-un-avenant).

## What happens next?

- **Existing subscriptions do not change.** Changing a model's default method modifies neither its subscriptions, nor their contributions, nor their payments already created.
- **Upcoming contributions**: those created afterwards take over their subscription's payment method. See [Generate recurring contributions automatically](/en/aide/contributions/generer-automatiquement-les-contributions-recurrentes).
- **Expected payment**: for a positive contribution, a payment is expected with this method. With **Prélèvement SEPA**, it is dated the direct debit day, i.e. the contribution date minus the model's direct debit lead time. For the other methods, it is dated the contribution date.
- **Changing the model's direct debit lead time** does not touch any payment already created; the new lead time applies to contributions created afterwards, including for subscriptions already in progress.
- **Late invoice**: if the invoice goes out less than 2 days before the planned direct debit date (contribution created shortly before its due date, missed run), the direct debit date is pushed back to 2 days after the invoice. See [What Cascade does every day](/en/aide/general/ce-que-cascade-fait-chaque-jour).
- **For now, no direct debit is executed**: Cascade only prepares the direct debit date. The contributor receives nothing more than their invoice.
- **Contribution created by hand**: the proposed payment method is the subscription's, and with direct debit the form announces the direct debit date. See [Create a contribution or credit note by hand](/en/aide/contributions/creer-une-contribution-ou-un-avoir).

## Good to know

- Direct debit only exists with automatic invoicing: without it, the direct debit lead time is refused.
- As long as a subscription of the model is on direct debit, you cannot empty the model's direct debit lead time or remove its automatic invoicing: first change the payment method of these subscriptions.
- A one-time subscription can no longer be edited once created: its payment method is therefore the one chosen at creation.
- With a signed contract, changing a subscription's payment method creates an amendment like any other change.
- The bulk import has no column for the payment method: imported subscriptions take the model's. See [Invite several contributors in bulk](/en/aide/souscriptions/inviter-plusieurs-contributeurs-en-masse).
- When you change a model setting (for example the sending method), the fields that no longer apply are reset; the payment method, however, is kept.

## Frequently asked questions

::accordion
:::accordion-item{label="I don't see the « Prélever … jours avant la date de contribution » field."}
It only appears if the model's sending method is **Facture** (Invoice).
:::
:::accordion-item{label="The model is refused although I filled in a direct debit lead time."}
Check the automatic invoicing and the gap with the direct debit lead time: there must be at least 2 days between the invoice and the direct debit. With invoicing 10 days before the contribution date, the direct debit must take place at most 8 days before.
:::
:::accordion-item{label="I changed the model's payment method, but my subscriptions did not change."}
That is normal: the model's method is only a starting point for new subscriptions. Edit each subscription concerned.
:::
::
