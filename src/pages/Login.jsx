import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import axios from "axios";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { Container, Row, Col, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { createToken } from "../redux/tokenReducer";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const notify = () => {
    toast.warn("En desarrollo");
  };

  const navigate = useNavigate();

  const token = useSelector((state) => state.token);
  const dispatch = useDispatch();

  const addToken = async () => {
    try {
      const options = {
        method: "POST",
        data: {
          email,
          password,
        },
      };

      const response = await axios(`http://localhost:3000/tokens`, options);
      if (response.data.token && response.data.user) {
        dispatch(createToken(response.data));
        navigate("/");
      } else {
        setMsg(response.data.message);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <NavBar />
      <Container className="body">
        <Row className="d-flex flex-column align-items-center">
          <Col md={4}>
            <h2 className="text-center my-3">Ingresar</h2>
            <Form
              onSubmit={(event) => {
                event.preventDefault();
                if (email !== "" && password !== "") addToken();
              }}
            >
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Correo</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="test@user.uy"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="123"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="checkbox">
                <Form.Check type="checkbox" label="Mantenerme conectado" />
              </Form.Group>

              {msg === "This user doesn't exist." && (
                <div className="mb-2">
                  <span className="invalidUser p-2">
                    Correo o contraseña incorrecto
                  </span>
                </div>
              )}

              <button
                type="submit"
                className="ingresarBtn loginBtns py-1 my-2 w-100"
              >
                Ingresar
              </button>

              <Link to={"/ingresar"} onClick={notify}>
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
          <Col md={4} className="my-5">
            <p>
              <b>Usuario de prueba</b>
            </p>
            <p>
              Para simplificar el acceso a la aplicación, se proporciona el
              siguiente usuario de prueba:
            </p>
            <ul>
              <li>E-mail: test@user.uy</li>
              <li>Contraseña: 123</li>
            </ul>
          </Col>
        </Row>
      </Container>
      <ToastContainer position="top-right" autoClose={3000} />
      <Footer />
    </>
  );
}
