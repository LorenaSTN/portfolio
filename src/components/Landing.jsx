import "../scss/main/Landing.scss";

function Landing() {
  return (
    <>
      <div className="landing__container">
        <div>
          <h1 className="landing__title">
            Desarrolladora <br />
            <span className="landing__span">Full Stack</span>
          </h1>

          <p className="landing__text">
            ¡Hola! Soy Lorena, diseño código y optimizo experiencias digitales.
            <br></br>¡Hablemos!
          </p>
        </div>

        <div className="landing__box">
          <p>Ver proyectos</p>
        </div>
      </div>
    </>
  );
}

export default Landing;
