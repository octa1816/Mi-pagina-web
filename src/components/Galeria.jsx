import Slider from "react-slick";
import "./Galeria.css";

// Importamos las imágenes para que Vite las procese correctamente
import img1 from "../assets/galeria/33.jpg";
import img2 from "../assets/galeria/22.jpg";
import img3 from "../assets/galeria/11.jpg";

const Galeria = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true, // Para que pase solo
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="seccion">
      <h2>Galería</h2>
      <Slider {...settings}>
        <div>
          <img src={img1} alt="obra 1" />
        </div>
        <div>
          <img src={img2} alt="obra 2" />
        </div>
        <div>
          <img src={img3} alt="obra 3" />
        </div>
      </Slider>
    </section>
  );
};

export default Galeria;
