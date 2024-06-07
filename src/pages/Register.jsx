import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Register() {
  return (
    <>
      <NavBar />
      <div className="body container">
        <div className="row d-flex">
          <div className="d-flex justify-content-center col-12">
            <form>
              <div className="row">
                <div className="col-12">
                  <div className="d-flex justify-content-center mb-2">
                    <h2>Registro</h2>
                  </div>

                  <div className=" mb-3">
                    <label for="username" className="form-label">
                      Nombre de usuario
                    </label>
                    <input
                      from="username"
                      type="text"
                      className="form-control"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <label for="name" className="form-label">
                    Nombre
                  </label>
                  <input
                    from="name"
                    type="text"
                    className="form-control mb-2"
                    aria-label="First name"
                  />
                  <label for="lastname" className="form-label">
                    Apellido
                  </label>
                  <input
                    from="lastname"
                    type="text"
                    className="form-control"
                    aria-label="Last name"
                  />
                  <label for="email" className="form-label">
                    E-mail
                  </label>
                  <input
                    from="email"
                    type="email"
                    className="form-control mb-2"
                    id="email"
                    aria-describedby="email"
                  />
                  <label for="address" className="form-label">
                    Dirección
                  </label>
                  <input
                    from="address"
                    type="text"
                    className="form-control mb-2"
                    id="address"
                    aria-describedby="address"
                  />
                  <label for="phone" className="form-label">
                    Teléfono
                  </label>
                  <input
                    from="phone"
                    type="number"
                    className="form-control mb-2"
                    id="phone"
                    aria-describedby="phone"
                  />
                  <label for="password" className="form-label">
                    Contraseña
                  </label>
                  <input
                    from="password"
                    type="password"
                    className="form-control mb-2"
                    id="password"
                  />
                  <label for="repeatPassword" className="form-label">
                    Repetir contraseña
                  </label>
                  <input
                    from="repeatPassword"
                    type="password"
                    className="form-control mb-2"
                    id="repeatPassword"
                  />
                  <div className="form-check"></div>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input mb-2"
                      id="politicsCheckbox"
                    />
                    <label
                      className="form-check-label mb-2"
                      for="politicsCheckbox"
                    >
                      Acepto la politica de cancelación de la empresa
                    </label>
                  </div>
                  <div classNameName="d-flex justify-content-center">
                    {" "}
                    <button type="submit" className="btn mt-2 w-100 crearBtn">
                      Crear cuenta
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
