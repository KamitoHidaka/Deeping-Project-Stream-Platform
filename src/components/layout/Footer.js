import './LayoutStyles.css'
import logo from '../../assets/webicon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhoneAlt} from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faInstagram, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
export const Footer = () => {
    return(
        <div className='footer-container'>
            <div className='footer-sections'>
                <section className="footer-icon">
                    <img src={logo} alt="" />
                </section>
                <section className="footer-c">
                    <h3>Redes Sociales</h3>
                    <div>
                        <FontAwesomeIcon icon={faFacebookSquare} size='2x'/>
                        <p>StealTime</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faInstagram} size='2x'/>
                        <p>@Steal_Time</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faTwitterSquare} size='2x'/>
                        <p>StealTime</p>
                    </div>
                </section>
                <section className="footer-c">
                    <h3>Contactanos</h3>
                    <div>
                        <FontAwesomeIcon icon={faEnvelope} size='2x'/>
                        <p>stealtime@stealtime.com</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faPhoneAlt} size='2x'/>
                        <p>+1*********</p>
                    </div>
                </section>
            </div>
            <div className='footer-extra'>
                <small>Derechos de Autor</small>
            </div>
        </div>    
    );
}