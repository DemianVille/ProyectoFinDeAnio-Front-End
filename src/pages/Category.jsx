import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState({});
  const params = useParams();
  const [filterProducts, setFilterProducts] = useState([]);

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
            /*      Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOGEzZDhjOGZlMjRlNzlkMmJjN2IyZjYyMmRlMDU2MyIsInN1YiI6IjY2NDUzYmFhYTE3ZjJiYzVkNjJkNzc1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C6hY6n2PKJhRMxLnv2n0Fp57fvRLTtX3bsEW_ipnANE", */
          },
        };

        const response = await fetch(
          `http://localhost:3000/categories/${params.id}`,
          options
        );
        const categoryObject = await response.json();
        setCategory(categoryObject);
      } catch (err) {
        console.error(err);
      }
    };
    getCategory();
  }, []);

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
        setFilterProducts(
          allProductsObject.filter((product) => product.categoryId == params.id)
        );
        setProducts(filterProducts);
      } catch (err) {
        console.error(err);
      }
    };
    getProducts();
  }, [params.id]);

  return (
    <>
      <NavBar />
      <div className="container body ">
        <h3 className="mt-3 mb-3 text-center">{category.name}</h3>
        <div className="row">
          <div className="col-4 p-0">
            <button className="styleButton w-100 p-2">Precio</button>
          </div>
          <div className="col-4 p-0">
            <button className="styleButton w-100 p-2">Talle</button>
          </div>
          <div className="col-4 p-0">
            <button className="styleButton w-100 p-2">Ofertas</button>
          </div>
        </div>

        <div className="row pt-3 pb-3 ">
          {filterProducts.map((product) => {
            return (
              <div className="col-3 my-2">
                <Link to={`/product/${product.id}`} className="textStyleCard">
                  <div className="productCard p-1">
                    <img src={product.photo} className="w-100 mb-3 cardImg" />
                    <div>
                      <h5 className="text-center">{product.name}</h5>
                      <p className="text-center m-0">
                        <b>${product.price}</b>
                      </p>
                      <p className="text-center">
                        <b>Stock: {product.stock}</b>
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
      <Footer />
    </>
  );
}
