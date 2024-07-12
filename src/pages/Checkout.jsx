import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Footer from "../components/Footer";
import axios from "axios";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import { Container, Form, Row, Col } from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";

export default function Checkout() {
  const products = useSelector((state) => state.cart);
  const user = useSelector((state) => state.token.user);
  const token = useSelector((state) => state.token.token);
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [apartment, setApartment] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [postCode, setPostCode] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [userId, setUserId] = useState(0);

  const notify = () => {
    toast.warn("En desarrollo");
  };

  const initialValue = 0;
  const totalPrice = products.reduce(
    (acumulator, currentValue) =>
      acumulator + currentValue.price * currentValue.qty,
    initialValue
  );

  const addOrder = async () => {
    try {
      const options = {
        method: "POST",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: {
          products,
          address,
          userId,
        },
      };

      const response = await axios(`http://localhost:3000/orders`, options);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <NavBar />
      <Container className="body">
        <Row>
          <Col xs={12} lg={6}>
            <h2 className="text-center my-3">Checkout</h2>
            <Form
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >
              <Form.Group className="mb-3" controlId="card">
                <Form.Label>Número de tarjeta Tarjeta</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="XXXX-XXXX-XXXX-XXXX"
                  aria-label="Tarjeta"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Juan Perez"
                  aria-label="Nombre"
                />
              </Form.Group>
              <Row className="mb-3">
                <Col>
                  <Form.Label>Fecha de expiración</Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="Fecha de expiración"
                    aria-label="Expiración"
                  />
                </Col>
                <Col>
                  <Form.Label>CVV</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="123"
                    aria-label="CVV"
                  />
                </Col>
              </Row>
              <hr className="my-5" />
              <Form.Group className="mb-3" controlId="countrySelect">
                <Form.Label>País/Región</Form.Label>
                <Form.Select onChange={(e) => setCountry(e.target.value)}>
                  <option>Elige un país</option>
                  <option value="Uruguay">Uruguay</option>
                  <option value="Brasil">Brasil</option>
                  <option value="Colombia">Colombia</option>
                  <option value="Guyana">Guyana</option>
                  <option value="Surinam">Surinam</option>
                  <option value="Venezuela">Venezuela</option>
                  <option value="Bolivia">Bolivia</option>
                  <option value="Chile">Chile</option>
                  <option value="Ecuador">Ecuador</option>
                  <option value="Perú">Perú</option>
                  <option value="Argentina">Argentina</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="company">
                <Form.Control
                  type="text"
                  placeholder="Companía (opcional)"
                  aria-label="Companía"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="address">
                <Form.Control
                  type="text"
                  placeholder="Dirección"
                  aria-label="Dirección"
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="apartment">
                <Form.Control
                  type="text"
                  placeholder="Apartamento (opcional)"
                  aria-label="Apartamento"
                  value={apartment}
                  onChange={(e) => setApartment(e.target.value)}
                />
              </Form.Group>

              <Row className="mb-3">
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="Ciudad"
                    aria-label="Ciudad"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </Col>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="Código postal"
                    aria-label="Código postal"
                    value={postCode}
                    onChange={(e) => setPostCode(e.target.value)}
                  />
                </Col>
              </Row>

              <Form.Group className="mb-3" controlId="phone">
                <Form.Control
                  type="text"
                  placeholder="Teléfono"
                  aria-label="Teléfono"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
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
              <Link to={"/carrito"}>
                <button className="returnToCart">
                  <i className="bi bi-caret-left"></i> Volver al carrito
                </button>
              </Link>
              <button
                className="continueShoppingBtn"
                onClick={() => {
                  setUserId(user.id);
                  setAddress(
                    `${country} ${city} ${street} ${apartment} ${postCode}`
                  );
                  addOrder();
                }}
              >
                Terminar compra
              </button>
            </div>
          </Col>
          <Col xs={12} lg={6} className="mt-lg-5 p-3">
            {products.map((product) => {
              return (
                <div className="my-3 productInCheckout d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <div className="imgCheckout">
                      <img src={product.photo} className="w-100 h-100" alt="" />
                    </div>
                    <div className="ms-3">
                      <p>{product.name}</p>
                      <small>{product.color}</small>
                    </div>
                  </div>
                  <p className="my-0 me-3">${product.price}.00</p>
                </div>
              );
            })}
            <div className="d-flex justify-content-between mt-4">
              <h4>Total</h4>
              <h4>${totalPrice}.00</h4>
            </div>
          </Col>
        </Row>
      </Container>
      <ToastContainer position="top-right" autoClose={3000} />
      <Footer />
    </>
  );
}
