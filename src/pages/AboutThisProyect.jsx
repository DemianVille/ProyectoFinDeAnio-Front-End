import React from "react";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
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
        <header>
          <Row>
            <Col md={12} className="aboutProyect d-flex">
              <div>
                <h2>Sobre este proyecto</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam, architecto reiciendis! Deserunt veniam odit dolorem
                  quo, id non velit magnam debitis, vel porro fuga modi,
                  consequatur reprehenderit quisquam perspiciatis iusto.
                </p>
              </div>
              <div>
                <div className="imgHomeBefore">
                  <Image
                    className="w-50"
                    data-aos="fade-left"
                    data-aos-anchor="#example-anchor"
                    data-aos-offset="500"
                    data-aos-duration="1100"
                    src="/src/assets/homeAfter.jpg"
                  />
                </div>
              </div>
            </Col>
            <Col md={4}>
              <Image src="" alt="" fluid />
            </Col>
          </Row>
        </header>
        <section>
          <Row>
            <Col md={3}>
              <Image src="" alt="" fluid />
              <Image src="" alt="" fluid />
              <Image src="" alt="" fluid />
              <Image src="" alt="" fluid />
            </Col>
            <Col md={9}>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
            </Col>
          </Row>
        </section>
      </Container>
      <Footer />
    </>
  );
}
