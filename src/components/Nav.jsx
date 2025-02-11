import "../scss/main/Nav.scss";

function Nav() {
  return (
    <div className="nav__container">
      <nav className="nav">
        <ul className="nav__ul">
          <li className="nav__li">Perfil</li>
          <li className="nav__li">Proyectos</li>
          <li className="nav__li">Contacto</li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
