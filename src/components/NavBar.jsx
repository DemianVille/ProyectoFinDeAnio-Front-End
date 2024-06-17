import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Button,
  Collapse,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function NavBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [categories, setCategories] = useState([]);
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

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

  useEffect(() => {
    const getCategories = async () => {
      try {
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
          },
        };

        const response = await fetch(
          `http://localhost:3000/categories`,
          options
        );
        const allCategoriesObject = await response.json();
        setCategories(allCategoriesObject);
      } catch (err) {
        console.error(err);
      }
    };
    getCategories();
  }, []);

  return (
    <>
      <Navbar
        expand="lg"
        fixed="top"
        className="navPosition navShadow fontFlamenco"
      >
        <Container fluid>
          <Link to={"/"} className="homeInfo navbar-brand">
            <div className="logoInfo">
              <div className="logotipo">
                <img className="logoImg" src="/img/Logo.png" alt="Logo" />
              </div>
              <h2 className="m-0 pageName fontPlaywrite">Copéllia</h2>
            </div>
          </Link>
          <Navbar.Toggle
            aria-controls="navbarSupportedContent"
            onClick={() => setIsNavCollapsed(!isNavCollapsed)}
          />
          <Collapse in={!isNavCollapsed}>
            <Navbar.Collapse
              id="navbarSupportedContent"
              className="navbar-collapse navBar"
            >
              <Nav className="categoryPosition w-100">
                {categories.map((category) => (
                  <div className="mx-4" key={category.id}>
                    <Link
                      className="linkLi categoriesNav"
                      to={`/category/${category.id}`}
                    >
                      <button className="styleButton w-100 p-2">
                        {category.name}
                      </button>
                    </Link>
                  </div>
                ))}
              </Nav>
              <Nav>
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
                      <i className="bi bi-handbag-fill navIcon"></i>
                    </Link>
                  </li>
                </ul>
              </Nav>
            </Navbar.Collapse>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}
