import "../scss/main/Nav.scss";
import PropTypes from "prop-types";

function Nav({ scrollToSection }) {
  return (
    <div className="nav__container">
      <nav className="nav">
        <ul className="nav__ul">
          <li className="nav__li" onClick={() => scrollToSection("perfil")}>
            Sobre mí
          </li>
          <li className="nav__li" onClick={() => scrollToSection("projects")}>
            Proyectos
          </li>
          <li className="nav__li" onClick={() => scrollToSection("contact")}>
            Contacto
          </li>
        </ul>
      </nav>
    </div>
  );
}

Nav.propTypes = {
  scrollToSection: PropTypes.func.isRequired,
};

export default Nav;
