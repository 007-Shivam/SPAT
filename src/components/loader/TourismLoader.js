import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import CarGif from "../../assets/car.gif";

export default function PropertyLoader() {
  return (
    <>
      <Container className="loader-container">
        <Col>
          <Row>
            <img src={CarGif} alt="LoaderGIF" />
          </Row>
        </Col>
      </Container>
    </>
  )
}
