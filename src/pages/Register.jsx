import React from "react";
import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Register() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  useEffect(() => {
    const postUser = async () => {
      try {
        const options = {
          method: "POST",
          headers: {
            accept: "application/json",
          },
        };

        const response = await fetch(`http://localhost:3000/users`, options);
      } catch (err) {
        console.error(err);
      }
    };
    postUser();
  }, []);

  return (
    <>
      <NavBar />
      <div className="body d-flex justify-content-center">
        <form>
          <div className="text-center mb-2">
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
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label for="lastname" className="form-label">
            Apellido
          </label>
          <input
            from="lastname"
            type="text"
            className="form-control"
            aria-label="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <label for="phone" className="form-label">
            Teléfono
          </label>
          <input
            from="phone"
            type="text"
            className="form-control mb-2"
            id="phone"
            aria-describedby="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <label for="password" className="form-label">
            Contraseña
          </label>
          <input
            from="password"
            type="password"
            className="form-control mb-2"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label for="repeatPassword" className="form-label">
            Repetir contraseña
          </label>
          <input
            from="repeatPassword"
            type="password"
            className="form-control mb-2"
            id="repeatPassword"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
          <div className="form-check"></div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input mb-2"
              id="politicsCheckbox"
            />
            <label className="form-check-label mb-2" for="politicsCheckbox">
              Recordar contraseña
            </label>
          </div>
          <div classNameName="d-flex justify-content-center">
            <button
              type="submit"
              className="btn mt-2 w-100 crearBtn"
              onClick={() => {}}
            >
              Crear cuenta
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}
