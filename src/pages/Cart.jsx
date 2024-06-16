import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Container, Row, Col, Button, Image, Form, Card } from "react-bootstrap";

export default function Cart() {
  const [quantity, setQuantity] = useState(1);

  const notify = () => {
    toast.warn("En desarrollo");
  };
  
  const addQty = () => {
    setQuantity(quantity + 1);
  };

  const resQty = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <NavBar />
      <Container className="body">
        <div className="text-center mb-5">
          <h2>Cart</h2>
          <Link to={"/"} className="continueShopping">
            <span>
              Seguir explorando <i className="bi bi-shop"></i>
            </span>
          </Link>
        </div>
        <Row>
          <Col md={8}>
          <div className="d-flex">
            <Image
              src="https://www.sodanca.com/cdn/shop/files/BA26black-1_d1294b0d-fd2a-485c-baaa-3eb59bdf0983_540x.jpg?v=1697658027"
              className="cartProdImg me-3"
            />
            <div>
              <p className="m-0">Zapatilla para hombre</p>
              <p className="m-0">Color: Negro</p>
              <p className="pb-4 m-0">Precio: $35</p>
              <div className="d-flex m-2 qtyDiv">
                <button
                  variant="outline-secondary"
                  className="qtyBtn"
                  onClick={resQty}
                >
                  -
                </button>
                <p className="m-0 qtyNum">{quantity}</p>
                <button
                  variant="outline-secondary"
                  className="qtyBtn"
                  onClick={addQty}
                >
                  +
                </button>
              </div>
              <button variant="outline-danger" className="deleteFromCart" onClick={notify}>
                <i className="bi bi-trash"></i> Eliminar
              </button>
            </div>
            </div>
          </Col>
          <Col md={4} className="cartBox">
            <span>
              Notas <i className="bi bi-pen"></i>
            </span>
            <Form.Control as="textarea" className="my-3" />
            <div className="mb-3 d-flex justify-content-between">
              <span>Total:</span>
              <span>$35</span>
            </div>
            <Link className="w-100" to={"/checkout"}>
              <button className="comprarBtn py-1 w-100">
                <i className="bi bi-bag"></i> Comprar
              </button>
            </Link>
            <Form.Check
              className="mt-3"
              type="checkbox"
              id="giftCheckbox"
              label="Envolver para regalo"
              custom
            >
            <input
              className="form-check-input"
              type="checkbox"
              id="giftCheckbox"
            />
            <label className="form-check-label ms-2" for="giftCheckbox">
              Envolver para regalo <i class="bi bi-gift"></i>
            </label>
            </Form.Check>
          </Col>
        </Row>
      </Container>
      <ToastContainer position="top-right" autoClose={3000} />
      <Footer />
    </>
  );
}
