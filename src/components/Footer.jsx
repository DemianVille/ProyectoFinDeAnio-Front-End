import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer mt-4">
      <div className="container">
        <div className="footerInfo">
          <div className="footerSection">
            <h4 className="footerSectionTitle">Sobre Hackflix</h4>
            <ul className="footerList">
              <li>
                <Link to={"/about-this-project"} className="footerLink">
                  Quiénes Somos
                </Link>
              </li>
              <li>
                <a href="/careers" className="footerLink">
                  Carreras
                </a>
              </li>
              <li>
                <a href="/press" className="footerLink">
                  Prensa
                </a>
              </li>
              <li>
                <a href="/blog" className="footerLink">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="footerSection">
            <h4 className="footerSectionTitle">Ayuda</h4>
            <ul className="footerList">
              <li>
                <a href="/help" className="footerLink">
                  Centro de Ayuda
                </a>
              </li>
              <li>
                <a href="/support" className="footerLink">
                  Soporte
                </a>
              </li>
              <li>
                <a href="/faq" className="footerLink">
                  Preguntas Frecuentes
                </a>
              </li>
              <li>
                <a href="/contact" className="footerLink">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          <div className="footerSection">
            <h4 className="footerSectionTitle">Legal</h4>
            <ul className="footerList">
              <li>
                <a href="/terms" className="footerLink">
                  Términos de Servicio
                </a>
              </li>
              <li>
                <a href="/privacy" className="footerLink">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="/cookies" className="footerLink">
                  Política de Cookies
                </a>
              </li>
            </ul>
          </div>
          <div className="footerSection">
            <h4 className="footerSectionTitle">Síguenos</h4>
            <ul className="footerListContact">
              <li>
                <a href="https://facebook.com/hackflix" className="footerLink">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://twitter.com/hackflix" className="footerLink">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://instagram.com/hackflix" className="footerLink">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footerEnd">
          <p>&copy; 2024 Hackflix. Todos los derechos reservados.</p>
          <p>Desarrollado por Hackflix Team</p>
        </div>
      </div>
    </footer>
  );
}
