import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { Container, Row, Col, Image, Form } from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";
import { deleteProduct, addQty, subQty } from "../redux/cartReduser";

export default function Cart() {
  const products = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  return (
    <>
      <NavBar />
      <Container className="body">
        <div className="text-center mb-5">
          <h2>Carrito</h2>
          <Link to={"/"} className="continueShopping">
            <span>
              Seguir explorando <i className="bi bi-shop"></i>
            </span>
          </Link>
        </div>
        <div>
          {products.length === 0 ? (
            "No hay productos en el carrito"
          ) : (
            <Row>
              <Col md={8}>
                {products.map((product) => {
                  return (
                    <div className="d-flex mt-4">
                      <Image src={product.photo} className="cartProdImg me-3" />
                      <div>
                        <p className="m-0">{product.name}</p>
                        <p className="m-0">Color: Negro</p>
                        <p className="pb-4 m-0">Precio: ${product.price}.00</p>
                        <div className="d-flex m-2 qtyDiv">
                          <button
                            variant="outline-secondary"
                            className="qtyBtn"
                            onClick={() => {
                              if (quantity > 1) {
                                dispatch(subQty(product));
                              }
                            }}
                          >
                            -
                          </button>
                          <p className="m-0 qtyNum">{product.qty}</p>
                          <button
                            variant="outline-secondary"
                            className="qtyBtn"
                            onClick={() => {
                              if (quantity > 1) {
                                dispatch(addQty(product));
                              }
                            }}
                          >
                            +
                          </button>
                        </div>
                        <button
                          variant="outline-danger"
                          className="deleteFromCart"
                          onClick={() => {
                            dispatch(deleteProduct(product.id));
                          }}
                        >
                          <i className="bi bi-trash"></i> Eliminar
                        </button>
                      </div>
                    </div>
                  );
                })}
              </Col>
              <Col md={4} className="cartBox mt-4">
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
          )}
        </div>
      </Container>
      <Footer />
    </>
  );
}
