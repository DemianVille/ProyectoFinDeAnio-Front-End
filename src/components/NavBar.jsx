import React from "react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
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
      <nav className="navbar navPosition navbar-expand navShadow">
        <div className="container-fluid">
          <Link to={"/"} className="homeInfo">
            <div className="logoInfo">
              <div className="logotipo">
                <img className="logoImg" src="/img/Logo.png" alt="" />
              </div>
              <p className="m-0 pageName">Nombre</p>
            </div>
          </Link>
          <div className="navbar-collapse navBar" id="navbarSupportedContent">
            <div>
              <ul className="navbar-nav mb-2">
                <li className="nav-item dropdown" ref={dropdownRef}>
                  <p
                    className="nav-link m-0"
                    role="button"
                    onClick={handleDropdownToggle}
                    aria-expanded={isDropdownOpen}
                  >
                    <i className="bi bi-person-fill navIcon"></i>
                  </p>
                  <ul
                    className={`dropDownPosition dropdown-menu${
                      isDropdownOpen ? " show" : ""
                    }`}
                  >
                    <li className="nav-item dropDownItem">
                      <Link className="nav-link active" to={"/login"}>
                        Iniciar Sesion
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li className="nav-item dropDownItem">
                      <Link className="nav-link active" to={"/register"}>
                        Registrarse
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/cart"}>
                    <i className="bi bi-basket-fill navIcon"></i>
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
