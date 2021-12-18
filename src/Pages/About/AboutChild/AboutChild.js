import React from "react";
import { Button, Card, Col } from "react-bootstrap";
const AboutChild = ({ doctor }) => {
    const {displayName,image}= doctor
  return (
    <>
      <Col sm={12} md={4}>
        <Card >
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{displayName}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default AboutChild;
