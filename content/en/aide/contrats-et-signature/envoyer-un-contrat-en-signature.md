---
title: "Send a contract for signature"
module: "Contracts and signature"
moduleSlug: contrats-et-signature
order: 3
actors: ["Manager"]
enBref: "Review the contract generated for a subscription, edit it if needed, then send it to the contributor so they can sign it online. You can also add it without a signature if the contract is already signed."
where: "Subscriptions › Create a subscription › Contract"
status: review
needs: ["creer-une-souscription", "rediger-le-modele-de-contrat"]
glossary: ["annexes-au-contrat", "avenant", "contrat", "contributeur", "documents-justificatifs", "message-d-invitation", "modele-de-contrat", "modele-de-souscription", "signataire", "souscription"]
video: ""
videoStatus: none
---

## Before you start

- The subscription model must be in the **Contrat** (Contract) membership mode, with a contract template written. See [Create a subscription model](/en/aide/modeles-de-souscription/creer-un-modele-de-souscription) and [Write the contract template (variables in square brackets)](/en/aide/modeles-de-souscription/rediger-le-modele-de-contrat). With **Adhésion simple** (Simple membership), the subscription form stops at **Créer** (Create): there is no contract and no such step.
- You reach this page at the end of [Create a subscription (invite a contributor)](/en/aide/souscriptions/creer-une-souscription). If you left the page before sending the contract, you can come back to it: see "Good to know".

## Steps

### 1. Reach the contract page

In the **Nouveau contributeur** (New contributor) form, fill in the first two steps (**Informations contribution** (Contribution information), **Informations contributeur** (Contributor information)), then click **Créer** (Create). You land on the third step, **Contrat** (Contract), whose title is « Création du contrat » (Contract creation) followed by the contributor's name.

At the previous step, the question **Qui renseigne les informations ci-dessous ?** (Who fills in the information below?) decides what you will be able to do here:

- **Je remplis moi-même les informations de mon contributeur** (I fill in my contributor's information myself): the contract is complete, you can send it for signature or add it without a signature.
- **Mon contributeur va remplir ses informations lui-même** (My contributor will fill in their information themselves): the contributor completes their information before signing, and you can only send an invitation.

![The choice of who fills in the contributor's information](/aide/envoyer-un-contrat-en-signature/envoyer-contrat-signature-01-qui-renseigne.png)

### 2. Review the contract

The **Contrat** (Contract) field contains the text generated from the subscription's contract template: the contributor's name, the amount, the dates and the other variables are already filled in. Review it, and edit it if needed: what you send is exactly this text, with the editor's formatting (headings, lists, bold, italic, underline, links). The field is required.

A variable whose value is not known (for example the end date when the subscription has none) stays displayed under its name: replace it or remove it before sending.

![The Contrat (Contract) field pre-filled from the contract template](/aide/envoyer-un-contrat-en-signature/envoyer-contrat-signature-02-relire.png)

### 3. Insert a field if needed

To add a piece of the subscription's information to the text, click the **[ ]** button in the editor's toolbar and choose the field from the list: name, email, dates, VAT rate, amounts, billing address, required documents, the model's custom fields…

![The list of fields that can be inserted into the contract](/aide/envoyer-un-contrat-en-signature/envoyer-contrat-signature-03-champs.png)

### 4. Check the attachments and the documents requested

Below the text, two boxes appear only when the subscription model provides for them:

- **Annexes envoyées** (Attachments sent): the files attached to the contract, which you can open. The contributor finds them on their signature page.
- **Documents que le contributeur doit vous envoyer** (Documents the contributor must send you): the list of documents they will have to upload when signing. See [Define the supporting documents required](/en/aide/modeles-de-souscription/definir-les-documents-justificatifs-demandes).

These two boxes are informative: you cannot edit them here.

![The box of documents the contributor must send](/aide/envoyer-un-contrat-en-signature/envoyer-contrat-signature-04-documents.png)

### 5. Send the contract for signature

In the **Mon contributeur n'a pas encore signé de contrat** (My contributor has not signed a contract yet) box, click **Envoyer en signature** (Send for signature). A window asks you to confirm: **Envoyer le contrat en signature ?** (Send the contract for signature?) Click **Confirmer** (Confirm).

![The Envoyer en signature (Send for signature) button](/aide/envoyer-un-contrat-en-signature/envoyer-contrat-signature-05-envoyer.png)

![The confirmation window](/aide/envoyer-un-contrat-en-signature/envoyer-contrat-signature-06-confirmation.png)

If the contributor has to fill in their own information, the box is titled **Mon contributeur n'a pas encore complété ses informations** (My contributor has not completed their information yet) and the button becomes **Envoyer l'invitation** (Send the invitation) (window: **Envoyer l'invitation ?** (Send the invitation?)). The **Mon contributeur a déjà signé le contrat** (My contributor has already signed the contract) box, which offers **Ajouter sans signature** (Add without signature), then disappears.

![The Envoyer l'invitation (Send the invitation) button when the contributor completes their own information](/aide/envoyer-un-contrat-en-signature/envoyer-contrat-signature-07-invitation.png)

You then go back to the list of subscriptions.

## What happens next?

- **Contract status**: open the subscription, in the **Historique** (History) section: a badge reads **À signer par le contributeur** (To be signed by the contributor), or **Invitation envoyée** (Invitation sent) if the contributor must first complete their information.

![The « À signer par le contributeur » (To be signed by the contributor) badge in the subscription's history](/aide/envoyer-un-contrat-en-signature/envoyer-contrat-signature-08-statut-signature.png)

![The « Invitation envoyée » (Invitation sent) badge when the contributor must complete their information](/aide/envoyer-un-contrat-en-signature/envoyer-contrat-signature-09-statut-invitation.png)

- **Email to the contributor**: they receive an invitation with a link to read and sign the contract online. If you wrote a **Message d'invitation** (Invitation message) when creating the subscription, it is included in this email. The contributor has no account: this link is their only access, and it expires 10 days after the subscription's effective date. If you need to resend it: see [Resend the invitation to sign](/en/aide/contrats-et-signature/relancer-l-invitation-a-signer).
- **Contributor's journey**: they complete their information if you delegated that work to them, upload the documents requested, then sign. See [Sign a contract (contributor)](/en/aide/contrats-et-signature/signer-un-contrat) and [Upload supporting documents](/en/aide/documents-justificatifs/deposer-des-documents-justificatifs).
- **Approval and countersignature**: you approve the uploaded documents ([Approve or reject supporting documents](/en/aide/documents-justificatifs/valider-ou-rejeter-des-documents-justificatifs)), then the model's signers receive an email to countersign ([Countersign a contract (signer)](/en/aide/contrats-et-signature/contresigner-un-contrat)).
- **Contributions**: as long as the contract is not signed by both parties, no contribution is created. As soon as the last signature is in, they are generated: see [Generate recurring contributions automatically](/en/aide/contributions/generer-automatiquement-les-contributions-recurrentes) and [What Cascade does every day](/en/aide/general/ce-que-cascade-fait-chaque-jour).

## Good to know

- The subscription is already created when you reach this page: the three-step form saves nothing before **Créer** (Create), but the contract itself is only created when it is sent. If you leave the page without sending, the subscription exists without a contract: open it, and in the **Historique** (History) section click **Créer le contrat** (Create the contract) to come back here. See [View a subscription's version history](/en/aide/souscriptions/consulter-l-historique-des-versions).
- The contract is only created once per subscription: once sent, the creation page is no longer accessible and its text can no longer be edited from this page.
- The text you send is kept as is in the contract: if you then edit the subscription before the contributor signs, review the contract.
- **Ajouter sans signature** (Add without signature) (only available when you filled in the contributor's information yourself) considers the contract already signed by both parties: the contributions are created right away and nothing is sent to the contributor. See [Add a contract without a signature (already signed on paper)](/en/aide/contrats-et-signature/ajouter-un-contrat-sans-signature).
- For a subscription that is not the first version (after a modification), the page is called « Avenant au contrat » (Contract amendment): it displays the **Éléments modifiés** (Modified items) and the **Texte de l'avenant** (Amendment text), with the **Envoyer en signature** (Send for signature) and **Valider sans signature** (Validate without signature) buttons. See [Make an amendment](/en/aide/souscriptions/faire-un-avenant).
- As long as the contract is not signed by both parties, you can cancel the subscription from its page: see [Cancel a subscription](/en/aide/souscriptions/annuler-une-souscription).

## Frequently asked questions

::accordion
:::accordion-item{label="I don't have the “Ajouter sans signature” (Add without signature) button."}
It only appears if the contributor has no information to complete themselves. If you chose to have them fill in their information, only **Envoyer l'invitation** (Send the invitation) is offered.
:::
:::accordion-item{label="I closed the page before sending the contract."}
Open the subscription in **Souscriptions** (Subscriptions), then click **Créer le contrat** (Create the contract) in the **Historique** (History) section.
:::
:::accordion-item{label="The contributor says they did not receive the email."}
Check the email address entered for the contributor, then resend the invitation: see [Resend the invitation to sign](/en/aide/contrats-et-signature/relancer-l-invitation-a-signer).
:::
::
