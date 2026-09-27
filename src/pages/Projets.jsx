import { useState } from "react";

function GalerieProjet({ titre, description, images }) {
  const [imageActive, setImageActive] = useState(null);

  return (
    <div className="project-gallery-section">
      <div className="project-gallery-heading">
        <p>{titre}</p>

        {description && <span>{description}</span>}
      </div>

      <div className="project-gallery-grid">
        {images.map((image, index) => (
          <button
            className="project-gallery-item"
            key={image}
            onClick={() => setImageActive(image)}
            type="button"
          >
            <img
              src={image}
              alt={`${titre} - ${index + 1}`}
            />
          </button>
        ))}
      </div>

      {imageActive && (
        <div
          className="project-lightbox"
          onClick={() => setImageActive(null)}
        >
          <button
            className="project-lightbox-close"
            onClick={() => setImageActive(null)}
            type="button"
            aria-label="Fermer"
          >
            ×
          </button>

          <img
            src={imageActive}
            alt={titre}
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

function Projets() {
  const ancienSite = [
    "/projects/stage-pfs/ancien-site/ancien-1.png",
    "/projects/stage-pfs/ancien-site/ancien-2.png",
    "/projects/stage-pfs/ancien-site/ancien-3.png",
    "/projects/stage-pfs/ancien-site/ancien-4.png",
  ];

  const cartesMentales = [
    "/projects/stage-pfs/carte-mentale/carte-1.jpg",
    "/projects/stage-pfs/carte-mentale/carte-2.jpg",
    "/projects/stage-pfs/carte-mentale/carte-3.jpg",
    "/projects/stage-pfs/carte-mentale/carte-4.jpg",
    "/projects/stage-pfs/carte-mentale/carte-5.jpg",
  ];

  const maquettes = [
    "/projects/stage-pfs/maquette/maquette-1.jpg",
    "/projects/stage-pfs/maquette/maquette-2.jpg",
    "/projects/stage-pfs/maquette/maquette-3.jpg",
    "/projects/stage-pfs/maquette/maquette-4.jpg",
    "/projects/stage-pfs/maquette/maquette-5.jpg",
  ];
  const welabImages = Array.from(
        { length: 24 },
        (_, index) =>
        `/projects/welab-cosmetic/${String(index + 1).padStart(2, "0")}.png`);

  const gameImages = Array.from(
        { length: 16 },
        (_, index) =>
        `/projects/game/${String(index + 1).padStart(2, "0")}.png`
    );

  const medicoSymfonyImages = Array.from(
        { length: 19 },
        (_, index) =>
        `/projects/medico-symfony/${String(index + 1).padStart(2, "0")}.png`
    );

  const observoImages = Array.from(
        { length: 11 },
        (_, index) =>
        `/projects/observo/${String(index + 1).padStart(2, "0")}.png`
    );

  const medicoDjangoImages = Array.from(
        { length: 10 },
        (_, index) =>
        `/projects/medico-django/${String(index + 1).padStart(2, "0")}.png`
    );

  return (
    <main className="projects-page">

      {/* =========================================
          INTRODUCTION
      ========================================= */}

      <section className="projects-intro">
        <p className="section-label">PROJETS</p>

        <h1>
          Mes <span>réalisations.</span>
        </h1>

        <p className="projects-intro-text">
          Des projets professionnels et universitaires qui illustrent
          mon parcours, ma démarche et les compétences que j&apos;ai
          développées.
        </p>

        <div className="projects-scroll">
          <span>Découvrir mes projets</span>
          <span className="projects-scroll-arrow">↓</span>
        </div>
      </section>


      {/* =========================================
          PROJET 01
      ========================================= */}

      <section className="project-block">

        {/* NUMÉRO */}

        <div className="project-number">
          <span>01</span>
          <p>PROJET PROFESSIONNEL</p>
        </div>


        {/* TITRE */}

        <div className="project-title-area">
          <div>
            <p className="project-company">
              Agence nationale du Sport
            </p>

            <h2>
              Refonte fonctionnelle du
              <span> porte-documents PFS</span>
            </h2>
          </div>

          <p className="project-lead">
            Conception de la cible fonctionnelle du porte-documents
            du Portail des Fédérations Sportives, de l&apos;analyse
            des besoins utilisateurs jusqu&apos;à la proposition de
            nouvelles interfaces.
          </p>
        </div>


        {/* =========================================
            IMAGE PRINCIPALE + CONTEXTE
        ========================================= */}

        <div className="project-overview">

          <div
            className="project-main-image"
            onClick={() =>
              window.open(
                "/projects/stage-pfs/maquette/maquette-1.jpg",
                "_blank"
              )
            }
          >
            <img
              src="/projects/stage-pfs/maquette/maquette-1.jpg"
              alt="Maquette fonctionnelle du porte-documents PFS"
            />

            <span className="image-hint">
              Cliquer pour agrandir ↗
            </span>
          </div>


          <div className="project-context-card">

            <p className="project-small-title">
              CONTEXTE
            </p>

            <div className="project-meta">

              <div>
                <span>Date</span>
                <strong>Avril — Juin 2026</strong>
              </div>

              <div>
                <span>Cadre</span>
                <strong>Stage · MOA SI</strong>
              </div>

            </div>

            <p>
              Dans le cadre de mon stage en maîtrise d&apos;ouvrage
              des systèmes d&apos;information à l&apos;Agence
              nationale du Sport, j&apos;ai participé à la réflexion
              autour de la refonte du Portail des Fédérations
              Sportives.
            </p>

            <p>
              Ma mission principale portait sur la conception de la
              cible fonctionnelle de son module porte-documents.
            </p>

          </div>
        </div>


        {/* =========================================
            TECHNOLOGIES / MÉTHODES
        ========================================= */}

        <div className="project-tags">
          <span>MOA</span>
          <span>Analyse fonctionnelle</span>
          <span>Recueil des besoins</span>
          <span>Maquettage</span>
          <span>Spécifications fonctionnelles</span>
        </div>


        {/* =========================================
            RÉALISATIONS + CONTRIBUTION
        ========================================= */}

        <div className="project-details-grid">

          <article className="project-detail-card">

            <p className="project-small-title">
              DÉMARCHE & RÉALISATIONS
            </p>

            <ul>
              <li>
                Analyse de l&apos;existant et des documents
                de cadrage.
              </li>

              <li>
                Analyse croisée d&apos;une enquête utilisateurs de
                109 répondants, de comptes rendus d&apos;ateliers
                et d&apos;entretiens.
              </li>

              <li>
                Synthèse et hiérarchisation des attentes
                utilisateurs.
              </li>

              <li>
                Identification des principales problématiques
                fonctionnelles du porte-documents.
              </li>

              <li>
                Modélisation des fonctionnalités cibles sous forme
                de carte mentale.
              </li>

              <li>
                Conception de maquettes fonctionnelles représentant
                le futur parcours utilisateur.
              </li>
            </ul>

          </article>


          <article className="project-detail-card project-contribution">

            <p className="project-small-title">
              MA CONTRIBUTION
            </p>

            <p>
              J&apos;ai produit plusieurs livrables successifs
              permettant de passer progressivement du besoin
              utilisateur à une proposition fonctionnelle concrète.
            </p>

            <ul>
              <li>
                Synthèse des attentes utilisateurs
              </li>

              <li>
                Analyse des problématiques fonctionnelles
              </li>

              <li>
                Carte mentale de la cible fonctionnelle
              </li>

              <li>
                Conception de cinq maquettes fonctionnelles
              </li>

              <li>
                Formalisation et restitution des propositions
              </li>
            </ul>

          </article>

        </div>


        {/* =========================================
            BILAN
        ========================================= */}

        <div className="project-bilan">

          <p className="project-small-title">
            BILAN
          </p>

          <p>
            Ce projet m&apos;a permis de mettre en pratique une
            démarche MOA structurée : comprendre l&apos;existant,
            analyser les besoins, identifier les problématiques
            métier puis les traduire en fonctionnalités et en
            interfaces.
          </p>

          <p>
            Les livrables réalisés constituent un socle pour la
            poursuite de la refonte du porte-documents.
          </p>

        </div>


        {/* =========================================
            LIVRABLES
        ========================================= */}

        <div className="project-deliverables">

          <div className="project-deliverables-header">

            <p className="section-label">
              LIVRABLES
            </p>

            <h3>
              Du besoin à la <span>solution.</span>
            </h3>

          </div>


          {/* SYNTHÈSE UTILISATEURS */}

          <GalerieProjet
            titre="Synthèse des besoins utilisateurs"
            description="Synthèse des principaux besoins et attentes identifiés lors de l'analyse."
            images={[
              "/projects/stage-pfs/presentation/slide-10.jpg",
            ]}
          />


          {/* PROBLÉMATIQUES */}

          <GalerieProjet
            titre="Problématiques identifiées"
            description="Synthèse des problématiques fonctionnelles identifiées autour du porte-documents."
            images={[
              "/projects/stage-pfs/presentation/slide-12.jpg",
            ]}
          />


          {/* ANCIEN SITE */}

          <GalerieProjet
            titre="Analyse de l'existant"
            description="Captures de l'interface existante étudiée avant la conception de la nouvelle proposition."
            images={[
                "/projects/stage-pfs/ancien-site/ancien-1.png",
                "/projects/stage-pfs/ancien-site/ancien-2.png",
                "/projects/stage-pfs/ancien-site/ancien-3.png",
                "/projects/stage-pfs/ancien-site/ancien-4.png",
            ]}
            />


          {/* CARTE MENTALE */}

          <GalerieProjet
            titre="Carte mentale fonctionnelle"
            description="Structuration de la cible fonctionnelle et des fonctionnalités envisagées pour le futur porte-documents."
            images={cartesMentales}
          />


          {/* MAQUETTES */}

          <GalerieProjet
            titre="Maquette fonctionnelle"
            description="Les cinq écrans conçus pour matérialiser la proposition fonctionnelle."
            images={maquettes}
          />

        </div>

      </section>

            {/* =========================================
          PROJET 02 — WELAB COSMETIC
      ========================================= */}

      <section className="project-block">
        <div className="project-number">
          <span>02</span>
          <p>PROJET UNIVERSITAIRE · ÉQUIPE</p>
        </div>

        <div className="project-title-area">
          <div>
            <p className="project-company">
              WeLab Cosmetic
            </p>

            <h2>
              Gestion des plannings,
              <span> projets & réservations</span>
            </h2>
          </div>

          <p className="project-lead">
            Développement en équipe d&apos;une application web permettant
            aux utilisateurs de gérer leurs projets, leurs réservations
            de laboratoire, leurs documents et leur espace personnel.
          </p>
        </div>

        <div className="project-overview">
          <div
            className="project-main-image"
            onClick={() => window.open(welabImages[0], "_blank")}
          >
            <img
              src={welabImages[0]}
              alt="Application WeLab Cosmetic"
            />

            <span className="image-hint">
              Cliquer pour agrandir ↗
            </span>
          </div>

          <div className="project-context-card">
            <p className="project-small-title">
              CONTEXTE
            </p>

            <div className="project-meta">
              <div>
                <span>Année</span>
                <strong>2025 — 2026</strong>
              </div>

              <div>
                <span>Cadre</span>
                <strong>Projet universitaire</strong>
              </div>
            </div>

            <p>
              WeLab Cosmetic est une application web de gestion des
              plannings et des réservations développée avec Angular
              côté frontend et Symfony côté backend.
            </p>

            <p>
              Le projet repose sur une API permettant de relier
              l&apos;interface utilisateur aux données de projets,
              réservations, laboratoires et documents.
            </p>
          </div>
        </div>

        <div className="project-tags">
          <span>Angular</span>
          <span>Symfony</span>
          <span>API REST</span>
          <span>Doctrine</span>
          <span>HttpClient</span>
          <span>SQL</span>
          <span>Git</span>
          <span>Travail en équipe</span>
        </div>

        <div className="project-details-grid">
          <article className="project-detail-card">
            <p className="project-small-title">
              FONCTIONNALITÉS DU PROJET
            </p>

            <ul>
              <li>
                Gestion des utilisateurs, projets et réservations.
              </li>
              <li>
                Réservation de laboratoires à partir d&apos;un planning.
              </li>
              <li>
                Gestion et consultation des documents associés aux projets.
              </li>
              <li>
                Espaces utilisateur et administrateur.
              </li>
              <li>
                Communication entre Angular et Symfony via API.
              </li>
              <li>
                Gestion des matériels associés aux réservations.
              </li>
            </ul>
          </article>

          <article className="project-detail-card project-contribution">
            <p className="project-small-title">
              MA CONTRIBUTION
            </p>

            <p>
              J&apos;ai principalement travaillé sur le parcours utilisateur
              et sur plusieurs fonctionnalités reliant le frontend Angular
              au backend Symfony.
            </p>

            <ul>
              <li>
                Développement de la page Planning et de la logique
                de réservation.
              </li>
              <li>
                Liaison de l&apos;inscription Angular avec le backend Symfony.
              </li>
              <li>
                Création des espaces Mes Réservations et Mes Projets.
              </li>
              <li>
                Gestion de l&apos;affichage, du déplacement et de
                l&apos;annulation des réservations.
              </li>
              <li>
                Gestion des documents : affichage, upload et téléchargement.
              </li>
              <li>
                Gestion de l&apos;ajout de matériel aux réservations validées.
              </li>
              <li>
                Participation à la structure de la base via les migrations.
              </li>
            </ul>
          </article>
        </div>

        <div className="project-bilan">
          <p className="project-small-title">
            BILAN
          </p>

          <p>
            Ce projet m&apos;a permis de renforcer ma maîtrise du
            développement full-stack, notamment la communication entre
            une interface Angular et une API Symfony, tout en travaillant
            sur des fonctionnalités métier concrètes liées aux projets,
            aux documents et aux réservations.
          </p>
        </div>

        <div className="project-deliverables">
          <div className="project-deliverables-header">
            <p className="section-label">
              APERÇU DU PROJET
            </p>

            <h3>
              De la gestion à
              <span> l&apos;utilisation.</span>
            </h3>
          </div>

          <GalerieProjet
            titre="WeLab Cosmetic"
            description="Aperçu des principales interfaces et fonctionnalités développées dans l'application."
            images={welabImages}
          />
        </div>
      </section>


      {/* =========================================
          PROJET 03 — GAME
      ========================================= */}

      <section className="project-block">
        <div className="project-number">
          <span>03</span>
          <p>PROJET UNIVERSITAIRE · ÉQUIPE</p>
        </div>

        <div className="project-title-area">
          <div>
            <p className="project-company">
              GAME
            </p>

            <h2>
              Gestion de jeux
              <span> & parties</span>
            </h2>
          </div>

          <p className="project-lead">
            Conception d&apos;une application full-stack dédiée à la
            gestion d&apos;un catalogue de jeux de société et des parties
            associées, avec Angular et une API Symfony.
          </p>
        </div>

        <div className="project-overview">
          <div
            className="project-main-image"
            onClick={() => window.open(gameImages[0], "_blank")}
          >
            <img
              src={gameImages[0]}
              alt="Application GAME"
            />

            <span className="image-hint">
              Cliquer pour agrandir ↗
            </span>
          </div>

          <div className="project-context-card">
            <p className="project-small-title">
              CONTEXTE
            </p>

            <div className="project-meta">
              <div>
                <span>Année</span>
                <strong>2026</strong>
              </div>

              <div>
                <span>Cadre</span>
                <strong>Projet universitaire</strong>
              </div>
            </div>

            <p>
              GAME permet de gérer des jeux de société et les parties
              organisées autour de ces jeux.
            </p>

            <p>
              L&apos;architecture sépare un frontend Angular d&apos;un
              backend Symfony exposant les données grâce à API Platform.
            </p>
          </div>
        </div>

        <div className="project-tags">
          <span>Angular</span>
          <span>Symfony</span>
          <span>API Platform</span>
          <span>API REST</span>
          <span>Doctrine</span>
          <span>Bootstrap</span>
          <span>Git</span>
        </div>

        <div className="project-details-grid">
          <article className="project-detail-card">
            <p className="project-small-title">
              DÉMARCHE & RÉALISATIONS
            </p>

            <ul>
              <li>
                Modélisation des entités Jeu et Partie.
              </li>
              <li>
                Mise en place d&apos;une API Symfony avec API Platform.
              </li>
              <li>
                Développement des opérations CRUD sur les jeux.
              </li>
              <li>
                Développement des opérations CRUD sur les parties.
              </li>
              <li>
                Création de services Angular pour consommer l&apos;API.
              </li>
              <li>
                Mise en place de la navigation entre les interfaces.
              </li>
            </ul>
          </article>

          <article className="project-detail-card project-contribution">
            <p className="project-small-title">
              COMPÉTENCES MOBILISÉES
            </p>

            <p>
              Ce projet m&apos;a permis de travailler sur une architecture
              frontend / backend complète et sur la circulation des données
              entre Angular et Symfony.
            </p>

            <ul>
              <li>
                Consommation et manipulation d&apos;une API REST.
              </li>
              <li>
                Gestion des formulaires et des données dynamiques.
              </li>
              <li>
                Authentification et gestion de session.
              </li>
              <li>
                Modélisation et persistance des données avec Doctrine.
              </li>
              <li>
                Organisation du code en composants et services Angular.
              </li>
            </ul>
          </article>
        </div>

        <div className="project-bilan">
          <p className="project-small-title">
            BILAN
          </p>

          <p>
            GAME m&apos;a permis d&apos;approfondir la construction
            d&apos;une application découplée, avec un frontend Angular
            consommant les ressources fournies par une API Symfony,
            ainsi que la gestion d&apos;un cycle CRUD complet.
          </p>
        </div>

        <div className="project-deliverables">
          <div className="project-deliverables-header">
            <p className="section-label">
              APERÇU DU PROJET
            </p>

            <h3>
              Jeux, parties &
              <span> interactions.</span>
            </h3>
          </div>

          <GalerieProjet
            titre="Application GAME"
            description="Interfaces de gestion des jeux, des parties et de l'authentification."
            images={gameImages}
          />
        </div>
      </section>


      {/* =========================================
          PROJET 04 — MEDICO SYMFONY
      ========================================= */}

      <section className="project-block">
        <div className="project-number">
          <span>04</span>
          <p>PROJET UNIVERSITAIRE · ÉQUIPE</p>
        </div>

        <div className="project-title-area">
          <div>
            <p className="project-company">
              Medico · Symfony
            </p>

            <h2>
              Gestion médicale
              <span> & contrôle d&apos;accès</span>
            </h2>
          </div>

          <p className="project-lead">
            Développement d&apos;une application Symfony permettant de
            gérer des consultations médicales, des traitements et des
            utilisateurs avec différents niveaux d&apos;autorisation.
          </p>
        </div>

        <div className="project-overview">
          <div
            className="project-main-image"
            onClick={() => window.open(medicoSymfonyImages[0], "_blank")}
          >
            <img
              src={medicoSymfonyImages[0]}
              alt="Application Medico Symfony"
            />

            <span className="image-hint">
              Cliquer pour agrandir ↗
            </span>
          </div>

          <div className="project-context-card">
            <p className="project-small-title">
              CONTEXTE
            </p>

            <div className="project-meta">
              <div>
                <span>Année</span>
                <strong>2026</strong>
              </div>

              <div>
                <span>Cadre</span>
                <strong>Projet universitaire</strong>
              </div>
            </div>

            <p>
              Cette application met en pratique Symfony à travers un
              système de gestion de consultations, de traitements et
              de rendez-vous.
            </p>

            <p>
              Une attention particulière a été portée à
              l&apos;authentification et aux droits des administrateurs,
              médecins et patients.
            </p>
          </div>
        </div>

        <div className="project-tags">
          <span>Symfony</span>
          <span>PHP</span>
          <span>Twig</span>
          <span>Doctrine</span>
          <span>Bootstrap</span>
          <span>Symfony Security</span>
          <span>SQLite</span>
        </div>

        <div className="project-details-grid">
          <article className="project-detail-card">
            <p className="project-small-title">
              DÉMARCHE & RÉALISATIONS
            </p>

            <ul>
              <li>
                Modélisation des consultations et des traitements.
              </li>
              <li>
                Création des formulaires et interfaces CRUD.
              </li>
              <li>
                Mise en place de relations entre patients,
                médecins, consultations et traitements.
              </li>
              <li>
                Authentification avec Symfony Security.
              </li>
              <li>
                Gestion des rôles administrateur, médecin et patient.
              </li>
              <li>
                Protection des données selon le rôle de l&apos;utilisateur.
              </li>
            </ul>
          </article>

          <article className="project-detail-card project-contribution">
            <p className="project-small-title">
              COMPÉTENCES MOBILISÉES
            </p>

            <p>
              Le projet m&apos;a permis de travailler sur la logique
              métier d&apos;une application Symfony et sur la gestion
              fine des accès aux données.
            </p>

            <ul>
              <li>
                Développement MVC avec Symfony et Twig.
              </li>
              <li>
                Modélisation de relations entre entités.
              </li>
              <li>
                Validation et traitement de formulaires.
              </li>
              <li>
                Authentification et autorisations.
              </li>
              <li>
                Gestion de données avec Doctrine.
              </li>
              <li>
                Conception d&apos;interfaces cohérentes avec Bootstrap.
              </li>
            </ul>
          </article>
        </div>

        <div className="project-bilan">
          <p className="project-small-title">
            BILAN
          </p>

          <p>
            Ce projet m&apos;a permis de consolider mes compétences
            Symfony en allant au-delà du CRUD : relations entre
            entités, sécurité, gestion des rôles et contrôle des
            opérations autorisées selon l&apos;utilisateur connecté.
          </p>
        </div>

        <div className="project-deliverables">
          <div className="project-deliverables-header">
            <p className="section-label">
              APERÇU DU PROJET
            </p>

            <h3>
              Données médicales &
              <span> sécurité.</span>
            </h3>
          </div>

          <GalerieProjet
            titre="Medico Symfony"
            description="Aperçu des interfaces de consultations, traitements, utilisateurs et fonctionnalités associées."
            images={medicoSymfonyImages}
          />
        </div>
      </section>


      {/* =========================================
          PROJET 05 — OBSERVO
      ========================================= */}

      <section className="project-block">
        <div className="project-number">
          <span>05</span>
          <p>PROJET UNIVERSITAIRE · ÉQUIPE</p>
        </div>

        <div className="project-title-area">
          <div>
            <p className="project-company">
              Observo
            </p>

            <h2>
              Observations animales
              <span> & collaboration</span>
            </h2>
          </div>

          <p className="project-lead">
            Développement avec Django d&apos;une application de gestion
            d&apos;espèces animales et d&apos;observations, intégrant
            authentification, permissions et interactions entre utilisateurs.
          </p>
        </div>

        <div className="project-overview">
          <div
            className="project-main-image"
            onClick={() => window.open(observoImages[0], "_blank")}
          >
            <img
              src={observoImages[0]}
              alt="Application Observo"
            />

            <span className="image-hint">
              Cliquer pour agrandir ↗
            </span>
          </div>

          <div className="project-context-card">
            <p className="project-small-title">
              CONTEXTE
            </p>

            <div className="project-meta">
              <div>
                <span>Année</span>
                <strong>2025 — 2026</strong>
              </div>

              <div>
                <span>Cadre</span>
                <strong>Projet universitaire</strong>
              </div>
            </div>

            <p>
              Observo permet de référencer des espèces animales et
              d&apos;enregistrer des observations comportant une date,
              une heure, une localisation et une description.
            </p>

            <p>
              L&apos;application distingue également les droits des
              visiteurs, utilisateurs authentifiés et administrateurs.
            </p>
          </div>
        </div>

        <div className="project-tags">
          <span>Django</span>
          <span>Python</span>
          <span>SQLite</span>
          <span>Bootstrap</span>
          <span>Authentification</span>
          <span>Permissions</span>
          <span>Tests</span>
        </div>

        <div className="project-details-grid">
          <article className="project-detail-card">
            <p className="project-small-title">
              DÉMARCHE & RÉALISATIONS
            </p>

            <ul>
              <li>
                Modélisation des animaux et des observations.
              </li>
              <li>
                Création des vues, formulaires et templates Django.
              </li>
              <li>
                Ajout, modification, consultation et suppression
                des données.
              </li>
              <li>
                Mise en place de l&apos;authentification utilisateur.
              </li>
              <li>
                Gestion des permissions selon le rôle.
              </li>
              <li>
                Mise en place de tests sur les accès et autorisations.
              </li>
            </ul>
          </article>

          <article className="project-detail-card project-contribution">
            <p className="project-small-title">
              EXTENSION COLLABORATIVE
            </p>

            <p>
              Le projet a été enrichi avec un système de commentaires
              liés aux observations afin d&apos;introduire une dimension
              collaborative.
            </p>

            <ul>
              <li>
                Création du modèle Comment.
              </li>
              <li>
                Association d&apos;un commentaire à une observation
                et à son auteur.
              </li>
              <li>
                Ajout et affichage des commentaires.
              </li>
              <li>
                Modification et suppression des commentaires.
              </li>
              <li>
                Gestion des permissions sur les commentaires.
              </li>
            </ul>
          </article>
        </div>

        <div className="project-bilan">
          <p className="project-small-title">
            BILAN
          </p>

          <p>
            Observo m&apos;a permis de consolider les fondamentaux de
            Django : modèles, vues, templates, formulaires et relations,
            tout en abordant l&apos;authentification, les permissions,
            les tests et l&apos;évolution fonctionnelle d&apos;une application.
          </p>
        </div>

        <div className="project-deliverables">
          <div className="project-deliverables-header">
            <p className="section-label">
              APERÇU DU PROJET
            </p>

            <h3>
              Observer, gérer &
              <span> partager.</span>
            </h3>
          </div>

          <GalerieProjet
            titre="Application Observo"
            description="Interfaces consacrées aux animaux, aux observations, aux utilisateurs et aux interactions."
            images={observoImages}
          />
        </div>
      </section>


      {/* =========================================
          PROJET 06 — MEDICO DJANGO
      ========================================= */}

      <section className="project-block">
        <div className="project-number">
          <span>06</span>
          <p>PROJET UNIVERSITAIRE · ÉQUIPE</p>
        </div>

        <div className="project-title-area">
          <div>
            <p className="project-company">
              Medico · Django
            </p>

            <h2>
              Consultations,
              <span> traitements & analyses</span>
            </h2>
          </div>

          <p className="project-lead">
            Développement d&apos;une application Django consacrée à la
            gestion de consultations médicales et de leurs informations
            associées.
          </p>
        </div>

        <div className="project-overview">
          <div
            className="project-main-image"
            onClick={() => window.open(medicoDjangoImages[0], "_blank")}
          >
            <img
              src={medicoDjangoImages[0]}
              alt="Application Medico Django"
            />

            <span className="image-hint">
              Cliquer pour agrandir ↗
            </span>
          </div>

          <div className="project-context-card">
            <p className="project-small-title">
              CONTEXTE
            </p>

            <div className="project-meta">
              <div>
                <span>Année</span>
                <strong>2025</strong>
              </div>

              <div>
                <span>Cadre</span>
                <strong>Projet universitaire</strong>
              </div>
            </div>

            <p>
              Ce projet constitue une mise en pratique du framework
              Django à travers une application de gestion de données
              médicales.
            </p>

            <p>
              L&apos;application permet de manipuler des consultations
              puis de leur associer des traitements et des analyses.
            </p>
          </div>
        </div>

        <div className="project-tags">
          <span>Django</span>
          <span>Python</span>
          <span>SQLite</span>
          <span>Bootstrap</span>
          <span>ModelForm</span>
          <span>Templates</span>
          <span>Git</span>
        </div>

        <div className="project-details-grid">
          <article className="project-detail-card">
            <p className="project-small-title">
              DÉMARCHE & RÉALISATIONS
            </p>

            <ul>
              <li>
                Création du modèle Consultation et de la base associée.
              </li>
              <li>
                Affichage de la liste et du détail des consultations.
              </li>
              <li>
                Création de formulaires avec Django ModelForm.
              </li>
              <li>
                Ajout, modification et suppression de consultations.
              </li>
              <li>
                Intégration de Bootstrap dans les templates.
              </li>
              <li>
                Gestion des routes, vues et templates.
              </li>
            </ul>
          </article>

          <article className="project-detail-card project-contribution">
            <p className="project-small-title">
              ÉVOLUTION DU PROJET
            </p>

            <p>
              L&apos;application a ensuite été enrichie afin de
              représenter davantage d&apos;informations liées au
              suivi d&apos;une consultation.
            </p>

            <ul>
              <li>
                Ajout du modèle Traitement.
              </li>
              <li>
                Gestion CRUD des traitements associés.
              </li>
              <li>
                Ajout d&apos;un modèle Analyse médicale.
              </li>
              <li>
                Gestion des analyses liées aux consultations.
              </li>
              <li>
                Mise en place des relations entre les différentes données.
              </li>
            </ul>
          </article>
        </div>

        <div className="project-bilan">
          <p className="project-small-title">
            BILAN
          </p>

          <p>
            Ce premier projet Django m&apos;a permis d&apos;acquérir une
            base solide sur le fonctionnement du framework : modèles,
            migrations, vues, formulaires, templates, routage et
            manipulation de données relationnelles.
          </p>
        </div>

        <div className="project-deliverables">
          <div className="project-deliverables-header">
            <p className="section-label">
              APERÇU DU PROJET
            </p>

            <h3>
              Des données à
              <span> l&apos;interface.</span>
            </h3>
          </div>

          <GalerieProjet
            titre="Medico Django"
            description="Aperçu des interfaces de gestion des consultations, traitements et analyses."
            images={medicoDjangoImages}
          />
        </div>
      </section>



    </main>
  );
}

export default Projets;