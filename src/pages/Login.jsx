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
      <Container className="body">
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
                <Form.Control type="email" placeholder="ejemplo@gmail.com" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="1234abcd">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="1234abcd" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="checkbox">
                <Form.Check type="checkbox" label="Mantenerme conectado" />
              </Form.Group>

              <button
                type="submit"
                className="ingresarBtn loginBtns py-1 my-2 w-100"
                onClick={notify}
              >
                Ingresar
              </button>

              <Link to={"/login"} onClick={notify}>
                Olvidé mi contraseña
              </Link>

              <Row>
                <Col className="py-2 d-flex flex-column">
                  <button
                    type="button"
                    className="googleBtn loginBtns py-1 my-2"
                    onClick={notify}
                  >
                    Ingresar con Google
                    <img
                      className="boton"
                      src="/src/assets/googleLogo.svg"
                      alt="Google Logo"
                    />
                  </button>
                  <button
                    type="button"
                    className="facebookBtn loginBtns py-1 my-2"
                    onClick={notify}
                  >
                    Ingresar con Facebook
                    <img
                      className="boton"
                      src="/src/assets/facebookLogo.svg"
                      alt="Facebook Logo"
                    />
                  </button>
                  <button
                    type="button"
                    className="appleBtn loginBtns py-1 my-2"
                    onClick={notify}
                  >
                    Ingresar con Apple
                    <img
                      className="boton"
                      src="/src/assets/appleLogo.svg"
                      alt="Apple Logo"
                    />
                  </button>
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
