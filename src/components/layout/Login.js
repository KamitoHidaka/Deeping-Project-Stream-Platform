import { Header } from "./Header";
import { Footer } from "./Footer";
import { Link } from "react-router-dom";

export const Login = ({}) => {
  return (
    <>
      <Header />
      <div className="form-container">
        <form action="" method="post" className="form">
          <div className="form-title">
            <h1>Iniciar Sesion</h1>
          </div>
          <section className="user-email">
            <label htmlFor="email">Email:</label>
            <input type="email" required />
          </section>
          <section className="user-password">
            <label htmlFor="password">Contraseña:</label>
            <input type="password" required />
          </section>
          <div className="user-extra">
            <div className="user-remember">
              <p>Recuerdame</p>
              <input type="checkbox" name="" id="" />
            </div>
            <div>
              <Link to="/Restore-Info">
                <p>¿Olvidaste tu Contraseña?</p>
              </Link>
            </div>
          </div>
          <button type="submit" className="user-send">
            Iniciar Sesion
          </button>
          <Link to="/SignUp">
            <p>¿No tienes cuenta? Registrate</p>
          </Link>
        </form>
      </div>
      <Footer />
    </>
  );
};
