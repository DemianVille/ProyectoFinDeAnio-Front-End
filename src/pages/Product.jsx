import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function Product() {
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const params = useParams();

  const notify = () => {
    toast.warn("En desarrollo");
  };

  const addQty = () => {
    setQuantity(quantity + 1);
  };

  const resQty = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    const getProduct = async () => {
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
          `http://localhost:3000/products/${params.id}`,
          options
        );
        const allProductObject = await response.json();
        setProduct(allProductObject);
      } catch (err) {
        console.error(err);
      }
    };
    getProduct();
  }, []);

  return (
    <>
      <NavBar />
      <div className="container body">
        <div className="row pt-3 pb-3 mt-3 mb-3">
          <div className="col-8 ">
            <div className="w-100">
              <img src={product.photo} className="card-img h-100" />
            </div>
          </div>
          <div className="col-4">
            <h2 className="mb-3">{product.name}</h2>
            <p className="fontRoboto">${product.price}.00</p>
            <p>{product.description}</p>
            <hr />
            <div>
              <p>Colors -</p>
              <div className="d-flex">
                <div className="col-3 colorStyle" onClick={notify}>
                  <div className="color1"></div>
                </div>
                <div className="col-3 colorStyle" onClick={notify}>
                  <div className="color2"></div>
                </div>
                <div className="col-3 colorStyle" onClick={notify}>
                  <div className="color3"></div>
                </div>
              </div>
            </div>
            <p className="mt-3">Cantidad -</p>
            <div>
              <div className="d-flex qtyDiv">
                <button
                  className="qtyBtn"
                  onClick={() => {
                    resQty();
                  }}
                >
                  -
                </button>
                <p className="m-0 qtyNum fontRoboto">{quantity}</p>
                <button
                  className="qtyBtn"
                  onClick={() => {
                    addQty();
                  }}
                >
                  +
                </button>
              </div>
            </div>
            <button className="mt-4 w-100 addToCart" onClick={notify}>
              <b>Añadir al carro</b>
            </button>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
      <Footer />
    </>
  );
}
