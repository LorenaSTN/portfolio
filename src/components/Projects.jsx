import "../scss/main/Projects.scss";
import PropTypes from "prop-types";
import Project1 from "../images/groceryapp.jpeg";
import Project2 from "../images/alpacaweb.jpeg";
import Project3 from "../images/appawesome.jpeg";
import Project4 from "../images/seriesapp.jpeg";

import Project5 from "../images/kanyesaid.png";

function Projects() {
  return (
    <div className="projects__container">
      <div className="projects__list">
        <div className="projects__section">
          <img src={Project1} alt="Grocery Tracker" />
          <h3>Grocery Tracker</h3>

          <p>
            Aplicación que permite a los usuarios realizar un seguimiento de sus
            compras diarias y calcular su gasto mensual.
          </p>

          <div className="projects__webs">
            <a href="https://github.com/LorenaSTN/Grocery-Tracker">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://lorenastn.github.io/Grocery-Tracker/#inicio">
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
          <img src={Project3} alt="" />
          <h3>Awesome Profile Cards</h3>
          <p>
            Aplicación web que permite a los usuarios crear y compartir tarjetas
            digitales de presentación con su información profesional.
          </p>

          <div className="projects__webs">
            <a href="https://github.com/LorenaSTN/awesome-profile-cards">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://griseldagomez.github.io/proyect-promo-Y-module-2-team-1/">
              <i className="fa-solid fa-globe"></i>
            </a>
          </div>

          <div className="projects__tech">
            <span>HTML</span>
            <span>SASS</span>
            <span>JAVASCRIPT</span>
          </div>
        </div>

        <div className="projects__section">
          <img src={Project4} alt="" />
          <h3>Buscador de series anime</h3>
          <p>
            Plataforma web diseñada para los amantes del anime, permitiéndoles
            buscar series y agregarlas a su lista de favoritos.
          </p>

          <div className="projects__webs">
            <a href="https://github.com/LorenaSTN/buscador-series-anime">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://lorenastn.github.io/buscador-series-anime/">
              <i className="fa-solid fa-globe"></i>
            </a>
          </div>

          <div className="projects__tech">
            <span>HTML</span>
            <span>CSS</span>
            <span>JAVASCRIPT</span>
          </div>
        </div>

        <div className="projects__section">
          <img src={Project2} alt="" />
          <h3>Alpaca Generator</h3>
          <p>
            Aplicación web que permite a los usuarios diseñar sus propias
            alpacas personalizadas con una variedad de opciones.
          </p>

          <div className="projects__webs">
            <a href="https://github.com/LorenaSTN/alpaca-generator">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://lorenastn.github.io/alpaca-generator/">
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
          <img src={Project5} alt="" />
          <h3>Kanye Said</h3>
          <p>
            Plataforma creativa que permite a los usuarios diseñar tarjetas
            personalizadas con mensajes para sus seres queridos, acompañados de
            citas icónicas de Kanye West.
          </p>

          <div className="projects__webs">
            <a href="https://github.com/LorenaSTN/kanye-said">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://lorenastn.github.io/kanye-said/">
              <i className="fa-solid fa-globe"></i>
            </a>
          </div>

          <div className="projects__tech">
            <span>HTML</span>
            <span>SASS</span>
            <span>JAVASCRIPT</span>
          </div>
        </div>
      </div>
    </div>
  );
}

Projects.propTypes = {
  particlesInit: PropTypes.func.isRequired,
};

export default Projects;
