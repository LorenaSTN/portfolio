import "../scss/main/Projects.scss";
import PropTypes from "prop-types";
import Project1 from "../images/appgrocery.jpeg";
import Project3 from "../images/appawesome.jpeg";

function Projects() {
  return (
    <div className="projects__container">
      <h1 className="projects__maintitle"> Proyectos</h1>
      <div className="projects__list">
        <div className="projects__section">
          <img src={Project1} alt="Grocery Tracker" />
          <h3>Grocery Tracker</h3>

          <p>
            Aplicación web que te ayuda a organizar tus compras, registrar
            precios y visualizar tus hábitos de consumo a través de gráficos
            detallados, permitiéndote optimizar tu presupuesto y ahorrar dinero.
          </p>

          <div className="projects__webs">
            <a href="https://github.com/LorenaSTN/Grocery-Tracker">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://github.com/LorenaSTN/Grocery-Tracker">
              <i className="fa-solid fa-globe"></i>
            </a>
          </div>

          <div className="projects__tech">
            <span>HTML</span>
            <span>SASS</span>
            <span>REACT</span>
          </div>
        </div>

        <div className="projects__section">
          <h3>Proyectos 2</h3>
          <p>Descripción...</p>
        </div>

        <div className="projects__section">
          <img src={Project3} alt="" />
          <h3>Awesome Profile Cards</h3>
          <p></p>
        </div>
      </div>
    </div>
  );
}

Projects.propTypes = {
  particlesInit: PropTypes.func.isRequired,
};

export default Projects;
