import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBarHome from "../components/NavBarHome";
import Footer from "../components/Footer";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
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
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

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
                className={index === activeIndex ? "active" : ""}
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
                  index === activeIndex ? "active" : ""
                }`}
              >
                <img src={slide.imgSrc} className="w-100" alt="..." />
                <div className="carousel-caption top-50">
                  <h5>{slide.captionTitle}</h5>
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
          <div className="col-3">
            <ul className="unstyleList">
              <h5>Categorias</h5>
              <li className="filterStyle">
                <Link className="linkLi" to={`/category`}>
                  Hombre
                </Link>
              </li>
              <li className="filterStyle">
                <Link className="linkLi" to={`/category`}>
                  Mujer
                </Link>
              </li>
              <li className="filterStyle">
                <Link className="linkLi" to={`/category`}>
                  Niño
                </Link>
              </li>
              <li className="filterStyle">
                <Link className="linkLi" to={`/category`}>
                  Calzado
                </Link>
              </li>
              <li className="filterStyle">
                <Link className="linkLi" to={`/category`}>
                  Merchandaising
                </Link>
              </li>
            </ul>
            <ul className="unstyleList">
              <h5>Filtros</h5>
              <li className="filterStyle">Precio</li>
              <li className="filterStyle">Talle</li>
              <li className="filterStyle">Ofertas</li>
            </ul>
          </div>
          <div className="col-9">
            <div className="row">
              <div className="col-4">
                {" "}
                <div class="card">
                  <img src="..." class="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-4">
                {" "}
                <div class="card">
                  <img src="..." class="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-4">
                {" "}
                <div class="card">
                  <img src="..." class="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-4">
                {" "}
                <div class="card">
                  <img src="..." class="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-4">
                {" "}
                <div class="card">
                  <img src="..." class="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-4">
                {" "}
                <div class="card">
                  <img src="..." class="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
