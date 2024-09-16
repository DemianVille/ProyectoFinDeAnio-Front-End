import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

export default function Footer() {
  const notify = () => {
    toast.warn("En desarrollo");
  };

  return (
    <footer className="footer mt-4">
      <div className="container">
        <div className="footerInfo">
          <div className="footerSection">
            <h4 className="footerSectionTitle d-flex justify-content-center">
              Sobre <h5 className="fontPlaywrite ms-1">Copéllia</h5>
            </h4>
            <ul className="footerList">
              <li>
                <Link to={"/sobre-este-proyecto"} className="footerLink">
                  Sobre este proyecto
                </Link>
              </li>
              <li>
                <a href="/sobre-este-proyecto" className="footerLink">
                  Quiénes Somos
                </a>
              </li>
              <li>
                <a href="#" className="footerLink" onClick={notify}>
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="footerSection">
            <h4 className="footerSectionTitle">Ayuda</h4>
            <ul className="footerList">
              <li>
                <a href="#" className="footerLink" onClick={notify}>
                  Centro de Ayuda
                </a>
              </li>
              <li>
                <a href="#" className="footerLink" onClick={notify}>
                  Soporte
                </a>
              </li>
              <li>
                <a href="#" className="footerLink" onClick={notify}>
                  Preguntas Frecuentes
                </a>
              </li>
              <li>
                <a href="#" className="footerLink" onClick={notify}>
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          <div className="footerSection">
            <h4 className="footerSectionTitle">Legal</h4>
            <ul className="footerList">
              <li>
                <a href="#" className="footerLink" onClick={notify}>
                  Términos de Servicio
                </a>
              </li>
              <li>
                <a href="#" className="footerLink" onClick={notify}>
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="footerLink" onClick={notify}>
                  Política de Cookies
                </a>
              </li>
            </ul>
          </div>
          <div className="footerSection">
            <h4 className="footerSectionTitle">Síguenos</h4>
            <ul className="footerListContact">
              <li>
                <a
                  href="https://facebook.com"
                  className="footerLink"
                  target="_blank"
                >
                  <img
                    className="pb-1"
                    src="/img/facebookLogo.svg"
                    alt="Facebook Logo"
                  />{" "}
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  className="footerLink"
                  target="_blank"
                >
                  <img
                    className="pb-1"
                    src="/img/twitterLogo.svg"
                    alt="Facebook Logo"
                  />{" "}
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  className="footerLink"
                  target="_blank"
                >
                  <img
                    className="pb-1"
                    src="/img/instagramLogo.svg"
                    alt="Facebook Logo"
                  />{" "}
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footerEnd">
          <p>© 2024 Copéllia. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
