import { Header } from "../layout/Header";
import { Footer } from "../layout/Footer";
import ReactPlayer from "react-player";
import "../layout/LayoutStyles.css";

import billboard from "../../assets/movies/kimi-no-nawa.jpg";
export const SKimi = () => {
  return (
    <>
      <Header />
      <div className="movie-container">
        <div className="summary-container">
          <div className="movie-header">
            <img src={billboard} alt="Kimi no Nawa" />
            <div className="movie-info">
              <h1>Kimi no Nawa</h1>
              <p>
                El joven Taki vive en Tokio: la joven Mitsuha, en un pequeño
                pueblo en las montañas. Durante el sueño, los cuerpos de ambos
                se intercambian. Recluidos en un cuerpo que les resulta extraño,
                comienzan a comunicarse.
              </p>
            </div>
          </div>
          <div className="movie-trailer">
            <h2>Trailer</h2>
            <ReactPlayer
              url={
                "https://www.youtube.com/watch?v=yPPaLgSXYlM&ab_channel=M%C3%B3rbido"
              }
              width="70rem"
              controls
              muted={false}
              volume={.4}

            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
