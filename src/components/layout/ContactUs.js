import { Header } from "./Header";
import { Footer } from "./Footer";
import swal from "sweetalert";
import "./LayoutStyles.css";

export const ContactUs = ({}) => {
  const messageSended = () => {
    swal({
      title: "Mensaje Enviado",
      icon: "success",
      button: "Listo",
    });
  };
  return (
    <>
      <Header />
      <div className="form-container">
        <form action="" method="" className="form">
          <div className="form-title">
            <h1>Contactate con Nosotros</h1>
            <h3>
              Envianos tu opinion o queja, diligenciando tu nombre, correo electronico
              y comentario en los siguientes espacios
            </h3>
          </div>
          <section className="user-name">
            <label htmlFor="name">Nombre Completo:</label>
            <input type="text" required />
          </section>
          <section className="user-email">
            <label htmlFor="email">Correo electronico:</label>
            <input type="email" required />
          </section>
          <section className="user-comment">
            <label htmlFor="comment">Comentario o Mensaje</label>
            <textarea rows="10" required />
          </section>
          <button type="submit" className="user-send">
            ENVIAR
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
};
