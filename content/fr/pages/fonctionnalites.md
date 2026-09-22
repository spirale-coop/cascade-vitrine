---
title: Toutes les fonctionnalités — Cascade
description: Le détail des lots fonctionnels de Cascade — contrats, contributions, facturation, paiements et pilotage — et ce qui s'automatise progressivement.
---

::page-header
---
backTo: /
backLabel: Retour
---
::

::feature-catalog
---
availableHeadline: Disponible aujourd'hui
inProgressHeadline: En cours de développement
comingSoonHeadline: Bientôt disponible
lots:
  - icon: i-lucide-layout-template
    title: Modèles de souscription
    description: Définir une fois les règles qui s'appliqueront à toutes les souscriptions qui en découlent.
    mockup: subscription-model
    features:
      - 'Récurrence : ponctuelle ou récurrente (hebdomadaire, mensuelle, trimestrielle, annuelle)'
      - Type de montant (fixe, flexible, libre, etc.)
      - Facturation par facture ou par notification mail
      - Contrat ou adhésion simple, avec modèle de contrat et d'avenant
    automation: Un seul modèle, appliqué automatiquement à chaque nouvelle souscription. Définissez autant de modèles différents que vous souhaitez.
  - icon: i-lucide-file-signature
    title: Souscription & invitation
    description: Invitez vos souscripteurs à partir d'un de vos modèle selon les règles que vous avez paramètré.
    mockup: subscriptions
    features:
      - Souscription à partir d'un modèle de souscription
      - Invitation en masse par import CSV
      - Signature électronique et pièces justificatives collectées à la création
      - Historique complet des versions et alertes avant échéance
    automation: Import en masse pour intégrer de gros volumes de souscripteurs d'un coup.
  - icon: i-lucide-file-check
    title: Contractualisation
    description: Générer le contrat qui découle d'une souscription et suivre son statut jusqu'à la signature.
    mockup: contracts
    features:
      - Contrat généré à partir des information de souscription rempli par vous ou par le souscripteur
      - 'Suivi des statuts : à signer, signé, refusé'
      - Signature électronique
      - Archivage et export du contrat signé
    automation: Le contrat se génère lors de la souscription.
  - icon: i-lucide-file-diff
    title: Avenants
    description: Détecter les modification sur une souscription ou sur un modèle et générer un avenant sur les contrats concernés.
    mockup: amendments
    features:
      - Détection automatique des modifications (montant, ressources, durée…)
      - Génération de l'avenant
      - Historique de toutes les versions
      - Notification au contributeur pour signature
    automation: Chaque changement crée un avenant, une modification depuis un modèle de souscription gènère des avenants en masse.
  - icon: i-lucide-shield-check
    title: Documents à valider
    description: Collecter les pièces justificatives à la signature et suivre leur validation par le gestionnaire.
    mockup: documents
    features:
      - Pièces demandées configurables par modèle de souscription
      - Collecte des pièces à la signature de la souscription
      - Validation ou rejet motivé par le gestionnaire
    automation: Le statut de la souscription reste bloqué jusqu'à validation de toutes les pièces requises.
  - icon: i-lucide-hand-coins
    title: Contributions
    description: Gérer les contributions ponctuelles ou récurrentes.
    mockup: contributions
    features:
      - Contribution réccurentes générées pour chaque souscription avec les bons montants proratisés
      - Déclenchement des paiement aux échéances
      - Ajout manuel d’une contribution pour gérer tous les cas particuliers en conservant le contexte de la souscription.
      - Lancement manuel de la facturation à l’unité ou en masse
    automation: Offre un cockpit opérationnel pour gérer l’activité financière de l’activité.
  - icon: i-lucide-receipt-text
    title: Facturation
    description: Générer les factures et avoirs qui découlent des souscriptions et contributions, et suivre leur statut.
    mockup: invoices
    features:
      - Génération de factures depuis les contributions
      - Gestion des avoirs
      - Numérotation légale et contenu complet (TVA, mentions, IBAN…)
      - 'Statuts : émise, payée, en retard'
      - Export comptable
    automation: Facturation émise et envoyée automatiquement à chaque échéance, sans intervention manuelle.
  - icon: i-lucide-line-chart
    title: Pilotage
    description: Comprendre en un coup d'œil les ressources, les contributions et les flux du collectif.
    mockup: pilotage
    features:
      - Tableaux de bord par ressource ou occupant
      - Vue d'ensemble des contributions et paiements
      - Export des données
    automation: Alertes automatiques sur les seuils définis et rapports périodiques envoyés au collectif.
  - icon: i-lucide-credit-card
    title: Paiements
    description: Suivre les paiements reçus, quel que soit le moyen, et les rattacher aux factures correspondantes.
    mockup: payments
    status: in-progress
    features:
      - 'Suivi par moyen de paiement (prélèvement, virement, carte…)'
      - Rapprochement facture / paiement
      - Relances en cas d'impayé
    automation: Rapprochement automatique des paiements et relances programmées en cas de retard.
  - icon: i-lucide-box
    title: Réservation des ressources
    description: Modéliser les actifs mutualisés — espaces, équipements, créneaux — et suivre leur occupation en temps réel.
    mockup: resources
    status: upcoming
    features:
      - Ressource découpée en sous-unités identifiables (places, casiers, postes…)
      - Attribution d'une ou plusieurs sous-unités à une souscription
      - Montant calculé automatiquement à partir du panier de ressources
      - Suivi de l'occupation et de la vacance en temps réel
    automation: Le montant de la souscription se recalcule automatiquement à chaque ressource ajoutée ou retirée du panier.
  - icon: i-lucide-plug
    title: Connexions API
    description: Synchroniser comptabilité, paiements et facturation électronique avec vos outils existants.
    mockup: api-connections
    status: upcoming
    features:
      - Connecteurs comptables (Pennylane, et autres)
      - Paiements synchronisés avec les prestataires existants (Stripe…)
      - Facturation électronique conforme aux obligations réglementaires
    automation: Les écritures se synchronisent automatiquement avec vos outils existants, sans ressaisie.
  - icon: i-lucide-heart-handshake
    title: Mode association
    description: Émettre des reçus fiscaux et collecter des dons en ligne, adaptés aux structures associatives.
    mockup: nonprofit-mode
    status: upcoming
    features:
      - Génération automatique des reçus fiscaux
      - Page de don publique personnalisable
      - Suivi des dons et des donateurs
    automation: Le reçu fiscal est généré et envoyé automatiquement à chaque don reçu.
  - icon: i-lucide-scale
    title: Régulation
    description: Provisionner les frais dont le montant réel n'est connu qu'après coup, et les régulariser automatiquement à réception de la facture.
    mockup: fee-adjustments
    status: upcoming
    features:
      - Provision mensuelle répartie entre les contributeurs (par exemple au prorata de la surface)
      - Régularisation automatique à la hausse ou à la baisse à réception de la facture réelle
      - Historique de chaque provision et de sa régularisation
    automation: Dès qu'une facture réelle est renseignée, chaque contribution provisionnée est recalculée et régularisée automatiquement.
  - icon: i-lucide-network
    title: Gestion inter-entité
    description: Connecter plusieurs cascades entre elles pour automatiser des processus de gestion partagés entre structures.
    mockup: cross-entity
    status: upcoming
    features:
      - Une fédération pilote plusieurs cascades locales
      - Flux de contribution partagés entre structures connectées
      - Vue consolidée pour la structure faîtière
    automation: Les processus partagés entre cascades connectées s'automatisent sans double saisie.
  - icon: i-lucide-target
    title: Contribution adaptative
    description: Ajuster automatiquement les montants prélevés pour atteindre un objectif défini collectivement, plutôt qu'un tarif figé décidé d'avance.
    mockup: adaptive-target
    status: upcoming
    features:
      - Objectif collectif défini par le collectif
      - Répartition recalculée automatiquement selon le nombre de contributeurs
      - Ajustement à tout moment, sans ressaisie
    automation: Chaque contribution se recalcule automatiquement dès qu'un profil ou l'objectif évolue.
  - icon: i-lucide-trending-up
    title: Indexation des tarifs
    description: Réévaluer automatiquement les montants selon un indice de référence, à échéance régulière.
    mockup: indexation
    status: upcoming
    features:
      - Indice de référence configurable par modèle de souscription (INSEE, ICC, indice personnalisé…)
      - Réévaluation automatique à l'échéance définie
      - Historique des révisions appliquées
    automation: Les montants sont recalculés et appliqués automatiquement à chaque échéance d'indexation, sans ressaisie.
---
::

::cta
---
title: Vous gérez un lieu ou des ressources collectivement ?
description: Découvrez si Cascade peut répondre à vos besoins.
ctaLabel: Réserver un échange
---
::
