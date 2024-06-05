import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);

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
        const newProducts = allProductsObject;
        console.log(allProductsObject);

        setProducts(newProducts);
      } catch (err) {
        console.error(err);
      }
    };
    getProducts();
  }, []);

  return (
    <div className="row">
      {products.map((product) => {
        return (
          <div className="col-4">
            <div class="card">
              <img src={product.photo} class="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <Link to={"/"} className="btn btn-primary">
                  Comprar
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
