import "../scss/main/Perfil.scss";
import Typewriter from "typewriter-effect";
import Particles from "react-tsparticles";

function Perfil({ cardTexts, particlesInit }) {
  return (
    <>
      <div className="perfil__container">
        <div className="perfil__1">
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
              ideas en productos reales con interfaces fluidas, prácticas y
              atractivas. Siempre estoy explorando nuevas herramientas y
              buscando formas de mejorar mis proyectos.
            </p>

            <p>
              ¿Tienes una idea en mente? ¡Conversemos y trabajemos juntos para
              hacerla posible! 🚀
            </p>
          </div>

          <div className="perfil__dev">
            <div>
              <p> HTML5</p>
            </div>
            <div>
              <p> CSS</p>
            </div>
            <div>
              <p> SASS</p>
            </div>
            <div>
              <p> JAVASCRIPT</p>
            </div>
            <div>
              <p> TYPESCRIPT</p>
            </div>
            <div>
              <p> REACT </p>
            </div>
            <div>
              <p> PYTHON</p>
            </div>
            <div>
              <p> NODE JS</p>
            </div>
            <div>
              <p> MYSQL</p>
            </div>
            <div>
              <p> POSTMAN</p>
            </div>
            <div>
              <p> AWS</p>
            </div>
            <div>
              <p> LINUX</p>
            </div>
            <div>
              <p>FIGMA</p>
            </div>
            <div>
              <p> ADOBE PHOTOSHOP</p>
            </div>
            <div>
              <p> ADOBE ILLUSTRATOR</p>
            </div>
          </div>
        </div>
        <div className="perfil__2">
          {cardTexts.map((text, index) => (
            <div className="perfil__cards" key={index}>
              <Particles
                id={`tsparticles-${index}`}
                init={particlesInit}
                options={{
                  fullScreen: { enable: false },
                  background: { color: "transparent" },
                  particles: {
                    number: { value: 8 },
                    color: { value: "#ffffff" },
                    shape: { type: "circle" },
                    opacity: { value: 0.6 },
                    size: { value: { min: 1, max: 4 } },
                    move: { enable: true, speed: 0.5 },
                  },
                }}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              />
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Perfil;
