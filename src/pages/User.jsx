import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Container, Row, Col } from "react-bootstrap";

export default function User() {
  return (
    <>
      <NavBar />
      <Container className="body">
        <Row>
          <Col xs={2}>
            <div>Foto</div>
            <div>Apartados sidebar</div>
          </Col>

          <Col xs={10}>
            <div>nombre</div>
            <Row>
              <Col xs={6}>hola</Col>
              <Col xs={6}>hola</Col>
              <Col xs={6}>hola</Col>
              <Col xs={6}>hola</Col>
              <Col xs={6}>hola</Col>
              <Col xs={6}>hola</Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
