import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function Cart() {
  return (
    <>
      <NavBar />
      <div className="container body">
        <div className="row">
          <div className="col-8">
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                @
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>

            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <span className="input-group-text" id="basic-addon2">
                @example.com
              </span>
            </div>

            <div className="mb-3">
              <label for="basic-url" className="form-label">
                Your vanity URL
              </label>
              <div className="input-group">
                <span className="input-group-text" id="basic-addon3">
                  https://example.com/users/
                </span>
                <input
                  type="text"
                  className="form-control"
                  id="basic-url"
                  aria-describedby="basic-addon3 basic-addon4"
                />
              </div>
              <div className="form-text" id="basic-addon4">
                Example help text goes outside the input group.
              </div>
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text">$</span>
              <input
                type="text"
                className="form-control"
                aria-label="Amount (to the nearest dollar)"
              />
              <span className="input-group-text">.00</span>
            </div>

            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                aria-label="Username"
              />
              <span className="input-group-text">@</span>
              <input
                type="text"
                className="form-control"
                placeholder="Server"
                aria-label="Server"
              />
            </div>

            <div className="input-group">
              <span className="input-group-text">With textarea</span>
              <textarea
                className="form-control"
                aria-label="With textarea"
              ></textarea>
            </div>
          </div>
          <div classNameName="col-4">
            <h3>Resumen de compra</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Quibusdam, molestias. Cum maxime commodi eveniet debitis
              repellendus velit nulla aperiam error sint exercitationem deleniti
              architecto asperiores, placeat ducimus magni, tenetur quaerat.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
