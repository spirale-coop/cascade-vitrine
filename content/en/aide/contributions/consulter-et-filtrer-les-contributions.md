---
title: "View and filter contributions"
module: "Contributions"
moduleSlug: contributions
order: 1
actors: ["Manager"]
enBref: "Find your Cascade's contributions: filter them by status or by period, search for an invoice, and see at a glance what is invoiced, paid or still to invoice."
where: "Contributions"
status: review
needs: ["creer-une-souscription"]
glossary: ["avoir", "contributeur", "contribution", "facture", "montant-ht", "paiement", "souscription"]
video: ""
videoStatus: none
---

## Before you start

- You need at least one subscription whose contributions already exist. See [Create a subscription (invite a contributor)](/en/aide/souscriptions/creer-une-souscription).
- The list only shows the contributions of the Cascade you are in. To change it: [Change the current Cascade](/en/aide/acces-et-compte/changer-de-cascade-courante).

## Steps

### 1. Open the list

In the menu, click **Contributions**. The list opens on the contributions whose date falls between one month before and one month after today, oldest first, in pages of 100 (you can switch to 50, 200 or 500 per page, at the bottom left).

Each row shows, from left to right: the payment method (an icon), the **Montant HT** (Amount excl. VAT), an « Automatique » (Automatic) or « Manuelle » (Manual) marker, the **Souscription** (Subscription) (the contributor, then the subscription model below), the **Date**, the **Statut** (Status), **Reçu / Total** (Received / Total) and the **N° facture** (Invoice no.). The labels « Automatique », « Manuelle » and the name of the payment method only appear as a tooltip, when you hover over the icon.
### 2. Search for an invoice

Type in **Rechercher…** (Search…): the list updates by itself after a short moment. The search covers the contribution's **invoice number** and **invoice description**, not the contributor's name. It ignores capitalization and also finds part of a number.

When you search, the period (step 4) is no longer applied: you find an invoice even if it is old. The status filter, however, remains applied.
### 3. Filter by status

Open the **Statut** (Status) list and tick one or more statuses; you can tick several at once, and clear them with the cross.

- **Nouvelle** (New): not yet invoiced, and the subscription model does not send invoices.
- **À facturer** (To invoice): not yet invoiced, and the subscription model uses the Facture (Invoice) sending method.
- **Facturée** (Invoiced): the invoice exists, no payment received.
- **Partiellement payée** (Partially paid): payments received, but less than the amount incl. VAT.
- **Payée** (Paid): the payments received cover the amount incl. VAT.
### 4. Choose the period

Click the period button, to the right of the filters: a two-month calendar opens. Click the first day, then the last: the list reloads once both dates are chosen. Both bounds are included. **Effacer** (Clear) removes any date restriction: the list then shows the whole history.
### 5. Sort the list

Click the **Montant HT** (Amount excl. VAT) or **Date** header: one click sorts in ascending order (from the smallest amount, or the oldest date), another click reverses the order. Since the list is already sorted by ascending date when it opens, the first click on **Date** switches it to descending order. The icon next to the column name shows the current sort. The other columns cannot be sorted.
### 6. Read a row

- **Reçu / Total** (Received / Total): the total is the amount incl. VAT; the received amount only counts payments marked as paid. Hover over the amount to see the details of the payments: amount, date, payment method and state (**Payé** (Paid) or **En attente** (Pending)).
- **Credit note**: a negative amount, followed by an arrow. Hover over it to read which contribution it relates to. A credit note has neither a received amount nor a total: the column shows a dash.
- **N° facture** (Invoice no.): click the number to open the invoice in a new tab; the invoice date is below. A dash means the contribution is not yet invoiced.
- **Souscription** (Subscription): click the contributor's name to open their subscription in a new tab.
- The **⋮** menu at the end of the row only appears if a payment is expected: it offers **Ajouter un paiement** (Add a payment) (see [Mark a contribution as paid](/en/aide/paiements/marquer-une-contribution-comme-payee)). On a narrow screen, scroll the table to the right to reach it.
### 7. Launch invoicing for several contributions

Tick the contributions to invoice: only those that can be invoiced have a checkbox (see "Good to know"). The header box selects the whole page. The **Lancer la facturation (N)** (Launch invoicing (N)) button appears next to the filters, with the number of ticked contributions. When you click it, a window asks you to confirm, reminding you of the number of invoices, the total excl. VAT and today's date. The details are in [Invoice contributions (one or several at a time)](/en/aide/facturation/facturer-des-contributions).
## What happens next?

- Viewing the list changes nothing and sends nothing to anyone.
- The contributions of a recurring subscription appear in the list by themselves: see [Generate recurring contributions automatically](/en/aide/contributions/generer-automatiquement-les-contributions-recurrentes). To add one yourself: [Create a contribution or credit note by hand](/en/aide/contributions/creer-une-contribution-ou-un-avoir).
- After **Lancer la facturation** (Launch invoicing), the message **Facturation lancée** (Invoicing launched) appears. The invoices are created, dated the day of launch, and sent by email to the contributors; the contributions change to **Facturée** (Invoiced) after a few moments.
- Depending on the subscription model, invoices can also go out by themselves, without you ticking anything: see [Invoice automatically](/en/aide/facturation/facturer-automatiquement) and [What Cascade does every day](/en/aide/general/ce-que-cascade-fait-chaque-jour).

## Good to know

- From this list, you can neither edit nor delete a contribution.
- A **Payée** (Paid) contribution may have no invoice: the status depends on the payments received, before the invoice.
- A credit note is never **Payé** (Paid): it stays **Nouvelle** (New), **À facturer** (To invoice) or **Facturée** (Invoiced).
- A checkbox only appears on a contribution that does not yet have an invoice and whose subscription model uses the Facture (Invoice) sending method. It may already be paid. A credit note linked to a contribution only has a checkbox once the corrected contribution has been invoiced: the tooltip on its amount explains this.
- The selection is cleared when you change page, sort, filter or search.
- From the list of subscriptions, the **Contributions** link of a row (offered when the contract is signed) opens this list in a new tab, limited to that contributor and over the whole history. Nothing on screen reminds you of this filter: to return to the full list, go through the **Contributions** menu. See [View and filter subscriptions](/en/aide/souscriptions/consulter-et-filtrer-les-souscriptions).
- When nothing matches your search or your filters, the list shows **Aucune contribution** (No contribution) with a **Créer une contribution** (Create a contribution) button: the list is not necessarily empty, check the period.

## Frequently asked questions

::accordion
:::accordion-item{label="I can't see a contribution I know exists."}
By default, the list only shows the month before and the month after today. Widen the period, or search for its invoice number if it is invoiced.
:::
:::accordion-item{label="I'm searching for a contributor by name, but nothing shows up."}
The search only covers the invoice number and description. To see a contributor's contributions, open the list of subscriptions and click the **Contributions** link on their row.
:::
:::accordion-item{label="Why can't I tick a contribution?"}
It is already invoiced, its subscription model does not use the Facture (Invoice) sending method, or it is a credit note whose corrected contribution does not have its invoice yet.
:::
::
