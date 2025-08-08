import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Historia from "./components/Historia";
import Productos from "./components/Productos";
import Galeria from "./components/Galeria";
import PreguntasFrecuentes from "./components/PreguntasFrecuentes";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import Contador from "./components/Contador";

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <div id="historia">
        <Historia />
      </div>

      <div id="productos">
        <Productos />
      </div>

      <Contador />

      <div id="galeria">
        <Galeria />
      </div>

      <div id="preguntas-frecuentes">
        <PreguntasFrecuentes />
      </div>

      <div id="contacto">
        <Contacto />
      </div>

      <Footer />
    </>
  );
}

export default App;
