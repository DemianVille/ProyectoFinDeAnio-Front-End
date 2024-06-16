import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useParams, Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Container, Row, Col, Card, ListGroup, Button } from "react-bootstrap";

export default function Categories() {
  const [category, setCategory] = useState({});
  const [filterProducts, setFilterProducts] = useState([]);
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

        const response = await fetch(`http://localhost:3000/products`, options);
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
            <div className="categoriesDiv fontFlamenco">
              <h5>Filtros</h5>
              <ul className="unstyleList p-0">
                <li className="filterStyle firstItem" onClick={notify}>
                  Precio
                </li>
                <li className="filterStyle" onClick={notify}>
                  Talle
                </li>
                <li className="filterStyle lastItem" onClick={notify}>
                  Ofertas
                </li>
              </ul>
            </div>
          </Col>
          <Col md={9} className="pt-3 pb-3">
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
                <Col md={3} key={product.id} className="my-2">
                  <Link to={`/product/${product.id}`} className="textStyleCard">
                    <Card className="productCard p-1">
                      <Card.Img variant="top" src={product.photo} className="cardImg" />
                      <Card.Body>
                        <Card.Title className="text-center">{product.name}</Card.Title>
                        <Card.Text className="text-center m-0 fontRoboto">
                          ${product.price}
                        </Card.Text>
                        <Card.Text className="text-center d-flex justify-content-center">
                          Stock: 
                          <span className="fontRoboto ms-1">{product.stock}</span>
                        </Card.Text>
                      </Card.Body>
                    </Card>
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
