import {
  FaEnvelope,
  FaPhone,
  FaLinkedinIn,
  FaGithub,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";

function Contact() {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <p className="section-label">CONTACT</p>

        <h1>
          Échangeons <span>ensemble.</span>
        </h1>

        <p className="contact-intro">
          Une opportunité, un projet ou simplement envie d&apos;échanger ?
          N&apos;hésitez pas à me contacter.
        </p>

        <div className="contact-grid">
          {/* EMAIL */}
          <a
            href="mailto:sambouanna06@gmail.com"
            className="contact-card"
          >
            <div className="contact-icon">
              <FaEnvelope />
            </div>

            <div>
              <span className="contact-card-label">EMAIL</span>
              <h2>Écrivez-moi</h2>
              <p>sambouanna06@gmail.com</p>
            </div>

            <FaArrowUpRightFromSquare className="contact-arrow" />
          </a>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/aicha-sambou-255b66313/"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <div className="contact-icon">
              <FaLinkedinIn />
            </div>

            <div>
              <span className="contact-card-label">LINKEDIN</span>
              <h2>Connectons-nous</h2>
              <p>Voir mon profil LinkedIn</p>
            </div>

            <FaArrowUpRightFromSquare className="contact-arrow" />
          </a>

          {/* GITHUB */}
          <a
            href="https://github.com/aichawilma"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <div className="contact-icon">
              <FaGithub />
            </div>

            <div>
              <span className="contact-card-label">GITHUB</span>
              <h2>Mes projets</h2>
              <p>Découvrir mon GitHub</p>
            </div>

            <FaArrowUpRightFromSquare className="contact-arrow" />
          </a>

          {/* TÉLÉPHONE */}
          <a href="tel:+33745650366" className="contact-card">
            <div className="contact-icon">
              <FaPhone />
            </div>

            <div>
              <span className="contact-card-label">TÉLÉPHONE</span>
              <h2>Appelez-moi</h2>
              <p>07 45 65 03 66</p>
            </div>

            <FaArrowUpRightFromSquare className="contact-arrow" />
          </a>
        </div>

        <div className="contact-bottom">
          <div>
            <p className="contact-bottom-small">ACTUELLEMENT</p>

            <h2>
              Ouverte aux nouvelles
              <span> opportunités.</span>
            </h2>
          </div>

          <a
            href="mailto:sambouanna06@gmail.com"
            className="contact-main-button"
          >
            Me contacter
            <FaEnvelope />
          </a>
        </div>
      </section>
    </main>
  );
}

export default Contact;