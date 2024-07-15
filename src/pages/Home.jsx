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
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const url = import.meta.env.VITE_URL;

export default function Home() {
  const [products, setProducts] = useState([]);
  const [xs, setXs] = useState("");
  const [s, setS] = useState("");
  const [m, setM] = useState("");
  const [l, setL] = useState("");
  const [xl, setXl] = useState("");
  const [foot36, setFoot36] = useState("");
  const [foot37, setFoot37] = useState("");
  const [foot38, setFoot38] = useState("");
  const [foot39, setFoot39] = useState("");
  const [foot40, setFoot40] = useState("");
  const [foot41, setFoot41] = useState("");
  const [precioAbierto, setPrecioAbierto] = useState(false);
  const [talleAbierto, setTalleAbierto] = useState(false);
  const [talleCalzadoAbierto, setTalleCalzadoAbierto] = useState(false);
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

        const response = await fetch(`${url}products`, options);
        const allProductsObject = await response.json();
        setProducts(allProductsObject);
      } catch (err) {
        console.error(err);
      }
    };
    getProducts();
  }, []);

  const notify = () => {
    toast.warn("En desarrollo");
  };

  const settings = {
    dots: false,
    infinite: true,
    accessibility: true,
    adaptiveHeight: true,
    arrows: true,
    draggable: true,
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
                src="/src/assets/CatHombresImg.png"
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
                src="/src/assets/CatDanzaImg.png"
              />
            </Link>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="m-0 w-100">
          <Slider {...settings} className="w-100 mt-4" afterChange={setIndex}>
            {products.map((product) => (
              <Link
                to={`/productos/${product.id}`}
                className="textStyleCard"
                key={product.id}
              >
                <div className="productCard p-1 h-100">
                  <img
                    src={product.photo}
                    className="w-100 mb-3 cardImg"
                    alt={product.name}
                  />
                  <div>
                    <h5 className="text-center fontFlamenco">{product.name}</h5>
                    <p className="text-center m-0 fontRoboto">
                      ${product.price}.00
                    </p>
                    <p className="text-center d-flex justify-content-center">
                      Stock:{" "}
                      <span className="fontRoboto ms-1">{product.stock}</span>
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </Slider>
        </Row>
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
              <strong className="imgSize fs-1">¡IDEALES PARA TI!</strong>
            </h2>
            <p className="mb-5 fs-5">Busca tu estilo ideal.</p>
            <Link to={"/categoria/1"}>
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
                        id="flexCheckDefault"
                        onClick={() => notify()}
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
                        id="flexCheckDefault"
                        onClick={() => notify()}
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
              <div className="filterStyle">
                <div
                  onClick={() => setTalleAbierto(!talleAbierto)}
                  style={{ cursor: "pointer" }}
                >
                  <p className="m-0">Talle (ropa)</p>
                </div>
                {talleAbierto && (
                  <div className="mt-2">
                    <button
                      onClick={() => {
                        if (xs === "selected") {
                          setXs("");
                        } else {
                          setXs("selected");
                          notify();
                        }
                      }}
                      className={`sizeBtn mx-1 ${
                        xs === "selected" && "selected"
                      }`}
                    >
                      XS
                    </button>
                    <button
                      onClick={() => {
                        if (s === "selected") {
                          setS("");
                        } else {
                          setS("selected");
                          notify();
                        }
                      }}
                      className={`sizeBtn mx-1 ${
                        s === "selected" && "selected"
                      }`}
                    >
                      S
                    </button>
                    <button
                      onClick={() => {
                        if (m === "selected") {
                          setM("");
                        } else {
                          setM("selected");
                          notify();
                        }
                      }}
                      className={`sizeBtn mx-1 ${
                        m === "selected" && "selected"
                      }`}
                    >
                      M
                    </button>
                    <button
                      onClick={() => {
                        if (l === "selected") {
                          setL("");
                        } else {
                          setL("selected");
                          notify();
                        }
                      }}
                      className={`sizeBtn mx-1 ${
                        l === "selected" && "selected"
                      }`}
                    >
                      L
                    </button>
                    <button
                      onClick={() => {
                        if (xl === "selected") {
                          setXl("");
                        } else {
                          setXl("selected");
                          notify();
                        }
                      }}
                      className={`sizeBtn mx-1 ${
                        xl === "selected" && "selected"
                      }`}
                    >
                      XL
                    </button>
                  </div>
                )}
              </div>
              <div className="filterStyle">
                <div
                  onClick={() => setTalleCalzadoAbierto(!talleCalzadoAbierto)}
                  style={{ cursor: "pointer" }}
                >
                  <p className="m-0">Talle (calzado)</p>
                </div>
                {talleCalzadoAbierto && (
                  <div className="mt-2">
                    <button
                      onClick={() => {
                        if (foot36 === "selected") {
                          setFoot36("");
                        } else {
                          setFoot36("selected");
                          notify();
                        }
                      }}
                      className={`sizeBtn mx-1 ${
                        foot36 === "selected" && "selected"
                      }`}
                    >
                      36
                    </button>
                    <button
                      onClick={() => {
                        if (foot37 === "selected") {
                          setFoot37("");
                        } else {
                          setFoot37("selected");
                          notify();
                        }
                      }}
                      className={`sizeBtn mx-1 ${
                        foot37 === "selected" && "selected"
                      }`}
                    >
                      37
                    </button>
                    <button
                      onClick={() => {
                        if (foot38 === "selected") {
                          setFoot38("");
                        } else {
                          setFoot38("selected");
                          notify();
                        }
                      }}
                      className={`sizeBtn mx-1 ${
                        foot38 === "selected" && "selected"
                      }`}
                    >
                      38
                    </button>
                    <button
                      onClick={() => {
                        if (foot39 === "selected") {
                          setFoot39("");
                        } else {
                          setFoot39("selected");
                          notify();
                        }
                      }}
                      className={`sizeBtn mx-1 ${
                        foot39 === "selected" && "selected"
                      }`}
                    >
                      39
                    </button>
                    <button
                      onClick={() => {
                        if (foot40 === "selected") {
                          setFoot40("");
                        } else {
                          setFoot40("selected");
                          notify();
                        }
                      }}
                      className={`sizeBtn mx-1 ${
                        foot40 === "selected" && "selected"
                      }`}
                    >
                      40
                    </button>
                    <button
                      onClick={() => {
                        if (foot41 === "selected") {
                          setFoot41("");
                        } else {
                          setFoot41("selected");
                          notify();
                        }
                      }}
                      className={`sizeBtn mx-1 ${
                        foot41 === "selected" && "selected"
                      }`}
                    >
                      41
                    </button>
                  </div>
                )}
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
