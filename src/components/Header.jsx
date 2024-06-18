import React from "react";
import { Carousel } from "react-bootstrap";
import { toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Header() {
  const slides = [
    {
      imgSrc:
        "https://www.sodanca.com/cdn/shop/files/Tiler2-banner.jpg?v=1717042733&width=2400",
      captionTitle: "TILER PECK",
      captionText: "Revisa la colección Tiler Peck en Copéllia ahora",
    },
    {
      imgSrc:
        "https://www.sodanca.com/cdn/shop/files/kya-socks-details.jpg?v=1715798267&width=2400",
      captionTitle: "TILER PECK",
      captionText: "Revisa la colección Tiler Peck en Copéllia ahora",
    },
  ];

  const notify = () => {
    toast.warn("En desarrollo");
  };

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
            <p className="textPostition headerBrand">Nueva marca</p>
            <h5 className="textPostition headerTitle">{slide.captionTitle}</h5>
            <p className="textPostition headerText">{slide.captionText}</p>
            <button className="headerBtn" onClick={notify}>
              TILER PECK
            </button>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
