import "./PreguntasFrecuentes.css";

const PreguntasFrecuentes = () => (
  <section className="seccion" id="preguntas-frecuentes">
    <h2>Preguntas Frecuentes</h2>
    <div className="preguntas">
      <div className="pregunta">
        <h4>¿Cómo es el proceso para contratar el servicio?</h4>
        <p>
          1 - Te contactás por WhatsApp o completando el formulario de contacto.
          <br />
          2 - Coordinamos una visita técnica, de ser necesario.
          <br />
          3 - Te enviamos el presupuesto detallado.
          <br />4 - Acordamos la fecha de instalación.
        </p>
      </div>
      <div className="pregunta">
        <h4>¿Cuánto tarda una instalación?</h4>
        <p>
          Depende del tamaño de la obra. Garantizamos realizar un trabajo ágil,
          prolijo y en el menor tiempo posible.
        </p>
      </div>
      <div className="pregunta">
        <h4>¿En qué zona trabajan?</h4>
        <p>En cualquier punto del país.</p>
      </div>
      <div className="pregunta">
        <h4>
          ¿Brindan solo el servicio de instalación o tambien los materiales?
        </h4>
        <p>
          Nos especializamos en brindar el servicio de instalación y montaje,
          pero si lo necesitas, tambien podemos cotizar los materiales y armar
          un presupuesto completo con todo lo necesario para tu proyecto.
        </p>
      </div>
    </div>
  </section>
);

export default PreguntasFrecuentes;
