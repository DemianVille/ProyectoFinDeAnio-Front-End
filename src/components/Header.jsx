import React from "react";
import { useState, useEffect } from "react";

export default function Header() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(null);

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
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
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
    </>
  );
}
