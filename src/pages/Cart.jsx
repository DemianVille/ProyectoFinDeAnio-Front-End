import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container, Row, Col, Image, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteProduct,
  addOne,
  decreaseOne,
  cleanCart,
} from "../redux/cartReducer";
import { ToastContainer, toast } from "react-toastify";

export default function Cart() {
  const products = useSelector((state) => state.cart);
  const token = useSelector((state) => state.token);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialValue = 0;
  const totalPrice = products.reduce(
    (acumulator, currentValue) =>
      acumulator + currentValue.price * currentValue.qty,
    initialValue
  );

  const notify = () => {
    toast.warn("¡Debes iniciar sesión para realizar una compra!");
  };

  useEffect(() => {
    if (!token) {
      dispatch(cleanCart());
    }
  }, [token]);

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
                        <p className="m-0">Color: {product.color}</p>
                        <p className="m-0">Talle: {product.size}</p>
                        <p className="pb-4 m-0">Precio: ${product.price}.00</p>
                        <div className="d-flex m-2 qtyDiv">
                          <button
                            variant="outline-secondary"
                            className="qtyBtn"
                            onClick={() => {
                              dispatch(decreaseOne(product));
                            }}
                          >
                            -
                          </button>
                          <p className="m-0 qtyNum">{product.qty}</p>
                          <button
                            variant="outline-secondary"
                            className="qtyBtn"
                            onClick={() => {
                              dispatch(addOne(product));
                            }}
                          >
                            +
                          </button>
                        </div>
                        <button
                          variant="outline-danger"
                          className="deleteFromCart"
                          onClick={() => {
                            dispatch(deleteProduct(product));
                          }}
                        >
                          <i className="bi bi-trash"></i> Eliminar
                        </button>
                      </div>
                    </div>
                  );
                })}
              </Col>
              <Col md={4} className="mt-4 p-0">
                <div className="cartBox">
                  <span>
                    Notas <i className="bi bi-pen"></i>
                  </span>
                  <Form.Control as="textarea" className="my-3" />
                  <div className="mb-3 d-flex justify-content-between">
                    <span>Total:</span>
                    <span>${totalPrice}.00</span>
                  </div>
                  <button
                    className="comprarBtn py-1 w-100"
                    onClick={() => {
                      if (!token) {
                        notify();
                      } else {
                        navigate("/checkout");
                      }
                    }}
                  >
                    <i className="bi bi-bag"></i> Comprar
                  </button>
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
                </div>
              </Col>
            </Row>
          )}
        </div>
      </Container>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        className="notifyProduct"
      />
      <Footer />
    </>
  );
}
