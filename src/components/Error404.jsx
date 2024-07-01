import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Splide } from "@splidejs/react-splide";

export default function Error404() {
  return (
    <>
      <NavBar />
      <Container className="body">
        <Row>
          <Col className="col-12 text-center">
            <h2>Error 404</h2>
            <p>Esta página no existe</p>
            <Link to={"/"}>
              <button className="backToHomePage p-2">
                Volver a la página principal
              </button>
            </Link>
          </Col>
        </Row>
        <Row>
          <Splide />
        </Row>
      </Container>
      <Footer />
    </>
  );
}
