import "../scss/App.scss";
import Nav from "./Nav.jsx";
import Landing from "./Landing.jsx";
import Perfil from "./Perfil.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";

function App() {
  // nav navegation
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  // landing to projects
  const scrollToProjects = () => {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  };

  // particles background - softskills
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <>
      <Nav scrollToSection={scrollToSection} />
      <div id="landing">
        <Landing scrollToProjects={scrollToProjects} />
      </div>
      <div id="perfil">
        <Perfil />
      </div>
      <div id="projects">
        <Projects particlesInit={particlesInit} />
      </div>

      <div id="contact">
        <Contact />
      </div>
    </>
  );
}

export default App;
