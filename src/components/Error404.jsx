import React from "react";
import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const url = import.meta.env.VITE_URL;

export default function Error404() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            /* Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOGEzZDhjOGZlMjRlNzlkMmJjN2IyZjYyMmRlMDU2MyIsInN1YiI6IjY2NDUzYmFhYTE3ZjJiYzVkNjJkNzc1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C6hY6n2PKJhRMxLnv2n0Fp57fvRLTtX3bsEW_ipnANE", */
          },
        };

        const response = await fetch(`${url}products`, options);
        const allProductsObject = await response.json();
        setProducts(allProductsObject);
      } catch (err) {
        console.error(err);
      }
    };
    getProducts();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    accessibility: true,
    adaptiveHeight: true,
    arrows: true,
    draggable: true,
    slickPause: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <NavBar />
      <Container className="body">
        <Row>
          <Col className="col-12 text-center">
            <div className="fs-1">
              <p>
                <b>Error 404</b>
              </p>
              <p>Esta página no existe</p>
            </div>
            <Image src="/public/img/Ballerina.png" />
            <br />
            <Link to={"/"}>
              <button className="backToHomePage p-2 my-2">
                Volver a la página principal
              </button>
            </Link>
          </Col>
        </Row>
        <div className="fs-2 text-center mt-4">
          <p>¡Tal vez te interesen estos productos!</p>
        </div>
        <div className="w-100">
          <Container className="fluid">
            <Row className="m-0 w-100 pb-5">
              <Slider {...settings}>
                {products.map((product) => {
                  return (
                    <Link
                      to={`/productos/${product.id}`}
                      className="textStyleCard"
                    >
                      <div className="productCard p-1 h-100">
                        <img
                          src={product.photo}
                          className="w-100 mb-3 cardImg"
                        />
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
            </Row>
          </Container>
        </div>
      </Container>
      <Footer />
    </>
  );
}
