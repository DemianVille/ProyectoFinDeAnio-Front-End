import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteToken } from "../redux/tokenReduser";
import { Navbar, Nav, Container, Collapse } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

export default function NavBar() {
  const token = useSelector((state) => state.token);
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

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
      <Navbar expand="lg" fixed="top" className="navShadow">
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
            <Navbar.Collapse
              id="navbarSupportedContent"
              className="navbar-collapse navBar"
            >
              <Nav className="categoryPosition w-100">
                {categories.map((category) => (
                  <div className="mx-4" key={category.id}>
                    <Link className="linkLi" to={`/categoria/${category.id}`}>
                      <button className="styleButton categoriesNav w-100 p-2">
                        {category.name}
                      </button>
                    </Link>
                  </div>
                ))}
              </Nav>
              <Nav>
                {token === null ? (
                  <div className="d-flex justify-content-center align-items-center">
                    <Link
                      className="nav-link mx-2 p-0 active text-center userNavBtn"
                      to={"/ingresar"}
                    >
                      Ingresar
                    </Link>

                    <Link
                      className="nav-link mx-2 p-0 active text-center userNavBtn"
                      to={"/registrarse"}
                    >
                      Registrarse
                    </Link>
                  </div>
                ) : (
                  <div className="d-flex justify-content-center align-items-center">
                    <button
                      className="logoutBtn nav-link mx-2 p-0 active text-center userNavBtn"
                      onClick={() => dispatch(deleteToken())}
                    >
                      Cerrar sesión
                    </button>
                  </div>
                )}
              </Nav>
              <Nav>
                <Link className="nav-link cartNavBtn" to={"/carrito"}>
                  <i className="bi bi-bag-fill navIcon"></i>
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}
