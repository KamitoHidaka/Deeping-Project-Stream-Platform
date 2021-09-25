import './LayoutStyles.css';
import logo from '../../assets/webicon.png';
import {CustomButton} from '../common/CustomButton';
import { Link } from 'react-router-dom';

export const Header = () => {
    return(
        <div className='header-container'>
            <Link to='/'>
                <img src={logo} alt="logo" className='header-logo' />
            </Link>
            <nav>
                <Link to='/'>
                    <CustomButton name='Inicio'/>
                </Link>
                <Link to='/Series'>
                    <CustomButton name='Series'/>
                </Link>
                <Link to='/Movies'>
                    <CustomButton name='Peliculas'/>  
                </Link>
                <Link to='/Contact'>
                    <CustomButton name='Contactanos'/>
                </Link>
                <Link to='/Login'>
                    <CustomButton name="Login"/>  
                </Link>
            </nav>
        </div>
    );
}