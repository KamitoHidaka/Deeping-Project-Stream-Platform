import { Header } from "../layout/Header";
import { Footer } from "../layout/Footer";
import ReactPlayer from "react-player";
import "../layout/LayoutStyles.css";

import billboard from "../../assets/movies/kimetsu-movie.jpg";
export const SKimetsu = () => {
  return (
    <>
      <Header />
      <div className="movie-container">
        <div className="summary-container">
          <div className="movie-header">
            <img src={billboard} alt="Kimetsu no Yaiba: mugen ressha hen" />
            <div className="movie-info">
              <h1>Kimetsu no Yaiba: mugen ressha hen</h1>
              <p>
                Después de que una serie de misteriosas desapariciones comienzan
                a plagar un tren, los múltiples intentos del Cuerpo de Cazadores
                de Demonios para remediar el problema resultan infructuosos.
                Para evitar más bajas, el Pilar de las Llamas, Kyoujuro Rengoku,
                se encarga de eliminar la amenaza. Lo acompañan algunos de los
                miembros de la sangre nueva más prometedores del Cuerpo: Tanjiro
                Kamado, Zenitsu Agatsuma e Inosuke Hashibira, quienes esperan
                presenciar de primera mano las ardientes hazañas de este modelo
                de cazador de demonios. Sin que ellos lo supieran, las fuerzas
                demoníacas responsables de las desapariciones ya han puesto en
                marcha su siniestro plan. Bajo esta presencia demoníaca, el
                grupo debe reunir cada gramo de su fuerza de voluntad y
                desenvainar sus espadas para salvar a los doscientos pasajeros a
                bordo. Así, Kimetsu no Yaiba: Mugen Ressha-hen se adentra en los
                rincones más profundos de la mente de Tanjiro, poniendo a prueba
                su determinación y compromiso con el deber.
              </p>
            </div>
          </div>
          <div className="movie-trailer">
           <h2>Trailer</h2>   
          <ReactPlayer
            url={
              "https://www.youtube.com/watch?v=-AwLMRgcEoA&ab_channel=Cin%C3%A9polis"
            }
            width="70rem"
            controls
            muted={false}
          />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
