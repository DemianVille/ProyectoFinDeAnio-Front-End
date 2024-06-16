import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Container, Row, Col, Image } from "react-bootstrap";

export default function AboutThisProyect() {
  return (
    <>
      <NavBar />
      <Container className="body">
        <header>
          <Row>
            <Col md={8}>
              <h5></h5>
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
