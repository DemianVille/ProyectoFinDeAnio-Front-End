import React, { useState, useEffect, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button, Container, Collapse } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

export default function NavBarHome() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [categories, setCategories] = useState([]);
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const notify = () => {
    toast.warn("En desarrollo");
  };

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

        const response = await fetch(`http://localhost:3000/categories`, options);
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
      <Navbar expand="lg" fixed="top" className="navbar navPosition navShadow fontFlamenco">
        <Container fluid>
          <Link to={"/"} className="homeInfo">
            <div className="logoInfo">
              <div className="logotipo">
                <img className="logoImg" src="/img/Logo.png" alt="" />
              </div>
              <h2 className="m-0 pageName fontPlaywrite">Copéllia</h2>
            </div>
          </Link>
          <Navbar.Toggle 
            aria-controls="navbarSupportedContent" 
            onClick={() => setIsNavCollapsed(!isNavCollapsed)}
          />
          <Collapse in={!isNavCollapsed}>
            <Navbar.Collapse id="navbarSupportedContent" className="navbar-collapse navBarHome px-3">
              
              <Nav className="categoryPosition w-100">
                {categories.map((category) => (
                  <div className="mx-4" key={category.id}>
                    <Link className="linkLi categoriesNav" to={`/category/${category.id}`}>
                      <button className="styleButton w-100 p-2">
                        {category.name}
                      </button>
                    </Link>
                  </div>
                ))}
              </Nav>
              <Form className="d-flex mx-5" role="search" onSubmit={(event) => event.preventDefault()}>
                <input
                  type="text"
                  placeholder="Buscar"
                  className="inputNav"
                  aria-label="Search"
                />
                <button className="buttonNav" type="submit" onClick={notify}>
                  <i className="bi bi-search"></i>
                </button>
              </Form>
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
                    <ul className={`dropDownPosition dropdown-menu${isDropdownOpen ? " show" : ""}`}>
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
                  <li className="nav-item ">
                    <Link className="nav-link" to={"/cart"}>
                      <i className="bi bi-basket-fill navIcon"></i>
                    </Link>
                  </li>
                </ul>
              </Nav>
            </Navbar.Collapse>
          </Collapse>
        </Container>
      </Navbar>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}
