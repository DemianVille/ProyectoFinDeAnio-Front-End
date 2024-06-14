import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer mt-4">
      <div className="container">
        <div className="footerInfo">
          <div className="footerSection">
            <h4 className="footerSectionTitle">
              Sobre{" "}
              <img
                className="logoFooter pb-1"
                src="/public/img/Logo.png"
                alt="Facebook Logo"
              />{" "}
              Nombre
            </h4>
            <ul className="footerList">
              <li>
                <Link to={"/about-this-project"} className="footerLink">
                  Sobre este proyecto
                </Link>
              </li>
              <li>
                <a href="#" className="footerLink">
                  Quiénes Somos
                </a>
              </li>
              <li>
                <a href="#" className="footerLink">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="footerSection">
            <h4 className="footerSectionTitle">Ayuda</h4>
            <ul className="footerList">
              <li>
                <a href="#" className="footerLink">
                  Centro de Ayuda
                </a>
              </li>
              <li>
                <a href="#" className="footerLink">
                  Soporte
                </a>
              </li>
              <li>
                <a href="#" className="footerLink">
                  Preguntas Frecuentes
                </a>
              </li>
              <li>
                <a href="#" className="footerLink">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          <div className="footerSection">
            <h4 className="footerSectionTitle">Legal</h4>
            <ul className="footerList">
              <li>
                <a href="#" className="footerLink">
                  Términos de Servicio
                </a>
              </li>
              <li>
                <a href="#" className="footerLink">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="footerLink">
                  Política de Cookies
                </a>
              </li>
            </ul>
          </div>
          <div className="footerSection">
            <h4 className="footerSectionTitle">Síguenos</h4>
            <ul className="footerListContact">
              <li>
                <a href="https://facebook.com" className="footerLink">
                  <img
                    className="pb-1"
                    src="/src/assets/facebookLogo.svg"
                    alt="Facebook Logo"
                  />{" "}
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://twitter.com" className="footerLink">
                  <img
                    className="pb-1"
                    src="/src/assets/twitterLogo.svg"
                    alt="Facebook Logo"
                  />{" "}
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://instagram.com" className="footerLink">
                  <img
                    className="pb-1"
                    src="/src/assets/instagramLogo.svg"
                    alt="Facebook Logo"
                  />{" "}
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footerEnd">
          <p>© 2024 Nombre. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
