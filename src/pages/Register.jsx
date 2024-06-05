import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Register() {
  return (
    <>
      <NavBar />
      <div className="body">
        <div className="container">
          <div className="row d-flex">
            <div className="d-flex justify-content-center col-12">
              <form>
                <div class="row">
                  <div className="col-12">
                    <div className="d-flex justify-content-center mb-2">
                      <h2>REGISTRO</h2>
                    </div>

                    <div class=" mb-3">
                      <label for="exampleInputEmail1" class="form-label">
                        Nombre de usuario
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder=""
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                    <label for="exampleInputEmail1" class="form-label">
                      Nombre
                    </label>
                    <input
                      type="text"
                      class="form-control mb-2"
                      placeholder=""
                      aria-label="First name"
                    />
                    <label for="exampleInputEmail1" class="form-label">
                      Apellido
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder=""
                      aria-label="Last name"
                    />
                    <label for="exampleInputEmail1" class="form-label">E-mail</label>
                    <input
                      type="email"
                      class="form-control mb-2"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder=""
                    />
                    <label
                      for="exampleInputPassword1"
                      class="form-label"
                    >Contraseña</label>
                    <input
                      type="password"
                      class="form-control mb-2"
                      id="exampleInputPassword1"
                      placeholder=""
                    />
                    <label
                      for="exampleInputPassword1"
                      class="form-label"
                    >Repetir contraseña</label>
                    <input
                      type="password"
                      class="form-control mb-2"
                      id="exampleInputPassword1"
                      placeholder=""
                    />
                    <div class=" form-check">
                      <input
                        type="checkbox"
                        class="form-check-input mb-2"
                        id="exampleCheck1"
                      />
                      <label class="form-check-label mb-2" for="exampleCheck1">
                        Mantenerme conectado
                      </label>
                    </div>
                    <div class=" form-check">
                      <input
                        type="checkbox"
                        class="form-check-input mb-2"
                        id="exampleCheck1"
                      />
                      <label class="form-check-label mb-2" for="exampleCheck1">
                        Acepto la plitica de cancelacion de la empresa
                      </label>
                    </div>
                    <div className="d-flex justify-content-center">
                      {" "}
                      <button
                        type="submit"
                        class="btn btn-primary mt-2 w-100"
                      >
                        Crear cuenta
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
