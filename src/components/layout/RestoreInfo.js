import { Header } from "./Header";
import { Footer } from "./Footer";
export const RestoreInfo = () => {
  return (
    <>
      <Header />
      <div className="form-container">
        <form action="" method="" className="form">
          <div className="form-title">
            <h1>Steal Time</h1>
            <h3>
              Ingresa tu direccion Email, te enviaremos un mensaje de
              verificacion para que puedas recuperar o cambiar tu contraseña.
            </h3>
          </div>
          <section className="user-email">
            <label htmlFor="email">Email:</label>
            <input type="email" required />
          </section>
          <button type="submit" className="user-send">
            Enviar Verficacion
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};
