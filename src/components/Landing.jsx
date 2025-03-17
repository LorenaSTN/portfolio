import "../scss/main/Landing.scss";
import PropTypes from "prop-types";

function Landing({ scrollToProjects }) {
  return (
    <div className="landing__container">
      <div>
        <h1 className="landing__title">
          Desarrolladora <br />
          <span className="landing__span">Full Stack</span>
        </h1>

        <p className="landing__text">
          ¡Hola! Soy Lorena, diseño código y optimizo experiencias digitales.
          <br />
          ¡Hablemos!
        </p>
      </div>

      <div className="landing__box">
        <button className="landing__button" onClick={scrollToProjects}>
          Ver proyectos
        </button>
      </div>
    </div>
  );
}

Landing.propTypes = {
  scrollToProjects: PropTypes.func.isRequired,
};

export default Landing;
