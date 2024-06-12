import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function Login() {
  const notify = () => {
    toast.warn("En desarrollo");
  };

  return (
    <>
      <NavBar />
      <div className="body container-fluid">
        <div className="row d-flex justify-content-center">
          <div className="col-4">
            <h2 className="text-center my-3">Iniciar sesión</h2>
            <form
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >
              <div className="row d-flex">
                <div className="col-12 justify-content-center">
                  <div className="mb-3">
                    <label for="email" className="form-label">
                      Correo
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="mb-3">
                    <label for="password" className="form-label">
                      Contraseña
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                    />
                  </div>
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="checkbox"
                    />
                    <label className="form-check-label" for="checkbox">
                      Mantenerme conectado
                    </label>
                  </div>
                  <div className="col-12 d-flex flex-column">
                    <button
                      type="submit"
                      className="ingresarBtn btn my-2 w-100"
                      onClick={notify}
                    >
                      Ingresar
                    </button>
                  </div>

                  <Link to={"/login"} onClick={notify}>
                    Olvidé mi contraseña
                  </Link>

                  <div className="row">
                    <div className="col-12 py-2 d-flex flex-column">
                      <button
                        type="submit"
                        className="googleBtn btn my-2"
                        onClick={notify}
                      >
                        Ingresar con Google
                        <img
                          className="boton"
                          src="/src/assets/googleLogo.svg"
                          alt="Google Logo"
                        />
                      </button>
                      <button
                        type="submit"
                        className="facebookBtn btn my-2"
                        onClick={notify}
                      >
                        Ingresar con Facebook{" "}
                        <img
                          className="boton"
                          src="/src/assets/facebookLogo.svg"
                          alt="Facebook Logo"
                        />
                      </button>
                      <button
                        type="submit"
                        className="appleBtn btn my-2"
                        onClick={notify}
                      >
                        Ingresar con Apple{" "}
                        <img
                          className="boton"
                          src="/src/assets/appleLogo.svg"
                          alt="Apple Logo"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
      <Footer />
    </>
  );
}
