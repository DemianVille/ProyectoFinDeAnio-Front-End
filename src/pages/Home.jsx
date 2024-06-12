import React from "react";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import NavBarHome from "../components/NavBarHome";
import Footer from "../components/Footer";
import Products from "../components/Products";
import Header from "../components/Header";

export default function Home() {
  const [products, setProducts] = useState([]);

  const notify = () => {
    toast.warn("En desarrollo");
  };

  useEffect(() => {
    const getProducts = async () => {
      try {
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            /*      Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOGEzZDhjOGZlMjRlNzlkMmJjN2IyZjYyMmRlMDU2MyIsInN1YiI6IjY2NDUzYmFhYTE3ZjJiYzVkNjJkNzc1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C6hY6n2PKJhRMxLnv2n0Fp57fvRLTtX3bsEW_ipnANE", */
          },
        };

        const response = await fetch(`http://localhost:3000/products`, options);
        const allProductsObject = await response.json();
        setProducts(allProductsObject);
      } catch (err) {
        console.error(err);
      }
    };
    getProducts();
  }, []);

  return (
    <>
      <NavBarHome />
      <Header />
      <div className="container mt-2">
        <div>
          <h2>Imagen</h2>
          <h2>Promociones</h2>
        </div>
        <div className="row filterPosition">
          <div className="col-3">
            <div className="categoriesDiv">
              <h5>Filtros</h5>
              <ul className="unstyleList p-0">
                <li className="filterStyle firstItem" onClick={notify}>
                  Precio
                </li>
                <li className="filterStyle" onClick={notify}>
                  Talle
                </li>
                <li className="filterStyle lastItem" onClick={notify}>
                  Ofertas
                </li>
              </ul>
            </div>
          </div>
          <div className="col-9">
            <div className="row">
              {products.map((product) => {
                return <Products key={product.id} id={product.id} />;
              })}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
      <Footer />
    </>
  );
}
