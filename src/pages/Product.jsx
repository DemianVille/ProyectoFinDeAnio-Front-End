import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../redux/cartReducer";
const url = import.meta.env.VITE_URL;

export default function Product() {
  const token = useSelector((state) => state.token);
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
  const [size, setSize] = useState(null);
  const [product, setProduct] = useState([]);
  const [qty, setQty] = useState(1);
  const [selectedColor, setSelectedColor] = useState(null);
  const params = useParams();
  const dispatch = useDispatch();

  const notify = () => {
    toast.success("¡Producto agregado exitosamente!");
  };
  const sizeOrColor = () => {
    toast.warn("Selecciona un color y un talle");
  };
  const login = () => {
    toast.warn("Necesitas iniciar sesión para agregar productos al carrito");
  };

  const addQty = () => {
    setQty(qty + 1);
  };

  const resQty = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };

  const addToCart = async () => {
    dispatch(addProduct({ ...product, qty, color: selectedColor, size }));
  };

  useEffect(() => {
    const getProduct = async () => {
      try {
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
          },
        };

        const response = await fetch(`${url}products/${params.id}`, options);
        const allProductObject = await response.json();
        setProduct(allProductObject);
      } catch (err) {
        console.error(err);
      }
    };
    getProduct();
  }, []);

  return (
    product.colors && (
      <>
        <NavBar />
        <Container className="body">
          <Row className="pt-3 pb-3 mt-3 mb-3">
            <Col md={8}>
              <div className="w-100">
                <img
                  src={product.photo}
                  className="card-img h-100"
                  alt={product.name}
                />
              </div>
            </Col>
            <Col md={4}>
              <h2 className="mb-3">{product.name}</h2>
              <p className="fontRoboto">${product.price}.00</p>
              <p>{product.description}</p>
              <hr />
              <div>
                <p>Colors -</p>
                <div className="d-flex flex-wrap">
                  {product.colors.colors.map((color) => {
                    return (
                      <div
                        className={`colorStyle my-1 ${
                          selectedColor === color ? "selected" : ""
                        }`}
                        onClick={() => {
                          setSelectedColor(color);
                        }}
                      >
                        <div className={`productColor-${color}`}></div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="mt-2">
                <p>Talles -</p>
                <div className="d-flex flex-wrap">
                  {product.categoryId == 1 ? (
                    <div className="mt-2">
                      <button
                        onClick={() => {
                          setFoot36("selected");
                          setFoot37("");
                          setFoot38("");
                          setFoot39("");
                          setFoot40("");
                          setFoot41("");
                          setSize(36);
                        }}
                        className={`sizeBtn mx-1 ${
                          foot36 === "selected" && "selected"
                        }`}
                      >
                        36
                      </button>
                      <button
                        onClick={() => {
                          setFoot36("");
                          setFoot37("selected");
                          setFoot38("");
                          setFoot39("");
                          setFoot40("");
                          setFoot41("");
                          setSize(37);
                        }}
                        className={`sizeBtn mx-1 ${
                          foot37 === "selected" && "selected"
                        }`}
                      >
                        37
                      </button>
                      <button
                        onClick={() => {
                          setFoot36("");
                          setFoot37("");
                          setFoot38("selected");
                          setFoot39("");
                          setFoot40("");
                          setFoot41("");
                          setSize(38);
                        }}
                        className={`sizeBtn mx-1 ${
                          foot38 === "selected" && "selected"
                        }`}
                      >
                        38
                      </button>
                      <button
                        onClick={() => {
                          setFoot36("");
                          setFoot37("");
                          setFoot38("");
                          setFoot39("selected");
                          setFoot40("");
                          setFoot41("");
                          setSize(39);
                        }}
                        className={`sizeBtn mx-1 ${
                          foot39 === "selected" && "selected"
                        }`}
                      >
                        39
                      </button>
                      <button
                        onClick={() => {
                          setFoot36("");
                          setFoot37("");
                          setFoot38("");
                          setFoot39("");
                          setFoot40("selected");
                          setFoot41("");
                          setSize(40);
                        }}
                        className={`sizeBtn mx-1 ${
                          foot40 === "selected" && "selected"
                        }`}
                      >
                        40
                      </button>
                      <button
                        onClick={() => {
                          setFoot36("");
                          setFoot37("");
                          setFoot38("");
                          setFoot39("");
                          setFoot40("");
                          setFoot41("selected");
                          setSize(41);
                        }}
                        className={`sizeBtn mx-1 ${
                          foot41 === "selected" && "selected"
                        }`}
                      >
                        41
                      </button>
                    </div>
                  ) : (
                    <div className="mt-2">
                      <button
                        onClick={() => {
                          setXs("selected");
                          setS("");
                          setM("");
                          setL("");
                          setXl("");
                          setSize("XS");
                        }}
                        className={`sizeBtn mx-1 ${
                          xs === "selected" && "selected"
                        }`}
                      >
                        XS
                      </button>
                      <button
                        onClick={() => {
                          setXs("");
                          setS("selected");
                          setM("");
                          setL("");
                          setXl("");
                          setSize("S");
                        }}
                        className={`sizeBtn mx-1 ${
                          s === "selected" && "selected"
                        }`}
                      >
                        S
                      </button>
                      <button
                        onClick={() => {
                          setXs("");
                          setS("");
                          setM("selected");
                          setL("");
                          setXl("");
                          setSize("M");
                        }}
                        className={`sizeBtn mx-1 ${
                          m === "selected" && "selected"
                        }`}
                      >
                        M
                      </button>
                      <button
                        onClick={() => {
                          setXs("");
                          setS("");
                          setM("");
                          setL("selected");
                          setXl("");
                          setSize("L");
                        }}
                        className={`sizeBtn mx-1 ${
                          l === "selected" && "selected"
                        }`}
                      >
                        L
                      </button>
                      <button
                        onClick={() => {
                          setXs("");
                          setS("");
                          setM("");
                          setL("");
                          setXl("selected");
                          setSize("XL");
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
              </div>
              <p className="mt-3">Cantidad -</p>
              <div className="d-flex qtyDiv">
                <button className="qtyBtn" onClick={resQty}>
                  -
                </button>
                <p className="m-0 qtyNum fontRoboto">{qty}</p>
                <button
                  className="qtyBtn"
                  onClick={() => {
                    if (product.stock > qty) {
                      addQty();
                    }
                  }}
                >
                  +
                </button>
              </div>
              <button
                className="mt-4 w-100 addToCart"
                onClick={() => {
                  if (!size || !selectedColor) {
                    sizeOrColor();
                  } else if (!token) {
                    login();
                  } else {
                    addToCart();
                    notify();
                  }
                }}
              >
                <b>Añadir al carro</b>
              </button>
            </Col>
          </Row>
        </Container>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          className="notifyProduct"
        />
        <Footer />
      </>
    )
  );
}
