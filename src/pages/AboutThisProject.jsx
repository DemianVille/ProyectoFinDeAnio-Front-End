import React from "react";
import { useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutThisProject() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <NavBar />
      <Container className="nobody pb-5">
        <header>
          <Row>
            <Col xs={12} md={6} className="aboutProject d-flex">
              <div className="pe-4">
                <h2>Sobre este proyecto</h2>
                <p className="aboutThisProjectIntro">
                  Para la realización de este e-commerce, nos inspiramos en el
                  mundo de la danza, enfocándonos especialmente en presentar
                  artículos imprescindiles para cualquier bailarina. Este
                  proyecto no solo abarca la esencia de la danza clásica, sino
                  que también incluye una amplia variedad de accesorios
                  relacionados con esta. Nos propusimos capturar y reflejar el
                  ambiente de la danza clásica, la diversion y belleza del
                  ballet en cada aspecto del sitio web.
                </p>
                <p className="aboutThisProjectIntro">
                  Para la interfaz del usuario (Front-End) del sitio web, se
                  desarrolló una aplicación utilizando la biblioteca React, para
                  que el desarrollo fuese eficiente. Por otro lado, para la
                  parte del servidor y lafuncionalidad (Back-End), se construyó
                  una API utilizando Node.js, junto con el framework Express
                  para manejar las rutas y solicitudes HTTP. Además, se integró
                  una base de datos con MySQL para la gestionar el
                  almacenamiento de datos, también utilizamos GitHub para la
                  gestión del código y la eficiente colaboración de cada
                  integrante en el proyecto.
                </p>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="imgHomeBefore ">
                <div>
                  <Image
                    className="w-100 imgHomeAfter"
                    data-aos="fade-left"
                    data-aos-anchor="#example-anchor"
                    data-aos-delay="62000"
                    data-aos-offset="500"
                    data-aos-duration="1100"
                    src="/src/assets/gifHomeAfter.gif"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </header>
      </Container>
      <Image className="w-100 fluid py-5" src="/src/assets/Excalidraw.jpg" />
      <Container>
        <header>
          <div className="d-flex flex-column align-items-center logInAsAdimnBtn">
            <Link to={"http://localhost:5174/admin/login"}>
              <button className="loginAdmin py-2 px-3 mt-5">
                Ingresar como administrador
              </button>
            </Link>
            <div>
              <p>
                <b>Usuarios de prueba</b>
              </p>
              <p className="ms-4">
                Para simplificar el acceso a la aplicación, se proporcionan los
                siguientes usuarios de prueba:
              </p>
              <p>
                <b>Administrador:</b>
              </p>
              <ul>
                <li>E-mail: admin@admin.uy</li>
                <li>Contraseña: 123</li>
              </ul>
              <p>
                <b>Usuario:</b>
              </p>
              <ul>
                <li>E-mail: test@user.uy</li>
                <li>Contraseña: 123</li>
              </ul>
            </div>
          </div>
        </header>
        <section className="pt-5">
          <Row className="d-flex" id="aboutUs">
            <Col xs={4}>
              <Image></Image>
            </Col>
            <Col xs={8}>
              <Col className="d-flex" xs={12}>
                <div className="ourPhotosContainer">
                  <Image
                    className="ourPhotos"
                    src="/src/assets/AnthonyPiñeyro.jpg"
                  />
                </div>
                <Col className="p-3 pt-5">
                  <h3>Anthony Piñeyro</h3>
                  <p className="aboutUs">
                    Me encargué principalmente de las animaciones, como las
                    transiciones, efectos al pasar el cursor, etc., asegurandome
                    de que las animaciones no afecten negativamente el
                    rendimiento de la aplicación. Esto lo hice apoyandomé en
                    herramientas externas que facilitaron la implemetación de
                    dichas animaciones.
                  </p>
                </Col>
              </Col>
              <Col className="d-flex" xs={12}>
                <Col className="p-3 pt-5">
                  <h3>Sofía Rovati</h3>
                  <p className="aboutUs">
                    Por mi parte, participé en el diseño UX/UI, para asegurar
                    que la interfaz sea fácil e intuitiva de usar, y que la
                    navegación y la interacción con la página web se integren
                    junto con la funcionalidad de la misma como se planeó.
                  </p>
                </Col>
                <div className="ourPhotosContainer">
                  <Image
                    className="ourPhotos"
                    src="/src/assets/SofíaRovati.jpg"
                  />
                </div>
              </Col>
              <Col className="d-flex" xs={12}>
                <div className="ourPhotosContainer">
                  <Image
                    className="ourPhotos"
                    src="/src/assets/DemianBrinvillePiquinela.jpg"
                  />
                </div>
                <Col className="p-3 pt-5">
                  <h3>Demian Brinville Piquinela</h3>
                  <p className="aboutUs">
                    Mis tareas fueron orientadas a las funcionalidades desde el
                    back-end. Implemente la comunicación entre el front-end y el
                    back-end, y mecanismos para autenticar usuarios y controlar
                    su acceso a diferentes partes de la aplicación. Esto incluye
                    la gestión de sesiones, tokens y permisos de usuario.
                  </p>
                </Col>
              </Col>
              <Col className="d-flex" xs={12}>
                <Col className="p-3 pt-5">
                  <h3>Alhena Latorre</h3>
                  <p className="aboutUs">
                    Me centre el la investigación en torno a los productos, y la
                    gestión de recursos multimedia y estáticos, además de la
                    maquetación de algunos sectores, asegurando la
                    compatibilidad en diferentes dispositivos y navegadores.
                  </p>
                </Col>
                <div className="ourPhotosContainer">
                  <Image
                    className="ourPhotos"
                    src="/src/assets/Alhena Latorre.jpg"
                  />
                </div>
              </Col>
            </Col>
          </Row>
        </section>
      </Container>
      <Footer />
    </>
  );
}
