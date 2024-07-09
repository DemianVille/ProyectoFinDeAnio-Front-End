import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Container, Row, Col } from "react-bootstrap";

export default function User() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <NavBar />
      <Container className="body">
        <Row>
          <Col xs={2}>
            
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
