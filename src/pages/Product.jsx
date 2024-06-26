import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { Container, Row, Col } from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../redux/cartReduser";

export default function Product() {
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const params = useParams();

  const dispatch = useDispatch();

  const notify = () => {
    toast.warn("En desarrollo");
  };

  const addQty = () => {
    setQuantity(quantity + 1);
  };

  const resQty = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addToCart = async () => {
    product.qty = quantity;
    dispatch(addProduct(product));
  };

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
    product.colors && (
      <>
        <NavBar />
        <Container className="body">
          <Row className="pt-3 pb-3 mt-3 mb-3">
            <Col md={8}>
              <div className="w-100">
                <img
                  src={product.photo}
                  className="card-img h-100"
                  alt={product.name}
                />
              </div>
            </Col>
            <Col md={4}>
              <h2 className="mb-3">{product.name}</h2>
              <p className="fontRoboto">${product.price}.00</p>
              <p>{product.description}</p>
              <hr />
              <div>
                <p>Colors -</p>
                <div className="d-flex flex-wrap">
                  {product.colors.colors.map((color) => {
                    return (
                      <div className="colorStyle my-1" onClick={notify}>
                        <div className={`productColor-${color}`}></div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <p className="mt-3">Cantidad -</p>
              <div className="d-flex qtyDiv">
                <button className="qtyBtn" onClick={resQty}>
                  -
                </button>
                <p className="m-0 qtyNum fontRoboto">{quantity}</p>
                <button className="qtyBtn" onClick={addQty}>
                  +
                </button>
              </div>
              <button
                className="mt-4 w-100 addToCart"
                onClick={() => addToCart()}
              >
                <b>Añadir al carro</b>
              </button>
            </Col>
          </Row>
        </Container>
        <ToastContainer position="top-right" autoClose={3000} />
        <Footer />
      </>
    )
  );
}
