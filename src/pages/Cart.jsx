import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";


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
      <div className="body container-fluid d-flex justify-content-center text-center">
        <div>
          <h2>Cart</h2>
          <Link to={"/"} className="continueShopping">
            <span>Seguir explorando <i class="bi bi-shop"></i></span>
          </Link>
        </div>
        <div className="row">
          <div className="col-6">
            <img
              src="https://www.sodanca.com/cdn/shop/files/BA26black-1_d1294b0d-fd2a-485c-baaa-3eb59bdf0983_540x.jpg?v=1697658027"
              className="cartProdImg"
            />
            <span>Zapatilla para hombre</span>
            <span>Color: Negro</span>
            <div className="d-flex qtyDiv">
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
              <button className="deleteFromCart btn" onClick={notify}><i class="bi bi-trash"></i> Eliminar</button>
          </div>
          <div className="col-6">
            <span>Precio: $35</span>
          </div>
          <div className="col-12">
            <span>Notas <i class="bi bi-pen"></i></span>
            <textarea class="form-control"></textarea>
          </div>
          <div className="col-12 d-flex justify-content-space-between">
            <span>Total:</span>
            <span>$35</span>
            <Link className="w-100" to={"/checkout"}>
              <button className="comprarBtn w-100 btn"><i class="bi bi-bag"></i> Comprar</button>
            </Link>
          </div>
          <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
    Envolver para regalo <i class="bi bi-gift"></i>
  </label>
</div>

        </div>
      </div>
      <Footer />
    </>
  );
}
