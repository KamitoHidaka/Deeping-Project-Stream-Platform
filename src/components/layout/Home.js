import {Header} from './Header';
import {Footer} from './Footer';
import { Billboard } from '../common/Billboard';
/*-----Images-----*/
import kimetsu from '../../assets/movies/kimetsu_no_yaiba_mugen_ressha_hen.jpg';
import kiminonawa from '../../assets/movies/kiminonawa.jpg';
import './LayoutStyles.css'
import { Link } from 'react-router-dom';

export const Home = () =>{
    return(
        <>
            <Header/>
           <div className="contenent">
                <Link to='/Summary'>
                    <Billboard 
                    imgsrc={kimetsu} 
                    name="Kimetsu no yaiba mugen ressha hen"
                    />
                </Link>
                <Link to='/Summary'>
                    <Billboard 
                    imgsrc={kiminonawa} 
                    name="Kimi no Nawa"
                    />
                </Link>   
           </div>
            <Footer/>
        </>
    );
}