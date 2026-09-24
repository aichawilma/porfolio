import { Link } from "react-router-dom";

import {
  FaJava,
  FaPython,
  FaReact,
  FaJs,
} from "react-icons/fa";

function Accueil() {
  return (
    <main className="home-page">

      {/* =========================
          HERO
      ========================= */}
      <section className="home-hero">

        {/* GAUCHE */}
        <div className="home-intro">
          <p className="eyebrow">
            BIENVENUE SUR MON PORTFOLIO ♡
          </p>

          <h1>
            Bonjour, moi c'est
            <span> Aicha.</span>
          </h1>

          <h2>Étudiante en M1 MIAGE</h2>

          <p className="home-description">
            Entre informatique, systèmes d'information et gestion de projet,
            je construis mon parcours au croisement de la technique et des
            besoins métiers.
          </p>

          <div className="hero-buttons">
            <Link to="/projets" className="primary-button">
              Découvrir mes projets →
            </Link>

            <a
              href="cv/CV-Aicha-Sambou.pdf"
              className="secondary-button"
              target="_blank"
              rel="noreferrer"

            >
              voir mon CV
            </a>
          </div>
        </div>


        {/* DROITE — À PROPOS */}
        <div className="about-wrapper">

          <div className="about-shape about-shape-one"></div>
          <div className="about-shape about-shape-two"></div>

          <article className="home-about-card">
            <p className="about-label">À PROPOS DE MOI</p>

            <h2>
              Un profil à la croisée de la
              <span> technique et du métier.</span>
            </h2>

            <p>
              Passionnée par les systèmes d'information, le développement informatique et la gestion
              de projet. J'aime comprendre un besoin et contribuer à la
              conception d'une solution adaptée.
            </p>
          </article>

        </div>
      </section>


      {/* =========================
          APERÇU DU PORTFOLIO
      ========================= */}
      <section className="home-overview">

        <div className="overview-heading">
          <p className="section-label">APERÇU</p>

          <h2>
            Découvrir mon
            <span> univers.</span>
          </h2>

            
        </div>


        <div className="overview-grid">

          {/* TECHNOLOGIES */}
          <article className="home-tech-card">

            <div className="card-heading">
              <div>
                <span className="card-number">01</span>
                <h3>Technologies</h3>
              </div>

              <Link to="/competences" className="card-arrow">
                →
              </Link>
            </div>

            <p>
              Quelques technologies que j'utilise dans mes projets.
            </p>

            <div className="home-tech-icons">

              <div className="home-tech">
                <FaJava />
                <span>Java</span>
              </div>

              <div className="home-tech">
                <FaPython />
                <span>Python</span>
              </div>

              <div className="home-tech">
                <FaJs />
                <span>JavaScript</span>
              </div>

              <div className="home-tech">
                <FaReact />
                <span>React</span>
              </div>

            </div>

            <Link to="/competences" className="discover-link">
              Toutes mes compétences →
            </Link>

          </article>


          {/* NAVIGATION */}
          <article className="home-navigation-card">

            <span className="card-number">02</span>
            <h3>Navigation</h3>

            <p>
              Explorer les différentes facettes de mon parcours.
            </p>

            <div className="navigation-grid">

              <Link to="/formation" className="navigation-box">
                <span>01</span>
                <strong>Formation</strong>
                <small>Mon parcours académique</small>
                <b>→</b>
              </Link>

              <Link to="/experiences" className="navigation-box">
                <span>02</span>
                <strong>Expériences</strong>
                <small>Mon parcours professionnel</small>
                <b>→</b>
              </Link>

              <Link to="/competences" className="navigation-box">
                <span>03</span>
                <strong>Compétences</strong>
                <small>Technique & fonctionnel</small>
                <b>→</b>
              </Link>

              <Link to="/vie-associative" className="navigation-box">
                <span>04</span>
                <strong>Vie associative</strong>
                <small>Mes autres engagements</small>
                <b>→</b>
              </Link>

            </div>

          </article>

        </div>
      </section>


      {/* =========================
          PROJETS
      ========================= */}
      <section className="home-projects">

        <div>
          <p className="section-label">MES PROJETS</p>

          <h2>
            Quelques réalisations
            <span> à découvrir.</span>
          </h2>

          <p>
            Applications, développement, systèmes d'information et projets
            réalisés au cours de mon parcours.
          </p>
        </div>

        <Link to="/projets" className="primary-button">
          Découvrir mes projets →
        </Link>

      </section>


      {/* =========================
          CONTACT
      ========================= */}
      <section className="home-contact">

        <p className="section-label">CONTACT</p>

        <h2>
          Une opportunité,
          <br />
          un projet ou simplement
          <span> envie d'échanger ?</span>
        </h2>

        <Link to="/contact" className="primary-button">
          Me contacter →
        </Link>

      </section>

    </main>
  );
}

export default Accueil;