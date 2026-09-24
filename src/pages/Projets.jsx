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

    </main>
  );
}

export default Projets;