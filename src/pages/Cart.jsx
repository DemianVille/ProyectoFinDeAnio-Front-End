import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Cart() {
  return (
    <>
      <NavBar />
      <div className="body container-fluid d-flex justify-content-center text-center">
        <div>
          <h2>Cart</h2>
          <Link to={"/"} className="continueShopping">
            <span>Seguir explorando</span>
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
            {/* contador */}
            {/* Eliminar */}
          </div>
          <div className="col-6">
            <span>Precio: $35</span>
          </div>
          <div className="col-12">
            <span>Notas</span>
            <textarea class="form-control"></textarea>
          </div>
          <div className="col-12 d-flex justify-content-space-between">
            <span>Total:</span>
            <span>$35</span>
            <button className="comprarBtn w-100 btn">Comprar</button>
          </div>
          <input class="form-check-input mt-0" type="checkbox" />{" "}
          <span>Envolver para regalo</span>
        </div>
      </div>
      <Footer />
    </>
  );
}
