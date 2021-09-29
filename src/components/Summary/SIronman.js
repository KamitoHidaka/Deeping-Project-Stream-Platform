import { Header } from "../layout/Header";
import { Footer } from "../layout/Footer";
import ReactPlayer from "react-player";
import "../layout/LayoutStyles.css";

import billboard from "../../assets/movies/iron-man.jpg";
export const SIronman = () => {
  return (
    <>
      <Header />
      <div className="movie-container">
        <div className="summary-container">
          <div className="movie-header">
            <img src={billboard} alt="Iron Man" />
            <div className="movie-info">
              <h1>Iron Man</h1>
              <p>
                Tony Stark es un inventor de armamento brillante que es
                secuestrado en el extranjero. Sus captores son unos terroristas
                que le obligan a construir una máquina destructiva pero Tony se
                construirá una armadura para poder enfrentarse a ellos y
                escapar.
              </p>
            </div>
          </div>
          <div className="movie-trailer">
            <h2>Trailer</h2>
            <ReactPlayer
              url={
                "https://www.youtube.com/watch?v=EVFUfCUZbxk&ab_channel=MxTrailersHD"
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
