import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function Product() {
  const [product, setProduct] = useState({});
  const params = useParams();

  useEffect(() => {
    const getProduct = async () => {
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
          `http://localhost:3000/products/${params.id}`,
          options
        );
        const allProductObject = await response.json();
        setProduct(allProductObject);
      } catch (err) {
        console.error(err);
      }
    };
    getProduct();
  }, []);

  return (
    <>
      <NavBar />
      <div className="container body">
        <div className="row pt-3 pb-3 mt-3 mb-3">
          <div className="col-8 ">
            <div class="card h-100">
              <img src={product.photo} class="card-img h-100" />
            </div>
          </div>
          <div className="col-4 border border-dark">
            <h2>{product.name}</h2>
            <div>
              <p>Colors</p>
              <div className="d-flex">
                <div className="col-3 border border-dark">R</div>
                <div className="col-3 border border-dark">G</div>
                <div className="col-3 border border-dark">B</div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 border border-dark">{product.description}</div>
        </div>
      </div>
      <Footer />
    </>
  );
}
