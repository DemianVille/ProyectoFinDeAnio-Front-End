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
            <Col md={6}>
              <h2>Sobre este proyecto</h2>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                laudantium libero quod commodi deleniti praesentium est
                asperiores culpa earum, accusantium totam molestiae, corrupti,
                ducimus similique perferendis. Dolores rem unde asperiores?
              </p>
              <div>
                <Row>
                  <Col md={6}>
                    <Image className="" src="" alt="" fluid />
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md={4}>
              <Image src="" alt="" fluid />
            </Col>
          </Row>
        </header>
        <section></section>
      </Container>
      <Footer />
    </>
  );
}
