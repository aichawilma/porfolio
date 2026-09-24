import {
  FaJava,
  FaPython,
  FaJs,
  FaPhp,
  FaHtml5,
  FaCss3Alt,
  FaAngular,
  FaSymfony,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaCode,
  FaTools,
} from "react-icons/fa";

function Competences() {
  return (
    <section id="competences" className="skills-section">

      {/* HEADER */}
      <div className="skills-header">
        <p className="section-label">COMPÉTENCES</p>

        <h2>
          Ce que je sais
          <br />
          <span>faire.</span>
        </h2>

        <p>
          Des compétences techniques et fonctionnelles développées
          au fil de ma formation, de mes projets et de mes expériences.
        </p>
      </div>


      {/* 3 BLOCS PRINCIPAUX */}
      <div className="skills-grid">

        {/* 01 — SOFT SKILLS */}
        <article className="skill-card soft-card">

          <span className="skill-number">01</span>

          <h3>Compétences générales</h3>

          <div className="languages">
            <p>
              <strong>Français</strong> — langue maternelle
            </p>

            <p>
              <strong>Wolof</strong> — langue maternelle
            </p>

            <p>
              <strong>Anglais</strong> — professionnel
            </p>
          </div>

          <ul className="soft-list">
            <li>Travail en équipe</li>
            <li>Organisation & gestion des priorités</li>
            <li>Autonomie</li>
            <li>Adaptabilité</li>
            <li>Sens des responsabilités</li>
            <li>Analyse & résolution de problèmes</li>
            <li>Communication & relationnel</li>
            <li>Rigueur</li>
          </ul>

        </article>


        {/* 02 — DEVELOPPEMENT */}
        <article className="skill-card development-card">

          <span className="skill-number">02</span>

          <h3>Développement</h3>

          <div className="tech-icons">

            <div className="tech">
              <FaJava />
              <span>Java</span>
            </div>

            <div className="tech">
              <FaPython />
              <span>Python</span>
            </div>

            <div className="tech">
              <FaJs />
              <span>JavaScript</span>
            </div>

            <div className="tech">
              <FaPhp />
              <span>PHP</span>
            </div>

            <div className="tech">
              <FaHtml5 />
              <span>HTML</span>
            </div>

            <div className="tech">
              <FaCss3Alt />
              <span>CSS</span>
            </div>

            <div className="tech">
              <span className="text-icon">SB</span>
              <span>Spring Boot</span>
            </div>

            <div className="tech">
              <FaAngular />
              <span>Angular</span>
            </div>

            <div className="tech">
              <FaSymfony />
              <span>Symfony</span>
            </div>

            <div className="tech">
              <FaReact />
              <span>React</span>
            </div>

            <div className="tech">
              <span className="text-icon">FX</span>
              <span>JavaFX</span>
            </div>

            <div className="tech">
              <span className="text-icon">JSP</span>
              <span>JSP</span>
            </div>

          </div>

          <div className="skill-tags">
            <span>SQL</span>
            <span>PL/SQL</span>
          </div>

        </article>


        {/* 03 — DATA & OUTILS */}
        <article className="skill-card tools-card">

          <span className="skill-number">03</span>

          <h3>Data & outils</h3>


          {/* BASES DE DONNEES */}
          <div className="tools-group">

            <h4>Bases de données</h4>

            <div className="tool-tags">
              <span>
                <FaDatabase />
                MySQL
              </span>

              <span>
                <FaDatabase />
                Oracle
              </span>

              <span>
                <FaDatabase />
                SQL*Plus
              </span>
            </div>

          </div>


          {/* VERSIONING */}
          <div className="tools-group">

            <h4>Versioning & collaboration</h4>

            <div className="tool-tags">

              <span>
                <FaGitAlt />
                Git
              </span>

              <span>
                <FaGithub />
                GitHub
              </span>

              <span>
                <FaCode />
                Bitbucket
              </span>

              <span>
                <FaTools />
                Jira
              </span>

            </div>

          </div>


          {/* ENVIRONNEMENTS */}
          <div className="tools-group">

            <h4>Environnements</h4>

            <div className="tool-tags">

              <span>
                <FaCode />
                IntelliJ IDEA
              </span>

              <span>
                <FaCode />
                VS Code
              </span>

              <span>
                <FaCode />
                PyCharm
              </span>

              <span>
                <FaCode />
                RStudio
              </span>

              <span>
                <FaTools />
                Maven
              </span>

            </div>

          </div>

        </article>

      </div>


      {/* 04 — METHODES & SI */}
      <div className="methods-block">

        <div className="methods-title">

          <span>04</span>

          <div>
            <p className="methods-label">
              MÉTHODES & SI
            </p>

            <h3>
              Du besoin métier à la solution.
            </h3>
          </div>

        </div>


        <div className="methods-tags">

          <span>Analyse & recueil des besoins</span>

          <span>Spécifications fonctionnelles</span>

          <span>User Stories</span>

          <span>Agile / Scrum</span>

          <span>Jira</span>

          <span>Recette & tests fonctionnels</span>

          <span>Gestion de projet</span>

          <span>Systèmes d'information</span>

          <span>Analyse de données</span>

          <span>Web Services</span>

          <span>DevOps</span>

          <span>Cloud</span>

          <span>Data Mining</span>

          <span>Cryptographie & sécurité</span>

          <span>Test & qualité logiciel</span>

          <span>Adressage / Routage</span>

          <span>Protocoles réseaux</span>

        </div>

      </div>

    </section>
  );
}

export default Competences;