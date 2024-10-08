import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
const url = import.meta.env.VITE_URL;

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

        const response = await fetch(`${url}products/${id.id}`, options);
        const allProductObject = await response.json();
        setProduct(allProductObject);
      } catch (err) {
        console.error(err);
      }
    };
    getProduct();
  }, []);
  return (
    <Col
      xs={12}
      sm={6}
      md={4}
      lg={3}
      className="my-2"
      data-aos="fade-up"
      data-aos-duration="1100"
      key={product.id}
    >
      <Link to={`/productos/${id.id}`} className="textStyleCard">
        <div className="productCard p-1 h-100">
          <img src={product.photo} className="w-100 mb-3 cardImg" />
          <div>
            <h5 className="text-center fontFlamenco">{product.name}</h5>
            <p className="text-center m-0 fontRoboto">${product.price}.00</p>
            <p className="text-center d-flex justify-content-center">
              Stock: <p className="fontRoboto ms-1">{product.stock}</p>
            </p>
          </div>
        </div>
      </Link>
    </Col>
  );
}
