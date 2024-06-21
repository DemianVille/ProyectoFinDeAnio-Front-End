import React, { useState, useEffect, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
  Collapse,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

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
      <Navbar expand="lg" fixed="top" className=" navShadow ">
        <Container fluid className="d-flex justify-content-between flex-wrap">
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
            <Navbar.Collapse
              id="navbarSupportedContent"
              className="navbar-collapse navBarHome px-3"
            >
              <Nav className="categoryPosition w-100">
                {categories.map((category) => (
                  <div className="mx-4" key={category.id}>
                    <Link
                      className="linkLi categoriesNav"
                      to={`/categoria/${category.id}`}
                    >
                      <button className="styleButton w-100 p-2">
                        {category.name}
                      </button>
                    </Link>
                  </div>
                ))}
              </Nav>
              {/*   <div> */}
              <Nav>
                <div className="d-flex justify-content-center align-items-center">
                  <Link
                    className="nav-link mx-1 active text-center"
                    to={"/iniciar-sesion"}
                  >
                    Iniciar sesión
                  </Link>
                  <Link
                    className="nav-link mx-1 active text-center"
                    to={"/registrarse"}
                  >
                    Registrarse
                  </Link>
                </div>
              </Nav>
              <div className="d-flex align-items-center">
                <div className="w-100 me-2">
                  <Form
                    className="d-flex"
                    role="search"
                    onSubmit={(event) => event.preventDefault()}
                  >
                    <input
                      type="text"
                      placeholder="Buscar"
                      className="inputNav w-100"
                      aria-label="Search"
                    />
                    <button
                      className="buttonNav"
                      type="submit"
                      onClick={notify}
                    >
                      <i className="bi bi-search"></i>
                    </button>
                  </Form>
                </div>
                <Nav>
                  <Link className="nav-link pb-2" to={"/carrito"}>
                    <i className="bi bi-bag-fill navIcon"></i>
                  </Link>
                </Nav>
              </div>
              {/*      </div> */}
            </Navbar.Collapse>
          </Collapse>
        </Container>
      </Navbar>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}
