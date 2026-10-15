---
title: Changelog — Cascade
description: The log of improvements and fixes made to the Cascade application since the start of the project.
---

::page-header
---
headline: Changelog
title: Release notes
narrow: true
description: This document tracks the improvements and fixes made to the application.
---
::

::page-prose
## 13 October 2026

### Invoices: a number that shows the month :changelog-tag{type="feature"}

Following feedback from the 22 July demo, the invoice number now contains the year and the month. Numbering restarts at 1 at the beginning of each month, for each Cascade: with continuous numbering, the month would have been mere decoration. For example, `PREFIX-F-26100001` is the first invoice of October 2026. This is legally accepted, since each series is identified by its prefix (Cascade, year and month). Invoices already issued keep their old number: an invoice number is never changed.

### Credit notes: invoice in the right order :changelog-tag{type="feature"}

Following feedback from the 22 July demo, a credit note is no longer invoiced before the contribution it corrects: a credit note linked to a contribution can only be invoiced once that contribution has been invoiced. In the contributions list, an icon next to the credit note's amount points to the contribution it corrects, and a tooltip explains what to do when that contribution has not been invoiced yet. A credit note entered without an original contribution can be invoiced freely, so that it does not stay blocked for good. These rules also apply to bulk invoicing.

### Contributions paid before being invoiced :changelog-tag{type="feature"}

A contribution paid before its invoice was issued can now be invoiced afterwards: a payment received early must not prevent the invoice from being issued. Previously, some of these cases were wrongly blocked.

### Contributions: a list focused on the relevant period :changelog-tag{type="feature"}

By default, the list only shows contributions from one month before to one month after today. The period is changed in a calendar, and "Clear" removes any restriction. When you type a search, this period is ignored, and a subscription's "Contributions" link shows that subscription's whole history: in both cases you are looking for something specific that the default period should not hide from you. An old invoice number can therefore always be found.

### Contributions: a more readable list :changelog-tag{type="improvement"}

The payment method and the creation type (automatic or manual) are shown as icons, to save width, with their label on hover. The amount excluding VAT is right-aligned, only the contributor's name is clickable (the model name appears below it), and an invoice's date is shown under its number.

### Invitations: no more duplicates :changelog-tag{type="feature"}

It used to be possible to invite the same contributor twice on the same subscription model, without any warning. This is no longer possible, whether one at a time or in bulk. The message "The contributor already exists on this contribution model" is shown if they already have an active subscription or one awaiting signature. However, a contributor whose subscription has ended can be invited again. In a bulk invitation, an email that appears several times in the file is flagged, because two identical lines would create the duplicate this rule is meant to prevent.

### Amendments: no effective date in the past :changelog-tag{type="feature"}

When editing a subscription the contributor has already signed, the list of effective dates could offer, and the application could accept, a date earlier than the version being edited. The effective date can no longer be earlier than the current version (it can stay the same, to change only the amount), and the list only offers valid dates. As long as the contributor has not signed, the subscription can still be edited freely: there is no amendment to protect yet.

### Subscription models: no more error on an empty amendment :changelog-tag{type="fix"}

Saving a model whose amendment was empty caused an error: this is fixed. Please note: to edit a subscription that has already been signed, the model must contain an amendment (a header, a footer or at least one paragraph). Otherwise, a message asks you to define one: an empty amendment would have nothing to sign.

## 16 September 2026

### Organizations :changelog-tag{type="fix"}

When a contributor is invited, Cascade automatically creates an organization name for them. The contributor can now correct this name themselves if it does not suit them.

## 15 September 2026

### Payments :changelog-tag{type="fix"}

A manually recorded payment can no longer exceed the remaining balance due on the contribution.

## 9 September 2026

### Invoices :changelog-tag{type="feature"}

An invoice's date is now its creation date, rather than the date of the contribution it relates to.

## 4 September 2026

### Invitations :changelog-tag{type="fix"}

A "Resend invitation" button is available for contracts still awaiting a signature.

### Manual contributions :changelog-tag{type="fix"}

A pending payment is created as soon as the contribution is created.

### Invoices :changelog-tag{type="fix"}

The French mention about late payment penalties no longer appears on invoices from Belgian issuers.

### Delegated signature :changelog-tag{type="fix"}

The pre-signature form filled in by the contributor now offers a list of countries.

## 30 August 2026

### Organizations: all legal information in one place :changelog-tag{type="feature"}

The company name, SIRET or BCE number, VAT number, IBAN and address are grouped in an "Organization" attached to the Cascade. Previously, this information was held separately by each Cascade and each contributor. Membership of the Organization also now determines who can do what: it replaces the roles specific to each Cascade. Existing data was carried over automatically.

### Forms :changelog-tag{type="feature"}

Creating a Cascade and creating a subscription have been redesigned around the Organization. A contributor who is already known can be reused, and the name of their organization is shown on the relevant screens.

### Invoices and contracts :changelog-tag{type="feature"}

Invoices, contract emails and PDFs use this new information.

## 25 August 2026

### Subscriptions list :changelog-tag{type="feature"}

It now offers a link to each subscription's contributions, an "Amount" column and a "Sign" button.

### Amendments :changelog-tag{type="feature"}

Contributions that have already been invoiced are kept when an amendment recreates the upcoming contributions.

### Contracts :changelog-tag{type="feature"}

The "contract being signed" email is only sent when no document is requested from the contributor.

### Files :changelog-tag{type="feature"}

An uploaded file is now only removed with the cross provided for that purpose, and no longer by accidentally clicking the field.

## 21 August 2026

### Contribution payments :changelog-tag{type="feature"}

A contribution's status (paid, pending, etc.) is now calculated from its actual payments, which was not the case before. A manager can record a payment in the contributions table. If the amount received exceeds what was due, the overpayment automatically generates a new contribution.

### Version history :changelog-tag{type="feature"}

A subscription version can be cancelled or edited from the history, as long as the contract is not fully signed.

## 20 August 2026

### Version history :changelog-tag{type="feature"}

A window lists the changes and the contract of each version of a subscription, to understand what changed and when.

### Amendments :changelog-tag{type="feature"}

An amendment can be validated without going through electronic signature.

### My account :changelog-tag{type="feature"}

A new settings page lets you edit your profile, your password and the interface theme (light or dark).

## 17 August 2026

### New interface :changelog-tag{type="feature"}

The application moves entirely to the new interface, with a new login page. It is now served at the root of the site, and the old addresses automatically redirect to the new ones. Only the administration panel remains unchanged.

## 16 August 2026

### Cascades :changelog-tag{type="feature"}

You can now create a Cascade, edit its settings (the logo is kept if you do not change it) and switch from one Cascade to another from the dashboard. The invoice prefix is suggested automatically from the name.

### IBAN :changelog-tag{type="feature"}

The IBAN is checked against each country's rules, with a clear error message if something is wrong.

### Belgium :changelog-tag{type="feature"}

The BCE number is supported for Cascades and contributors. The IBAN, SIRET or BCE, and VAT fields are entered in a guided format.

## 15 August 2026

### Bulk invitation :changelog-tag{type="feature"}

You can invite several contributors at once from an Excel file: a template is provided, the rows are checked before sending, and the invitations are then sent in the background. The subscriptions list updates once sending is complete.

### Cancellation :changelog-tag{type="feature"}

A subscription can be cancelled from the new interface.

## 8 August 2026

### Subscriptions :changelog-tag{type="feature"}

The list and edit pages are available in the new interface. To create an amendment, a preview clearly shows the differences from the previous version.

### Contributor documents :changelog-tag{type="feature"}

The manager can approve or reject the documents uploaded by the contributor.

## 6 August 2026

### Creating a subscription :changelog-tag{type="feature"}

A guided flow lets you create a contributor and then invite them.

### Contract signature :changelog-tag{type="feature"}

The contributor has a page to read their contract, sign it and upload their documents. They fill in themselves the fields the manager has delegated to them. The signature link expires 10 days after the start date.

## 3 August 2026

### Subscription models :changelog-tag{type="feature"}

The list, step-by-step creation and editing are available in the new interface.

### Contract editor :changelog-tag{type="feature"}

It offers toolbars, quick commands by typing `/`, and the insertion or creation of custom fields by typing `[`.

### Contributions :changelog-tag{type="feature"}

The creation form has been redesigned, with a search to pick the subscription and a more forgiving date field.

## 7 July 2026

### A new interface :changelog-tag{type="feature"}

Launch of the complete redesign of the application's interface. It starts with contributions: a list with grouped invoicing, creating a contribution and creating credit notes. Table headers and footers stay visible when you scroll the page.

## 30 June 2026

### Subscriptions :changelog-tag{type="feature"}

New "Permanent" type, for one-off payment subscriptions with no time limit.

## 25 June 2026

### Invoices and credit notes :changelog-tag{type="feature"}

Cascade can now generate invoices from contributions, as well as credit notes. Each invoice is a PDF whose number is built on the Cascade's prefix, and the billing information is frozen at the time of issue.

### Sending :changelog-tag{type="feature"}

The invoice is emailed to the contributor, and a link lets you open it from the contributions list.

### Contributions :changelog-tag{type="feature"}

You can filter the list by invoicing status and search for a contribution by invoice number.

## 24 June 2026

### Manual contributions :changelog-tag{type="feature"}

You can create a contribution by hand, in addition to the automatically generated ones. The amount including VAT is hidden when VAT is zero.

### Emails :changelog-tag{type="feature"}

The emails sent by Cascade have been redone, with a dedicated template for each type of message.

## 2 April 2026

### Contributor documents :changelog-tag{type="feature"}

They appear on the subscription's edit page, with the reason for rejection when a document is refused, and a button to download them.

### VAT :changelog-tag{type="feature"}

The VAT number becomes optional.

## 12 March 2026

### Contracts :changelog-tag{type="fix"}

The logo missing on some contracts is fixed. Amendments now have their own email, and a subscription can have an amount of 0.

## 14 February 2026

### Subscriptions :changelog-tag{type="feature"}

The different versions of the same subscription are grouped together, with a clearer history. It is no longer possible to edit an outdated version.

### Automatic contributions :changelog-tag{type="feature"}

Cascade automatically creates contributions from the subscription, without duplicates. For a subscription with no end date, they renew themselves. The contributions list is also available.

## 28 December 2025

### Amendments :changelog-tag{type="feature"}

Options let you choose the amendment's start date.

### Contracts :changelog-tag{type="feature"}

The appendices section is hidden when it is empty, and no contract is generated until all signatures have been collected.

## 11 December 2025

### Invoicing :changelog-tag{type="feature"}

It is launched from the contributions list. The Cascade's prefix and the company name can be inserted into the contract.

### Administration :changelog-tag{type="feature"}

Administrators can log in as a user, for example to help them, and see their last activity.

## 9 December 2025

### Vocabulary :changelog-tag{type="improvement"}

Terms are aligned with the domain glossary: what used to be called a "contribution" becomes a "subscription", and "transactions" become "contributions". Contributions are hidden in production while they are being finalized.

## 27 November 2025

### Subscriptions :changelog-tag{type="feature"}

It is possible to create a subscription without a contract, as well as a one-off contribution.

### Upcoming contributions :changelog-tag{type="feature"}

They can be created manually (29 November) or automatically (2 December).

### Contracts :changelog-tag{type="feature"}

The "Amendment" label appears on amendments, an invitation message can be added to the first email, and the start date is set to the 1st of the month.

## 7 November 2025

### Contracts :changelog-tag{type="feature"}

The contract number is generated automatically, the sending of contract emails is fixed, and a new amendment is created after each update.

## 5 October 2025

### Contribution models :changelog-tag{type="feature"}

They are created step by step, with an amendment form, and can be edited or deleted. The contract editor lets you insert custom fields.

## 14 May 2025

### Emails :changelog-tag{type="feature"}

An email is sent at each step of the contract, and the appendices are merged into the contract PDF.

## 13 April 2025

### Contracts :changelog-tag{type="feature"}

A contract can be created, then generated as a PDF.

### Signature :changelog-tag{type="feature"}

The contract is signed online, with waiting screens between each step. The manager validates the contributor's documents, then signs in turn as the author.

## 20 March 2025

### Contributors :changelog-tag{type="feature"}

The missing fields in their record are added, and the contract editor is enlarged to be more comfortable.

## 2 February 2025

### Contributors :changelog-tag{type="feature"}

It is possible to create a contributor and get a preview of their contract.

## 23 January 2025

### Contribution modes :changelog-tag{type="feature"}

A form and a list let you manage them, with a mandatory invoice description. Creating a Cascade gives better feedback to the user.

## 18 November 2024

### Cascade :changelog-tag{type="feature"}

Each Cascade becomes a workspace: you can create it, edit it, and you are redirected to the right place after the update.

## 12 November 2024

### Administration :changelog-tag{type="feature"}

First administration panel, user creation and a custom login page.

## 3 November 2024

### Launch :changelog-tag{type="feature"}

Start of the project.

::
