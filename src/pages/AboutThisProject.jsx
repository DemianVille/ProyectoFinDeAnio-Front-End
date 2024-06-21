import React from "react";
import { useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Container, Row, Col, Button, Image, Alert } from "react-bootstrap";
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
        <header className="pb-5">
          <Row>
            <Col xs={12} md={6} className="aboutProyect d-flex">
              <div className="pe-4">
                <h2>Sobre este proyecto</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam, architecto reiciendis! Deserunt veniam odit dolorem
                  quo, id non velit magnam debitis, vel porro fuga modi,
                  consequatur reprehenderit quisquam perspiciatis iusto.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt ut accusamus sequi maxime, earum id repellat corrupti
                  reiciendis perspiciatis, repellendus at fugit harum placeat
                  dolor adipisci necessitatibus recusandae dolorem quaerat!
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
        </header>
        <section className="pt-5">
          <Row className="d-flex">
            <Col className="d-flex" xs={12}>
              <div className="ourPhotosContainer">
                <Image
                  className="ourPhotos"
                  src="/src/assets/AnthonyPiñeyro.jpg"
                />
              </div>
              <Col className="p-3 pt-5">
                <h3>Anthony Piñeyro</h3>
                <p>
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
                <p>
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
                <p>
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
                <p>
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
                  src="/src/assets/FotoAlhenaProvisoria.jpg"
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
