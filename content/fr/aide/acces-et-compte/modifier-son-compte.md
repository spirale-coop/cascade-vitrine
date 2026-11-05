---
title: "Modifier son compte (infos, mot de passe, thème)"
module: "Accès et compte"
moduleSlug: acces-et-compte
order: 2
actors: ["Gérant", "Administrateur"]
enBref: "Modifie ton prénom, ton nom, ton e-mail et ton mot de passe, et choisis l'apparence de Cascade (clair, sombre ou celle de ton appareil)."
where: "(Ton nom, en bas du menu) › Mon compte"
status: review
needs: ["se-connecter"]
glossary: ["gerant"]
video: ""
videoStatus: none
---

## Avant de commencer

- Il te faut un compte et tu dois être connecté. Voir [Se connecter](/aide/acces-et-compte/se-connecter).
- Pour changer de mot de passe, tu dois connaître ton mot de passe actuel.

## Étapes

### 1. Ouvre ton compte

En bas du menu de gauche, clique sur ton nom, puis sur **Mon compte**.

![Le menu du compte, en bas à gauche, avec l'entrée Mon compte](/aide/modifier-son-compte/modifier-compte-01-menu.png)

### 2. Modifie tes informations personnelles

Dans la section **Informations personnelles**, tu peux changer ton **Prénom**, ton **Nom** et ton **Email**. Les trois sont obligatoires, et deux comptes ne peuvent pas avoir le même e-mail.

![La section Informations personnelles](/aide/modifier-son-compte/modifier-compte-02-infos.png)

### 3. Change ton mot de passe (facultatif)

Dans la section **Changer de mot de passe** :

- **Mot de passe actuel** : à saisir uniquement si tu changes de mot de passe.
- **Nouveau mot de passe** : laisse ce champ vide pour garder ton mot de passe actuel.
- **Confirmation du nouveau mot de passe** : doit être identique au nouveau mot de passe.

Les erreurs s'affichent dès que tu quittes un champ, par exemple « Le mot de passe est incorrect. » ou « Le champ de confirmation ne correspond pas. », accompagnées d'une notification « Corrigez les erreurs du formulaire avant de continuer. ».

![Les erreurs affichées quand le mot de passe actuel est faux et que la confirmation ne correspond pas](/aide/modifier-son-compte/modifier-compte-03-mot-de-passe.png)

### 4. Choisis ton thème

Dans la section **Thème**, ouvre la liste et choisis l'apparence de Cascade : **System** (celle de ton appareil), **Light** (clair) ou **Dark** (sombre). Ces trois libellés s'affichent en anglais à l'écran. Le changement s'applique tout de suite, sans attendre l'enregistrement.

![La liste des trois thèmes](/aide/modifier-son-compte/modifier-compte-04-theme.png)

![Cascade avec le thème Dark](/aide/modifier-son-compte/modifier-compte-04b-sombre.png)

### 5. Enregistre

Clique sur **Enregistrer**, en bas de la page.

![Le bouton Enregistrer](/aide/modifier-son-compte/modifier-compte-05-enregistrer.png)

Tu restes sur la page « Mon compte », avec le message **Profil modifié avec succès.** Les champs de mot de passe sont vidés.

![Le message de confirmation après l'enregistrement](/aide/modifier-son-compte/modifier-compte-06-confirmation.png)

## Et ensuite ?

- Tes nouvelles informations sont prises en compte tout de suite : ton nom s'affiche en bas du menu, et ton nouveau mot de passe sert à ta prochaine connexion.
- Aucun e-mail de confirmation n'est envoyé, ni à l'ancienne ni à la nouvelle adresse.

## Bon à savoir

- Le **Nom** est toujours enregistré en majuscules, quelle que soit la façon dont tu le saisis.
- Le mot de passe actuel n'est demandé que si tu remplis le nouveau mot de passe. Si tu ne touches pas à la section mot de passe, tu peux enregistrer tes informations sans le saisir.
- En production, le nouveau mot de passe doit faire au moins 8 caractères et ne pas figurer dans une fuite de mots de passe connue.
- Cet écran ne permet pas de réinitialiser un mot de passe oublié : il faut demander à un administrateur. Il ne permet pas non plus de modifier tes organisations ni tes droits. Voir Créer et gérer les utilisateurs (rattachement aux organisations).
- Ton compte est personnel : tu ne peux modifier que le tien.

## Questions fréquentes

::accordion
:::accordion-item{label="J'ai changé de thème mais je ne l'ai pas enregistré. Est-ce perdu ?"}
Non : le thème s'applique dès que tu le choisis. Il est retenu par ton navigateur, pas par ton compte : sur un autre appareil ou un autre navigateur, tu retrouveras le thème System.
:::
:::accordion-item{label="J'ai changé mon e-mail. Avec quelle adresse je me connecte ?"}
Avec la nouvelle, dès l'enregistrement.
:::
:::accordion-item{label="Mon enregistrement est refusé."}
Lis les messages sous les champs : e-mail déjà utilisé, mot de passe actuel incorrect, confirmation différente du nouveau mot de passe, ou champ obligatoire vide.
:::
::
