import "./Navbar.css";
import logo from "../assets/logos/logo.png"; // ajustá el nombre y la ruta según tu archivo

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="CMF Logo" className="logo" />
      </div>
      <ul>
        <li>
          <a href="#historia">Historia</a>
        </li>
        <li>
          <a href="#productos">Productos</a>
        </li>
        <li>
          <a href="#galeria">Galería</a>
        </li>
        <li>
          <a href="#reseñas">Preguntas</a>
        </li>
        <li>
          <a href="#contacto">Contacto</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
