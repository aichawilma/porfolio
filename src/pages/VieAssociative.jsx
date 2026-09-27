import { useState } from "react";
import { FaXmark } from "react-icons/fa6";

const associationPhotos = [
  "/engagement/association/1.jpeg",
  "/engagement/association/2.jpeg",
  "/engagement/association/3.jpeg",
  "/engagement/association/4.jpeg",
  "/engagement/association/5.jpeg",
  "/engagement/association/6.jpeg",
  "/engagement/association/7.jpeg",
  "/engagement/association/8.jpeg",
  "/engagement/association/9.jpeg",
  "/engagement/association/10.jpeg",
  "/engagement/association/11.jpeg",
  "/engagement/association/12.jpeg",
  "/engagement/association/13.jpeg",
  "/engagement/association/14.jpeg",
  "/engagement/association/15.jpeg",
];

const scoutPhotos = [
  "/engagement/scout/S1.jpeg",
  "/engagement/scout/S2.jpeg",
  "/engagement/scout/S3.jpeg",
  "/engagement/scout/S4.jpeg",
  "/engagement/scout/S5.jpeg",
  "/engagement/scout/S6.jpeg",
  "/engagement/scout/S7.jpeg",
];

function PhotoGallery({ images, title, onPhotoClick }) {
  return (
    <div className="engagement-gallery">
      {images.map((image, index) => (
        <button
          type="button"
          className="engagement-photo"
          key={image}
          onClick={() => onPhotoClick(image)}
          aria-label={`Agrandir la photo ${index + 1} — ${title}`}
        >
          <img
            src={image}
            alt={`${title} — activité ${index + 1}`}
            loading="lazy"
          />
        </button>
      ))}
    </div>
  );
}

function VieAssociative() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <main className="engagement-page">
      {/* HERO */}
      <section className="engagement-hero">
        <p className="section-label">ENGAGEMENT & VIE ASSOCIATIVE</p>

        <h1>
          S&apos;engager, agir,
          <span> transmettre.</span>
        </h1>

        <p className="engagement-intro">
          Au-delà de mon parcours académique et professionnel, le bénévolat
          occupe une place importante dans mon parcours. Du scoutisme à la vie
          associative étudiante, ces expériences ont développé chez moi le sens
          du collectif, l&apos;initiative et la prise de responsabilités.
        </p>

        <div className="engagement-values">
          <span>Servir</span>
          <span>Communiquer</span>
          <span>Organiser</span>
          <span>Agir</span>
          <span>Transmettre</span>
        </div>
      </section>

      {/* ASSOCIATION */}
      <section className="engagement-section">
        <div className="engagement-heading">
          <div className="engagement-index">01</div>

          <div>
            <p className="engagement-type">ENGAGEMENT ÉTUDIANT</p>
            <h2>
              Association des Étudiants et Stagiaires
              <span> Sénégalais d&apos;Orléans</span>
            </h2>
          </div>
        </div>

        <div className="engagement-roles">
          <article className="engagement-role-card">
            <p className="engagement-date">2024 — AVRIL 2026</p>
            <h3>Présidente de la communication</h3>

            <p>
              En charge de la communication et de la valorisation des activités
              de l&apos;association auprès de la communauté étudiante.
            </p>

            <ul>
              <li>Gestion des réseaux sociaux et de la communication</li>
              <li>Création d&apos;affiches et de supports</li>
              <li>Communication autour des événements et actions</li>
              <li>Collaboration avec les membres du bureau</li>
            </ul>
          </article>

          <article className="engagement-role-card engagement-role-current">
            <div className="engagement-current-top">
              <p className="engagement-date">DEPUIS AVRIL 2026</p>
              <span>ACTUELLEMENT</span>
            </div>

            <h3>Secrétaire générale</h3>

            <p>
              Une évolution vers davantage de responsabilités dans
              l&apos;organisation et le fonctionnement de l&apos;association.
            </p>

            <ul>
              <li>Suivi administratif et documentaire</li>
              <li>Rédaction des procès-verbaux</li>
              <li>Organisation et circulation de l&apos;information</li>
              <li>Coordination et suivi des activités</li>
            </ul>
          </article>
        </div>

        <div className="engagement-skills">
          <p>COMPÉTENCES DÉVELOPPÉES</p>

          <div>
            <span>Communication</span>
            <span>Coordination</span>
            <span>Organisation</span>
            <span>Créativité</span>
            <span>Prise d&apos;initiative</span>
            <span>Travail d&apos;équipe</span>
            <span>Responsabilité</span>
          </div>
        </div>

        <PhotoGallery
          images={associationPhotos}
          title="Vie associative"
          onPhotoClick={setSelectedPhoto}
        />
      </section>

      {/* SCOUTISME */}
      <section className="engagement-section scout-section">
        <div className="engagement-heading">
          <div className="engagement-index">02</div>

          <div>
            <p className="engagement-type">SCOUTISME & VOLONTARIAT</p>

            <h2>
              Éclaireuses et Éclaireurs
              <span> du Sénégal</span>
            </h2>
          </div>
        </div>

        <div className="scout-content">
          <div>
            <p className="engagement-date">DEPUIS MON ENFANCE</p>

            <h3>Grandir par l&apos;engagement.</h3>
          </div>

          <div className="scout-description">
            <p>
              Le scoutisme fait partie de mon parcours depuis l&apos;enfance.
              J&apos;ai participé à différentes actions sociales,
              environnementales et communautaires.
            </p>

            <div className="scout-actions">
              <span>Reboisement</span>
              <span>Nettoyage d&apos;écoles</span>
              <span>Actions sociales</span>
              <span>Actions communautaires</span>
            </div>
          </div>
        </div>

        <div className="engagement-skills">
          <p>CE QUE LE SCOUTISME M&apos;A APPRIS</p>

          <div>
            <span>Leadership</span>
            <span>Autonomie</span>
            <span>Solidarité</span>
            <span>Adaptabilité</span>
            <span>Esprit d&apos;équipe</span>
            <span>Sens du service</span>
            <span>Initiative</span>
          </div>
        </div>

        <PhotoGallery
          images={scoutPhotos}
          title="Scoutisme"
          onPhotoClick={setSelectedPhoto}
        />
      </section>

      {/* CONCLUSION */}
      <section className="engagement-conclusion">
        <p className="section-label">UNE AUTRE FACETTE DE MON PARCOURS</p>

        <h2>
          Plusieurs casquettes,
          <span> un même engagement.</span>
        </h2>

        <p>
          Ces expériences ont construit une partie de ma façon de travailler :
          prendre des initiatives, m&apos;adapter, collaborer et aller au bout
          des responsabilités qui me sont confiées.
        </p>
      </section>

      {/* LIGHTBOX */}
      {selectedPhoto && (
        <div
          className="engagement-lightbox"
          onClick={() => setSelectedPhoto(null)}
          role="presentation"
        >
          <button
            type="button"
            className="engagement-lightbox-close"
            onClick={() => setSelectedPhoto(null)}
            aria-label="Fermer"
          >
            <FaXmark />
          </button>

          <img
            src={selectedPhoto}
            alt="Activité associative agrandie"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </main>
  );
}

export default VieAssociative;