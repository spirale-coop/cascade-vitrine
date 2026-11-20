---
title: "Invoice contributions (one or several at a time)"
module: "Invoicing"
moduleSlug: facturation
order: 3
actors: ["Manager"]
enBref: "Generates the invoices for one or several contributions to invoice in a single action, then sends them by email to the contributors. It is also the only way to invoice a credit note."
where: "Contributions › (the ticked rows) › Lancer la facturation (Launch invoicing)"
status: review
needs: ["creer-un-modele-de-souscription", "creer-une-contribution-ou-un-avoir", "generer-automatiquement-les-contributions-recurrentes"]
glossary: ["avoir", "contributeur", "contribution", "delai-avant-facturation", "delai-de-paiement", "designation", "facture", "modele-de-souscription", "prefixe", "section-mode-d-envoi", "type-d-operation"]
video: ""
videoStatus: none
---

## Before you start

- You need at least one contribution to invoice, that is, one whose subscription model uses the **Facture** (Invoice) sending method. It comes from automatic generation (see [Generate recurring contributions automatically](/en/aide/contributions/generer-automatiquement-les-contributions-recurrentes)) or from your own entry (see [Create a contribution or credit note by hand](/en/aide/contributions/creer-une-contribution-ou-un-avoir)). The sending method is set when the model is created: see [Create a subscription model](/en/aide/modeles-de-souscription/creer-un-modele-de-souscription).
- Your organization's information must be complete: billing address, SIRET (or BCE) number and invoice number prefix. See [Edit the Cascade settings (legal identity, IBAN, VAT, address, logo, prefix)](/en/aide/cascade-et-organisation/modifier-les-reglages-de-la-cascade). The contributor must also have a billing address.
- If the subscription model has an invoicing lead time, Cascade invoices contributions by itself on their invoicing day: you then have nothing to do, except for credit notes. See [Invoice automatically](/en/aide/facturation/facturer-automatiquement).

## Steps

### 1. Open the list of contributions

In the menu, go to **Contributions**. There you find the contributions of the current Cascade, oldest first. To find a specific contribution, see [View and filter contributions](/en/aide/contributions/consulter-et-filtrer-les-contributions).
### 2. Find the contributions to invoice

Open the **Statut** (Status) filter and choose **À facturer** (To invoice). By default, the list only shows contributions whose date falls between one month before and one month after today: widen the **Date** filter if you are looking further.

You can also search by invoice description or invoice number with the **Rechercher…** (Search…) bar.
### 3. Tick the contributions to invoice

A checkbox appears at the start of the rows that can still be invoiced. To invoice a single contribution, tick only its row.
To tick everything at once, use the header box (**Tout sélectionner** (Select all)): it ticks all invoiceable rows of the page displayed, not those of other pages. The list shows 100 contributions per page, and you can switch to 50, 200 or 500 at the bottom of the table.
Some rows have no checkbox:

- those whose model does not use the Facture (Invoice) sending method (status **Nouvelle** (New));
- those that already have an invoice;
- a credit note linked to a contribution that has not been invoiced yet. A curved arrow icon follows its amount: hover over it to read which contribution it corrects. Invoice that contribution first; the credit note can be invoiced afterwards, in a second invoicing.
Be careful: the selection is cleared as soon as the list changes (change of page, filter, sort or search). Tick your rows just before launching invoicing.

### 4. Launch invoicing

As soon as at least one row is ticked, the **Lancer la facturation** (Launch invoicing) button appears at the top of the table, with the number of ticked rows in brackets. Click it.
### 5. Confirm

A window asks « Voulez-vous lancer la facturation pour ces contributeurs ? » (Do you want to launch invoicing for these contributors?). It announces the number of invoices that will be created, their total amount excl. VAT (credit notes are deducted), the invoice date, which is today's, and reminds you that they will be sent by email to the contributors. Read these figures again, then click **Confirmer** (Confirm). **Annuler** (Cancel) takes you back to the list without changing anything.
The message **Facturation lancée** (Invoicing launched) appears and you return to the list, whose filters are reset to their default values. Invoiced contributions no longer have a checkbox, and their invoice number appears in the **N° facture** (Invoice no.) column (scroll the table to the right if needed). If the number is not there yet, reload the page a few moments later.
Click the number to open the invoice as a PDF in a new tab.
## What happens next?

- **Invoice**: one invoice is created for each ticked contribution, all dated the day you confirmed. Its number is made up of your Cascade's prefix, `-F-`, the two-digit year, the month and a four-digit counter. The counter restarts at 1 every month: `BAT1-F-26110002` is the second invoice of November 2026.
- **Email**: each invoice goes out by email to the contributor's contact, with the PDF attached. See [Email the invoice to the contributor](/en/aide/facturation/envoyer-la-facture-par-e-mail).
- **Status**: the contribution goes from **À facturer** (To invoice) to **Facturée** (Invoiced). If it has already received a payment, it keeps its **Partiellement payée** (Partially paid) or **Payée** (Paid) status. See [Mark a contribution as paid](/en/aide/paiements/marquer-une-contribution-comme-payee).
- **Due date**: the invoice uses the subscription model's payment terms to calculate its due date. A credit note has no due date: it refers to the invoice number of the contribution it corrects.
- **SEPA direct debit**: if a contribution is invoiced later than planned, its direct debit date is pushed back to 2 days after the invoice date, to give the contributor time to receive the invoice before being debited. A direct debit that is already far enough away does not move.
- The contributor has nothing to do: they receive the invoice and pay using the planned payment method.

## Good to know

- A contribution is never invoiced twice, and an issued invoice cannot be modified: there is no screen to correct or cancel it. To fix a mistake, create a credit note (see [Create a contribution or credit note by hand](/en/aide/contributions/creer-une-contribution-ou-un-avoir)), then invoice it here.
- A contribution that is already paid but not yet invoiced can still be invoiced: a payment received in advance does not prevent issuing the invoice.
- A credit note that corrects no contribution can be invoiced right away. If it corrects one, that contribution must be invoiced first. The two cannot be ticked together: run two invoicings in a row.
- Credit notes are never invoiced automatically: it is always up to you to invoice them here.
- If the list has changed in the meantime (a contribution has already been invoiced by someone else or by automatic invoicing), the whole selection is rejected with the message « Certaines contributions sélectionnées ne peuvent pas être facturées. » (Some selected contributions cannot be invoiced.) and no invoice is created. Reload the list and start again.
- To issue an invoice, Cascade needs your organization's billing address and SIRET (or BCE), the contributor's billing address and an operation type (Prestation de service (Provision of services) or Vente de marchandise (Sale of goods)). If any of this information is missing, the invoice is not created and the contribution stays **À facturer** (To invoice).
- The automatic runs, their times and their rules are described in [What Cascade does every day](/en/aide/general/ce-que-cascade-fait-chaque-jour). To set a model's automatic invoicing day, see [Set up automatic invoicing](/en/aide/modeles-de-souscription/configurer-la-facturation-automatique).

## Frequently asked questions

::accordion
:::accordion-item{label="I can't tick a contribution."}
Check its status: only those that are **À facturer** (To invoice) have a checkbox, including if they are already paid. A **Nouvelle** (New) contribution belongs to a model that does not send invoices, and a **Facturée** (Invoiced) contribution already has its invoice. For a credit note, hover over the icon next to the amount: it may be waiting for the contribution it corrects to be invoiced.
:::
:::accordion-item{label="I launched invoicing, but the contribution is still À facturer."}
The invoice probably could not be created: check that your organization has a billing address and a SIRET (or BCE), that the contributor has a billing address and that the contribution has an operation type. Complete what is missing, then launch invoicing for this contribution again.
:::
:::accordion-item{label="Can I choose the invoice date?"}
No: all invoices in a batch carry the date of the day you confirm.
:::
::
