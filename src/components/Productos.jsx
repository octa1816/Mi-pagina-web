import "./Productos.css";
import cerramientos from "../assets/Productos/cerramientos.jpeg";
import puertas from "../assets/Productos/puertas.jpeg";
import cielorraso from "../assets/Productos/cielorraso.jpeg";

const productos = [
  { img: cerramientos, desc: "Cámara frigorífica modular" },
  { img: puertas, desc: "Puerta frigorífica industrial" },
  { img: cielorraso, desc: "Paneles aislantes para industria alimenticia" },
];

const Productos = () => (
  <section className="seccion">
    <h2>Productos</h2>
    <div className="productos">
      {productos.map((p, i) => (
        <div key={i} className="producto">
          <img src={p.img} alt={p.desc} />
          <p>{p.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Productos;
