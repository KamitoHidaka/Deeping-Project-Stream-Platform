import { Header } from "./Header";
import { Footer } from "./Footer";

export const SignUp = () => {
  return (
    <>
      <Header />
      <div className="form-container">
        <form action="POST" className="form">
          <div className="form-title">
            <h1>Bienvenido a StealTime</h1>
            <h3>Para registrarte ingresa los datos correspondientes</h3>
          </div>

          <section className="user-name">
            <label htmlFor="name">Nombre Completo:</label>
            <input type="text" required />
          </section>
          <section className="user-email">
            <label htmlFor="email">Correo electronico:</label>
            <input type="email" required />
          </section>
          <section className="user-password">
            <label htmlFor="password">Contraseña</label>
            <input type="password" required />
          </section>
          <section className="user-password">
            <label htmlFor="confirm-password">Verificar Contraseña</label>
            <input type="password" required />
          </section>
          <section className="user-age">
            <label htmlFor="age">Fecha de Nacimiento</label>
            <input type="date" required />
          </section>
          <button type="submit" className="user-send">
            Crear Cuenta
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};
