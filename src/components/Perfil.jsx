import "../scss/main/Perfil.scss";
import Typewriter from "typewriter-effect";

function Perfil() {
  return (
    <>
      <div className="perfil__container">
        <div className="perfil__bio">
          <h3>
            <Typewriter
              options={{
                strings: [
                  "Front-End Developer",
                  "Back-End Developer",
                  "Full Stack Developer",
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
              }}
            />
          </h3>
          <p>¡Bienvenido/a!</p>
          <p>
            Me llamo Lorena y soy de Valencia, España. Me encanta transformar
            ideas en productos reales con experiencias digitales fluidas,
            prácticas y atractivas. Siempre estoy explorando nuevas herramientas
            y buscando formas de mejorar mis proyectos.
          </p>

          <p>
            ¿Tienes una idea en mente? ¡Conversemos y trabajemos juntos para
            hacerla posible! 🚀
          </p>
        </div>

        <div></div>
      </div>
    </>
  );
}

export default Perfil;
