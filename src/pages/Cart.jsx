import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

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
      <div className="body container">
        <div className="text-center mb-5">
          <h2>Cart</h2>
          <Link to={"/"} className="continueShopping">
            <span>
              Seguir explorando <i class="bi bi-shop"></i>
            </span>
          </Link>
        </div>
        <div className="row">
          <div className="col-8 d-flex">
            <div>
              <img
                src="https://www.sodanca.com/cdn/shop/files/BA26black-1_d1294b0d-fd2a-485c-baaa-3eb59bdf0983_540x.jpg?v=1697658027"
                className="cartProdImg me-3"
              />
            </div>
            <div>
              <p className="m-0">Zapatilla para hombre</p>
              <p className="m-0">Color: Negro</p>
              <p className="pb-4 m-0">Precio: $35</p>
              <div className="d-flex m-2 qtyDiv">
                <button
                  className="qtyBtn"
                  onClick={() => {
                    resQty();
                  }}
                >
                  -
                </button>
                <p className="m-0 qtyNum">{quantity}</p>
                <button
                  className="qtyBtn"
                  onClick={() => {
                    addQty();
                  }}
                >
                  +
                </button>
              </div>
              <button className="deleteFromCart" onClick={notify}>
                <i class="bi bi-trash"></i> Eliminar
              </button>
            </div>
          </div>
          <div className="col-4 cartBox">
            <span>
              Notas <i class="bi bi-pen"></i>
            </span>
            <textarea class="form-control my-3"></textarea>
            <div className="mb-3 d-flex justify-content-between">
              <span>Total:</span>
              <span>$35</span>
            </div>
            <Link className="w-100" to={"/checkout"}>
              <button className="comprarBtn w-100 btn">
                <i class="bi bi-bag"></i> Comprar
              </button>
            </Link>
            <div className="form-check mt-3">
              <input
                className="form-check-input"
                type="checkbox"
                id="giftCheckbox"
              />
              <label className="form-check-label" for="giftCheckbox">
                Envolver para regalo <i class="bi bi-gift"></i>
              </label>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
      <Footer />
    </>
  );
}
