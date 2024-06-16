import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function Login() {
  const notify = () => {
    toast.warn("En desarrollo");
  };

  return (
    <>
      <NavBar />
      <Container fluid className="body">
        <Row className="d-flex justify-content-center">
          <Col md={4}>
            <h2 className="text-center my-3">Iniciar sesión</h2>
            <Form
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Correo</Form.Label>
                <Form.Control type="email" placeholder="Ingrese su correo" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Ingrese su contraseña"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="checkbox">
                <Form.Check
                  type="checkbox"
                  label="Mantenerme conectado"
                />
              </Form.Group>

              <Button
                type="submit"
                className="ingresarBtn my-2 w-100"
                onClick={notify}
              >
                Ingresar
              </Button>

              <Link to={"/login"} onClick={notify}>
                Olvidé mi contraseña
              </Link>

              <Row>
                <Col className="py-2 d-flex flex-column">
                  <Button
                    type="button"
                    className="googleBtn my-2"
                    onClick={notify}
                  >
                    Ingresar con Google
                    <img
                      className="boton"
                      src="/src/assets/googleLogo.svg"
                      alt="Google Logo"
                    />
                  </Button>
                  <Button
                    type="button"
                    className="facebookBtn my-2"
                    onClick={notify}
                  >
                    Ingresar con Facebook
                    <img
                      className="boton"
                      src="/src/assets/facebookLogo.svg"
                      alt="Facebook Logo"
                    />
                  </Button>
                  <Button
                    type="button"
                    className="appleBtn my-2"
                    onClick={notify}
                  >
                    Ingresar con Apple
                    <img
                      className="boton"
                      src="/src/assets/appleLogo.svg"
                      alt="Apple Logo"
                    />
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
      <ToastContainer position="top-right" autoClose={3000} />
      <Footer />
    </>
  );
}
