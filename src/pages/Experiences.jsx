function Experiences() {
  return (
    <main className="experiences-page">

      <section className="experiences-section">

        <div className="experiences-header">

          <p className="section-label">
            EXPÉRIENCES
          </p>

          <h2>
            Mon parcours
            <br />
            professionnel
          </h2>

          <p>
            Des expériences qui m'ont permis de développer aussi bien
            mes compétences professionnelles que mon sens du relationnel.
          </p>

        </div>


        {/* STAGE MOA */}

        <article className="experience-card main-experience">

          <div className="experience-top">

            <div>
              <span className="experience-type">
                STAGE · 3 MOIS
              </span>

              <h3>
                Stagiaire en Maîtrise d'Ouvrage
                des Systèmes d'Information
              </h3>

              <p className="experience-company">
                Agence nationale du Sport
              </p>
            </div>

            <span className="experience-date">
              AVR. — JUIN 2026
            </span>

          </div>

          <p className="experience-description">
            Participation au pilotage de projets SI liés à la gestion
            de subventions publiques.
          </p>

          <ul className="experience-missions">
            <li>Recueil et formalisation des besoins utilisateurs</li>
            <li>Rédaction de spécifications fonctionnelles et user stories</li>
            <li>Collaboration avec les développeurs en environnement Agile / Scrum</li>
            <li>Suivi des projets et coordination avec les parties prenantes</li>
            <li>Recette et tests fonctionnels</li>
            <li>Rédaction de documentation fonctionnelle et supports utilisateurs</li>
            <li>Analyse de données et production de tableaux de bord</li>
          </ul>

        </article>


        {/* IKEA */}

        <article className="experience-card secondary-experience">

          <div className="experience-top">

            <div>
              <span className="experience-type">
                JOB ÉTUDIANT
              </span>

              <h3>Préparatrice de commandes</h3>

              <p className="experience-company">
                IKEA
              </p>
            </div>

            <span className="experience-date">
              DEPUIS juillet
            </span>

          </div>

          <p className="experience-description">
            accompagnement des clients dans un environnement dynamique.
          </p>

        </article>

      </section>

    </main>
  );
}

export default Experiences;