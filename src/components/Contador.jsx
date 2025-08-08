import React, { useEffect, useState } from "react";
import "./Contador.css";

const datos = [
  { label: "Servicios brindados", valorFinal: 379 },
  { label: "Provincias cubiertas ", valorFinal: 22 },
  { label: "Cámaras activas ", valorFinal: 340 },
  { label: "Años de experiencia", valorFinal: 26 },
];

const Contador = () => {
  const [valores, setValores] = useState(Array(datos.length).fill(0));

  useEffect(() => {
    const intervalos = datos.map((dato, i) => {
      return setInterval(() => {
        setValores((prev) => {
          const nuevo = [...prev];
          if (nuevo[i] < dato.valorFinal) {
            nuevo[i]++;
          }
          return nuevo;
        });
      }, 15);
    });

    return () => intervalos.forEach(clearInterval);
  }, []);

  return (
    <section className="contador-section">
      {datos.map((dato, i) => (
        <div key={i} className="contador-item">
          <h3>{valores[i]}</h3>
          <p>{dato.label}</p>
        </div>
      ))}
    </section>
  );
};

export default Contador;
