import "../scss/main/Contact.scss";

function Contact() {
  return (
    <>
      <div className="contact__container">
        <div className="contact__formtable">
          <div className="contact__message">
            <h3>Contacta</h3>
            <p>
              ¿Un proyecto en mente? <br /> Si tienes una propuesta o
              simplemente quieres saludar, ¡déjame un mensaje!
            </p>

            <div className="contact__webs">
              <a href="">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
          <form
            action="https://formsubmit.co/lorenstn@hotmail.com"
            method="POST"
            className="contact__form"
          >
            <input type="text" name="name" placeholder="Nombre" required />
            <input type="email" name="email" placeholder="Correo" required />
            <textarea name="message" placeholder="Mensaje" required></textarea>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
