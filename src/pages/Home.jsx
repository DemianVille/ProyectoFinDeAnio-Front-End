import React from "react";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Container, Row, Col, Image, Alert } from "react-bootstrap";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Products from "../components/Products";
import Header from "../components/Header";
import AboutThisProject from "../components/AboutThisProject";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import Slider from "react-slick";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [precioAbierto, setPrecioAbierto] = useState(false);
  const [talleAbierto, setTalleAbierto] = useState(false);
  const [ofertaAbierto, setOfertaAbierto] = useState(false);
  const [index, setIndex] = useState(0);

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
      <NavBar />
      <Header />
      <Container fluid>
        <Row className="mt-5 gx-2" data-aos="fade" data-aos-duration="1100">
          <Col xs={12} md={6} className="py-2 gap-2">
            <Link to={"/categoria/3"}>
              <Image
                className="subportada w-100"
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="1100"
                src="https://www.sodanca.com/cdn/shop/files/body-liners-q2_900x.jpg?v=1716232055"
              />
            </Link>
          </Col>
          <Col xs={12} md={6} className="py-2 gap-2">
            <Link to={"/categoria/2"}>
              <Image
                className="subportada w-100"
                data-aos="fade-right"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="1100"
                src="https://www.sodanca.com/cdn/shop/files/tights-square-1_900x.jpg?v=1714536944"
              />
            </Link>
          </Col>
        </Row>
        <Col className="d-flex justify-content-center slide" md={12}>
          <Slider
            className="lg:content-['no-slider']"
            index={index}
            onSlide={setIndex}
          >
            {products.map((product) => {
              return (
                <Link to={`/productos/${product.id}`} className="textStyleCard">
                  <div className="productCard p-1 h-100">
                    <img src={product.photo} className="w-100 mb-3 cardImg" />
                    <div>
                      <h5 className="text-center fontFlamenco">
                        {product.name}
                      </h5>
                      <p className="text-center m-0 fontRoboto">
                        ${product.price}.00
                      </p>
                      <p className="text-center d-flex justify-content-center">
                        Stock:{" "}
                        <p className="fontRoboto ms-1">{product.stock}</p>
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </Slider>
        </Col>
      </Container>
      <div className="imgflotante">
        <Alert
          variant="dark"
          className="text-center mt-5 mb-5 backportada"
          data-aos="fade"
          data-aos-duration="1100"
        >
          <div className="">
            <h2 className="mt-5 mb-5">
              <strong className="imgSize">¡IDEALES PARA TI!</strong>
            </h2>
            <p className="mb-5">Busca tu estilo ideal.</p>
            <Link to={"/categoria/3"}>
              <button className="headerBtn mb-5">PERSONALIZA TU ESTILO</button>
            </Link>
          </div>
        </Alert>
      </div>

      <div className="mx-2">
        <Row className="filterPosition w-100">
          <Col md={3} className="fontFlamenco ">
            <div className="categoriesDiv">
              <h5>Filtros</h5>
              <div className="filterStyle">
                <div
                  onClick={() => setPrecioAbierto(!precioAbierto)}
                  style={{ cursor: "pointer" }}
                >
                  Precio
                </div>
                {precioAbierto && (
                  <ul className="unstyleList p-0">
                    <div class="form-check pt-3">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        class="form-check-label px-2"
                        for="flexCheckDefault"
                      >
                        <p>Menor a Mayor</p>
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        class="form-check-label px-2"
                        for="flexCheckDefault"
                      >
                        <p>Mayor a Menor</p>
                      </label>
                    </div>
                  </ul>
                )}
              </div>
              <div
                className="filterStyle"
                onClick={() => setTalleAbierto(!talleAbierto)}
                style={{ cursor: "pointer" }}
              >
                <p className="m-0">Talle</p>
                {talleAbierto && <ul className="unstyleList p-0"></ul>}
              </div>
              <div
                className="filterStyle"
                onClick={() => setOfertaAbierto(!ofertaAbierto)}
                style={{ cursor: "pointer" }}
              >
                <p className="m-0">Ofertas</p>
                {!ofertaAbierto && <ul className="unstyleList p-0"></ul>}
              </div>
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
      </div>
      <AboutThisProject />
      <ToastContainer position="top-right" autoClose={3000} />
      <Footer />
    </>
  );
}
