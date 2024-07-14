import React from "react";
import axios from "axios";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { ToastContainer, toast } from "react-toastify";
import { useState, useEffect } from "react";
import { Container, Row, Col, Form, Modal } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { deleteToken } from "../redux/tokenReducer";
import { Link, useNavigate } from "react-router-dom";
const url = import.meta.env.VITE_URL;

export default function User() {
  const [show, setShow] = useState(false);
  const [msg, setMsg] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const token = useSelector((state) => state.token.token);
  const user = useSelector((state) => state.token.user);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const notify = () => {
    toast.warn("No puedes eliminar este usuario");
  };

  const saved = () => {
    toast.success("¡Cambios guardados exitosamente!");
  };

  const editUser = async () => {
    try {
      const options = {
        method: "PATCH",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: {
          firstname,
          lastname,
          email,
          address,
          phone,
          password,
        },
      };

      const response = await axios(`${url}users/${user.id}`, options);
      setMsg(response.data.message);
    } catch (err) {
      console.error(err);
    }
  };
  const deleteUser = async () => {
    try {
      const options = {
        method: "DELETE",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios(`${url}users/${user.id}`, options);
      setDeleteItem(response.data.message);
    } catch (err) {
      handleClose();
    }
  };

  return (
    <>
      <NavBar />
      <div expand="lg" className="p-0 m-0 d-flex justify-content-end logoutBtn">
        <button
          className=" nav-link mx-2 p-0 active"
          onClick={() => {
            navigate("/");
            dispatch(deleteToken());
          }}
        >
          Cerrar sesión <i class="bi bi-box-arrow-right"></i>
        </button>
      </div>
      <Container className="body">
        <Row>
          <Col xs={12}>
            <div className="text-center">
              <h2 className="mb-3">Perfil</h2>
            </div>
            <Form
              className="pt-3"
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >
              <Form.Group className="mb-2 d-flex">
                <Form.Label className="me-5 w-25" htmlFor="name">
                  Nombre
                </Form.Label>
                <Form.Control
                  className="ms-5"
                  id="name"
                  type="text"
                  aria-label="First name"
                  placeholder={user.firstname}
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </Form.Group>
              <hr />
              <Form.Group className="mb-2 d-flex">
                <Form.Label className="me-5 w-25" htmlFor="lastname">
                  Apellido
                </Form.Label>
                <Form.Control
                  className="ms-5"
                  id="lastname"
                  type="text"
                  aria-label="Last name"
                  placeholder={user.lastname}
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
              </Form.Group>
              <hr />
              <Form.Group className="mb-2 d-flex">
                <Form.Label className="me-5 w-25" htmlFor="email">
                  Email
                </Form.Label>
                <Form.Control
                  className="ms-5"
                  id="email"
                  type="email"
                  aria-describedby="email"
                  placeholder={user.email}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <hr />
              <Form.Group className="mb-2 d-flex">
                <Form.Label className="me-5 w-25" htmlFor="address">
                  Dirección
                </Form.Label>
                <Form.Control
                  className="ms-5"
                  id="address"
                  type="text"
                  aria-describedby="address"
                  placeholder={user.address}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Form.Group>
              <hr />
              <Form.Group className="mb-2 d-flex">
                <Form.Label className="me-5 w-25" htmlFor="phone">
                  Teléfono
                </Form.Label>
                <Form.Control
                  className="ms-5"
                  id="phone"
                  type="text"
                  aria-describedby="phone"
                  placeholder={user.phone}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Form.Group>
              <hr />
              <Form.Group className="mb-2 d-flex">
                <Form.Label className="me-5 w-25" htmlFor="password">
                  Contraseña
                </Form.Label>
                <Form.Control
                  className="ms-5"
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <hr />
              <div className="checkoutBtn mb-3">
                <Link to={"/"}>
                  <button className="returnToCart">
                    <i className="bi bi-caret-left"></i> Volver al inicio
                  </button>
                </Link>
                <div>
                  <button
                    className="mt-3 py-1 mx-2 deleteUserBtn"
                    onClick={handleShow}
                  >
                    <small>Eliminar cuenta</small>
                  </button>
                  <button
                    className="py-1 continueShoppingBtn"
                    onClick={async () => {
                      editUser();
                      saved();
                    }}
                  >
                    <small>Guardar cambios</small>
                  </button>
                </div>
              </div>
              <div className="d-flex justify-content-end"></div>
            </Form>
          </Col>
        </Row>
      </Container>
      <Footer />
      <Modal show={show}>
        <Modal.Body>
          <h2 className="text-center">
            ¿Seguro que quieres eliminar esta cuenta?
          </h2>
        </Modal.Body>
        <Modal.Footer>
          <div className="w-100 d-flex align-items-center justify-content-between">
            <button
              className="mt-2 py-1 deleteUserBtn"
              onClick={() => {
                if (user.id != 1) {
                  navigate("/");
                  deleteUser();
                  dispatch(deleteToken());
                } else {
                  notify();
                }
              }}
            >
              <small>Eliminar</small>
            </button>
            <button className="mt-2 p-2 crearBtn" onClick={handleClose}>
              Cancelar
            </button>
          </div>
        </Modal.Footer>
      </Modal>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}
