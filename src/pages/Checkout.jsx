import React from "react";
import { ToastContainer, toast } from "react-toastify";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

export default function Checkout() {
  const notify = () => {
    toast.warn("En desarrollo");
  };

  return (
    <>
      <NavBar />
      <div className="container body">
        <h2 className="text-center my-3">Carrito</h2>
        <form onSubmit={""}>
          <div className="mb-3">
            <label for="countrySelect" className="form-label">
              País/Región
            </label>
            <select id="countrySelect" className="form-select">
              <option value="Argentina">Uruguay</option>
              <option value="Brasil">Brasil</option>
              <option value="Colombia">Colombia</option>
              <option value="Guyana">Guyana</option>
              <option value="Surinam">Surinam</option>
              <option value="Venezuela">Venezuela</option>
              <option value="Bolivia">Bolivia</option>
              <option value="Chile">Chile</option>
              <option value="Ecuador">Ecuador</option>
              <option value="Perú">Perú</option>
              <option value="Uruguay">Argentina</option>
            </select>
          </div>
          <div className="mb-3 d-flex">
            <input
              type="text"
              className="form-control me-1"
              placeholder="Nombre"
              aria-label="Nombre"
              aria-describedby="basic-addon2"
            />
            <input
              type="text"
              className="form-control ms-1"
              placeholder="Apellido"
              aria-label="Apellido"
              aria-describedby="basic-addon2"
            />
          </div>
          <div className="mb-3">
            <input
              placeholder="Companía (Opcional)"
              type="text"
              className="form-control"
              id="basic-url"
              aria-describedby="basic-addon3 basic-addon4"
            />
          </div>
          <div className=" mb-3">
            <input
              type="text"
              className="form-control"
              aria-label="Amount (to the nearest dollar)"
              placeholder="Dirección"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Apartamento (Opcional)"
              aria-label="Username"
            />
          </div>
          <div className="mb-3 d-flex">
            <input
              type="text"
              className="form-control me-1"
              placeholder="Ciudad"
              aria-label="Nombre"
              aria-describedby="basic-addon2"
            />
            <input
              type="text"
              className="form-control ms-1"
              placeholder="Código postal"
              aria-label="Apellido"
              aria-describedby="basic-addon2"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Teléfono"
              aria-label="Username"
            />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="checkbox" />
            <label className="form-check-label" for="checkbox">
              Notificame por promociones
            </label>
          </div>
        </form>
        <div className="cheackoutBtn mb-3">
          <Link to={"/cart"}>
            <button className="returnToCart">
              <i class="bi bi-caret-left"></i> Volver al carrito
            </button>
          </Link>
          <Link to={"/"}>
            <button className="continueShoping">Continuar comprando</button>
          </Link>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
      <Footer />
    </>
  );
}
