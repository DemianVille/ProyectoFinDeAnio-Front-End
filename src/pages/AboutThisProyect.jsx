import React from "react";
import { useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Container, Row, Col, Button, Image, Alert } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutThisProyect() {
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
            <Col>
              <Image></Image>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                officia magnam pariatur optio voluptatibus perspiciatis tempora.
                Officiis ad cumque pariatur voluptatem eaque ab praesentium
                reiciendis quae?
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
                facilis, porro nemo iure quis dolor, maiores reiciendis eaque
                quisquam, sit nam et. Assumenda, delectus minima?
              </p>
              <Image></Image>
              <Image></Image>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
                voluptatem officiis ratione! In expedita voluptatum laborum
                quae? Esse, repellendus exercitationem.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                cum autem necessitatibus ipsum sunt rerum, dolores commodi
                mollitia consequatur incidunt distinctio asperiores, iusto,
                inventore pariatur ullam ex eligendi. Dolores, quam.
              </p>
              <Image></Image>
            </Col>
          </Row>
        </section>
      </Container>
      <Footer />
    </>
  );
}
