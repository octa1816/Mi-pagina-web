import "./Contacto.css";
import logowsp from "../assets/logos/wsp.png";
import logoface from "../assets/logos/face.png";

const Contacto = () => (
  <section className="seccion">
    <h2>Contacto</h2>
    <form action="https://formspree.io/f/meozzgrd" method="POST">
      <input type="text" name="nombre" placeholder="Nombre" required />
      <input type="email" name="email" placeholder="Correo" required />
      <textarea name="mensaje" placeholder="Mensaje" required />
      <button type="submit">Enviar</button>
    </form>

    <div className="redes">
      <a
        href="https://wa.me/5493435015342"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={logowsp} alt="WhatsApp" />
      </a>
      <a
        href="https://facebook.com/profile.php?id=61579125650668"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={logoface} alt="Facebook" />
      </a>
    </div>
  </section>
);

export default Contacto;
