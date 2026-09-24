function Formation() {
  return (
    <main className="formation-page">

      <section className="formation-section">

        <div className="formation-header">
          <p className="section-label">FORMATION</p>

          <h2>
            Mon parcours
            <br />
            académique
          </h2>

          <p className="formation-intro">
            Un parcours scientifique et informatique qui m'a progressivement
            menée vers les systèmes d'information et la MIAGE.
          </p>
        </div>


        <div className="formation-timeline">

          {/* MASTER MIAGE */}

          <article className="formation-item">

            <div className="formation-date">
              2026 — 2028
              <span className="timeline-dot"></span>
            </div>

            <div className="formation-card">

              <span className="formation-level">
                MASTER · BAC +5
              </span>

              <h3>Master MIAGE</h3>

              <h4>
                Méthodes Informatiques Appliquées à la Gestion des Entreprises
              </h4>

              <p className="formation-school">
                Université d'Orléans
              </p>

              <p>
                Formation en systèmes d'information, développement,
                analyse des besoins et gestion de projet.
              </p>

            </div>
          </article>


          {/* LICENCE */}

          <article className="formation-item">

            <div className="formation-date">
              2024 — 2026
              <span className="timeline-dot"></span>
            </div>

            <div className="formation-card">

              <span className="formation-level">
                LICENCE · BAC +3
              </span>

              <h3>Licence Informatique</h3>

              <h4>
                Parcours informatique
              </h4>

              <p className="formation-school">
                Université d'Orléans
              </p>

              <p>
                Consolidation de mes compétences en informatique,
                programmation, bases de données et systèmes d'information.
              </p>

            </div>
          </article>


          {/* CPGE */}

          <article className="formation-item">

            <div className="formation-date">
              2023
              <span className="timeline-dot"></span>
            </div>

            <div className="formation-card">

              <span className="formation-level">
                CPGE
              </span>

              <h3>PCSI</h3>

              <h4>
                Physique, Chimie et Sciences de l'Ingénieur
              </h4>

              <p className="formation-school">
                Lycée Les Potiers
              </p>

              <p>
                Formation scientifique intensive développant rigueur,
                méthode et capacités d'analyse.
              </p>

            </div>
          </article>


          {/* BAC */}

          <article className="formation-item">

            <div className="formation-date">
              2022 — 2023
              <span className="timeline-dot"></span>
            </div>

            <div className="formation-card">

              <span className="formation-level">
                BACCALAURÉAT
              </span>

              <h3>Baccalauréat général</h3>

              <p className="formation-school">
                Mention Bien
              </p>

            </div>
          </article>

        </div>

      </section>

    </main>
  );
}

export default Formation;