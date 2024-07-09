import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function User() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <NavBar />
      <Container className="body">
        <Row>
          <Col xs={12}>
            <div className="text-center">
              <h2 className="mb-3">Perfil</h2>
            </div>
            <Form
              className="pt-3"
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >
              <Form.Group className="mb-2 d-flex">
                <Form.Label className="me-5 w-25" htmlFor="name">
                  Nombre
                </Form.Label>
                <Form.Control
                  className="ms-5"
                  id="name"
                  type="text"
                  aria-label="First name"
                  placeholder="Juan"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </Form.Group>
              <hr />
              <Form.Group className="mb-2 d-flex">
                <Form.Label className="me-5 w-25" htmlFor="lastname">
                  Apellido
                </Form.Label>
                <Form.Control
                  className="ms-5"
                  id="lastname"
                  type="text"
                  aria-label="Last name"
                  placeholder="Pancracio"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
              </Form.Group>
              <hr />
              <Form.Group className="mb-2 d-flex">
                <Form.Label className="me-5 w-25" htmlFor="email">
                  Email
                </Form.Label>
                <Form.Control
                  className="ms-5"
                  id="email"
                  type="email"
                  aria-describedby="email"
                  placeholder="juanpancracio@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <hr />
              <Form.Group className="mb-2 d-flex">
                <Form.Label className="me-5 w-25" htmlFor="address">
                  Dirección
                </Form.Label>
                <Form.Control
                  className="ms-5"
                  id="address"
                  type="text"
                  aria-describedby="address"
                  placeholder="Canelones 1162"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Form.Group>
              <hr />
              <Form.Group className="mb-2 d-flex">
                <Form.Label className="me-5 w-25" htmlFor="phone">
                  Teléfono
                </Form.Label>
                <Form.Control
                  className="ms-5"
                  id="phone"
                  type="text"
                  aria-describedby="phone"
                  placeholder="091234567"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Form.Group>
              <hr />
              <Form.Group className="mb-2 d-flex">
                <Form.Label className="me-5 w-25" htmlFor="password">
                  Contraseña
                </Form.Label>
                <Form.Control
                  className="ms-5"
                  id="password"
                  type="password"
                  placeholder="1234abcd"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <hr />
              <div className="d-flex justify-content-center">
                <button type="submit" className="mt-2 py-1 w-100 crearBtn">
                  Guardar cambios
                </button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
