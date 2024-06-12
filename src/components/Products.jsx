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
      <Link to={`/product/${id.id}`} className="textStyleCard">
        <div className="productCard p-1 h-100">
          <img src={product.photo} className="w-100 mb-3 cardImg" />
          <div>
            <h5 className="text-center">{product.name}</h5>
            <p className="text-center m-0">
              <b>${product.price}</b>
            </p>
            <p className="text-center">
              <b>Stock: {product.stock}</b>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
