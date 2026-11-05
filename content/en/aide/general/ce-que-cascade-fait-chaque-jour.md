---
title: "What Cascade does every day"
module: "General"
moduleSlug: general
order: 1
actors: ["Manager"]
enBref: "Every morning, without any action on your part, Cascade creates the upcoming contributions, then issues and sends the invoices that have come due. This page gives the times and the rules of these automatic runs."
where: "Automatic (no screen)"
status: review
needs: []
glossary: ["adresse-de-facturation", "avoir", "contrat", "contribution", "date-de-fin", "delai-avant-facturation", "delai-de-prelevement", "facture", "recurrent", "souscription"]
video: ""
videoStatus: none
---

## Before you start

- Nothing to do: these runs happen every day, for all Cascades.
- The times are the server's, in universal time (UTC): **5 a.m.** and **6 a.m.** UTC correspond to **6 and 7 a.m. in Paris in winter**, **7 and 8 a.m. in summer**. In what follows, "5 a.m." and "6 a.m." refer to these UTC times.

## Every day

### 5 a.m. — Upcoming contributions are created

This run concerns **recurring subscriptions with no end date**. For each one, Cascade creates the contributions for the upcoming periods, up to 2 years ahead: each day, the horizon therefore moves forward by one day.

- The first period is prorated if the subscription starts partway through a period (on the 15th of the month for a monthly recurrence, for example).
- A period that has already been invoiced is never recreated.
- A subscription with a contract has no contributions until the contract is signed by both parties.
- For each positive contribution, a payment is expected on its date, with the subscription's payment method.

The other subscriptions do not go through this morning run: all their contributions are created at once, when the subscription is created (simple membership) or as soon as the contract is signed by both parties:

- **Recurring with an end date**: all the periods up to the end date, the last one prorated.
- **One-time** and **Permanent**: a single contribution, on the subscription's start date.

See [Generate recurring contributions automatically](/en/aide/contributions/generer-automatiquement-les-contributions-recurrentes).

### 6 a.m. — Invoices that have come due are issued and sent

This run concerns contributions whose subscription model has the sending method **Facture** (Invoice) with automatic invoicing set up (**Facturer automatiquement … jours avant la date de contribution** (Invoice automatically … days before the contribution date)). A contribution is invoiced when:

- it is positive and does not have an invoice yet;
- its invoicing day (its date minus the model's number of days) is today or already past.

The invoice is dated today, its due date follows the model's payment terms, and it goes out immediately by email to the contributor. See [Invoice automatically](/en/aide/facturation/facturer-automatiquement) and [Email the invoice to the contributor](/en/aide/facturation/envoyer-la-facture-par-e-mail).

- **Catch-up**: a contribution whose invoicing day has already passed (subscription signed late, contribution created by hand, missed run) is invoiced on the next run.
- **Credit notes**: they are never invoiced automatically. Invoice them from the list: see [Invoice contributions (one or several at a time)](/en/aide/facturation/facturer-des-contributions).
- **Missing data**: a contribution is not invoiced if your organization's billing address or SIRET, the contributor's billing address, or the operation type is missing. It stays pending, without any message, and will be invoiced on the first run after the correction. See [Edit the Cascade settings (legal identity, IBAN, VAT, address, logo, prefix)](/en/aide/cascade-et-organisation/modifier-les-reglages-de-la-cascade).
- **SEPA direct debit**: the invoice serves as advance notice. If the planned debit date falls less than 2 days after the invoice, it is pushed back to 2 days after. For now, no direct debit is actually executed: only its date is prepared. See [Choose the default payment method and the direct debit lead time](/en/aide/modeles-de-souscription/choisir-le-moyen-de-paiement-par-defaut).

### During the night — Abandoned files are deleted

A file uploaded by a contributor but never sent with their signature (a supporting document, for example) is deleted at the midnight (UTC) cleanup that follows its 24 hours: it therefore disappears between 24 and 48 hours after it was uploaded. See [Define the supporting documents required](/en/aide/modeles-de-souscription/definir-les-documents-justificatifs-demandes).

## What happens next?

- The contributions created appear in **Contributions**, with the status **À facturer** (To invoice) (sending method Invoice) or **Nouvelle** (New).
- Invoiced contributions change to **Facturée** (Invoiced), with their invoice number in the **N° facture** (Invoice no.) column.

## Good to know

- There is no button to launch these runs by hand. To invoice right away, invoice from the contributions list.
- The two runs are in this order on purpose: a contribution created at 5 a.m. whose invoicing day has already arrived is invoiced at 6 a.m., the same morning.
- A signed amendment replaces the uninvoiced automatic contributions from its effective date; contributions that have already been invoiced and those created by hand are kept. See [Make an amendment](/en/aide/souscriptions/faire-un-avenant).
- An issued invoice is never modified, even if an amendment later changes the amount.

## Frequently asked questions

::accordion
:::accordion-item{label="I created a subscription this morning, why are its contributions already there?"}
A subscription's contributions are created as soon as it is created (simple membership) or as soon as its contract is signed. The 5 a.m. run only extends the horizon of recurring subscriptions with no end date.
:::
:::accordion-item{label="A contribution should have been invoiced this morning, but it is still À facturer (To invoice)."}
Check that the model has automatic invoicing, that the contribution is not a credit note, and that the billing addresses, the SIRET and the operation type are filled in. Once corrected, it will go out on the next run, or right away if you invoice it from the list.
:::
:::accordion-item{label="Why do my contributions stop in 2 years?"}
For a subscription with no end date, Cascade creates the contributions 2 years ahead and extends this horizon every morning: there will always be some for the next 2 years.
:::
::
