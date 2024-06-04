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
      <nav class="navbar navPosition navShadow navbar-expand">
        <div class="container-fluid">
          <Link to={"/"} className="homeInfo">
            <div className="logoInfo">
              <div className="logotipo">
                <img className="logoImg" src="/img/Logo.png" alt="" />
              </div>
              <p className="m-0 pageName">Nombre</p>
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
                <li className="nav-item dropdown" ref={dropdownRef}>
                  <p
                    className="nav-link m-0"
                    role="button"
                    onClick={handleDropdownToggle}
                    aria-expanded={isDropdownOpen}
                  >
                    <i class="bi bi-person-fill navIcon"></i>
                  </p>
                  <ul
                    className={`dropDownPosition dropdown-menu${isDropdownOpen ? " show" : ""}`}
                  >
                    <li class="nav-item dropDownItem">
                      <Link class="nav-link active" to={"/login"}>
                        Iniciar Sesion
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li class="nav-item dropDownItem">
                      <Link class="nav-link active" to={"/register"}>
                        Registrarse
                      </Link>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to={"/cart"}>
                    <i class="bi bi-basket-fill navIcon"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
