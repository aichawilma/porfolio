import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        Aicha<span>.</span>
      </Link>

      <div className="nav-links">

        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          Accueil
        </NavLink>

        <NavLink
          to="/projets"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          Projets
        </NavLink>

        <NavLink
          to="/experiences"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          Expériences
        </NavLink>

        <NavLink
          to="/competences"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          Compétences
        </NavLink>

        <NavLink
          to="/formation"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          Formation
        </NavLink>

      </div>

      <Link to="/contact" className="nav-button">
        Contact
      </Link>

    </nav>
  );
}

export default Navbar;