import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function NavBarHome() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [categories, setCategories] = useState([]);

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
            /*      Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOGEzZDhjOGZlMjRlNzlkMmJjN2IyZjYyMmRlMDU2MyIsInN1YiI6IjY2NDUzYmFhYTE3ZjJiYzVkNjJkNzc1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C6hY6n2PKJhRMxLnv2n0Fp57fvRLTtX3bsEW_ipnANE", */
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
      <nav className="navbar navPosition navShadow navbar-expand fontFlamenco">
        <div className="container-fluid">
          <Link to={"/"} className="homeInfo">
            <div className="logoInfo">
              <div className="logotipo">
                <img className="logoImg" src="/img/Logo.png" alt="" />
              </div>
              <h2 className="m-0 pageName fontPlaywrite">Copéllia</h2>
            </div>
          </Link>

          <div
            className="navbar-collapse navBarHome px-3"
            id="navbarSupportedContent"
          >
            <form
              className="d-flex"
              role="search"
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >
              <input
                className="inputNav"
                type="text"
                placeholder="Buscar"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success buttonNav"
                type="submit"
                onClick={notify}
              >
                <i class="bi bi-search"></i>
              </button>
            </form>
            <div className="categoryPosition w-100">
              {categories.map((category) => {
                return (
                  <div className="mx-4">
                    <Link
                      key={category.id}
                      className="linkLi categoriesNav"
                      to={`/category/${category.id}`}
                    >
                      <button className="styleButton w-100 p-2">
                        {category.name}
                      </button>
                    </Link>
                  </div>
                );
              })}
            </div>
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
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}
