---
title: All features — Cascade
description: The full breakdown of Cascade's functional modules — contracts, contributions, invoicing, payments and oversight — and what becomes automated over time.
---

::page-header
---
backTo: /
backLabel: Back
---
::

::feature-catalog
---
availableHeadline: Available today
comingSoonHeadline: Coming soon
lots:
  - icon: i-lucide-layout-template
    title: Subscription models
    description: Define once the rules that will apply to every subscription derived from them.
    mockup: subscription-model
    features:
      - 'Recurrence: one-off or recurring (weekly, monthly, quarterly, annual)'
      - Amount type (fixed, flexible, pay-what-you-want, etc.)
      - Billing by invoice or by email notification
      - Contract or simple membership, with a contract and amendment template
    automation: A single model, applied automatically to every new subscription. Define as many different models as you need.
  - icon: i-lucide-file-signature
    title: Subscription & invitation
    description: Invite your subscribers from one of your models, following the rules you've configured.
    mockup: subscriptions
    features:
      - Subscription derived from a subscription model
      - Bulk invitation via CSV import
      - Electronic signature and supporting documents collected at creation
      - Full version history and alerts before due dates
    automation: Bulk import to onboard large volumes of subscribers at once.
  - icon: i-lucide-file-check
    title: Contracting
    description: Generate the contract arising from a subscription and track its status through to signature.
    mockup: contracts
    features:
      - Contract generated from the subscription details, filled in by you or by the subscriber
      - 'Status tracking: to sign, signed, rejected'
      - Electronic signature
      - Archiving and export of the signed contract
    automation: The contract is generated at the time of subscription.
  - icon: i-lucide-file-diff
    title: Amendments
    description: Detect changes on a subscription or on a model, and generate an amendment on the affected contracts.
    mockup: amendments
    features:
      - Automatic change detection (amount, resources, duration…)
      - Amendment generation
      - Full version history
      - Notification to the contributor for signature
    automation: Every change creates an amendment; a change made from a subscription model generates amendments in bulk.
  - icon: i-lucide-shield-check
    title: Documents to review
    description: Collect supporting documents at signature and track their review by the manager.
    mockup: documents
    features:
      - Requested documents configurable per subscription model
      - Documents collected at subscription signature
      - Accepted or rejected with reason by the manager
    automation: The subscription status stays on hold until every required document is reviewed.
  - icon: i-lucide-hand-coins
    title: Contributions
    description: Manage one-off or recurring contributions.
    mockup: contributions
    features:
      - Recurring contributions generated for each subscription, with correctly prorated amounts
      - Payments triggered automatically at each due date
      - Manual contributions to handle special cases, without losing the subscription's context
      - Manual invoicing, one at a time or in bulk
    automation: A single operational cockpit for managing the collective's financial activity.
  - icon: i-lucide-receipt-text
    title: Invoicing
    description: Generate the invoices and credit notes arising from subscriptions and contributions, and track their status.
    mockup: invoices
    features:
      - Invoice generation from contributions
      - Credit note management
      - Legal numbering and full content (VAT, mandatory notices, IBAN…)
      - 'Statuses: issued, paid, overdue'
      - Accounting export
    automation: Invoices issued and sent automatically at each due date, with no manual intervention.
  - icon: i-lucide-line-chart
    title: Oversight
    description: Understand the collective's resources, contributions, and flows at a glance.
    mockup: pilotage
    features:
      - Dashboards by resource or occupant
      - Overview of contributions and payments
      - Data export
    automation: Automatic alerts on defined thresholds and periodic reports sent to the collective.
  - icon: i-lucide-credit-card
    title: Payments
    description: Track payments received, regardless of method, and match them to the corresponding invoices.
    mockup: payments
    available: false
    features:
      - 'Tracking by payment method (direct debit, bank transfer, card…)'
      - Invoice / payment reconciliation
      - Reminders in case of non-payment
    automation: Automatic payment reconciliation and scheduled reminders in case of late payment.
  - icon: i-lucide-box
    title: Resource booking
    description: Model shared assets — spaces, equipment, time slots — and track their occupancy in real time.
    mockup: resources
    available: false
    features:
      - Resource split into identifiable sub-units (spots, lockers, workstations…)
      - Assignment of one or more sub-units to a subscription
      - Amount calculated automatically from the resource basket
      - Real-time tracking of occupancy and vacancy
    automation: The subscription amount is automatically recalculated each time a resource is added to or removed from the basket.
  - icon: i-lucide-plug
    title: API connections
    description: Sync accounting, payments, and e-invoicing with your existing tools.
    mockup: api-connections
    available: false
    features:
      - Accounting connectors (Pennylane, and others)
      - Payments synced with existing providers (Stripe…)
      - E-invoicing compliant with regulatory requirements
    automation: Entries sync automatically with your existing tools, with no re-entry.
  - icon: i-lucide-heart-handshake
    title: Nonprofit mode
    description: Issue tax receipts and collect online donations, tailored to nonprofit structures.
    mockup: nonprofit-mode
    available: false
    features:
      - Automatic tax receipt generation
      - Customizable public donation page
      - Donation and donor tracking
    automation: The tax receipt is generated and sent automatically with every donation received.
  - icon: i-lucide-scale
    title: Fee adjustments
    description: Provision costs whose real amount is only known after the fact, and regularize them automatically once the actual invoice arrives.
    mockup: fee-adjustments
    available: false
    features:
      - Monthly provision split between contributors (e.g. pro rata to surface area)
      - Automatic regularization up or down once the real invoice is received
      - History of every provision and its regularization
    automation: As soon as a real invoice is entered, every provisioned contribution is automatically recalculated and regularized.
  - icon: i-lucide-network
    title: Cross-entity management
    description: Connect multiple cascades together to automate shared management processes across entities.
    mockup: cross-entity
    available: false
    features:
      - A federation oversees several local cascades
      - Contribution flows shared across connected entities
      - Consolidated view for the umbrella structure
    automation: Shared processes between connected cascades are automated with no double entry.
  - icon: i-lucide-target
    title: Adaptive contribution
    description: Automatically adjust amounts charged to reach a collectively defined target, rather than a fixed rate set in advance.
    mockup: adaptive-target
    available: false
    features:
      - Collective target defined by the group
      - Distribution automatically recalculated based on the number of contributors
      - Adjustable at any time, with no re-entry
    automation: Each contribution is automatically recalculated whenever a profile or the target changes.
---
::

::cta
---
title: Do you manage a space or resources collectively?
description: Find out if Cascade can meet your needs.
ctaLabel: Book a call
---
::
