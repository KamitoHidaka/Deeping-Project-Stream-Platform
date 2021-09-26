import { Header } from "./Header";
import { Footer } from "./Footer";
import { Billboard } from "../common/Billboard";
import "./LayoutStyles.css";
import movies from "../../consts/movie-list";
/*-----Images-----*/
import kimetsu from "../../assets/movies/kimetsu-movie.jpg";
import iromman from "../../assets/movies/iron-man.jpg";
import kimi from "../../assets/movies/kimi-no-nawa.jpg";

export function Home() {
  return (
    <>
      <Header />
      <div className="contenent">
        {/* {movies.map((movie)=>{
                   return(
                    <Billboard key={movie.id} movie={movie}/>
                   );
               })}  */}
        <Billboard
            img={kimetsu}
            name="Kimetsu no Yaiba: mugen ressha hen"
            url="Kimetsu"
        />
        <Billboard
            img={iromman} 
            name="Iron Man" 
            url="Iron-man" 
        />
        <Billboard
            img={kimi}
            name="Kimi no Nawa"
            url="Kimi-no-Nawa"
        />
      </div>
      <Footer />
    </>
  );
}
