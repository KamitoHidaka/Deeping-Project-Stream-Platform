import {Header} from './Header';
import {Footer} from './Footer';
import { Billboard } from '../common/Billboard';
/*-----Images-----*/
import './LayoutStyles.css'
import movies from '../../consts/movie-list';

export function Home(){
    return(
        <>
            <Header/>
           <div className="contenent">
               {movies.map((movie)=>{
                   return(
                    <Billboard key={movie.id} movie={movie}/>
                   );
               })} 
           </div>
            <Footer/>
        </>
    );
}