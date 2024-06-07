import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState({});
  const params = useParams();
  const [filterProducts, setFilterProducts] = useState([]);

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
        console.log(allProductsObject[0].categoryId);
        setProducts(filterProducts);
      } catch (err) {
        console.error(err);
      }
    };
    getProducts();
  }, []);

  return (
    <>
      <NavBar />
      <div className="container body ">
        <div className="row pt-3 pb-3">
          <h4 className="p-0 col-4 d-flex justify-content-evenly">
            {categories.map((category) => {
              return (
                <button className="categoryItem">
                  <Link
                    key={category.id}
                    className="linkLi"
                    to={`/category/${category.id}`}
                  >
                    <p className="w-100 m-0 filterStyle">{category.name}</p>
                  </Link>
                </button>
              );
            })}
            <button className="categoryItem   ">Precio</button>
            <button className="categoryItem  ">Talle</button>
            <button className="categoryItem  ">Ofertas</button>
          </h4>
          {/*  <h4 className="unstyleList p-0  col-4 d-flex justify-content-evenly">
            <p className="filterStyle firstItem">Precio</p>
            <p className="filterStyle ">Talle</p>
            <p className="filterStyle lastItem">Ofertas</p>
          </h4> */}
        </div>
        <h3 className="mt-3 mb-3 text-center">{category.name}</h3>

        <div className="row border border-danger pt-3 pb-3 ">
          {filterProducts.map((product) => {
            return (
              <div className="col-3 my-2">
                <Link to={`/product/${product.id}`}>
                  <div className="card h-100 prodrctCard">
                    <img src={product.photo} class="card-img h-100" />
                    <div className="card-body productName">
                      <h5 className="card-title">{product.name}</h5>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}
