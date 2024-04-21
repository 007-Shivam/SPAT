import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Loader.css";

import HouseGif from "../../assets/house.gif";

export default function PropertyLoader() {
  return (
    <>
      <Container className="loader-container">
        <Col>
          <Row>
            <img src={HouseGif} alt="LoaderGIF" />
          </Row>
        </Col>
      </Container>
    </>
  )
}
