import "../scss/App.scss";
import Nav from "./Nav.jsx";
import Landing from "./Landing.jsx";
import Perfil from "./Perfil.jsx";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";

function App() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const cardTexts = [
    "COMUNICACIÓN",
    "TRABAJO EN EQUIPO",
    "RESOLUCIÓN DE PROBLEMAS",
    "CREATIVIDAD",
  ];

  return (
    <div>
      <Nav />
      <Landing />
      <Perfil cardTexts={cardTexts} particlesInit={particlesInit} />
    </div>
  );
}

export default App;
