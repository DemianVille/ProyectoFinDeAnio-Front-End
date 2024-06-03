import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function User() {
  return (
    <>
      <NavBar />
      <div className="container body">
        <div className="row">
          <div className="col-2">
            <div>Foto</div>
            <div>Apartados sidebar</div>
          </div>

          <div className="col-10">
            <div>nombre</div>
            <div className="row">
              <div className="col-6">hola</div>
              <div className="col-6">hola</div>
              <div className="col-6">hola</div>
              <div className="col-6">hola</div>
              <div className="col-6">hola</div>
              <div className="col-6">hola</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
