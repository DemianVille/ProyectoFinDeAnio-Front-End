import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBarHome from "../components/NavBarHome";
import Footer from "../components/Footer";
import Products from "../components/Products";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [direction, setDirection] = useState(null);

  const slides = [
    {
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Number_1_in_green_rounded_square.svg/1024px-Number_1_in_green_rounded_square.svg.png",
      captionTitle: "First slide label",
      captionText:
        "Some representative placeholder content for the first slide.",
    },
    {
      imgSrc:
        "https://img.freepik.com/vector-premium/3d-numero-2-dos-numero-signo-color-rojo_165488-5565.jpg",
      captionTitle: "Second slide label",
      captionText:
        "Some representative placeholder content for the second slide.",
    },
    {
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Eo_circle_blue_number-3.svg/2048px-Eo_circle_blue_number-3.svg.png",
      captionTitle: "Third slide label",
      captionText:
        "Some representative placeholder content for the third slide.",
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
    const getCategories = async () => {
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
          `http://localhost:3000/categories`,
          options
        );
        const allCategoriesObject = await response.json();
        setCategories(allCategoriesObject);
      } catch (err) {
        console.error(err);
      }
    };
    getCategories();
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

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <NavBarHome />
      <div className="container body">
        <div className="d-flex justify-content-center">
          <h1>Header</h1>
        </div>
        <div id="carouselExampleCaptions" class="carousel slide altura">
          <div class="carousel-indicators">
            {slides.map((_, index) => (
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
          <div class="carousel-inner">
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
          <button
            class="carousel-control-prev"
            type="button"
            onClick={prevSlide}
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            onClick={nextSlide}
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <div>
          <h2>Imagen</h2>
          <h2>Promociones</h2>
        </div>
        <div className="row">
          <div className="col-3 categoriesDiv">
            <h5>Categorias</h5>
            <ul className="unstyleList p-0">
              {categories.map((category) => {
                return (
                  <li className="categoryItem">
                    <Link
                      key={category.id}
                      className="linkLi"
                      to={`/category/${category.id}`}
                    >
                      <p className="w-100 m-0 filterStyle">{category.name}</p>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <h5>Filtros</h5>
            <ul className="unstyleList p-0">
              <li className="filterStyle firstItem">Precio</li>
              <li className="filterStyle ">Talle</li>
              <li className="filterStyle lastItem">Ofertas</li>
            </ul>
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
      <Footer />
    </>
  );
}
