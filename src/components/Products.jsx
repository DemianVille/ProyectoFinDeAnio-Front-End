import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Col, Card } from "react-bootstrap";

export default function Products({ id }) {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      try {
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
          },
        };

        const response = await fetch(
          `http://localhost:3000/products/${id}`,
          options
        );
        const allProductObject = await response.json();
        setProduct(allProductObject);
      } catch (err) {
        console.error(err);
      }
    };
    getProduct();
  }, [id]);

  return (
    <Col xs={12} md={6} lg={4} className="my-2">
      <Link to={`/product/${id}`} className="text-decoration-none">
        <Card className="productCard p-1 h-100">
          <Card.Img variant="top" src={product.photo} className="cardImg" />
          <Card.Body>
            <Card.Title className="text-center fontFlamenco">
              {product.name}
            </Card.Title>
            <Card.Text className="text-center m-0 fontRoboto">
              ${product.price}
            </Card.Text>
            <Card.Text className="text-center d-flex justify-content-center">
              Stock: <span className="fontRoboto ms-1">{product.stock}</span>
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
}
