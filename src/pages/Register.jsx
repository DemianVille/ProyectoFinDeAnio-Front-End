import React from "react";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function Register() {
  const notify = () => {
    toast.warn("En desarrollo");
  };

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  useEffect(() => {
    const postUser = async () => {
      try {
        const options = {
          method: "POST",
          headers: {
            accept: "application/json",
          },
        };

        const response = await fetch(`http://localhost:3000/users`, options);
      } catch (err) {
        console.error(err);
      }
    };
    postUser();
  }, []);

  return (
    <>
      <NavBar />
      <Container className="body">
        <Row className="d-flex justify-content-center">
          <Col md={4}>
            <Form
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >
              <div className="text-center mb-3 mt-3">
                <h2>Registrarse</h2>
              </div>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="username">Nombre de usuario</Form.Label>
                <Form.Control
                  id="username"
                  type="text"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label htmlFor="name">Nombre</Form.Label>
                <Form.Control
                  id="name"
                  type="text"
                  aria-label="First name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label htmlFor="lastname">Apellido</Form.Label>
                <Form.Control
                  id="lastname"
                  type="text"
                  aria-label="Last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label htmlFor="email">E-mail</Form.Label>
                <Form.Control
                  id="email"
                  type="email"
                  aria-describedby="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label htmlFor="address">Dirección</Form.Label>
                <Form.Control
                  id="address"
                  type="text"
                  aria-describedby="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label htmlFor="phone">Teléfono</Form.Label>
                <Form.Control
                  id="phone"
                  type="text"
                  aria-describedby="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label htmlFor="password">Contraseña</Form.Label>
                <Form.Control
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label htmlFor="repeatPassword">
                  Repetir contraseña
                </Form.Label>
                <Form.Control
                  id="repeatPassword"
                  type="password"
                  value={repeatPassword}
                  onChange={(e) => setRepeatPassword(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Check
                  type="checkbox"
                  id="politicsCheckbox"
                  label="Recordar contraseña"
                />
              </Form.Group>
              <div className="d-flex justify-content-center">
                <button
                  type="submit"
                  className="mt-2 py-1 w-100 crearBtn"
                  onClick={notify}
                >
                  Crear cuenta
                </button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
      <ToastContainer position="top-right" autoClose={3000} />
      <Footer />
    </>
  );
}
