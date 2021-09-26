import {Header} from './Header';
import {Footer} from './Footer';
import movies from '../../consts/movie-list';
import ReactPlayer from 'react-player';
export const Summary =()=>{
    return(
        <>
            <Header/>
            {movies.map(movie=>{
                return(
                    <div>
                        <ReactPlayer
                        url={movie.trailer}
                        width='40rem'
                        controls
                        // playing
                        muted={false}
                        />
                         <img src={movie.billboard}/>
                         <h1>{movie.title}</h1>
                    </div>
                )
            })}
               
            <Footer/>
        </>
    );
}

