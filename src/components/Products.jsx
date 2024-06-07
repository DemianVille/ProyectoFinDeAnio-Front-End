import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Products(id) {
  const [product, setProduct] = useState({});

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
          `http://localhost:3000/products/${id.id}`,
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
    <div className="col-6 my-2 col-lg-4">
      <Link to={`/product/${id.id}`}>
        <div className="card h-100 prodrctCard">
          <img src={product.photo} className="card-img h-100" />
          <div className="card-body productName">
            <h5 className="card-title">{product.name}</h5>
          </div>
        </div>
      </Link>
    </div>
  );
}
