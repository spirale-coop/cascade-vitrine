---
title: "View the list of subscription models"
module: "Subscription models"
moduleSlug: modeles-de-souscription
order: 4
actors: ["Manager"]
enBref: "Find all the subscription models of the current Cascade in a table (recurrence, contribution, sending mode, membership mode), to open one or create a new one."
where: "Subscription models"
status: review
needs: []
glossary: ["adhesion-simple", "contrat", "facture", "modele-de-souscription", "montant-fixe-par-le-gerant", "permanente", "ponctuel", "recurrent", "souscription"]
video: ""
videoStatus: none
---

## Before you start

- No prerequisites: the list is always accessible from the menu. It only shows the models of the current Cascade; to see those of another Cascade, first change Cascade: see [Change the current Cascade](/en/aide/acces-et-compte/changer-de-cascade-courante).
- As long as the Cascade has no model, the list is empty (see step 5).

## Steps

### 1. Open the list

In the menu, click **Modèles de souscription** (Subscription models). The page opens with the same title, the **Créer un modèle** (Create a model) button at the top right and the table of models.
### 2. Read the table

Each row is a subscription model, with five columns:

- **Nom** (Name): the model's name.
- **Récurrence** (Recurrence): **Récurrent** (Recurring), **Ponctuel** (One-off) or **Permanent (sans échéance)** (Permanent (no due date)).
- **Contribution**: how the amount is set. Only **Fixé par le gérant** (Set by the manager) is available for now; **Fixé par le contributeur (à venir)** (Set by the contributor (coming soon)) and **Adaptative (à venir)** (Adaptive (coming soon)) are announced.
- **Mode d'envoi** (Sending mode): **Facture** (Invoice) or **Email (à venir)** (Email (coming soon)).
- **Mode d'adhésion** (Membership mode): **Contrat** (Contract) (the contributor signs a contract) or **Adhésion simple** (Simple membership) (they join without a contract).

The models are sorted by name, from A to Z. A model's other settings (VAT rate, default payment method, lead times, contract text…) are not in the table: you read them by opening the model.
### 3. Find a model

Type a few letters in the **Rechercher…** (Search…) field: the table keeps only the models whose name contains this text. The search only covers the name, not the other columns. Clear the field to see all the models again.

If no name matches, the table shows **Aucun modèle de souscription** (No subscription model), as for a Cascade that does not have any yet.

A click on the **Nom** (Name) header reverses the order (from Z to A); it is the only column that can be sorted. The selector at the bottom left chooses the number of rows per page (**100 par page** (100 per page) initially), the arrows at the bottom right change page.
### 4. Open a model or create one

- To edit a model, click anywhere on its row: there is no « Modifier » (Edit) button. See [Edit a subscription model](/en/aide/modeles-de-souscription/modifier-un-modele-de-souscription).
- To add one, click **Créer un modèle** (Create a model) at the top right. See [Create a subscription model](/en/aide/modeles-de-souscription/creer-un-modele-de-souscription).
### 5. Start from an empty list

In a Cascade without a model, the table is replaced by the message **Aucun modèle de souscription** (No subscription model) and a second button, **Créer un modèle de souscription** (Create a subscription model), which leads to the same form as **Créer un modèle** (Create a model). You need at least one model before inviting a contributor: see [Create a subscription (invite a contributor)](/en/aide/souscriptions/creer-une-souscription).
## What happens next?

Viewing the list changes nothing and sends nothing to anyone. Once a model is chosen, you move on either to editing it, or to creating a subscription that uses it (see [View and filter subscriptions](/en/aide/souscriptions/consulter-et-filtrer-les-souscriptions) to find those that already exist).

## Good to know

- Only the models of the current Cascade appear.
- Models cannot be deleted or duplicated for now: the list only offers opening and creating.
- The list does not show how many subscriptions use each model.
- There is no filter, only the search by name and the sort on the name.
- The options marked **(à venir)** (coming soon) are shown in the list for any models that might carry them, but they are not yet offered at creation: see [Create a subscription model](/en/aide/modeles-de-souscription/creer-un-modele-de-souscription).

## Frequently asked questions

::accordion
:::accordion-item{label="I can't find my model in the list."}
Check the current Cascade (at the top of the menu): a model only exists in the Cascade where it was created. Also check that the **Rechercher…** (Search…) field is empty.
:::
:::accordion-item{label="How do I see a model's payment method or VAT rate?"}
They are not in the table. Click the model's row to open its form, where all the settings are prefilled.
:::
:::accordion-item{label="How do I delete a model I no longer use?"}
It is not possible for now. You can rename it or edit it: see [Edit a subscription model](/en/aide/modeles-de-souscription/modifier-un-modele-de-souscription).
:::
::
