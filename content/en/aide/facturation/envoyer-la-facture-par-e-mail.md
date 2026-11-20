---
title: "Email the invoice to the contributor"
module: "Invoicing"
moduleSlug: facturation
order: 1
actors: ["Manager", "Contributor"]
enBref: "When you launch invoicing (or when Cascade invoices by itself), the contributor receives their invoice as an email attachment, at the contact address of their subscription: they have no account, so this is their only access to the invoice."
where: "Contributions › (tick contributions) › Lancer la facturation (Launch invoicing) › Confirmer (Confirm)"
status: review
needs: ["creer-un-modele-de-souscription", "creer-une-souscription", "modifier-les-reglages-de-la-cascade"]
glossary: ["avoir", "contributeur", "contribution", "delai-de-paiement", "facture", "modele-de-souscription", "section-mode-d-envoi", "souscription"]
video: ""
videoStatus: none
---

## Before you start

- The subscription model must use the **Facture** (Invoice) sending method: this is what makes contributions invoiceable. See [Create a subscription model](/en/aide/modeles-de-souscription/creer-un-modele-de-souscription). The other sending method, **Email (à venir)** (Email (coming soon)), is not available yet: it is greyed out in the model.
- Your organization's billing information must be complete (at least the address and SIRET). See [Edit the Cascade settings (legal identity, IBAN, VAT, address, logo, prefix)](/en/aide/cascade-et-organisation/modifier-les-reglages-de-la-cascade).
- The contributor must have a billing address and a contact email address: this is the address the invoice is sent to. See [Create a subscription (invite a contributor)](/en/aide/souscriptions/creer-une-souscription).

## Steps

The contributor has no Cascade account: the email is the only way they receive their invoice. It goes out in two cases, with the same content: when you launch invoicing from the list (steps below), and when Cascade invoices by itself (see [Invoice automatically](/en/aide/facturation/facturer-automatiquement)). There is no other setting to make for sending.

### 1. Select the contributions to invoice

In the menu, go to **Contributions**. Tick the box of each **À facturer** (To invoice) contribution you want to send; the **Lancer la facturation** (Launch invoicing) button appears at the top of the list, with the number of ticked contributions in brackets. Contributions that cannot be invoiced (already invoiced, or with no invoice in their model) have no checkbox.
### 2. Launch invoicing and confirm

Click **Lancer la facturation (1)** (Launch invoicing (1)). A window reminds you of what is about to happen: the number of invoices generated, their total amount excl. VAT, their date (the same day) and their sending by email to the contributors concerned. Click **Confirmer** (Confirm) to start sending, or **Annuler** (Cancel) to return to the list without sending anything.
### 3. Find the invoice in the list

The message **Facturation lancée** (Invoicing launched) appears. Cascade then creates each invoice and sends it to the contributor; if the list has not changed yet, reload the page. The contribution changes to **Facturée** (Invoiced) and its number appears in the **N° facture** (Invoice no.) column, with the invoice date. Click the number to open the invoice as the contributor receives it.
## What happens next?

- **Email**: the contributor receives an email at the contact email address of their subscription. It tells them the invoice number, its due date, and the name of your Cascade and of your organization. The invoice is attached as a PDF, named **Facture** (Invoice) followed by its number.
- **Due date**: it follows the subscription model's **Délai de paiement** (Payment terms), starting from the invoice date.
- **Status**: the contribution is **Facturée** (Invoiced) as soon as the invoice is created. It becomes **Payée** (Paid) when you record the payment: see [Mark a contribution as paid](/en/aide/paiements/marquer-une-contribution-comme-payee).
- **SEPA direct debit**: the invoice serves as the notice. If the planned direct debit date falls less than 2 days after the invoice, it is pushed back to 2 days after.
- **Automatic invoicing**: when the model has an invoicing lead time, the same invoice and the same email go out by themselves, on the morning of the invoicing day. See [Invoice automatically](/en/aide/facturation/facturer-automatiquement) and [What Cascade does every day](/en/aide/general/ce-que-cascade-fait-chaque-jour).

## Good to know

- The contributor only receives an email with their invoice: creating a contribution, a subscription or a payment does not send one for that purpose.
- The invoice is dated the day you confirm, for all contributions in the same selection.
- A credit note is invoiced and sent the same way, from the list; it is never sent automatically. It can only go out once the contribution it corrects has been invoiced, and cannot be selected in the same selection as that contribution: run two invoicings in a row. See [Create a contribution or credit note by hand](/en/aide/contributions/creer-une-contribution-ou-un-avoir).
- There is no button to resend an invoice already sent, nor to change the sending address afterwards: an invoiced contribution cannot be invoiced again. For now, the invoice can still be downloaded from the **N° facture** (Invoice no.) column.
- A sent invoice is never modified. If sending fails, Cascade tries again once; it then resends the same invoice, without creating a second one.
- To invoice several contributions at once and for details on the selection, see [Invoice contributions (one or several at a time)](/en/aide/facturation/facturer-des-contributions).

## Frequently asked questions

::accordion
:::accordion-item{label="The contributor says they received nothing."}
Check in the list that the contribution is **Facturée** (Invoiced), then the contact email address of their subscription, and ask them to look in their spam folder. If the contribution is not **Facturée**, the invoice was not created: check your organization's billing information and the contributor's billing address.
:::
:::accordion-item{label="Can I resend the invoice?"}
Not from Cascade for now. You can open the invoice from the **N° facture** (Invoice no.) column and forward it yourself.
:::
:::accordion-item{label="I launched invoicing but nothing appears."}
Reload the page. If the contribution is still **À facturer** (To invoice), the invoice could not be created (incomplete billing information, for example): Cascade does not warn you, so fix the information and then launch invoicing again.
:::
::
