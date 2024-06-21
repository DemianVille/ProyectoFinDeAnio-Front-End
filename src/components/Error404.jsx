import React from "react";
import NavBarHome from "./NavBarHome";
import Footer from "./Footer";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Error404() {
  return (
    <>
      <NavBarHome />
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
      </Container>
      <Footer />
    </>
  );
}
