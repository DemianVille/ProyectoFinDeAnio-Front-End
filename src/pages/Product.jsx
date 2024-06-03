import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function Product() {
  return (
    <>
      <NavBar />
      <div className="container body border border-primary">
        <div className="row border border-danger pt-3 pb-3 mt-3 mb-3">
          <div className="col-8 border border-dark ">
            <div class="card">
              <img src="..." class="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-4 border border-dark">
            <div>
              <p>Colors</p>
              <div className="d-flex">
                <div className="col-3 border border-dark">R</div>
                <div className="col-3 border border-dark">G</div>
                <div className="col-3 border border-dark">B</div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 border border-dark"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}
