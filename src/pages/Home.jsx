import React from "react";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import NavBarHome from "../components/NavBarHome";
import Footer from "../components/Footer";
import Products from "../components/Products";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [products, setProducts] = useState([]);
  const [direction, setDirection] = useState(null);

  const notify = () => {
    toast.warn("En desarrollo");
  };

  const slides = [
    {
      imgSrc:
        "https://www.sodanca.com/cdn/shop/files/Tiler2-banner.jpg?v=1717042733&width=2400",
      captionTitle: "First slide label",
      captionText:
        "Some representative placeholder content for the first slide.",
    },
    {
      imgSrc:
        "https://www.sodanca.com/cdn/shop/files/kya-socks-details.jpg?v=1715798267&width=2400",
      captionTitle: "Second slide label",
      captionText:
        "Some representative placeholder content for the second slide.",
    },
  ];

  const nextSlide = () => {
    setDirection("next");
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection("prev");
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

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

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <NavBarHome />

      <div
        id="carouselExampleCaptions"
        class="carousel slide altura headerContainer"
      >
        <div class="carousel-indicators">
          {slides.map((bar, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`styleCarrouselBars ${
                index === activeIndex ? "activeBar" : ""
              }`}
              aria-current={index === activeIndex}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item ${
                index === activeIndex
                  ? "active"
                  : direction === "next"
                  ? "carousel-item-next carousel-item-left"
                  : direction === "prev"
                  ? "carousel-item-prev carousel-item-right"
                  : ""
              }`}
            >
              <img src={slide.imgSrc} className="w-100" alt="..." />
              <div className="carousel-caption h-100">
                <h5 className="textPostition">{slide.captionTitle}</h5>
                <p>{slide.captionText}</p>
              </div>
            </div>
          ))}
        </div>
        <button class="carousel-control-prev" type="button" onClick={prevSlide}>
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" onClick={nextSlide}>
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div className="d-flex justify-content-center">
        <h1>Header</h1>
      </div>
      <div className="container">
        <div>
          <h2>Imagen</h2>
          <h2>Promociones</h2>
        </div>
        <div className="row filterPosition">
          <div className="col-3">
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
          </div>
          <div className="col-9">
            <div className="row">
              {products.map((product) => {
                return <Products key={product.id} id={product.id} />;
              })}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
      <Footer />
    </>
  );
}
