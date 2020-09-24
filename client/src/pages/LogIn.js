import React from "react";
import { Carousel, FormLogin } from "../components";
import { Container, Row, Col } from "reactstrap";
import "../resources/LogIn.css";

const LogIn = ({history}) => {
  return (
    <Container mt-100>
      <Row>
        <Col sm="6" className="carousel">
          <Carousel className="carousel-inner" />
        </Col>
        <Col sm="6">
          <FormLogin history={history}/>
        </Col>
      </Row>
    </Container>
  );
};

export default LogIn;
