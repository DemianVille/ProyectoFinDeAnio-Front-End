import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useParams, Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Container, Row, Col, Card, ListGroup, Button } from "react-bootstrap";
const url = import.meta.env.VITE_URL;

export default function Categories() {
  const [category, setCategory] = useState({});
  const [filterProducts, setFilterProducts] = useState([]);
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
  const params = useParams();

  const notify = () => {
    toast.warn("En desarrollo");
  };

  useEffect(() => {
    const getCategory = async () => {
      try {
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
          },
        };

        const response = await fetch(`${url}categories/${params.id}`, options);
        const categoryObject = await response.json();
        setCategory(categoryObject);
      } catch (err) {
        console.error(err);
      }
    };
    getCategory();
  }, [params.id]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
          },
        };

        const response = await fetch(`${url}products`, options);
        const allProductsObject = await response.json();
        setFilterProducts(
          allProductsObject.filter((product) => product.categoryId == params.id)
        );
      } catch (err) {
        console.error(err);
      }
    };
    getProducts();
  }, [params.id]);
  return (
    <>
      <NavBar />
      <Container className="body">
        <h1 className="my-3 text-center categoryName fontFlamenco">
          {category.name}
        </h1>
        <Row className="filterPosition">
          <Col md={3} className="p-0">
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
          <Col sm={12} md={9} lg={9} className="pt-3 pb-3">
            <div className="productsInfo">
              <p className="ms-1 d-flex align-items-center">
                <span className="fontRoboto productsQty me-1">
                  {filterProducts.length}
                </span>
                productos
              </p>
            </div>
            <Row>
              {filterProducts.map((product) => (
                <Col sm={12} md={6} lg={4} key={product.id} className="my-2">
                  <Link
                    to={`/productos/${product.id}`}
                    className="textStyleCard"
                  >
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
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
      <ToastContainer position="top-right" autoClose={3000} />
      <Footer />
    </>
  );
}
