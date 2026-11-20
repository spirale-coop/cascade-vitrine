---
title: "Invite several contributors in bulk"
module: "Subscriptions"
moduleSlug: souscriptions
order: 6
actors: ["Manager"]
enBref: "Invite several contributors at once to sign a contract: you choose a subscription model, import an Excel file with one row per contributor, check the result, and Cascade creates the subscriptions and sends the invitations."
where: "Subscriptions › Invite several contributors"
status: review
needs: ["creer-une-souscription", "creer-un-modele-de-souscription", "rediger-le-modele-de-contrat"]
glossary: ["contrat", "contributeur", "date-de-fin", "date-de-prise-d-effet", "message-d-invitation", "modele-de-souscription", "montant-fixe-par-le-gerant", "montant-ht", "moyen-de-paiement-par-defaut", "ponctuel", "souscription"]
video: ""
videoStatus: none
---

## Before you start

- You need a subscription model in **Contrat** (Contract) membership mode, with a written contract template: it is the only type of model offered here. See [Create a subscription model](/en/aide/modeles-de-souscription/creer-un-modele-de-souscription) and [Write the contract template (variables in square brackets)](/en/aide/modeles-de-souscription/rediger-le-modele-de-contrat).
- Only one contributor to invite? Use [Create a subscription (invite a contributor)](/en/aide/souscriptions/creer-une-souscription) instead.
- Prepare, for each contributor: their name, their email address, the start date of their subscription, and depending on the model their amount and some contract information (see step 4).

## Steps

### 1. Open the bulk invitation page

In the menu, go to **Souscriptions** (Subscriptions), then click **Inviter plusieurs contributeurs** (Invite several contributors). The page runs in two steps: **Import du fichier** (File import), then **Confirmation**.
### 2. Choose the subscription model

In **Modèle de souscription** (Subscription model), open the list and choose the model to which all the contributors in the file will be invited. Each model shows its description. As long as you have not chosen one, nothing else appears.

A file is used for only one model. If you change model after importing a file, the import is cleared: you need to import again.
### 3. Write the invitation message

In **Message d'invitation** (Invitation message), you can write a text, formatted if you wish (headings, lists, bold, links). It is optional and the same for the whole batch: it will be included in each contributor's invitation email. You can edit it until you click **Suivant** (Next), even after importing the file.

### 4. Download the Excel template and fill it in

In the **Modèle Excel à compléter** (Excel template to fill in) box, click **Télécharger le modèle** (Download the template). You get an Excel file (.xlsx) with a **Contributeurs** (Contributors) sheet: fill in one row per contributor, without changing the columns. The columns depend on the model chosen:

- **Nom du contributeur** (Contributor name) and **Email du contributeur** (Contributor email): always required. The email is the address to which the invitation is sent.
- **Date de début (AAAA-MM-JJ)** (Start date (YYYY-MM-DD)): always required, for example 2027-01-01.
- **Date de fin (AAAA-MM-JJ) (optionnel)** (End date (YYYY-MM-DD) (optional)): optional, except for a one-off model, where the column label no longer has the mention « (optionnel) » (optional) and the date is mandatory.
- **Montant HT (€)** (Amount excl. VAT (€)): only if the amount is set by the manager in the model. You can write the cents with a comma or a dot.
- One column per custom contract field that the model reserves for you (for example **Emplacement** (Location)), with the name the model gives it. The fields reserved for the contributor are not in the file: they fill them in themselves.

The payment method is not in the file: each subscription takes the model's one. See [Choose the default payment method and the direct debit lead time](/en/aide/modeles-de-souscription/choisir-le-moyen-de-paiement-par-defaut).
### 5. Import the file and fix the errors

In **Import du fichier complété** (Import of the completed file), drag your file into the area or click it to choose it. Only **.xlsx** files are accepted, and only the first sheet is read. Completely empty rows are ignored.

Cascade then checks each row with the same rules as the form for creating a subscription. The result is shown below the area:

- badges show the number of **lignes valides** (valid rows) and **lignes invalides** (invalid rows);
- for each invalid row, **Ligne N** (Row N) gives its number in your file (row 1 is the header), then each error is preceded by the column name as it appears in the file. Examples: « Email du contributeur : le champ doit être une adresse e-mail valide. » (Contributor email: the field must be a valid email address.), « Email du contributeur : ce contributeur apparaît plusieurs fois dans le fichier. » (Contributor email: this contributor appears several times in the file.), « Email du contributeur : Le contributeur existe déjà sur ce mode de contribution. » (Contributor email: The contributor already exists on this contribution mode.).

Invalid rows will not be sent. You can fix them in your file and import it again, or continue without them. If there is no valid row, an **Aucune ligne valide** (No valid row) box appears and you cannot continue. If the file does not match the template (columns changed or file from another model), a message asks you to download the template again.

Click **Suivant** (Next).
### 6. Check the confirmation

The **Confirmation** screen states how many invitations will be sent, and how many invalid rows will be ignored. Below, the **Aperçu du contrat (premier contributeur valide)** (Contract preview (first valid contributor)) shows the contract as it will be generated for the first valid contributor in the file: read it over. The other contributors receive the same contract, with their own information.

Nothing is created yet at this stage. **Précédent** (Previous) takes you back to the import to fix something.
### 7. Send the invitations

Click **Envoyer les invitations** (Send the invitations). A window asks you to confirm: **Envoyer les invitations ?** (Send the invitations?) Click **Confirmer** (Confirm).
You go back to the list of subscriptions, with a message such as « 3 invitations en cours d'envoi. » (3 invitations being sent.). The list updates by itself for about a minute, as the subscriptions are created.
## What happens next?

- **One subscription per valid row**: each invited contributor has their subscription, created in the background, with their contract generated from the contract template. The rows are processed one by one: the failure of one does not block the others. Find them in the list: see [View and filter subscriptions](/en/aide/souscriptions/consulter-et-filtrer-les-souscriptions).
- **Email to the contributor**: each contributor receives an invitation with your invitation message and a link to read and sign the contract online. The contributor has no account: this link is their only access, and it expires 10 days after the start date of their subscription. If they have lost it: see [Resend the invitation to sign](/en/aide/contrats-et-signature/relancer-l-invitation-a-signer).
- **Contract status**: **À signer par le contributeur** (To be signed by the contributor), or **Invitation envoyée** (Invitation sent) if the contract requires information that only the contributor can give (for example their billing address, or a contract field reserved for them): they fill it in before signing.
- **Contributor's journey**: they fill in their information if needed, upload the documents required by the model, then sign. See [Sign a contract (contributor)](/en/aide/contrats-et-signature/signer-un-contrat) and [Upload supporting documents](/en/aide/documents-justificatifs/deposer-des-documents-justificatifs).
- **Countersignature**: once the contributor is done (and their documents approved, see [Approve or reject supporting documents](/en/aide/documents-justificatifs/valider-ou-rejeter-des-documents-justificatifs)), the model's signers receive an email to countersign. See [Countersign a contract (signer)](/en/aide/contrats-et-signature/contresigner-un-contrat). The details of sending a contract are in [Send a contract for signature](/en/aide/contrats-et-signature/envoyer-un-contrat-en-signature).
- **Contributions**: as long as the contract is not signed by both parties, no contribution is created. See [Generate recurring contributions automatically](/en/aide/contributions/generer-automatiquement-les-contributions-recurrentes) and [What Cascade does every day](/en/aide/general/ce-que-cascade-fait-chaque-jour).

## Good to know

- Only models in **Contrat** (Contract) mode are offered: bulk invitation is used to send contracts to sign. For a model in **Adhésion simple** (Simple membership), create the subscriptions one by one.
- Once the invitations are confirmed, there is no way to cancel them all at once. To end a subscription, see [Cancel a subscription](/en/aide/souscriptions/annuler-une-souscription).
- Before you click **Envoyer les invitations** (Send the invitations), nothing is created: the import and the check leave no trace.
- The contract cannot be reviewed contributor by contributor: only the first valid contributor's one is shown as a preview, and it is sent as is, with no way to edit it. For a contract to edit before sending, or already signed on paper, use the one-by-one creation.
- A contributor cannot be invited twice to the same model as long as their subscription has not ended, identified by their email (upper and lower case are treated the same). The row is rejected with « Le contributeur existe déjà sur ce mode de contribution. » (The contributor already exists on this contribution mode.). An ended subscription does not prevent a new invitation.
- If the same email address appears several times in the file, only its first row is accepted: the following ones are rejected with « Ce contributeur apparaît plusieurs fois dans le fichier. » (This contributor appears several times in the file.).
- Each row creates a new contributor. The information about their company (company name, address, VAT number, SIRET) is not in the file: if they need to give it, they do so when opening their link. Without a company name, Cascade uses the contributor's name.
- Cascade does not check that the start date is the start of a period, nor that it has not already passed: read over your dates. For a past start date, the contributor's link may already have expired (10 days after the start date).
- Dates are written **AAAA-MM-JJ** (YYYY-MM-DD). An Excel cell in date format is also understood.

## Frequently asked questions

::accordion
:::accordion-item{label="My file is rejected with « Ce fichier ne correspond pas au modèle attendu » (This file does not match the expected template)."}
The columns are not those of the chosen model: the order, the number or the name of a column has changed, or the file comes from another subscription model. Download the template again from the page, with the right model chosen, and copy your rows into it without touching the header.
:::
:::accordion-item{label="Some rows are invalid, what should I do?"}
Fix them in your file by following the messages, then import it again: the import replaces the previous one. You can also send without them and invite these contributors later.
:::
:::accordion-item{label="After sending, I don't see all the subscriptions."}
They are created one by one in the background: wait a little and reload the list. If a row is still missing, check that the contributor does not already have a subscription on this model, then invite them individually.
:::
::
