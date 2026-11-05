---
title: "Create a subscription model"
module: "Subscription models"
moduleSlug: modeles-de-souscription
order: 4
actors: ["Manager"]
enBref: "A subscription model groups the settings shared by several subscriptions: recurrence, sending method, payment method, receipt and, if needed, contract and amendments. The form takes one step with Simple membership, three with a contract."
where: "Subscription models › Create a model"
status: review
needs: []
glossary: ["modele-de-souscription", "section-informations-generales", "section-mode-d-adhesion", "section-mode-d-envoi", "section-montant-de-contribution", "section-moyen-de-paiement", "section-recu-de-contribution", "section-recurrence"]
video: ""
videoStatus: none
---

## Before you start

- If you want to offer payment by **Prélèvement SEPA** (SEPA direct debit), the organization's online payment account must be connected and operational (see [Connect the organization's Stripe account](/en/aide/paiements/connecter-le-compte-stripe)). Otherwise a warning is displayed in the form.
- If you want contributors to sign a contract, prepare the contract text: you write it in the form, with data that fills in by itself.
- Nothing is saved until you click the create button at the last step. You can go back with **Précédent** (Previous) without losing anything.

## Steps

### 1. Open the creation form

In the menu, go to **Modèles de souscription** (Subscription models), then click **Créer un modèle** (Create a model). The form opens on the **Configuration générale** (General configuration) step.

![The list of subscription models and the Créer un modèle (Create a model) button](/aide/creer-un-modele-de-souscription/creer-modele-souscription-01-ouvrir.png)

### 2. Fill in the general information

Give the model a **Nom** (Name), the one you will find in the lists and when creating a subscription. Choose the applicable **Taux de TVA** (VAT rate) (for example 20%).

![The model's general information](/aide/creer-un-modele-de-souscription/creer-modele-souscription-02-informations.png)

### 3. Choose the recurrence

In the recurrence section, three choices:

- **Récurrent** (Recurring): the contribution comes back at regular intervals. Then choose the cycle (**Mois** (Month) for now, the other cycles are not available yet) and, if you wish, a default end date for subscriptions.
- **Ponctuel** (One-time): a single contribution, on the subscription's start date.
- **Permanent**: a single contribution on the start date, with no planned end.

For **Ponctuel** and **Permanent**, no additional field appears.

![The Récurrent (Recurring) choice with its cycle and its default end date](/aide/creer-un-modele-de-souscription/creer-modele-souscription-03a-recurrent.png)

![The Ponctuel (One-time) choice: no extra field](/aide/creer-un-modele-de-souscription/creer-modele-souscription-03b-ponctuel.png)

### 4. Check the contribution amount

For now, only one option exists: the amount is **fixed by the manager**, meaning you enter it yourself when creating each subscription. Nothing to set here.

![The amount set by the manager](/aide/creer-un-modele-de-souscription/creer-modele-souscription-04-montant.png)

### 5. Set the sending method

With **Facture** (Invoice), you fill in a **Désignation** (Invoice description) (the label that will appear on the invoice), the **Type d'opération** (Operation type), the **Délai de paiement** (Payment terms) and the number of days before the contribution date from which the invoice is created automatically. The **Email** option is announced as "coming soon" and cannot be chosen.

![The settings of the Facture (Invoice) sending method](/aide/creer-un-modele-de-souscription/creer-modele-souscription-05-mode-envoi.png)

### 6. Choose the default payment method

Five methods are offered: **Carte bancaire** (Bank card), **Virement SEPA** (SEPA transfer), **Prélèvement SEPA** (SEPA direct debit), **Espèces** (Cash) and **Chèque** (Cheque). With **Prélèvement SEPA**, a direct debit lead time field appears: at least 2 days are required between the invoice and the direct debit, automatic invoicing must be active, and a warning tells you when the notice period is shortened (between 2 and 13 days). Another warning is displayed if the online payment account is not operational. See [Choose the default payment method and the direct debit lead time](/en/aide/modeles-de-souscription/choisir-le-moyen-de-paiement-par-defaut).

![The Prélèvement SEPA (SEPA direct debit) payment method and its direct debit lead time](/aide/creer-un-modele-de-souscription/creer-modele-souscription-06-paiement.png)

### 7. Choose the contribution receipt

Only one type is available for now: the simple receipt.

![The contribution receipt](/aide/creer-un-modele-de-souscription/creer-modele-souscription-07-recu.png)

### 8. Choose the membership method

- **Adhésion simple** (Simple membership): the contributor has nothing to sign. The form is complete, you can create the model.
- **Contrat** (Contract): the contributor signs a contract. Two steps are added: **Contrat** and **Avenants** (Amendments). Click **Suivant** (Next).

![The Adhésion simple (Simple membership) method](/aide/creer-un-modele-de-souscription/creer-modele-souscription-08a-adhesion-simple.png)

![The Contrat (Contract) method, which adds two steps](/aide/creer-un-modele-de-souscription/creer-modele-souscription-08b-adhesion-contrat.png)

### 9. Prepare the contract documents

At the **Contrat** (Contract) step, you can ask the contributor for supporting documents: the setting is detailed in [Define the supporting documents required](/en/aide/modeles-de-souscription/definir-les-documents-justificatifs-demandes). You can also attach annexes in PDF format, which will be added to the contract.

![The list of supporting documents](/aide/creer-un-modele-de-souscription/creer-modele-souscription-09-documents.png)

### 10. Add the signers

In **Contact(s) signataire(s)** (Signer contact(s)), fill in the name and email address of each person who will sign for your organization.

![The signer contacts](/aide/creer-un-modele-de-souscription/creer-modele-souscription-10-signataires.png)

### 11. Write the contract template

Write the contract text in the editor. Type `[` (opening bracket) or click the **Données de publipostage** (Mail merge data) button to insert a piece of data that will be replaced when each contract is created (contributor's name, amount, dates…). The details are in [Write the contract template (variables in square brackets)](/en/aide/modeles-de-souscription/rediger-le-modele-de-contrat).

![The menu of data to insert between square brackets](/aide/creer-un-modele-de-souscription/creer-modele-souscription-11a-crochet.png)

For information that does not exist yet, choose **Nouveau champ** (New field): the field is created and added to the text.

![Creating a new field](/aide/creer-un-modele-de-souscription/creer-modele-souscription-11b-nouveau-champ.png)

![A contract template filled with data between square brackets](/aide/creer-un-modele-de-souscription/creer-modele-souscription-11c-contrat-rempli.png)

A field can also be filled in by the contributor themselves at the time of signing.

![The fields filled in by the contributor](/aide/creer-un-modele-de-souscription/creer-modele-souscription-11d-champs-contributeur.png)

### 12. Set up the amendment template

Click **Suivant** (Next) to reach the **Avenants** (Amendments) step. The amendment template consists of a header, paragraphs that only appear if a specific change is made, and a footer. By default, it contains one empty paragraph. The details are in [Set up the amendment template (conditional paragraphs)](/en/aide/modeles-de-souscription/configurer-le-modele-d-avenant).

![The Avenants (Amendments) step](/aide/creer-un-modele-de-souscription/creer-modele-souscription-12-avenants.png)

### 13. Create the model

Check your settings, then click **Créer le modèle de souscription** (Create the subscription model) (at the bottom of the **Configuration générale** (General configuration) step with Simple membership, of the **Avenants** (Amendments) step with Contract). If a field is incomplete, a message tells you which one to fix before continuing.

![The model creation button](/aide/creer-un-modele-de-souscription/creer-modele-souscription-13-creer.png)

## What happens next?

- The model appears in the list of subscription models. Nothing is sent to anyone.

![A model already present in the list](/aide/creer-un-modele-de-souscription/creer-modele-souscription-14-liste.png)

- You can now use it to create subscriptions: see [Create a subscription (invite a contributor)](/en/aide/souscriptions/creer-une-souscription).
- A subscription's contributions are created as soon as it is created (simple membership) or as soon as the contract is signed by both parties: a single one on the start date for **Ponctuel** (One-time) and **Permanent**, the upcoming periods for **Récurrent** (Recurring), extended every morning when there is no end date. Times and rules: see [What Cascade does every day](/en/aide/general/ce-que-cascade-fait-chaque-jour). See [Generate recurring contributions automatically](/en/aide/contributions/generer-automatiquement-les-contributions-recurrentes).
- If automatic invoicing is active, each contribution is invoiced and sent to the contributor the chosen number of days before its date; credit notes never are. See [What Cascade does every day](/en/aide/general/ce-que-cascade-fait-chaque-jour). See [Invoice automatically](/en/aide/facturation/facturer-automatiquement).
- If the contract changes later, see [Make an amendment](/en/aide/souscriptions/faire-un-avenant).

## Good to know

- Models cannot be deleted or duplicated for now. You can, however, edit an existing model: see [Edit a subscription model](/en/aide/modeles-de-souscription/modifier-un-modele-de-souscription).
- When you change a setting (for example by switching from **Récurrent** (Recurring) to **Ponctuel** (One-time)), the fields that no longer apply are reset.
- A direct debit lead time of less than 2 days is refused. Between 2 and 13 days, the model is accepted but the shortened-notice warning is displayed.
- The steps are checked one after the other: you cannot move on to the next one while the previous one contains an error.

## Frequently asked questions

::accordion
:::accordion-item{label="Why don't I see the Contrat and Avenants steps?"}
They only appear if the membership method is **Contrat** (Contract). With **Adhésion simple** (Simple membership), the form has only one step.
:::
:::accordion-item{label="Why has my model generated no contributions?"}
A model alone generates nothing: you need to create subscriptions. If the membership method is **Contrat** (Contract), a subscription's contributions are only created when its contract is signed by both parties.
:::
:::accordion-item{label="Can I change the amount in the model?"}
No, for now the amount is entered when creating each subscription.
:::
::
