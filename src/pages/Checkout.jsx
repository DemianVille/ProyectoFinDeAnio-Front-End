import React from "react";
import { ToastContainer, toast } from "react-toastify";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

export default function Checkout() {
  const notify = () => {
    toast.warn("En desarrollo");
  };

  return (
    <>
      <NavBar />
      <Container className="body">
        <h2 className="text-center my-3">Carrito</h2>
        <Form
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <Form.Group className="mb-3" controlId="countrySelect">
            <Form.Label>País/Región</Form.Label>
            <Form.Select>
              <option value="Argentina">Uruguay</option>
              <option value="Brasil">Brasil</option>
              <option value="Colombia">Colombia</option>
              <option value="Guyana">Guyana</option>
              <option value="Surinam">Surinam</option>
              <option value="Venezuela">Venezuela</option>
              <option value="Bolivia">Bolivia</option>
              <option value="Chile">Chile</option>
              <option value="Ecuador">Ecuador</option>
              <option value="Perú">Perú</option>
              <option value="Uruguay">Argentina</option>
            </Form.Select>
          </Form.Group>

          <Row className="mb-3">
            <Col>
              <Form.Control
                type="text"
                placeholder="Nombre"
                aria-label="Nombre"
              />
            </Col>
            <Col>
              <Form.Control
                type="text"
                placeholder="Apellido"
                aria-label="Apellido"
              />
            </Col>
          </Row>

          <Form.Group className="mb-3" controlId="company">
            <Form.Control
              type="text"
              placeholder="Companía (Opcional)"
              aria-label="Companía"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="address">
            <Form.Control
              type="text"
              placeholder="Dirección"
              aria-label="Dirección"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="apartment">
            <Form.Control
              type="text"
              placeholder="Apartamento (Opcional)"
              aria-label="Apartamento"
            />
          </Form.Group>

          <Row className="mb-3">
            <Col>
              <Form.Control
                type="text"
                placeholder="Ciudad"
                aria-label="Ciudad"
              />
            </Col>
            <Col>
              <Form.Control
                type="text"
                placeholder="Código postal"
                aria-label="Código postal"
              />
            </Col>
          </Row>

          <Form.Group className="mb-3" controlId="phone">
            <Form.Control
              type="text"
              placeholder="Teléfono"
              aria-label="Teléfono"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="promotions">
            <Form.Check
              type="checkbox"
              label="Notificame por promociones"
            />
          </Form.Group>
        </Form>

        <div className="checkoutBtn mb-3">
          <Link to={"/cart"}>
            <Button className="returnToCart">
              <i className="bi bi-caret-left"></i> Volver al carrito
            </Button>
          </Link>
          <Link to={"/"}>
            <Button className="continueShoppingBtn">Continuar comprando</Button>
          </Link>
        </div>
      </Container>
      <ToastContainer position="top-right" autoClose={3000} />
      <Footer />
    </>
  );
}
