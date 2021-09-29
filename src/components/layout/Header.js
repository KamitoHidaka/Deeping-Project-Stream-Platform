import "./LayoutStyles.css";
import { CustomButton } from "../common/CustomButton";
import { Link } from "react-router-dom";
import { Logo } from "../common/Logo";

export function Header() {
  return (
    <div className="header-container">
      <div className="header-logo">
        <Link to="/">
          <Logo/>
        </Link>
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
