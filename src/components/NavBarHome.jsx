import React from "react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function NavBarHome() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      <nav class="navbar navPosition navbar-expand bg-body-tertiary">
        <div class="container-fluid">
          <div className=""></div>
          <Link to={"/home"}>
            <div className="pt-3 mx-3 d-flex">
              <img className="logotipo" src="/img/Logo.png" alt="" />
              <p>Nombre</p>
            </div>
          </Link>

          <div class="navbar-collapse navBarHome" id="navbarSupportedContent">
            <form class="d-flex" role="search">
              <input
                class="form-control inputNav"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success buttonNav" type="submit">
                Search
              </button>
            </form>
            <div>
              <ul class="navbar-nav mb-2">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Iniciar Sesion
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="">
                    Registrarse
                  </a>
                </li>
                <li className="nav-item dropdown" ref={dropdownRef}>
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    onClick={handleDropdownToggle}
                    aria-expanded={isDropdownOpen}
                  ></a>
                  <ul
                    className={`dropdown-menu${isDropdownOpen ? " show" : ""}`}
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Politica de Privacidad
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#"></a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Politica de cancelacion
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" aria-disabled="true">
                    Carrito
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
