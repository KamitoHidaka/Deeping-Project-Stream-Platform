import "./LayoutStyles.css";
import logo from "../../assets/webicon.png";
import { CustomButton } from "../common/CustomButton";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <div className="header-container">
      <Link to="/">
        <div className="header-logo">
          <img src={logo} alt="logo" />
          <h1>StealTime</h1>
        </div>
      </Link>

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
