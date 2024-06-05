import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function AboutThisProyect() {
  return (
    <>
      <NavBar />
      <div className="container body">
        <header className="row">
          <div className="col-8">
            <h5></h5>
          </div>
          <div className="col-4">
            <img src="" alt="" />
          </div>
        </header>
        <section className="row">
          <div className="col-3">
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
          <div className="col-9">
            <p></p>
            <p></p>
            <p></p>
            <p></p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
