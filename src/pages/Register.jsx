import React from "react";
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const notify = () => {
    toast.warn("En desarrollo");
  };

  const navigate = useNavigate();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const postUser = async () => {
    try {
      const options = {
        method: "POST",
        data: {
          firstname,
          lastname,
          email,
          address,
          phone,
          password,
        },
      };

      const response = await axios(`http://localhost:3000/users`, options);
      if (response.data.message === "User created successfully.") {
        navigate("/ingresar");
      }
    } catch (err) {
      console.error(err);
    }
  };

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
              <Form.Group className="mb-2">
                <Form.Label htmlFor="name">Nombre</Form.Label>
                <Form.Control
                  id="name"
                  type="text"
                  aria-label="First name"
                  placeholder="Juan"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label htmlFor="lastname">Apellido</Form.Label>
                <Form.Control
                  id="lastname"
                  type="text"
                  aria-label="Last name"
                  placeholder="Pancracio"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label htmlFor="email">E-mail</Form.Label>
                <Form.Control
                  id="email"
                  type="email"
                  aria-describedby="email"
                  placeholder="juanpancracio@gmail.com"
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
                  placeholder="Canelones 1162"
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
                  placeholder="091234567"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label htmlFor="password">Contraseña</Form.Label>
                <Form.Control
                  id="password"
                  type="password"
                  placeholder="1234abcd"
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
                  placeholder="1234abcd"
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
                  onClick={() => {
                    if (password === repeatPassword) {
                      postUser();
                    }
                  }}
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
