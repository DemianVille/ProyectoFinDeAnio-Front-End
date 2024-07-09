import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export default function Header() {
  const slides = [
    {
      imgSrc:
        "https://www.sodanca.com/cdn/shop/files/Tiler2-banner.jpg?v=1717042733&width=2400",
      captionTitle: "NUEVAS MALLAS",
      captionText: "Echa un vistazo a la nueva colección de Copéllia",
      captionBtnText: "VER ROPA DE BAILE",
      captionLink: "/categoria/2",
    },
    {
      imgSrc:
        "https://www.sodanca.com/cdn/shop/files/kya-socks-details.jpg?v=1715798267&width=2400",
      captionTitle: "VARIEDAD DE ZAPATILLAS",
      captionText: "Encuentra las zapatillas ideales para ti",
      captionBtnText: "VER CALZADO",
      captionLink: "/categoria/1",
    },
  ];

  return (
    <Carousel className="headerContainer">
      {slides.map((slide, index) => (
        <Carousel.Item key={index}>
          <img
            src={slide.imgSrc}
            className="w-100"
            alt={`Slide ${index + 1}`}
          />
          <Carousel.Caption className="h-100">
            <h5 className="textPostition headerTitle">{slide.captionTitle}</h5>
            <p className="textPostition headerText">{slide.captionText}</p>
            <Link to={slide.captionLink}>
              <button className="headerBtn">{slide.captionBtnText}</button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
