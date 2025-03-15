import "../scss/main/Perfil.scss";
import Typewriter from "typewriter-effect";

function Perfil() {
  return (
    <>
      <div className="perfil__container">
        <div className="perfil__1">
          <div className="perfil__bio">
            <h3 className="perfil__title">
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

            <a
              href=" https://drive.google.com/uc?export=download&id=1EHLockAA8U9dVGsRwOxajW6dQ5PvCz_i"
              download
            >
              <button className="perfil__cv">Descargar CV</button>
            </a>
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
              <p> NEXT JS</p>
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
      </div>
    </>
  );
}

export default Perfil;
