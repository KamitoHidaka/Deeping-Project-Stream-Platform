import "./LayoutStyles.css";
import logo from "../../assets/webicon.png";
import { CustomButton } from "../common/CustomButton";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <div className="header-container">
      <div className="header-logo">
        <Link to="/">
        <img src={logo} alt="logo"/>
      </Link>
      <h1>StealTime</h1>
      </div>
      
      <nav>
        <Link to="/">
          <CustomButton name="Inicio" />
        </Link>
        <Link to="/Contact">
          <CustomButton name="Contactanos" />
        </Link>
        <Link to="/Login">
          <CustomButton name="Iniciar Sesion" />
        </Link>
        <Link to="/SignUp">
          <CustomButton name="Registrarse" />
        </Link>
      </nav>
    </div>
  );
}
