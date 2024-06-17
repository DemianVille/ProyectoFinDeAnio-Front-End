import React from "react";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import NavBarHome from "../components/NavBarHome";
import Footer from "../components/Footer";
import Products from "../components/Products";
import Header from "../components/Header";
import { Container, Row, Col, Button, Image, Alert } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const [products, setProducts] = useState([]);

  const notify = () => {
    toast.warn("En desarrollo");
  };
  useEffect(() => {
    AOS.init();
  }, []);

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
      <div className="d-flex justify-content-evenly mt-5">
        <Row>
          <Col xs={6}>
            <Image
              className="subportada"
              data-aos="fade-right"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="1100"
              src="https://www.sodanca.com/cdn/shop/files/body-liners-q2_900x.jpg?v=1716232055"
              alt=""
              fluid
            />
          </Col>
          <Col xs={6}>
            <Image
              className="subportada"
              data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="1100"
              src="https://www.sodanca.com/cdn/shop/files/tights-square-1_900x.jpg?v=1714536944"
              alt=""
              fluid
            />
          </Col>
        </Row>
      </div>
      <div className="imgflotante">
        <Alert
          variant="dark"
          className="text-center mt-5 mb-5 backportada"
          data-aos="zoom-out-up"
          data-aos-duration="1100"
        >
          <div className="">
            <h2 className="mt-5 mb-5">
              <strong className="imgzize">IDEALES PARA TI!</strong>
            </h2>
            <p className="mb-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
            <button className="headerBtn mb-5">PERSONALIZA TUS ZAPATOS</button>
          </div>
        </Alert>
      </div>

      <Container>
        <Row className="filterPosition">
          <Col md={3} className="fontFlamenco">
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
          </Col>
          <Col md={9}>
            <Row>
              {products.map((product) => {
                return <Products key={product.id} id={product.id} />;
              })}
            </Row>
          </Col>
        </Row>
      </Container>
      <ToastContainer position="top-right" autoClose={3000} />
      <Footer />
    </>
  );
}
