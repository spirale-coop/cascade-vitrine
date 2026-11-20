---
title: "Generate recurring contributions automatically"
module: "Contributions"
moduleSlug: contributions
order: 3
actors: ["Manager"]
enBref: "Cascade creates a subscription's contributions by itself, month after month, without you having to enter them. This article explains when they appear, how their amount is calculated and how to recognize them in the list."
where: "Contributions (created automatically, marked by the Automatique (Automatic) icon)"
status: review
needs: ["creer-une-souscription", "creer-un-modele-de-souscription"]
glossary: ["adhesion-simple", "contrat", "contribution", "date-de-fin", "date-de-prise-d-effet", "delai-de-prelevement", "montant-fixe-par-le-gerant", "montant-ht", "permanente", "ponctuel", "recurrent", "souscription"]
video: ""
videoStatus: none
---

## Before you start

- There is nothing to do: you have no button to click, Cascade creates a subscription's contributions as soon as it is ready. This article explains when they appear, how much they are worth and how to recognize them.
- You need a subscription whose model uses **Montant fixé par le gérant** (Amount set by the manager) (the only choice available for now) and whose **Montant HT** (Amount excl. VAT) is not zero. With a zero amount, no contribution is created. See [Create a subscription (invite a contributor)](/en/aide/souscriptions/creer-une-souscription) and [Create a subscription model](/en/aide/modeles-de-souscription/creer-un-modele-de-souscription).
- If the model requires a contract, nothing is created until the contract is signed by both parties. See [Sign a contract (contributor)](/en/aide/contrats-et-signature/signer-un-contrat) and [Countersign a contract (signer)](/en/aide/contrats-et-signature/contresigner-un-contrat).

## Steps

### 1. Create the subscription

Once the subscription is created, Cascade derives its contributions from it. The timing depends on the model's membership mode:

- **Adhésion simple** (Simple membership): the contributions are created as soon as the subscription is created.
- **Contrat** (Contract): they are created as soon as the contract is signed by both parties, including when you add a contract already signed on paper (see [Add a contract without a signature (already signed on paper)](/en/aide/contrats-et-signature/ajouter-un-contrat-sans-signature)).

### 2. Let Cascade create the contributions

What is created depends on the model's recurrence:

- **Récurrent** (Recurring) with no end date: one contribution per period, month after month, up to 2 years in advance. Every morning, Cascade adds the periods that enter this horizon: so there are always contributions for the next 2 years (times and rules in [What Cascade does every day](/en/aide/general/ce-que-cascade-fait-chaque-jour)).
- **Récurrent** (Recurring) with an end date: all periods up to the end date are created at once.
- **Ponctuel** (One-off) and **Permanent** (Permanent): a single contribution, on the subscription's effective date.

Periods are monthly for now. Each contribution is dated the first day of its period, except the first, dated the effective date.

The amount is the subscription's amount, prorated for the first period if the subscription starts mid-month, and for the last if it ends mid-month. Example: for €100 excl. VAT per month and an effective date of November 16, the first contribution is €50 excl. VAT (15 days out of the month's 30, the effective date included). For an end date, it is the same calculation, on the days elapsed up to that date.

### 3. Find the contributions in the list

In the menu, go to **Contributions**. Contributions created by Cascade carry a calendar icon: hover over it to read **Automatique** (Automatic). Those you create yourself carry a hand-shaped icon (**Manuelle** (Manual)). To find them faster, see [View and filter contributions](/en/aide/contributions/consulter-et-filtrer-les-contributions).
## What happens next?

- **Status**: each contribution is **À facturer** (To invoice) if the subscription model uses the Facture (Invoice) sending method, otherwise **Nouvelle** (New).
- **Expected payment**: a payment of the amount incl. VAT is planned on the contribution date, with the subscription's payment method. With SEPA direct debit, its date is the direct debit day (the contribution date minus the model's direct debit lead time). You can record it with [Mark a contribution as paid](/en/aide/paiements/marquer-une-contribution-comme-payee).
- **Invoice**: if the model has automatic invoicing, the contribution is invoiced and sent to the contributor on the morning of its invoicing day (see [Invoice automatically](/en/aide/facturation/facturer-automatiquement)). Otherwise, invoice it yourself: see [Invoice contributions (one or several at a time)](/en/aide/facturation/facturer-des-contributions).
- No email is sent to the contributor when the contributions are created; they only receive the invoices.

## Good to know

- There is no button to launch the creation by hand. For a one-off contribution of your own (fees, adjustment), see [Create a contribution or credit note by hand](/en/aide/contributions/creer-une-contribution-ou-un-avoir).
- Cascade never recreates a period that has already been invoiced, and running the creation again does not produce duplicates.
- When a subscription changes version, the upcoming, non-invoiced automatic contributions of the old version are replaced from the new version's effective date. Contributions already invoiced and those you created by hand are kept. See [Make an amendment](/en/aide/souscriptions/faire-un-avenant).
- The amount incl. VAT of the expected payment is calculated with the model's VAT rate at the time of creation. A later rate change is not passed on to this payment.
- Models whose amount is set by the contributor or adaptive are not available yet: they create no contributions.

## Frequently asked questions

::accordion
:::accordion-item{label="My subscription has just been created, but I can't see any contribution."}
Check whether the model requires a contract: in that case, the contributions only appear once the contract is signed by both parties. Also check that the subscription amount is not zero.
:::
:::accordion-item{label="Why do my contributions stop in 2 years?"}
For a subscription with no end date, Cascade creates the contributions 2 years in advance and extends this horizon every morning: there will always be some for the next 2 years.
:::
:::accordion-item{label="The first contribution is smaller than the others."}
The subscription started mid-month: the first period is prorated on the remaining days.
:::
::
