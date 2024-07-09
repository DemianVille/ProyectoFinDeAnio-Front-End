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
      <Container className="body">
        <header className="boutProjectBackground p-5">
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
                  parte del servidor (Back-End), se construyó una API utilizando
                  Node.js, junto con el framework Express para manejar las rutas
                  y solicitudes HTTP. Además, se integró una base de datos SQL
                  para la gestionar el almacenamiento de datos, también
                  utilizamos y GitHub para la gestión del código y la eficiente
                  colaboración de cada integrante en el proyecto.
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
                    data-aos-delay="2200"
                    data-aos-offset="500"
                    data-aos-duration="1100"
                    src="/src/assets/gifHomeAfter.gif"
                  />
                </div>
              </div>
            </Col>
          </Row>
          <div className="d-flex flex-column align-items-center logInAsAdimnBtn">
            <Link to={"http://localhost:5174/admin/login"}>
              <button className="loginAdmin py-2 px-3 mt-5">
                Ingresar como admin
              </button>
            </Link>
            <p className="adminTestUser pt-3 p-2">
              Admin test: admin@admin.uy - Password: 123
            </p>
            <p className="adminTestUser p-1">
              User test: test@user.uy - Password: 123
            </p>
          </div>
        </header>
        <section className="pt-5">
          <Row className="d-flex" id="aboutUs">
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                  suscipit voluptatibus quibusdam? Quas facere dolore quod
                  exercitationem accusamus quaerat possimus iure ut. Corporis
                  laboriosam molestias rerum voluptates. Repellendus, ea magnam?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minima non, dolores esse error quas molestias voluptatibus
                  excepturi placeat, voluptatum beatae, consectetur repellendus
                  quibusdam cum adipisci molestiae nihil officiis alias
                  repudiandae!
                </p>
              </Col>
            </Col>
            <Col className="d-flex" xs={12}>
              <Col className="p-3 pt-5">
                <h3>Sofía Rovati</h3>
                <p className="aboutUs">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
                  facilis, porro nemo iure quis dolor, maiores reiciendis eaque
                  quisquam, sit nam et. Assumenda, delectus minima? Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Porro hic ullam
                  in saepe quae eaque reprehenderit deserunt, dolor doloribus
                  rerum quas. Optio doloribus alias iusto provident illum eaque
                  quis magnam?
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
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
                  voluptatem officiis ratione! In expedita voluptatum laborum
                  quae? Esse, repellendus exercitationem. Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Laborum quo debitis
                  mollitia cupiditate optio, aperiam architecto ex minima rem
                  assumenda accusamus explicabo illum doloremque recusandae
                  repellat similique nulla ratione earum.
                </p>
              </Col>
            </Col>
            <Col className="d-flex" xs={12}>
              <Col className="p-3 pt-5">
                <h3>Alhena Latorre</h3>
                <p className="aboutUs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid cum autem necessitatibus ipsum sunt rerum, dolores
                  commodi mollitia consequatur incidunt distinctio asperiores,
                  iusto, inventore pariatur ullam ex eligendi. Dolores, quam.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Cumque repudiandae iste unde dignissimos fuga animi tenetur,
                  officiis, incidunt corrupti omnis dolorum molestiae sapiente
                  cupiditate in fugit nobis amet, magnam impedit.
                </p>
              </Col>
              <div className="ourPhotosContainer">
                <Image
                  className="ourPhotos"
                  src="/src/assets/Alhena Latorre.jpg"
                />
              </div>
            </Col>
          </Row>
        </section>
      </Container>
      <Footer />
    </>
  );
}
